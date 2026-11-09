// =====================================================================
// speech.js — озвучка английского текста через встроенный браузерный
// window.speechSynthesis. Никаких внешних сервисов и библиотек: если у
// браузера/системы нет своего английского голоса, озвучка просто
// недоступна (см. ниже).
//
// Как добавить кнопку озвучки в HTML, который собирается через innerHTML:
//   speakButtonHtml("some text")  →  <button class="speak-btn" data-speak="...">🔊</button>
// Ловить клики на такой кнопке вручную не нужно — один общий обработчик
// ниже сам подхватывает любую .speak-btn, где бы она ни появилась,
// даже вставленную позже через innerHTML.
//
// Озвучка никогда не запускается сама по себе — только по клику на кнопку.
// =====================================================================

// Поддерживает ли браузер синтез речи в принципе
function ttsSupported() {
  return !!(window.speechSynthesis && window.SpeechSynthesisUtterance);
}

// Есть ли хотя бы один английский голос среди установленных в системе/браузере.
// Голоса в некоторых браузерах (Chrome) подгружаются асинхронно, поэтому сразу
// после загрузки страницы список может быть ещё пустым — см. onvoiceschanged ниже.
function hasEnglishVoice() {
  if (!ttsSupported()) return false;
  return speechSynthesis.getVoices().some(function (v) { return /^en/i.test(v.lang); });
}

// Выбрать голос под нужный акцент (en-US / en-GB). Если точного нет —
// любой английский голос; если и такого нет — null (тогда просто не задаём voice,
// и браузер использует голос по умолчанию для utter.lang, если он у него есть).
function pickVoice(accent) {
  const voices = speechSynthesis.getVoices();
  return voices.find(function (v) { return v.lang === accent; }) ||
    voices.find(function (v) { return /^en/i.test(v.lang); }) ||
    null;
}

// Озвучить текст. rateOverride — необязательно: если задан, используется
// вместо сохранённой в настройках скорости (нужно для разовой кнопки
// «Помедленнее» на диктантах — она не должна менять настройку насовсем).
// Возвращает true, если запрос на озвучку был отправлен.
function speak(text, rateOverride) {
  const clean = String(text || "").trim();
  if (!clean || !ttsSupported()) return false;

  const progress = loadProgress();
  const accent = progress.settings.speechAccent || "en-US";
  const rate = rateOverride || (progress.settings.speechRate === "slow" ? 0.7 : 1);

  speechSynthesis.cancel(); // не копим очередь, если нажали несколько кнопок подряд
  const utter = new SpeechSynthesisUtterance(clean);
  utter.lang = accent;
  utter.rate = rate;
  const voice = pickVoice(accent);
  if (voice) utter.voice = voice;
  speechSynthesis.speak(utter);
  return true;
}

// Озвучить диалог: реплики вида «Имя: текст» по очереди. У разных собеседников
// разные голоса (если в системе есть второй английский голос) или разная высота
// голоса (если голос один). Имя собеседника не произносится. rateOverride — как
// у speak(). Возвращает true, если озвучка запущена.
function speakDialogue(lines, rateOverride) {
  if (!ttsSupported() || !lines || !lines.length) return false;
  const progress = loadProgress();
  const accent = progress.settings.speechAccent || "en-US";
  const rate = rateOverride || (progress.settings.speechRate === "slow" ? 0.7 : 1);
  const main = pickVoice(accent);
  const voices = speechSynthesis.getVoices().filter(function (v) { return /^en/i.test(v.lang); });
  const other = voices.filter(function (v) { return v !== main; })[0] || null;

  speechSynthesis.cancel();
  const speakers = [];
  lines.forEach(function (line) {
    const m = /^([^:]{1,30}):\s*(.+)$/.exec(line);
    const name = m ? m[1] : "";
    const text = m ? m[2] : line;
    let idx = speakers.indexOf(name);
    if (idx === -1) { speakers.push(name); idx = speakers.length - 1; }
    const second = idx % 2 === 1;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = accent;
    utter.rate = rate;
    const voice = second ? (other || main) : main;
    if (voice) utter.voice = voice;
    if (second && !other) utter.pitch = 0.7; // один голос — второму собеседнику делаем ниже
    speechSynthesis.speak(utter);
  });
  return true;
}

// Текст для озвучки задания с пропуском: ___ заменяем на паузу, а не
// произносим как есть — иначе можно случайно выдать пропущенное слово,
// подставив его мысленно не туда, да и произношение "___" звучит некрасиво.
function speakableText(text) {
  return String(text).replace(/_{2,}/g, "...");
}

// HTML одной кнопки озвучки. title — необязательная подсказка при наведении.
function speakButtonHtml(text, title) {
  const clean = speakableText(text);
  if (!clean.trim()) return "";
  return '<button type="button" class="speak-btn" data-speak="' + escapeHtml(clean) + '" title="' +
    escapeHtml(title || "Слушать произношение") + '" aria-label="Слушать произношение">🔊</button>';
}

// Общий обработчик клика: ловит любую .speak-btn на странице,
// в том числе добавленную позже через innerHTML.
document.addEventListener("click", function (e) {
  const btn = e.target.closest(".speak-btn");
  if (!btn) return;
  e.preventDefault();
  speak(btn.dataset.speak);
});

// Показывать кнопки озвучки только если реально можем озвучить (см. .tts-unavailable в CSS)
function updateTtsAvailability() {
  const available = hasEnglishVoice();
  document.body.classList.toggle("tts-unavailable", !available);
  return available;
}

document.addEventListener("DOMContentLoaded", updateTtsAvailability);
// В Chrome список голосов подгружается асинхронно — пересчитываем, когда он готов
if (ttsSupported() && "onvoiceschanged" in speechSynthesis) {
  speechSynthesis.onvoiceschanged = updateTtsAvailability;
}
