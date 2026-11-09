// =====================================================================
// pages/settings.js — время в день, резервная копия, импорт из чата,
// спорные ответы, карточки «Другое», сброс прогресса.
// =====================================================================

const DURATIONS = [15, 20, 30, 60];

// Быстрый поиск упражнения/вопроса к тексту по ID (для показа спорных ответов)
const EXERCISE_BY_ID = {};
DATA.exercises.forEach(function (e) { EXERCISE_BY_ID[e.id] = e; });
const TEXT_BY_ID = {};
DATA.texts.forEach(function (t) { TEXT_BY_ID[t.id] = t; });
function findExercise(id) {
  if (EXERCISE_BY_ID[id]) return EXERCISE_BY_ID[id];
  const parts = id.split("#"); // вопрос к тексту: "read-a1-001#2", пропуск рассказа: "story-past-001#3"
  const text = TEXT_BY_ID[parts[0]];
  if (text) return text.questions[Number(parts[1])];
  const story = DATA.stories.filter(function (s) { return s.id === parts[0]; })[0];
  const gap = story && story.gaps[Number(parts[1]) - 1];
  return gap ? { type: "fill", q: storyGapQuestion(story, gap.n), answers: gap.answers } : null;
}

document.addEventListener("DOMContentLoaded", function () {
  renderDuration();
  renderVocabLevel();
  renderTts();
  renderPause();
  renderAutoBackup();
  renderDisputed();
  renderOther();

  document.getElementById("spread-due-btn").addEventListener("click", onSpreadDue);

  document.getElementById("backup-download-btn").addEventListener("click", downloadBackup);
  document.getElementById("backup-upload-btn").addEventListener("click", function () {
    document.getElementById("backup-file").click();
  });
  document.getElementById("backup-file").addEventListener("change", onBackupFileChosen);

  document.getElementById("chat-upload-btn").addEventListener("click", function () {
    document.getElementById("chat-file").click();
  });
  document.getElementById("chat-file").addEventListener("change", onChatFileChosen);

  document.getElementById("reset-btn").addEventListener("click", onReset);
});

// ---------------------------------------------------------------------
// Время в день
// ---------------------------------------------------------------------

function renderDuration() {
  const minutes = loadProgress().settings.minutesPerDay;
  const box = document.getElementById("duration");
  box.innerHTML = DURATIONS.map(function (m) {
    return '<button class="chip' + (m === minutes ? " active" : "") + '" data-min="' + m + '">' + m + " мин</button>";
  }).join("");
  box.querySelectorAll(".chip").forEach(function (chip) {
    chip.addEventListener("click", function () {
      const p = loadProgress();
      p.settings.minutesPerDay = Number(chip.dataset.min);
      saveProgress(p);
      box.querySelectorAll(".chip").forEach(function (c) { c.classList.toggle("active", c === chip); });
    });
  });
}

// ---------------------------------------------------------------------
// Уровень слов
// ---------------------------------------------------------------------

function renderVocabLevel() {
  const progress = loadProgress();
  const manual = progress.settings.vocabLevelManual;
  const box = document.getElementById("vocab-level");

  const options = [{ key: "auto", label: "Автоматически" }].concat(
    LEVELS.map(function (l) { return { key: l, label: l }; })
  );
  box.innerHTML = options.map(function (o) {
    const active = manual ? manual === o.key : o.key === "auto";
    return '<button class="chip' + (active ? " active" : "") + '" data-key="' + o.key + '">' + o.label + "</button>";
  }).join("");

  box.querySelectorAll(".chip").forEach(function (chip) {
    chip.addEventListener("click", function () {
      const p = loadProgress();
      p.settings.vocabLevelManual = chip.dataset.key === "auto" ? null : chip.dataset.key;
      saveProgress(p);
      renderVocabLevel();
    });
  });

  updateVocabLevelNote(progress);
}

function updateVocabLevelNote(progress) {
  const note = document.getElementById("vocab-level-note");
  const effective = effectiveVocabLevel(progress);
  if (progress.settings.vocabLevelManual) {
    note.textContent = "Сейчас слова подбираются по уровню " + effective + " (выбрано вручную)." +
      (progress.vocabLevel ? " Автоматический уровень по тестам сейчас: " + progress.vocabLevel + "." : "");
  } else if (progress.vocabLevel) {
    note.textContent = "Сейчас слова подбираются по уровню " + effective + " — это посчитано по разделу «Лексика» в тестах и контрольных.";
  } else {
    note.textContent = "Тестов по лексике ещё не было, поэтому слова пока подбираются по общему уровню" +
      (progress.level ? " (" + progress.level + ")" : "") + ".";
  }
}

