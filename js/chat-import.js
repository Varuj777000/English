// =====================================================================
// chat-import.js — импорт файла, который присылает Claude в чате.
//
// Формат файла (его описание есть и на странице «Темы» → «Список тем для
// чата с Claude» — это тот же текст, что вы отправляете Claude):
//   {
//     "type": "chat-import",
//     "version": 1,
//     "date": "2026-10-01",
//     "mistakes": [
//       { "topic": "prepositions-time", "wrong": "I was born on 1995",
//         "correct": "I was born in 1995", "explanation": "С годами используется in" }
//     ],
//     "words": [
//       { "en": "reliable", "ru": "надёжный", "example": "She is a reliable friend." }
//     ]
//   }
//
// Что происходит при загрузке:
//   - КАЖДАЯ ошибка сохраняется как карточка «Мои ошибки» (addMyMistake) и
//     попадает в обычное повторение: сайт показывает неправильное предложение,
//     вы печатаете исправление; интервалы SM-2, как у слов;
//   - если тема ошибки ЕСТЬ на сайте — дополнительно повышается её приоритет
//     (RULES.priority.onChatMistake), и упражнения по ней идут чаще;
//   - та же пара wrong+correct второй раз не добавляется;
//   - слова добавляются точно так же, как через форму на странице «Слова»
//     (addCustomWord из words-store.js), с пометкой source: "chat".
// =====================================================================

// Текст-инструкция для Claude: что проверить, формат chat-import и список ID
// тем. Его копируют со страницы «Темы» и со страницы «Письмо».
//   taskLines — необязательные строки с заданием и текстом, вставляются в
//   начало (по умолчанию — просто «проверь мой текст»).
// Ошибки просим писать ЦЕЛЫМИ предложениями: из них делаются карточки
// «Мои ошибки», где нужно напечатать исправленное предложение.
function buildClaudeText(taskLines) {
  const progress = loadProgress();
  const level = progress.level || "примерно A2";

  const lines = [];
  lines.push("Я учу английский (родной язык — русский, мой уровень: " + level + ").");
  if (taskLines && taskLines.length) {
    taskLines.forEach(function (l) { lines.push(l); });
  } else {
    lines.push("Проверь мой текст и найди ошибки. Объяснения пиши по-русски.");
  }
  lines.push("");
  lines.push("В конце дай мне JSON-файл строго такого формата (я загружу его на свой учебный сайт):");
  lines.push("");
  lines.push(JSON.stringify({
    type: "chat-import",
    version: 1,
    date: todayStr(),
    mistakes: [
      {
        topic: "prepositions-time",
        wrong: "I was born on 1995",
        correct: "I was born in 1995",
        explanation: "С годами используется in"
      }
    ],
    words: [
      { en: "reliable", ru: "надёжный", example: "She is a reliable friend." }
    ]
  }, null, 2));
  lines.push("");
  lines.push("Правила:");
  lines.push("- В wrong и correct пиши ЦЕЛОЕ предложение из моего текста, а не отдельное слово: по ним я потом тренируюсь.");
  lines.push("- Поле topic выбирай ТОЛЬКО из списка ниже. Если ни один ID не подходит, пиши \"other\".");
  lines.push("- В words добавляй полезные новые слова из нашего разговора (en, ru, example).");
  lines.push("- date — сегодняшняя дата в формате ГГГГ-ММ-ДД.");
  lines.push("");
  lines.push("Список тем (ID — название, уровень):");

  LEVELS.forEach(function (lvl) {
    const topics = DATA.topics.filter(function (t) { return t.level === lvl && t.category !== "reading"; });
    if (topics.length === 0) return;
    lines.push("");
    lines.push("[" + lvl + "]");
    topics.forEach(function (t) {
      lines.push(t.id + " — " + t.title);
    });
  });

  return lines.join("\n");
}

// Проверить, что файл похож на настоящий chat-import.
// Возвращает { valid: true } или { valid: false, error: "текст для человека" }.
function validateChatImport(data) {
  if (!data || typeof data !== "object") return { valid: false, error: "Это не похоже на файл от Claude (не JSON-объект)." };
  if (data.type !== "chat-import") return { valid: false, error: "Неверный формат файла: нет поля type: \"chat-import\"." };
  if (data.mistakes !== undefined && !Array.isArray(data.mistakes)) return { valid: false, error: "Поле mistakes должно быть списком." };
  if (data.words !== undefined && !Array.isArray(data.words)) return { valid: false, error: "Поле words должно быть списком." };

  const mistakes = data.mistakes || [];
  const words = data.words || [];
  if (mistakes.length === 0 && words.length === 0) return { valid: false, error: "В файле нет ни ошибок, ни слов — нечего загружать." };

  for (let i = 0; i < mistakes.length; i++) {
    const m = mistakes[i];
    if (!m || !m.wrong || !m.correct) return { valid: false, error: "Ошибка #" + (i + 1) + ": нужны поля wrong и correct." };
  }
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    if (!w || !w.en || !w.ru) return { valid: false, error: "Слово #" + (i + 1) + ": нужны поля en и ru." };
  }
  return { valid: true };
}

