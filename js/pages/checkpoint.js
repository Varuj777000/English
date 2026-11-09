// =====================================================================
// pages/checkpoint.js — контрольная проверка раз в 2 недели.
//
// Устроена почти так же, как стартовый тест (js/pages/test.js), только:
//   - вопросов меньше (около 30, ~10 минут) — банк в data/checkpoints.js;
//   - после неё пересчитывается уровень и приоритет ТОЛЬКО у тех тем,
//     что встретились в этой контрольной (см. applyCheckpointResult
//     в js/level.js) — остальные темы живут своей жизнью по занятиям;
//   - результат добавляется в progress.checkpoints — это история для
//     графика на странице прогресса.
//
// Ход контрольной хранится под ключом RUN_KEY, чтобы её можно было
// продолжить после закрытия страницы — формат такой же, как у теста.
// =====================================================================

const RUN_KEY = "english-trainer-checkpoint-run";

let run = null;
let selected = null;
const optionOrder = {};

const QUESTION_BY_ID = {};
DATA.checkpoints.forEach(function (q) { QUESTION_BY_ID[q.id] = q; });

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("next-btn").addEventListener("click", function () {
    if (selected !== null) answerCurrent(selected);
  });
  document.getElementById("dont-know-btn").addEventListener("click", function () {
    answerCurrent(null);
  });
  document.getElementById("quit-btn").addEventListener("click", quitRun);
  document.addEventListener("keydown", onKeyDown);

  run = loadRun();
  showIntro();
});

function showView(name) {
  ["intro", "question", "result"].forEach(function (v) {
    document.getElementById("view-" + v).classList.toggle("hidden", v !== name);
  });
  window.scrollTo(0, 0);
}

// ---------------------------------------------------------------------
// Вступление
// ---------------------------------------------------------------------

function showIntro() {
  const progress = loadProgress();
  const box = document.getElementById("intro-box");

  // Без стартового теста контрольная не имеет смысла — не с чем сравнивать
  if (!progress.placement) {
    box.innerHTML = '<div class="notice warn">Сначала пройдите <a href="test.html">стартовый тест</a> — ' +
      "без него не с чем будет сравнивать результат контрольной.</div>";
    showView("intro");
    return;
  }

  let html = "";

  // Когда следующая (или что контрольная просрочена)
  const due = isCheckpointDue(progress);
  const next = nextCheckpointDate(progress);
  if (!run) {
    if (due) {
      const overdue = daysBetween(next, todayStr());
      html += '<div class="notice warn">Пора пройти контрольную' +
        (overdue > 0 ? " — прошло уже " + (RULES.checkpoint.everyDays + overdue) + " дней с прошлой проверки" : "") +
        ".</div>";
    } else {
      html += '<p class="muted">Следующая контрольная — ' + formatDate(next) +
        " (через " + daysBetween(todayStr(), next) + " " + dayWord(daysBetween(todayStr(), next)) +
        "). Пройти можно и раньше, если хотите.</p>";
    }
  }

  html +=
    "<div class=\"card\"><p>Контрольная короче стартового теста — около 30 вопросов, 10–15 минут. " +
    "После неё сайт пересчитает ваш уровень и обновит план занятий по темам, которые в ней встретились.</p>";

  if (run) {
    const done = answeredCount();
    html +=
      '<div class="btn-row"><button class="btn btn-primary" id="continue-btn">Продолжить (отвечено ' + done + " из " + plannedCount() + ")</button>" +
      '<button class="btn" id="restart-btn">Начать заново</button></div>';
  } else {
    html += '<div class="btn-row"><button class="btn btn-primary" id="start-btn">' +
      (due ? "Пройти контрольную" : "Пройти сейчас") + "</button></div>";
  }
  html += "</div>";

  // Последние результаты
  if (progress.checkpoints.length) {
    html += "<h2>Прошлые контрольные</h2><div class=\"card\">";
    progress.checkpoints.slice(-5).reverse().forEach(function (c) {
      const pct = c.answered ? Math.round(c.correct / c.answered * 100) : 0;
      html += '<div class="checkpoint-row"><span class="muted small">' + formatDate(c.date) + "</span>" +
        '<span class="badge ' + c.level + '">' + c.level + "</span>" +
        '<span class="muted small">' + c.correct + "/" + c.answered + " (" + pct + "%)</span></div>";
    });
    html += "</div>";
  }

  box.innerHTML = html;

  if (run) {
    document.getElementById("continue-btn").addEventListener("click", showQuestion);
    document.getElementById("restart-btn").addEventListener("click", function () {
      if (confirm("Начать контрольную заново? Текущие ответы будут удалены.")) startNewRun();
    });
  } else {
    document.getElementById("start-btn").addEventListener("click", startNewRun);
  }

  showView("intro");
}