// ---------------------------------------------------------------------
// Пауза новых слов и разгрузка накопившегося повторения
// ---------------------------------------------------------------------

function renderPause() {
  const paused = loadProgress().settings.pauseNewWords;
  const box = document.getElementById("pause-new-words");
  box.innerHTML =
    '<button class="chip' + (paused ? "" : " active") + '" data-paused="0">Добавлять новые слова</button>' +
    '<button class="chip' + (paused ? " active" : "") + '" data-paused="1">Пауза</button>';
  box.querySelectorAll(".chip").forEach(function (chip) {
    chip.addEventListener("click", function () {
      const p = loadProgress();
      p.settings.pauseNewWords = chip.dataset.paused === "1";
      saveProgress(p);
      renderPause();
    });
  });
  document.getElementById("pause-note").textContent = paused
    ? "Сейчас пауза: новые слова сами не добавляются (слова, которые вы вносите вручную, добавляются как обычно)."
    : "Каждый день добавляется до " + RULES.words.newWordsPerDay + " новых слов. Если на повторение накопилось " +
      RULES.words.autoPauseDue + " карточек и больше, новые слова ждут, пока долг разберётся.";
}

// Просроченные карточки (слова и «Другое») раскладываются по дням:
// самые старые — на сегодня, дальше по RULES.words.newWordsPerDay в день.
function onSpreadDue() {
  const p = loadProgress();
  const today = todayStr();
  const perDay = Math.max(1, RULES.words.newWordsPerDay);
  const overdue = [];
  Object.keys(p.words).forEach(function (key) {
    if (p.words[key].due <= today) overdue.push(p.words[key]);
  });
  p.otherMistakes.forEach(function (m) {
    if (m.srs.due <= today) overdue.push(m.srs);
  });
  overdue.sort(function (a, b) { return a.due < b.due ? -1 : a.due > b.due ? 1 : 0; });
  overdue.forEach(function (card, i) {
    card.due = addDays(today, Math.floor(i / perDay));
  });
  saveProgress(p);
  const days = Math.ceil(overdue.length / perDay);
  showMessage("spread-message", "good", overdue.length === 0
    ? "Накопившихся карточек нет."
    : "Готово: " + overdue.length + " карточек разложены на " + days + " дн. (по " + perDay + " в день).");
}

// ---------------------------------------------------------------------
// Озвучка (window.speechSynthesis, см. js/speech.js)
// ---------------------------------------------------------------------

const TTS_ACCENTS = [{ key: "en-US", label: "Американский" }, { key: "en-GB", label: "Британский" }];
const TTS_RATES = [{ key: "normal", label: "Обычная" }, { key: "slow", label: "Медленная" }];

function renderTts() {
  const controls = document.getElementById("tts-controls");
  const note = document.getElementById("tts-unavailable-note");
  const available = ttsSupported() && hasEnglishVoice();

  if (!available) {
    controls.classList.add("hidden");
    note.classList.remove("hidden");
    note.textContent = !ttsSupported()
      ? "Озвучка недоступна: этот браузер не поддерживает встроенный синтез речи (window.speechSynthesis). Попробуйте открыть сайт в свежей версии Chrome, Edge, Safari или Firefox."
      : "Озвучка недоступна: в этом браузере или системе нет ни одного английского голоса. Голоса для чтения текста обычно ставятся вместе с операционной системой — проверьте её настройки речи или специальных возможностей.";
    return;
  }
  controls.classList.remove("hidden");
  note.classList.add("hidden");

  const progress = loadProgress();
  renderTtsChips("tts-accent", TTS_ACCENTS, progress.settings.speechAccent || "en-US", "speechAccent", "data-accent");
  renderTtsChips("tts-rate", TTS_RATES, progress.settings.speechRate || "normal", "speechRate", "data-rate");
}

function renderTtsChips(boxId, options, current, settingKey, dataAttr) {
  const box = document.getElementById(boxId);
  box.innerHTML = options.map(function (o) {
    return '<button class="chip' + (o.key === current ? " active" : "") + '" ' + dataAttr + '="' + o.key + '">' + o.label + "</button>";
  }).join("");
  box.querySelectorAll(".chip").forEach(function (chip) {
    chip.addEventListener("click", function () {
      const p = loadProgress();
      p.settings[settingKey] = chip.dataset[dataAttr.replace("data-", "")];
      saveProgress(p);
      renderTts();
    });
  });
}

