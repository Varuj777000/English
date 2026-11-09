// =====================================================================
// pages/mistakes.js — страница «Мои ошибки» (mistakes.html).
//
// Показывает карточки progress.otherMistakes (их же повторяют на странице
// «Слова» и в начале занятий): добавление вручную, список, удаление.
// Само повторение здесь не рисуется — оно общее со словами (srs.js).
// =====================================================================

document.addEventListener("DOMContentLoaded", function () {
  fillTopics();
  renderAll();
  document.getElementById("add-form").addEventListener("submit", onAdd);
  document.getElementById("search").addEventListener("input", renderList);
});

// Темы с грамматикой и лексикой — для необязательного выбора темы
function fillTopics() {
  const select = document.getElementById("m-topic");
  DATA.topics
    .filter(function (t) { return t.category === "grammar" || t.category === "vocabulary"; })
    .forEach(function (t) {
      const o = document.createElement("option");
      o.value = t.id;
      o.textContent = t.level + " · " + t.title;
      select.appendChild(o);
    });
}

function renderAll() {
  renderSummary();
  renderList();
}

// Состояние карточки: новая / учу / выучена
function mistakeState(m) {
  if (m.srs.reps === 0) return { key: "new", label: "новая" };
  if (m.srs.interval >= RULES.words.masteredInterval) return { key: "done", label: "выучена" };
  return { key: "learning", label: "учу" };
}

function renderSummary() {
  const list = loadProgress().otherMistakes;
  const today = todayStr();
  const due = list.filter(function (m) { return m.srs.due <= today; }).length;
  const done = list.filter(function (m) { return mistakeState(m).key === "done"; }).length;
  const box = document.getElementById("summary");

  if (list.length === 0) {
    box.innerHTML = '<div class="notice">Пока ошибок нет. Добавьте первую формой ниже или загрузите файл от Claude на странице «Настройки».</div>';
    return;
  }
  box.innerHTML =
    '<div class="grid" style="margin-bottom:14px">' +
      '<div class="stat"><div class="value">' + list.length + '</div><div class="label">всего ошибок</div></div>' +
      '<div class="stat"><div class="value">' + due + '</div><div class="label">пора повторить</div></div>' +
      '<div class="stat"><div class="value">' + done + '</div><div class="label">выучено</div></div>' +
    "</div>" +
    (due > 0
      ? '<a class="btn btn-primary" href="words.html">Повторить сейчас (' + due + ")</a>"
      : '<div class="notice good">На сегодня всё повторено.</div>');
}

function renderList() {
  const progress = loadProgress();
  const query = document.getElementById("search").value.trim().toLowerCase();
  const all = progress.otherMistakes.slice();
  // Сначала те, которым пора, потом по дате
  all.sort(function (a, b) { return a.srs.due < b.srs.due ? -1 : a.srs.due > b.srs.due ? 1 : 0; });
  const items = all.filter(function (m) {
    return !query || (m.wrong + " " + m.correct + " " + (m.explanation || "")).toLowerCase().indexOf(query) !== -1;
  });
  document.getElementById("count").textContent = "(" + items.length + (items.length !== all.length ? " из " + all.length : "") + ")";

  const today = todayStr();
  document.getElementById("list").innerHTML = items.length === 0
    ? '<p class="muted">Ничего не найдено.</p>'
    : items.map(function (m) {
        const topic = m.topic ? findTopic(m.topic) : null;
        const st = mistakeState(m);
        const when = m.srs.due <= today ? "пора повторить" : "повтор " + formatDate(m.srs.due);
        return (
          '<div class="mistake card">' +
            '<p class="small">Неправильно: <span class="wrong">' + escapeHtml(m.wrong) + "</span></p>" +
            '<p class="small">Правильно: <span class="right">' + escapeHtml(m.correct) + "</span>" + speakButtonHtml(m.correct) + "</p>" +
            (m.explanation ? '<p class="muted small">' + richText(m.explanation) + "</p>" : "") +
            '<p class="muted small">' + st.label + " · " + when +
              (m.srs.lapses ? " · забыто раз: " + m.srs.lapses : "") +
              (topic ? " · " + escapeHtml(topic.title) : "") + "</p>" +
            '<button class="btn btn-small" data-delete="' + escapeHtml(m.id) + '">Удалить</button>' +
          "</div>"
        );
      }).join("");

  document.querySelectorAll("#list [data-delete]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (!confirm("Удалить эту ошибку?")) return;
      const p = loadProgress();
      deleteOtherMistake(p, btn.dataset.delete);
      saveProgress(p);
      renderAll();
    });
  });
}

function onAdd(e) {
  e.preventDefault();
  const wrongEl = document.getElementById("m-wrong");
  const correctEl = document.getElementById("m-correct");
  const msg = document.getElementById("add-message");
  const wrong = wrongEl.value.trim();
  const correct = correctEl.value.trim();
  if (!wrong || !correct) {
    msg.innerHTML = '<div class="notice bad">Нужны оба поля: как написали и как правильно.</div>';
    return;
  }
  const progress = loadProgress();
  const res = addMyMistake(progress, {
    wrong: wrong,
    correct: correct,
    explanation: document.getElementById("m-expl").value,
    topic: document.getElementById("m-topic").value
  }, "manual");
  if (res.status === "duplicate") {
    msg.innerHTML = '<div class="notice">Такая ошибка уже есть в списке.</div>';
    return;
  }
  saveProgress(progress);
  msg.innerHTML = '<div class="notice good">Добавлено. Первое повторение — сегодня.' +
    (res.topic ? " Приоритет темы «" + escapeHtml(res.topic.title) + "» повышен." : "") + "</div>";
  wrongEl.value = "";
  correctEl.value = "";
  document.getElementById("m-expl").value = "";
  wrongEl.focus();
  renderAll();
}
