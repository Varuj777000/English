// =====================================================================
// validate.js — автоматическая проверка учебных данных.
//
// Запускается при открытии любой страницы. Если в файлах из data/
// найдена ошибка (например, правильного ответа нет среди вариантов,
// или упражнение ссылается на несуществующую тему), вверху страницы
// появится красная плашка со списком проблем.
//
// Это помогает не сломать сайт, когда вы добавляете новый контент.
// =====================================================================

const EXERCISE_TYPES = ["choice", "fill", "fix", "translate", "listen"];

function validateData() {
  const errors = [];
  const topicIds = new Set();

  // ---------- Темы ----------
  DATA.topics.forEach(function (t, i) {
    const where = "Тема #" + (i + 1) + " (" + t.id + ")";
    if (!t.id || !/^[a-z0-9-]+$/.test(t.id)) errors.push(where + ": ID должен состоять из маленьких латинских букв, цифр и дефисов");
    if (topicIds.has(t.id)) errors.push(where + ": такой ID уже есть");
    topicIds.add(t.id);
    if (LEVELS.indexOf(t.level) === -1) errors.push(where + ": неизвестный уровень «" + t.level + "»");
    if (!CATEGORY_NAMES[t.category]) errors.push(where + ": неизвестная категория «" + t.category + "»");
    if (!t.title) errors.push(where + ": нет названия");
    if (!Array.isArray(t.explanation)) errors.push(where + ": explanation должен быть списком абзацев [ ]");
  });

  // ---------- Упражнения ----------
  const exerciseIds = new Set();
  DATA.exercises.forEach(function (e, i) {
    const where = "Упражнение " + (e.id || "#" + (i + 1));
    if (!e.id) errors.push(where + ": нет id");
    if (exerciseIds.has(e.id)) errors.push(where + ": такой id уже есть");
    exerciseIds.add(e.id);
    if (!topicIds.has(e.topic)) errors.push(where + ": тема «" + e.topic + "» не найдена в topics.js");
    checkQuestion(e, where, errors);
  });

  // ---------- Тексты ----------
  const textIds = new Set();
  DATA.texts.forEach(function (t, i) {
    const where = "Текст " + (t.id || "#" + (i + 1));
    if (!t.id) errors.push(where + ": нет id");
    if (textIds.has(t.id)) errors.push(where + ": такой id уже есть");
    textIds.add(t.id);
    if (LEVELS.indexOf(t.level) === -1) errors.push(where + ": неизвестный уровень «" + t.level + "»");
    if (!Array.isArray(t.text) || t.text.length === 0) errors.push(where + ": нет текста");
    if (!Array.isArray(t.questions) || t.questions.length === 0) errors.push(where + ": нет вопросов");
    (t.questions || []).forEach(function (q, j) {
      checkQuestion(q, where + ", вопрос " + (j + 1), errors);
    });
  });

  // ---------- Мини-рассказы ----------
  validateStories(errors, topicIds);

  // ---------- Неправильные глаголы ----------
  validateVerbs(errors);

  // ---------- Письмо по шаблону ----------
  validateWritingData(errors, topicIds);

  // ---------- Слова ----------
  const wordKeys = new Set();
  DATA.words.forEach(function (w, i) {
    const where = "Слово «" + (w.en || "#" + (i + 1)) + "»";
    if (!w.en || !w.ru) errors.push(where + ": нужны поля en и ru");
    const key = String(w.en).toLowerCase().trim();
    if (wordKeys.has(key)) errors.push(where + ": такое слово уже есть");
    wordKeys.add(key);
    if (w.level && LEVELS.indexOf(w.level) === -1) errors.push(where + ": неизвестный уровень «" + w.level + "»");
  });

  // ---------- Стартовый тест и контрольные ----------
  const passageIds = new Set(DATA.testPassages.map(function (p) { return p.id; }));
  ["placement", "checkpoints"].forEach(function (listName) {
    const ids = new Set();
    DATA[listName].forEach(function (q, i) {
      const where = listName + " " + (q.id || "#" + (i + 1));
      if (!q.id) errors.push(where + ": нет id");
      if (ids.has(q.id)) errors.push(where + ": такой id уже есть");
      ids.add(q.id);
      if (!topicIds.has(q.topic)) errors.push(where + ": тема «" + q.topic + "» не найдена");
      if (LEVELS.indexOf(q.level) === -1) errors.push(where + ": неизвестный уровень «" + q.level + "»");
      if (!TEST_SECTIONS[q.section]) errors.push(where + ": неизвестный раздел «" + q.section + "»");
      if (q.type !== "choice") errors.push(where + ": в тестах используется только тип choice");
      if (q.passage && !passageIds.has(q.passage)) errors.push(where + ": текст «" + q.passage + "» не найден в testPassages");
      if (q.section === "reading" && !q.passage) errors.push(where + ": у вопроса на чтение нужен passage");
      checkQuestion(q, where, errors);
    });
  });

  if (errors.length > 0) {
    console.error("Ошибки в данных:\n" + errors.join("\n"));
    showDataErrors(errors);
  }
  return errors;
}

