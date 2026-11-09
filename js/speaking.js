// =====================================================================
// speaking.js — раздел «Говорение» (speaking.html): логика без интерфейса.
//
// Идея «тени» (shadowing): слушаете фразу, повторяете вслух, записываете себя
// и сравниваете с образцом. Сайт не оценивает произношение сам (для этого
// нужен внешний сервис распознавания) — оценку ставите вы: «не получилось /
// почти / получилось». Дальше всё как у слов: SM-2 решает, когда фраза
// вернётся (applySm2 из js/srs.js, поэтому srs.js должен быть загружен).
//
// Откуда берутся фразы:
//   - ваши исправленные предложения из «Мои ошибки» (progress.otherMistakes,
//     поле correct) — сначала они: говорить правильно именно то, в чём ошибались;
//   - диктанты (type "listen") тем вашего уровня и ниже: q — фраза, ru — перевод.
//
// Прогресс: progress.speaking[id] = карточка SM-2 { ef, interval, reps, lapses,
// due, added, lastSeen, lastQuality, tries }, где id = "om:<id ошибки>" или
// "ex:<id упражнения>". Каждая оценённая фраза засчитывается как карточка
// слова в активности дня (recordActivity {words: 1}) — идёт в серию.
// =====================================================================

// Все фразы, доступные для проговаривания: [{ id, en, ru, topic, level, source }]
function speakingPool(progress) {
  const maxIdx = levelIndex(progress.level || LEVELS[0]);
  const pool = [];

  progress.otherMistakes.forEach(function (m) {
    if (!m.correct) return;
    pool.push({ id: "om:" + m.id, en: m.correct, ru: m.explanation || "", topic: m.topic || null, level: null, source: "mistake" });
  });

  DATA.exercises.forEach(function (e) {
    if (e.type !== "listen" || !e.q) return;
    const topic = findTopic(e.topic);
    const level = topic ? topic.level : LEVELS[0];
    if (levelIndex(level) > maxIdx) return;
    pool.push({ id: "ex:" + e.id, en: e.q, ru: e.ru || "", topic: e.topic, level: level, source: "dictation" });
  });
  return pool;
}

function speakingCard(progress, id) {
  const card = progress.speaking[id];
  return card && typeof card === "object" ? card : null;
}

// Сколько фраз просрочено/пора повторить (для главной и страницы)
function speakingStats(progress) {
  const today = todayStr();
  const pool = speakingPool(progress);
  let tried = 0, due = 0, learned = 0;
  pool.forEach(function (p) {
    const c = speakingCard(progress, p.id);
    if (!c) return;
    tried += 1;
    if (c.due <= today) due += 1;
    if (c.interval >= RULES.speaking.learnedInterval) learned += 1;
  });
  return { total: pool.length, tried: tried, due: due, learned: learned, fresh: pool.length - tried };
}

// Набор фраз на один заход: сначала подошедшие по сроку, потом новые.
// Среди каждой группы — ваши ошибки впереди, остальное вперемешку.
function pickSpeakingSession(progress, count) {
  const today = todayStr();
  const pool = speakingPool(progress);
  const due = [], fresh = [];
  pool.forEach(function (p) {
    const c = speakingCard(progress, p.id);
    if (!c) fresh.push(p);
    else if (c.due <= today) due.push({ p: p, due: c.due });
  });
  due.sort(function (a, b) { return a.due < b.due ? -1 : a.due > b.due ? 1 : 0; });

  const mine = function (p) { return p.source === "mistake" ? 0 : 1; };
  const ordered = due.map(function (d) { return d.p; })
    .sort(function (a, b) { return mine(a) - mine(b); })
    .concat(shuffle(fresh).sort(function (a, b) { return mine(a) - mine(b); }));
  return ordered.slice(0, count);
}

// ---------------------------------------------------------------------
// Распознавание речи (необязательное, выключено по умолчанию).
// Само распознавание делает браузер (SpeechRecognition / webkitSpeechRecognition):
// в Chrome звук уходит на сервер Google — поэтому функция включается только
// самим учеником (progress.settings.speechRecognition). Здесь — чистая логика:
// сравнить услышанный текст с фразой.
// ---------------------------------------------------------------------

function speechRecognitionSupported() {
  return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
}

// Слова для сравнения: те же правила, что при проверке ответов (регистр,
// знаки, сокращения: I'm = I am, цифры 0–20 словами)
function spokenTokens(text) {
  const s = typeof normalizeAnswer === "function"
    ? normalizeAnswer(text)
    : String(text).toLowerCase().replace(/[^a-z0-9' ]+/g, " ").replace(/\s+/g, " ").trim();
  return s.split(" ").filter(Boolean);
}

// Сколько слов фразы встретилось в услышанном В ТОМ ЖЕ ПОРЯДКЕ (длиннейшая общая
// подпоследовательность). Возвращает { matched, missed: [слова фразы], extra: [лишние слова] }.
function alignSpoken(expectedTokens, heardTokens) {
  const n = expectedTokens.length, m = heardTokens.length;
  const dp = [];
  for (let i = 0; i <= n; i++) { dp.push(new Array(m + 1).fill(0)); }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      dp[i][j] = expectedTokens[i - 1] === heardTokens[j - 1]
        ? dp[i - 1][j - 1] + 1
        : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  const missed = [], extra = [];
  let i = n, j = m;
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && expectedTokens[i - 1] === heardTokens[j - 1]) { i--; j--; }
    else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) { extra.unshift(heardTokens[j - 1]); j--; }
    else { missed.unshift(expectedTokens[i - 1]); i--; }
  }
  return { matched: dp[n][m], missed: missed, extra: extra };
}

// Сравнить фразу с тем, что услышал распознаватель. heardList — варианты
// распознавания (alternatives): берётся лучший. Возвращает
// { heard, total, matched, percent, missed, extra, quality } или null, если ничего не услышано.
// quality — ПРЕДЛОЖЕНИЕ оценки (RULES.speaking.quality*), решает ученик.
function compareSpoken(expected, heardList) {
  const exp = spokenTokens(expected);
  if (exp.length === 0) return null;
  let best = null;
  (heardList || []).forEach(function (h) {
    const tokens = spokenTokens(h);
    if (tokens.length === 0) return;
    const a = alignSpoken(exp, tokens);
    if (!best || a.matched > best.matched || (a.matched === best.matched && a.extra.length < best.extra.length)) {
      best = { heard: String(h).trim(), matched: a.matched, missed: a.missed, extra: a.extra };
    }
  });
  if (!best) return null;
  const percent = Math.round(best.matched / exp.length * 100);
  const S = RULES.speaking;
  best.total = exp.length;
  best.percent = percent;
  best.quality = percent >= S.recogGood ? S.qualityGood : percent >= S.recogOk ? S.qualityOk : S.qualityBad;
  return best;
}

// Записать оценку: quality 0..5 (как в SM-2). Возвращает обновлённую карточку.
// match — необязательно: процент совпадения с распознаванием (запоминается как lastMatch).
function gradeSpeaking(progress, id, quality, match) {
  const today = todayStr();
  let card = speakingCard(progress, id);
  if (!card) {
    card = progress.speaking[id] = { ef: RULES.words.startEf, interval: 0, reps: 0, lapses: 0, due: today, added: today, tries: 0 };
  }
  applySm2(card, quality);
  card.tries = (card.tries || 0) + 1;
  if (typeof match === "number") card.lastMatch = match;
  recordActivity(progress, { words: 1 });
  return card;
}
