// =====================================================================
// pages/speaking.js — страница «Говорение» (speaking.html).
// Логика выбора фраз и интервалов — в js/speaking.js; здесь только экран:
//   слушать (🔊 / 🐢) → записать себя (MediaRecorder) → сравнить с образцом
//   → оценить себя. Запись живёт в памяти страницы (blob), не сохраняется.
// =====================================================================

const SP = { items: [], index: 0, results: [], recorder: null, stream: null, url: null, chunks: [], match: {}, recog: null };

// Распознавание речи включено учеником и есть в браузере?
function recogOn() {
  return !!loadProgress().settings.speechRecognition && speechRecognitionSupported();
}

// Микрофон доступен? (нужен защищённый контекст: https, localhost или file://)
function canRecord() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
}

document.addEventListener("DOMContentLoaded", function () {
  renderSetup();
  document.getElementById("sp-start").addEventListener("click", startSession);
  document.getElementById("sp-stop").addEventListener("click", function () { finishSession(); });
});

function show(id) {
  ["sp-setup", "sp-session", "sp-summary"].forEach(function (s) {
    document.getElementById(s).classList.toggle("hidden", s !== id);
  });
}

function renderSetup() {
  show("sp-setup");
  const progress = loadProgress();
  const st = speakingStats(progress);
  const mine = progress.otherMistakes.length;
  document.getElementById("sp-stats").innerHTML =
    '<div class="grid" style="margin-bottom:14px">' +
      '<div class="stat"><div class="value">' + st.due + '</div><div class="label">пора повторить</div></div>' +
      '<div class="stat"><div class="value">' + st.fresh + '</div><div class="label">новых фраз</div></div>' +
      '<div class="stat"><div class="value">' + st.learned + '</div><div class="label">освоено</div></div>' +
    "</div>" +
    '<p class="muted small">' +
    (mine > 0
      ? "Ваши исправленные предложения из «Мои ошибки» (" + mine + ") идут первыми, остальное — фразы из диктантов вашего уровня."
      : 'Фразы из диктантов вашего уровня. Когда в <a href="mistakes.html">«Моих ошибках»</a> появятся предложения, их можно будет проговаривать здесь первыми.') +
    "</p>";

  const notes = [];
  if (!ttsSupported() || !hasEnglishVoice()) {
    notes.push('<div class="notice warn">В этом браузере нет английского голоса, поэтому образец прослушать нельзя. ' +
      "Можно читать фразу вслух по тексту; запись и оценка работают.</div>");
  }
  if (!canRecord()) {
    notes.push('<div class="notice warn">Запись голоса здесь недоступна (нет микрофона или браузер её не поддерживает). ' +
      "Повторяйте вслух и оценивайте себя на слух.</div>");
  }
  document.getElementById("sp-notice").innerHTML = notes.join("");
  renderRecogSetting();

  const btn = document.getElementById("sp-start");
  btn.disabled = st.total === 0;
  btn.textContent = st.total === 0 ? "Пока нет фраз" : "Начать (" + RULES.speaking.perSession + " фраз)";
}

// Переключатель «Распознавание речи» (по умолчанию выключено) и пояснение про звук
function renderRecogSetting() {
  const box = document.getElementById("sp-recog-setting");
  const on = !!loadProgress().settings.speechRecognition;
  const supported = speechRecognitionSupported();
  box.innerHTML =
    '<div class="card"><h3>Распознавание речи <span class="muted small">(необязательно)</span></h3>' +
    '<p class="muted small">Браузер слушает вашу фразу и пишет, что услышал; сайт сравнивает с образцом и предлагает оценку. ' +
    "<b>Важно:</b> в Chrome звук при этом отправляется на сервер распознавания Google. Сайт его не сохраняет, " +
    "но это единственное место, где звук выходит из браузера, поэтому функция выключена, пока вы сами её не включите.</p>" +
    (supported
      ? '<div class="chips"><button type="button" class="chip' + (on ? "" : " active") + '" data-recog="0">Выключено</button>' +
        '<button type="button" class="chip' + (on ? " active" : "") + '" data-recog="1">Включить</button></div>'
      : '<div class="notice warn">В этом браузере распознавания речи нет (оно есть, например, в Chrome и Edge). Запись и самооценка работают как обычно.</div>') +
    "</div>";
  box.querySelectorAll("[data-recog]").forEach(function (chip) {
    chip.addEventListener("click", function () {
      const p = loadProgress();
      p.settings.speechRecognition = chip.dataset.recog === "1";
      saveProgress(p);
      renderRecogSetting();
    });
  });
}

