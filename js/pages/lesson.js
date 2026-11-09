// =====================================================================
// pages/lesson.js — ежедневное занятие.
//
// Незаконченное занятие хранится под ключом LESSON_KEY, чтобы его можно
// было продолжить после закрытия страницы:
//   lesson = {
//     startedAt, minutes, nextLevel,
//     items: [ { kind: "word", ref, direction } | { kind: "other", ref }
//            | { kind: "exercise", id } | { kind: "reading", textId, qi }
//            | { kind: "story", storyId } ],   // мини-рассказ (js/story.js): один пункт, много пропусков
//     index: 3,                // номер текущего задания
//     results: [ { kind: "exercise", id, topic, correct, answer, disputed }
//              | { kind: "word" | "other", ref, correct, quality } ],
//     extras: 1,               // сколько заданий добавлено после ошибок
//     storyDraft: { id, answers } // черновик рассказа (введённые, но не проверенные ответы)
//     priorityBefore: { "present-perfect": 65, ... }  // для итогов: как изменились темы
//   }
// Карточки повторения (kind: "word" — слово, kind: "other" — ошибка из чата
// с Claude, для которой нет темы на сайте) показываются первыми и
// обрабатываются отдельно от упражнений — см. srs.js.
// =====================================================================

const LESSON_KEY = "english-trainer-lesson-run";
const DURATIONS = [15, 20, 30, 60]; // варианты длины занятия (минуты)

let lesson = null;

// Быстрый поиск упражнений и текстов по ID
const EXERCISE_BY_ID = {};
DATA.exercises.forEach(function (e) { EXERCISE_BY_ID[e.id] = e; });
const TEXT_BY_ID = {};
DATA.texts.forEach(function (t) { TEXT_BY_ID[t.id] = t; });
const STORY_BY_ID = {};
DATA.stories.forEach(function (s) { STORY_BY_ID[s.id] = s; });

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("stop-btn").addEventListener("click", stopLesson);
  document.addEventListener("keydown", onKeyDown);
  bindPassageWords();
  bindQuickWord();
  lesson = loadLesson();
  showStart();
});

function showView(name) {
  ["start", "exercise", "finish"].forEach(function (v) {
    document.getElementById("view-" + v).classList.toggle("hidden", v !== name);
  });
  window.scrollTo(0, 0);
}

// ---------------------------------------------------------------------
// Экран «Начало занятия»
// ---------------------------------------------------------------------

function showStart() {
  const progress = loadProgress();
  // Пополняем очередь словами из встроенного словаря сайта (см. srs.js)
  if (enrollNewWords(progress) > 0) saveProgress(progress);
  const minutes = progress.settings.minutesPerDay;
  let html = "<h1>Занятие</h1>";

  // Незаконченное занятие
  if (lesson) {
    html +=
      '<div class="card"><h3>У вас есть незаконченное занятие</h3>' +
      "<p>Выполнено " + lesson.index + " из " + lesson.items.length + ".</p>" +
      '<div class="btn-row"><button class="btn btn-primary" id="continue-btn">Продолжить</button>' +
      '<button class="btn" id="drop-btn">Начать новое</button></div></div>';
  }

  // Тест не пройден
  if (!progress.level) {
    html += '<div class="notice warn">Вы ещё не прошли стартовый тест. Без него занятия начнутся с уровня A1. ' +
      '<a href="test.html">Пройти тест</a></div>';
  } else if (isCheckpointDue(progress)) {
    html += '<div class="notice warn">Пора пройти контрольную проверку — она пересчитает уровень и план занятий. ' +
      '<a href="checkpoint.html">Пройти сейчас</a></div>';
  }

  // Сегодняшняя активность
  const today = progress.activity[todayStr()];
  if (today && today.exercises > 0) {
    html += '<div class="notice good">Сегодня вы уже сделали упражнений: <b>' + today.exercises +
      "</b>. Можно ещё!</div>";
  }

  // Длина занятия
  html += '<div class="card"><h3>Сколько у вас времени?</h3><div class="chips" id="duration">';
  DURATIONS.forEach(function (m) {
    html += '<button class="chip' + (m === minutes ? " active" : "") + '" data-min="' + m + '">' + m + " мин</button>";
  });
  html += '</div><p class="muted small" id="duration-note"></p>';

  // Что в фокусе
  const focus = focusTopics(progress, 4);
  if (focus.length) {
    html += "<p><b>В фокусе — слабые темы:</b></p>" + topicChips(focus);
  }
  if (isNextLevelUnlocked(progress) && progress.level) {
    const next = LEVELS[levelIndex(progress.level) + 1];
    html += '<div class="notice good" style="margin-top:12px">На уровне ' + progress.level +
      " почти не осталось слабых тем — в занятия добавлены задания уровня <b>" + next + "</b>.</div>";
  }
  const warmupCount = buildWarmup(progress).items.length;
  html += '<div class="btn-row"><button class="btn btn-primary" id="start-btn">Начать занятие</button>' +
    '<button class="btn" id="warmup-btn"' + (warmupCount ? "" : " disabled") + ' title="Только повторение слов и ошибок, без новых тем">Разминка · ' +
    RULES.warmup.minutes + " мин</button></div>" +
    '<p class="muted small" id="warmup-note" style="margin:8px 0 0">' +
    (warmupCount
      ? "Разминка: " + warmupCount + " " + cardWord(warmupCount) + " на повторение, без новых тем."
      : "Разминка: сегодня повторять нечего.") + "</p></div>";

  const view = document.getElementById("view-start");
  view.innerHTML = html;

  updateDurationNote(minutes);
  view.querySelectorAll("#duration .chip").forEach(function (chip) {
    chip.addEventListener("click", function () {
      const p = loadProgress();
      p.settings.minutesPerDay = Number(chip.dataset.min);
      saveProgress(p);
      view.querySelectorAll("#duration .chip").forEach(function (c) { c.classList.toggle("active", c === chip); });
      updateDurationNote(p.settings.minutesPerDay);
    });
  });

  document.getElementById("start-btn").addEventListener("click", function () {
    if (lesson && !confirm("Незаконченное занятие будет сброшено. Начать новое?")) return;
    startLesson();
  });
  document.getElementById("warmup-btn").addEventListener("click", function () {
    if (lesson && !confirm("Незаконченное занятие будет сброшено. Начать разминку?")) return;
    startWarmup();
  });
  if (lesson) {
    document.getElementById("continue-btn").addEventListener("click", showExercise);
    document.getElementById("drop-btn").addEventListener("click", function () {
      clearLesson();
      startLesson();
    });
  }
  showView("start");
}

