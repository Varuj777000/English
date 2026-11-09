// =====================================================================
// Мини-рассказы с рамкой глаголов — формы будущего (Present Continuous,
// Present Simple, be going to, will, Shall I). Формат — см. data/stories/past.js.
// В answers перечислены все естественные варианты; сокращение, приклеенное
// к слову перед пропуском («It ___» → «'s going to rain»), тоже принимается.
// =====================================================================

DATA.stories.push(

  {
    id: "story-future-001", title: "Mia's Busy Week", level: "B1",
    box: [
      { verb: "meet",   forms: ["meet", "meets", "meeting", "met"] },
      { verb: "leave",  forms: ["leave", "leaves", "leaving", "left"] },
      { verb: "start",  forms: ["start", "starts", "starting", "started"] },
      { verb: "rain",   forms: ["rain", "rains", "raining", "rained"] },
      { verb: "buy",    forms: ["buy", "buys", "buying", "bought"] },
      { verb: "go",     forms: ["go", "goes", "going", "went", "gone"] },
      { verb: "visit",  forms: ["visit", "visits", "visiting", "visited"] },
      { verb: "become", forms: ["become", "becomes", "becoming", "became"] },
      { verb: "carry",  forms: ["carry", "carries", "carrying", "carried"] }
    ],
    text: [
      "Mia has a busy week, and she writes everything in her diary. On Monday she (1) ___ her cousin Lena for lunch — they arranged it yesterday. On Tuesday she has a conference in Leeds. Her train (2) ___ at 8.15, and the conference (3) ___ at ten.",
      "On Wednesday she wakes up and sees black clouds over the city. “Look at the sky!” she says. “It (4) ___ all day.” She opens the fridge. “There is no food! I (5) ___ a sandwich on my way to work,” she decides.",
      "On Thursday she and Lena (6) ___ shopping, because Lena needs a new coat. On Friday Mia (7) ___ her grandma — they have agreed to have tea at four. Her little sister Katya has her own plans. “When I grow up, I (8) ___ a pilot,” she says. Mum smiles: “Shall I (9) ___ your bag to school now, pilot?”"
    ],
    gaps: [
      { n: 1, verb: "meet",   topic: "future-forms", answers: ["is meeting", "'s meeting", "is going to meet", "'s going to meet"], explain: "Договорились заранее — Present Continuous: is meeting (is going to meet тоже возможно)." },
      { n: 2, verb: "leave",  topic: "future-forms", answers: ["leaves", "is leaving"], explain: "Расписание поезда — Present Simple: leaves." },
      { n: 3, verb: "start",  topic: "future-forms", answers: ["starts", "is starting"], explain: "Программа конференции — Present Simple: starts." },
      { n: 4, verb: "rain",   topic: "future-forms", answers: ["is going to rain", "'s going to rain"], explain: "Видны чёрные тучи — предсказание по признакам: be going to." },
      { n: 5, verb: "buy",    topic: "future-forms", answers: ["will buy", "'ll buy"], explain: "Решение принято в момент речи («еды нет!») — will." },
      { n: 6, verb: "go",     topic: "future-forms", answers: ["are going", "'re going", "are going to go", "'re going to go"], explain: "Договорённость — Present Continuous: are going shopping (без to перед shopping)." },
      { n: 7, verb: "visit",  topic: "future-forms", answers: ["is visiting", "'s visiting", "is going to visit", "'s going to visit"], explain: "Договорились на четыре — Present Continuous: is visiting." },
      { n: 8, verb: "become", topic: "future-forms", answers: ["am going to become", "'m going to become"], explain: "Намерение на будущее («когда вырасту») — be going to." },
      { n: 9, verb: "carry",  topic: "future-forms", answers: ["carry"], explain: "Shall I + глагол без to и без -s: Shall I carry?" }
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
