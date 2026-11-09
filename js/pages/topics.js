// =====================================================================
// pages/topics.js — страница «Темы»: список правил и текст для Claude.
// =====================================================================

let currentLevel = "all"; // выбранный фильтр уровня

document.addEventListener("DOMContentLoaded", function () {
  renderLevelFilter();
  renderTopicList();
  renderClaudeText();

  document.getElementById("search").addEventListener("input", renderTopicList);
  document.getElementById("copy-btn").addEventListener("click", copyClaudeText);
  document.getElementById("download-btn").addEventListener("click", downloadClaudeText);

  // Если открыли по ссылке вида topics.html#present-simple — раскрыть эту тему
  openTopicFromHash();
});

// Кнопки «Все / A1 / A2 / ...»
function renderLevelFilter() {
  const box = document.getElementById("level-filter");
  const options = ["all"].concat(LEVELS);
  box.innerHTML = options.map(function (lvl) {
    const label = lvl === "all" ? "Все" : lvl;
    const active = lvl === currentLevel ? " active" : "";
    return '<button class="chip' + active + '" data-level="' + lvl + '">' + label + "</button>";
  }).join("");

  box.querySelectorAll(".chip").forEach(function (btn) {
    btn.addEventListener("click", function () {
      currentLevel = btn.dataset.level;
      renderLevelFilter();
      renderTopicList();
    });
  });
}

// Список тем с учётом фильтра и поиска
function renderTopicList() {
  const query = document.getElementById("search").value.trim().toLowerCase();

  const topics = DATA.topics.filter(function (t) {
    if (currentLevel !== "all" && t.level !== currentLevel) return false;
    if (!query) return true;
    const haystack = (t.id + " " + t.title + " " + t.summary).toLowerCase();
    return haystack.indexOf(query) !== -1;
  });

  const box = document.getElementById("topic-list");
  if (topics.length === 0) {
    box.innerHTML = '<p class="muted">Ничего не найдено.</p>';
    return;
  }

  box.innerHTML = topics.map(renderTopic).join("");
}

// HTML одной темы
function renderTopic(t) {
  // Сколько упражнений есть по теме
  const count = t.id === "reading" ? readingQuestionCount() : exercisesOfTopic(t.id).length;
  const countText = t.category === "other"
    ? ""
    : (count > 0 ? "упражнений: " + count : "упражнения появятся позже");

  const paragraphs = t.explanation.map(function (p) {
    return "<p>" + richText(p) + "</p>";
  }).join("");

  const examples = (t.examples || []).length === 0 ? "" :
    '<ul class="examples">' + t.examples.map(function (ex) {
      return "<li>" + escapeHtml(ex.en) + speakButtonHtml(ex.en) + '<span class="ru">' + escapeHtml(ex.ru) + "</span></li>";
    }).join("") + "</ul>";

  return (
    '<details class="topic" id="topic-' + t.id + '">' +
      "<summary>" +
        '<span class="badge ' + t.level + '">' + t.level + "</span>" +
        '<span class="topic-title">' + escapeHtml(t.title) + "</span>" +
        '<span class="topic-id">' + t.id + "</span>" +
      "</summary>" +
      '<div class="topic-body">' +
        '<p class="muted small">' + CATEGORY_NAMES[t.category] + (countText ? " · " + countText : "") + "</p>" +
        paragraphs + examples +
      "</div>" +
    "</details>"
  );
}

function openTopicFromHash() {
  const id = decodeURIComponent(location.hash.slice(1));
  if (!id) return;
  const el = document.getElementById("topic-" + id);
  if (el) {
    el.open = true;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// ---------- Текст для Claude ----------

// Текст для Claude собирает buildClaudeText() из js/chat-import.js
// (там же его использует страница «Письмо»).

function renderClaudeText() {
  document.getElementById("claude-text").textContent = buildClaudeText();
}

function copyClaudeText() {
  const text = buildClaudeText();
  const btn = document.getElementById("copy-btn");

  function done() {
    btn.textContent = "Скопировано ✓";
    setTimeout(function () { btn.textContent = "Скопировать"; }, 2000);
  }

  // Современный способ копирования (работает на https и localhost)
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(done, fallbackCopy);
  } else {
    fallbackCopy();
  }

  // Запасной способ для старых браузеров и file://
  function fallbackCopy() {
    const area = document.createElement("textarea");
    area.value = text;
    document.body.appendChild(area);
    area.select();
    try { document.execCommand("copy"); done(); }
    catch (e) { alert("Не удалось скопировать. Выделите текст вручную."); }
    document.body.removeChild(area);
  }
}

function downloadClaudeText() {
  const blob = new Blob([buildClaudeText()], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "english-topics-for-claude.txt";
  link.click();
  // Освобождаем память чуть позже, чтобы загрузка успела начаться
  setTimeout(function () { URL.revokeObjectURL(link.href); }, 1000);
}