function updateDurationNote(minutes) {
  const progress = loadProgress();
  const dueWords = Math.min(wordCountForMinutes(minutes), dueWordKeys(progress).length);
  const wordsNote = dueWords > 0 ? ", слов на повторение: " + dueWords : "";
  document.getElementById("duration-note").textContent =
    "≈ " + lessonExerciseCount(minutes) + " упражнений" + wordsNote + ".";
}

function topicChips(ids) {
  return '<div class="topic-links">' + ids.map(function (id) {
    const t = findTopic(id);
    return '<a class="topic-link" href="topics.html#' + id + '"><span class="badge ' + t.level + '">' + t.level +
      "</span> " + escapeHtml(t.title) + "</a>";
  }).join("") + "</div>";
}

// ---------------------------------------------------------------------
// Ход занятия
// ---------------------------------------------------------------------

function startLesson() {
  const progress = loadProgress();
  beginLesson(buildLesson(progress, progress.settings.minutesPerDay), progress.settings.minutesPerDay, false);
}

// Разминка: только повторение (см. buildWarmup в planner.js)
function startWarmup() {
  const progress = loadProgress();
  const plan = buildWarmup(progress);
  if (plan.items.length === 0) {
    document.getElementById("warmup-note").textContent = "Сегодня повторять нечего — можно начать обычное занятие.";
    return;
  }
  beginLesson(plan, RULES.warmup.minutes, true);
}

function beginLesson(plan, minutes, isWarmup) {
  const progress = loadProgress();
  if (plan.items.length === 0) {
    alert("Не удалось подобрать упражнения. Проверьте, что файлы с упражнениями подключены.");
    return;
  }

  // Запоминаем приоритеты тем до занятия — чтобы показать изменения в итогах
  // (у карточек повторения — слов и «Другого» — темы нет, их пропускаем)
  const priorityBefore = {};
  plan.items.forEach(function (it) {
    if (it.kind === "word" || it.kind === "other") return;
    const topics = it.kind === "story"
      ? STORY_BY_ID[it.storyId].gaps.map(function (g) { return g.topic; })
      : [resolveItem(it).topic];
    topics.forEach(function (topic) {
      const stats = progress.topics[topic];
      priorityBefore[topic] = stats ? stats.priority : RULES.priority.start;
    });
  });

  lesson = {
    startedAt: new Date().toISOString(),
    minutes: minutes,
    warmup: !!isWarmup,
    nextLevel: plan.nextLevel,
    items: plan.items,
    index: 0,
    results: [],
    extras: 0,
    priorityBefore: priorityBefore
  };
  saveLesson();
  showExercise();
}

// Превратить пункт плана в упражнение (для чтения — вопрос + текст)
function resolveItem(item) {
  if (item.kind === "reading") {
    const text = TEXT_BY_ID[item.textId];
    const q = text.questions[item.qi];
    return Object.assign({}, q, {
      id: text.id + "#" + item.qi,
      topic: "reading",
      isReading: true,
      text: text
    });
  }
  return EXERCISE_BY_ID[item.id];
}

function showExercise() {
  // Пропускаем пункты, которых больше нет в данных (например, после обновления сайта)
  while (lesson.index < lesson.items.length && !itemExists(lesson.items[lesson.index])) lesson.index += 1;
  if (lesson.index >= lesson.items.length) {
    finishLesson();
    return;
  }

  const item = lesson.items[lesson.index];
  closeQuickWord();
  document.getElementById("ex-counter").textContent = (lesson.index + 1) + " из " + lesson.items.length;
  document.getElementById("ex-progress").style.width = Math.round(lesson.index / lesson.items.length * 100) + "%";

  if (item.kind === "word" || item.kind === "other") {
    showReviewCard(item);
  } else if (item.kind === "story") {
    showStoryItem(item);
  } else {
    showExerciseItem(item);
  }
  showView("exercise");
}

