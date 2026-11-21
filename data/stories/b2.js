// =====================================================================
// Мини-рассказы с рамкой глаголов — уровень B2 (6 штук по 9 пропусков).
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
//   story-b2-005 — causative have/get + be/get used to (Starting Again in Canada)
//   story-b2-006 — глаголы передачи речи + gerund/infinitive (The Rumour at Work)
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
  },

  {
    id: "story-b2-005", title: "Starting Again in Canada", level: "B2",
    box: [
      { verb: "paint",     forms: ["paint", "paints", "painting", "painted", "repaint", "repainted"] },
      { verb: "translate", forms: ["translate", "translates", "translating", "translated"] },
      { verb: "repair",    forms: ["repair", "repairs", "repairing", "repaired"] },
      { verb: "drive",     forms: ["drive", "drives", "driving", "drove", "driven"] },
      { verb: "wake",      forms: ["wake", "wakes", "waking", "woke", "woken"] },
      { verb: "check",     forms: ["check", "checks", "checking", "checked"] },
      { verb: "work",      forms: ["work", "works", "working", "worked"] },
      { verb: "cut",       forms: ["cut", "cuts", "cutting"] },
      { verb: "live",      forms: ["live", "lives", "living", "lived"] }
    ],
    text: [
      "Moving to Canada was a big step for our family. The walls of our new flat were an ugly yellow, so we (1) ___ before we moved in. Our university certificates were in Russian, so we (2) ___ into English by an official translator. On the plane my husband's laptop broke, and he (3) ___ in a shop near our building.",
      "Everyday life was strange at first. Driving on the right felt wrong for me, but now I (4) ___ on the right-hand side of the road. My son finds school starts too early, but he is slowly (5) ___ up at six every day. The heating in our flat is noisy, so next week we (6) ___ by an engineer.",
      "Many people here work from home, but I (7) ___ alone all day. My hair was a mess after the move, so I (8) ___ at the barber's on the corner. It is not always easy, but I am sure that in a year we (9) ___ here like locals."
    ],
    gaps: [
      { n: 1, verb: "paint",     topic: "causative-have",  answers: ["had them painted", "had the walls painted", "had them repainted", "had the walls repainted", "got them painted", "got the walls painted"], explain: "Стены красили нанятые люди (мы сами не красили) → have + предмет + V3: had them painted. Ловушка: ✗ we painted — тогда красили сами." },
      { n: 2, verb: "translate", topic: "causative-have",  answers: ["had them translated", "had the certificates translated", "got them translated", "got the certificates translated"], explain: "Перевёл «an official translator» (by …) — услугу заказали: had them translated (V3 после предмета), не ✗ had them translate." },
      { n: 3, verb: "repair",    topic: "causative-have",  answers: ["had it repaired", "had his laptop repaired", "had the laptop repaired", "got it repaired", "got his laptop repaired", "got the laptop repaired"], explain: "Чинил мастер «in a shop» — услугу получил, не делал сам: had it repaired. Предмет (it) стоит между have и V3." },
      { n: 4, verb: "drive",     topic: "be-get-used-to",  answers: ["am used to driving", "'m used to driving", "have got used to driving", "'ve got used to driving", "have gotten used to driving", "'ve gotten used to driving", "am getting used to driving", "'m getting used to driving"], explain: "Сигнал — «felt wrong at first, but now»: уже привыкла → be used to + -ing (или have got used to): am used to driving. Ловушка: ✗ am used to drive." },
      { n: 5, verb: "wake",      topic: "be-get-used-to",  answers: ["getting used to waking"], explain: "Сигнал — «slowly»: процесс привыкания → get used to + -ing: (is) getting used to waking. Перед пропуском уже есть is slowly, поэтому нужна форма с -ing." },
      { n: 6, verb: "check",     topic: "causative-have",  answers: ["are having it checked", "'re having it checked", "are going to have it checked", "'re going to have it checked", "are having the heating checked", "'re having the heating checked", "are going to have the heating checked", "'re going to have the heating checked"], explain: "Сигнал — «next week» и «by an engineer»: услуга запланирована → are having it checked (Present Continuous для планов) / are going to have it checked." },
      { n: 7, verb: "work",      topic: "be-get-used-to",  answers: ["am not used to working", "'m not used to working", "am still not used to working", "'m still not used to working", "haven't got used to working", "have not got used to working", "haven't gotten used to working", "have not gotten used to working"], explain: "Сигнал — «but I…»: у других это нормально, а мне ещё нет → отрицание: am not used to working (после used to — глагол с -ing). Ловушка: ✗ am not used to work." },
      { n: 8, verb: "cut",       topic: "causative-have",  answers: ["had it cut", "had my hair cut", "got it cut", "got my hair cut"], explain: "Сигнал — «at the barber's»: стригли в парикмахерской, не сама → had it cut (V3 у cut совпадает с V1: cut — cut — cut)." },
      { n: 9, verb: "live",      topic: "be-get-used-to",  answers: ["will be used to living", "'ll be used to living", "will have got used to living", "'ll have got used to living", "will have gotten used to living", "'ll have gotten used to living", "will be living"], explain: "Сигнал — «in a year» и «like locals»: прогноз, что к тому времени привыкнем → will be used to living (или will have got used to living)." }
    ]
  },

  {
    id: "story-b2-006", title: "The Rumour at Work", level: "B2",
    box: [
      { verb: "break", forms: ["break", "breaks", "breaking", "broke", "broken"] },
      { verb: "send",  forms: ["send", "sends", "sending", "sent"] },
      { verb: "copy",  forms: ["copy", "copies", "copying", "copied"] },
      { verb: "take",  forms: ["take", "takes", "taking", "took", "taken"] },
      { verb: "go",    forms: ["go", "goes", "going", "went", "gone"] },
      { verb: "lock",  forms: ["lock", "locks", "locking", "locked"] },
      { verb: "tell",  forms: ["tell", "tells", "telling", "told"] },
      { verb: "press", forms: ["press", "presses", "pressing", "pressed"] },
      { verb: "join",  forms: ["join", "joins", "joining", "joined"] }
    ],
    text: [
      "Monday was a strange day in our office. First, the printer stopped working. Anna said, “I'm sorry, I broke it when I was moving the paper.” She (1) ___ the printer, so nobody was angry. Then Mr Clark said, “I will send the new invoice before noon, I promise.” He (2) ___ the invoice before noon, and he did.",
      "Later, the boss said to Tom, “You copied the design from another company!” He (3) ___ the design from another company. Tom answered, “No, I didn't take the idea from anyone.” He (4) ___ the idea from anyone. At lunch Anna said, “Let's go to the café and talk about it.” She (5) ___ to the café to talk about it.",
      "In the evening the cleaner found the office door open, but Tom was sure that he (6) ___ it, because he could still hear the click of the key. The next day Anna apologised, because she (7) ___ everyone about the meeting, and half the team missed it. The printer still didn't work, so Tom (8) ___ the green button for ten seconds, but nothing changed. Finally, Tom said, “OK, I'll come to the café.” He (9) ___ the others there."
    ],
    gaps: [
      { n: 1, verb: "break", topic: "reporting-verbs",            answers: ["admitted breaking", "admitted having broken", "admitted to breaking", "confessed to breaking", "owned up to breaking", "apologised for breaking", "apologized for breaking"], explain: "Анна говорит «I broke it» — признаёт свою вину: admit + -ing (admitted breaking). После admit нельзя ✗ to break." },
      { n: 2, verb: "send",  topic: "reporting-verbs",            answers: ["promised to send", "promised he would send", "promised that he would send"], explain: "Прямая речь с «I promise»: promise + to + инфинитив (promised to send). Ловушка: ✗ promised sending." },
      { n: 3, verb: "copy",  topic: "reporting-verbs",            answers: ["accused Tom of copying", "accused him of copying", "blamed Tom for copying", "blamed him for copying"], explain: "Босс говорит «You copied…!» — обвиняет: accuse + кого + of + -ing (accused Tom of copying). Ловушка: ✗ accused Tom to copy." },
      { n: 4, verb: "take",  topic: "reporting-verbs",            answers: ["denied taking", "denied having taken"], explain: "Том говорит «No, I didn't take…» — отрицает: deny + -ing (denied taking). Отрицание уже в самом глаголе, поэтому ✗ denied not taking." },
      { n: 5, verb: "go",    topic: "reporting-verbs",            answers: ["suggested going", "suggested we go", "suggested that we go", "suggested they go", "suggested that they go"], explain: "Прямая речь «Let's go…»: suggest + -ing или suggest (that) we go (suggested going). Ловушка: ✗ suggested to go." },
      { n: 6, verb: "lock",  topic: "gerund-infinitive-meaning",  answers: ["remembered locking", "remembered having locked"], explain: "Сигнал — «could still hear the click»: он помнит само действие в прошлом → remember + -ing (remembered locking). Remember + to означало бы «не забыл сделать»." },
      { n: 7, verb: "tell",  topic: "gerund-infinitive-meaning",  answers: ["forgot to tell"], explain: "Сигнал — «half the team missed it»: она не сделала то, что нужно было → forget + to + инфинитив (forgot to tell). Forgot telling значило бы «забыла, что рассказывала»." },
      { n: 8, verb: "press", topic: "gerund-infinitive-meaning",  answers: ["tried pressing"], explain: "Сигнал — «for ten seconds, but nothing changed»: он попробовал как эксперимент → try + -ing (tried pressing). Try + to — «пытался, прилагал усилие»." },
      { n: 9, verb: "join",  topic: "reporting-verbs",            answers: ["agreed to join", "promised to join"], explain: "Прямая речь «OK, I'll come…»: agree + to + инфинитив (agreed to join). Ловушка: ✗ agreed joining." }
    ]
  }

);