// Голоса в Chrome подгружаются асинхронно — как только они готовы, пересчитываем.
// speech.js уже подписался на onvoiceschanged раньше (порядок скриптов на странице),
// поэтому здесь достраиваем поверх его обработчика, а не заменяем его.
if (ttsSupported() && "onvoiceschanged" in speechSynthesis) {
  const prevOnVoicesChanged = speechSynthesis.onvoiceschanged;
  speechSynthesis.onvoiceschanged = function (e) {
    if (prevOnVoicesChanged) prevOnVoicesChanged(e);
    renderTts();
  };
}

// ---------------------------------------------------------------------
// Резервная копия
// ---------------------------------------------------------------------

function downloadBackup() {
  const progress = loadProgress();
  downloadProgressFile(progress); // storage.js — тот же файл скачивается и автоматически
  progress.lastBackupDate = todayStr();
  saveProgress(progress);
  showMessage("backup-message", "good", "Файл скачан. Сохраните его в надёжном месте.");
}

// Переключатель автоматической копии в конце занятия
function renderAutoBackup() {
  const on = loadProgress().settings.autoBackup;
  const box = document.getElementById("auto-backup");
  box.innerHTML =
    '<button class="chip' + (on ? " active" : "") + '" data-on="1">Автоматически</button>' +
    '<button class="chip' + (on ? "" : " active") + '" data-on="0">Выключено</button>';
  box.querySelectorAll(".chip").forEach(function (chip) {
    chip.addEventListener("click", function () {
      const p = loadProgress();
      p.settings.autoBackup = chip.dataset.on === "1";
      saveProgress(p);
      renderAutoBackup();
    });
  });
  const last = loadProgress().lastBackupDate;
  document.getElementById("auto-backup-note").textContent = on
    ? "В конце занятия сайт сам скачает файл, если с прошлой копии прошло " + RULES.backup.autoEveryDays + " " +
      dayWord(RULES.backup.autoEveryDays) + " и больше. Файл появится в папке «Загрузки» вашего браузера." +
      (last ? " Последняя копия: " + formatDate(last) + "." : " Копий пока не было.")
    : "Автокопия выключена. Скачивайте файл вручную кнопкой выше." + (last ? " Последняя копия: " + formatDate(last) + "." : "");
}

function onBackupFileChosen(event) {
  const file = event.target.files[0];
  event.target.value = ""; // чтобы можно было выбрать тот же файл повторно
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function () {
    let data;
    try {
      data = JSON.parse(reader.result);
    } catch (e) {
      showMessage("backup-message", "bad", "Не удалось прочитать файл — это не похоже на корректный JSON.");
      return;
    }
    if (!looksLikeProgressBackup(data)) {
      showMessage("backup-message", "bad", "Файл не похож на резервную копию прогресса этого сайта.");
      return;
    }
    if (!confirm("Это ЗАМЕНИТ весь текущий прогресс в этом браузере на данные из файла. Продолжить?")) return;

    saveProgress(normalizeProgress(data));
    showMessage("backup-message", "good", "Прогресс восстановлен. Обновляю страницу...");
    setTimeout(function () { location.reload(); }, 1200);
  };
  reader.onerror = function () {
    showMessage("backup-message", "bad", "Не удалось прочитать файл.");
  };
  reader.readAsText(file);
}

// ---------------------------------------------------------------------
// Импорт из чата
// ---------------------------------------------------------------------

function onChatFileChosen(event) {
  const file = event.target.files[0];
  event.target.value = "";
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function () {
    let data;
    try {
      data = JSON.parse(reader.result);
    } catch (e) {
      showMessage("chat-message", "bad", "Не удалось прочитать файл — это не похоже на корректный JSON.");
      return;
    }

    const check = validateChatImport(data);
    if (!check.valid) {
      showMessage("chat-message", "bad", check.error);
      return;
    }

    const progress = loadProgress();
    if (looksLikeDuplicateImport(progress, data)) {
      if (!confirm("Похоже, этот файл уже загружали раньше (та же дата и то же число ошибок и слов). " +
        "При повторной загрузке приоритет тем поднимется ещё раз. Точно загрузить ещё раз?")) return;
    }
    const report = applyChatImport(progress, data);
    saveProgress(progress);

    renderChatReport(report);
    renderOther();
  };
  reader.onerror = function () {
    showMessage("chat-message", "bad", "Не удалось прочитать файл.");
  };
  reader.readAsText(file);
}

