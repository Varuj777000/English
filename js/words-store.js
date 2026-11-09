// =====================================================================
// words-store.js — работа со «своими» словами:
// добавление вручную, разбор списка, удаление.
//
// Свои слова хранятся в progress.customWords:
//     { en: "reliable", ru: "надёжный", example: "...", source: "manual", added: "2026-10-01" }
//   source — откуда слово: "manual" (добавлено вручную) или "chat" (из файла чата).
//
// Каждое слово в повторении имеет запись в progress.words (ключ — слово
// маленькими буквами). Это «карточка» для алгоритма интервального повторения.
// =====================================================================

// Ключ слова: маленькие буквы, одинарные пробелы, прямой апостроф.
// "  Look  After " → "look after"
function wordKey(en) {
  return String(en)
    .toLowerCase()
    .replace(/[’‘`]/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

// Все слова: встроенные (из data/words) + свои.
function allWords(progress) {
  return DATA.words.concat(progress.customWords);
}

// Найти слово среди встроенных или своих (или undefined).
function findWord(progress, en) {
  const key = wordKey(en);
  return allWords(progress).find(function (w) { return wordKey(w.en) === key; });
}

// То же самое, но по уже готовому ключу (используется в повторении слов).
function wordByKey(progress, key) {
  return allWords(progress).find(function (w) { return wordKey(w.en) === key; });
}

// Поставить слово в очередь повторения (если его там ещё нет).
// Новое слово нужно повторить уже сегодня.
function addWordToReview(progress, en) {
  const key = wordKey(en);
  if (progress.words[key]) return false; // уже в повторении
  progress.words[key] = {
    ef: 2.5,          // «лёгкость» слова (для алгоритма SM-2)
    interval: 0,      // через сколько дней показать снова
    reps: 0,          // сколько раз подряд вспомнили правильно
    lapses: 0,        // сколько раз забыли
    due: todayStr(),  // когда показать
    added: todayStr()
  };
  return true;
}

// Добавить одно своё слово.
// Возвращает: "added"    — слово новое, добавлено
//             "review"   — слово есть в словаре сайта, просто поставлено в повторение
//             "exists"   — такое слово уже есть в повторении
//             "invalid"  — не заполнены обязательные поля
function addCustomWord(progress, word, source) {
  const en = String(word.en || "").trim().replace(/\s+/g, " ");
  const ru = String(word.ru || "").trim();
  const example = String(word.example || "").trim();
  if (!en || !ru) return "invalid";

  const existing = findWord(progress, en);
  if (existing) {
    // Слово уже известно сайту — достаточно поставить его в повторение
    return addWordToReview(progress, en) ? "review" : "exists";
  }

  progress.customWords.push({
    en: en,
    ru: ru,
    example: example,
    source: source || "manual",
    added: todayStr()
  });
  addWordToReview(progress, en);
  return "added";
}

// Удалить своё слово (и его карточку повторения).
function deleteCustomWord(progress, en) {
  const key = wordKey(en);
  progress.customWords = progress.customWords.filter(function (w) {
    return wordKey(w.en) !== key;
  });
  delete progress.words[key];
}

// ---------------------------------------------------------------------
// Разбор списка слов, вставленного одним текстом.
//
// Одна строка — одно слово:  word — перевод
// Можно добавить пример через |:  word — перевод | Example sentence.
// Разделителем может быть: —  –  -  =  :  или табуляция.
// Пустые строки пропускаются, номера и маркеры в начале ("1.", "-", "•") убираются.
//
// Возвращает { items: [ {en, ru, example, line} ], errors: [ {line, text} ] }
// ---------------------------------------------------------------------
function parseWordList(text) {
  const items = [];
  const errors = [];

  text.split(/\r?\n/).forEach(function (rawLine, index) {
    const lineNo = index + 1;
    // Убираем маркеры списка в начале: "1.", "2)", "-", "•", "*"
    let line = rawLine.trim().replace(/^(\d+[.)]\s*|[•*]\s*|-\s+)/, "");
    if (!line) return;

    // Пример после |
    let example = "";
    const bar = line.indexOf("|");
    if (bar !== -1) {
      example = line.slice(bar + 1).trim();
      line = line.slice(0, bar).trim();
    }

    const parts = splitWordLine(line);
    if (!parts) {
      errors.push({ line: lineNo, text: rawLine.trim(), reason: "не найден разделитель «—» между словом и переводом" });
      return;
    }
    if (!/[a-z]/i.test(parts.en)) {
      errors.push({ line: lineNo, text: rawLine.trim(), reason: "слева от разделителя должно быть английское слово" });
      return;
    }
    items.push({ en: parts.en, ru: parts.ru, example: example, line: lineNo });
  });

  return { items: items, errors: errors };
}

// Разделить строку «word — перевод» на две части (или null).
function splitWordLine(line) {
  // 1) Надёжные разделители: длинное/среднее тире, табуляция, " - " с пробелами, =, :
  //    Берём тот, что встречается в строке РАНЬШЕ всех (перевод тоже может содержать тире).
  const separators = ["—", "–", "\t", " - ", "=", ":"];
  let bestPos = -1;
  let bestSep = "";
  separators.forEach(function (sep) {
    const pos = line.indexOf(sep);
    if (pos > 0 && (bestPos === -1 || pos < bestPos)) {
      bestPos = pos;
      bestSep = sep;
    }
  });
  if (bestPos > 0) {
    const en = line.slice(0, bestPos).trim();
    const ru = line.slice(bestPos + bestSep.length).trim();
    if (en && ru) return { en: en, ru: ru };
  }
  // 2) Обычный дефис без пробелов ("cat-кошка"): делим по дефису, после которого
  //    идёт русская буква, чтобы не сломать слова вроде "well-known".
  const m = line.match(/^(.+?)\s*-\s*([А-Яа-яЁё].*)$/);
  if (m) return { en: m[1].trim(), ru: m[2].trim() };
  return null;
}