function startSession() {
  const progress = loadProgress();
  SP.items = pickSpeakingSession(progress, RULES.speaking.perSession);
  SP.index = 0;
  SP.results = [];
  if (SP.items.length === 0) { renderSetup(); return; }
  show("sp-session");
  showPhrase();
}

// ----- Освобождение микрофона и записи -----
function releaseRecording() {
  if (SP.recorder && SP.recorder.state !== "inactive") { try { SP.recorder.stop(); } catch (e) { /* уже остановлена */ } }
  if (SP.stream) SP.stream.getTracks().forEach(function (t) { t.stop(); });
  if (SP.url) URL.revokeObjectURL(SP.url);
  SP.recorder = null; SP.stream = null; SP.url = null; SP.chunks = [];
  if (SP.recog) { try { SP.recog.abort(); } catch (e) { /* уже остановлено */ } SP.recog = null; }
  if (ttsSupported()) speechSynthesis.cancel();
}

function showPhrase() {
  releaseRecording();
  const phrase = SP.items[SP.index];
  document.getElementById("sp-counter").textContent = (SP.index + 1) + " из " + SP.items.length;
  document.getElementById("sp-progress").style.width = (SP.index / SP.items.length * 100) + "%";
  document.getElementById("sp-source").textContent = phrase.source === "mistake" ? "Ваша исправленная фраза" : "Фраза " + (phrase.level || "");

  const card = document.getElementById("sp-card");
  card.innerHTML =
    '<p class="srs-front" id="sp-text">' + escapeHtml(phrase.en) + "</p>" +
    (phrase.ru ? '<p class="muted small" id="sp-ru">' + richText(phrase.ru) + "</p>" : "") +
    '<div class="btn-row">' +
      '<button type="button" class="btn" id="sp-hear">🔊 Слушать</button>' +
      '<button type="button" class="btn" id="sp-slow">🐢 Помедленнее</button>' +
      '<button type="button" class="btn" id="sp-hide">Скрыть текст</button>' +
    "</div>" +
    '<div class="btn-row">' +
      '<button type="button" class="btn btn-primary rec-btn" id="sp-rec">🎙 Записать себя</button>' +
    "</div>" +
    (recogOn()
      ? '<div class="btn-row"><button type="button" class="btn" id="sp-recog">🗣 Проверить распознаванием</button></div>' +
        '<div id="sp-recog-result" class="sp-recog-result"></div>'
      : "") +
    '<div id="sp-playback" class="sp-playback hidden">' +
      '<audio id="sp-audio" controls></audio>' +
      '<div class="btn-row"><button type="button" class="btn" id="sp-compare">▶ Сравнить: образец → мой голос</button></div>' +
    "</div>" +
    '<p class="muted small" id="sp-hint">Послушайте, повторите вслух' + (canRecord() ? ", запишите себя" : "") + " и оцените.</p>" +
    '<p class="muted small">Как получилось?</p>' +
    '<div class="btn-row srs-grade">' +
      '<button type="button" class="btn grade-btn bad" data-q="' + RULES.speaking.qualityBad + '">Не получилось</button>' +
      '<button type="button" class="btn grade-btn" data-q="' + RULES.speaking.qualityOk + '">Почти</button>' +
      '<button type="button" class="btn grade-btn good" data-q="' + RULES.speaking.qualityGood + '">Получилось</button>' +
    "</div>";

  document.getElementById("sp-hear").addEventListener("click", function () { speak(phrase.en); });
  document.getElementById("sp-slow").addEventListener("click", function () { speak(phrase.en, LISTEN_SLOW_RATE); });
  document.getElementById("sp-hide").addEventListener("click", function () {
    const t = document.getElementById("sp-text");
    const hidden = t.classList.toggle("sp-blur");
    this.textContent = hidden ? "Показать текст" : "Скрыть текст";
  });

  const rec = document.getElementById("sp-rec");
  if (!canRecord()) rec.classList.add("hidden");
  rec.addEventListener("click", function () { toggleRecording(phrase); });
  const recogBtn = document.getElementById("sp-recog");
  if (recogBtn) recogBtn.addEventListener("click", function () { runRecognition(phrase); });

  document.getElementById("sp-compare").addEventListener("click", function () {
    // Сначала образец, потом ваша запись (ждём, пока синтез договорит)
    const audio = document.getElementById("sp-audio");
    if (!speak(phrase.en)) { audio.play(); return; }
    const timer = setInterval(function () {
      if (!speechSynthesis.speaking && !speechSynthesis.pending) { clearInterval(timer); audio.currentTime = 0; audio.play(); }
    }, 150);
    setTimeout(function () { clearInterval(timer); }, 20000);
  });

  card.querySelectorAll(".grade-btn").forEach(function (btn) {
    btn.addEventListener("click", function () { onGrade(phrase, Number(btn.dataset.q)); });
  });
}