// ----- Карточка слова или ошибки из чата («Другое») -----
function showReviewCard(item) {
  document.getElementById("ex-topic").textContent = item.kind === "word" ? "Повторение слов" : "Работа над ошибками";
  document.getElementById("ex-rule").innerHTML = "";
  document.getElementById("ex-passage").innerHTML = "";

  const progress = loadProgress();
  renderReviewCard(document.getElementById("ex-card"), progress, item, function (result) {
    onReviewAnswered(item, result);
  });
}

// ----- Мини-рассказ с рамкой глаголов (js/story.js) -----
function showStoryItem(item) {
  const story = STORY_BY_ID[item.storyId];
  document.getElementById("ex-topic").innerHTML =
    '<span class="badge ' + story.level + '">' + story.level + "</span> Рассказ с рамкой глаголов";
  document.getElementById("ex-rule").innerHTML = "";
  document.getElementById("ex-passage").innerHTML = "";
  const draft = lesson.storyDraft && lesson.storyDraft.id === story.id ? lesson.storyDraft.answers : [];
  renderStory(document.getElementById("ex-card"), story, {
    draft: draft,
    onDraft: function (answers) {
      lesson.storyDraft = { id: story.id, answers: answers };
      saveLesson();
    },
    onDone: function (results) { onStoryDone(item, story, results); }
  });
}

// Результаты рассказа: каждый пропуск — как отдельное упражнение своей темы
function onStoryDone(item, story, results) {
  const progress = loadProgress();
  applyStoryResults(progress, story, results);
  saveProgress(progress);
  results.forEach(function (r) {
    lesson.results.push({
      kind: "exercise", id: story.id + "#" + r.n, topic: r.topic, storyId: story.id,
      correct: r.correct, answer: r.answer, disputed: r.disputed
    });
  });
  delete lesson.storyDraft;
  lesson.index += 1;
  saveLesson();
  showExercise();
}

// ----- Грамматическое упражнение или вопрос к тексту -----
function showExerciseItem(item) {
  const ex = resolveItem(item);
  const topic = findTopic(ex.topic);

  document.getElementById("ex-topic").innerHTML =
    '<span class="badge ' + topic.level + '">' + topic.level + "</span> " + escapeHtml(topic.title);

  // Правило: показываем в начале каждого блока темы.
  // Если тема новая (ещё ни одного ответа) — правило сразу раскрыто.
  const prevItem = lesson.index > 0 ? lesson.items[lesson.index - 1] : null;
  const prevIsReview = prevItem && (prevItem.kind === "word" || prevItem.kind === "other");
  const prev = prevItem && !prevIsReview ? resolveItem(prevItem) : null;
  const ruleBox = document.getElementById("ex-rule");
  if (topic.category !== "reading") {
    const stats = loadProgress().topics[topic.id];
    const isNew = !stats || stats.attempts === 0;
    const blockStart = !prev || prev.topic !== topic.id;
    ruleBox.innerHTML =
      '<details class="topic rule"' + (isNew && blockStart ? " open" : "") + ">" +
        '<summary><span class="topic-title">' + (isNew ? "Новая тема — прочитайте правило" : "Правило") + "</span></summary>" +
        '<div class="topic-body">' + topic.explanation.map(function (p) { return "<p>" + richText(p) + "</p>"; }).join("") +
        ((topic.examples || []).length ? '<ul class="examples">' + topic.examples.map(function (e) {
          return "<li>" + escapeHtml(e.en) + '<span class="ru">' + escapeHtml(e.ru) + "</span></li>";
        }).join("") + "</ul>" : "") +
        "</div>" +
      "</details>";
  } else {
    ruleBox.innerHTML = "";
  }

  // Текст для чтения
  document.getElementById("ex-passage").innerHTML = ex.isReading && ex.text.listen
    ? dialogueCardHtml(ex.text)
    : ex.isReading
    ? '<div class="card passage"><h3>' + escapeHtml(ex.text.title) +
      speakButtonHtml(ex.text.text.join(" "), "Прослушать весь текст") + "</h3>" +
      ex.text.text.map(function (p) { return "<p>" + readableParagraph(p) + "</p>"; }).join("") +
      '<p class="muted small">Нажмите на незнакомое слово — его можно добавить в повторение.</p>' +
      '<div class="word-add hidden" id="word-add"></div></div>'
    : "";

  renderExercise(document.getElementById("ex-card"), ex, function (result) {
    onAnswered(item, ex, result);
  });
}

function itemExists(item) {
  if (item.kind === "word") {
    const p = loadProgress();
    return !!p.words[item.ref] && !!wordByKey(p, item.ref);
  }
  if (item.kind === "other") {
    return loadProgress().otherMistakes.some(function (m) { return m.id === item.ref; });
  }
  if (item.kind === "reading") {
    return TEXT_BY_ID[item.textId] && TEXT_BY_ID[item.textId].questions[item.qi];
  }
  if (item.kind === "story") return !!STORY_BY_ID[item.storyId];
  return !!EXERCISE_BY_ID[item.id];
}

