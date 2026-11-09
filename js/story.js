// =====================================================================
// story.js — мини-рассказы с рамкой глаголов (данные: data/stories/*.js).
//
// Рассказ показывается целиком: в тексте пронумерованные пропуски (поля ввода),
// над ним — рамка глаголов. Каждый глагол рамки нужно использовать ровно один
// раз. Пока вы пишете, сайт замечает, если один глагол вписан дважды (мягкое
// предупреждение — проверить рассказ всё равно можно). Кнопка «Проверить всё»
// проверяет все пропуски сразу и показывает исправления.
//
// Подключать после js/exercises.js (нужны isAnswerCorrect, isNearMiss,
// normalizeAnswer) и js/storage.js / js/rules.js.
//
// Главные функции:
//   renderStory(container, story, { draft, onDraft, onDone })
//       draft  — массив уже введённых ответов (чтобы продолжить с того же места)
//       onDraft(answers) — вызывается при каждом нажатии клавиши (сохранить черновик)
//       onDone(results)  — после «Дальше»; results = [ { n, topic, correct, answer, disputed } ]
//   applyStoryResults(progress, story, results)
//       записывает результат в progress: приоритет тем (как у обычных упражнений),
//       progress.stories, спорные ответы, активность дня. Вызывающий сам вызывает saveProgress.
//   storyGapQuestion(story, n)
//       предложение, в котором стоит пропуск n (для итогов занятия)
// =====================================================================

const STORY_GAP_RE = /\((\d+)\)\s*___/g;

// Какой глагол рамки вписан в поле? Смотрим слова справа налево: главный
// глагол стоит последним («were playing» → playing → play). null — не нашли.
function storyVerbOf(story, text) {
  const tokens = normalizeAnswer(text).split(" ");
  for (let i = tokens.length - 1; i >= 0; i--) {
    for (let b = 0; b < story.box.length; b++) {
      if (story.box[b].forms.indexOf(tokens[i]) !== -1) return story.box[b].verb;
    }
  }
  return null;
}