// Проверка одного вопроса / упражнения по его типу.
function checkQuestion(q, where, errors) {
  if (EXERCISE_TYPES.indexOf(q.type) === -1) {
    errors.push(where + ": неизвестный тип «" + q.type + "»");
    return;
  }
  if (!q.q) errors.push(where + ": нет текста задания (q)");

  if (q.type === "choice") {
    if (!Array.isArray(q.options) || q.options.length < 2) {
      errors.push(where + ": нужно минимум 2 варианта в options");
    } else {
      if (q.options.indexOf(q.answer) === -1) errors.push(where + ": правильный ответ «" + q.answer + "» не найден среди вариантов");
      if (new Set(q.options).size !== q.options.length) errors.push(where + ": варианты повторяются");
    }
  } else {
    if (!Array.isArray(q.answers) || q.answers.length === 0) errors.push(where + ": нужен список answers");
    if (q.type === "fill" && q.q && q.q.indexOf("___") === -1) errors.push(where + ": в задании fill нужен пропуск ___");
    if (q.type === "listen" && !q.ru) errors.push(where + ": для типа listen нужен перевод (ru)");
  }
}

// Показать красную плашку с ошибками вверху страницы.
function showDataErrors(errors) {
  const box = document.createElement("div");
  box.className = "data-errors";
  const shown = errors.slice(0, 15).map(function (e) { return "<li>" + escapeHtml(e) + "</li>"; }).join("");
  const more = errors.length > 15 ? "<p>...и ещё " + (errors.length - 15) + ". Полный список — в консоли браузера (F12).</p>" : "";
  box.innerHTML = "<b>Найдены ошибки в учебных данных (" + errors.length + "):</b><ul>" + shown + "</ul>" + more;
  const main = document.querySelector("main") || document.body;
  main.prepend(box);
}

