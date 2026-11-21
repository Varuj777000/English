// =====================================================================
// Мини-рассказы с рамкой глаголов — формы будущего (Present Continuous,
// Present Simple, be going to, will, Shall I). Формат — см. data/stories/past.js.
// В answers перечислены все естественные варианты; сокращение, приклеенное
// к слову перед пропуском («It ___» → «'s going to rain»), тоже принимается.
// =====================================================================

DATA.stories.push(

  {
    id: "story-future-001", title: "Mia's Secret Cake", level: "B1",
    box: [
      { verb: "meet", forms: ["meet","meets","meeting","met"] },
      { verb: "leave", forms: ["leave","leaves","leaving","left"] },
      { verb: "start", forms: ["start","starts","starting","started"] },
      { verb: "rain", forms: ["rain","rains","raining","rained"] },
      { verb: "buy", forms: ["buy","buys","buying","bought"] },
      { verb: "go", forms: ["go","goes","going","went","gone"] },
      { verb: "visit", forms: ["visit","visits","visiting","visited"] },
      { verb: "become", forms: ["become","becomes","becoming","became"] },
      { verb: "carry", forms: ["carry","carries","carrying","carried"] }
    ],
    text: [
      "Mia has a big secret: on Friday it is her grandma's eightieth birthday, and she is making the cake herself. On Monday she (1) ___ her cousin Lena for lunch — they arranged it yesterday to plan the surprise. On Tuesday Mia goes to Leeds for a cake workshop. Her train (2) ___ at 8.15, and the workshop (3) ___ at ten.",
      "On Wednesday she wakes up and sees black clouds over the city. “Look at the sky!” she says. “It (4) ___ all day.” She opens the fridge. “There is no butter! I (5) ___ some on my way to work,” she decides.",
      "On Thursday she and Lena (6) ___ shopping, because they need candles and a card. On Friday Mia (7) ___ her grandma — they have agreed to have tea at four, and Grandma knows nothing about the party. Her little sister Katya tastes the cake. “When I grow up, I (8) ___ a baker,” she says. Mum smiles: “Shall I (9) ___ the cake to the car for you, little baker?”"
    ],
    gaps: [
      { n: 1, verb: "meet", topic: "future-forms", answers: ["is meeting","'s meeting","is going to meet","'s going to meet"], explain: "Договорились заранее («they arranged it yesterday») — Present Continuous для планов: is meeting (is going to meet тоже подходит)." },
      { n: 2, verb: "leave", topic: "future-forms", answers: ["leaves"], explain: "Расписание поезда — Present Simple для будущего: leaves at 8.15." },
      { n: 3, verb: "start", topic: "future-forms", answers: ["starts"], explain: "Расписание мероприятия — Present Simple для будущего: the workshop starts at ten." },
      { n: 4, verb: "rain", topic: "future-forms", answers: ["is going to rain","'s going to rain"], explain: "Видны чёрные тучи — предсказание по признакам: be going to (is going to rain)." },
      { n: 5, verb: "buy", topic: "future-forms", answers: ["will buy","'ll buy"], explain: "Решение принято в момент речи («There is no butter!») — will: I'll buy some." },
      { n: 6, verb: "go", topic: "future-forms", answers: ["are going","'re going"], explain: "Договорились и есть причина («they need candles and a card») — Present Continuous: are going shopping." },
      { n: 7, verb: "visit", topic: "future-forms", answers: ["is visiting","'s visiting","is going to visit","'s going to visit"], explain: "Договорились на четыре («they have agreed») — Present Continuous: is visiting." },
      { n: 8, verb: "become", topic: "future-forms", answers: ["am going to become","'m going to become"], explain: "Намерение на будущее («When I grow up») — be going to: am going to become." },
      { n: 9, verb: "carry", topic: "future-forms", answers: ["carry"], explain: "Предложение помощи: Shall I + инфинитив без to — Shall I carry…?" }
    ]
  },

  {
    id: "story-future-002", title: "The School Trip", level: "B1",
    box: [
      { verb: "leave",  forms: ["leave", "leaves", "leaving", "left"] },
      { verb: "arrive", forms: ["arrive", "arrives", "arriving", "arrived"] },
      { verb: "meet",   forms: ["meet", "meets", "meeting", "met"] },
      { verb: "close",  forms: ["close", "closes", "closing", "closed"] },
      { verb: "drop",   forms: ["drop", "drops", "dropping", "dropped"] },
      { verb: "carry",  forms: ["carry", "carries", "carrying", "carried"] },
      { verb: "buy",    forms: ["buy", "buys", "buying", "bought"] },
      { verb: "study",  forms: ["study", "studies", "studying", "studied"] },
      { verb: "give",   forms: ["give", "gives", "giving", "gave", "given"] }
    ],
    text: [
      "Class 8B is going on a school trip to the science museum. Mr Hill, the teacher, has already booked everything. The coach (1) ___ from school at 8.00, and it (2) ___ at the museum at 9.30. At ten a guide (3) ___ them at the entrance — Mr Hill arranged it by phone. The museum (4) ___ at five, so they will be home early.",
      "Kate is carrying a very heavy bag. “Careful, Kate!” says Tom. “You (5) ___ it!” Then he smiles: “Shall I (6) ___ it for you?” “Thanks!” says Kate. “I (7) ___ you an ice cream later, I promise.”",
      "Tom wants to be an astronomer. “I (8) ___ physics at university,” he says. Mr Hill laughs: “Good for you! And don’t worry about homework tomorrow. I (9) ___ you any!”"
    ],
    gaps: [
      { n: 1, verb: "leave",  topic: "future-forms", answers: ["leaves", "is leaving"], explain: "Расписание поездки — Present Simple: leaves." },
      { n: 2, verb: "arrive", topic: "future-forms", answers: ["arrives", "is arriving"], explain: "Расписание — Present Simple: arrives." },
      { n: 3, verb: "meet",   topic: "future-forms", answers: ["is meeting", "'s meeting", "is going to meet", "'s going to meet"], explain: "Договорились по телефону — Present Continuous: is meeting." },
      { n: 4, verb: "close",  topic: "future-forms", answers: ["closes"], explain: "Часы работы музея — Present Simple: closes." },
      { n: 5, verb: "drop",   topic: "future-forms", answers: ["are going to drop", "'re going to drop"], explain: "Тяжёлая сумка, вот-вот упадёт — предсказание по признакам: be going to." },
      { n: 6, verb: "carry",  topic: "future-forms", answers: ["carry"], explain: "Shall I + глагол без to: Shall I carry?" },
      { n: 7, verb: "buy",    topic: "future-forms", answers: ["will buy", "'ll buy"], explain: "Обещание — will." },
      { n: 8, verb: "study",  topic: "future-forms", answers: ["am going to study", "'m going to study"], explain: "Намерение, план — be going to." },
      { n: 9, verb: "give",   topic: "future-forms", answers: ["won't give", "will not give"], explain: "Обещание — will, отрицание won't." }
    ]
  }

);