// Сохранить ответ: статистика упражнения, темы, активность дня
function onAnswered(item, ex, result) {
  const progress = loadProgress();
  const today = todayStr();

  // Упражнение
  const rec = progress.exercises[ex.id] || (progress.exercises[ex.id] = { lastSeen: today, right: 0, wrong: 0, lastCorrect: false });
  rec.lastSeen = today;
  rec.lastCorrect = result.correct;
  if (result.correct) rec.right += 1;
  else rec.wrong += 1;

  // Работа над ошибками: ошибка — вернуть через 1 день, каждый верный ответ
  // после неё сдвигает на 3 и 7 дней, потом упражнение «отпускается».
  // Спорный ответ расписание не трогает. Вопросы к текстам не планируем.
  if (!ex.isReading && !result.disputed) {
    const steps = RULES.lesson.mistakeIntervals;
    if (!result.correct) {
      rec.step = 0;
      rec.again = addDays(today, steps[0]);
    } else if (rec.again) {
      rec.step = (rec.step || 0) + 1;
      if (rec.step >= steps.length) { delete rec.again; delete rec.step; }
      else rec.again = addDays(today, steps[rec.step]);
    }
  }

  // Тема. Спорный ответ приоритет темы не меняет, но сохраняется в список спорных.
  if (result.disputed) {
    progress.disputed.push({ kind: "exercise", id: ex.id, answer: result.answer, date: today });
  } else {
    applyAnswerToTopic(getTopicStats(progress, ex.topic), result.correct);
  }

  // Текст для чтения
  if (ex.isReading) {
    const t = progress.texts[ex.text.id];
    if (!t || t.lastSeen !== today) progress.texts[ex.text.id] = { lastSeen: today, correct: 0, total: 0 };
    progress.texts[ex.text.id].total += 1;
    if (result.correct) progress.texts[ex.text.id].correct += 1;
  }

  recordActivity(progress, { exercises: 1, correct: result.correct ? 1 : 0 });

  // После ошибки — добавить в конец другое упражнение той же темы
  // (в разминке не добавляем: она должна уложиться в свои минуты)
  if (!result.correct && !ex.isReading && !lesson.warmup && RULES.lesson.retryWrong && lesson.extras < RULES.lesson.maxRetryExtra) {
    const usedIds = lesson.items.filter(function (it) { return it.kind === "exercise"; }).map(function (it) { return it.id; });
    const retryId = pickRetryExercise(progress, ex.topic, usedIds);
    if (retryId) {
      lesson.items.push({ kind: "exercise", id: retryId, retry: true });
      lesson.extras += 1;
    }
  }

  saveProgress(progress);

  lesson.results.push({
    kind: "exercise", id: ex.id, topic: ex.topic,
    correct: result.correct, answer: result.answer, disputed: result.disputed
  });
  lesson.index += 1;
  saveLesson();
  showExercise();
}

// Сохранить ответ по карточке слова или «Другое»: применить SM-2, отметить активность дня
function onReviewAnswered(item, result) {
  const progress = loadProgress();

  // alreadyApplied — оценку уже применили сами (кнопка «Уже знаю»,
  // см. markWordKnown в srs.js), повторно применять не нужно.
  if (!result.skippedMissing && !result.alreadyApplied) gradeReviewItem(progress, item, result.quality);
  recordActivity(progress, { words: 1 });

  // «Мой ответ тоже верный» на карточке слова — сохраняем, как и у упражнений
  if (result.disputed) {
    const word = wordByKey(progress, item.ref);
    progress.disputed.push({
      kind: "word", ref: item.ref,
      wordEn: word ? word.en : item.ref, wordRu: word ? word.ru : "",
      answer: result.answer, date: todayStr()
    });
  }

  saveProgress(progress);

  lesson.results.push({ kind: item.kind, ref: item.ref, correct: result.correct, quality: result.quality });
  lesson.index += 1;
  saveLesson();
  showExercise();
}

function stopLesson() {
  if (lesson.results.length === 0) {
    if (confirm("Закончить занятие? Вы ещё не ответили ни на одно задание.")) {
      clearLesson();
      showStart();
    }
    return;
  }
  if (confirm("Закончить занятие сейчас? Все ваши ответы уже сохранены.")) finishLesson();
}

// ---------------------------------------------------------------------
// Итоги
// ---------------------------------------------------------------------