// ---------------------------------------------------------------------
// Мини-рассказы (data/stories/*.js, показ — js/story.js)
// ---------------------------------------------------------------------
// Задания «Письмо по шаблону» и «ловушки» (data/writing.js): уникальные id,
// известные уровни и темы, непустые план/фразы/проверки и компилирующиеся регулярки.
function validateWritingData(errors, topicIds) {
  const ids = new Set();
  DATA.writing.forEach(function (t, i) {
    const w = "Письмо " + (t.id || "#" + (i + 1));
    if (!t.id || !/^wr-[a-z0-9-]+$/.test(t.id)) errors.push(w + ": id вида wr-a2-name");
    if (ids.has(t.id)) errors.push(w + ": такой id уже есть");
    ids.add(t.id);
    if (LEVELS.indexOf(t.level) === -1) errors.push(w + ": неизвестный уровень «" + t.level + "»");
    if (!t.title || !t.prompt) errors.push(w + ": нужны title и prompt");
    if (!(t.minWords > 0) || !(t.maxWords >= t.minWords)) errors.push(w + ": minWords/maxWords заданы неверно");
    (t.topics || []).forEach(function (id) {
      if (!topicIds.has(id)) errors.push(w + ": тема «" + id + "» не найдена");
    });
    if (!Array.isArray(t.steps) || t.steps.length === 0) errors.push(w + ": нет плана (steps)");
    (t.steps || []).forEach(function (s, j) { if (!s.title || !s.hint) errors.push(w + ", шаг " + (j + 1) + ": нужны title и hint"); });
    if (!Array.isArray(t.phrases) || t.phrases.length === 0) errors.push(w + ": нет фраз (phrases)");
    (t.phrases || []).forEach(function (p, j) { if (!p.en || !p.ru) errors.push(w + ", фраза " + (j + 1) + ": нужны en и ru"); });
    if (!Array.isArray(t.checks) || t.checks.length === 0) errors.push(w + ": нет проверок (checks)");
    (t.checks || []).forEach(function (c, j) {
      if (!c.text || !c.pattern) { errors.push(w + ", проверка " + (j + 1) + ": нужны text и pattern"); return; }
      try { new RegExp(c.pattern, "i"); } catch (e) { errors.push(w + ", проверка " + (j + 1) + ": неверное регулярное выражение"); }
    });
  });
  const pids = new Set();
  DATA.writingPitfalls.forEach(function (p, i) {
    const w = "Ловушка " + (p.id || "#" + (i + 1));
    if (!p.id) errors.push(w + ": нет id");
    if (pids.has(p.id)) errors.push(w + ": такой id уже есть");
    pids.add(p.id);
    if (!p.tip) errors.push(w + ": нет tip");
    try { new RegExp(p.pattern, p.flags === undefined ? "i" : p.flags); } catch (e) { errors.push(w + ": неверное регулярное выражение"); }
  });
}

function validateStories(errors, topicIds) {
  const storyIds = new Set();
  const BAD_FORMS = ["be", "am", "is", "are", "was", "were", "been", "being"];

  (DATA.stories || []).forEach(function (s, i) {
    const where = "Рассказ " + (s.id || "#" + (i + 1));
    if (!s.id) errors.push(where + ": нет id");
    if (storyIds.has(s.id)) errors.push(where + ": такой id уже есть");
    storyIds.add(s.id);
    if (!s.title) errors.push(where + ": нет названия");
    if (LEVELS.indexOf(s.level) === -1) errors.push(where + ": неизвестный уровень «" + s.level + "»");
    if (!Array.isArray(s.text) || s.text.length === 0) { errors.push(where + ": нет текста"); return; }
    if (!Array.isArray(s.box) || !Array.isArray(s.gaps)) { errors.push(where + ": нужны поля box и gaps"); return; }

    // Номера пропусков в тексте: (1) ___ (2) ___ ... по порядку
    const marks = [];
    s.text.join(" ").replace(/\((\d+)\)\s*___/g, function (m, n) { marks.push(Number(n)); return m; });
    marks.forEach(function (n, k) {
      if (n !== k + 1) errors.push(where + ": номера пропусков в тексте идут не по порядку (ожидалось " + (k + 1) + ", найдено " + n + ")");
    });
    if (marks.length !== s.gaps.length) errors.push(where + ": в тексте " + marks.length + " пропусков, а в gaps — " + s.gaps.length);
    if (s.box.length !== s.gaps.length) errors.push(where + ": в рамке " + s.box.length + " глаголов, а пропусков " + s.gaps.length);

    // Рамка: уникальные глаголы, формы не пересекаются
    const verbForms = {};   // форма → глагол
    const verbs = new Set();
    s.box.forEach(function (b) {
      if (!b.verb || !Array.isArray(b.forms) || b.forms.length === 0) { errors.push(where + ": у глагола рамки нет verb/forms"); return; }
      if (verbs.has(b.verb)) errors.push(where + ": глагол «" + b.verb + "» в рамке дважды");
      verbs.add(b.verb);
      if (b.forms.indexOf(b.verb) === -1) errors.push(where + ": в forms глагола «" + b.verb + "» нет начальной формы");
      b.forms.forEach(function (f) {
        if (BAD_FORMS.indexOf(f) !== -1) errors.push(where + ": форма «" + f + "» (глагол «" + b.verb + "») — вспомогательное слово, его в forms быть не должно");
        if (verbForms[f] && verbForms[f] !== b.verb) errors.push(where + ": форма «" + f + "» есть и у «" + verbForms[f] + "», и у «" + b.verb + "»");
        verbForms[f] = b.verb;
      });
    });

    // Пропуски: каждый глагол рамки — ровно в одном пропуске
    const used = {};
    s.gaps.forEach(function (g, k) {
      const gw = where + ", пропуск " + (g.n || k + 1);
      if (g.n !== k + 1) errors.push(gw + ": номер должен быть " + (k + 1));
      if (!verbs.has(g.verb)) errors.push(gw + ": глагола «" + g.verb + "» нет в рамке");
      used[g.verb] = (used[g.verb] || 0) + 1;
      if (!topicIds.has(g.topic)) errors.push(gw + ": тема «" + g.topic + "» не найдена в topics.js");
      if (!Array.isArray(g.answers) || g.answers.length === 0) { errors.push(gw + ": нет answers"); return; }
      g.answers.forEach(function (a) {
        const last = String(a).trim().toLowerCase().split(/\s+/).pop();
        if (verbForms[last] !== g.verb) errors.push(gw + ": ответ «" + a + "» не заканчивается формой глагола «" + g.verb + "»");
      });
      if (!g.explain) errors.push(gw + ": нет explain");
    });
    Object.keys(used).forEach(function (v) {
      if (used[v] !== 1) errors.push(where + ": глагол «" + v + "» использован в " + used[v] + " пропусках (должен быть ровно в одном)");
    });
  });
}