// ---------------------------------------------------------------------
// Прохождение (логика такая же, как в стартовом тесте)
// ---------------------------------------------------------------------

// Банк вопросов (data/checkpoints.js) намного больше, чем нужно для одной
// контрольной — на каждый раз выбираем случайную часть, предпочитая
// вопросы, которых не было ни в одной из ваших прошлых контрольных
// (askedIds в progress.checkpoints). Раздел «Чтение» выбирается ЦЕЛЫМИ
// текстами (иначе можно было бы увидеть один вопрос текста, а другой —
// от другого текста, что бессмысленно).
function buildFlow() {
  const R = RULES.checkpoint;
  const progress = loadProgress();
  const seenIds = new Set();
  progress.checkpoints.forEach(function (c) { (c.askedIds || []).forEach(function (id) { seenIds.add(id); }); });

  const flow = [];
  Object.keys(TEST_SECTIONS).forEach(function (section) {
    LEVELS.forEach(function (level) {
      if (section === "reading") {
        // Группируем вопросы по тексту и берём текст(ы) целиком
        const byPassage = {};
        DATA.checkpoints.filter(function (q) { return q.section === "reading" && q.level === level; })
          .forEach(function (q) { (byPassage[q.passage] = byPassage[q.passage] || []).push(q); });
        const passageIds = Object.keys(byPassage);
        if (passageIds.length === 0) return;
        // Текст считается «невиденным», если ни один его вопрос вам раньше не задавали
        const isUnseen = function (pid) { return byPassage[pid].every(function (q) { return !seenIds.has(q.id); }); };
        pickPreferUnseen(passageIds, R.readingPassagesPerLevel, isUnseen)
          .forEach(function (pid) { byPassage[pid].forEach(function (q) { flow.push(q.id); }); });
      } else {
        const pool = DATA.checkpoints.filter(function (q) { return q.section === section && q.level === level; });
        if (pool.length === 0) return;
        const ids = pool.map(function (q) { return q.id; });
        pickPreferUnseen(ids, R.questionsPerLevel[section], function (id) { return !seenIds.has(id); })
          .forEach(function (id) { flow.push(id); });
      }
    });
  });
  return flow;
}

// Выбрать count элементов из списка: сначала случайный порядок «невиденных»
// (isUnseen(item) === true), затем, если не хватило, случайный порядок
// «виденных» — так контрольная в первую очередь показывает новое.
function pickPreferUnseen(items, count, isUnseen) {
  const unseen = shuffle(items.filter(isUnseen));
  const seen = shuffle(items.filter(function (i) { return !isUnseen(i); }));
  return unseen.concat(seen).slice(0, count);
}

function startNewRun() {
  run = { startedAt: new Date().toISOString(), flow: buildFlow(), index: 0, answers: {} };
  saveRun();
  showQuestion();
}

function currentQuestion() {
  while (run.index < run.flow.length && run.answers[run.flow[run.index]]) run.index += 1;
  return run.index < run.flow.length ? QUESTION_BY_ID[run.flow[run.index]] : null;
}

function showQuestion() {
  const q = currentQuestion();
  if (!q) { finishRun(); return; }
  selected = null;

  document.getElementById("q-section").textContent = TEST_SECTIONS[q.section];
  const done = answeredCount();
  const planned = plannedCount();
  document.getElementById("q-counter").textContent = "Вопрос " + (done + 1) + " из " + planned;
  document.getElementById("q-progress").style.width = Math.round(done / planned * 100) + "%";

  const passageBox = document.getElementById("q-passage");
  const passage = q.passage ? DATA.testPassages.find(function (p) { return p.id === q.passage; }) : null;
  passageBox.innerHTML = passage
    ? '<div class="card passage"><p class="muted small">Прочитайте текст и ответьте на вопрос.</p>' +
      passage.text.map(function (p) { return "<p>" + escapeHtml(p) + "</p>"; }).join("") + "</div>"
    : "";

  document.getElementById("q-text").innerHTML = questionHtml(q.q);
  if (!optionOrder[q.id]) optionOrder[q.id] = shuffle(q.options);
  const options = optionOrder[q.id];

  const box = document.getElementById("q-options");
  box.innerHTML = options.map(function (opt, i) {
    return '<button class="option" data-i="' + i + '"><span class="option-key">' + (i + 1) + "</span>" + escapeHtml(opt) + "</button>";
  }).join("");
  box.querySelectorAll(".option").forEach(function (btn) {
    btn.addEventListener("click", function () { selectOption(Number(btn.dataset.i)); });
  });

  document.getElementById("next-btn").disabled = true;
  showView("question");
}