function finishLesson() {
  const progress = loadProgress();
  const results = lesson.results;
  const exResults = results.filter(function (r) { return r.kind === "exercise"; });
  const reviewResults = results.filter(function (r) { return r.kind !== "exercise"; });
  const correct = exResults.filter(function (r) { return r.correct; }).length;
  const minutes = Math.max(1, Math.round((Date.now() - Date.parse(lesson.startedAt)) / 60000));

  let autoBackedUp = false;
  if (results.length > 0) {
    progress.lessons.push({
      date: todayStr(), minutes: minutes, warmup: !!lesson.warmup,
      total: exResults.length, correct: correct, words: reviewResults.length,
      stories: exResults.map(function (r) { return r.storyId; }).filter(function (id, i, a) { return id && a.indexOf(id) === i; })
    });
    saveTopicSnapshot(progress); // для динамики тем на странице «Прогресс»
    autoBackedUp = maybeAutoBackup(progress); // автокопия раз в несколько дней (storage.js)
    saveProgress(progress);
  }

  const finished = lesson;
  finished.autoBackedUp = autoBackedUp;
  clearLesson();
  showFinish(finished, progress, correct, minutes);
}

function showFinish(done, progress, correct, minutes) {
  const results = done.results.filter(function (r) { return r.kind === "exercise"; });
  const reviewResults = done.results.filter(function (r) { return r.kind !== "exercise"; });
  const total = results.length;
  const pct = total ? Math.round(correct / total * 100) : 0;
  const streak = currentStreak(progress);

  let html = "<h1>Занятие завершено!</h1>";
  html += '<div class="grid">' +
    (total ? stat(correct + " / " + total, "правильных ответов (" + pct + "%)") : "") +
    (reviewResults.length ? stat(String(reviewResults.length), "карточек повторено") : "") +
    stat(minutes + " мин", "время занятия") +
    stat(streak, dayWord(streak) + " подряд") +
    "</div>";

  html += hardAndTomorrowHtml(done, progress);

  if (done.autoBackedUp) {
    html += '<div class="notice good">Резервная копия прогресса скачана в папку «Загрузки». ' +
      '<a href="settings.html">Настройки копии</a></div>';
  }

  // По темам
  const byTopic = {};
  results.forEach(function (r) {
    const s = byTopic[r.topic] || (byTopic[r.topic] = { correct: 0, total: 0 });
    s.total += 1;
    if (r.correct) s.correct += 1;
  });

  if (Object.keys(byTopic).length) {
    html += '<h2>По темам</h2><div class="card">';
    Object.keys(byTopic).forEach(function (id) {
      const t = findTopic(id);
      const s = byTopic[id];
      const stats = progress.topics[id];
      const before = done.priorityBefore[id];
      const after = stats ? stats.priority : before;
      let trend = "";
      if (before !== undefined && after < before) trend = '<span class="trend up" title="Тема стала сильнее">▲ сильнее</span>';
      else if (before !== undefined && after > before) trend = '<span class="trend down" title="Тема требует внимания">▼ повторить</span>';
      html += '<div class="topic-result">' +
        '<a href="topics.html#' + id + '"><span class="badge ' + t.level + '">' + t.level + "</span> " + escapeHtml(t.title) + "</a>" +
        '<span class="muted">' + s.correct + " / " + s.total + "</span>" + trend +
        "</div>";
    });
    html += "</div>";
  }

  // Ошибки
  const mistakes = results.filter(function (r) { return !r.correct; });
  if (mistakes.length) {
    html += "<h2>Ошибки</h2><div class=\"card\">" + mistakes.map(function (r) {
      const ex = findExerciseForSummary(r.id);
      if (!ex) return "";
      const right = ex.type === "choice" ? ex.answer : ex.answers[0];
      return '<div class="mistake">' +
        '<p class="question">' + questionHtml(ex.q) + "</p>" +
        '<p class="small">' + (r.answer ? 'Ваш ответ: <span class="wrong">' + escapeHtml(r.answer) + "</span> · " : "") +
        'Правильно: <span class="right">' + escapeHtml(right) + "</span></p>" +
        (ex.explain ? '<p class="small muted">' + richText(ex.explain) + "</p>" : "") +
        "</div>";
    }).join("") + "</div>";
  }

  const scheduled = mistakes.filter(function (r) { return !!EXERCISE_BY_ID[r.id] && !r.disputed; }).length;
  if (scheduled) {
    const steps = RULES.lesson.mistakeIntervals;
    html += '<div class="notice">Ошибок, которые вернутся на повторение: <b>' + scheduled +
      "</b> — через " + steps.join(", ") + " " + dayWord(steps[steps.length - 1]) + ".</div>";
  }

  const disputed = results.filter(function (r) { return r.disputed; });
  if (disputed.length) {
    html += '<div class="notice">Спорных ответов: ' + disputed.length +
      ". Они сохранены — их можно будет посмотреть в настройках и при желании показать Claude.</div>";
  }

  html += '<div class="btn-row">' +
    '<button class="btn btn-primary" id="again-btn">Ещё одно занятие</button>' +
    '<a class="btn" href="index.html">На главную</a></div>';

  const view = document.getElementById("view-finish");
  view.innerHTML = html;
  document.getElementById("again-btn").addEventListener("click", startLesson);
  showView("finish");
}

function findExerciseForSummary(id) {
  if (EXERCISE_BY_ID[id]) return EXERCISE_BY_ID[id];
  const parts = id.split("#"); // вопрос к тексту: "read-a1-001#2"; пропуск рассказа: "story-past-001#3"
  const text = TEXT_BY_ID[parts[0]];
  if (text) return text.questions[Number(parts[1])];
  const story = STORY_BY_ID[parts[0]];
  const gap = story && story.gaps[Number(parts[1]) - 1];
  return gap ? { type: "fill", q: storyGapQuestion(story, gap.n), answers: gap.answers, explain: gap.explain } : null;
}

