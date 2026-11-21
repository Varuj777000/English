// =====================================================================
// Мини-рассказы с рамкой глаголов — смешанные времена (тема mixed-tenses).
// Формат — см. data/stories/past.js. Главное отличие от остальных рассказов:
// в пропуске НЕ названо время — его решает контекст. В `explain` каждого
// пропуска сказано, какое слово или сигнал в тексте решает выбор формы.
// Ответ — целая глагольная группа (am sitting, has worked, had left,
// are going to visit, will love…); be / have / had / will в forms не входят.
//   story-mix-001 — поездка (A Trip to Lisbon)
//   story-mix-002 — первая неделя на новой работе (My First Week)
// =====================================================================

DATA.stories.push(

  {
    id: "story-mix-001", title: "A Trip to Lisbon", level: "B1",
    box: [
      { verb: "live",   forms: ["live", "lives", "living", "lived"] },
      { verb: "sit",    forms: ["sit", "sits", "sitting", "sat"] },
      { verb: "go",     forms: ["go", "goes", "going", "went", "gone"] },
      { verb: "drink",  forms: ["drink", "drinks", "drinking", "drank", "drunk"] },
      { verb: "work",   forms: ["work", "works", "working", "worked"] },
      { verb: "leave",  forms: ["leave", "leaves", "leaving", "left"] },
      { verb: "visit",  forms: ["visit", "visits", "visiting", "visited"] },
      { verb: "stop",   forms: ["stop", "stops", "stopping", "stopped"] },
      { verb: "love",   forms: ["love", "loves", "loving", "loved"] }
    ],
    text: [
      "My name is Anna and I (1) ___ in Moscow, where I work as a designer. Right now, however, I (2) ___ in a small café in Lisbon, and I want to tell you about my trip.",
      "Yesterday morning we (3) ___ to the old town by tram. While we (4) ___ coffee in a tiny café, a heavy storm started, so we stayed there for an hour. Our guide, Rui, (5) ___ as a tour guide for five years, so he knows every street in the city.",
      "In the evening, when we got back to the station, the last tram (6) ___ five minutes earlier, so we had to walk to the hotel. Tomorrow we (7) ___ Sintra, because I have already bought the tickets. If the rain (8) ___ by lunchtime, we will have a picnic in the gardens. I'm sure you (9) ___ this city as much as I do, so you must come with me next year."
    ],
    gaps: [
      { n: 1, verb: "live",  topic: "mixed-tenses", answers: ["live"], explain: "Постоянное положение дел («где я работаю» — тоже общий факт о жизни): Present Simple, live. Сигнал — нет ни момента, ни слова «сейчас»." },
      { n: 2, verb: "sit",   topic: "mixed-tenses", answers: ["am sitting", "'m sitting"], explain: "Сигнал — «Right now» и контраст с «however»: действие происходит в момент речи → Present Continuous, am sitting." },
      { n: 3, verb: "go",    topic: "mixed-tenses", answers: ["went"], explain: "Сигнал — «Yesterday morning»: законченный момент в прошлом → Past Simple, went (не have gone)." },
      { n: 4, verb: "drink", topic: "mixed-tenses", answers: ["were drinking"], explain: "Сигнал — «While…» и то, что посреди этого действия «a storm started»: длительный фон в прошлом → Past Continuous, were drinking." },
      { n: 5, verb: "work",  topic: "mixed-tenses", answers: ["has worked", "has been working", "'s worked", "'s been working"], explain: "Сигнал — «for five years» и «so he knows»: начал раньше и связано с настоящим → Present Perfect (Continuous), has worked / has been working." },
      { n: 6, verb: "leave", topic: "mixed-tenses", answers: ["had left"], explain: "Сигнал — «when we got back… five minutes earlier»: действие произошло раньше другого прошлого момента → Past Perfect, had left." },
      { n: 7, verb: "visit", topic: "mixed-tenses", answers: ["are going to visit", "'re going to visit", "are visiting", "'re visiting"], explain: "Сигнал — «Tomorrow» и «already bought the tickets»: заранее решено и подготовлено → be going to (или Present Continuous), are going to visit." },
      { n: 8, verb: "stop",  topic: "mixed-tenses", answers: ["stops"], explain: "Сигнал — «If» + «will have a picnic»: в условии о будущем после if стоит Present Simple, stops (не will stop)." },
      { n: 9, verb: "love",  topic: "mixed-tenses", answers: ["will love", "'ll love", "are going to love", "'re going to love"], explain: "Сигнал — «I'm sure…»: предсказание, уверенность говорящего → will love (be going to тоже допустимо)." }
    ]
  },

  {
    id: "story-mix-002", title: "My First Week", level: "B1",
    box: [
      { verb: "work",     forms: ["work", "works", "working", "worked"] },
      { verb: "arrive",   forms: ["arrive", "arrives", "arriving", "arrived"] },
      { verb: "talk",     forms: ["talk", "talks", "talking", "talked"] },
      { verb: "leave",    forms: ["leave", "leaves", "leaving", "left"] },
      { verb: "check",    forms: ["check", "checks", "checking", "checked"] },
      { verb: "show",     forms: ["show", "shows", "showing", "showed", "shown"] },
      { verb: "use",      forms: ["use", "uses", "using", "used"] },
      { verb: "organise", forms: ["organise", "organises", "organising", "organised", "organize", "organizes", "organizing", "organized"] },
      { verb: "end",      forms: ["end", "ends", "ending", "ended"] }
    ],
    text: [
      "I (1) ___ at my new company for five days now, and so far I really like it. Last Monday, my first day, I (2) ___ at nine o'clock sharp.",
      "When I came in, my new boss (3) ___ on the phone, so I waited quietly. Later she told me that the previous manager (4) ___ the company a month before, so nobody could explain the old system to me.",
      "Every morning I (5) ___ the team's emails before the first meeting. Right now my colleague Tom (6) ___ me how to use the new software, so I can't talk for long. I (7) ___ such a complicated system before, and I'm a bit worried. Next Friday the company (8) ___ a party for the new employees, and the invitation is already on my desk. When my trial period (9) ___ next month, I will ask for a permanent contract."
    ],
    gaps: [
      { n: 1, verb: "work",     topic: "mixed-tenses", answers: ["have worked", "have been working", "'ve worked", "'ve been working"], explain: "Сигнал — «for five days now» и «so far»: период от прошлого до сегодняшнего дня → Present Perfect (Continuous), have worked / have been working." },
      { n: 2, verb: "arrive",   topic: "mixed-tenses", answers: ["arrived"], explain: "Сигнал — «Last Monday, my first day»: конкретный момент в прошлом → Past Simple, arrived." },
      { n: 3, verb: "talk",     topic: "mixed-tenses", answers: ["was talking"], explain: "Сигнал — «When I came in…»: в момент, когда я вошла, начальница уже говорила — длительный фон → Past Continuous, was talking." },
      { n: 4, verb: "leave",    topic: "mixed-tenses", answers: ["had left"], explain: "Сигнал — «a month before» и «she told me»: уход случился раньше рассказа → Past Perfect, had left." },
      { n: 5, verb: "check",    topic: "mixed-tenses", answers: ["check"], explain: "Сигнал — «Every morning»: регулярное действие → Present Simple, check." },
      { n: 6, verb: "show",     topic: "mixed-tenses", answers: ["is showing", "'s showing"], explain: "Сигнал — «Right now» и «I can't talk for long»: происходит сейчас → Present Continuous, is showing." },
      { n: 7, verb: "use",      topic: "mixed-tenses", answers: ["have never used", "'ve never used", "haven't used", "have not used", "'ve not used"], explain: "Сигнал — «before» и «I'm a bit worried»: опыта до сегодняшнего дня не было → Present Perfect, have never used / haven't used." },
      { n: 8, verb: "organise", topic: "mixed-tenses", answers: ["is organising", "'s organising", "is going to organise", "'s going to organise", "is organizing", "'s organizing", "is going to organize", "'s going to organize"], explain: "Сигнал — «Next Friday» и «the invitation is already on my desk»: уже решено и подготовлено → Present Continuous (или be going to), is organising." },
      { n: 9, verb: "end",      topic: "mixed-tenses", answers: ["ends"], explain: "Сигнал — «When…» + «I will ask»: после when в предложении о будущем стоит Present Simple, ends (не will end)." }
    ]
  }

);
