// =====================================================================
// exercises.js — показ упражнений и проверка ответов.
//
// Главная функция: renderExercise(container, exercise, onDone)
//   рисует упражнение, проверяет ответ, показывает результат
//   и по кнопке «Далее» вызывает onDone(result), где
//   result = { correct: true/false, answer: "что ввёл ученик", disputed: true/false }
// =====================================================================

// Подписи к типам упражнений
const EXERCISE_PROMPTS = {
  choice: "Выберите правильный вариант",
  fill: "Вставьте пропущенное слово",
  fix: "Найдите и исправьте ошибку",
  translate: "Переведите на английский",
  listen: "Прослушайте и напишите, что услышали",
  reading: "Ответьте на вопрос по тексту",
  readingListen: "Ответьте на вопрос по диалогу"
};

// Насколько медленнее звучит фраза по кнопке «Помедленнее» на диктанте
// (отдельно от общей настройки скорости в settings — эта кнопка разовая).
const LISTEN_SLOW_RATE = 0.6;

// ---------------------------------------------------------------------
// ПРОВЕРКА ОТВЕТА (для типов fill, fix, translate)
//
// Ответ считается правильным, если после «нормализации» он совпадает
// с одним из вариантов в answers. Нормализация:
//   - регистр букв не важен;
//   - лишние пробелы и знаки препинания (. , ! ? ; : " « ») не важны;
//   - любые апострофы (’ ‘ `) считаются одинаковыми;
//   - сокращения раскрываются: don't = do not, I'm = I am, can't = cannot ...
//   - he's = he is ИЛИ he has, I'd = I would ИЛИ I had (проверяются оба варианта);
//   - числа до 20 можно писать цифрами: 7 = seven.
// ---------------------------------------------------------------------