function renderChatReport(report) {
  const parts = [];
  if (report.topicsBoosted.length) {
    // Одна тема может встретиться в нескольких ошибках — называем её один раз
    const names = report.topicsBoosted.map(function (t) { return t.title; })
      .filter(function (title, i, all) { return all.indexOf(title) === i; }).join(", ");
    parts.push("<p>Повышен приоритет тем: <b>" + escapeHtml(names) + "</b>.</p>");
  }
  if (report.otherAdded.length) {
    parts.push('<p>Добавлено ошибок в <a href="mistakes.html">«Мои ошибки»</a>: <b>' + report.otherAdded.length + "</b>.</p>");
  }
  if (report.mistakesDuplicate) {
    parts.push('<p class="muted small">Такие ошибки уже были, повторно не добавлены: ' + report.mistakesDuplicate + ".</p>");
  }
  if (report.wordsAdded.length) {
    parts.push("<p>Добавлено слов: <b>" + report.wordsAdded.length + "</b> (" + escapeHtml(report.wordsAdded.join(", ")) + ").</p>");
  }
  if (report.wordsSkipped.length) {
    parts.push('<p class="muted small">Уже были в повторении: ' + escapeHtml(report.wordsSkipped.join(", ")) + "</p>");
  }
  if (parts.length === 0) parts.push("<p>Файл загружен, но добавлять было нечего.</p>");

  document.getElementById("chat-message").innerHTML = '<div class="notice good">' + parts.join("") + "</div>";
}

// ---------------------------------------------------------------------
// Спорные ответы
// ---------------------------------------------------------------------

function renderDisputed() {
  const progress = loadProgress();
  const box = document.getElementById("disputed-section");

  if (progress.disputed.length === 0) {
    box.innerHTML = "";
    return;
  }

  const rows = progress.disputed.map(function (d, i) {
    if (d.kind === "verb") {
      return (
        '<div class="mistake">' +
          '<p class="question">Неправильный глагол: <b>' + escapeHtml(d.inf) + "</b> — " + escapeHtml(d.ru) + "</p>" +
          '<p class="small">Вы ответили: <b>' + escapeHtml(d.answer) + "</b> · Ключ на сайте: " + escapeHtml(d.expected) + "</p>" +
          '<p class="muted small">' + formatDate(d.date) + '</p>' +
          '<button class="btn btn-small" data-remove="' + i + '">Убрать из списка</button>' +
        "</div>"
      );
    }
    if (d.kind === "word") {
      return (
        '<div class="mistake">' +
          '<p class="question">Слово: <b>' + escapeHtml(d.wordEn) + "</b> — " + escapeHtml(d.wordRu) + "</p>" +
          '<p class="small">Вы напечатали: <b>' + escapeHtml(d.answer) + "</b></p>" +
          '<p class="muted small">' + formatDate(d.date) + '</p>' +
          '<button class="btn btn-small" data-remove="' + i + '">Убрать из списка</button>' +
        "</div>"
      );
    }
    const ex = findExercise(d.id);
    if (!ex) return "";
    const right = ex.type === "choice" ? ex.answer : ex.answers[0];
    return (
      '<div class="mistake">' +
        '<p class="question">' + questionHtml(ex.q) + "</p>" +
        '<p class="small">Ваш ответ: <b>' + escapeHtml(d.answer) + "</b> · Ключ на сайте: " + escapeHtml(right) + "</p>" +
        '<p class="muted small">' + formatDate(d.date) + '</p>' +
        '<button class="btn btn-small" data-remove="' + i + '">Убрать из списка</button>' +
      "</div>"
    );
  }).join("");

  box.innerHTML =
    "<h2>Спорные ответы <span class=\"muted\">(" + progress.disputed.length + ")</span></h2>" +
    '<p class="muted small">Вы отметили эти ответы как «тоже верные», когда сайт их не засчитал. ' +
    "Если это правда так — покажите список Claude, и он подскажет, надо ли поправить ключ ответа " +
    "(на сайте это можно сделать в файле упражнения, см. README).</p>" +
    '<div class="btn-row">' +
      '<button class="btn" id="copy-disputed-btn">Скопировать для Claude</button>' +
      '<button class="btn" id="clear-disputed-btn">Очистить список</button>' +
    "</div>" +
    '<div class="card">' + rows + "</div>";

  document.getElementById("copy-disputed-btn").addEventListener("click", copyDisputed);
  document.getElementById("clear-disputed-btn").addEventListener("click", function () {
    if (!confirm("Очистить весь список спорных ответов?")) return;
    const p = loadProgress();
    p.disputed = [];
    saveProgress(p);
    renderDisputed();
  });
  box.querySelectorAll("[data-remove]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const p = loadProgress();
      p.disputed.splice(Number(btn.dataset.remove), 1);
      saveProgress(p);
      renderDisputed();
    });
  });
}

