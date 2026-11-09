// =====================================================================
// pages/writing.js — страница «Письмо» (writing.html).
// Логика проверок и сохранения — в js/writing.js; здесь только экран:
// список заданий → план и фразы → поле текста с живыми подсказками.
// Задание открывается по ссылке вида writing.html#wr-a2-plans.
// =====================================================================

let currentTask = null;
let saveTimer = null;

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("wr-back").addEventListener("click", function (e) {
    e.preventDefault();
    location.hash = "";
  });
  document.getElementById("wr-text").addEventListener("input", onType);
  document.getElementById("wr-done").addEventListener("click", onDone);
  document.getElementById("wr-copy").addEventListener("click", onCopy);
  document.getElementById("wr-clear").addEventListener("click", onClear);
  window.addEventListener("hashchange", route);
  route();
});

function route() {
  flushDraft();
  const id = decodeURIComponent(location.hash.replace(/^#/, ""));
  const task = id ? findWritingTask(id) : null;
  if (task) openTask(task);
  else renderList();
}

// ---------- Список ----------

function renderList() {
  currentTask = null;
  document.getElementById("wr-edit").classList.add("hidden");
  document.getElementById("wr-list").classList.remove("hidden");
  const progress = loadProgress();
  const workIdx = levelIndex(progress.level || LEVELS[0]);

  // Сначала задания вашего уровня и ниже, потом выше
  const tasks = DATA.writing.slice().sort(function (a, b) {
    const ua = levelIndex(a.level) > workIdx + 0 ? 1 : 0, ub = levelIndex(b.level) > workIdx + 0 ? 1 : 0;
    return ua - ub || levelIndex(a.level) - levelIndex(b.level);
  });

  document.getElementById("wr-tasks").innerHTML = tasks.map(function (t) {
    const r = writingRecord(progress, t.id);
    let status = "";
    if (r && r.times) status = "готово · " + r.times + " " + (r.times === 1 ? "раз" : "раза") + ", проверок пройдено " + r.checksPassed + " из " + r.checksTotal;
    else if (r && r.draft) status = "есть черновик";
    const hard = levelIndex(t.level) > workIdx + 1 ? " (сложнее вашего уровня)" : "";
    return (
      '<a class="card wr-task" href="#' + escapeHtml(t.id) + '">' +
        '<span class="badge ' + t.level + '">' + t.level + "</span> <b>" + escapeHtml(t.title) + "</b>" + escapeHtml(hard) +
        '<p class="muted small">' + escapeHtml(t.prompt) + "</p>" +
        '<p class="muted small">' + t.minWords + "–" + t.maxWords + " слов" + (status ? " · " + escapeHtml(status) : "") + "</p>" +
      "</a>"
    );
  }).join("");
}

// ---------- Письмо ----------

function openTask(task) {
  currentTask = task;
  document.getElementById("wr-list").classList.add("hidden");
  document.getElementById("wr-edit").classList.remove("hidden");
  document.getElementById("wr-message").innerHTML = "";

  const progress = loadProgress();
  const r = writingRecord(progress, task.id);

  document.getElementById("wr-title").innerHTML =
    '<span class="badge ' + task.level + '">' + task.level + "</span> " + escapeHtml(task.title);
  document.getElementById("wr-prompt").textContent = task.prompt;
  document.getElementById("wr-meta").textContent =
    "Объём: " + task.minWords + "–" + task.maxWords + " слов." +
    (task.topics && task.topics.length ? " Тренирует: " + task.topics.map(function (id) { const t = findTopic(id); return t ? t.title : id; }).join(", ") + "." : "");

  document.getElementById("wr-steps").innerHTML = task.steps.map(function (s) {
    return "<li><b>" + escapeHtml(s.title) + ".</b> " + escapeHtml(s.hint) + "</li>";
  }).join("");

  document.getElementById("wr-phrases").innerHTML = task.phrases.map(function (p, i) {
    return '<button type="button" class="wr-phrase" data-i="' + i + '" title="' + escapeHtml(p.ru) + '">' +
      "<span>" + escapeHtml(p.en) + '</span><small class="muted">' + escapeHtml(p.ru) + "</small></button>";
  }).join("");
  document.querySelectorAll(".wr-phrase").forEach(function (btn) {
    btn.addEventListener("click", function () { insertPhrase(task.phrases[Number(btn.dataset.i)].en); });
  });

  const area = document.getElementById("wr-text");
  area.value = (r && r.draft) || "";
  update();
  window.scrollTo(0, 0);
}

function insertPhrase(text) {
  const area = document.getElementById("wr-text");
  const start = area.selectionStart === undefined ? area.value.length : area.selectionStart;
  const end = area.selectionEnd === undefined ? start : area.selectionEnd;
  const before = area.value.slice(0, start);
  const sep = before && !/\s$/.test(before) ? " " : "";
  area.value = before + sep + text + " " + area.value.slice(end);
  const pos = (before + sep + text + " ").length;
  area.focus();
  area.setSelectionRange(pos, pos);
  onType();
}

function onType() {
  update();
  clearTimeout(saveTimer);
  saveTimer = setTimeout(flushDraft, 600);
}

// Сохранить черновик (при паузе в наборе и при уходе со страницы)
function flushDraft() {
  clearTimeout(saveTimer);
  if (!currentTask) return;
  const progress = loadProgress();
  const text = document.getElementById("wr-text").value;
  const r = writingRecord(progress, currentTask.id);
  if (!text && !(r && r.draft)) return;
  if (r && r.text && r.text === text) return; // уже сохранено как готовое — черновик не нужен
  saveWritingDraft(progress, currentTask.id, text);
  saveProgress(progress);
}
window.addEventListener("beforeunload", flushDraft);

// Обновить счётчик, проверки и подсказки
function update() {
  if (!currentTask) return;
  const text = document.getElementById("wr-text").value;
  const ev = evaluateWriting(currentTask, text);

  const t = currentTask;
  const cls = ev.words === 0 ? "muted" : ev.words < t.minWords ? "" : ev.words <= t.maxWords ? "right" : "muted";
  const hint = ev.words < t.minWords ? "ещё хотя бы " + (t.minWords - ev.words) : ev.words <= t.maxWords ? "объём в норме" : "чуть длиннее, чем нужно";
  document.getElementById("wr-count").innerHTML =
    '<span class="' + cls + '">Слов: <b>' + ev.words + "</b> из " + t.minWords + "–" + t.maxWords + " (" + hint + ")</span>" +
    (looksRussian(text) ? ' <span class="wrong">Пишите по-английски.</span>' : "");

  document.getElementById("wr-checks").innerHTML = ev.checks.map(function (c) {
    return "<li" + (c.ok ? ' class="ok"' : "") + ">" + (c.ok ? "✓ " : "○ ") + escapeHtml(c.text) + "</li>";
  }).join("");

  document.getElementById("wr-pitfalls").innerHTML = ev.pitfalls.length
    ? '<p><b>Проверьте:</b></p><ul class="wr-pitfalls">' + ev.pitfalls.map(function (p) {
        return "<li>" + escapeHtml(p.tip) + ' <span class="muted small">Найдено: ' +
          p.found.map(function (f) { return "«" + escapeHtml(f) + "»"; }).join(", ") + "</span></li>";
      }).join("") + "</ul>"
    : "";
}

function onDone() {
  if (!currentTask) return;
  const text = document.getElementById("wr-text").value.trim();
  const msg = document.getElementById("wr-message");
  if (countWords(text) < 5) {
    msg.innerHTML = '<div class="notice bad">Текст пока слишком короткий — напишите хотя бы несколько предложений.</div>';
    return;
  }
  const progress = loadProgress();
  const r = finishWriting(progress, currentTask, text);
  saveProgress(progress);
  msg.innerHTML =
    '<div class="notice good"><b>Сохранено.</b> Слов: ' + r.words + ", проверок пройдено " + r.checksPassed + " из " + r.checksTotal + ".</div>" +
    '<div class="card"><h3>Дальше — проверка живым человеком</h3>' +
    "<p>Нажмите «Скопировать для проверки в чате», вставьте в чат с Claude и попросите проверить. " +
    "Он ответит разбором и JSON-файлом: загрузите его на странице «Настройки» — ошибки попадут в «Мои ошибки» и вернутся для повторения.</p>" +
    '<div class="btn-row"><a class="btn" href="mistakes.html">Мои ошибки</a><a class="btn" href="#">Другое задание</a></div></div>';
}

function onClear() {
  if (!currentTask) return;
  const area = document.getElementById("wr-text");
  if (area.value.trim() && !confirm("Очистить текст?")) return;
  area.value = "";
  onType();
}

function onCopy() {
  if (!currentTask) return;
  const text = document.getElementById("wr-text").value;
  const msg = document.getElementById("wr-message");
  if (countWords(text) < 5) {
    msg.innerHTML = '<div class="notice bad">Сначала напишите текст.</div>';
    return;
  }
  const full = buildWritingClaudeText(currentTask, text);
  const btn = document.getElementById("wr-copy");

  function done() {
    btn.textContent = "Скопировано ✓";
    setTimeout(function () { btn.textContent = "Скопировать для проверки в чате"; }, 2000);
  }
  function fallbackCopy() {
    const area = document.createElement("textarea");
    area.value = full;
    document.body.appendChild(area);
    area.select();
    try { document.execCommand("copy"); done(); }
    catch (e) { alert("Не удалось скопировать автоматически."); }
    document.body.removeChild(area);
  }
  if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(full).then(done, fallbackCopy);
  else fallbackCopy();
}
