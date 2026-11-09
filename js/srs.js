// =====================================================================
// srs.js — повторение с интервалами: алгоритм SM-2 и показ карточек.
//
// Как работает SM-2 (упрощённо):
//   У каждой карточки есть «лёгкость» (ef, обычно 1.3–2.5+) и «интервал» —
//   через сколько дней показать её снова. После каждого повторения вы
//   оцениваете, как вспомнили (0–5). Если оценка меньше 3 — карточка
//   «забыта»: интервал сбрасывается на 1 день. Если 3 и больше — интервал
//   растёт (1 день → 6 дней → interval × ef ...), а чем выше оценка,
//   тем сильнее растёт «лёгкость» и тем реже карточка будет попадаться.
//
// Оценки при показе карточки:
//   0 — «Не помню»   3 — «Трудно»   4 — «Хорошо»   5 — «Легко»
//
// Два вида карточек в одной очереди повторения:
//   "word"  — слово (свои + встроенный словарь). Направление показа
//             случайное (см. RULES.words.ruEnShare):
//               en-ru — видите английское слово, перевод открывается
//                       по кнопке, оцениваете себя сами;
//               ru-en — видите русский перевод, печатаете английское
//                       слово, правильность проверяет сайт, а сложность
//                       («трудно/хорошо/легко») спрашивается, только
//                       если ответ верный (или если вы нажали «Мой ответ
//                       тоже верный» — как в обычных упражнениях).
//             На карточках слов есть кнопка «Уже знаю» (markWordKnown) —
//             слово почти перестаёт попадаться, но не удаляется совсем.
//   "other" — ошибка из чата с Claude, для которой на сайте нет темы
//             (см. js/chat-import.js): неправильно → правильно + объяснение,
//             оценка всегда «на глаз», как en-ru.
// =====================================================================

// ---------------------------------------------------------------------
// Алгоритм SM-2 (общий для слов и карточек «Другое»)
//   card    — { ef, interval, reps, lapses, due, ... }
//   quality — 0..5
// Меняет card «на месте» и ничего не возвращает.
// ---------------------------------------------------------------------
function applySm2(card, quality) {
  const W = RULES.words;
  const today = todayStr();

  if (quality < 3) {
    // Забыли — начинаем интервал заново
    card.lapses = (card.lapses || 0) + 1;
    card.reps = 0;
    card.interval = 1;
  } else {
    if (card.reps === 0) card.interval = 1;
    else if (card.reps === 1) card.interval = 6;
    else card.interval = Math.round(card.interval * card.ef);
    card.reps += 1;
  }

  // Формула SM-2 для «лёгкости» карточки
  card.ef = Math.max(W.minEf, card.ef + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));
  card.due = addDays(today, card.interval);
  card.lastSeen = today;
  card.lastQuality = quality;
}

// Применить оценку к слову (key — ключ из progress.words, см. words-store.js)
function gradeWordCard(progress, key, quality) {
  const card = progress.words[key];
  if (card) applySm2(card, quality);
}

// Кнопка «Уже знаю»: слово не убирается из повторения совсем (вдруг вы его
// всё же забудете), но получает очень большой интервал — почти не будет
// попадаться. Одновременно засчитывается как «выученное» на странице
// прогресса (её порог RULES.words.masteredInterval намного меньше).
function markWordKnown(progress, key) {
  const card = progress.words[key];
  if (!card) return;
  const W = RULES.words;
  card.reps = Math.max(card.reps, 5);
  card.ef = Math.max(card.ef, W.startEf);
  card.interval = W.knownInterval;
  card.due = addDays(todayStr(), card.interval);
  card.lastSeen = todayStr();
  card.lastQuality = 5;
  card.knownByUser = true;
}

// Применить оценку к карточке «Другое» (id — из progress.otherMistakes)
function gradeOtherMistake(progress, id, quality) {
  const m = progress.otherMistakes.find(function (x) { return x.id === id; });
  if (m) applySm2(m.srs, quality);
}

// Общий вход для обоих видов карточек — этим пользуются lesson.js и words.js,
// чтобы не разбирать, что за карточка им попалась.
function gradeReviewItem(progress, item, quality) {
  if (item.kind === "word") gradeWordCard(progress, item.ref, quality);
  else gradeOtherMistake(progress, item.ref, quality);
}