function copyDisputed() {
  const progress = loadProgress();
  const lines = ["Проверь, пожалуйста, мои ответы — сайт не засчитал их как правильные:", ""];
  progress.disputed.forEach(function (d) {
    if (d.kind === "verb") {
      lines.push("Неправильный глагол: " + d.inf + " — " + d.ru);
      lines.push("Мой ответ: " + d.answer);
      lines.push("Ключ на сайте: " + d.expected);
      lines.push("");
      return;
    }
    if (d.kind === "word") {
      lines.push("Слово: " + d.wordEn + " — " + d.wordRu);
      lines.push("Мой ответ: " + d.answer);
      lines.push("");
      return;
    }
    const ex = findExercise(d.id);
    if (!ex) return;
    const right = ex.type === "choice" ? ex.answer : ex.answers[0];
    lines.push("Задание: " + ex.q);
    lines.push("Мой ответ: " + d.answer);
    lines.push("Ключ на сайте: " + right);
    lines.push("");
  });
  copyText(lines.join("\n"), "copy-disputed-btn");
}

// ---------------------------------------------------------------------
// Карточки «Другое»
// ---------------------------------------------------------------------

function renderOther() {
  const progress = loadProgress();
  const box = document.getElementById("other-section");

  if (progress.otherMistakes.length === 0) {
    box.innerHTML = "";
    return;
  }

  const rows = progress.otherMistakes.map(function (m) {
    return (
      '<div class="mistake">' +
        '<p class="small">Неправильно: <span class="wrong">' + escapeHtml(m.wrong) + "</span></p>" +
        '<p class="small">Правильно: <span class="right">' + escapeHtml(m.correct) + "</span></p>" +
        (m.explanation ? '<p class="muted small">' + richText(m.explanation) + "</p>" : "") +
        '<button class="btn btn-small" data-delete="' + escapeHtml(m.id) + '">Удалить</button>' +
      "</div>"
    );
  }).join("");

  box.innerHTML =
    "<h2>Мои ошибки <span class=\"muted\">(" + progress.otherMistakes.length + ")</span></h2>" +
    '<p class="muted small">Ваши предложения с ошибками (из чата и добавленные вручную; удобнее смотреть на странице <a href="mistakes.html">«Ошибки»</a>). ' +
    "Они показываются в повторении вместе со словами (страница «Слова» и в начале занятий).</p>" +
    '<div class="card">' + rows + "</div>";

  box.querySelectorAll("[data-delete]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (!confirm("Удалить эту карточку?")) return;
      const p = loadProgress();
      deleteOtherMistake(p, btn.dataset.delete);
      saveProgress(p);
      renderOther();
    });
  });
}

// ---------------------------------------------------------------------
// Сброс
// ---------------------------------------------------------------------

function onReset() {
  if (!confirm("Это удалит ВЕСЬ прогресс на этом сайте без возможности отмены. Продолжить?")) return;
  if (!confirm("Точно? Если вы не скачали резервную копию, всё будет потеряно навсегда.")) return;
  resetProgress();
  location.href = "index.html";
}

// ---------------------------------------------------------------------
// Помощники
// ---------------------------------------------------------------------

function showMessage(boxId, kind, text) {
  document.getElementById(boxId).innerHTML = '<div class="notice ' + kind + '">' + escapeHtml(text) + "</div>";
}

// Копирует текст в буфер обмена (с запасным способом для старых браузеров и file://)
function copyText(text, btnId) {
  const btn = document.getElementById(btnId);
  function done() {
    const original = btn.textContent;
    btn.textContent = "Скопировано ✓";
    setTimeout(function () { btn.textContent = original; }, 2000);
  }
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(done, fallback);
  } else {
    fallback();
  }
  function fallback() {
    const area = document.createElement("textarea");
    area.value = text;
    document.body.appendChild(area);
    area.select();
    try { document.execCommand("copy"); done(); }
    catch (e) { alert("Не удалось скопировать. Выделите текст вручную."); }
    document.body.removeChild(area);
  }
}
