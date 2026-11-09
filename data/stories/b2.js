// =====================================================================
// Мини-рассказы с рамкой глаголов — уровень B2 (4 штуки по 9 пропусков).
// Формат — см. data/stories/past.js и passive.js. Здесь в пропуск вписывается
// вся глагольная группа B2-грамматики: should have tested, had booked,
// would have found, is being repaired, will have finished, Waiting…
// Правила те же, что у всех рассказов: у каждого пропуска последнее слово
// ответа — форма глагола рамки (be/have/had/will/would в ответ входят, но
// в forms их нет), формы разных глаголов рамки не пересекаются.
//   story-b2-001 — модальные в прошлом + 3-й тип условных (The App That Crashed)
//   story-b2-002 — I wish / If only + смешанные условные (Holiday Regrets)
//   story-b2-003 — сложный пассив (The Old Bridge)
//   story-b2-004 — Future Continuous / Perfect + причастные обороты (Rob's Busy Summer)
// =====================================================================

DATA.stories.push(

  {
    id: "story-b2-001", title: "The App That Crashed", level: "B2",
    box: [
      { verb: "test",   forms: ["test", "tests", "testing", "tested"] },
      { verb: "listen", forms: ["listen", "listens", "listening", "listened"] },
      { verb: "forget", forms: ["forget", "forgets", "forgetting", "forgot", "forgotten"] },
      { verb: "miss",   forms: ["miss", "misses", "missing", "missed"] },
      { verb: "delay",  forms: ["delay", "delays", "delaying", "delayed"] },
      { verb: "find",   forms: ["find", "finds", "finding", "found"] },
      { verb: "check",  forms: ["check", "checks", "checking", "checked"] },
      { verb: "notice", forms: ["notice", "notices", "noticing", "noticed"] },
      { verb: "warn",   forms: ["warn", "warns", "warning", "warned"] }
    ],
    text: [
      "Last Monday the small company Novo Soft launched its new shopping app, and it crashed within an hour. The developers (1) ___ it more carefully before the launch — the bugs were obvious.",
      "The manager was furious. “You (2) ___ to the testers! They told you about the problem two weeks ago.” But he insisted that he (3) ___ about the warning, because he had written it in his notebook. The testers' email was very long, so he (4) ___ the important line.",
      "Later the CEO said, “If the manager (5) ___ the launch by a week, the app wouldn't have crashed. If we had hired more testers, we (6) ___ every bug. And the app wouldn't have crashed at all if someone (7) ___ the server limits. Customers wouldn't have been so angry if we (8) ___ the problem at once.” The testers agree. They (9) ___ everybody earlier if they had known how serious it was."
    ],
    gaps: [
      { n: 1, verb: "test",   topic: "modals-past",       answers: ["should have tested", "ought to have tested"], explain: "Критика: надо было, но не сделали (the bugs were obvious) — should have + V3." },
      { n: 2, verb: "listen", topic: "modals-past",       answers: ["should have listened", "ought to have listened"], explain: "Упрёк: «Вам следовало слушать тестировщиков!» — should have listened (to)." },
      { n: 3, verb: "forget", topic: "modals-past",       answers: ["couldn't have forgotten", "could not have forgotten", "can't have forgotten", "cannot have forgotten"], explain: "Он уверен, что не забыл (записал в блокнот): can't / couldn't have + V3 (forget → forgotten)." },
      { n: 4, verb: "miss",   topic: "modals-past",       answers: ["might have missed", "may have missed", "could have missed", "must have missed"], explain: "Догадка о прошлом (письмо длинное): might / may / could / must have + V3." },
      { n: 5, verb: "delay",  topic: "third-conditional", answers: ["had delayed"], explain: "If + Past Perfect (нереальное прошлое): If the manager had delayed the launch…" },
      { n: 6, verb: "find",   topic: "third-conditional", answers: ["would have found", "could have found", "might have found"], explain: "Результат нереального прошлого: would have + V3 (find → found)." },
      { n: 7, verb: "check",  topic: "third-conditional", answers: ["had checked"], explain: "if someone had checked… — Past Perfect в условной части." },
      { n: 8, verb: "notice", topic: "third-conditional", answers: ["had noticed"], explain: "if we had noticed… — Past Perfect в условной части." },
      { n: 9, verb: "warn",   topic: "third-conditional", answers: ["would have warned", "could have warned", "might have warned"], explain: "if they had known… → результат: would have warned." }
    ]
  },

  {
    id: "story-b2-002", title: "Holiday Regrets", level: "B2",
    box: [
      { verb: "book",  forms: ["book", "books", "booking", "booked"] },
      { verb: "take",  forms: ["take", "takes", "taking", "took", "taken"] },
      { verb: "learn", forms: ["learn", "learns", "learning", "learned", "learnt"] },
      { verb: "bring", forms: ["bring", "brings", "bringing", "brought"] },
      { verb: "speak", forms: ["speak", "speaks", "speaking", "spoke", "spoken"] },
      { verb: "spend", forms: ["spend", "spends", "spending", "spent"] },
      { verb: "lose",  forms: ["lose", "loses", "losing", "lost"] },
      { verb: "leave", forms: ["leave", "leaves", "leaving", "left"] },
      { verb: "rent",  forms: ["rent", "rents", "renting", "rented"] }
    ],
    text: [
      "Mia is sitting in a crowded café in Lisbon and thinking about her holiday. It has not gone well. She wishes she (1) ___ a hotel in the centre — hers is an hour away. She also wishes she (2) ___ the earlier flight, because the late one landed at midnight. “If only I (3) ___ some Portuguese before the trip!” she thinks. Nobody understands her English. She wishes she (4) ___ a warmer coat, too — it is freezing tonight.",
      "At the next table a waiter is speaking fast, and Mia cannot follow him. She wishes she (5) ___ Portuguese better, then she could order without pointing at the menu. She thinks about her money, too. If she (6) ___ so much on shopping on the first day, she would have enough for a nice dinner now. If she were a more careful person, she (7) ___ her wallet on the tram. If she (8) ___ the hotel earlier this morning, she would be on the beach now. And if she had more patience, she (9) ___ a car last week instead of waiting for taxis."
    ],
    gaps: [
      { n: 1, verb: "book",  topic: "wish-if-only",       answers: ["had booked"], explain: "Сожаление о прошлом (отель уже выбран): wish + Past Perfect — had booked." },
      { n: 2, verb: "take",  topic: "wish-if-only",       answers: ["had taken"], explain: "Сожаление о прошлом: wish + had + V3 (take → taken)." },
      { n: 3, verb: "learn", topic: "wish-if-only",       answers: ["had learned", "had learnt"], explain: "If only + Past Perfect: сожаление о том, что не выучила до поездки." },
      { n: 4, verb: "bring", topic: "wish-if-only",       answers: ["had brought"], explain: "Пальто надо было взять раньше, при сборах: had brought (bring → brought)." },
      { n: 5, verb: "speak", topic: "wish-if-only",       answers: ["spoke", "could speak"], explain: "Сожаление о настоящем: wish + Past Simple — spoke (или could speak)." },
      { n: 6, verb: "spend", topic: "mixed-conditionals", answers: ["hadn't spent", "had not spent"], explain: "Условие в прошлом, результат сейчас: If + had + V3, would + глагол. Здесь отрицание: hadn't spent." },
      { n: 7, verb: "lose",  topic: "mixed-conditionals", answers: ["wouldn't have lost", "would not have lost"], explain: "Условие в настоящем (if she were more careful), результат в прошлом: wouldn't have lost." },
      { n: 8, verb: "leave", topic: "mixed-conditionals", answers: ["had left"], explain: "Условие в прошлом (earlier this morning), результат сейчас (would be on the beach): had left." },
      { n: 9, verb: "rent",  topic: "mixed-conditionals", answers: ["would have rented", "'d have rented"], explain: "Условие в настоящем (if she had more patience), результат в прошлом (last week): would have rented." }
    ]
  },

  {
    id: "story-b2-003", title: "The Old Bridge", level: "B2",
    box: [
      { verb: "build",  forms: ["build", "builds", "building", "built"] },
      { verb: "repair", forms: ["repair", "repairs", "repairing", "repaired"] },
      { verb: "finish", forms: ["finish", "finishes", "finishing", "finished"] },
      { verb: "close",  forms: ["close", "closes", "closing", "closed"] },
      { verb: "say",    forms: ["say", "says", "saying", "said"] },
      { verb: "ask",    forms: ["ask", "asks", "asking", "asked"] },
      { verb: "pay",    forms: ["pay", "pays", "paying", "paid"] },
      { verb: "leave",  forms: ["leave", "leaves", "leaving", "left"] },
      { verb: "take",   forms: ["take", "takes", "taking", "took", "taken"] }
    ],
    text: [
      "The old stone bridge in Aldwin (1) ___ by the Romans, although nobody can prove it. Right now the bridge (2) ___, so it is closed to traffic. The work (3) ___ by the end of the year, according to the council.",
      "When we arrived last Saturday, the road to the bridge (4) ___ by workers, so we had to wait. It (5) ___ in the local newspapers that the bridge will reopen in June. Visitors (6) ___ not to park near the bridge, because the road is narrow.",
      "In the past, tolls (7) ___ by every driver who crossed it. This time nothing (8) ___ to chance, so there should be no more delays. And when it reopens, you can have your photo (9) ___ on the bridge by a local photographer."
    ],
    gaps: [
      { n: 1, verb: "build",  topic: "passive-advanced", answers: ["is said to have been built", "is believed to have been built", "is thought to have been built"], explain: "«Говорят, что построили римляне» о прошлом: is said to have been built." },
      { n: 2, verb: "repair", topic: "passive-advanced", answers: ["is being repaired"], explain: "Right now — процесс сейчас: Present Continuous Passive — is being repaired." },
      { n: 3, verb: "finish", topic: "passive-advanced", answers: ["will have been finished", "will be finished", "should be finished", "is going to be finished"], explain: "by the end of the year — к сроку в будущем: will have been finished (или will be finished)." },
      { n: 4, verb: "close",  topic: "passive-advanced", answers: ["was being closed", "was closed"], explain: "Когда мы приехали, дорогу как раз перекрывали: Past Continuous Passive — was being closed." },
      { n: 5, verb: "say",    topic: "passive-advanced", answers: ["is said", "has been said"], explain: "It is said that… — «говорят, что…» (say → said)." },
      { n: 6, verb: "ask",    topic: "passive-advanced", answers: ["are asked", "have been asked"], explain: "Visitors are asked not to… — «посетителей просят не…»: are asked." },
      { n: 7, verb: "pay",    topic: "passive-advanced", answers: ["were paid", "used to be paid"], explain: "In the past — прошлое, tolls (мн. число): were paid / used to be paid (pay → paid)." },
      { n: 8, verb: "leave",  topic: "passive-advanced", answers: ["is left", "is being left", "has been left"], explain: "Nothing is left to chance — «ничего не оставляют на волю случая» (leave → left)." },
      { n: 9, verb: "take",   topic: "passive-advanced", answers: ["taken"], explain: "have + предмет + V3: have your photo taken — «чтобы вас сфотографировали» (take → taken)." }
    ]
  },

  {
    id: "story-b2-004", title: "Rob's Busy Summer", level: "B2",
    box: [
      { verb: "lie",    forms: ["lie", "lies", "lying", "lay", "lain"] },
      { verb: "finish", forms: ["finish", "finishes", "finishing", "finished"] },
      { verb: "work",   forms: ["work", "works", "working", "worked"] },
      { verb: "write",  forms: ["write", "writes", "writing", "wrote", "written"] },
      { verb: "save",   forms: ["save", "saves", "saving", "saved"] },
      { verb: "wait",   forms: ["wait", "waits", "waiting", "waited"] },
      { verb: "open",   forms: ["open", "opens", "opening", "opened"] },
      { verb: "look",   forms: ["look", "looks", "looking", "looked"] },
      { verb: "hear",   forms: ["hear", "hears", "hearing", "heard"] }
    ],
    text: [
      "Rob has a busy summer ahead. This time next week he (1) ___ on a beach in Spain, and he cannot wait. First, though, he has to pass his exams. By Friday he (2) ___ his last one, and then he will be free. His sister Ella is a doctor. She (3) ___ in the hospital all summer, as usual, so she will not see much sun.",
      "Rob has big plans. By September he (4) ___ the first chapter of his novel, and by the time he is thirty he (5) ___ enough money for a small flat.",
      "His last holiday was a disaster. (6) ___ for a late train, he read a book on the platform. (7) ___ the door of his hotel room, he saw a stranger standing there. He found a small café, (8) ___ out over the harbour, and ordered a coffee. (9) ___ the news about the delay, Ella called him at once."
    ],
    gaps: [
      { n: 1, verb: "lie",    topic: "future-continuous-perfect", answers: ["will be lying", "'ll be lying"], explain: "This time next week — действие будет идти в тот момент: will be + -ing (lie → lying)." },
      { n: 2, verb: "finish", topic: "future-continuous-perfect", answers: ["will have finished", "'ll have finished"], explain: "By Friday — закончит к сроку: will have + V3." },
      { n: 3, verb: "work",   topic: "future-continuous-perfect", answers: ["will be working", "'ll be working", "will work", "'ll work"], explain: "all summer — весь период: will be working (процесс), будущее время допустимо и простое will work." },
      { n: 4, verb: "write",  topic: "future-continuous-perfect", answers: ["will have written", "'ll have written"], explain: "By September — к моменту в будущем: will have + V3 (write → written)." },
      { n: 5, verb: "save",   topic: "future-continuous-perfect", answers: ["will have saved", "'ll have saved"], explain: "by the time he is thirty — к тому времени: will have saved." },
      { n: 6, verb: "wait",   topic: "participle-clauses", answers: ["Waiting"], explain: "Одновременные действия, одно подлежащее: Waiting for a late train, he read… = while he was waiting." },
      { n: 7, verb: "open",   topic: "participle-clauses", answers: ["Opening"], explain: "Действия почти одновременны: Opening the door, he saw…" },
      { n: 8, verb: "look",   topic: "participle-clauses", answers: ["looking"], explain: "Причастие вместо придаточного: a small café, looking out over the harbour (= which looked out)." },
      { n: 9, verb: "hear",   topic: "participle-clauses", answers: ["Having heard", "Hearing"], explain: "Сначала услышала, потом позвонила: Having heard (раньше) — или просто Hearing." }
    ]
  }

);