function selectOption(i) {
  const q = currentQuestion();
  const options = optionOrder[q.id];
  if (i < 0 || i >= options.length) return;
  selected = options[i];
  document.querySelectorAll("#q-options .option").forEach(function (btn) {
    btn.classList.toggle("selected", Number(btn.dataset.i) === i);
  });
  document.getElementById("next-btn").disabled = false;
}

function answerCurrent(chosen) {
  const q = currentQuestion();
  if (!q) return;
  run.answers[q.id] = { chosen: chosen, correct: chosen === q.answer };
  checkBlockStop(q);
  run.index += 1;
  saveRun();
  showQuestion();
}

function checkBlockStop(q) {
  const block = run.flow.map(function (id) { return QUESTION_BY_ID[id]; }).filter(function (x) {
    return x.section === q.section && x.level === q.level;
  });
  const finished = block.every(function (x) { return run.answers[x.id]; });
  if (!finished) return;

  const correct = block.filter(function (x) { return run.answers[x.id].correct; }).length;
  if (correct / block.length >= RULES.placement.stopBlockBelow) return;

  run.flow.forEach(function (id) {
    const x = QUESTION_BY_ID[id];
    if (x.section === q.section && levelIndex(x.level) > levelIndex(q.level) && !run.answers[id]) {
      run.answers[id] = { chosen: null, correct: false, skipped: true };
    }
  });
}

function finishRun() {
  const result = evaluateTest(DATA.checkpoints, run.answers);
  result.minutes = Math.max(1, Math.round((Date.now() - Date.parse(run.startedAt)) / 60000));
  // Вопросы, на которые вы реально ответили (без пропущенных по адаптивности) —
  // чтобы в следующий раз в первую очередь показать то, чего вы ещё не видели.
  result.askedIds = Object.keys(run.answers).filter(function (id) { return !run.answers[id].skipped; });

  const progress = loadProgress();
  const previousLevel = applyCheckpointResult(progress, result);
  saveProgress(progress);

  clearRun();
  showResult(result, previousLevel);
}

function quitRun() {
  if (!confirm("Прервать контрольную? Ответы этого прохождения будут удалены.")) return;
  clearRun();
  showIntro();
}

function onKeyDown(e) {
  if (document.getElementById("view-question").classList.contains("hidden")) return;
  if (e.key >= "1" && e.key <= "9") {
    selectOption(Number(e.key) - 1);
  } else if (e.key === "Enter" && selected !== null) {
    e.preventDefault();
    answerCurrent(selected);
  }
}

function answeredCount() {
  return Object.keys(run.answers).filter(function (id) { return !run.answers[id].skipped; }).length;
}

function plannedCount() {
  return run.flow.filter(function (id) {
    return !(run.answers[id] && run.answers[id].skipped);
  }).length;
}

function loadRun() {
  try {
    const saved = JSON.parse(localStorage.getItem(RUN_KEY));
    if (!saved || !Array.isArray(saved.flow)) return null;
    saved.flow = saved.flow.filter(function (id) { return QUESTION_BY_ID[id]; });
    return saved;
  } catch (e) {
    return null;
  }
}

function saveRun() { localStorage.setItem(RUN_KEY, JSON.stringify(run)); }
function clearRun() { localStorage.removeItem(RUN_KEY); run = null; }

// ---------------------------------------------------------------------
// Результат
// ---------------------------------------------------------------------