function toggleRecording(phrase) {
  const rec = document.getElementById("sp-rec");

  // Идёт запись — останавливаем
  if (SP.recorder && SP.recorder.state === "recording") {
    SP.recorder.stop();
    return;
  }

  navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
    SP.stream = stream;
    SP.chunks = [];
    if (ttsSupported()) speechSynthesis.cancel(); // чтобы образец не попал в запись
    const recorder = new MediaRecorder(stream);
    SP.recorder = recorder;
    recorder.addEventListener("dataavailable", function (e) { if (e.data && e.data.size) SP.chunks.push(e.data); });
    recorder.addEventListener("stop", function () {
      stream.getTracks().forEach(function (t) { t.stop(); });
      if (SP.recorder !== recorder) return; // запись сброшена при переходе к другой фразе
      const blob = new Blob(SP.chunks, { type: recorder.mimeType || "audio/webm" });
      if (SP.url) URL.revokeObjectURL(SP.url);
      SP.url = URL.createObjectURL(blob);
      const audio = document.getElementById("sp-audio");
      if (!audio) return; // уже перешли к другой фразе
      audio.src = SP.url;
      document.getElementById("sp-playback").classList.remove("hidden");
      rec.textContent = "🎙 Записать ещё раз";
      rec.classList.remove("recording");
    });
    recorder.start();
    rec.textContent = "⏹ Остановить запись";
    rec.classList.add("recording");
  }).catch(function () {
    document.getElementById("sp-hint").innerHTML =
      '<span class="wrong">Нет доступа к микрофону.</span> Разрешите его в настройках сайта в браузере или просто повторите вслух и оцените себя.';
  });
}

// ----- Распознавание речи (необязательное) -----

const RECOG_ERRORS = {
  "not-allowed": "Нет доступа к микрофону или к распознаванию. Разрешите микрофон в настройках сайта.",
  "service-not-allowed": "Браузер не разрешил распознавание речи на этой странице.",
  "no-speech": "Ничего не услышал. Нажмите кнопку и скажите фразу ещё раз, чуть громче.",
  "audio-capture": "Микрофон не найден.",
  "network": "Нет связи с сервисом распознавания: браузер отправляет звук на сервер, а соединения нет.",
  "language-not-supported": "Этот язык распознавания здесь не поддерживается."
};

function runRecognition(phrase) {
  const btn = document.getElementById("sp-recog");
  const out = document.getElementById("sp-recog-result");
  if (!btn || !out) return;
  if (SP.recorder && SP.recorder.state === "recording") SP.recorder.stop(); // микрофон один на двоих
  if (ttsSupported()) speechSynthesis.cancel();   // чтобы образец не попал в распознавание
  if (SP.recog) { try { SP.recog.abort(); } catch (e) { /* нет */ } }

  const Ctor = window.SpeechRecognition || window.webkitSpeechRecognition;
  const rec = new Ctor();
  SP.recog = rec;
  rec.lang = loadProgress().settings.speechAccent || "en-US";
  rec.interimResults = false;
  rec.continuous = false;
  rec.maxAlternatives = 5;

  let gotResult = false;
  btn.disabled = true;
  btn.textContent = "🗣 Слушаю… скажите фразу";
  out.innerHTML = "";

  function reset() {
    if (SP.recog === rec) SP.recog = null;
    const b = document.getElementById("sp-recog");
    if (b) { b.disabled = false; b.textContent = "🗣 Проверить распознаванием ещё раз"; }
  }

  rec.onresult = function (e) {
    gotResult = true;
    const alts = [];
    for (let i = 0; i < e.results.length; i++) {
      for (let k = 0; k < e.results[i].length; k++) alts.push(e.results[i][k].transcript);
    }
    showRecognition(phrase, compareSpoken(phrase.en, alts));
  };
  rec.onerror = function (e) {
    gotResult = true;
    const box = document.getElementById("sp-recog-result");
    if (box && e.error !== "aborted") {
      box.innerHTML = '<div class="notice warn">' + escapeHtml(RECOG_ERRORS[e.error] || "Не удалось распознать речь (" + e.error + ").") + "</div>";
    }
  };
  rec.onend = function () {
    if (!gotResult) {
      const box = document.getElementById("sp-recog-result");
      if (box) box.innerHTML = '<div class="notice warn">' + escapeHtml(RECOG_ERRORS["no-speech"]) + "</div>";
    }
    reset();
  };
  try { rec.start(); } catch (err) { reset(); }
}