// ---------------------------------------------------------------------
// Неправильные глаголы (data/verbs.js, data/verb-examples.js, раздел verbs.html)
// ---------------------------------------------------------------------
function validateVerbs(errors) {
  const seen = new Set();
  const examples = DATA.verbExamples || {};

  (DATA.verbs || []).forEach(function (v, i) {
    const where = "Глагол «" + (v.inf || "#" + (i + 1)) + "»";
    if (!v.inf || !/^[a-z]+$/.test(v.inf)) errors.push(where + ": inf должен состоять из маленьких латинских букв");
    if (seen.has(v.inf)) errors.push(where + ": такой инфинитив уже есть");
    seen.add(v.inf);
    ["past", "pp"].forEach(function (key) {
      if (!Array.isArray(v[key]) || v[key].length === 0) errors.push(where + ": " + key + " должен быть непустым массивом");
      else v[key].forEach(function (f) {
        if (typeof f !== "string" || !/^[a-z]+$/.test(f)) errors.push(where + ": форма «" + f + "» в " + key + " должна состоять из маленьких латинских букв");
      });
    });
    if (!v.ru) errors.push(where + ": нет перевода (ru)");
    if ([1, 2, 3].indexOf(v.tier) === -1) errors.push(where + ": tier должен быть 1, 2 или 3 (сейчас «" + v.tier + "»)");
    if (!VERB_GROUPS[v.group]) errors.push(where + ": неизвестная группа «" + v.group + "» (см. VERB_GROUPS в js/data.js)");

    const ex = examples[v.inf];
    if (!ex) errors.push(where + ": нет предложений в data/verb-examples.js");
    else {
      if (!Array.isArray(ex) || ex.length < 2) errors.push(where + ": в verb-examples.js нужно два предложения (V2 и V3)");
      else [0, 1].forEach(function (k) {
        if (typeof ex[k] !== "string" || (ex[k].match(/___/g) || []).length !== 1) {
          errors.push(where + ": в предложении " + (k === 0 ? "V2" : "V3") + " должен быть ровно один пропуск ___");
        }
      });
    }
  });

  Object.keys(examples).forEach(function (inf) {
    if (!seen.has(inf)) errors.push("verb-examples.js: предложения для неизвестного глагола «" + inf + "»");
  });
}