// Похоже ли, что этот файл уже загружали раньше (та же дата файла и то же
// число ошибок/слов, как в progress.imports)? Используется, чтобы
// предупредить перед повторной загрузкой — иначе приоритет тем из
// mistakes поднимется ещё раз (applyChatImport просто прибавляет очки,
// а не помнит, какие именно ошибки уже засчитаны).
function looksLikeDuplicateImport(progress, data) {
  const mistakesCount = (data.mistakes || []).length;
  const wordsCount = (data.words || []).length;
  return progress.imports.some(function (imp) {
    return imp.fileDate === (data.date || null) &&
      imp.mistakes === mistakesCount &&
      imp.words === wordsCount;
  });
}

// Применить файл к прогрессу (progress меняется «на месте»).
// Возвращает отчёт для показа пользователю.
function applyChatImport(progress, data) {
  const report = {
    topicsBoosted: [],  // темы, у которых повышен приоритет: [{id, title}]
    otherAdded: [],      // новые карточки «Другое»: [{wrong, correct}]
    wordsAdded: [],      // новые слова: [en, ...]
    wordsSkipped: []     // слова, которые уже были в повторении: [en, ...]
  };

  (data.mistakes || []).forEach(function (m) {
    const res = addMyMistake(progress, m, "chat");
    if (res.topic) report.topicsBoosted.push({ id: res.topic.id, title: res.topic.title });
    if (res.status === "added") report.otherAdded.push({ wrong: m.wrong, correct: m.correct });
    else report.mistakesDuplicate = (report.mistakesDuplicate || 0) + 1;
  });

  (data.words || []).forEach(function (w) {
    const result = addCustomWord(progress, w, "chat");
    if (result === "added" || result === "review") report.wordsAdded.push(w.en);
    else report.wordsSkipped.push(w.en);
  });

  progress.imports.push({
    date: todayStr(),
    fileDate: data.date || null,
    mistakes: (data.mistakes || []).length,
    words: (data.words || []).length
  });

  return report;
}

// «Мои ошибки»: сохранить одно предложение с ошибкой как карточку повторения
// (progress.otherMistakes) — для ЛЮБОЙ темы, а не только для неизвестной.
//   m      = { wrong, correct, explanation?, topic? }
//   source = "chat" | "manual"
// Если тема есть на сайте — её приоритет тоже повышается (RULES.priority.onChatMistake),
// как и раньше, чтобы упражнения по ней попадались чаще.
// Одинаковая пара wrong+correct второй раз не добавляется.
// Возвращает { status: "added" | "duplicate", topic: тема или null }.
function addMyMistake(progress, m, source) {
  const wrong = String(m.wrong || "").trim();
  const correct = String(m.correct || "").trim();
  const key = function (s) { return s.toLowerCase().replace(/\s+/g, " "); };
  const topic = m.topic ? findTopic(m.topic) : null;
  const realTopic = topic && topic.category !== "other" ? topic : null;

  const exists = progress.otherMistakes.some(function (x) {
    return key(x.wrong) === key(wrong) && key(x.correct) === key(correct);
  });
  if (exists) return { status: "duplicate", topic: null };

  if (realTopic) {
    const stats = getTopicStats(progress, realTopic.id);
    const P = RULES.priority;
    stats.priority = clamp(stats.priority + P.onChatMistake, P.min, P.max);
    stats.lastWrong = todayStr();
  }
  progress.otherMistakes.push({
    id: nextOtherMistakeId(progress),
    topic: m.topic || null,
    wrong: wrong,
    correct: correct,
    explanation: m.explanation ? String(m.explanation).trim() : "",
    source: source || "manual",
    date: todayStr(),
    srs: { ef: RULES.words.startEf, interval: 0, reps: 0, lapses: 0, due: todayStr(), added: todayStr() }
  });
  return { status: "added", topic: realTopic };
}

// Уникальный ID для карточки «Другое» (id + время + немного случайности —
// этого достаточно для одного пользователя в одном браузере).
function nextOtherMistakeId(progress) {
  return "om-" + Date.now() + "-" + Math.floor(Math.random() * 10000);
}

// Удалить карточку «Другое» (используется в настройках)
function deleteOtherMistake(progress, id) {
  progress.otherMistakes = progress.otherMistakes.filter(function (m) { return m.id !== id; });
}