function showResult(result, previousLevel) {
  const info = LEVEL_INFO[result.level];
  let html = "<h1>Результат контрольной</h1>";

  // Изменение уровня
  let levelChange = "";
  if (previousLevel && previousLevel !== result.level) {
    const up = levelIndex(result.level) > levelIndex(previousLevel);
    levelChange = '<p class="' + (up ? "trend up" : "trend down") + '">' +
      (up ? "▲ Уровень вырос: " : "▼ Уровень понизился: ") +
      '<span class="badge ' + previousLevel + '">' + previousLevel + "</span> → " +
      '<span class="badge ' + result.level + '">' + result.level + "</span></p>";
  } else if (previousLevel) {
    levelChange = '<p class="muted">Уровень подтверждён: остаётся <span class="badge ' + result.level + '">' + result.level + "</span></p>";
  }

  html +=
    '<div class="card level-hero">' +
      '<div class="level-big badge ' + result.level + '">' + result.level + "</div>" +
      "<div>" +
        "<h2>" + info.name + "</h2>" +
        levelChange +
        '<p class="muted small">' + formatDate(result.date) + " · правильных: " + result.correct + " из " + result.answered +
          (result.minutes ? " · время: " + result.minutes + " мин" : "") + "</p>" +
      "</div>" +
    "</div>";

  if (result.nearNext) {
    html += '<div class="notice good">Вы близки к уровню <b>' + result.nearNext + "</b>.</div>";
  }

  // По уровням
  html += "<h2>По уровням</h2><div class=\"card\">";
  LEVELS.forEach(function (lvl) {
    const s = result.byLevel[lvl];
    if (!s || s.total === 0) return;
    const notReached = s.skipped === s.total;
    const p = percent(s);
    html +=
      '<div class="bar-row">' +
        '<span class="badge ' + lvl + '">' + lvl + "</span>" +
        '<div class="bar"><div class="bar-fill ' + barClass(p) + '" style="width:' + (notReached ? 0 : p) + '%"></div></div>' +
        '<span class="bar-value">' + (notReached ? "не дошли" : p + "%") + "</span>" +
      "</div>";
  });
  html += "</div>";

  // Темы, встретившиеся в этой контрольной
  if (result.weakTopics.length) {
    html += "<h2>Стоит повторить</h2><p class=\"muted\">Эти темы встретились в контрольной с ошибками — " +
      "их приоритет в занятиях повышен.</p>" + topicListHtml(result.weakTopics);
  }
  if (result.strongTopics.length) {
    html += "<h2>Подтвердили знание</h2>" + topicListHtml(result.strongTopics);
  }
  html += '<p class="muted small">Полный список слабых и сильных тем (включая те, что не попали в эту ' +
    'короткую контрольную) — на <a href="progress.html">странице прогресса</a>.</p>';

  // Разбор ошибок
  const mistakes = result.mistakes.filter(function (m) { return QUESTION_BY_ID[m.id]; });
  if (mistakes.length) {
    html += '<h2>Разбор ошибок</h2><details class="topic"><summary><span class="topic-title">Показать ошибки (' +
      mistakes.length + ")</span></summary><div class=\"topic-body\">" + mistakes.map(mistakeHtml).join("") + "</div></details>";
  }

  html +=
    '<div class="btn-row" style="margin-top:24px">' +
      '<a class="btn btn-primary" href="progress.html">Страница прогресса</a>' +
      '<a class="btn" href="lesson.html">К занятию</a>' +
      '<button class="btn" id="retake-btn">Пройти ещё раз</button>' +
    "</div>";

  const view = document.getElementById("view-result");
  view.innerHTML = html;
  document.getElementById("retake-btn").addEventListener("click", function () {
    if (confirm("Пройти контрольную ещё раз? Уровень и приоритет затронутых тем пересчитаются заново.")) startNewRun();
  });
  showView("result");
}

// Одна ошибка в разборе (тот же формат, что на странице теста)
function mistakeHtml(m) {
  const q = QUESTION_BY_ID[m.id];
  const topic = findTopic(q.topic);
  return (
    '<div class="mistake">' +
      '<p class="question">' + (q.passage ? '<span class="muted small">(вопрос к тексту) </span>' : "") + questionHtml(q.q) + "</p>" +
      '<p class="small">Ваш ответ: <span class="wrong">' + (m.chosen === null ? "не знаю" : escapeHtml(m.chosen)) + "</span>" +
      ' · Правильно: <span class="right">' + escapeHtml(q.answer) + "</span></p>" +
      (q.explain ? '<p class="small muted">' + escapeHtml(q.explain) + "</p>" : "") +
      (topic && topic.category !== "reading" ? '<p class="small"><a href="topics.html#' + topic.id + '">Правило: ' + escapeHtml(topic.title) + "</a></p>" : "") +
    "</div>"
  );
}