function stat(value, label) {
  return '<div class="stat"><div class="value">' + value + '</div><div class="label">' + label + "</div></div>";
}

// ---------------------------------------------------------------------
// Клавиатура: 1–4 — выбор варианта. Enter работает сам (кнопки получают фокус).
// ---------------------------------------------------------------------

function onKeyDown(e) {
  if (document.getElementById("view-exercise").classList.contains("hidden")) return;
  if (e.target.tagName === "INPUT") return; // человек печатает ответ
  if (e.key >= "1" && e.key <= "9") {
    const options = document.querySelectorAll("#ex-card .option");
    const btn = options[Number(e.key) - 1];
    if (btn && !btn.disabled) btn.click();
  }
}

// ---------- Сохранение незаконченного занятия ----------

function loadLesson() {
  try {
    const saved = JSON.parse(localStorage.getItem(LESSON_KEY));
    return saved && Array.isArray(saved.items) ? saved : null;
  } catch (e) {
    return null;
  }
}

function saveLesson() {
  localStorage.setItem(LESSON_KEY, JSON.stringify(lesson));
}

function clearLesson() {
  localStorage.removeItem(LESSON_KEY);
  lesson = null;
}

// ---------------------------------------------------------------------
// Слова из текста для чтения: нажали на слово → добавить его в повторение.
// Слово из словаря сайта (или его простая форма: works → work) ставится
// в очередь как есть; незнакомое слово — с вашим переводом и предложением
// из текста в качестве примера (addCustomWord, source: "text").
// ---------------------------------------------------------------------

// Абзац текста с обёрнутыми в <span> словами. Режем по сырому тексту и
// экранируем каждый кусок отдельно, чтобы не задеть &quot; и подобное.
function readableParagraph(text) {
  return String(text).split(/([A-Za-z][A-Za-z'’-]*)/).map(function (part, i) {
    return i % 2
      ? '<span class="rd-word" role="button" tabindex="0">' + escapeHtml(part) + "</span>"
      : escapeHtml(part);
  }).join("");
}

function bindPassageWords() {
  const box = document.getElementById("ex-passage");
  box.addEventListener("click", function (e) {
    const span = e.target.closest(".rd-word");
    if (span) { onPassageWord(span); return; }
    const dlgBtn = e.target.closest("[data-dlg-action]");
    if (dlgBtn) onDialogueAction(dlgBtn);
  });
  box.addEventListener("keydown", function (e) {
    if (e.key !== "Enter" && e.key !== " ") return;
    const span = e.target.closest(".rd-word");
    if (span) { e.preventDefault(); onPassageWord(span); }
  });
}

function onPassageWord(span) {
  const word = span.textContent.replace(/’/g, "'").replace(/^['-]+|['-]+$/g, "");
  if (!word) return;
  document.querySelectorAll("#ex-passage .rd-word.sel").forEach(function (s) { s.classList.remove("sel"); });
  span.classList.add("sel");
  showWordAdd(word, sentenceWithWord(span.closest("p").textContent, span.textContent));
}

// Предложение абзаца, в котором встретилось слово (для примера карточки)
function sentenceWithWord(paragraph, word) {
  const sentences = paragraph.match(/[^.!?]+[.!?]*\s*/g) || [paragraph];
  const lower = word.toLowerCase();
  const found = sentences.filter(function (s) { return s.toLowerCase().indexOf(lower) !== -1; })[0];
  return (found || paragraph).trim();
}

// Найти слово в словаре сайта и своих словах: сначала как есть, потом без
// простых окончаний (works → work, studied → study, quickly → quick).
function lookupWord(progress, word) {
  const lower = word.toLowerCase();
  const tries = [lower];
  if (/'s$/.test(lower)) tries.push(lower.slice(0, -2));
  [["ies", "y"], ["es", ""], ["s", ""], ["ied", "y"], ["ed", ""], ["d", ""], ["ing", ""], ["ing", "e"], ["ly", ""]].forEach(function (r) {
    if (lower.length > r[0].length + 2 && lower.slice(-r[0].length) === r[0]) {
      tries.push(lower.slice(0, -r[0].length) + r[1]);
    }
  });
  for (let i = 0; i < tries.length; i++) {
    const found = findWord(progress, tries[i]);
    if (found) return found;
  }
  return null;
}

function showWordAdd(word, sentence) {
  const progress = loadProgress();
  const known = lookupWord(progress, word);
  const box = document.getElementById("word-add");
  let html;
  if (known) {
    const inReview = !!progress.words[wordKey(known.en)];
    html = "<b>" + escapeHtml(known.en) + "</b> — " + escapeHtml(known.ru) +
      (inReview
        ? ' <span class="muted small">(уже в повторении)</span>'
        : '<div class="btn-row"><button type="button" class="btn btn-primary btn-small" id="wa-add">Добавить в повторение</button></div>');
  } else {
    html = "<b>" + escapeHtml(word) + '</b> — нет в словаре сайта. Впишите перевод:' +
      '<div class="btn-row"><input type="text" id="wa-ru" placeholder="перевод" autocomplete="off" style="flex:1; min-width:140px">' +
      '<button type="button" class="btn btn-primary btn-small" id="wa-add">Добавить</button></div>';
  }
  html += '<div id="wa-msg" class="small"></div>';
  box.innerHTML = html;
  box.classList.remove("hidden");

  const addBtn = document.getElementById("wa-add");
  if (!addBtn) return;
  const input = document.getElementById("wa-ru");
  function add() {
    const p = loadProgress();
    let status;
    if (known) {
      status = addWordToReview(p, known.en) ? "review" : "exists";
    } else {
      const ru = input.value.trim();
      if (!ru) { input.focus(); return; }
      status = addCustomWord(p, { en: word.toLowerCase(), ru: ru, example: sentence }, "text");
    }
    saveProgress(p);
    document.getElementById("wa-msg").textContent =
      status === "exists" ? "Это слово уже в повторении." : "Добавлено в повторение ✓";
    addBtn.disabled = true;
    if (input) input.disabled = true;
  }
  addBtn.addEventListener("click", add);
  if (input) {
    input.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); add(); } });
    input.focus({ preventScroll: true });
  }
}

