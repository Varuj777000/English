// =====================================================================
// pages/progress.js — страница прогресса: уровень, график по контрольным,
// сильные/слабые темы, серия дней, статистика по словам.
//
// Страница только читает прогресс и ничего не пересчитывает — все цифры
// уже посчитаны раньше (тестом, занятиями, контрольными, повторением слов).
// =====================================================================

document.addEventListener("DOMContentLoaded", function () {
  const progress = loadProgress();
  const box = document.getElementById("content");

  if (!progress.level) {
    box.innerHTML =
      '<div class="notice">Чтобы увидеть прогресс, сначала пройдите <a href="test.html">стартовый тест</a>.</div>';
    return;
  }

  box.innerHTML =
    levelSectionHtml(progress) +
    chartSectionHtml(progress) +
    activitySectionHtml(progress) +
    dynamicsSectionHtml(progress) +
    wordsSectionHtml(progress) +
    topicsSectionHtml(progress) +
    checkpointsSectionHtml(progress);

  // График рисуется отдельно — это SVG, а не просто HTML-строка
  renderLevelChart(document.getElementById("level-chart"), chartPoints(progress));
});

// ---------- Уровень ----------

function levelSectionHtml(progress) {
  const info = LEVEL_INFO[progress.level];
  const due = isCheckpointDue(progress);
  const next = nextCheckpointDate(progress);

  let checkpointNote;
  if (due) {
    checkpointNote = '<p class="notice warn" style="margin-top:12px">Пора пройти контрольную. ' +
      '<a href="checkpoint.html">Пройти сейчас</a></p>';
  } else if (next) {
    checkpointNote = '<p class="muted small" style="margin-top:12px">Следующая контрольная — ' + formatDate(next) + ".</p>";
  } else {
    checkpointNote = "";
  }

  return (
    '<div class="card level-hero">' +
      '<div class="level-big badge ' + progress.level + '">' + progress.level + "</div>" +
      "<div>" +
        "<h2>" + info.name + "</h2>" +
        "<p>" + info.text + "</p>" +
        checkpointNote +
      "</div>" +
    "</div>"
  );
}

// ---------- График по контрольным ----------

// Точки для графика: стартовый тест + все контрольные, по возрастанию даты
function chartPoints(progress) {
  const points = [];
  if (progress.placement) points.push({ date: progress.placement.date, level: progress.placement.level });
  progress.checkpoints.forEach(function (c) { points.push({ date: c.date, level: c.level }); });
  return points;
}

function chartSectionHtml() {
  return "<h2>Уровень по контрольным</h2><div class=\"card\"><div id=\"level-chart\"></div></div>";
}

// ---------- Серия дней и активность ----------

function activitySectionHtml(progress) {
  const totalLessons = progress.lessons.length;
  let totalExercises = 0, totalCorrect = 0;
  progress.lessons.forEach(function (l) { totalExercises += l.total; totalCorrect += l.correct; });
  const accuracy = totalExercises ? Math.round(totalCorrect / totalExercises * 100) : 0;
  const daysActive = Object.keys(progress.activity).length;

  return (
    "<h2>Занятия</h2>" +
    '<div class="grid">' +
      stat(currentStreak(progress), dayWord(currentStreak(progress)) + " подряд сейчас") +
      stat(progress.streak.best, dayWord(progress.streak.best) + " — лучшая серия") +
      stat(totalLessons, pluralRu(totalLessons, "занятие пройдено", "занятия пройдено", "занятий пройдено")) +
      stat(daysActive, dayWord(daysActive) + " с занятиями") +
      stat(totalExercises, pluralRu(totalExercises, "упражнение сделано", "упражнения сделано", "упражнений сделано")) +
      stat(accuracy + "%", "точность ответов") +
    "</div>"
  );
}

// ---------- Динамика: неделя к неделе, активность по дням, темы ----------

// Суммы по дням из progress.activity за период [fromOffset .. toOffset] дней назад
// (0 = сегодня): { tasks, exercises, correct, days }
function activityRange(progress, fromOffset, toOffset) {
  const sum = { tasks: 0, exercises: 0, correct: 0, days: 0 };
  for (let i = fromOffset; i <= toOffset; i++) {
    const a = progress.activity[addDays(todayStr(), -i)];
    if (!a) continue;
    const tasks = a.exercises + (a.words || 0);
    if (tasks > 0) sum.days += 1;
    sum.tasks += tasks;
    sum.exercises += a.exercises;
    sum.correct += a.correct || 0;
  }
  return sum;
}

