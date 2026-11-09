// =====================================================================
// verbs.js — логика тренировки неправильных глаголов (verbs.html).
//
// Данные: DATA.verbs (data/verbs.js) и DATA.verbExamples (data/verb-examples.js).
// Прогресс: progress.verbs[inf] — карточка SM-2 на каждый глагол
// (applySm2 из js/srs.js), см. defaultProgress() в js/storage.js.
//
// Подключать после js/storage.js, js/rules.js, js/common.js, js/exercises.js
// (isAnswerCorrect, normalizeAnswer) и js/srs.js (applySm2).
//
// Четыре режима тренировки (VERB_MODES):
//   both   — «Впиши обе формы»: даны перевод и инфинитив → V2 и V3
//   form   — «Из формы в инфинитив»: дана V2 или V3 → инфинитив и недостающая форма
//   choice — «Выбери правильную форму»: 4 варианта, 3 из них — типичные ошибки
//   error  — «Найди ошибку»: в предложении неправильная форма, нужно исправить
// =====================================================================

const VERB_MODES = [
  { key: "both",   label: "Впиши обе формы" },
  { key: "form",   label: "Из формы в инфинитив" },
  { key: "choice", label: "Выбери правильную форму" },
  { key: "error",  label: "Найди ошибку" },
  { key: "mix",    label: "Вперемешку" }
];

// Тема, на приоритет которой влияют ответы в тренировке (id из data/topics.js)
const VERB_TOPIC = "irregular-verbs";

const VERB_BY_INF = {};
DATA.verbs.forEach(function (v) { VERB_BY_INF[v.inf] = v; });

// ---------------------------------------------------------------------
// Состояние глагола в прогрессе
// ---------------------------------------------------------------------

function verbCard(progress, inf) { return progress.verbs[inf] || null; }

// Выучен: интервал повторения дорос до RULES.verbs.learnedInterval дней
function verbIsLearned(progress, inf) {
  const c = verbCard(progress, inf);
  return !!c && c.interval >= RULES.verbs.learnedInterval;
}

// К повторению: уже тренировали, и срок пришёл (или просрочен)
function verbIsDue(progress, inf) {
  const c = verbCard(progress, inf);
  return !!c && c.due <= todayStr();
}

// Слабый: последний ответ неверный или повторение просрочено
function verbIsWeak(progress, inf) {
  const c = verbCard(progress, inf);
  return !!c && (c.lastCorrect === false || c.due <= todayStr());
}

function verbStats(progress) {
  let learned = 0;
  let due = 0;
  DATA.verbs.forEach(function (v) {
    if (verbIsLearned(progress, v.inf)) learned += 1;
    if (verbIsDue(progress, v.inf)) due += 1;
  });
  return { learned: learned, total: DATA.verbs.length, due: due };
}

// ---------------------------------------------------------------------
// Какие глаголы тренировать
// ---------------------------------------------------------------------

// source: "all" | "t1" | "t12" | "group" | "weak" | "new"
function verbPool(progress, source, group) {
  return DATA.verbs.filter(function (v) {
    switch (source) {
      case "t1":    return v.tier === 1;
      case "t12":   return v.tier <= 2;
      case "group": return v.group === group;
      case "weak":  return verbIsWeak(progress, v.inf);
      case "new":   return !verbCard(progress, v.inf);
      default:      return true;
    }
  });
}

// Выбрать count глаголов (count = 0 → все): сначала слабые и просроченные
// (самые просроченные раньше), потом ещё не пробовавшиеся, потом остальные
// (кто давно не повторялся). Внутри одной группы порядок случайный.
function pickVerbSession(progress, pool, count) {
  const today = todayStr();
  const ranked = shuffle(pool).map(function (v) {
    const c = verbCard(progress, v.inf);
    let rank = 2;
    let due = "9999";
    if (!c) rank = 1;
    else {
      due = c.due;
      if (c.lastCorrect === false || c.due <= today) rank = 0;
    }
    return { v: v, rank: rank, due: due };
  });
  ranked.sort(function (a, b) { return a.rank - b.rank || (a.due < b.due ? -1 : a.due > b.due ? 1 : 0); });
  const list = ranked.map(function (r) { return r.v; });
  return count > 0 ? list.slice(0, count) : list;
}