// ---------------------------------------------------------------------
// Быстрое добавление слова прямо во время занятия («+ Добавить слово»):
// не поняли слово в упражнении — вписали, и оно ушло в повторение.
// Работает через addCustomWord (words-store.js), как форма на странице «Слова».
// ---------------------------------------------------------------------

function closeQuickWord() {
  const form = document.getElementById("quick-word");
  if (!form) return;
  form.classList.add("hidden");
  document.getElementById("qw-msg").textContent = "";
}

function bindQuickWord() {
  const form = document.getElementById("quick-word");
  const open = document.getElementById("quick-word-btn");
  document.getElementById("qw-close").addEventListener("click", closeQuickWord);
  open.addEventListener("click", function () {
    form.classList.toggle("hidden");
    if (!form.classList.contains("hidden")) document.getElementById("qw-en").focus({ preventScroll: false });
  });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const enInput = document.getElementById("qw-en");
    const ruInput = document.getElementById("qw-ru");
    const msg = document.getElementById("qw-msg");
    const progress = loadProgress();
    const status = addCustomWord(progress, { en: enInput.value, ru: ruInput.value, example: "" }, "manual");
    if (status === "invalid") {
      msg.textContent = "Заполните слово и перевод.";
      (enInput.value.trim() ? ruInput : enInput).focus();
      return;
    }
    saveProgress(progress);
    msg.textContent =
      status === "exists" ? "Это слово уже в повторении." :
      status === "review" ? "Слово уже есть на сайте — поставлено в повторение ✓" :
      "Добавлено в повторение ✓";
    enInput.value = "";
    ruInput.value = "";
    enInput.focus();
  });
}

// ---------------------------------------------------------------------
// Итоги занятия: что было самым трудным и что вернётся завтра.
//   Трудные темы — где больше всего ошибок за занятие (до 3).
//   Трудные слова — карточки, которые не вспомнили или оценили «Трудно» (до 6).
//   Завтра — сколько слов и упражнений с ошибками подойдут по сроку к завтрашнему дню.
// Только читает данные, прогресс не меняет.
// ---------------------------------------------------------------------
function hardAndTomorrowHtml(done, progress) {
  // Темы с ошибками
  const wrongByTopic = {};
  done.results.forEach(function (r) {
    if (r.kind !== "exercise" || r.disputed) return;
    const s = wrongByTopic[r.topic] || (wrongByTopic[r.topic] = { wrong: 0, total: 0 });
    s.total += 1;
    if (!r.correct) s.wrong += 1;
  });
  const hardTopics = Object.keys(wrongByTopic)
    .filter(function (id) { return wrongByTopic[id].wrong > 0 && findTopic(id); })
    .sort(function (a, b) {
      return wrongByTopic[b].wrong - wrongByTopic[a].wrong ||
        wrongByTopic[b].wrong / wrongByTopic[b].total - wrongByTopic[a].wrong / wrongByTopic[a].total;
    })
    .slice(0, 3);

  // Слова, которые не вспомнили или вспомнили с трудом
  const hardWords = [];
  done.results.forEach(function (r) {
    if (r.kind !== "word" || r.quality === undefined || r.quality > 3) return;
    const w = wordByKey(progress, r.ref);
    if (w && hardWords.indexOf(w) === -1) hardWords.push(w);
  });

  // Что подойдёт по сроку завтра
  const tomorrow = addDays(todayStr(), 1);
  const wordsTomorrow = Object.keys(progress.words).filter(function (k) { return progress.words[k].due <= tomorrow; }).length;
  const mistakesTomorrow = DATA.exercises.filter(function (e) {
    const rec = progress.exercises[e.id];
    return rec && rec.again && rec.again <= tomorrow;
  }).length;

  let html = '<h2>Что было трудным</h2><div class="card">';
  if (!hardTopics.length && !hardWords.length) {
    html += "<p>Сегодня без заметных трудностей — так держать.</p>";
  } else {
    if (hardTopics.length) {
      html += "<p><b>Темы, где были ошибки:</b></p><div class=\"topic-links\">" + hardTopics.map(function (id) {
        const t = findTopic(id);
        const s = wrongByTopic[id];
        return '<a class="topic-link" href="topics.html#' + id + '"><span class="badge ' + t.level + '">' + t.level + "</span> " +
          escapeHtml(t.title) + ' <span class="muted small">' + s.wrong + " из " + s.total + "</span></a>";
      }).join("") + "</div>";
    }
    if (hardWords.length) {
      html += '<p style="margin-top:12px"><b>Слова, которые не вспомнились или дались с трудом:</b></p><div class="topic-links">' +
        hardWords.slice(0, 6).map(function (w) {
          return '<span class="topic-link"><b>' + escapeHtml(w.en) + "</b> — " + escapeHtml(w.ru) + "</span>";
        }).join("") + "</div>";
    }
  }
  html += "</div>";

  html += '<div class="notice">Завтра в очереди: <b>' + wordsTomorrow + "</b> " + wordsWord(wordsTomorrow) +
    (mistakesTomorrow ? " и <b>" + mistakesTomorrow + "</b> " + exercisesWord(mistakesTomorrow) + " с ошибками" : "") + ".</div>";
  return html;
}

