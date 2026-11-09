// =====================================================================
// pages/verbs-train.js — вкладка «Тренировка» раздела «Неправильные глаголы».
//
// Экран настройки (сколько глаголов, откуда брать, режим) → сессия (по одному
// вопросу, логика вопросов и проверки — в js/verbs.js) → итог. Ответ на глагол
// записывается в progress.verbs (SM-2) при нажатии «Далее» или «Мой ответ тоже
// верный» — один раз на глагол за сессию.
// =====================================================================

const TR_COUNTS = [
  { key: "10",  label: "10" },
  { key: "20",  label: "20" },
  { key: "all", label: "Все выбранные" }
];
const TR_SOURCES = [
  { key: "all",   label: "Все" },
  { key: "t1",    label: "Только tier 1" },
  { key: "t12",   label: "Tier 1–2" },
  { key: "group", label: "Группа" },
  { key: "weak",  label: "Мои слабые" },
  { key: "new",   label: "Ещё не пробовал" }
];
const TR_MODE_HELP = {
  both:   "Даны перевод и инфинитив — впишите V2 и V3.",
  form:   "Дана одна из форм (например, went) — впишите инфинитив и недостающую форму.",
  choice: "Четыре варианта, три из них — типичные ошибки (maked, goed, gone вместо went).",
  error:  "В предложении неправильная форма глагола — впишите правильную.",
  mix:    "Режимы чередуются случайно."
};

const train = {
  count: "10",
  source: "all",
  group: "ABB",
  mode: "mix",
  session: null        // { verbs, index, mode, results, current: {q, grade, committed} }
};

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("train-stop-btn").addEventListener("click", trStop);
  document.addEventListener("keydown", trOnKeyDown);
});

function trView(name) {
  ["setup", "session", "summary"].forEach(function (v) {
    document.getElementById("train-" + v).classList.toggle("hidden", v !== name);
  });
}

// ---------------------------------------------------------------------
// Экран настройки
// ---------------------------------------------------------------------

function trPool() {
  return verbPool(loadProgress(), train.source, train.group);
}

function showTrainSetup() {
  train.session = null;
  trView("setup");
  renderTrainSetup();
}

function chipsHtml(options, current, extra) {
  return options.map(function (o) {
    return '<button type="button" class="chip' + (o.key === current ? " active" : "") + '" data-key="' + o.key + '">' +
      escapeHtml(o.label) + (extra && extra(o) !== undefined ? " (" + extra(o) + ")" : "") + "</button>";
  }).join("");
}

function renderTrainSetup() {
  const progress = loadProgress();
  const pool = trPool();
  const wanted = train.count === "all" ? pool.length : Math.min(Number(train.count), pool.length);

  const box = document.getElementById("train-setup");
  box.innerHTML =
    '<div class="card">' +
      '<h3>Сколько глаголов</h3><div class="chips" id="tr-count">' + chipsHtml(TR_COUNTS, train.count) + "</div>" +
      '<h3>Откуда брать</h3><div class="chips" id="tr-source">' + chipsHtml(TR_SOURCES, train.source, function (o) {
        if (o.key === "group") return undefined;
        return verbPool(progress, o.key, train.group).length;
      }) + "</div>" +
      (train.source === "group" ? '<select id="tr-group">' + Object.keys(VERB_GROUPS).map(function (g) {
        return '<option value="' + escapeHtml(g) + '"' + (g === train.group ? " selected" : "") + ">" +
          escapeHtml(VERB_GROUPS[g]) + " — " + verbPool(progress, "group", g).length + "</option>";
      }).join("") + "</select>" : "") +
      '<h3>Режим</h3><div class="chips" id="tr-mode">' + chipsHtml(VERB_MODES, train.mode) + "</div>" +
      '<p class="muted small">' + escapeHtml(TR_MODE_HELP[train.mode]) + "</p>" +
      (pool.length === 0
        ? '<div class="notice">В этой выборке пока нет глаголов' + (train.source === "weak" ? " — слабых нет, вы молодец!" : "") + ". Выберите другой источник.</div>"
        : "") +
      '<div class="btn-row"><button type="button" class="btn btn-primary" id="tr-start"' + (pool.length === 0 ? " disabled" : "") + ">" +
        "Начать (" + wanted + " " + verbWord(wanted) + ")</button></div>" +
    "</div>";

  bindChips("tr-count", function (k) { train.count = k; });
  bindChips("tr-source", function (k) { train.source = k; });
  bindChips("tr-mode", function (k) { train.mode = k; });
  const sel = document.getElementById("tr-group");
  if (sel) sel.addEventListener("change", function () { train.group = sel.value; renderTrainSetup(); });
  document.getElementById("tr-start").addEventListener("click", function () {
    startTraining(pickVerbSession(loadProgress(), trPool(), train.count === "all" ? 0 : Number(train.count)));
  });
}