// ---------------------------------------------------------------------
// Пополнение очереди словами из встроенного словаря (data/words/*.js)
//
// Слова, которые вы добавляете сами (формы на странице «Слова»), попадают
// в повторение сразу — это делает addCustomWord() в words-store.js.
// А вот встроенный словарь сайта сам по себе никуда не «просачивается»:
// эта функция каждый день добавляет из него порцию новых слов вашего
// уровня (и ниже), чтобы повторение не начиналось с пустой очереди.
// Вызывать можно много раз за день — вторая и следующие попытки ничего
// не добавят сверх дневного лимита RULES.words.newWordsPerDay (в него же
// засчитываются и слова, добавленные вами вручную сегодня — см. rules.js).
//
// Возвращает, сколько слов было добавлено (для информационного сообщения).
// ---------------------------------------------------------------------
function enrollNewWords(progress) {
  if (progress.settings.pauseNewWords) return 0;
  // Автопауза: много долгов — новых слов пока не добавляем
  if (dueWordKeys(progress).length + dueOtherMistakeIds(progress).length >= RULES.words.autoPauseDue) return 0;
  const today = todayStr();
  const addedToday = Object.keys(progress.words).filter(function (key) {
    return progress.words[key].added === today;
  }).length;
  const remaining = RULES.words.newWordsPerDay - addedToday;
  if (remaining <= 0) return 0;

  // Слова вашего УРОВНЯ ЛЕКСИКИ и ниже (effectiveVocabLevel — это либо
  // выбор вручную из настроек, либо результат раздела «Лексика» в тестах
  // и контрольных, а не общий уровень: грамматика и лексика часто разные).
  // Сначала идут слова именно вашего уровня, потом на уровень ниже и так
  // далее вниз — чтобы не тратить месяцы на A1-слова при уровне лексики B2+.
  // Слова выше вашего уровня по-прежнему не выдаются.
  const maxIdx = levelIndex(effectiveVocabLevel(progress));
  const candidates = DATA.words
    .filter(function (w) {
      if (levelIndex(w.level || "A1") > maxIdx) return false;
      return !progress.words[wordKey(w.en)];
    })
    .sort(function (a, b) { return levelIndex(b.level || "A1") - levelIndex(a.level || "A1"); });

  const take = candidates.slice(0, remaining);
  take.forEach(function (w) { addWordToReview(progress, w.en); });
  return take.length;
}

// ---------------------------------------------------------------------
// Составление очереди повторения (слова + карточки «Другое» вместе)
// ---------------------------------------------------------------------

// Ключи слов, которые пора повторить сегодня (или раньше — «просрочены»)
function dueWordKeys(progress) {
  const today = todayStr();
  return Object.keys(progress.words).filter(function (key) {
    return progress.words[key].due <= today;
  });
}

// ID карточек «Другое», которые пора повторить
function dueOtherMistakeIds(progress) {
  const today = todayStr();
  return progress.otherMistakes
    .filter(function (m) { return m.srs.due <= today; })
    .map(function (m) { return m.id; });
}

// Направление карточки слова: выбирается случайно с учётом RULES.words.ruEnShare
//   "cloze" — вариант ru-en: вместо голого перевода показано предложение-пример
//   с пропуском на месте слова (слово лучше запоминается в контексте). Только
//   если слово дословно есть в своём примере (clozeSentence); доля — RULES.words.clozeShare.
function pickDirection(word) {
  const W = RULES.words;
  if (Math.random() < W.ruEnShare) {
    return clozeSentence(word) && Math.random() < W.clozeShare ? "cloze" : "ru-en";
  }
  return "en-ru";
}

// Пример слова с пропуском "___" вместо самого слова, либо null, если слова
// в примере нет в такой же форме (тогда пропуск был бы некорректным).
function clozeSentence(word) {
  if (!word || !word.example) return null;
  const esc = word.en.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp("(^|[^A-Za-z])" + esc + "(?![A-Za-z])", "i");
  if (!re.test(word.example)) return null;
  return word.example.replace(re, function (m, before) { return before + "___"; });
}

// Список карточек для занятия или повторения: { kind, ref, direction }
//   kind = "word"  → ref = ключ слова, direction = "en-ru" | "ru-en"
//   kind = "other" → ref = id карточки «Другое», direction не используется
// Сначала идут самые просроченные (по дате due), при равенстве — вперемешку.
function pickReviewItems(progress, count) {
  const today = todayStr();
  const pool = dueWordKeys(progress).map(function (key) {
    return { kind: "word", ref: key, due: progress.words[key].due };
  }).concat(dueOtherMistakeIds(progress).map(function (id) {
    const m = progress.otherMistakes.find(function (x) { return x.id === id; });
    return { kind: "other", ref: id, due: m.srs.due };
  }));

  pool.sort(function (a, b) {
    if (a.due !== b.due) return a.due < b.due ? -1 : 1;
    return Math.random() - 0.5;
  });

  return pool.slice(0, count).map(function (item) {
    return item.kind === "word"
      ? { kind: "word", ref: item.ref, direction: pickDirection(wordByKey(progress, item.ref)) }
      : { kind: "other", ref: item.ref };
  });
}

