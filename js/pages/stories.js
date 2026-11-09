// =====================================================================
// pages/stories.js — страница «Рассказы»: список мини-рассказов с рамкой
// глаголов и свободное решение любого из них (то же, что в занятии, но
// по вашему выбору). Сам рассказ рисует renderStory() из js/story.js.
//
// Черновик (введённые, но не проверенные ответы) хранится под своим ключом,
// чтобы можно было закрыть вкладку и продолжить.
// =====================================================================

const STORY_DRAFT_KEY = "english-trainer-story-draft";

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("back-btn").addEventListener("click", showList);
  showList();
});

function showView(name) {
  ["list", "story", "result"].forEach(function (v) {
    document.getElementById("view-" + v).classList.toggle("hidden", v !== name);
  });
  window.scrollTo(0, 0);
}

function showList() {
  const progress = loadProgress();
  const box = document.getElementById("story-list");
  if (DATA.stories.length === 0) {
    box.innerHTML = '<div class="notice">Рассказов пока нет.</div>';
    showView("list");
    return;
  }
  box.innerHTML = DATA.stories.map(function (s) {
    const rec = progress.stories[s.id];
    const topics = s.gaps.map(function (g) { return g.topic; })
      .filter(function (t, i, a) { return a.indexOf(t) === i; })
      .map(function (id) {
        const t = findTopic(id);
        return '<span class="badge soft">' + escapeHtml(t ? t.title : id) + "</span>";
      }).join(" ");
    return '<div class="card story-list-item">' +
      '<h3><span class="badge ' + s.level + '">' + s.level + "</span> " + escapeHtml(s.title) + "</h3>" +
      '<p class="muted small">Пропусков: ' + s.gaps.length + ". " +
        (rec ? "Решали " + rec.times + " раз(а), в последний раз " + formatDate(rec.lastSeen) + ": " + rec.correct + " из " + rec.total + "." : "Ещё не решали.") + "</p>" +
      '<p class="small">' + topics + "</p>" +
      '<button class="btn btn-primary" data-id="' + s.id + '">' + (rec ? "Решить ещё раз" : "Решать") + "</button>" +
      "</div>";
  }).join("");
  box.querySelectorAll("[data-id]").forEach(function (btn) {
    btn.addEventListener("click", function () { openStory(btn.dataset.id); });
  });
  showView("list");
}

function openStory(id) {
  const story = DATA.stories.filter(function (s) { return s.id === id; })[0];
  if (!story) return;
  const draft = loadDraft(id);
  showView("story");
  renderStory(document.getElementById("story-card"), story, {
    draft: draft,
    onDraft: function (answers) { saveDraft(id, answers); },
    onDone: function (results) {
      const progress = loadProgress();
      applyStoryResults(progress, story, results);
      saveProgress(progress);
      clearDraft();
      showResult(story, results);
    }
  });
}

function showResult(story, results) {
  const right = results.filter(function (r) { return r.correct; }).length;
  document.getElementById("view-result").innerHTML =
    "<h1>Готово!</h1>" +
    '<div class="notice ' + (right === results.length ? "good" : "warn") + '">Рассказ «' + escapeHtml(story.title) +
    "»: верно " + right + " из " + results.length + ". Темы пропусков обновлены.</div>" +
    '<div class="btn-row"><button class="btn btn-primary" id="again-btn">Другие рассказы</button>' +
    '<a class="btn" href="lesson.html">К занятию</a></div>';
  document.getElementById("again-btn").addEventListener("click", showList);
  showView("result");
}

function loadDraft(id) {
  try {
    const d = JSON.parse(localStorage.getItem(STORY_DRAFT_KEY));
    return d && d.id === id && Array.isArray(d.answers) ? d.answers : [];
  } catch (e) { return []; }
}
function saveDraft(id, answers) {
  try { localStorage.setItem(STORY_DRAFT_KEY, JSON.stringify({ id: id, answers: answers })); } catch (e) {}
}
function clearDraft() {
  try { localStorage.removeItem(STORY_DRAFT_KEY); } catch (e) {}
}