function bindChips(id, onPick) {
  document.querySelectorAll("#" + id + " .chip").forEach(function (chip) {
    chip.addEventListener("click", function () {
      onPick(chip.dataset.key);
      renderTrainSetup();
    });
  });
}

// ---------------------------------------------------------------------
// Сессия
// ---------------------------------------------------------------------

function startTraining(verbs) {
  if (verbs.length === 0) return;
  train.session = { verbs: verbs, index: 0, mode: train.mode, results: [], current: null };
  trView("session");
  trShowQuestion();
}

function trShowQuestion() {
  const s = train.session;
  if (s.index >= s.verbs.length) { trShowSummary(); return; }
  const v = s.verbs[s.index];
  const q = buildVerbQuestion(v, s.mode);
  s.current = { q: q, grade: null, committed: false, inputs: [] };

  document.getElementById("train-counter").textContent = (s.index + 1) + " из " + s.verbs.length;
  document.getElementById("train-progress").style.width = Math.round(s.index / s.verbs.length * 100) + "%";
  document.getElementById("train-mode-label").textContent = VERB_MODES.filter(function (m) { return m.key === q.mode; })[0].label;
  trRenderQuestion(q);
  window.scrollTo(0, 0);
}

function sentenceHtml(v, slot, middleHtml) {
  const parts = verbSentence(v, slot, "@@@").split("@@@");
  return escapeHtml(parts[0]) + middleHtml + escapeHtml(parts[1] || "");
}

function slotName(slot) {
  return slot === "past" ? "V2 (Past Simple)" : "V3 (Past Participle)";
}

function trRenderQuestion(q) {
  const v = q.v;
  const card = document.getElementById("train-card");
  const verbLine = '<p class="vq-verb"><b>' + escapeHtml(v.inf) + "</b>" + speakButtonHtml(v.inf) +
    ' <span class="muted">— ' + escapeHtml(v.ru) + "</span></p>";
  let html = "";

  if (q.mode === "both") {
    html += '<p class="ex-prompt muted small">Впишите формы V2 (Past Simple) и V3 (Past Participle).</p>' + verbLine +
      trInputsHtml([{ label: "V2 · Past Simple" }, { label: "V3 · Past Participle" }]);
  } else if (q.mode === "form") {
    html += '<p class="ex-prompt muted small">Дана форма ' + slotName(q.givenSlot) + '. Впишите инфинитив (V1) и форму ' +
      slotName(q.missingSlot) + ".</p>" +
      '<p class="vq-verb"><b>' + escapeHtml(q.givenWord) + "</b>" + speakButtonHtml(q.givenWord) +
      ' <span class="muted">— ' + escapeHtml(v.ru) + "</span></p>" +
      trInputsHtml([{ label: "V1 · инфинитив" }, { label: slotName(q.missingSlot) }]);
  } else if (q.mode === "choice") {
    html += '<p class="ex-prompt muted small">Выберите правильную форму ' + slotName(q.slot) + " глагола.</p>" + verbLine +
      '<p class="question">' + sentenceHtml(v, q.slot, '<span class="blank">&nbsp;</span>') + "</p>" +
      '<div class="options">' + q.options.map(function (opt, i) {
        return '<button type="button" class="option" data-value="' + escapeHtml(opt) + '"><span class="option-key">' + (i + 1) + "</span>" + escapeHtml(opt) + "</button>";
      }).join("") + "</div>";
  } else {
    html += '<p class="ex-prompt muted small">В предложении неправильная форма глагола. Впишите правильную форму ' + slotName(q.slot) + ".</p>" +
      '<p class="vq-verb"><b>' + escapeHtml(v.inf) + "</b>" + speakButtonHtml(v.inf) + ' <span class="muted">— ' + escapeHtml(v.ru) + "</span></p>" +
      '<p class="question">' + sentenceHtml(v, q.slot, '<span class="vq-wrong">' + escapeHtml(q.wrong) + "</span>") + "</p>" +
      trInputsHtml([{ label: "Правильная форма" }]);
  }

  if (q.mode !== "choice") {
    html += '<div class="btn-row" id="tr-check-row"><button type="button" class="btn btn-primary" id="tr-check">Проверить</button>' +
      '<button type="button" class="btn" id="tr-dont-know">Не знаю</button></div>';
  }
  html += '<div class="feedback" id="tr-feedback"></div>';
  card.innerHTML = html;

  if (q.mode === "choice") {
    card.querySelectorAll(".option").forEach(function (btn) {
      btn.addEventListener("click", function () { trChoose(btn.dataset.value); });
    });
    return;
  }

  const inputs = trInputs();
  inputs.forEach(function (input, i) {
    input.addEventListener("keydown", function (e) {
      if (e.key !== "Enter") return;
      e.preventDefault();
      if (inputs[i + 1]) inputs[i + 1].focus();
      else trCheck();
    });
  });
  document.getElementById("tr-check").addEventListener("click", trCheck);
  document.getElementById("tr-dont-know").addEventListener("click", function () { trAnswer([]); });
  setTimeout(function () { if (inputs[0]) inputs[0].focus({ preventScroll: true }); }, 50);
}

