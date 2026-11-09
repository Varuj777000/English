// =====================================================================
// writing.js — задания «Письмо по шаблону» (writing.html) и список
// типичных ошибок, которые сайт подсвечивает в вашем тексте.
//
// Формат задания (DATA.writing):
//   id        — "wr-<уровень>-<слово>", уникальный, потом не менять (по нему прогресс)
//   level     — A1…C1
//   title     — название по-русски
//   prompt    — что именно написать (по-русски, 1–2 предложения)
//   minWords / maxWords — желаемый объём в словах
//   topics    — id тем из data/topics.js, которые это письмо тренирует
//   steps     — план: [{ title, hint }] — абзацы/части письма по порядку
//   phrases   — полезные фразы: [{ en, ru }] (по клику вставляются в текст)
//   checks    — автопроверки: [{ text, pattern, min?, forbid? }]
//       text    — что проверяется (по-русски, показывается галочкой)
//       pattern — регулярное выражение (строка), ищется без учёта регистра
//       min     — сколько совпадений нужно (по умолчанию 1)
//       forbid  — true: проверка пройдена, если совпадений НЕТ
//
// Формат DATA.writingPitfalls — ловушки (подсказки «проверь», не приговор:
// это эвристика и она может ошибаться):
//   { id, pattern, flags?, tip }   flags "" = учитывать регистр, по умолчанию "i"
// Список составлен из реальных повторяющихся ошибок ученика (journal.md).
// =====================================================================

