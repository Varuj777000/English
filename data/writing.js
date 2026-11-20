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
    ] },

  // ---------- B1 (добавлено позже) ----------
  { id: "wr-b1-informal-email", level: "B1", title: "Письмо другу о поездке",
    prompt: "Напишите другу о недавней поездке или отпуске: где были, что понравилось, что нет, и задайте ему 2–3 вопроса.",
    minWords: 100, maxWords: 150, topics: ["past-simple", "indirect-questions", "present-perfect"],
    steps: [
      { title: "Приветствие и повод", hint: "Поздоровайтесь, поблагодарите за сообщение и скажите, что хотите рассказать о поездке." },
      { title: "Где были и что делали", hint: "3–4 действия по порядку, Past Simple: we stayed, we visited, we ate." },
      { title: "Что понравилось и что нет", hint: "Хотя бы одно «не понравилось» с because; яркие прилагательные: crowded, delicious, amazing." },
      { title: "Вопросы другу", hint: "2–3 вопроса: Have you ever been…? Do you know when…? Could you tell me if…?" },
      { title: "Прощание", hint: "Write back soon! / Take care, / Love, и ваше имя." }
    ],
    phrases: [
      { en: "Hi Anna, thanks for your message!", ru: "Привет, Анна, спасибо за сообщение!" },
      { en: "I'm writing to tell you about my trip to Italy.", ru: "Пишу, чтобы рассказать о моей поездке в Италию." },
      { en: "We stayed in a small hotel near the beach.", ru: "Мы жили в небольшом отеле у пляжа." },
      { en: "The weather was great, but the city was very crowded.", ru: "Погода была отличная, но в городе было очень людно." },
      { en: "The best thing was the food.", ru: "Лучшее — это еда." },
      { en: "I didn't like the museum because it was too expensive.", ru: "Музей мне не понравился, потому что был слишком дорогим." },
      { en: "I took lots of photos.", ru: "Я сделал много фотографий." },
      { en: "Have you ever been to Italy?", ru: "Ты когда-нибудь был в Италии?" },
      { en: "Do you know when you are free next month?", ru: "Ты не знаешь, когда ты свободен в следующем месяце?" },
      { en: "Could you tell me if you want to come with me next time?", ru: "Не скажешь, захочешь ли ты поехать со мной в следующий раз?" },
      { en: "Write back soon!", ru: "Скорее пиши в ответ!" },
      { en: "Take care,", ru: "Береги себя," }
    ],
    checks: [
      { text: "Неформальное приветствие в начале (Hi / Hello / Hey / Dear + имя)", pattern: "^\\s*(hi|hello|hey|dear)\\b" },
      { text: "Не меньше 3 глаголов в прошедшем (went, saw, stayed, was…)", pattern: "\\b(went|saw|stayed|visited|ate|had|took|bought|met|swam|walked|was|were|loved|enjoyed|liked|travelled|traveled|spent|flew|drove|got|made)\\b", min: 3 },
      { text: "Есть хотя бы 2 вопроса другу (знак ?)", pattern: "\\?", min: 2 },
      { text: "Есть 2 оценочных прилагательных (great, amazing, crowded…)", pattern: "\\b(great|amazing|beautiful|wonderful|delicious|boring|crowded|expensive|cheap|awful|fantastic|lovely|tired|interesting)\\b", min: 2 },
      { text: "Есть дружеское прощание (Write back / Take care / Love, / See you)", pattern: "\\b(write back|take care|best wishes|see you|speak soon|hope to hear from you|let me know)\\b|\\blove," }
    ] },

  { id: "wr-b1-experience", level: "B1", title: "Мой опыт: что я уже делал",
    prompt: "Расскажите об интересном опыте (путешествие, игра, работа, хобби): что вы уже делали в жизни и об одном случае — подробнее.",
    minWords: 100, maxWords: 150, topics: ["present-perfect", "past-simple", "present-perfect-simple-vs-continuous"],
    steps: [
      { title: "Общий опыт", hint: "Present Perfect: I have visited…, I have never tried… — без точного времени." },
      { title: "Один случай", hint: "Переходим в Past Simple: когда это было (last summer, two years ago), где, с кем." },
      { title: "Чувства и итог", hint: "Что вы почувствовали и чему научились: I was nervous, but…; I have learned that…" },
      { title: "Планы", hint: "Что хотели бы сделать ещё: I would love to… / I haven't … yet." }
    ],
    phrases: [
      { en: "I have been to Turkey three times.", ru: "Я был в Турции три раза." },
      { en: "I have never tried skiing, but I have already played hockey.", ru: "Я никогда не катался на лыжах, но уже играл в хоккей." },
      { en: "I haven't visited Spain yet.", ru: "Я ещё не был в Испании." },
      { en: "Last summer I went to the mountains with my friends.", ru: "Прошлым летом я ездил с друзьями в горы." },
      { en: "It was an unforgettable experience.", ru: "Это был незабываемый опыт." },
      { en: "I was nervous at first, but then I felt great.", ru: "Сначала я нервничал, но потом почувствовал себя отлично." },
      { en: "Two years ago I started a new job.", ru: "Два года назад я начал новую работу." },
      { en: "Since then I have learned a lot.", ru: "С тех пор я многому научился." },
      { en: "I have learned that it is never too late to start.", ru: "Я понял, что начать никогда не поздно." },
      { en: "This experience taught me to be more patient.", ru: "Этот опыт научил меня быть терпеливее." },
      { en: "I would love to do it again.", ru: "Я бы с удовольствием повторил это." },
      { en: "I have just booked another trip.", ru: "Я только что забронировал ещё одну поездку." }
    ],
    checks: [
      { text: "Есть Present Perfect для опыта (I have been / visited / tried…) — минимум 2", pattern: "\\b(i have|i['’]ve|we have|we['’]ve) (been|visited|tried|seen|done|met|worked|lived|never|already|learned|learnt|played|travelled|traveled|had|taken|eaten|flown|made)\\b", min: 2 },
      { text: "Есть слово времени для случая (last summer, ago, when I was…)", pattern: "\\b(last (year|summer|winter|week|month)|in \\d{4}|when i was|years? ago|months? ago|one day|the first time)\\b" },
      { text: "Не меньше 3 глаголов в Past Simple для рассказа (went, felt, decided…)", pattern: "\\b(went|saw|met|tried|felt|decided|started|was|were|had|took|ate|learned|learnt|visited|played|made|got|bought|enjoyed|loved)\\b", min: 3 },
      { text: "Есть never / ever / already / yet / just", pattern: "\\b(never|ever|already|yet|just|so far)\\b" },
      { text: "Нет «have went / have saw / have ate» (после have нужна третья форма)", pattern: "\\b(have|has) (went|saw|ate|took|came|did|gave|wrote|drove|flew|ran)\\b", forbid: true }
    ] },

  // ---------- B2 (добавлено позже) ----------
  { id: "wr-b2-formal-email", level: "B2", title: "Формальное письмо: жалоба или запрос",
    prompt: "Вы заказали товар или онлайн-курс для работы, но получили не то, что ожидали. Напишите формальное письмо в компанию: что произошло и чего вы ждёте.",
    minWords: 180, maxWords: 240, topics: ["passive-simple", "unless-as-long-as", "linking-words"],
    steps: [
      { title: "Обращение и цель", hint: "Dear Sir or Madam, / Dear Mr Brown, и сразу: I am writing to complain about… / to enquire about…" },
      { title: "Что произошло", hint: "Факты по порядку: Past Simple и Passive (was delivered, was damaged). Без эмоций, только даты и детали." },
      { title: "Что вы ожидаете", hint: "Вежливо, но чётко: I would be grateful if you could… / I would like to request…" },
      { title: "Условие и срок", hint: "Unless… / If the problem is not solved within…, I will… — что будет, если ничего не изменится." },
      { title: "Завершение", hint: "I look forward to hearing from you. Yours faithfully, (если имени нет) или Yours sincerely, (если есть)." }
    ],
    phrases: [
      { en: "Dear Sir or Madam,", ru: "Уважаемые господа," },
      { en: "I am writing to complain about the laptop I ordered on your website.", ru: "Пишу, чтобы пожаловаться на ноутбук, заказанный на вашем сайте." },
      { en: "I am writing to enquire about the status of my order.", ru: "Пишу, чтобы узнать статус моего заказа." },
      { en: "Unfortunately, the item was delivered damaged.", ru: "К сожалению, товар был доставлен повреждённым." },
      { en: "The product was not as described on the website.", ru: "Товар не соответствовал описанию на сайте." },
      { en: "I would be grateful if you could replace it as soon as possible.", ru: "Был бы признателен, если бы вы как можно скорее заменили его." },
      { en: "I would like to request a full refund.", ru: "Прошу вернуть полную стоимость." },
      { en: "Unless the problem is solved within seven days, I will contact my bank.", ru: "Если проблема не будет решена в течение семи дней, я обращусь в банк." },
      { en: "Please find attached a copy of the receipt.", ru: "Во вложении копия чека." },
      { en: "Thank you for your attention to this matter.", ru: "Благодарю за внимание к этому вопросу." },
      { en: "I look forward to hearing from you.", ru: "Жду вашего ответа." },
      { en: "Yours faithfully,", ru: "С уважением," }
    ],
    checks: [
      { text: "Формальное обращение (Dear Sir or Madam / Dear Mr …)", pattern: "\\bdear (sir|madam|mr|mrs|ms|miss|dr)\\b" },
      { text: "Названа цель письма (I am writing to / regarding…)", pattern: "\\bi am writing (to|regarding|about|in connection with)\\b" },
      { text: "Есть вежливая просьба (I would be grateful if / I would like to / Could you…)", pattern: "\\bi would (be (grateful|pleased|obliged)|like to|appreciate)\\b|\\b(could|would) you (please )?\\w+" },
      { text: "Нет сокращений (I'm, don't, it's…) — в формальном письме они не нужны", pattern: "\\b(i['’](m|ve|d|ll)|(it|that|there|we|they|you|he|she)['’](s|re|ve|ll|d)|(can|won)['’]t|(do|does|did|could|would|should|is|are|was|were|have|has|had)n['’]t)\\b", forbid: true },
      { text: "Формальное завершение (Yours faithfully / sincerely / Kind regards)", pattern: "\\byours (faithfully|sincerely)\\b|\\bkind regards\\b" }
    ] },

  { id: "wr-b2-for-against", level: "B2", title: "Эссе «за и против»: видеоигры",
    prompt: "Напишите эссе: польза и вред видеоигр. Приведите доводы обеих сторон и сделайте осторожный вывод.",
    minWords: 200, maxWords: 260, topics: ["linking-words", "passive-advanced", "vocab-technology-media"],
    steps: [
      { title: "Введение", hint: "Тема и почему о ней спорят. Своё мнение пока не раскрывайте: It is often argued that…" },
      { title: "Аргументы «за»", hint: "2 довода с примером: Firstly,… Moreover,… Безличный пассив: Games are said to improve concentration." },
      { title: "Аргументы «против»", hint: "2 довода: However,… Critics point out that… Whereas some players…, others…" },
      { title: "Оговорки", hint: "Осторожные формулы: may / might / tend to / seems to — не пишите «всегда» и «никогда»." },
      { title: "Вывод", hint: "In conclusion / On balance, + ваше мнение и условие (provided that…)." }
    ],
    phrases: [
      { en: "It is often argued that video games waste young people's time.", ru: "Часто утверждают, что видеоигры отнимают время у молодёжи." },
      { en: "Supporters of gaming claim that it develops useful skills.", ru: "Сторонники игр утверждают, что они развивают полезные навыки." },
      { en: "Firstly, many games improve reaction time and teamwork.", ru: "Во-первых, многие игры улучшают реакцию и командную работу." },
      { en: "Moreover, online games help people stay in touch.", ru: "Кроме того, онлайн-игры помогают поддерживать связь." },
      { en: "Games are said to improve concentration.", ru: "Говорят, что игры улучшают концентрацию." },
      { en: "However, critics point out that they can be addictive.", ru: "Однако критики указывают, что они могут вызывать зависимость." },
      { en: "Whereas some players relax, others lose sleep.", ru: "Если одни игроки расслабляются, то другие недосыпают." },
      { en: "Too much screen time may lead to health problems.", ru: "Слишком много времени у экрана может привести к проблемам со здоровьем." },
      { en: "Not only is gaming popular, but it is also a huge industry.", ru: "Игры не только популярны, но и представляют огромную индустрию." },
      { en: "Despite these drawbacks, games are not harmful in themselves.", ru: "Несмотря на эти недостатки, игры сами по себе не вредны." },
      { en: "On balance, I believe that games are harmless provided that they are played in moderation.", ru: "В целом я считаю, что игры безвредны при условии умеренности." },
      { en: "To sum up, the key is balance.", ru: "Подводя итог, главное — баланс." }
    ],
    checks: [
      { text: "Не меньше 2 связок (Firstly, Moreover, However, Therefore…)", pattern: "\\b(firstly|secondly|finally|moreover|furthermore|in addition|however|nevertheless|on the other hand|therefore|as a result|consequently)\\b", min: 2 },
      { text: "Есть безличный пассив (It is argued that… / are said to…)", pattern: "\\bit (is|was) (often |widely |generally |commonly )?(argued|said|believed|claimed|thought|known|suggested)\\b|\\b(is|are) (often |widely |generally |commonly )?(said|believed|thought|claimed|known|considered) to\\b" },
      { text: "Есть уступка (although / whereas / despite)", pattern: "\\b(although|though|whereas|despite|in spite of)\\b" },
      { text: "Есть осторожное высказывание (may / might / could / tend to…)", pattern: "\\b(may|might|could) (be|lead|have|cause|help|make|become|also|not|sometimes|improve|reduce|increase|affect)\\b|\\btends? to\\b|\\b(seems?|appears?) to\\b" },
      { text: "Есть вывод (In conclusion / To sum up / On balance…)", pattern: "\\b(in conclusion|to sum up|to conclude|on balance|all in all)\\b|\\boverall," }
    ] },

  { id: "wr-b2-film-review", level: "B2", title: "Рецензия на фильм или игру",
    prompt: "Напишите рецензию на фильм, сериал или игру, которые вы недавно посмотрели или прошли: сюжет без спойлеров, ваша оценка и рекомендация.",
    minWords: 180, maxWords: 240, topics: ["non-defining-relative", "vocab-films-games", "participle-clauses"],
    steps: [
      { title: "Что это и о чём в целом", hint: "Название, жанр, когда вышло. Придаточное через запятую: …, which came out in 2023, is a…" },
      { title: "Сюжет и герои", hint: "Без спойлеров: The plot revolves around… The main character, who is…" },
      { title: "Что понравилось и что нет", hint: "Не только good/bad: stunning, gripping, predictable, slow. Уступка: Although the ending is predictable…" },
      { title: "Техническая сторона", hint: "Актёры, графика, музыка, геймплей: The acting is convincing; the graphics are stunning." },
      { title: "Рекомендация", hint: "I would recommend it to anyone who… / I would not recommend it if… + оценка из пяти." }
    ],
    phrases: [
      { en: "The film, which was released last year, is a science-fiction thriller.", ru: "Фильм, вышедший в прошлом году, — это научно-фантастический триллер." },
      { en: "The plot revolves around a young engineer who discovers a secret.", ru: "Сюжет строится вокруг молодого инженера, который раскрывает тайну." },
      { en: "The main character, who is played by a famous actor, is very convincing.", ru: "Главный герой, которого играет известный актёр, очень убедителен." },
      { en: "Without giving away the ending, I can say that it is full of surprises.", ru: "Не раскрывая концовку, скажу, что в ней много сюрпризов." },
      { en: "What I liked most was the soundtrack.", ru: "Больше всего мне понравился саундтрек." },
      { en: "The graphics are stunning and the gameplay is addictive.", ru: "Графика потрясающая, а геймплей затягивает." },
      { en: "It is a bit slow in places.", ru: "Местами он затянут." },
      { en: "Although the ending is predictable, it is still moving.", ru: "Хотя концовка предсказуема, она всё равно трогает." },
      { en: "Set in a futuristic city, the story keeps you guessing.", ru: "Действие происходит в городе будущего, и история держит в напряжении." },
      { en: "I would highly recommend it to anyone who enjoys a good mystery.", ru: "Очень рекомендую всем, кто любит хорошие детективы." },
      { en: "It is definitely worth watching.", ru: "Это определённо стоит посмотреть." },
      { en: "I would give it four out of five.", ru: "Я бы поставил четыре из пяти." }
    ],
    checks: [
      { text: "Есть рекомендация (recommend / worth watching…)", pattern: "\\brecommend(ed)?\\b|\\bworth (watching|seeing|playing|reading)\\b" },
      { text: "Не меньше 2 придаточных через запятую с which / who", pattern: ",\\s*(which|who)\\b", min: 2 },
      { text: "Есть уступка или контраст (although / despite / however…)", pattern: "\\b(although|even though|though|despite|in spite of|however|whereas)\\b" },
      { text: "Есть лексика кино и игр (plot, character, ending, graphics…) — минимум 3", pattern: "\\b(plot|story|storyline|character|characters|scene|ending|setting|actor|actress|director|graphics|soundtrack|gameplay|level|levels)\\b", min: 3 },
      { text: "Не меньше 2 ярких оценочных слов (stunning, gripping, predictable…)", pattern: "\\b(brilliant|stunning|boring|predictable|gripping|moving|impressive|disappointing|convincing|entertaining|thrilling|slow|powerful|memorable|original|dull|addictive)\\b", min: 2 }
    ] },

  { id: "wr-b2-report", level: "B2", title: "Короткий отчёт с рекомендациями",
    prompt: "Вы проверили, как сотрудники небольшой компании пользуются офисом и онлайн-инструментами. Напишите отчёт директору: что выяснилось и что вы рекомендуете.",
    minWords: 180, maxWords: 240, topics: ["passive-advanced", "reporting-verbs", "unless-as-long-as"],
    steps: [
      { title: "Introduction", hint: "Заголовок и цель: The aim of this report is to… и на чём основан отчёт (опрос, наблюдение)." },
      { title: "Findings", hint: "Факты и цифры, Passive: It was found that… Staff were asked… Используйте the majority / a small number of / half of." },
      { title: "Problems", hint: "Главные проблемы по пунктам; передайте чужие слова: Several employees complained that…" },
      { title: "Recommendations", hint: "I would recommend introducing… / It is recommended that… / The company should… + условие (provided that…)." },
      { title: "Conclusion", hint: "Один-два предложения: что изменится, если принять рекомендации." }
    ],
    phrases: [
      { en: "The aim of this report is to assess how staff use the office.", ru: "Цель отчёта — оценить, как сотрудники используют офис." },
      { en: "This report is based on a survey of thirty employees.", ru: "Отчёт основан на опросе тридцати сотрудников." },
      { en: "It was found that most employees prefer to work from home.", ru: "Выяснилось, что большинство сотрудников предпочитает работать из дома." },
      { en: "The majority of staff said that meetings take too long.", ru: "Большинство сотрудников сказали, что совещания слишком затянуты." },
      { en: "Only a small number of people use the shared calendar.", ru: "Общим календарём пользуется лишь небольшое число людей." },
      { en: "Several employees complained that the internet was unreliable.", ru: "Несколько сотрудников пожаловались, что интернет ненадёжен." },
      { en: "According to the survey, half of the team feel isolated.", ru: "Согласно опросу, половина команды чувствует себя изолированной." },
      { en: "I would recommend introducing a four-day office week.", ru: "Я рекомендую ввести четырёхдневную офисную неделю." },
      { en: "It is recommended that all meetings be limited to thirty minutes.", ru: "Рекомендуется ограничить все совещания тридцатью минутами." },
      { en: "One possible solution would be to buy better equipment.", ru: "Одним из решений было бы купить более качественное оборудование." },
      { en: "If these changes are made, productivity should improve.", ru: "Если эти изменения будут внесены, производительность должна вырасти." },
      { en: "In conclusion, small changes could make a big difference.", ru: "В заключение, небольшие изменения могут сильно повлиять." }
    ],
    checks: [
      { text: "Есть заголовки разделов (Introduction, Findings, Recommendations, Conclusion) — минимум 3", pattern: "\\b(introduction|findings|recommendations|conclusion)\\b", min: 3 },
      { text: "Есть пассив для фактов (was found / were asked / were interviewed…)", pattern: "\\b(was|were|is|are|has been|have been) (found|asked|interviewed|surveyed|reported|noted|recommended|suggested|observed|completed|carried out)\\b" },
      { text: "Есть рекомендация (I would recommend / It is recommended / should)", pattern: "\\b(i|we) (would )?(recommend|suggest|propose)\\b|\\bit is (recommended|suggested)\\b|\\b(should|ought to)\\b" },
      { text: "Есть количественные слова или проценты (the majority, half, 40%…) — минимум 2", pattern: "\\b(the majority of|the minority of|most|a number of|a few|a small number of|half of|per cent|percent|a third of)\\b|%", min: 2 },
      { text: "Нет сокращений (don't, it's…) — отчёт пишется формально", pattern: "\\b(i['’](m|ve|d|ll)|(it|that|there|we|they|you|he|she)['’](s|re|ve|ll|d)|(can|won)['’]t|(do|does|did|could|would|should|is|are|was|were|have|has|had)n['’]t)\\b", forbid: true }
    ] },

  { id: "wr-b2-cover-letter", level: "B2", title: "Сопроводительное письмо к вакансии",
    prompt: "Откликнитесь на вакансию, которая вам интересна (например, менеджер проектов или тестировщик игр): расскажите об опыте, достижениях и почему подходите компании.",
    minWords: 190, maxWords: 250, topics: ["present-perfect", "second-conditional", "collocations-b2", "vocab-work"],
    steps: [
      { title: "Обращение и вакансия", hint: "Dear Mr/Ms … , I am writing to apply for the position of… Где увидели объявление." },
      { title: "Опыт", hint: "Present Perfect: I have worked as… for three years. I have experience in…" },
      { title: "Достижения", hint: "Past Simple и глаголы действия: I managed, I increased, I launched — по возможности с результатом." },
      { title: "Почему эта компания", hint: "Коротко и конкретно: что вас привлекает, чем будете полезны: my skills would be an asset…" },
      { title: "Завершение", hint: "I have enclosed my CV. I look forward to hearing from you. Yours sincerely, и имя." }
    ],
    phrases: [
      { en: "I am writing to apply for the position of project manager.", ru: "Пишу, чтобы откликнуться на должность менеджера проектов." },
      { en: "I saw your advertisement on your company website.", ru: "Я увидел ваше объявление на сайте компании." },
      { en: "I have been working in marketing for three years.", ru: "Я работаю в маркетинге три года." },
      { en: "I have experience in managing small teams.", ru: "У меня есть опыт управления небольшими командами." },
      { en: "In my current role, I am responsible for planning and budgeting.", ru: "На текущей должности я отвечаю за планирование и бюджет." },
      { en: "I successfully led a project that increased sales by twenty per cent.", ru: "Я успешно провёл проект, который увеличил продажи на двадцать процентов." },
      { en: "I developed a new system that reduced mistakes.", ru: "Я разработал новую систему, которая сократила число ошибок." },
      { en: "I am a fast learner and I work well under pressure.", ru: "Я быстро учусь и хорошо работаю в условиях цейтнота." },
      { en: "I believe my skills would be an asset to your company.", ru: "Уверен, мои навыки будут полезны вашей компании." },
      { en: "I would welcome the opportunity to discuss my application.", ru: "Буду рад возможности обсудить мою кандидатуру." },
      { en: "I have enclosed my CV for your consideration.", ru: "Прилагаю резюме для рассмотрения." },
      { en: "I look forward to hearing from you.", ru: "Жду вашего ответа." }
    ],
    checks: [
      { text: "Есть цель письма (I am writing to apply / I would like to apply)", pattern: "\\bi am writing to apply\\b|\\bi would like to apply\\b" },
      { text: "Есть Present Perfect об опыте (I have worked / have experience…)", pattern: "\\bi have (been|worked|managed|led|gained|developed|completed|had|studied|run|built|trained|taken|dealt|spent)\\b" },
      { text: "Есть не меньше 2 глаголов достижений в Past Simple (managed, increased, launched…)", pattern: "\\b(managed|led|increased|reduced|organised|organized|developed|created|improved|launched|trained|completed|achieved|built)\\b", min: 2 },
      { text: "Есть вежливое завершение (Yours sincerely / faithfully / Kind regards)", pattern: "\\byours (sincerely|faithfully)\\b|\\bkind regards\\b" },
      { text: "Нет сокращений (I'm, I've, don't…) — письмо формальное", pattern: "\\b(i['’](m|ve|d|ll)|(it|that|there|we|they|you|he|she)['’](s|re|ve|ll|d)|(can|won)['’]t|(do|does|did|could|would|should|is|are|was|were|have|has|had)n['’]t)\\b", forbid: true }
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
