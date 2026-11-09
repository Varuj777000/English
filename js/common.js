// =====================================================================
// common.js — общие помощники для всех страниц:
// меню, безопасный вывод текста, поиск тем и т.п.
// =====================================================================

// Пункты меню. ready: false — раздел ещё в разработке (показывается серым).
const NAV_ITEMS = [
  { href: "index.html",    label: "Главная",   ready: true },
  { href: "lesson.html",   label: "Занятие",   ready: true },
  { href: "words.html",    label: "Слова",     ready: true },
  { href: "stories.html",  label: "Рассказы",  ready: true },
  { href: "verbs.html",    label: "Глаголы",   ready: true },
  { href: "mistakes.html", label: "Ошибки",    ready: true },
  { href: "speaking.html", label: "Говорение", ready: true },
  { href: "writing.html",  label: "Письмо",    ready: true },
  { href: "progress.html", label: "Прогресс",  ready: true },
  { href: "topics.html",   label: "Темы",      ready: true },
  { href: "test.html",     label: "Тест уровня", ready: true },
  { href: "checkpoint.html", label: "Контрольная", ready: true },
  { href: "settings.html", label: "Настройки", ready: true }
];

// Нарисовать шапку сайта с меню в элементе <header id="site-header">.
function renderHeader() {
  const header = document.getElementById("site-header");
  if (!header) return;

  // Какая страница открыта сейчас (например, "topics.html")
  const current = location.pathname.split("/").pop() || "index.html";

  const links = NAV_ITEMS.map(function (item) {
    if (!item.ready) {
      return '<span class="nav-link disabled" title="Скоро">' + item.label + "</span>";
    }
    const active = item.href === current ? " active" : "";
    return '<a class="nav-link' + active + '" href="' + item.href + '">' + item.label + "</a>";
  }).join("");

  header.innerHTML =
    '<div class="header-inner">' +
      '<a class="logo" href="index.html">English<span>Trainer</span></a>' +
      '<nav class="nav">' + links + "</nav>" +
    "</div>";
}

// Защита от «поломки» страницы: превращает < > & " в безопасные символы.
// Используйте ВСЕГДА, когда вставляете текст из данных в HTML.
function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Безопасный текст + простая разметка: **жирный** → <b>жирный</b>.
function richText(text) {
  return escapeHtml(text).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
}

// Текст задания: безопасный HTML, пропуск ___ выделяется подчёркиванием.
function questionHtml(text) {
  return richText(text).replace(/_{3,}/g, '<span class="blank">&nbsp;</span>');
}

// Перемешать массив (возвращает НОВЫЙ массив, исходный не меняется).
function shuffle(list) {
  const arr = list.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

// Дата для людей: "2026-10-01" → "1 октября 2026"
function formatDate(str) {
  const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
  const parts = str.split("-");
  return Number(parts[2]) + " " + months[Number(parts[1]) - 1] + " " + parts[0];
}

// Список тем в виде кликабельных «чипов» со ссылками на правила.
// Используется на страницах теста, контрольной и прогресса.
function topicListHtml(ids) {
  return '<div class="topic-links">' + ids.map(function (id) {
    const t = findTopic(id);
    if (!t) return "";
    return '<a class="topic-link" href="topics.html#' + t.id + '">' +
      '<span class="badge ' + t.level + '">' + t.level + "</span> " + escapeHtml(t.title) + "</a>";
  }).join("") + "</div>";
}

// Цвет полоски прогресса по проценту: зелёный / жёлтый / красный.
function barClass(p) {
  if (p >= 60) return "good";
  if (p >= 40) return "mid";
  return "low";
}

// Склонение слова «день»: 1 день, 2 дня, 5 дней
function dayWord(n) {
  const n10 = n % 10, n100 = n % 100;
  if (n10 === 1 && n100 !== 11) return "день";
  if (n10 >= 2 && n10 <= 4 && (n100 < 12 || n100 > 14)) return "дня";
  return "дней";
}

// Найти тему по ID (или undefined, если такой нет).
function findTopic(topicId) {
  return DATA.topics.find(function (t) { return t.id === topicId; });
}

// Номер уровня: A1 → 0, A2 → 1, B1 → 2 ...
function levelIndex(level) {
  return LEVELS.indexOf(level);
}

// Упражнения одной темы.
function exercisesOfTopic(topicId) {
  return DATA.exercises.filter(function (e) { return e.topic === topicId; });
}

// Сколько вопросов к текстам (все они относятся к теме "reading").
function readingQuestionCount() {
  return DATA.texts.reduce(function (sum, t) { return sum + t.questions.length; }, 0);
}

// Названия категорий тем по-русски.
const CATEGORY_NAMES = {
  grammar: "Грамматика",
  vocabulary: "Лексика",
  reading: "Чтение",
  other: "Другое"
};

// Запускаем при загрузке каждой страницы.
document.addEventListener("DOMContentLoaded", function () {
  renderHeader();
  if (typeof validateData === "function") validateData();
});