// ---------------------------------------------------------------------
// Запись ответа в прогресс (один вызов на глагол за сессию)
//   answer   — что напечатал или выбрал ученик (для списка спорных ответов)
//   disputed — нажато «Мой ответ тоже верный»
// ---------------------------------------------------------------------
function recordVerbAnswer(progress, v, correct, answer, disputed) {
  const today = todayStr();
  let card = progress.verbs[v.inf];
  const isNew = !card;
  if (isNew) {
    card = progress.verbs[v.inf] = {
      right: 0, wrong: 0, lastCorrect: null, lastSeen: null,
      ef: RULES.words.startEf, interval: 0, reps: 0, lapses: 0, due: today, added: today
    };
  }
  // Верный ответ в тот же день, что и прошлый разбор, интервал не растит
  // (иначе три тренировки подряд «выучат» глагол за один день); ошибка
  // сбрасывает интервал всегда.
  const reviewedToday = card.lastSeen === today;
  if (!correct || isNew || !reviewedToday) {
    applySm2(card, correct ? RULES.verbs.rightQuality : RULES.verbs.wrongQuality);
  }
  card.lastSeen = today;
  card.lastCorrect = !!correct;
  if (correct) card.right += 1;
  else card.wrong += 1;

  // Ошибки и верные ответы влияют на приоритет темы «Неправильные глаголы» так же,
  // как обычные упражнения. Вызов один на глагол за сессию (так вызывает его
  // тренировка), спорный ответ приоритет не меняет.
  if (!disputed) applyAnswerToTopic(getTopicStats(progress, VERB_TOPIC), correct);

  if (disputed) {
    progress.disputed.push({
      kind: "verb", inf: v.inf, ru: v.ru, answer: answer || "",
      expected: verbFormsText(v), date: today
    });
  }
}

// 1 глагол, 2 глагола, 5 глаголов
function verbWord(n) {
  const m10 = n % 10;
  const m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return "глагол";
  if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return "глагола";
  return "глаголов";
}

// «go – went – gone» (варианты через «/»)
function verbFormsText(v) {
  return v.inf + " – " + v.past.join(" / ") + " – " + v.pp.join(" / ");
}

// ---------------------------------------------------------------------
// Типичные ошибки: неправильные формы для режимов «Выбери…» и «Найди ошибку»
// ---------------------------------------------------------------------

// Как ошибочно образуют «по правилу»: make → maked, go → goed, run → runned
function regularize(inf) {
  if (inf === "be") return "beed";          // «bed» — настоящее слово («кровать»)
  if (/e$/.test(inf)) return inf + "d";
  if (/[^aeiou]y$/.test(inf)) return inf.slice(0, -1) + "ied";
  if (/^[^aeiou]*[aeiou][^aeiouwxy]$/.test(inf)) return inf + inf.slice(-1) + "ed";
  return inf + "ed";
}

// make → making, run → running, lie → lying (форма -ing: тоже частая путаница)
function ingForm(inf) {
  if (/ie$/.test(inf)) return inf.slice(0, -2) + "ying";
  if (/e$/.test(inf)) return inf.slice(0, -1) + "ing";
  if (/^[^aeiou]*[aeiou][^aeiouwxy]$/.test(inf)) return inf + inf.slice(-1) + "ing";
  return inf + "ing";
}

// Какие формы подходят для слота ("past" | "pp") в предложении этого глагола
function acceptedForms(v, slot) {
  const ex = DATA.verbExamples[v.inf];
  return (ex && ex[2] && ex[2][slot]) || v[slot];
}

// Неправильные формы для слота, по убыванию «типичности»: по правилу (maked),
// форма другого слота (gone вместо went), двойное окончание (wented), инфинитив...
// Никогда не содержит ни одной правильной формы этого слота.
function wrongForms(v, slot) {
  const correct = v[slot];
  const other = slot === "past" ? v.pp : v.past;
  const base = correct[0];
  const doubled = /e$/.test(base) ? base + "d" : base + "ed";
  const enForm = /e$/.test(v.inf) ? v.inf + "n" : v.inf + "en";          // make → maken, go → goen
  const plainEd = /e$/.test(v.inf) ? v.inf + "d" : v.inf + "ed";         // без удвоения: run → runed
  const cand = [regularize(v.inf)].concat(other, [doubled, v.inf, enForm, plainEd, ingForm(v.inf)]);
  const seen = {};
  return cand.filter(function (w) {
    if (!w || correct.indexOf(w) !== -1 || seen[w]) return false;
    seen[w] = true;
    return true;
  });
}