// Показать, что услышал распознаватель, и предложить оценку (кнопку только подсвечиваем)
function showRecognition(phrase, cmp) {
  const out = document.getElementById("sp-recog-result");
  if (!out) return;
  if (!cmp) {
    out.innerHTML = '<div class="notice warn">Речь не распознана. Попробуйте ещё раз.</div>';
    return;
  }
  SP.match[phrase.id] = cmp.percent;
  const names = {};
  names[RULES.speaking.qualityGood] = "Получилось";
  names[RULES.speaking.qualityOk] = "Почти";
  names[RULES.speaking.qualityBad] = "Не получилось";
  const cls = cmp.quality === RULES.speaking.qualityGood ? "good" : cmp.quality === RULES.speaking.qualityOk ? "warn" : "bad";
  out.innerHTML =
    '<div class="notice ' + cls + '">' +
      "<p>Услышано: <b>«" + escapeHtml(cmp.heard) + "»</b></p>" +
      "<p>Совпало слов: <b>" + cmp.matched + " из " + cmp.total + " (" + cmp.percent + "%)</b></p>" +
      (cmp.missed.length ? '<p class="small">Не услышано: <span class="wrong">' + escapeHtml(cmp.missed.join(", ")) + "</span></p>" : "") +
      (cmp.extra.length ? '<p class="small">Лишнее: <span class="wrong">' + escapeHtml(cmp.extra.join(", ")) + "</span></p>" : "") +
      '<p class="small">Предлагаю оценку «' + names[cmp.quality] + "». Решаете вы.</p>" +
    "</div>" +
    '<p class="muted small">Распознаватель мягок к акценту и иногда угадывает слова по смыслу, так что это ориентир, а не экзамен.</p>';
  document.querySelectorAll("#sp-card .grade-btn").forEach(function (b) {
    b.classList.toggle("suggested", Number(b.dataset.q) === cmp.quality);
  });
}

function onGrade(phrase, quality) {
  const progress = loadProgress();
  gradeSpeaking(progress, phrase.id, quality, SP.match[phrase.id]);
  saveProgress(progress);
  SP.results.push({ phrase: phrase, quality: quality, match: SP.match[phrase.id] });
  SP.index += 1;
  if (SP.index >= SP.items.length) finishSession();
  else showPhrase();
}

function finishSession() {
  releaseRecording();
  document.getElementById("sp-progress").style.width = "100%";
  show("sp-summary");
  const good = SP.results.filter(function (r) { return r.quality >= RULES.speaking.qualityGood; }).length;
  const ok = SP.results.filter(function (r) { return r.quality === RULES.speaking.qualityOk; }).length;
  const bad = SP.results.length - good - ok;
  const hard = SP.results.filter(function (r) { return r.quality < RULES.speaking.qualityOk; });

  let html = "<h2>Готово</h2>";
  if (SP.results.length === 0) {
    html += "<p>Вы не оценили ни одной фразы.</p>";
  } else {
    html += '<div class="grid" style="margin-bottom:14px">' +
      '<div class="stat"><div class="value">' + good + '</div><div class="label">получилось</div></div>' +
      '<div class="stat"><div class="value">' + ok + '</div><div class="label">почти</div></div>' +
      '<div class="stat"><div class="value">' + bad + '</div><div class="label">не получилось</div></div>' +
      "</div>";
  }
  const matches = SP.results.filter(function (r) { return typeof r.match === "number"; }).map(function (r) { return r.match; });
  if (matches.length) {
    const avg = Math.round(matches.reduce(function (a, b) { return a + b; }, 0) / matches.length);
    html += '<p class="muted small">Среднее совпадение с распознаванием: <b>' + avg + "%</b> (фраз с проверкой: " + matches.length + ").</p>";
  }
  if (hard.length) {
    html += "<p><b>Эти фразы вернутся завтра:</b></p><div class=\"card\">" + hard.map(function (r) {
      return '<p class="small">' + escapeHtml(r.phrase.en) + speakButtonHtml(r.phrase.en) + "</p>";
    }).join("") + "</div>";
  }
  html += '<div class="btn-row"><button type="button" class="btn btn-primary" id="sp-again">Ещё заход</button>' +
    '<a class="btn" href="index.html">На главную</a></div>';
  document.getElementById("sp-summary").innerHTML = html;
  document.getElementById("sp-again").addEventListener("click", function () { renderSetup(); });
}