// Сколько карточек поместится в отведённое время занятия
function wordCountForMinutes(minutes) {
  const seconds = minutes * 60 * RULES.lesson.wordsShare;
  return Math.max(0, Math.round(seconds / RULES.words.secondsPerCard));
}

// ---------------------------------------------------------------------
// Показ карточки
//   container — куда рисовать
//   progress  — текущий прогресс (нужен, чтобы найти текст слова/ошибки)
//   item      — { kind, ref, direction }
//   onDone(result) — result = { quality: 0..5, correct: true/false }
// ---------------------------------------------------------------------
function renderReviewCard(container, progress, item, onDone) {
  if (item.kind === "other") {
    renderMistakeCard(container, progress, item, onDone);
    return;
  }

  const word = wordByKey(progress, item.ref);
  if (!word) {
    // Слово удалили из словаря, а карточка осталась — просто пропускаем
    onDone({ quality: 4, correct: true, skippedMissing: true });
    return;
  }
  if (item.direction === "ru-en" || item.direction === "cloze") renderRuEn(container, progress, item.ref, word, onDone, item.direction === "cloze");
  else renderEnRu(container, progress, item.ref, word, onDone);
}

// Раньше эта функция называлась renderWordCard — оставляем прежнее имя
// рабочим, чтобы не держать в голове два названия одного и того же.
function renderWordCard(container, progress, item, onDone) {
  renderReviewCard(container, progress, item, onDone);
}

// «Уже знаю»: сразу помечает слово известным (см. markWordKnown) и
// переходит к следующей карточке, без обычной оценки.
// alreadyApplied — SM-2 уже применён внутри markWordKnown, поэтому
// lesson.js/words.js не должны применять оценку повторно (как и со
// skippedMissing).
function knownButtonHtml() {
  return '<button class="btn known-btn" title="Больше не показывать это слово почти никогда">Уже знаю</button>';
}
function bindKnownButton(container, progress, key, onDone) {
  const btn = container.querySelector(".known-btn");
  if (!btn) return;
  btn.addEventListener("click", function () {
    markWordKnown(progress, key);
    onDone({ quality: 5, correct: true, alreadyApplied: true });
  });
}

// EN → RU: слово показано, перевод открывается по кнопке, оценка — сами
function renderEnRu(container, progress, key, word, onDone) {
  let front = '<p class="srs-front">' + escapeHtml(word.en) + speakButtonHtml(word.en) + "</p>";
  if (word.example) front += '<p class="srs-example muted">' + escapeHtml(word.example) + speakButtonHtml(word.example) + "</p>";
  const back = '<p class="srs-back-text">' + escapeHtml(word.ru) + "</p>";
  renderRevealCard(container, "Слово → перевод", front, back, "Показать перевод", onDone, knownButtonHtml());
  bindKnownButton(container, progress, key, onDone);
}

