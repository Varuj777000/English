// =====================================================================
// Мини-рассказы с рамкой глаголов — Present Perfect и Past Perfect.
// Формат — см. заголовок data/stories/past.js.
// В пропуск вписывается вся глагольная группа (have been looking,
// hadn't missed...); вспомогательные have / had и been в рамку не входят.
// =====================================================================

DATA.stories.push(

  {
    id: "story-perfect-001", title: "Moving Day", level: "B1",
    box: [
      { verb: "live",  forms: ["live", "lives", "living", "lived"] },
      { verb: "look",  forms: ["look", "looks", "looking", "looked"] },
      { verb: "visit", forms: ["visit", "visits", "visiting", "visited"] },
      { verb: "find",  forms: ["find", "finds", "finding", "found"] },
      { verb: "call",  forms: ["call", "calls", "calling", "called"] },
      { verb: "pack",  forms: ["pack", "packs", "packing", "packed"] },
      { verb: "fill",  forms: ["fill", "fills", "filling", "filled"] },
      { verb: "paint", forms: ["paint", "paints", "painting", "painted"] },
      { verb: "sleep", forms: ["sleep", "sleeps", "sleeping", "slept"] }
    ],
    text: [
      "Sam and his sister Nora (1) ___ in the same small flat for six years. They (2) ___ for a bigger place since March. So far they (3) ___ five flats, but none of them was right.",
      "Today Nora (4) ___ a lovely flat near the park! She (5) ___ the owner already, and he agrees to the price. Sam (6) ___ all their books into boxes since breakfast. He (7) ___ twelve boxes so far, and he is exhausted. Nora (8) ___ the walls of the new flat all week, so she is covered in paint. They (9) ___ well this week because they are so busy."
    ],
    gaps: [
      { n: 1, verb: "live",  topic: "present-perfect-simple-vs-continuous", answers: ["have lived", "have been living"], explain: "for six years — живут и сейчас: have lived (состояние) или have been living." },
      { n: 2, verb: "look",  topic: "present-perfect-simple-vs-continuous", answers: ["have been looking"], explain: "since March + процесс, который идёт до сих пор: have been looking." },
      { n: 3, verb: "visit", topic: "present-perfect",                      answers: ["have visited"], explain: "So far + количество (five flats) — результат: have visited." },
      { n: 4, verb: "find",  topic: "present-perfect",                      answers: ["has found"], explain: "Today + только что случилось, результат важен: has found (find – found – found)." },
      { n: 5, verb: "call",  topic: "present-perfect",                      answers: ["has called"], explain: "already — между has и V3: has already called (в пропуске только has called)." },
      { n: 6, verb: "pack",  topic: "present-perfect-simple-vs-continuous", answers: ["has been packing"], explain: "since breakfast + процесс: has been packing." },
      { n: 7, verb: "fill",  topic: "present-perfect",                      answers: ["has filled"], explain: "Названо количество (twelve boxes) — результат: has filled." },
      { n: 8, verb: "paint", topic: "present-perfect-simple-vs-continuous", answers: ["has been painting"], explain: "all week + следствие (в краске): has been painting." },
      { n: 9, verb: "sleep", topic: "present-perfect",                      answers: ["haven't slept", "have not slept", "haven't been sleeping", "have not been sleeping"], explain: "Отрицание не теряем: haven't slept (sleep – slept – slept) или haven't been sleeping." }
    ]
  },

  {
    id: "story-perfect-002", title: "A Strange Morning", level: "B1",
    box: [
      { verb: "shine",  forms: ["shine", "shines", "shining", "shone"] },
      { verb: "forget", forms: ["forget", "forgets", "forgetting", "forgot", "forgotten"] },
      { verb: "eat",    forms: ["eat", "eats", "eating", "ate", "eaten"] },
      { verb: "spill",  forms: ["spill", "spills", "spilling", "spilled", "spilt"] },
      { verb: "carry",  forms: ["carry", "carries", "carrying", "carried"] },
      { verb: "search", forms: ["search", "searches", "searching", "searched"] },
      { verb: "leave",  forms: ["leave", "leaves", "leaving", "left"] },
      { verb: "arrive", forms: ["arrive", "arrives", "arriving", "arrived"] },
      { verb: "miss",   forms: ["miss", "misses", "missing", "missed"] }
    ],
    text: [
      "When Maria woke up, the sun (1) ___ for hours. She realised she (2) ___ to set her alarm. By the time she got downstairs, her brother (3) ___ all the toast. The kitchen was a mess: someone (4) ___ the milk everywhere.",
      "Her bag was missing because her dog (5) ___ it into the garden. Maria (6) ___ for twenty minutes when she finally found it under the table. She ran to the bus stop, but the bus (7) ___ already. Her friend, who (8) ___ at the stop earlier, offered her a lift. Maria was relieved: she (9) ___ the meeting after all."
    ],
    gaps: [
      { n: 1, verb: "shine",  topic: "past-perfect-continuous", answers: ["had been shining"], explain: "for hours + процесс до момента пробуждения: had been shining." },
      { n: 2, verb: "forget", topic: "past-perfect",            answers: ["had forgotten"], explain: "Забыла раньше, чем поняла: had forgotten (forget – forgot – forgotten)." },
      { n: 3, verb: "eat",    topic: "past-perfect",            answers: ["had eaten"], explain: "By the time + Past Simple → Past Perfect: had eaten (eat – ate – eaten)." },
      { n: 4, verb: "spill",  topic: "past-perfect",            answers: ["had spilled", "had spilt"], explain: "Молоко было разлито раньше: had spilled / had spilt." },
      { n: 5, verb: "carry",  topic: "past-perfect",            answers: ["had carried"], explain: "Собака унесла сумку раньше, чем Мария её искала: had carried." },
      { n: 6, verb: "search", topic: "past-perfect-continuous", answers: ["had been searching"], explain: "for twenty minutes + процесс до момента, когда нашла: had been searching." },
      { n: 7, verb: "leave",  topic: "past-perfect",            answers: ["had left"], explain: "already — автобус ушёл раньше: had left (leave – left – left); в пропуске только had left." },
      { n: 8, verb: "arrive", topic: "past-perfect",            answers: ["had arrived"], explain: "Подруга пришла на остановку раньше: had arrived." },
      { n: 9, verb: "miss",   topic: "past-perfect",            answers: ["hadn't missed", "had not missed"], explain: "Отрицание: hadn't missed — не пропустила встречу." }
    ]
  },

  {
    id: "story-perfect-003", title: "Exam Week", level: "B1",
    box: [
      { verb: "study",  forms: ["study", "studies", "studying", "studied"] },
      { verb: "take",   forms: ["take", "takes", "taking", "took", "taken"] },
      { verb: "revise", forms: ["revise", "revises", "revising", "revised"] },
      { verb: "use",    forms: ["use", "uses", "using", "used"] },
      { verb: "play",   forms: ["play", "plays", "playing", "played"] },
      { verb: "open",   forms: ["open", "opens", "opening", "opened"] },
      { verb: "write",  forms: ["write", "writes", "writing", "wrote", "written"] },
      { verb: "read",   forms: ["read", "reads", "reading"] },
      { verb: "work",   forms: ["work", "works", "working", "worked"] }
    ],
    text: [
      "Anna (1) ___ for her exams since January. She (2) ___ two of them already, and both went well. Her friend Ben (3) ___ his notes yet, so he is panicking. He (4) ___ his phone all week instead.",
      "When Anna called him last night, he (5) ___ games since breakfast. He admitted he (6) ___ any of the books. Before the call, Anna (7) ___ him a study plan, and he promised to follow it. So far Ben (8) ___ only two pages, but he is trying. They (9) ___ together for two hours now, and Ben feels more confident."
    ],
    gaps: [
      { n: 1, verb: "study",  topic: "present-perfect-simple-vs-continuous", answers: ["has been studying"], explain: "since January + процесс до сих пор: has been studying." },
      { n: 2, verb: "take",   topic: "present-perfect",                      answers: ["has taken"], explain: "two of them — количество, результат: has taken (take – took – taken); already стоит между has и V3." },
      { n: 3, verb: "revise", topic: "present-perfect",                      answers: ["hasn't revised", "has not revised"], explain: "yet в конце — отрицание: hasn't revised." },
      { n: 4, verb: "use",    topic: "present-perfect-simple-vs-continuous", answers: ["has been using"], explain: "all week + процесс: has been using." },
      { n: 5, verb: "play",   topic: "past-perfect-continuous",              answers: ["had been playing"], explain: "since breakfast + до момента звонка в прошлом: had been playing." },
      { n: 6, verb: "open",   topic: "past-perfect",                         answers: ["hadn't opened", "had not opened"], explain: "He admitted... — по смыслу «не открыл» раньше: hadn't opened." },
      { n: 7, verb: "write",  topic: "past-perfect",                         answers: ["had written"], explain: "Before the call — раньше звонка: had written (write – wrote – written)." },
      { n: 8, verb: "read",   topic: "present-perfect",                      answers: ["has read"], explain: "So far + количество (two pages): has read (V3 read пишется так же, читается /red/)." },
      { n: 9, verb: "work",   topic: "present-perfect-simple-vs-continuous", answers: ["have been working"], explain: "for two hours now + процесс: have been working." }
    ]
  }

);