// Подпись изменения: ▲ +8 / ▼ −3 / без изменений
function deltaHtml(now, before, suffix) {
  if (before === null || now === null || (now === 0 && before === 0)) return "";
  const d = now - before;
  if (d === 0) return ' <span class="trend">без изменений</span>';
  return ' <span class="trend ' + (d > 0 ? "up" : "down") + '">' + (d > 0 ? "▲ +" : "▼ −") + Math.abs(d) + suffix + "</span>";
}

function dynamicsSectionHtml(progress) {
  const thisWeek = activityRange(progress, 0, 6);
  const prevWeek = activityRange(progress, 7, 13);
  const accNow = thisWeek.exercises ? Math.round(thisWeek.correct / thisWeek.exercises * 100) : null;
  const accPrev = prevWeek.exercises ? Math.round(prevWeek.correct / prevWeek.exercises * 100) : null;

  let html = "<h2>Динамика</h2>" +
    '<div class="grid">' +
      stat(thisWeek.tasks + deltaHtml(thisWeek.tasks, prevWeek.tasks, ""), "заданий за 7 дней (прошлые 7: " + prevWeek.tasks + ")") +
      stat(accNow === null ? "—" : accNow + "%" + deltaHtml(accNow, accPrev, "%"),
        "точность за 7 дней" + (accPrev === null ? "" : " (прошлые 7: " + accPrev + "%)")) +
      stat(thisWeek.days + " из 7", "дней с занятиями (прошлые 7: " + prevWeek.days + ")") +
    "</div>";

  // Столбики: задания по дням за последние 14 дней
  const days = [];
  let max = 1;
  for (let i = 13; i >= 0; i--) {
    const date = addDays(todayStr(), -i);
    const a = progress.activity[date];
    const tasks = a ? a.exercises + (a.words || 0) : 0;
    if (tasks > max) max = tasks;
    days.push({ date: date, tasks: tasks, today: i === 0 });
  }
  html += '<div class="card"><h3>Задания по дням, последние 14 дней</h3><div class="day-bars">' + days.map(function (d) {
    const h = d.tasks ? Math.max(6, Math.round(d.tasks / max * 100)) : 2;
    return '<div class="day-bar' + (d.today ? " today" : "") + '" title="' + formatDate(d.date) + ": " + d.tasks + '">' +
      '<span class="day-val">' + (d.tasks || "") + '</span><i style="height:' + h + '%"></i>' +
      '<span class="day-lbl">' + Number(d.date.split("-")[2]) + "</span></div>";
  }).join("") + "</div></div>";

  html += topicChangesHtml(progress);
  return html;
}

// Темы, которые заметно сдвинулись с прошлого снимка (≥ 5 дней назад)
function topicChangesHtml(progress) {
  const snaps = (progress.topicSnapshots || []).filter(function (s) { return daysBetween(s.date, todayStr()) >= 5; });
  if (snaps.length === 0) {
    return '<p class="muted small">Сравнение тем с прошлой неделей появится после недели занятий.</p>';
  }
  const base = snaps[snaps.length - 1];
  const changes = [];
  Object.keys(progress.topics).forEach(function (id) {
    const t = progress.topics[id];
    if (!t || t.attempts === 0 || base.priorities[id] === undefined || !findTopic(id)) return;
    const delta = Math.round(t.priority) - base.priorities[id]; // минус — тема стала сильнее
    if (Math.abs(delta) >= 10) changes.push({ id: id, delta: delta });
  });
  const stronger = changes.filter(function (c) { return c.delta < 0; }).sort(function (a, b) { return a.delta - b.delta; }).slice(0, 3);
  const weaker = changes.filter(function (c) { return c.delta > 0; }).sort(function (a, b) { return b.delta - a.delta; }).slice(0, 3);

  function list(items, cls, arrow) {
    return '<div class="topic-links">' + items.map(function (c) {
      const t = findTopic(c.id);
      return '<a class="topic-link" href="topics.html#' + c.id + '"><span class="badge ' + t.level + '">' + t.level + "</span> " +
        escapeHtml(t.title) + ' <span class="trend ' + cls + '">' + arrow + "</span></a>";
    }).join("") + "</div>";
  }

  let html = '<div class="card"><h3>Что изменилось с ' + formatDate(base.date) + "</h3>";
  if (!stronger.length && !weaker.length) {
    html += '<p class="muted">Заметных сдвигов по темам нет.</p>';
  } else {
    if (stronger.length) html += "<p><b>Стали сильнее:</b></p>" + list(stronger, "up", "▲");
    if (weaker.length) html += '<p style="margin-top:12px"><b>Просели, стоит повторить:</b></p>' + list(weaker, "down", "▼");
  }
  return html + "</div>";
}