DATA.writing.push(

  // ---------- A2 ----------
  { id: "wr-a2-plans", level: "A2", title: "Письмо другу: планы на выходные",
    prompt: "Напишите другу, что вы делаете в эти выходные, и пригласите его присоединиться.",
    minWords: 50, maxWords: 90, topics: ["future-going-to", "present-continuous"],
    steps: [
      { title: "Приветствие", hint: "Поздоровайтесь и спросите, как дела." },
      { title: "Суббота", hint: "Что вы уже решили и ждёте: Present Continuous (I'm meeting…)." },
      { title: "Воскресенье", hint: "Что вы собираетесь сделать: be going to + глагол." },
      { title: "Приглашение и прощание", hint: "Предложите присоединиться и попросите ответить." }
    ],
    phrases: [
      { en: "Hi Alex, how are you?", ru: "Привет, Алекс, как дела?" },
      { en: "On Saturday I'm meeting my friends.", ru: "В субботу я встречаюсь с друзьями." },
      { en: "On Sunday I'm going to stay at home.", ru: "В воскресенье я собираюсь остаться дома." },
      { en: "Would you like to join us?", ru: "Хочешь присоединиться к нам?" },
      { en: "Let me know!", ru: "Дай знать!" },
      { en: "See you soon!", ru: "До скорой встречи!" }
    ],
    checks: [
      { text: "Есть планы с going to", pattern: "\\bgoing to \\w+" },
      { text: "Есть Present Continuous для договорённости (I'm meeting, we're going)", pattern: "\\b(i'm|i am|we're|we are|he's|she's|they're|you're) \\w+ing\\b" },
      { text: "Назван день или время (Saturday, weekend, evening…)", pattern: "\\b(saturday|sunday|friday|weekend|morning|afternoon|evening|tomorrow)\\b" },
      { text: "Есть приглашение (Would you like / Let's / Do you want)", pattern: "would you like|do you want|let's|why don't we" }
    ] },

  { id: "wr-a2-routine", level: "A2", title: "Мой обычный день",
    prompt: "Расскажите, как обычно проходит ваш день: утро, работа или учёба, вечер.",
    minWords: 60, maxWords: 100, topics: ["present-simple", "adverbs-frequency", "prepositions-time"],
    steps: [
      { title: "Утро", hint: "Когда вы встаёте и что делаете до выхода из дома." },
      { title: "Работа или учёба", hint: "Где и когда, чем занимаетесь." },
      { title: "Вечер", hint: "Чем заканчивается день." },
      { title: "Выходные", hint: "Чем они отличаются." }
    ],
    phrases: [
      { en: "I usually get up at seven.", ru: "Обычно я встаю в семь." },
      { en: "After that I have breakfast.", ru: "После этого я завтракаю." },
      { en: "I never work on Sundays.", ru: "Я никогда не работаю по воскресеньям." },
      { en: "In the evening I often watch films.", ru: "Вечером я часто смотрю фильмы." },
      { en: "At the weekend I sometimes go out with friends.", ru: "В выходные я иногда гуляю с друзьями." }
    ],
    checks: [
      { text: "Есть наречия частоты (usually, often, never…)", pattern: "\\b(always|usually|often|sometimes|never|rarely)\\b", min: 2 },
      { text: "Есть время с at (at seven, at the weekend…)", pattern: "\\bat (\\d|noon|night|midnight|the weekend|weekends)" },
      { text: "Есть слова последовательности (then, after that, before…)", pattern: "\\b(then|after that|after|before|later|finally)\\b" },
      { text: "Нет «am/is/are + голый глагол» (are study, is starts)", pattern: "\\b(am|is|are) (studies|study|plays?|reads?|writes?|eats?|watch(?:es)?|learns?|starts?|lives?|goes)\\b", forbid: true }
    ] },

  { id: "wr-a2-last-weekend", level: "A2", title: "Что я делал в выходные",
    prompt: "Расскажите, как вы провели прошлые выходные или отпуск.",
    minWords: 60, maxWords: 100, topics: ["past-simple", "irregular-verbs"],
    steps: [
      { title: "Где и с кем", hint: "Коротко: что за выходные." },
      { title: "Что делали", hint: "3–4 действия по порядку, Past Simple." },
      { title: "Что не получилось", hint: "Хотя бы одно отрицание: didn't + V1." },
      { title: "Впечатление", hint: "Как вам понравилось." }
    ],
    phrases: [
      { en: "Last weekend I went to…", ru: "В прошлые выходные я ездил в…" },
      { en: "We had a great time.", ru: "Мы отлично провели время." },
      { en: "I didn't have enough time to…", ru: "У меня не хватило времени на…" },
      { en: "Then we ate dinner in a small café.", ru: "Потом мы поужинали в маленьком кафе." },
      { en: "It was really fun.", ru: "Было очень весело." }
    ],
    checks: [
      { text: "Не меньше 3 глаголов в прошедшем (went, saw, played…)", pattern: "\\b(went|saw|met|ate|had|bought|took|made|came|got|gave|spent|played|visited|watched|walked|stayed|cooked|talked|enjoyed)\\b", min: 3 },
      { text: "Есть отрицание didn't + глагол", pattern: "\\bdidn't \\w+|\\bdid not \\w+" },
      { text: "Есть время (yesterday, last…, on Saturday)", pattern: "\\b(yesterday|last (week|weekend|summer|night|month)|on (saturday|sunday|friday))\\b" },
      { text: "Есть связки (then, after that, but, and then)", pattern: "\\b(then|after that|but|so|because)\\b" }
    ] },

  { id: "wr-a2-place", level: "A2", title: "Моё любимое место",
    prompt: "Опишите любимое место: магазин, кафе, парк или город. Что там есть и почему оно вам нравится.",
    minWords: 60, maxWords: 100, topics: ["there-is-are", "comparatives-superlatives"],
    steps: [
      { title: "Что это за место", hint: "Название, где находится." },
      { title: "Что там есть", hint: "There is / There are + предметы." },
      { title: "Чем лучше других", hint: "Сравнение: better than, the best." },
      { title: "Почему нравится", hint: "I like it because…" }
    ],
    phrases: [
      { en: "My favourite place is…", ru: "Моё любимое место —…" },
      { en: "There is a big park near it.", ru: "Рядом есть большой парк." },
      { en: "There are a lot of interesting shops.", ru: "Там много интересных магазинов." },
      { en: "It is cheaper than other shops.", ru: "Там дешевле, чем в других магазинах." },
      { en: "I like it because it is quiet.", ru: "Мне нравится, потому что там тихо." }
    ],
    checks: [
      { text: "Есть There is / There are", pattern: "\\bthere (is|are)\\b" },
      { text: "Есть сравнение (better than, cheaper, the best…)", pattern: "\\b(than|the (most|best|biggest|nicest|cheapest))\\b|\\w+er than" },
      { text: "Есть причина с because", pattern: "\\bbecause\\b" },
      { text: "Есть выражение мнения (I like / I love / I enjoy)", pattern: "\\bi (really )?(like|love|enjoy|prefer)\\b" }
    ] },

  { id: "wr-a2-invite", level: "A2", title: "Сообщение-приглашение",
    prompt: "Напишите короткое сообщение с приглашением на встречу: когда, где и что вы будете делать.",
    minWords: 30, maxWords: 60, topics: ["prepositions-time-place", "future-will"],
    steps: [
      { title: "Приглашение", hint: "Кого, куда, на что." },
      { title: "Когда и где", hint: "on + день / at + время / at + место." },
      { title: "Просьба ответить", hint: "Спросите, придёт ли человек." }
    ],
    phrases: [
      { en: "I'm having a small party on Friday.", ru: "В пятницу я устраиваю небольшую вечеринку." },
      { en: "It starts at 7 pm at my flat.", ru: "Она начнётся в 7 вечера у меня дома." },
      { en: "Are you free on Saturday?", ru: "Ты свободен в субботу?" },
      { en: "Please let me know if you can come.", ru: "Дай знать, сможешь ли прийти." }
    ],
    checks: [
      { text: "Указан день с on (on Friday, on 5 May)", pattern: "\\bon (monday|tuesday|wednesday|thursday|friday|saturday|sunday|\\d)" },
      { text: "Указано время с at (at 7 pm)", pattern: "\\bat \\d" },
      { text: "Есть вопрос или просьба ответить", pattern: "\\?|let me know|please" }
    ] },

  // ---------- B1 ----------
  { id: "wr-b1-complaint", level: "B1", title: "Письмо в магазин: заказ пришёл с браком",
    prompt: "Напишите вежливое официальное письмо: вы заказали товар, он пришёл повреждённым, вы хотите возврат или замену.",
    minWords: 90, maxWords: 130, topics: ["past-simple", "linking-words"],
    steps: [
      { title: "Обращение и цель", hint: "Dear Sir or Madam, I am writing to complain about…" },
      { title: "Что случилось", hint: "Когда заказали, когда пришло, что не так — Past Simple." },
      { title: "Чего вы хотите", hint: "Возврат денег или замена, вежливо." },
      { title: "Завершение", hint: "Формальное прощание и подпись." }
    ],
    phrases: [
      { en: "Dear Sir or Madam,", ru: "Уважаемые господа," },
      { en: "I am writing to complain about…", ru: "Я пишу, чтобы пожаловаться на…" },
      { en: "I ordered… on 5 May, but it arrived broken.", ru: "Я заказал… 5 мая, но товар пришёл сломанным." },
      { en: "I would like a refund or a replacement.", ru: "Я хотел бы получить возврат денег или замену." },
      { en: "I look forward to hearing from you.", ru: "Жду вашего ответа." },
      { en: "Yours faithfully,", ru: "С уважением," }
    ],
    checks: [
      { text: "Официальное обращение (Dear Sir or Madam / Dear Mr…)", pattern: "\\bdear (sir|madam|mr|ms|mrs)\\b" },
      { text: "Есть «I am writing to…»", pattern: "\\bi am writing (to|about)\\b" },
      { text: "Рассказ о случившемся в Past Simple (ordered, arrived, was…)", pattern: "\\b(ordered|arrived|received|was|were|broke|opened|checked|paid)\\b", min: 3 },
      { text: "Вежливая просьба (would like / please / I expect)", pattern: "\\bwould like\\b|\\bplease\\b|\\bi expect\\b" },
      { text: "Формальное прощание (Yours faithfully / sincerely / Kind regards)", pattern: "yours (faithfully|sincerely)|kind regards|best regards" },
      { text: "Без сокращений (не don't, I'm, it's — в официальном письме пишут полностью)", pattern: "\\b\\w+n't\\b|\\bi'm\\b|\\bit's\\b|\\bi've\\b|\\bwe're\\b", forbid: true }
    ] },

  { id: "wr-b1-review", level: "B1", title: "Отзыв о фильме или игре",
    prompt: "Напишите отзыв о фильме, сериале или игре: о чём, что понравилось, что нет и кому порекомендуете.",
    minWords: 100, maxWords: 150, topics: ["linking-words", "relative-clauses"],
    steps: [
      { title: "Что это", hint: "Название, жанр, о чём — Present Simple." },
      { title: "Что понравилось", hint: "Конкретные причины." },
      { title: "Что не понравилось", hint: "Через although / however / but." },
      { title: "Рекомендация", hint: "Кому и почему." }
    ],
    phrases: [
      { en: "It is a science fiction game which tells the story of…", ru: "Это научно-фантастическая игра, рассказывающая историю…" },
      { en: "What I liked most was the music.", ru: "Больше всего мне понравилась музыка." },
      { en: "Although the graphics are great, the story is weak.", ru: "Хотя графика отличная, сюжет слабый." },
      { en: "However, the ending was disappointing.", ru: "Однако концовка разочаровала." },
      { en: "I would recommend it to anyone who likes…", ru: "Я бы порекомендовал это всем, кто любит…" }
    ],
    checks: [
      { text: "Есть уступка (although / however / despite / while)", pattern: "\\b(although|however|despite|while|even though)\\b" },
      { text: "Есть мнение (I think / in my opinion / I would recommend)", pattern: "\\bi (think|believe|would recommend|recommend)\\b|in my opinion" },
      { text: "Есть придаточное с which / who / that", pattern: "\\b(which|who|that) \\w+" },
      { text: "Есть оценка (out of 10, stars, rating)", pattern: "out of (10|five|5)|\\d/10|stars?|rating" }
    ] },

  { id: "wr-b1-dream-trip", level: "B1", title: "Путешествие мечты",
    prompt: "Напишите, куда бы вы поехали, если бы у вас было много денег и времени, и что бы вы там делали.",
    minWords: 90, maxWords: 140, topics: ["second-conditional"],
    steps: [
      { title: "Мечта", hint: "If I had a lot of money, I would…" },
      { title: "Что бы вы увидели", hint: "2–3 места или занятия с would." },
      { title: "С кем и как", hint: "Транспорт, жильё, компания." },
      { title: "Почему именно это", hint: "Причина с because / so that." }
    ],
    phrases: [
      { en: "If I had a lot of money, I would travel to Japan.", ru: "Если бы у меня было много денег, я бы поехал в Японию." },
      { en: "If I could choose, I would stay in a small hotel.", ru: "Если бы мог выбирать, я бы остановился в маленьком отеле." },
      { en: "I would try the local food.", ru: "Я бы попробовал местную еду." },
      { en: "I would love to see…", ru: "Мне бы очень хотелось увидеть…" },
      { en: "That's why this trip is my dream.", ru: "Поэтому эта поездка — моя мечта." }
    ],
    checks: [
      { text: "Есть If + Past Simple (If I had / were / won / could…)", pattern: "\\bif i (had|were|was|won|could|went|lived|knew|spoke)\\b|\\bif we (had|were|won|could)\\b" },
      { text: "Не меньше двух «would + глагол»", pattern: "\\bwould (\\w+)", min: 2 },
      { text: "Нет «if + would» (после if будущего и would не нужно)", pattern: "\\bif i would\\b|\\bif we would\\b", forbid: true },
      { text: "Есть причина (because / so that / in order to)", pattern: "\\bbecause\\b|\\bso that\\b|\\bin order to\\b" }
    ] },

  { id: "wr-b1-progress", level: "B1", title: "Чему я научился за последнее время",
    prompt: "Расскажите, что вы изучаете или чему научились за последний год и как долго этим занимаетесь.",
    minWords: 90, maxWords: 140, topics: ["present-perfect-simple-vs-continuous"],
    steps: [
      { title: "Чем вы занимаетесь", hint: "Present Perfect Continuous: I have been learning… for…" },
      { title: "Результаты", hint: "Present Perfect: I have learnt / I have already…" },
      { title: "Трудности", hint: "Что пока не получается: haven't… yet." },
      { title: "Планы", hint: "Что дальше." }
    ],
    phrases: [
      { en: "I have been learning English for two years.", ru: "Я учу английский уже два года." },
      { en: "I have already read three books in English.", ru: "Я уже прочитал три книги на английском." },
      { en: "I haven't mastered the Past Perfect yet.", ru: "Past Perfect у меня пока не получается." },
      { en: "Since January I have been practising every day.", ru: "С января я занимаюсь каждый день." },
      { en: "Next year I'm going to take an exam.", ru: "В следующем году я собираюсь сдать экзамен." }
    ],
    checks: [
      { text: "Есть Present Perfect Continuous (have been learning)", pattern: "\\b(have|has|i've|we've|she's|he's) been \\w+ing\\b" },
      { text: "Есть for или since с периодом", pattern: "\\b(for|since) (\\w+ ){0,2}\\w+" },
      { text: "Есть Present Perfect (I have learnt / already / yet)", pattern: "\\b(i've|i have|we've|we have) (already |just |never |ever )?(\\w+ed|made|done|learnt|learned|seen|read|written|gone|been|met|got|become|begun|taken|known|found)\\b" },
      { text: "Есть already / yet / just", pattern: "\\b(already|yet|just)\\b" }
    ] },

  { id: "wr-b1-story", level: "B1", title: "Случай, который запомнился",
    prompt: "Расскажите историю, которая с вами случилась: что происходило, что случилось неожиданно и чем закончилось.",
    minWords: 100, maxWords: 150, topics: ["past-continuous", "past-perfect"],
    steps: [
      { title: "Обстановка", hint: "Когда и где; что происходило вокруг — Past Continuous." },
      { title: "Что случилось", hint: "Событие: Past Simple, suddenly…" },
      { title: "Что было до этого", hint: "Предыстория в Past Perfect: had + V3." },
      { title: "Чем закончилось", hint: "Развязка и ваши чувства." }
    ],
    phrases: [
      { en: "It was a sunny day and I was walking home.", ru: "Был солнечный день, и я шёл домой." },
      { en: "Suddenly I realised that I had lost my keys.", ru: "Вдруг я понял, что потерял ключи." },
      { en: "While I was waiting, it started to rain.", ru: "Пока я ждал, начался дождь." },
      { en: "By the time he arrived, I had already left.", ru: "К тому времени, как он приехал, я уже ушёл." },
      { en: "In the end everything was fine.", ru: "В итоге всё обошлось." }
    ],
    checks: [
      { text: "Есть Past Continuous (was walking, were waiting)", pattern: "\\b(was|were) \\w+ing\\b" },
      { text: "Есть when / while / as", pattern: "\\b(when|while|as soon as)\\b" },
      { text: "Есть Past Perfect (had lost, had already left)", pattern: "\\bhad (already |just |never )?(\\w+ed|gone|been|seen|done|made|left|forgotten|lost|taken|given|written|eaten|found|met|come)\\b" },
      { text: "Есть слова развития сюжета (suddenly, then, finally, in the end)", pattern: "\\b(suddenly|then|finally|in the end|after that|at first)\\b" }
    ] },

  // ---------- B2 ----------
  { id: "wr-b2-opinion", level: "B2", title: "За и против: удалённая работа",
    prompt: "Напишите эссе: плюсы и минусы удалённой работы и ваш вывод.",
    minWords: 150, maxWords: 220, topics: ["linking-words"],
    steps: [
      { title: "Введение", hint: "Тема и почему она актуальна." },
      { title: "Аргументы «за»", hint: "On the one hand… + 2 довода." },
      { title: "Аргументы «против»", hint: "On the other hand… + 2 довода." },
      { title: "Вывод", hint: "In conclusion… и ваше мнение." }
    ],
    phrases: [
      { en: "More and more people now work from home.", ru: "Всё больше людей сейчас работает из дома." },
      { en: "On the one hand, it saves time and money.", ru: "С одной стороны, это экономит время и деньги." },
      { en: "On the other hand, it can be lonely.", ru: "С другой стороны, это может быть одиноко." },
      { en: "Despite these drawbacks, …", ru: "Несмотря на эти недостатки, …" },
      { en: "In conclusion, I believe that…", ru: "В заключение, я считаю, что…" }
    ],
    checks: [
      { text: "Есть On the one hand", pattern: "on the one hand" },
      { text: "Есть On the other hand / However", pattern: "on the other hand|\\bhowever\\b" },
      { text: "Есть уступка (although / despite / whereas / while)", pattern: "\\b(although|despite|whereas|while|even though)\\b" },
      { text: "Есть осторожное высказывание (may / might / could / tend to)", pattern: "\\b(may|might|could|tend to)\\b" },
      { text: "Есть вывод (In conclusion / To sum up / All in all)", pattern: "in conclusion|to sum up|all in all|overall" }
    ] }
);

