// =====================================================================
// pages/test.js — стартовый тест уровня и страница результата.
//
// Ход теста («прохождение») хранится отдельно от прогресса, под ключом
// RUN_KEY, чтобы можно было закрыть страницу и продолжить потом:
//   run = {
//     startedAt: "2026-10-01T10:00:00.000Z",
//     flow: ["g-a1-3", "g-a1-1", ...],  // порядок вопросов
//     index: 5,                          // номер текущего вопроса в flow
//     answers: { "g-a1-3": { chosen: "Where", correct: true }, ... }
//   }
// =====================================================================

const RUN_KEY = "english-trainer-test-run";

let run = null;         // текущее прохождение (или null)
let selected = null;    // выбранный вариант в текущем вопросе
const optionOrder = {}; // перемешанные варианты: чтобы порядок не менялся при перерисовке

// Быстрый поиск вопроса по ID
const QUESTION_BY_ID = {};
DATA.placement.forEach(function (q) { QUESTION_BY_ID[q.id] = q; });

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
  const progress = loadProgress();

  if (run) showIntro();                          // есть незаконченный тест
  else if (progress.placement) showResult(progress.placement); // тест уже пройден
  else showIntro();                              // первый раз
});

// ---------------------------------------------------------------------
// Экраны
// ---------------------------------------------------------------------

function showView(name) {
  ["intro", "question", "result"].forEach(function (v) {
    document.getElementById("view-" + v).classList.toggle("hidden", v !== name);
  });
  window.scrollTo(0, 0);
}

function showIntro() {
  const progress = loadProgress();

  // Прошлый результат, если есть
  const prev = document.getElementById("intro-previous");
  if (progress.placement) {
    prev.innerHTML =
      '<div class="notice">Ваш последний результат: <span class="badge ' + progress.placement.level + '">' +
      progress.placement.level + "</span> от " + formatDate(progress.placement.date) +
      '. <a href="#" id="show-last">Посмотреть</a></div>';
    document.getElementById("show-last").addEventListener("click", function (e) {
      e.preventDefault();
      showResult(loadProgress().placement);
    });
  } else {
    prev.innerHTML = "";
  }

  // Кнопки
  const box = document.getElementById("intro-buttons");
  if (run) {
    const done = answeredCount();
    box.innerHTML =
      '<button class="btn btn-primary" id="continue-btn">Продолжить (отвечено ' + done + " из " + plannedCount() + ")</button>" +
      '<button class="btn" id="restart-btn">Начать заново</button>';
    document.getElementById("continue-btn").addEventListener("click", showQuestion);
    document.getElementById("restart-btn").addEventListener("click", function () {
      if (confirm("Начать тест заново? Текущие ответы будут удалены.")) startNewRun();
    });
  } else {
    box.innerHTML = '<button class="btn btn-primary" id="start-btn">Начать тест</button>';
    document.getElementById("start-btn").addEventListener("click", startNewRun);
  }

  showView("intro");
}

// ---------------------------------------------------------------------
// Прохождение теста
// ---------------------------------------------------------------------

// Порядок вопросов: раздел за разделом (грамматика → лексика → чтение),
// внутри раздела — от A1 к C1. Внутри одного уровня вопросы перемешиваются
// (кроме чтения: там вопросы к одному тексту идут подряд).
function buildFlow() {
  const flow = [];
  Object.keys(TEST_SECTIONS).forEach(function (section) {
    LEVELS.forEach(function (level) {
      let block = DATA.placement.filter(function (q) {
        return q.section === section && q.level === level;
      });
      if (section !== "reading") block = shuffle(block);
      block.forEach(function (q) { flow.push(q.id); });
    });
  });
  return flow;
}

function startNewRun() {
  run = {
    startedAt: new Date().toISOString(),
    flow: buildFlow(),
    index: 0,
    answers: {}
  };
  saveRun();
  showQuestion();
}

// Текущий вопрос (пропуская уже отвеченные и пропущенные) или null, если вопросы кончились.
function currentQuestion() {
  while (run.index < run.flow.length && run.answers[run.flow[run.index]]) {
    run.index += 1;
  }
  return run.index < run.flow.length ? QUESTION_BY_ID[run.flow[run.index]] : null;
}

function showQuestion() {
  const q = currentQuestion();
  if (!q) {
    finishRun();
    return;
  }
  selected = null;

  // Шапка: раздел, счётчик, полоска прогресса
  document.getElementById("q-section").textContent = TEST_SECTIONS[q.section];
  const done = answeredCount();
  const planned = plannedCount();
  document.getElementById("q-counter").textContent = "Вопрос " + (done + 1) + " из " + planned;
  document.getElementById("q-progress").style.width = Math.round(done / planned * 100) + "%";

  // Текст для чтения
  const passageBox = document.getElementById("q-passage");
  const passage = q.passage ? DATA.testPassages.find(function (p) { return p.id === q.passage; }) : null;
  passageBox.innerHTML = passage
    ? '<div class="card passage"><p class="muted small">Прочитайте текст и ответьте на вопрос.</p>' +
      passage.text.map(function (p) { return "<p>" + escapeHtml(p) + "</p>"; }).join("") + "</div>"
    : "";

  // Вопрос и варианты
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

// Записать ответ (chosen = null — «Не знаю») и перейти к следующему вопросу.
function answerCurrent(chosen) {
  const q = currentQuestion();
  if (!q) return;
  run.answers[q.id] = { chosen: chosen, correct: chosen === q.answer };
  checkBlockStop(q);
  run.index += 1;
  saveRun();
  showQuestion();
}

// Адаптивность: если блок (раздел + уровень) закончен и правильных ответов
// в нём слишком мало, более сложные вопросы этого раздела пропускаются.
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
  const result = evaluateTest(DATA.placement, run.answers);
  result.minutes = Math.max(1, Math.round((Date.now() - Date.parse(run.startedAt)) / 60000));

  const progress = loadProgress();
  applyPlacementResult(progress, result);
  saveProgress(progress);

  clearRun();
  showResult(result);
}

