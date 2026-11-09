// =====================================================================
// pages/words.js — страница «Слова»:
//   1. добавление своих слов и список уже добавленных;
//   2. повторение по интервалам (слова + карточки «Другое» из импорта чата,
//      алгоритм SM-2 из srs.js) — отдельный заход, независимо от
//      ежедневного занятия на lesson.html.
// =====================================================================

let review = null; // { items: [{kind, ref, direction?}], index, results } — текущее повторение

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("add-form").addEventListener("submit", onAddOne);
  document.getElementById("list-btn").addEventListener("click", onAddList);
  document.getElementById("my-search").addEventListener("input", renderMyWords);
  document.getElementById("rv-stop-btn").addEventListener("click", stopReview);

  document.getElementById("listen-btn").addEventListener("click", function () {
    speak(document.getElementById("listen-input").value);
  });
  document.getElementById("listen-input").addEventListener("keydown", function (e) {
    if (e.key === "Enter") { e.preventDefault(); document.getElementById("listen-btn").click(); }
  });

  // Пополняем очередь словами из встроенного словаря сайта (см. srs.js)
  const progress = loadProgress();
  const added = enrollNewWords(progress);
  if (added > 0) saveProgress(progress);

  renderMyWords();
  renderReviewBox();
});

// ---------- Добавить одно слово ----------

function onAddOne(event) {
  event.preventDefault(); // не перезагружать страницу при отправке формы

  const enInput = document.getElementById("w-en");
  const ruInput = document.getElementById("w-ru");
  const exInput = document.getElementById("w-example");
  const box = document.getElementById("add-message");

  const word = { en: enInput.value, ru: ruInput.value, example: exInput.value };

  if (!word.en.trim() || !word.ru.trim()) {
    showMessage(box, "bad", "Заполните английское слово и перевод.");
    return;
  }
  if (!/[a-z]/i.test(word.en)) {
    showMessage(box, "bad", "В поле «Английское слово» нет латинских букв. Возможно, поля перепутаны?");
    return;
  }

  const progress = loadProgress();
  const result = addCustomWord(progress, word, "manual");
  const name = "«" + word.en.trim() + "»";

  if (result === "added") {
    saveProgress(progress);
    showMessage(box, "good", "Слово " + name + " добавлено в повторение.");
    enInput.value = "";
    ruInput.value = "";
    exInput.value = "";
    enInput.focus(); // сразу можно вводить следующее слово
  } else if (result === "review") {
    saveProgress(progress);
    showMessage(box, "good", "Слово " + name + " уже есть в словаре сайта — поставил его в повторение.");
    enInput.value = "";
    ruInput.value = "";
    exInput.value = "";
  } else if (result === "exists") {
    showMessage(box, "warn", "Слово " + name + " уже есть в повторении.");
  }
  renderMyWords();
  renderReviewBox();
}

// ---------- Добавить списком ----------

function onAddList() {
  const input = document.getElementById("list-input");
  const box = document.getElementById("list-message");
  const parsed = parseWordList(input.value);

  if (parsed.items.length === 0 && parsed.errors.length === 0) {
    showMessage(box, "bad", "Список пуст.");
    return;
  }

  const progress = loadProgress();
  const added = [];
  const toReview = [];
  const skipped = [];

  parsed.items.forEach(function (item) {
    const result = addCustomWord(progress, item, "manual");
    if (result === "added") added.push(item.en);
    else if (result === "review") toReview.push(item.en);
    else skipped.push(item.en);
  });
  saveProgress(progress);

  // Отчёт
  let html = "";
  if (added.length) html += "<p>Добавлено слов: <b>" + added.length + "</b>.</p>";
  if (toReview.length) html += "<p>Уже были в словаре сайта, поставлены в повторение: " + listHtml(toReview) + "</p>";
  if (skipped.length) html += "<p>Уже были в повторении (пропущены): " + listHtml(skipped) + "</p>";
  if (parsed.errors.length) {
    html += "<p><b>Не удалось разобрать строки:</b></p><ul>" + parsed.errors.map(function (e) {
      return "<li>Строка " + e.line + ": «" + escapeHtml(e.text) + "» — " + e.reason + "</li>";
    }).join("") + "</ul>";
  }

  const kind = parsed.errors.length ? "warn" : "good";
  box.innerHTML = '<div class="notice ' + kind + '">' + html + "</div>";

  // В поле оставляем только строки с ошибками — их удобно исправить и отправить снова
  const badLines = parsed.errors.map(function (e) { return e.text; });
  input.value = badLines.join("\n");

  renderMyWords();
  renderReviewBox();
}