// Слово прямо перед пропуском n (подлежащее: «They (2) ___ ...» → «They»)
function storyWordBefore(story, n) {
  const m = story.text.join(" ").match(new RegExp("(\\S+)\\s*\\(" + n + "\\)\\s*___"));
  return m ? m[1].replace(/[^A-Za-z']/g, "") : "";
}

// Верен ли ответ в пропуске. Краткая форма, которая «прилипает» к слову перед
// пропуском (They ___ → «'ve been looking» = They've been looking), тоже верна.
function storyAnswerOk(story, gap, answer) {
  if (isAnswerCorrect(answer, gap.answers)) return true;
  if (!/^['’]/.test(answer)) return false;
  const before = storyWordBefore(story, gap.n);
  if (!before) return false;
  return isAnswerCorrect(before + answer, gap.answers.map(function (a) { return before + " " + a; }));
}

// Текст рассказа в HTML: вместо «(1) ___» — номер и поле ввода
function storyTextHtml(story) {
  return story.text.map(function (para) {
    let html = "";
    let last = 0;
    para.replace(STORY_GAP_RE, function (m, n, offset) {
      html += escapeHtml(para.slice(last, offset));
      html += '<span class="gap"><span class="gap-n">' + n + '</span>' +
        '<input type="text" class="gap-input" data-n="' + n + '" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"></span>';
      last = offset + m.length;
      return m;
    });
    html += escapeHtml(para.slice(last));
    return "<p>" + html + "</p>";
  }).join("");
}

// Предложение с пропуском n (остальные пропуски заменяем на «…»)
function storyGapQuestion(story, n) {
  const sentences = story.text.join(" ").split(/(?<=[.!?"])\s+(?=[A-Z"])/);
  const mark = "(" + n + ") ___";
  const found = sentences.filter(function (s) { return s.indexOf(mark) !== -1; })[0] || story.title;
  return found.replace(STORY_GAP_RE, function (m, k) { return Number(k) === Number(n) ? "___" : "…"; });
}

function renderStory(container, story, opts) {
  opts = opts || {};
  const draft = opts.draft || [];
  let checked = false;
  let warnedEmpty = false;
  let results = null;

  container.innerHTML =
    '<div class="story">' +
      '<h3 class="story-title">' + escapeHtml(story.title) + "</h3>" +
      '<p class="ex-prompt muted small">Впишите в каждый пропуск глагол из рамки в нужной форме. ' +
      "Каждый глагол — только один раз.</p>" +
      '<div class="story-box">' + story.box.map(function (b) {
        return '<span class="story-verb" data-verb="' + escapeHtml(b.verb) + '">' + escapeHtml(b.verb) + "</span>";
      }).join("") + "</div>" +
      '<div class="story-text">' + storyTextHtml(story) + "</div>" +
      '<div class="story-warn"></div>' +
      '<div class="btn-row story-actions"><button class="btn btn-primary story-check-btn">Проверить всё</button></div>' +
      '<div class="feedback story-feedback"></div>' +
    "</div>";

  const inputs = Array.prototype.slice.call(container.querySelectorAll(".gap-input"));
  const warnBox = container.querySelector(".story-warn");
  const feedback = container.querySelector(".story-feedback");

  inputs.forEach(function (input, i) {
    if (draft[i]) input.value = draft[i];
    input.addEventListener("input", onInput);
    input.addEventListener("keydown", function (e) {
      if (e.key !== "Enter") return;
      e.preventDefault();
      const next = inputs[i + 1];
      if (next) next.focus();
      else check();
    });
    fitWidth(input);
  });
  updateBox();
  container.querySelector(".story-check-btn").addEventListener("click", check);
  setTimeout(function () {
    const first = inputs.filter(function (x) { return !x.value; })[0] || inputs[0];
    if (first) first.focus({ preventScroll: true });
  }, 50);

  function fitWidth(input) {
    input.style.width = Math.max(7, input.value.length + 2) + "ch";
  }

  function answers() {
    return inputs.map(function (x) { return x.value; });
  }

  function onInput(e) {
    fitWidth(e.target);
    warnedEmpty = false;
    updateBox();
    if (opts.onDraft) opts.onDraft(answers());
  }

  // Рамка: использованные глаголы серые, повторно вписанные — красные + предупреждение
  function updateBox() {
    const byVerb = {};   // глагол → номера пропусков
    inputs.forEach(function (input) {
      input.classList.remove("dup");
      if (!input.value.trim()) return;
      const verb = storyVerbOf(story, input.value);
      if (verb) (byVerb[verb] = byVerb[verb] || []).push(input);
    });
    container.querySelectorAll(".story-verb").forEach(function (chip) {
      const list = byVerb[chip.dataset.verb] || [];
      chip.classList.toggle("used", list.length === 1);
      chip.classList.toggle("dup", list.length > 1);
    });
    const lines = [];
    Object.keys(byVerb).forEach(function (verb) {
      if (byVerb[verb].length < 2) return;
      byVerb[verb].forEach(function (input) { input.classList.add("dup"); });
      const nums = byVerb[verb].map(function (x) { return x.dataset.n; }).join(" и ");
      lines.push("Глагол <b>" + escapeHtml(verb) + "</b> вписан дважды (пропуски " + nums +
        "). В рамке каждый глагол нужен только один раз — вероятно, в одном из пропусков нужен другой.");
    });
    warnBox.innerHTML = lines.length ? '<div class="notice warn">' + lines.join("<br>") + "</div>" : "";
  }

  function check() {
    if (checked) return;
    const typed = answers();
    const empty = typed.filter(function (x) { return !x.trim(); }).length;
    if (empty > 0 && !warnedEmpty) {
      warnedEmpty = true;
      feedback.innerHTML = '<div class="notice warn">Не заполнено пропусков: ' + empty +
        ". Они будут засчитаны как ошибки. Нажмите «Проверить всё» ещё раз, чтобы проверить как есть.</div>";
      return;
    }
    checked = true;
    inputs.forEach(function (x) { x.disabled = true; });
    container.querySelector(".story-actions").classList.add("hidden");

    results = story.gaps.map(function (g, i) {
      const answer = typed[i].trim();
      return {
        n: g.n, topic: g.topic, answer: answer,
        correct: answer !== "" && storyAnswerOk(story, g, answer),
        disputed: false
      };
    });
    results.forEach(function (r, i) {
      const wrap = inputs[i].parentNode;
      wrap.classList.add(r.correct ? "correct" : "incorrect");
    });
    showFeedback();
  }

  function showFeedback() {
    const right = results.filter(function (r) { return r.correct; }).length;
    let html = '<div class="notice ' + (right === results.length ? "good" : "bad") + '"><b>Верно: ' +
      right + " из " + results.length + ".</b></div>";
    html += '<div class="story-review">' + story.gaps.map(function (g, i) {
      const r = results[i];
      let line = '<div class="story-gap-result ' + (r.correct ? "ok" : "bad") + '"><b>(' + g.n + ")</b> ";
      if (r.correct) {
        line += '<span class="right">' + escapeHtml(r.disputed ? r.answer : g.answers[0]) + "</span>";
        if (r.disputed) line += ' <span class="muted small">(принято как ваш вариант; ключ на сайте: ' + escapeHtml(g.answers[0]) + ")</span>";
        else if (normalizeAnswer(r.answer) !== normalizeAnswer(g.answers[0])) line += ' <span class="muted small">(также можно: ' + escapeHtml(g.answers[0]) + ")</span>";
      } else {
        line += (r.answer ? '<span class="wrong">' + escapeHtml(r.answer) + "</span> → " : '<span class="muted">пусто</span> → ') +
          '<span class="right">' + escapeHtml(g.answers[0]) + "</span>";
        if (r.answer && isNearMiss(r.answer, g.answers)) line += ' <span class="muted small">— очень близко, сравните по буквам.</span>';
      }
      line += '<div class="small muted">' + richText(g.explain) + "</div>";
      if (!r.correct && r.answer) {
        line += '<button class="btn btn-small dispute-btn" data-i="' + i + '" title="Если вы уверены, что ваш вариант тоже правильный">Мой ответ тоже верный</button>';
      }
      return line + "</div>";
    }).join("") + "</div>";
    html += '<div class="btn-row"><button class="btn btn-primary story-done-btn">Дальше</button></div>';
    feedback.innerHTML = html;

    feedback.querySelectorAll(".dispute-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const i = Number(btn.dataset.i);
        results[i].correct = true;
        results[i].disputed = true;
        inputs[i].parentNode.classList.remove("incorrect");
        inputs[i].parentNode.classList.add("correct");
        showFeedback();
      });
    });
    const done = feedback.querySelector(".story-done-btn");
    done.addEventListener("click", function () { if (opts.onDone) opts.onDone(results); });
    done.focus({ preventScroll: true });
  }
}

// Записать результаты рассказа: приоритеты тем, спорные ответы, историю и активность.
// results — то, что вернул onDone у renderStory.
function applyStoryResults(progress, story, results) {
  const today = todayStr();
  let correct = 0;
  results.forEach(function (r) {
    if (r.disputed) {
      // Спорный ответ приоритет темы не меняет — только сохраняется в список спорных
      progress.disputed.push({ kind: "exercise", id: story.id + "#" + r.n, answer: r.answer, date: today });
    } else {
      applyAnswerToTopic(getTopicStats(progress, r.topic), r.correct);
    }
    if (r.correct) correct += 1;
  });
  const prev = progress.stories[story.id];
  progress.stories[story.id] = {
    lastSeen: today,
    times: (prev ? prev.times : 0) + 1,
    correct: correct,
    total: results.length
  };
  recordActivity(progress, { exercises: results.length, correct: correct });
}