// Карточка «Другое»: неправильное предложение → исправление + объяснение
function renderMistakeCard(container, progress, item, onDone) {
  const m = progress.otherMistakes.find(function (x) { return x.id === item.ref; });
  if (!m) {
    // Карточку удалили (например, в настройках) — пропускаем
    onDone({ quality: 4, correct: true, skippedMissing: true });
    return;
  }
  // Нужно напечатать исправленное предложение целиком (проверяет isAnswerCorrect,
  // поэтому нужен js/exercises.js). Если его на странице нет — старый режим «на глаз».
  if (typeof isAnswerCorrect !== "function") {
    const f = '<p class="srs-front wrong">' + escapeHtml(m.wrong) + "</p>";
    let b = '<p class="srs-back-text right">' + escapeHtml(m.correct) + speakButtonHtml(m.correct) + "</p>";
    if (m.explanation) b += '<p class="muted small">' + richText(m.explanation) + "</p>";
    renderRevealCard(container, "Исправьте ошибку", f, b, "Показать правильный вариант", onDone);
    return;
  }

  container.innerHTML =
    '<p class="srs-direction muted small">Исправьте ошибку: напишите предложение правильно</p>' +
    '<p class="srs-front wrong">' + escapeHtml(m.wrong) + "</p>" +
    '<input type="text" class="answer-input" placeholder="правильное предложение" ' +
    'autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false">' +
    '<div class="btn-row"><button class="btn btn-primary check-btn">Проверить</button>' +
    '<button class="btn dont-know-btn">Не знаю</button></div>' +
    '<div class="feedback"></div>';

  const input = container.querySelector(".answer-input");
  const feedback = container.querySelector(".feedback");

  function explainHtml() {
    return m.explanation ? '<p class="muted small">' + richText(m.explanation) + "</p>" : "";
  }

  function afterAnswer(correct, typed, hasTyped) {
    input.disabled = true;
    container.querySelector(".btn-row").classList.add("hidden");
    if (correct) {
      feedback.innerHTML =
        '<div class="notice good"><b>Верно!</b> <span class="right">' + escapeHtml(m.correct) + "</span>" + speakButtonHtml(m.correct) + "</div>" +
        explainHtml() +
        '<p class="muted small">Насколько легко вспомнилось?</p>' + gradeButtonsHtml(false);
      bindGradeButtons(container, onDone);
      return;
    }
    feedback.innerHTML =
      '<div class="notice bad"><b>Не совпало.</b><br><span class="small">' +
      (hasTyped ? 'Ваш ответ: <span class="wrong">' + escapeHtml(typed) + "</span> · " : "") +
      'Правильно: <span class="right">' + escapeHtml(m.correct) + "</span>" + speakButtonHtml(m.correct) + "</span></div>" +
      explainHtml() +
      '<div class="btn-row"><button class="btn btn-primary next-btn">Далее</button>' +
      (hasTyped ? '<button class="btn accept-btn" title="Если ваш вариант тоже правильный">Мой вариант тоже верный</button>' : "") +
      "</div>";
    const next = feedback.querySelector(".next-btn");
    next.addEventListener("click", function () { onDone({ quality: 1, correct: false }); });
    next.focus({ preventScroll: true });
    const accept = feedback.querySelector(".accept-btn");
    if (accept) {
      accept.addEventListener("click", function () {
        // Принимаем на слово, но сложность всё равно спрашиваем
        feedback.querySelector(".btn-row").classList.add("hidden");
        feedback.insertAdjacentHTML("beforeend",
          '<p class="muted small">Засчитано как верно. Насколько легко вспомнилось?</p>' + gradeButtonsHtml(false));
        bindGradeButtons(feedback, onDone);
      });
    }
  }

  container.querySelector(".check-btn").addEventListener("click", function () {
    if (!input.value.trim()) { input.focus(); return; }
    afterAnswer(isAnswerCorrect(input.value, [m.correct]), input.value, true);
  });
  container.querySelector(".dont-know-btn").addEventListener("click", function () {
    afterAnswer(false, "", false);
  });
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") { e.preventDefault(); container.querySelector(".check-btn").click(); }
  });
  setTimeout(function () { input.focus({ preventScroll: true }); }, 50);
}

// Общий каркас карточки-«переворота»: сначала виден только «перед»,
// по кнопке открывается «зад» + кнопки оценки. Используется и для
// слов EN→RU, и для карточек «Другое».
//   extraFrontButtonHtml — необязательная кнопка рядом с «Показать...»
//   (используется для «Уже знаю» на карточках слов; для «Другого» не нужна).
function renderRevealCard(container, directionLabel, frontHtml, backHtml, revealLabel, onDone, extraFrontButtonHtml) {
  container.innerHTML =
    '<p class="srs-direction muted small">' + escapeHtml(directionLabel) + "</p>" +
    frontHtml +
    '<div class="btn-row"><button class="btn btn-primary reveal-btn">' + escapeHtml(revealLabel) + "</button>" +
      (extraFrontButtonHtml || "") +
    "</div>" +
    '<div class="srs-back hidden">' +
      backHtml +
      '<p class="muted small">Как вспомнили?</p>' +
      gradeButtonsHtml(true) +
    "</div>";

  container.querySelector(".reveal-btn").addEventListener("click", function () {
    container.querySelector(".btn-row").classList.add("hidden");
    container.querySelector(".srs-back").classList.remove("hidden");
    bindGradeButtons(container, onDone);
  });
}