// Однозначные сокращения (порядок важен: can't и won't — раньше общего правила n't)
const CONTRACTIONS = [
  [/\bcan't\b/g, "cannot"],
  [/\bcan not\b/g, "cannot"],
  [/\bwon't\b/g, "will not"],
  [/\bshan't\b/g, "shall not"],
  [/\b(\w+)n't\b/g, "$1 not"],     // don't → do not, isn't → is not, mustn't → must not
  [/\bi'm\b/g, "i am"],
  [/\b(\w+)'re\b/g, "$1 are"],     // you're → you are
  [/\b(\w+)'ve\b/g, "$1 have"],    // I've → I have
  [/\b(\w+)'ll\b/g, "$1 will"]     // she'll → she will
];

const NUMBER_WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
  "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];

// Привести ответ к единому виду (без вариантов 's / 'd)
function normalizeAnswer(text) {
  let s = String(text).toLowerCase();
  s = s.replace(/[’‘`´]/g, "'");                 // разные апострофы → '
  s = s.replace(/[.,!?;"«»“”()]/g, " ");          // знаки препинания → пробел
  s = s.replace(/:(?!\d)/g, " ");                 // двоеточие (кроме времени 7:30)
  s = s.replace(/\s[-–—]\s/g, " ");               // тире между словами
  s = s.replace(/\s+/g, " ").trim();
  // Числа 0–20 цифрами → словами
  s = s.replace(/\b(\d{1,2})\b/g, function (m, n) {
    const num = Number(n);
    return num <= 20 ? NUMBER_WORDS[num] : m;
  });
  CONTRACTIONS.forEach(function (rule) { s = s.replace(rule[0], rule[1]); });
  return s.replace(/\s+/g, " ").trim();
}

// Все варианты прочтения ответа: he's → [he's, he is, he has]
function answerVariants(text) {
  const words = normalizeAnswer(text).split(" ");
  let variants = [[]];
  words.forEach(function (w) {
    let options = [w];
    let m = w.match(/^(\w+)'s$/);
    if (m && m[1] !== "let") options = [w, m[1] + " is", m[1] + " has"];
    m = w.match(/^(\w+)'d$/);
    if (m) options = [w, m[1] + " would", m[1] + " had"];

    const next = [];
    variants.forEach(function (v) {
      options.forEach(function (o) { next.push(v.concat([o])); });
    });
    variants = next.slice(0, 64); // защита от слишком большого числа вариантов
  });
  return variants.map(function (v) { return v.join(" "); });
}

// Правильный ли ответ? answers — список допустимых ответов.
function isAnswerCorrect(userText, answers) {
  if (!String(userText).trim()) return false;
  const user = answerVariants(userText);
  return answers.some(function (a) {
    const good = answerVariants(a);
    return user.some(function (u) { return good.indexOf(u) !== -1; });
  });
}

// Проверка ответа к упражнению любого текстового типа.
// Для fill ответ подставляется в предложение и сравнивается ЦЕЛОЕ предложение:
// так «I ___ reading» + «'m» = «I'm reading» = «I am reading».
function checkExerciseAnswer(ex, userText) {
  if (ex.type === "fill") {
    return isAnswerCorrect(fillBlank(ex.q, userText), ex.answers.map(function (a) { return fillBlank(ex.q, a); }));
  }
  return isAnswerCorrect(userText, ex.answers);
}

// Подставить текст на место ___
function fillBlank(sentence, text) {
  if (!String(text).trim()) return "";
  return sentence.replace(/_{3,}/, String(text).trim()).replace(/\s+(['’])/g, "$1");
}

// «Почти правильно?» — отличие в 1–2 буквы (скорее всего опечатка).
function isNearMiss(userText, answers) {
  const u = normalizeAnswer(userText);
  if (u.length < 4) return false;
  return answers.some(function (a) {
    return editDistance(u, normalizeAnswer(a)) <= 2;
  });
}

// Расстояние Левенштейна: сколько букв нужно изменить, чтобы получить одно слово из другого.
function editDistance(a, b) {
  const dp = [];
  for (let i = 0; i <= a.length; i++) dp.push([i]);
  for (let j = 1; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }
  return dp[a.length][b.length];
}

// ---------------------------------------------------------------------
// ПОКАЗ УПРАЖНЕНИЯ
// ---------------------------------------------------------------------

function renderExercise(container, ex, onDone) {
  const promptKey = ex.isReading ? (ex.text && ex.text.listen ? "readingListen" : "reading") : ex.type;
  let result = null; // заполняется после проверки

  let html = '<p class="ex-prompt muted small">' + EXERCISE_PROMPTS[promptKey] + "</p>";

  if (ex.type === "listen") {
    // Сам текст фразы (ex.q) нигде не показываем до ответа — это диктант,
    // его можно только слушать. Автоматически озвучиваем один раз при показе
    // карточки (клик по «Начать занятие»/«Далее» перед этим уже дал странице
    // разрешение на звук), а кнопки ниже — для повторного/медленного прослушивания.
    html +=
      '<div class="btn-row listen-controls">' +
        '<button type="button" class="btn btn-primary listen-play-btn">🔁 Повторить</button>' +
        '<button type="button" class="btn listen-slow-btn">🐢 Помедленнее</button>' +
      "</div>" +
      '<input type="text" class="answer-input" placeholder="напишите то, что услышали"' +
      ' autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false">' +
      '<div class="btn-row"><button class="btn btn-primary check-btn">Проверить</button>' +
      '<button class="btn dont-know-btn">Не знаю</button></div>';
  } else {
    // Кнопку озвучки на сам вопрос ставим только когда q — английский текст
    // (у translate q — русская инструкция; у некоторых choice-заданий q — тоже
    // чисто русская инструкция вроде «Выберите правильное предложение», а
    // английский текст целиком в options — тогда озвучка ставится на варианты, см. ниже)
    const qHasEnglish = /[a-z]/i.test(ex.q);
    const questionSpeak = (ex.type !== "translate" && qHasEnglish) ? speakButtonHtml(ex.q) : "";
    html += '<p class="question">' + questionHtml(ex.q) + questionSpeak + "</p>";
    if (ex.hint) html += '<p class="muted small">Подсказка: ' + escapeHtml(ex.hint) + "</p>";

    if (ex.type === "choice") {
      const options = shuffle(ex.options);
      // Если в самом задании нет английского текста, варианты — единственное
      // место, где есть что озвучивать
      const optionSpeak = !qHasEnglish;
      html += '<div class="options">' + options.map(function (opt, i) {
        const btn = '<button class="option" data-value="' + escapeHtml(opt) + '"><span class="option-key">' + (i + 1) + "</span>" + escapeHtml(opt) + "</button>";
        return optionSpeak ? '<div class="option-row">' + btn + speakButtonHtml(opt) + "</div>" : btn;
      }).join("") + "</div>";
    } else {
      // Для «исправь ошибку» поле сразу заполнено неправильным предложением — его удобно править
      const start = ex.type === "fix" ? ex.q : "";
      const placeholder = ex.type === "fill" ? "пропущенное слово" : "ваш ответ на английском";
      html +=
        '<input type="text" class="answer-input" value="' + escapeHtml(start) + '" placeholder="' + placeholder + '"' +
        ' autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false">' +
        '<div class="btn-row"><button class="btn btn-primary check-btn">Проверить</button>' +
        '<button class="btn dont-know-btn">Не знаю</button></div>';
    }
  }
  html += '<div class="feedback"></div>';
  container.innerHTML = html;

  const feedback = container.querySelector(".feedback");

  // ----- Диктант: озвучка -----
  if (ex.type === "listen") {
    container.querySelector(".listen-play-btn").addEventListener("click", function () { speak(ex.q); });
    container.querySelector(".listen-slow-btn").addEventListener("click", function () { speak(ex.q, LISTEN_SLOW_RATE); });
    speak(ex.q); // один раз проговариваем сразу, когда карточка появилась
  }

  // ----- Выбор варианта -----
  if (ex.type === "choice") {
    container.querySelectorAll(".option").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (result) return; // уже ответили
        const chosen = btn.dataset.value;
        const correct = chosen === ex.answer;
        container.querySelectorAll(".option").forEach(function (b) {
          b.disabled = true;
          if (b.dataset.value === ex.answer) b.classList.add("correct");
          else if (b === btn) b.classList.add("incorrect");
        });
        finish(correct, chosen);
      });
    });
  } else {
    // ----- Ввод текста -----
    const input = container.querySelector(".answer-input");
    const check = function () {
      if (result) return;
      const value = input.value;
      if (!value.trim()) { input.focus(); return; }
      if (ex.type === "fix" && normalizeAnswer(value) === normalizeAnswer(ex.q)) {
        feedback.innerHTML = '<p class="muted small">Вы ничего не изменили. Найдите ошибку и исправьте её.</p>';
        return;
      }
      input.disabled = true;
      finish(checkExerciseAnswer(ex, value), value);
    };
    container.querySelector(".check-btn").addEventListener("click", check);
    container.querySelector(".dont-know-btn").addEventListener("click", function () {
      if (result) return;
      input.disabled = true;
      finish(false, "");
    });
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") { e.preventDefault(); check(); }
    });
    // На телефоне клавиатура может закрыть поле — фокус ставим без прокрутки
    setTimeout(function () { input.focus({ preventScroll: true }); }, 50);
  }

  // ----- Результат -----
  function finish(correct, answer) {
    result = { correct: correct, answer: answer, disputed: false };
    // :not(.listen-controls) — у диктанта первый .btn-row это кнопки «Повторить»/
    // «Помедленнее», их после ответа скрывать не нужно, прятать нужно только
    // кнопки «Проверить»/«Не знаю»
    const buttons = container.querySelector(".btn-row:not(.listen-controls)");
    if (buttons) buttons.classList.add("hidden");

    // Что озвучивать кнопкой 🔊 в фидбеке: у fill — целое предложение с
    // подставленным правильным ответом (___ → ответ), не только само слово
    const spoken = ex.type === "fill" ? fillBlank(ex.q, ex.answers[0]) : (ex.type === "choice" ? ex.answer : ex.answers[0]);

    let fb = "";
    if (correct) {
      fb += '<div class="notice good"><b>Верно!</b>' + speakButtonHtml(spoken);
      if (ex.type === "listen") {
        // У диктанта текст фразы нигде не был виден — показываем его и сейчас, при верном ответе тоже
        fb += '<br><span class="small">' + escapeHtml(ex.answers[0]) + "</span>";
      } else if (ex.type !== "choice" && normalizeAnswer(answer) !== normalizeAnswer(ex.answers[0])) {
        // Если правильных вариантов несколько, покажем основной
        fb += '<br><span class="small">Также можно: ' + escapeHtml(ex.answers[0]) + "</span>";
      }
      if (ex.type === "listen" && ex.ru) fb += '<br><span class="small muted">' + escapeHtml(ex.ru) + "</span>";
    } else {
      fb += '<div class="notice bad"><b>' + (answer ? "Неверно." : "Правильный ответ:") + "</b>";
      if (answer && ex.type !== "choice") {
        fb += '<br><span class="small">Ваш ответ: <span class="wrong">' + escapeHtml(answer) + "</span></span>";
        if (isNearMiss(answer, ex.answers)) fb += '<br><span class="small">Очень близко — сравните внимательно по буквам.</span>';
      }
      const right = ex.type === "choice" ? ex.answer : ex.answers[0];
      fb += '<br><span class="small">Правильно: <span class="right">' + escapeHtml(right) + "</span>" + speakButtonHtml(spoken) + "</span>";
      if (ex.type === "listen" && ex.ru) fb += '<br><span class="small muted">' + escapeHtml(ex.ru) + "</span>";
    }
    if (ex.explain) fb += '<p class="small" style="margin:8px 0 0">' + richText(ex.explain) + "</p>";
    fb += "</div>";

    fb += '<div class="btn-row"><button class="btn btn-primary next-btn">Далее</button>';
    if (!correct && answer && ex.type !== "choice") {
      fb += '<button class="btn dispute-btn" title="Если вы уверены, что ваш вариант тоже правильный">Мой ответ тоже верный</button>';
    }
    fb += "</div>";
    feedback.innerHTML = fb;

    const next = feedback.querySelector(".next-btn");
    next.addEventListener("click", function () { onDone(result); });
    next.focus({ preventScroll: true });

    const dispute = feedback.querySelector(".dispute-btn");
    if (dispute) {
      dispute.addEventListener("click", function () {
        result.correct = true;
        result.disputed = true;
        onDone(result);
      });
    }
  }
}