function wordsWord(n) {
  const n10 = n % 10, n100 = n % 100;
  if (n10 === 1 && n100 !== 11) return "слово";
  if (n10 >= 2 && n10 <= 4 && (n100 < 12 || n100 > 14)) return "слова";
  return "слов";
}

function exercisesWord(n) {
  const n10 = n % 10, n100 = n % 100;
  if (n10 === 1 && n100 !== 11) return "упражнение";
  if (n10 >= 2 && n10 <= 4 && (n100 < 12 || n100 > 14)) return "упражнения";
  return "упражнений";
}

function cardWord(n) {
  const n10 = n % 10, n100 = n % 100;
  if (n10 === 1 && n100 !== 11) return "карточка";
  if (n10 >= 2 && n10 <= 4 && (n100 < 12 || n100 > 14)) return "карточки";
  return "карточек";
}


// ---------------------------------------------------------------------
// Диалог на слух (тексты с listen: true в data/reading/texts.js).
// Реплики вида «Имя: текст» озвучиваются по очереди (speakDialogue в speech.js).
// Текст скрыт, пока не нажмёте «Показать текст» — задача на слух; открытое
// состояние помним, пока идут вопросы к тому же диалогу. Если в браузере нет
// английского голоса, текст показывается сразу.
// ---------------------------------------------------------------------

let dialogueShownFor = null; // id диалога, текст которого уже открыт

function dialogueCardHtml(text) {
  const canSpeak = ttsSupported() && hasEnglishVoice();
  const shown = !canSpeak || dialogueShownFor === text.id;
  const lines = text.text.map(function (line) {
    const m = /^([^:]{1,30}):\s*(.+)$/.exec(line);
    return m
      ? "<p><b>" + escapeHtml(m[1]) + ":</b> " + readableParagraph(m[2]) + "</p>"
      : "<p>" + readableParagraph(line) + "</p>";
  }).join("");
  return '<div class="card passage dlg" data-dlg="' + escapeHtml(text.id) + '">' +
    "<h3>Диалог на слух: " + escapeHtml(text.title) + "</h3>" +
    '<p class="muted small">' + (canSpeak
      ? "Послушайте диалог (можно несколько раз) и ответьте на вопросы."
      : "В браузере нет английского голоса — прочитайте диалог и ответьте на вопросы.") + "</p>" +
    (canSpeak
      ? '<div class="btn-row">' +
          '<button type="button" class="btn btn-primary btn-small" data-dlg-action="play">▶ Слушать</button>' +
          '<button type="button" class="btn btn-small" data-dlg-action="slow">🐢 Помедленнее</button>' +
          '<button type="button" class="btn btn-small" data-dlg-action="show">' + (shown ? "Скрыть текст" : "Показать текст") + "</button>" +
        "</div>"
      : "") +
    '<div class="dlg-text' + (shown ? "" : " hidden") + '">' + lines +
      '<p class="muted small">Нажмите на незнакомое слово — его можно добавить в повторение.</p></div>' +
    '<div class="word-add hidden" id="word-add"></div></div>';
}

function onDialogueAction(btn) {
  const card = btn.closest("[data-dlg]");
  const text = TEXT_BY_ID[card.dataset.dlg];
  const action = btn.dataset.dlgAction;
  if (action === "play") speakDialogue(text.text);
  else if (action === "slow") speakDialogue(text.text, LISTEN_SLOW_RATE);
  else if (action === "show") {
    const body = card.querySelector(".dlg-text");
    const nowHidden = body.classList.toggle("hidden");
    dialogueShownFor = nowHidden ? null : text.id;
    btn.textContent = nowHidden ? "Показать текст" : "Скрыть текст";
  }
}