function trInputsHtml(fields) {
  return '<div class="vq-inputs">' + fields.map(function (f) {
    return '<label class="vq-field"><span class="muted small">' + escapeHtml(f.label) + "</span>" +
      '<input type="text" class="answer-input" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"></label>';
  }).join("") + "</div>";
}

function trInputs() {
  return Array.prototype.slice.call(document.querySelectorAll("#train-card .answer-input"));
}

function trCheck() {
  const values = trInputs().map(function (i) { return i.value; });
  if (values.every(function (x) { return !x.trim(); })) { trInputs()[0].focus(); return; }
  trAnswer(values);
}

function trChoose(value) {
  const cur = train.session.current;
  document.querySelectorAll("#train-card .option").forEach(function (b) {
    b.disabled = true;
    const okForms = acceptedForms(cur.q.v, cur.q.slot);
    if (okForms.indexOf(b.dataset.value) !== -1) b.classList.add("correct");
    else if (b.dataset.value === value) b.classList.add("incorrect");
  });
  trAnswer([value]);
}

// Проверить ответ и показать результат (в прогресс пока не пишем — см. trCommit)
function trAnswer(values) {
  const cur = train.session.current;
  if (cur.grade) return;
  const q = cur.q;
  const padded = q.mode === "both" || q.mode === "form" ? [values[0] || "", values[1] || ""] : [values[0] || ""];
  cur.inputs = padded;
  cur.grade = gradeVerbQuestion(q, padded);
  trInputs().forEach(function (i) { i.disabled = true; });
  const row = document.getElementById("tr-check-row");
  if (row) row.classList.add("hidden");
  trShowFeedback(cur);
}

function trShowFeedback(cur) {
  const q = cur.q;
  const v = q.v;
  const grade = cur.grade;
  let fb = '<div class="notice ' + (grade.correct ? "good" : "bad") + '"><b>' + (grade.correct ? "Верно!" : "Неверно.") + "</b>";
  if (!grade.correct) {
    grade.parts.forEach(function (p) {
      if (p.ok) return;
      fb += '<br><span class="small">' + escapeHtml(p.label) + ": " +
        (p.user.trim() ? '<span class="wrong">' + escapeHtml(p.user) + "</span>" : '<span class="muted">пусто</span>') +
        ' → <span class="right">' + escapeHtml(p.expected) + "</span></span>";
    });
  }
  fb += "</div>";
  fb += '<div class="vq-answer"><div class="vq-forms">' +
    formsHtml(v, "inf") + '<span class="vsep">–</span>' + formsHtml(v, "past") + '<span class="vsep">–</span>' + formsHtml(v, "pp") +
    '</div><div class="muted">' + escapeHtml(v.ru) + "</div>" +
    (v.note ? '<div class="muted small">' + escapeHtml(v.note) + "</div>" : "") + "</div>";
  fb += '<div class="btn-row"><button type="button" class="btn btn-primary" id="tr-next">Далее</button>';
  const typed = q.mode !== "choice" && cur.inputs.some(function (x) { return x.trim(); });
  if (!grade.correct && typed) {
    fb += '<button type="button" class="btn" id="tr-dispute" title="Если вы уверены, что ваш вариант тоже правильный">Мой ответ тоже верный</button>';
  }
  fb += "</div>";
  const box = document.getElementById("tr-feedback");
  box.innerHTML = fb;

  document.getElementById("tr-next").addEventListener("click", function () { trCommit(false); trNext(); });
  const d = document.getElementById("tr-dispute");
  if (d) d.addEventListener("click", function () { trCommit(true); trNext(); });
  document.getElementById("tr-next").focus({ preventScroll: true });
}