// RU → EN: перевод показан, слово печатается, проверка автоматическая
function renderRuEn(container, progress, key, word, onDone, cloze) {
  const sentence = cloze ? clozeSentence(word) : null;
  const front = sentence
    ? '<p class="srs-direction muted small">Вставьте пропущенное слово</p>' +
      '<p class="srs-front srs-cloze">' + escapeHtml(sentence).replace("___", '<span class="blank">&nbsp;</span>') + "</p>" +
      '<p class="muted small">Подсказка: ' + escapeHtml(word.ru) + "</p>"
    : '<p class="srs-direction muted small">Перевод → слово</p>' +
      '<p class="srs-front">' + escapeHtml(word.ru) + "</p>";
  const html =
    front +
    '<input type="text" class="answer-input" placeholder="напишите по-английски" ' +
    'autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false">' +
    '<div class="btn-row"><button class="btn btn-primary check-btn">Проверить</button>' +
    '<button class="btn dont-know-btn">Не помню</button>' +
    knownButtonHtml() +
    "</div>" +
    '<div class="feedback"></div>';
  container.innerHTML = html;

  const input = container.querySelector(".answer-input");
  const feedback = container.querySelector(".feedback");
  bindKnownButton(container, progress, key, onDone);

  // hasTyped — было ли что-то реально напечатано (а не просто «Не помню»):
  // кнопка «Мой ответ тоже верный» имеет смысл только тогда.
  function afterAnswer(correct, typedValue, hasTyped) {
    input.disabled = true;
    container.querySelector(".btn-row").classList.add("hidden");

    if (correct) {
      // Верно — спрашиваем только про сложность (трудно/хорошо/легко)
      feedback.innerHTML =
        '<div class="notice good"><b>Верно!</b> <span class="right">' + escapeHtml(word.en) + "</span>" + speakButtonHtml(word.en) + "</div>" +
        '<p class="muted small">Насколько легко вспомнилось?</p>' +
        gradeButtonsHtml(false);
      bindGradeButtons(container, onDone);
    } else {
      // Неверно — оценка 0 автоматически, показываем правильный ответ
      feedback.innerHTML =
        '<div class="notice bad"><b>Неверно.</b><br><span class="small">Ваш ответ: <span class="wrong">' +
        escapeHtml(typedValue) + '</span> · Правильно: <span class="right">' + escapeHtml(word.en) + "</span>" + speakButtonHtml(word.en) + "</span></div>" +
        '<div class="btn-row"><button class="btn btn-primary next-btn">Далее</button>' +
        (hasTyped ? '<button class="btn dispute-btn" title="Если вы уверены, что ваш вариант тоже правильный">Мой ответ тоже верный</button>' : "") +
        "</div>";
      const next = feedback.querySelector(".next-btn");
      next.addEventListener("click", function () { onDone({ quality: 0, correct: false }); });
      next.focus({ preventScroll: true });

      const dispute = feedback.querySelector(".dispute-btn");
      if (dispute) {
        dispute.addEventListener("click", function () {
          // Принимаем ответ как верный, но всё равно спрашиваем сложность —
          // раз вы смогли вспомнить хоть какой-то вариант, это тоже прогресс.
          feedback.innerHTML =
            '<div class="notice good"><b>Принято, засчитано как верно.</b> <span class="right">' + escapeHtml(word.en) + "</span>" + speakButtonHtml(word.en) + "</div>" +
            '<p class="muted small">Насколько легко вспомнилось?</p>' +
            gradeButtonsHtml(false);
          bindGradeButtons(container, function (result) {
            onDone(Object.assign({}, result, { disputed: true, answer: typedValue }));
          });
        });
      }
    }
  }

  container.querySelector(".check-btn").addEventListener("click", function () {
    if (!input.value.trim()) { input.focus(); return; }
    afterAnswer(isAnswerCorrect(input.value, [word.en]), input.value, true);
  });
  container.querySelector(".dont-know-btn").addEventListener("click", function () {
    afterAnswer(false, "", false);
  });
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") { e.preventDefault(); container.querySelector(".check-btn").click(); }
  });
  setTimeout(function () { input.focus({ preventScroll: true }); }, 50);
}

// Кнопки оценки. full = true → все 4 (карточка «на глаз»),
// false → только 3 (RU→EN верный ответ, «не помню» уже неприменимо).
function gradeButtonsHtml(full) {
  let html = '<div class="btn-row srs-grade">';
  if (full) html += '<button class="btn grade-btn bad" data-q="0">Не помню</button>';
  html +=
    '<button class="btn grade-btn" data-q="3">Трудно</button>' +
    '<button class="btn grade-btn" data-q="4">Хорошо</button>' +
    '<button class="btn grade-btn good" data-q="5">Легко</button>' +
    "</div>";
  return html;
}

function bindGradeButtons(container, onDone) {
  container.querySelectorAll(".grade-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const q = Number(btn.dataset.q);
      onDone({ quality: q, correct: q >= 3 });
    });
  });
}