function quitRun() {
  if (!confirm("Прервать тест? Ответы этого прохождения будут удалены.")) return;
  clearRun();
  const progress = loadProgress();
  if (progress.placement) showResult(progress.placement);
  else showIntro();
}

// Клавиатура: 1–4 — выбор, Enter — далее
function onKeyDown(e) {
  if (document.getElementById("view-question").classList.contains("hidden")) return;
  if (e.key >= "1" && e.key <= "9") {
    selectOption(Number(e.key) - 1);
  } else if (e.key === "Enter" && selected !== null) {
    e.preventDefault();
    answerCurrent(selected);
  }
}

// Сколько вопросов уже отвечено (без пропущенных)
function answeredCount() {
  return Object.keys(run.answers).filter(function (id) { return !run.answers[id].skipped; }).length;
}

// Сколько вопросов будет всего (без пропущенных)
function plannedCount() {
  return run.flow.filter(function (id) {
    return !(run.answers[id] && run.answers[id].skipped);
  }).length;
}

// ---------- Сохранение прохождения ----------

function loadRun() {
  try {
    const saved = JSON.parse(localStorage.getItem(RUN_KEY));
    if (!saved || !Array.isArray(saved.flow)) return null;
    // Если после обновления сайта какие-то вопросы исчезли — убираем их
    saved.flow = saved.flow.filter(function (id) { return QUESTION_BY_ID[id]; });
    return saved;
  } catch (e) {
    return null;
  }
}

function saveRun() {
  localStorage.setItem(RUN_KEY, JSON.stringify(run));
}

function clearRun() {
  localStorage.removeItem(RUN_KEY);
  run = null;
}

// ---------------------------------------------------------------------
// Страница результата
// ---------------------------------------------------------------------

function showResult(result) {
  const info = LEVEL_INFO[result.level];
  let html = "<h1>Результат теста</h1>";

  // Уровень
  html +=
    '<div class="card level-hero">' +
      '<div class="level-big badge ' + result.level + '">' + result.level + "</div>" +
      "<div>" +
        "<h2>" + info.name + "</h2>" +
        "<p>" + info.text + "</p>" +
        '<p class="muted small">' + formatDate(result.date) +
          " · правильных ответов: " + result.correct + " из " + result.answered +
          (result.minutes ? " · время: " + result.minutes + " мин" : "") + "</p>" +
      "</div>" +
    "</div>";

  if (result.nearNext) {
    html += '<div class="notice good">Вы близки к уровню <b>' + result.nearNext +
      "</b>: на его вопросах у вас уже хороший результат.</div>";
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
  html += '<p class="muted small">Уровень засчитывается, если на нём не меньше ' +
    Math.round(RULES.placement.levelPass * 100) + "% правильных ответов.</p></div>";

  // По разделам
  html += '<h2>По разделам</h2><div class="grid">';
  Object.keys(TEST_SECTIONS).forEach(function (section) {
    const s = result.bySection[section];
    if (!s) return;
    html += '<div class="stat"><div class="value">' + percent(s) + '%</div><div class="label">' +
      TEST_SECTIONS[section] + " (" + s.correct + " из " + s.total + ")</div></div>";
  });
  html += "</div>";

  // Слабые и сильные темы
  html += "<h2>Слабые темы</h2>";
  if (result.weakTopics.length) {
    html += '<p class="muted">Этим темам сайт будет уделять больше всего внимания в занятиях.</p>' + topicListHtml(result.weakTopics);
  } else {
    html += '<p class="muted">Ошибок на вашем уровне не найдено — отлично!</p>';
  }

  html += "<h2>Сильные темы</h2>";
  html += result.strongTopics.length
    ? '<p class="muted">Эти темы будут появляться реже — для повторения.</p>' + topicListHtml(result.strongTopics)
    : '<p class="muted">Пока нет тем, где все ответы правильные.</p>';

  // Разбор ошибок
  const mistakes = result.mistakes.filter(function (m) { return QUESTION_BY_ID[m.id]; });
  if (mistakes.length) {
    html += '<h2>Разбор ошибок</h2><details class="topic"><summary><span class="topic-title">Показать ошибки (' +
      mistakes.length + ")</span></summary><div class=\"topic-body\">" +
      mistakes.map(mistakeHtml).join("") + "</div></details>";
  }

  // Кнопки
  html +=
    '<div class="notice" style="margin-top:24px">Следующий шаг — ежедневные занятия. Они появятся на этапе 3 и будут опираться на этот результат.</div>' +
    '<div class="btn-row">' +
      '<button class="btn" id="retake-btn">Пройти тест заново</button>' +
      '<a class="btn" href="topics.html">Посмотреть правила</a>' +
    "</div>";

  const view = document.getElementById("view-result");
  view.innerHTML = html;
  document.getElementById("retake-btn").addEventListener("click", function () {
    if (confirm("Пройти тест заново? Уровень и приоритеты тем будут пересчитаны по новому результату.")) {
      startNewRun();
    }
  });
  showView("result");
}

// Одна ошибка в разборе
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
