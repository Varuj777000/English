// =====================================================================
// pages/verbs.js — раздел «Неправильные глаголы» (verbs.html).
//
// Справочник: таблица глаголов из DATA.verbs (data/verbs.js) с поиском,
// фильтрами по частотности (tier) и по группе, кнопками 🔊 у каждой формы
// (js/speech.js) и режимом самопроверки: столбец V2 / V3 / перевод можно
// скрыть, а скрытую ячейку открыть кликом по ней.
// =====================================================================

const TIER_FILTERS = [
  { key: "all", label: "Все" },
  { key: "1",   label: "Tier 1 — самые частые" },
  { key: "2",   label: "Tier 2" },
  { key: "3",   label: "Tier 3" }
];
const HIDE_COLUMNS = [
  { key: "past", label: "V2" },
  { key: "pp",   label: "V3" },
  { key: "ru",   label: "перевод" }
];

const ui = {
  query: "",
  tier: "all",
  group: "all",
  hide: { past: false, pp: false, ru: false },
  revealed: {}        // "go|past": true — ячейка открыта кликом, пока столбец скрыт
};

document.addEventListener("DOMContentLoaded", function () {
  renderTierChips();
  renderGroupSelect();
  renderHideChips();

  document.getElementById("verb-search").addEventListener("input", function (e) {
    ui.query = e.target.value.trim().toLowerCase();
    renderList();
  });
  document.getElementById("verb-group").addEventListener("change", function (e) {
    ui.group = e.target.value;
    renderList();
  });
  document.getElementById("verb-list").addEventListener("click", function (e) {
    const hidden = e.target.closest(".cell-hidden");
    if (!hidden) return;
    ui.revealed[hidden.dataset.key] = true;
    renderList();
  });

  document.querySelectorAll('#verb-tabs .chip').forEach(function (chip) {
    chip.addEventListener('click', function () { showVerbTab(chip.dataset.tab); });
  });
  renderVerbStats();
  renderList();
});

// Вкладки «Справочник» / «Тренировка»
function showVerbTab(name) {
  document.querySelectorAll('#verb-tabs .chip').forEach(function (c) { c.classList.toggle('active', c.dataset.tab === name); });
  document.getElementById('view-reference').classList.toggle('hidden', name !== 'reference');
  document.getElementById('view-train').classList.toggle('hidden', name !== 'train');
  if (name === 'train' && typeof showTrainSetup === 'function') showTrainSetup();
  renderVerbStats();
}

// Счётчик в шапке раздела: «Выучено X из Y · К повторению сегодня: N»
function renderVerbStats() {
  const s = verbStats(loadProgress());
  document.getElementById('verb-stats').innerHTML = 'Выучено <b>' + s.learned + '</b> из <b>' + s.total + '</b>' +
    (s.due > 0 ? ' · К повторению сегодня: <b>' + s.due + '</b>' : '');
}

// ---------------------------------------------------------------------
// Панель фильтров
// ---------------------------------------------------------------------

function renderTierChips() {
  const box = document.getElementById("verb-tiers");
  box.innerHTML = TIER_FILTERS.map(function (t) {
    const n = t.key === "all" ? DATA.verbs.length : DATA.verbs.filter(function (v) { return String(v.tier) === t.key; }).length;
    return '<button type="button" class="chip' + (ui.tier === t.key ? " active" : "") + '" data-key="' + t.key + '">' +
      escapeHtml(t.label) + " (" + n + ")</button>";
  }).join("");
  box.querySelectorAll(".chip").forEach(function (chip) {
    chip.addEventListener("click", function () {
      ui.tier = chip.dataset.key;
      renderTierChips();
      renderList();
    });
  });
}

function renderGroupSelect() {
  const select = document.getElementById("verb-group");
  select.innerHTML = '<option value="all">Все группы</option>' + Object.keys(VERB_GROUPS).map(function (g) {
    const n = DATA.verbs.filter(function (v) { return v.group === g; }).length;
    return '<option value="' + escapeHtml(g) + '">' + escapeHtml(VERB_GROUPS[g]) + " — " + n + "</option>";
  }).join("");
  select.value = ui.group;
}

function renderHideChips() {
  const box = document.getElementById("verb-hide");
  box.innerHTML = HIDE_COLUMNS.map(function (c) {
    const on = ui.hide[c.key];
    return '<button type="button" class="chip' + (on ? " active" : "") + '" data-key="' + c.key + '">' +
      (on ? "Показать " : "Скрыть ") + c.label + "</button>";
  }).join("");
  box.querySelectorAll(".chip").forEach(function (chip) {
    chip.addEventListener("click", function () {
      const key = chip.dataset.key;
      ui.hide[key] = !ui.hide[key];
      // при каждом новом скрытии все ячейки столбца снова закрыты
      Object.keys(ui.revealed).forEach(function (k) {
        if (k.split("|")[1] === key) delete ui.revealed[k];
      });
      renderHideChips();
      renderList();
    });
  });
}

// ---------------------------------------------------------------------
// Список
// ---------------------------------------------------------------------

function verbMatches(v) {
  if (ui.tier !== "all" && String(v.tier) !== ui.tier) return false;
  if (ui.group !== "all" && v.group !== ui.group) return false;
  if (!ui.query) return true;
  const hay = [v.inf].concat(v.past, v.pp, [v.ru]).join(" ").toLowerCase();
  return hay.indexOf(ui.query) !== -1;
}

function renderList() {
  const list = DATA.verbs.filter(verbMatches);
  document.getElementById("verb-count").textContent = "Показано " + list.length + " из " + DATA.verbs.length + ".";
  const box = document.getElementById("verb-list");
  if (list.length === 0) {
    box.innerHTML = '<p class="muted" style="padding:14px">Ничего не найдено. Измените поиск или фильтры.</p>';
    return;
  }
  box.innerHTML =
    '<div class="verb-head"><div>V1 · инфинитив</div><div>V2 · Past Simple</div><div>V3 · Past Participle</div><div>Перевод</div></div>' +
    list.map(rowHtml).join("");
}

// Ячейка с формами глагола: каждая форма со своей кнопкой 🔊
function formsHtml(v, col) {
  const words = col === "inf" ? [v.inf] : v[col];
  const say = v.say && v.say[col] && words.length === 1 ? v.say[col] : null;
  return words.map(function (w) {
    return '<span class="vform"><b>' + escapeHtml(w) + "</b>" + speakButtonHtml(say || w) + "</span>";
  }).join('<span class="vsep">/</span>');
}

function cellHtml(v, col, label) {
  const key = v.inf + "|" + col;
  const hidden = ui.hide[col] && !ui.revealed[key];
  const body = hidden
    ? '<button type="button" class="cell-hidden" data-key="' + escapeHtml(key) + '" title="Нажмите, чтобы открыть">• • •</button>'
    : (col === "ru" ? escapeHtml(v.ru) : formsHtml(v, col));
  return '<div class="vcell' + (col === "ru" ? " vru" : "") + '"><span class="vlabel">' + label + "</span>" + body + "</div>";
}

function rowHtml(v) {
  return '<div class="verb-row">' +
    cellHtml(v, "inf", "V1") +
    cellHtml(v, "past", "V2") +
    cellHtml(v, "pp", "V3") +
    cellHtml(v, "ru", "Перевод") +
    '<div class="vmeta"><span class="badge soft">' + escapeHtml(VERB_GROUPS[v.group] || v.group) + '</span> ' +
    '<span class="badge soft">Tier ' + v.tier + "</span>" +
    (v.note ? ' <span class="muted small">' + escapeHtml(v.note) + "</span>" : "") +
    "</div>" +
    "</div>";
}