// Записать ответ в прогресс и в результаты сессии (один раз на глагол)
function trCommit(disputed) {
  const s = train.session;
  const cur = s.current;
  if (!cur || !cur.grade || cur.committed) return;
  cur.committed = true;
  const correct = cur.grade.correct || disputed;
  const progress = loadProgress();
  const answerText = cur.inputs.filter(function (x) { return x.trim(); }).join(" / ");
  recordVerbAnswer(progress, cur.q.v, correct, answerText, disputed);
  saveProgress(progress);
  s.results.push({ v: cur.q.v, mode: cur.q.mode, correct: correct, disputed: !!disputed, grade: cur.grade, answer: answerText });
  renderVerbStats();
}

function trNext() {
  train.session.index += 1;
  trShowQuestion();
}

function trStop() {
  const s = train.session;
  if (!s) return;
  if (s.current && s.current.grade && !s.current.committed) trCommit(false);
  if (s.results.length === 0) { showTrainSetup(); return; }
  if (confirm("Закончить тренировку? Все ваши ответы уже сохранены.")) trShowSummary();
}

// ---------------------------------------------------------------------
// Итог
// ---------------------------------------------------------------------

function trShowSummary() {
  const s = train.session;
  const total = s.results.length;
  const right = s.results.filter(function (r) { return r.correct; }).length;
  const mistakes = s.results.filter(function (r) { return !r.correct; });
  const disputed = s.results.filter(function (r) { return r.disputed; }).length;
  const pct = total ? Math.round(right / total * 100) : 0;
  const stats = verbStats(loadProgress());

  let html = "<h2>Тренировка завершена</h2>" +
    '<div class="grid">' +
      '<div class="stat"><div class="value">' + right + " / " + total + '</div><div class="label">правильно (' + pct + "%)</div></div>" +
      '<div class="stat"><div class="value">' + stats.learned + " / " + stats.total + '</div><div class="label">глаголов выучено</div></div>' +
    "</div>";

  if (mistakes.length) {
    html += '<h3>Ошибки</h3><div class="card">' + mistakes.map(function (r) {
      return '<div class="mistake"><div class="vq-forms">' + formsHtml(r.v, "inf") + '<span class="vsep">–</span>' +
        formsHtml(r.v, "past") + '<span class="vsep">–</span>' + formsHtml(r.v, "pp") + "</div>" +
        '<p class="small muted">' + escapeHtml(r.v.ru) + (r.answer ? " · ваш ответ: <span class=\"wrong\">" + escapeHtml(r.answer) + "</span>" : "") + "</p></div>";
    }).join("") + "</div>";
  } else {
    html += '<div class="notice good">Без ошибок — отлично!</div>';
  }
  if (disputed) {
    html += '<div class="notice">Спорных ответов: ' + disputed + ". Они сохранены — их можно посмотреть в настройках и показать Claude.</div>";
  }
  html += '<div class="btn-row">' +
    (mistakes.length ? '<button type="button" class="btn btn-primary" id="tr-again">Ещё раз — только ошибки (' + mistakes.length + ")</button>" : "") +
    '<button type="button" class="btn' + (mistakes.length ? "" : " btn-primary") + '" id="tr-new">Новая тренировка</button></div>';

  const box = document.getElementById("train-summary");
  box.innerHTML = html;
  trView("summary");
  window.scrollTo(0, 0);
  renderVerbStats();
  const again = document.getElementById("tr-again");
  if (again) again.addEventListener("click", function () {
    startTraining(mistakes.map(function (r) { return r.v; }));
  });
  document.getElementById("tr-new").addEventListener("click", showTrainSetup);
}

// ---------------------------------------------------------------------
// Клавиатура: 1–4 выбирают вариант в режиме «Выбери правильную форму»
// ---------------------------------------------------------------------

function trOnKeyDown(e) {
  if (!train.session || document.getElementById("train-session").classList.contains("hidden")) return;
  if (e.target.tagName === "INPUT") return;
  if (e.key >= "1" && e.key <= "4") {
    const btn = document.querySelectorAll("#train-card .option")[Number(e.key) - 1];
    if (btn && !btn.disabled) btn.click();
  }
}
