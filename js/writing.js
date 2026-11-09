// =====================================================================
// writing.js — «Письмо по шаблону» (writing.html): логика без интерфейса.
//
// Сайт не проверяет грамматику по-настоящему (это под силу только живому
// проверяющему — например, Claude в чате). Что он делает сам:
//   1) считает слова;
//   2) прогоняет автопроверки задания (checks): использовали ли нужные
//      конструкции — и не использовали ли запрещённые (forbid);
//   3) подсвечивает «ловушки» (DATA.writingPitfalls) — ваши типичные ошибки;
//   4) собирает текст для чата с Claude (buildWritingClaudeText): задание +
//      ваш текст + формат chat-import, чтобы найденные ошибки вернулись на
//      сайт в «Мои ошибки» (js/chat-import.js).
//
// Прогресс: progress.writing[id] = { draft, text, times, lastSeen, words,
// checksPassed, checksTotal } — draft сохраняется по ходу набора, остальное
// записывается кнопкой «Готово». Готовый текст засчитывается в активность
// дня как RULES.writing.activityPoints карточек слов (идёт в серию).
// =====================================================================

function countWords(text) {
  return (String(text || "").match(/[A-Za-z0-9][A-Za-z0-9'’-]*/g) || []).length;
}

// Слишком много кириллицы — письмо должно быть по-английски
function looksRussian(text) {
  const cyr = (String(text || "").match(/[А-Яа-яЁё]/g) || []).length;
  const lat = (String(text || "").match(/[A-Za-z]/g) || []).length;
  return cyr > 10 && cyr > lat;
}

function writingRegex(pattern, flags, global) {
  const f = (flags === undefined ? "i" : flags) + (global ? "g" : "");
  return new RegExp(pattern, f);
}

// Прогнать автопроверки задания: [{ text, ok }]
function runWritingChecks(task, text) {
  return (task.checks || []).map(function (c) {
    const found = (String(text).match(writingRegex(c.pattern, "i", true)) || []).length;
    const ok = c.forbid ? found === 0 : found >= (c.min || 1);
    return { text: c.text, ok: ok, forbid: !!c.forbid };
  });
}

// Найти «ловушки»: [{ id, tip, found: ["finish study", ...] }] (не больше 3 фрагментов)
function findWritingPitfalls(text) {
  const out = [];
  DATA.writingPitfalls.forEach(function (p) {
    const src = String(text);
    const re = writingRegex(p.pattern, p.flags, true);
    const found = [];
    let m;
    while ((m = re.exec(src)) !== null) {
      if (m[0] === "") { re.lastIndex += 1; continue; }
      // Фрагмент показываем до конца слова и без ведущей пунктуации: ". went" → "went"
      const tail = /^\S*/.exec(src.slice(m.index + m[0].length))[0];
      const snippet = (m[0] + tail).replace(/^[\s.!?(]+/, "").replace(/[.,!?;:]+$/, "");
      if (snippet) found.push(snippet);
    }
    if (found.length === 0) return;
    // уникальные фрагменты, не больше трёх
    const uniq = found.filter(function (s, i) { return found.indexOf(s) === i; }).slice(0, 3);
    out.push({ id: p.id, tip: p.tip, found: uniq });
  });
  return out;
}

function evaluateWriting(task, text) {
  const checks = runWritingChecks(task, text);
  return {
    words: countWords(text),
    checks: checks,
    passed: checks.filter(function (c) { return c.ok; }).length,
    total: checks.length,
    pitfalls: findWritingPitfalls(text)
  };
}

function findWritingTask(id) {
  return DATA.writing.filter(function (t) { return t.id === id; })[0] || null;
}

function writingRecord(progress, id) {
  const r = progress.writing[id];
  return r && typeof r === "object" ? r : null;
}

function saveWritingDraft(progress, id, text) {
  const r = writingRecord(progress, id) || (progress.writing[id] = { times: 0 });
  r.draft = text;
  r.lastSeen = todayStr();
}

// Письмо готово: запоминаем текст и результат проверок, засчитываем активность.
function finishWriting(progress, task, text) {
  const ev = evaluateWriting(task, text);
  const r = writingRecord(progress, task.id) || (progress.writing[task.id] = { times: 0 });
  r.text = text;
  r.draft = "";
  r.times = (r.times || 0) + 1;
  r.lastSeen = todayStr();
  r.words = ev.words;
  r.checksPassed = ev.passed;
  r.checksTotal = ev.total;
  recordActivity(progress, { words: RULES.writing.activityPoints });
  return r;
}

// Текст для чата с Claude: задание, мой текст и просьба проверить + формат
// chat-import (buildClaudeText в js/chat-import.js).
function buildWritingClaudeText(task, text) {
  const lines = [
    "Задание на письмо: «" + task.title + "». " + task.prompt +
      " (" + task.minWords + "–" + task.maxWords + " слов, уровень " + task.level + ")",
    "",
    "Мой текст:",
    "<<<",
    String(text).trim(),
    ">>>",
    "",
    "Что сделать: 1) исправь ошибки и коротко объясни каждую по-русски; 2) напиши улучшенную версию; " +
      "3) скажи, выполнено ли задание (план, нужные конструкции)."
  ];
  return buildClaudeText(lines);
}