function listHtml(words) {
  return words.map(function (w) { return "<b>" + escapeHtml(w) + "</b>"; }).join(", ");
}

// ---------- Список своих слов ----------

function renderMyWords() {
  const progress = loadProgress();
  const query = document.getElementById("my-search").value.trim().toLowerCase();

  // Новые сверху
  const words = progress.customWords.slice().reverse().filter(function (w) {
    if (!query) return true;
    return (w.en + " " + w.ru).toLowerCase().indexOf(query) !== -1;
  });

  document.getElementById("my-count").textContent = "(" + progress.customWords.length + ")";
  const box = document.getElementById("my-words");

  if (progress.customWords.length === 0) {
    box.innerHTML = '<p class="muted">Пока нет своих слов. Добавьте их формой выше.</p>';
    return;
  }
  if (words.length === 0) {
    box.innerHTML = '<p class="muted">Ничего не найдено.</p>';
    return;
  }

  box.innerHTML = words.map(function (w) {
    const source = w.source === "chat" ? "из чата" : w.source === "text" ? "из текста" : "вручную";
    return (
      '<div class="word-row">' +
        '<div class="word-main">' +
          '<b>' + escapeHtml(w.en) + "</b>" + speakButtonHtml(w.en) + " — " + escapeHtml(w.ru) +
          (w.example ? '<div class="muted small">' + escapeHtml(w.example) + speakButtonHtml(w.example) + "</div>" : "") +
          '<div class="muted small">' + source + ", " + w.added + "</div>" +
        "</div>" +
        '<button class="btn btn-small" data-delete="' + escapeHtml(w.en) + '" title="Удалить">✕</button>' +
      "</div>"
    );
  }).join("");

  box.querySelectorAll("[data-delete]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const en = btn.dataset.delete;
      if (!confirm("Удалить слово «" + en + "» из повторения?")) return;
      const p = loadProgress();
      deleteCustomWord(p, en);
      saveProgress(p);
      renderMyWords();
      renderReviewBox();
    });
  });
}

// ---------------------------------------------------------------------
// Повторение слов (SM-2)
// ---------------------------------------------------------------------

// Карточка «На сегодня N карточек» + кнопка «Повторить» над формами добавления.
// Считаем и слова, и карточки «Другое» из импорта чата — они повторяются вместе.
function renderReviewBox() {
  const progress = loadProgress();
  const due = dueWordKeys(progress).length + dueOtherMistakeIds(progress).length;
  const box = document.getElementById("review-box");

  if (due > 0) {
    box.innerHTML =
      '<div class="card"><h3>Повторение</h3>' +
      "<p>На сегодня: <b>" + due + "</b> " + cardWord(due) + ".</p>" +
      '<button class="btn btn-primary" id="start-review-btn">Повторить</button></div>';
    document.getElementById("start-review-btn").addEventListener("click", startReview);
  } else if (Object.keys(progress.words).length > 0) {
    box.innerHTML = '<div class="notice good">На сегодня слов для повторения нет — все повторены. Загляните завтра!</div>';
  } else if (DATA.words.length === 0) {
    // Встроенный словарь сайта пока пуст (наполнится на этапе 7) —
    // без своих слов повторять пока нечего.
    box.innerHTML = '<div class="notice">Пока в повторении нет ни одного слова. ' +
      'Встроенный словарь сайта ещё почти пуст — он наполнится позже. ' +
      'А пока добавьте свои слова формой ниже, и они сразу попадут в повторение.</div>';
  } else {
    box.innerHTML = "";
  }
}

function startReview() {
  const progress = loadProgress();
  const items = pickReviewItems(progress, RULES.words.reviewPageLimit);
  if (items.length === 0) return;
  review = { items: items, index: 0, results: [] };
  showReviewView("review");
  showReviewCard();
}