// Ловушки: типичные ошибки из журнала ученика. Это ЭВРИСТИКА — сайт лишь
// подсказывает «проверь», окончательное решение за вами.
DATA.writingPitfalls.push(
  { id: "meet-with", pattern: "\\bmeet(s|ing)? with\\b", tip: "meet + кого — без with: I meet my friends." },
  { id: "go-to-shopping", pattern: "\\b(go|goes|going|went) to shopping\\b", tip: "go shopping — без to." },
  { id: "in-night", pattern: "\\bin night\\b", tip: "at night — с at." },
  { id: "been-in", pattern: "\\bbeen in\\b", tip: "Если ездили и вернулись — been to (I have been to Russia)." },
  { id: "in-weekend", pattern: "\\bin the weekends?\\b", tip: "at the weekend(s) — с at." },
  { id: "finish-ing", pattern: "\\bfinish(es|ed|ing)? (study|play|read|write|eat|watch|learn|cook)\\b", tip: "После finish глагол с -ing: finish studying." },
  { id: "every-plural", pattern: "\\bevery (weekends|days|mornings|evenings|nights|years|weeks|months)\\b", tip: "После every — единственное число: every weekend." },
  { id: "did-ed", pattern: "\\bdid(?:n't| not)? (?!need\\b|succeed\\b|feed\\b|speed\\b|proceed\\b|exceed\\b|bleed\\b|breed\\b)\\w+ed\\b", tip: "После did/didn't — глагол в начальной форме: didn't finish, а не didn't finished." },
  { id: "had-v2", pattern: "\\bhad (went|came|saw|ate|took|wrote|gave|got|made)\\b", tip: "После had — третья форма: had gone, had seen." },
  { id: "when-will", pattern: "\\b(when|after|before|if|as soon as) (i|we|you|they|he|she)('ll| will)\\b", tip: "После when/if/after про будущее — Present Simple, не will: When I finish…" },
  { id: "does-ing", pattern: "\\bdoes(?:n't| not)? (?:\\w+ )?(?!(?:nothing|anything|something|everything|morning|evening|bring|sing|spring|string|swing|thing|king|ring|wing)\\b)\\w+ing\\b", tip: "После does/doesn't глагол без -ing и без -s: does she listen." },
  { id: "be-bare-verb", pattern: "\\b(am|is|are) (studies|study|plays?|reads?|writes?|eats?|watch(?:es)?|learns?|starts?|lives?|goes)\\b", tip: "После am/is/are нужно -ing или прилагательное (are studying), помощник один." },
  { id: "am-agree", pattern: "\\bam agree\\b", tip: "I agree — без am." },
  { id: "more-better", pattern: "\\bmore (better|easier|bigger|cheaper|faster|nicer)\\b", tip: "Сравнительная степень одна: better, а не more better." },
  { id: "a-before-vowel", pattern: "\\ba (?!uni|use|one|eur|ski|ewe)[aeio]\\w*", tip: "Перед гласным звуком обычно an: an apple, an hour (проверьте)." },
  { id: "typo-doubling", pattern: "\\b(stoped|droped|footbal|studing|writting|forgoten|begining|runing|swiming|geting|siting|planed|beent|favorte|everi)\\b", tip: "Правописание: удвоение согласной и -e перед -ing/-ed (stopped, studying, writing, forgotten, football)." },
  { id: "lower-i", pattern: "(^|[\\s(])i(?=[\\s',.!?]|$)", flags: "", tip: "Местоимение I всегда пишется с заглавной." },
  { id: "lower-sentence", pattern: "(^|[.!?]\\s+)[a-z]", flags: "", tip: "Предложение начинается с заглавной буквы." },
  { id: "lower-proper", pattern: "\\b(english|russian|monday|tuesday|wednesday|thursday|friday|saturday|sunday|january|february|april|june|july|august|september|october|november|december)\\b", flags: "", tip: "Языки, дни недели и месяцы — с заглавной: English, Friday, June." }
);