// Предложение к глаголу с формой word на месте пропуска
function verbSentence(v, slot, word) {
  const ex = DATA.verbExamples[v.inf];
  const frame = ex ? ex[slot === "past" ? 0 : 1] : (slot === "past" ? "Yesterday they ___ it." : "I have ___ it.");
  return frame.replace("___", word);
}

// ---------------------------------------------------------------------
// Вопросы и проверка
// ---------------------------------------------------------------------

function pick(list) { return list[Math.floor(Math.random() * list.length)]; }

const SLOT_LABEL = { inf: "V1", past: "V2", pp: "V3" };

// mode: "both" | "form" | "choice" | "error" | "mix"
function buildVerbQuestion(v, mode) {
  if (mode === "mix") mode = pick(["both", "form", "choice", "error"]);
  const q = { mode: mode, v: v };

  if (mode === "form") {
    q.givenSlot = pick(["past", "pp"]);
    q.givenWord = pick(v[q.givenSlot]);
    q.missingSlot = q.givenSlot === "past" ? "pp" : "past";
  } else if (mode === "choice") {
    q.slot = pick(["past", "pp"]);
    const right = pick(acceptedForms(v, q.slot));
    const wrong = wrongForms(v, q.slot).filter(function (w) { return acceptedForms(v, q.slot).indexOf(w) === -1; });
    q.right = right;
    q.options = shuffle([right].concat(wrong.slice(0, 3)));
    q.sentence = verbSentence(v, q.slot, "___");
  } else if (mode === "error") {
    q.slot = pick(["past", "pp"]);
    const wrong = wrongForms(v, q.slot);
    q.wrong = pick(wrong.slice(0, 2));
    q.sentence = verbSentence(v, q.slot, q.wrong);
  }
  return q;
}

// inputs — массив строк из полей ввода (для choice — выбранный вариант в [0]).
// Возвращает { correct, parts: [{ label, user, ok, expected }] }
function gradeVerbQuestion(q, inputs) {
  const v = q.v;
  const parts = [];
  function part(label, user, expectedList) {
    parts.push({ label: label, user: user, ok: isAnswerCorrect(user, expectedList), expected: expectedList.join(" / ") });
  }

  if (q.mode === "both") {
    part("V2", inputs[0], v.past);
    part("V3", inputs[1], v.pp);
  } else if (q.mode === "form") {
    // подсказка может совпасть с инфинитивом другого глагола (lay: V2 от lie и V1 от lay)
    const twin = DATA.verbs.filter(function (w) { return w !== v && w.inf === q.givenWord; })[0];
    part("V1", inputs[0], twin ? [v.inf, twin.inf] : [v.inf]);
    part(SLOT_LABEL[q.missingSlot], inputs[1], twin ? v[q.missingSlot].concat(twin[q.missingSlot]) : v[q.missingSlot]);
  } else if (q.mode === "choice") {
    const okForms = acceptedForms(v, q.slot);
    parts.push({ label: SLOT_LABEL[q.slot], user: inputs[0], ok: okForms.indexOf(inputs[0]) !== -1, expected: okForms.join(" / ") });
  } else {
    const okForms = acceptedForms(v, q.slot);
    const user = String(inputs[0] || "");
    // верно, если исправлено слово или переписано всё предложение с верной формой
    const ok = isAnswerCorrect(user, okForms) ||
      okForms.some(function (f) { return isAnswerCorrect(user, [verbSentence(v, q.slot, f)]); });
    parts.push({ label: SLOT_LABEL[q.slot], user: user, ok: ok, expected: okForms.join(" / ") });
  }

  return {
    correct: parts.every(function (p) { return p.ok; }),
    parts: parts
  };
}