function showReviewCard() {
  if (review.index >= review.items.length) {
    finishReview();
    return;
  }
  const item = review.items[review.index];
  document.getElementById("rv-counter").textContent = (review.index + 1) + " из " + review.items.length;
  document.getElementById("rv-progress").style.width = Math.round(review.index / review.items.length * 100) + "%";

  const progress = loadProgress();
  renderReviewCard(document.getElementById("rv-card"), progress, item, function (result) {
    onReviewAnswered(item, result);
  });
}

function onReviewAnswered(item, result) {
  const progress = loadProgress();
  if (!result.skippedMissing && !result.alreadyApplied) gradeReviewItem(progress, item, result.quality);
  recordActivity(progress, { words: 1 });

  if (result.disputed) {
    const word = wordByKey(progress, item.ref);
    progress.disputed.push({
      kind: "word", ref: item.ref,
      wordEn: word ? word.en : item.ref, wordRu: word ? word.ru : "",
      answer: result.answer, date: todayStr()
    });
  }

  saveProgress(progress);

  review.results.push({ kind: item.kind, ref: item.ref, correct: result.correct, quality: result.quality });
  review.index += 1;
  showReviewCard();
}

function stopReview() {
  if (review.results.length === 0 || confirm("Закончить повторение сейчас? Уже отвеченные карточки сохранены.")) {
    finishReview();
  }
}

function finishReview() {
  const results = review.results;
  review = null;
  renderMyWords();
  renderReviewBox();
  showReviewFinish(results);
}

function showReviewFinish(results) {
  const total = results.length;
  const easy = results.filter(function (r) { return r.quality >= 4; }).length;
  const hard = results.filter(function (r) { return r.quality === 3; }).length;
  const forgot = results.filter(function (r) { return r.quality < 3; }).length;
  const p = loadProgress();
  const stillDue = dueWordKeys(p).length + dueOtherMistakeIds(p).length;

  let html = "<h1>Повторение завершено</h1>";
  if (total === 0) {
    html += '<p class="muted">Вы не ответили ни на одну карточку.</p>';
  } else {
    html +=
      '<div class="grid">' +
        '<div class="stat"><div class="value">' + total + '</div><div class="label">карточек</div></div>' +
        '<div class="stat"><div class="value">' + easy + '</div><div class="label">легко / хорошо</div></div>' +
        '<div class="stat"><div class="value">' + hard + '</div><div class="label">трудно</div></div>' +
        '<div class="stat"><div class="value">' + forgot + '</div><div class="label">не помню</div></div>' +
      "</div>";
  }

  html += '<div class="btn-row">';
  if (stillDue > 0) html += '<button class="btn btn-primary" id="rv-again-btn">Повторить ещё (' + stillDue + ")</button>";
  html += '<button class="btn" id="rv-done-btn">Готово</button></div>';

  const view = document.getElementById("view-review-finish");
  view.innerHTML = html;
  if (stillDue > 0) document.getElementById("rv-again-btn").addEventListener("click", startReview);
  document.getElementById("rv-done-btn").addEventListener("click", function () { showReviewView("manage"); });
  showReviewView("finish");
}

// Переключение между «Управление словами» / «Повторение» / «Итоги повторения»
function showReviewView(name) {
  ["manage", "review", "finish"].forEach(function (v) {
    const id = v === "manage" ? "view-manage" : v === "review" ? "view-review" : "view-review-finish";
    document.getElementById(id).classList.toggle("hidden", v !== name);
  });
  window.scrollTo(0, 0);
}

// 1 слово, 2 слова, 5 слов
function wordWord(n) {
  const n10 = n % 10;
  const n100 = n % 100;
  if (n10 === 1 && n100 !== 11) return "слово";
  if (n10 >= 2 && n10 <= 4 && (n100 < 12 || n100 > 14)) return "слова";
  return "слов";
}

// 1 карточка, 2 карточки, 5 карточек
function cardWord(n) {
  const n10 = n % 10;
  const n100 = n % 100;
  if (n10 === 1 && n100 !== 11) return "карточка";
  if (n10 >= 2 && n10 <= 4 && (n100 < 12 || n100 > 14)) return "карточки";
  return "карточек";
}

// ---------- Помощник ----------

function showMessage(box, kind, text) {
  box.innerHTML = '<div class="notice ' + kind + '">' + escapeHtml(text) + "</div>";
}