// ---------- Слова ----------

function wordsSectionHtml(progress) {
  const keys = Object.keys(progress.words);
  const total = keys.length;
  const learned = keys.filter(function (k) { return progress.words[k].interval >= RULES.words.masteredInterval; }).length;
  const custom = progress.customWords.length;

  return (
    "<h2>Слова</h2>" +
    '<div class="grid">' +
      stat(total, "слов в повторении") +
      stat(learned, "выучено (интервал ≥ " + RULES.words.masteredInterval + " " + dayWord(RULES.words.masteredInterval) + ")") +
      stat(custom, "добавлено вами") +
    "</div>" +
    (total === 0 ? '<p class="muted small">Слова ещё не добавлены — загляните на <a href="words.html">страницу «Слова»</a>.</p>' : "")
  );
}

// ---------- Темы ----------

function topicsSectionHtml(progress) {
  const topics = practiceTopics(); // темы, по которым есть упражнения (из planner.js)
  const buckets = { weak: [], normal: [], mastered: [], new: [] };
  topics.forEach(function (t) {
    buckets[topicStatus(progress.topics[t.id])].push(t.id);
  });
  buckets.weak.sort(function (a, b) { return (progress.topics[b].priority) - (progress.topics[a].priority); });
  buckets.mastered.sort(byTopicNameAsc);

  let html = "<h2>Темы</h2>" +
    '<div class="topics-breakdown">' +
      '<span class="chip">Слабых: ' + buckets.weak.length + "</span>" +
      '<span class="chip">Обычных: ' + buckets.normal.length + "</span>" +
      '<span class="chip">Освоено: ' + buckets.mastered.length + "</span>" +
      '<span class="chip">Ещё не начаты: ' + buckets.new.length + "</span>" +
    "</div>";

  if (buckets.weak.length) {
    html += "<h3>Слабые темы</h3><p class=\"muted small\">Именно они чаще всего попадают в занятия.</p>" +
      topicListHtml(buckets.weak);
  } else {
    html += '<p class="notice good">Слабых тем среди изученного не найдено — отличная работа!</p>';
  }

  if (buckets.mastered.length) {
    html += "<h3>Освоенные темы</h3>" + topicListHtml(buckets.mastered);
  }

  return html;
}

function byTopicNameAsc(a, b) {
  const ta = findTopic(a), tb = findTopic(b);
  return (ta ? ta.title : "").localeCompare(tb ? tb.title : "");
}

// ---------- История контрольных ----------

function checkpointsSectionHtml(progress) {
  if (progress.checkpoints.length === 0) {
    return "<h2>Контрольные</h2><p class=\"muted\">Пока не пройдено ни одной. " +
      '<a href="checkpoint.html">Посмотреть подробнее</a></p>';
  }

  const rows = progress.checkpoints.slice().reverse().map(function (c) {
    const pct = c.answered ? Math.round(c.correct / c.answered * 100) : 0;
    return (
      '<div class="checkpoint-row">' +
        '<span class="muted small">' + formatDate(c.date) + "</span>" +
        '<span class="badge ' + c.level + '">' + c.level + "</span>" +
        '<span class="muted small">' + c.correct + "/" + c.answered + " (" + pct + "%)</span>" +
        (c.weakTopics.length ? '<span class="muted small">слабых тем: ' + c.weakTopics.length + "</span>" : "") +
      "</div>"
    );
  }).join("");

  return "<h2>История контрольных</h2><div class=\"card\">" + rows + "</div>";
}

// ---------- Помощник ----------

function stat(value, label) {
  return '<div class="stat"><div class="value">' + value + '</div><div class="label">' + label + "</div></div>";
}

// Склонение по числу: 1 занятие, 2 занятия, 5 занятий
function pluralRu(n, one, few, many) {
  const n10 = n % 10, n100 = n % 100;
  if (n10 === 1 && n100 !== 11) return one;
  if (n10 >= 2 && n10 <= 4 && (n100 < 12 || n100 > 14)) return few;
  return many;
}
