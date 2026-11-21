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
    id: "story-b2-002", title: "Lost in Lisbon", level: "B2",
    box: [
      { verb: "book", forms: ["book","books","booking","booked"] },
      { verb: "take", forms: ["take","takes","taking","took","taken"] },
      { verb: "learn", forms: ["learn","learns","learning","learned","learnt"] },
      { verb: "bring", forms: ["bring","brings","bringing","brought"] },
      { verb: "speak", forms: ["speak","speaks","speaking","spoke","spoken"] },
      { verb: "spend", forms: ["spend","spends","spending","spent"] },
      { verb: "lose", forms: ["lose","loses","losing","lost"] },
      { verb: "leave", forms: ["leave","leaves","leaving","left"] },
      { verb: "rent", forms: ["rent","rents","renting","rented"] }
    ],
    text: [
      "Mia is sitting on a bench in Lisbon at midnight, and nothing has gone as planned. She wishes she (1) ___ a hotel in the centre — hers turned out to be an hour from everything. She also wishes she (2) ___ the earlier flight, because the late one landed at ten, and the last metro had already left. A taxi was the only option, but the driver did not understand her English. “If only I (3) ___ some Portuguese before the trip!” she thinks.",
      "The driver left her in the wrong district, and her phone died a minute later. She wishes she (4) ___ her charger, but it is still on her kitchen table at home. She wishes she (5) ___ Portuguese better, then she could ask a passer-by for directions. The money worries her, too. If she (6) ___ so much at the airport shops, she would have enough for another taxi now. If she were a more careful person, she (7) ___ her wallet on the tram this afternoon. And if she (8) ___ the airport before the rain started, she would be in a warm hotel room now. If she were more practical, she (9) ___ a car at the airport instead of queuing for a taxi.",
      "Suddenly an old woman sits down next to her. “Are you lost?” she asks in perfect English. Mia laughs for the first time that day, and ten minutes later she is drinking hot tea in the old woman's kitchen."
    ],
    gaps: [
      { n: 1, verb: "book", topic: "wish-if-only", answers: ["had booked"], explain: "Сожаление о прошлом: wish + Past Perfect (had booked). Сигнал — «hers turned out to be an hour from everything»: отель уже выбран, и это была ошибка." },
      { n: 2, verb: "take", topic: "wish-if-only", answers: ["had taken"], explain: "Сожаление о прошлом: wish + Past Perfect. Сигнал — «the late one landed at ten»: поздний рейс уже был, и последствие — закрытое метро." },
      { n: 3, verb: "learn", topic: "wish-if-only", answers: ["had learned","had learnt"], explain: "If only + Past Perfect — сожаление о прошлом (до поездки язык не выучили). Следствие видно сразу: водитель не понял её английский." },
      { n: 4, verb: "bring", topic: "wish-if-only", answers: ["had brought"], explain: "Сожаление о прошлом: wish + Past Perfect. Сигнал — «it is still on her kitchen table at home»: зарядку не взяли, и телефон умер." },
      { n: 5, verb: "speak", topic: "wish-if-only", answers: ["spoke","could speak"], explain: "Сожаление о настоящем: wish + Past Simple (spoke) — не о прошлом. Сигнал — «then she could ask…»: сейчас она язык не знает." },
      { n: 6, verb: "spend", topic: "mixed-conditionals", answers: ["hadn't spent","had not spent"], explain: "Смешанное условие: нереальное прошлое → результат сейчас. If + Past Perfect (hadn't spent), would have + существительное сейчас («enough for another taxi now»)." },
      { n: 7, verb: "lose", topic: "mixed-conditionals", answers: ["wouldn't have lost","would not have lost"], explain: "Смешанное условие: условие про характер сейчас (If she were more careful) → результат в прошлом: would have + V3 (wouldn't have lost her wallet this afternoon)." },
      { n: 8, verb: "leave", topic: "mixed-conditionals", answers: ["had left"], explain: "Смешанное условие: If + Past Perfect (had left, до дождя) → результат сейчас: she would be in a warm hotel room now. Сигнал — «now»." },
      { n: 9, verb: "rent", topic: "mixed-conditionals", answers: ["would have rented","could have rented"], explain: "Смешанное условие: If she were more practical (черта характера сейчас) → would have + V3 (в прошлом надо было взять машину вместо очереди на такси)." }
    ]
  },

  {
    id: "story-b2-003", title: "The Bridge in Aldwin", level: "B2",
    box: [
      { verb: "build", forms: ["build","builds","building","built"] },
      { verb: "repair", forms: ["repair","repairs","repairing","repaired"] },
      { verb: "finish", forms: ["finish","finishes","finishing","finished"] },
      { verb: "close", forms: ["close","closes","closing","closed"] },
      { verb: "say", forms: ["say","says","saying","said"] },
      { verb: "ask", forms: ["ask","asks","asking","asked"] },
      { verb: "pay", forms: ["pay","pays","paying","paid"] },
      { verb: "leave", forms: ["leave","leaves","leaving","left"] },
      { verb: "take", forms: ["take","takes","taking","took","taken"] }
    ],
    text: [
      "I came to Aldwin to photograph its famous stone bridge for a travel magazine. The bridge (1) ___ by the Romans, although nobody can prove it. Unfortunately, it is closed. Right now it (2) ___, and a sign says that the work (3) ___ by the end of the year.",
      "When I arrived last Saturday, the road to the bridge (4) ___ by workers, so I had to wait at the barrier. An old man next to me smiled. “It (5) ___ in the local newspaper that the bridge will reopen in June, but nobody believes it,” he said. “Visitors (6) ___ not to climb over the barrier, because the road is narrow.”",
      "He told me about his childhood. In those days tolls (7) ___ by every driver who crossed the bridge, and the money paid for the repairs. “This time nothing (8) ___ to chance,” he said. “So come back in June and have your photo (9) ___ on the new bridge by the mayor himself!” I booked a room for June."
    ],
    gaps: [
      { n: 1, verb: "build", topic: "passive-advanced", answers: ["is said to have been built","is believed to have been built","is thought to have been built"], explain: "Безличный пассив о давнем событии: is said to have been built (to have + V3, раньше, чем «сейчас»). Сигнал — «although nobody can prove it»: слух, не доказанный факт." },
      { n: 2, verb: "repair", topic: "passive-advanced", answers: ["is being repaired"], explain: "Сейчас, в момент речи: Present Continuous Passive — is being repaired. Сигнал — «Right now» и «it is closed»." },
      { n: 3, verb: "finish", topic: "passive-advanced", answers: ["will have been finished"], explain: "К определённому сроку в будущем: Future Perfect Passive — will have been finished. Сигнал — «by the end of the year»." },
      { n: 4, verb: "close", topic: "passive-advanced", answers: ["was being closed"], explain: "Длительное действие в момент прошлого: Past Continuous Passive — was being closed. Сигнал — «When I arrived… I had to wait»: рабочие делали это именно тогда." },
      { n: 5, verb: "say", topic: "passive-advanced", answers: ["is said"], explain: "Безличный пассив: It is said that… (так пишут в газетах). Сигнал — «in the local newspaper»: источник слуха, подлежащее — it." },
      { n: 6, verb: "ask", topic: "passive-advanced", answers: ["are asked"], explain: "Просьба к посетителям: Present Simple Passive — are asked not to climb. Деятель не важен (кто просит — неизвестно или очевидно)." },
      { n: 7, verb: "pay", topic: "passive-advanced", answers: ["were paid"], explain: "Повторявшееся в прошлом: Past Simple Passive — were paid. Сигнал — «In those days»: сбор платили в прошлом, исполнитель — every driver." },
      { n: 8, verb: "leave", topic: "passive-advanced", answers: ["is left"], explain: "Общая истина о нынешнем проекте: Present Simple Passive — is left (to chance). Сигнал — «This time» в противопоставлении с прошлым." },
      { n: 9, verb: "take", topic: "passive-advanced", answers: ["taken"], explain: "Have something done: have your photo taken (V3 после предмета). Фотограф — «by the mayor», сам себя снять нельзя; поэтому не ✗ have your photo take." }
    ]
  },

  {
    id: "story-b2-004", title: "Rob's Plan", level: "B2",
    box: [
      { verb: "lie", forms: ["lie","lies","lying","lay","lain"] },
      { verb: "finish", forms: ["finish","finishes","finishing","finished"] },
      { verb: "work", forms: ["work","works","working","worked"] },
      { verb: "write", forms: ["write","writes","writing","wrote","written"] },
      { verb: "save", forms: ["save","saves","saving","saved"] },
      { verb: "wait", forms: ["wait","waits","waiting","waited"] },
      { verb: "open", forms: ["open","opens","opening","opened"] },
      { verb: "look", forms: ["look","looks","looking","looked"] },
      { verb: "hear", forms: ["hear","hears","hearing","heard"] }
    ],
    text: [
      "Rob has a busy summer ahead, and this time he wants everything to go well. “This time next week,” he tells his sister Ella, “I (1) ___ on a beach in Spain!” First, though, he has to pass his exams. By Friday he (2) ___ his last one, and then he will be free. Ella, a doctor, only laughs. She (3) ___ in the hospital all summer, as usual, so she will not see much sun.",
      "Rob has big plans. By September he (4) ___ the first chapter of his novel, and by the time he is thirty he (5) ___ enough money for a small flat. “You are very organised this year,” says Ella. “Because last year was a disaster,” Rob answers.",
      "(6) ___ for a late train, he read a book on the platform and did not notice that the right train had left. (7) ___ the door of his hotel room, he saw a stranger standing there. He found a small café, (8) ___ out over the harbour, and ordered a coffee. (9) ___ the news about the delay, Ella called him at once and offered to help. That is why this year he plans every detail."
    ],
    gaps: [
      { n: 1, verb: "lie", topic: "future-continuous-perfect", answers: ["will be lying"], explain: "Длительное действие в конкретный момент будущего: Future Continuous — will be lying. Сигнал — «This time next week»." },
      { n: 2, verb: "finish", topic: "future-continuous-perfect", answers: ["will have finished"], explain: "Действие завершится к сроку: Future Perfect — will have finished. Сигнал — «By Friday»." },
      { n: 3, verb: "work", topic: "future-continuous-perfect", answers: ["will be working"], explain: "Длительное действие в будущем («всё лето»): Future Continuous — will be working. Сигнал — «all summer»." },
      { n: 4, verb: "write", topic: "future-continuous-perfect", answers: ["will have written"], explain: "К сроку будет готово: Future Perfect — will have written. Сигнал — «By September»." },
      { n: 5, verb: "save", topic: "future-continuous-perfect", answers: ["will have saved"], explain: "Результат к определённому возрасту: Future Perfect — will have saved. Сигнал — «by the time he is thirty»." },
      { n: 6, verb: "wait", topic: "participle-clauses", answers: ["Waiting"], explain: "Причастный оборот одновременного действия: Waiting for a late train, he read… Подлежащее одно (he) — Rob ждал и читал." },
      { n: 7, verb: "open", topic: "participle-clauses", answers: ["Opening"], explain: "Одно действие сразу за другим, подлежащее то же (he): Opening the door, he saw a stranger." },
      { n: 8, verb: "look", topic: "participle-clauses", answers: ["looking"], explain: "Причастие как определение к café: a small café, looking out over the harbour — «выходящее на гавань»." },
      { n: 9, verb: "hear", topic: "participle-clauses", answers: ["Having heard"], explain: "Действие раньше главного, подлежащее одно (Ella): Having heard the news, Ella called him. Having + V3 показывает, что сначала услышала, потом позвонила." }
    ]
  },

  {
    id: "story-b2-005", title: "Olga's New Start in Canada", level: "B2",
    box: [
      { verb: "paint", forms: ["paint","paints","painting","painted","repaint","repainted"] },
      { verb: "translate", forms: ["translate","translates","translating","translated"] },
      { verb: "repair", forms: ["repair","repairs","repairing","repaired"] },
      { verb: "drive", forms: ["drive","drives","driving","drove","driven"] },
      { verb: "wake", forms: ["wake","wakes","waking","woke","woken"] },
      { verb: "check", forms: ["check","checks","checking","checked"] },
      { verb: "work", forms: ["work","works","working","worked"] },
      { verb: "cut", forms: ["cut","cuts","cutting"] },
      { verb: "live", forms: ["live","lives","living","lived"] }
    ],
    text: [
      "When Olga's family arrived in Toronto, their new flat looked sad: the walls were an ugly yellow, so they (1) ___ before unpacking. Olga needed a job quickly, but her university certificates were in Russian, so she (2) ___ into English by an official translator. The night before her first online interview her laptop died, and she (3) ___ in a small shop around the corner. She got the job.",
      "The office was in the suburbs, so Olga had to drive to work every day, on the right-hand side of the road, which felt wrong at first. Now, a month later, she (4) ___ on the right and even enjoys the journey. Her son, however, is still (5) ___ up at six for his early school. His room is next to the noisy heating, so next week the family (6) ___ by an engineer.",
      "Olga now works from home on Fridays, but she (7) ___ alone all day yet, because the flat is too quiet. Before her first big presentation her hair was too long after the move, so she (8) ___ at the barber's on the corner. It is not always easy, but Olga is sure that in a year they (9) ___ here like locals."
    ],
    gaps: [
      { n: 1, verb: "paint", topic: "causative-have", answers: ["had them painted","had the walls painted","had them repainted","had the walls repainted","got them painted","got the walls painted"], explain: "Стены красили нанятые люди, не сама семья → have + предмет + V3: had them painted. Ловушка: ✗ they painted — тогда красили сами." },
      { n: 2, verb: "translate", topic: "causative-have", answers: ["had them translated","had the certificates translated","got them translated","got the certificates translated"], explain: "Перевёл «an official translator» — услугу заказали: had them translated (V3 после предмета), не ✗ had them translate." },
      { n: 3, verb: "repair", topic: "causative-have", answers: ["had it repaired","had her laptop repaired","had the laptop repaired","got it repaired","got her laptop repaired","got the laptop repaired"], explain: "Чинил мастер в магазине — услугу получила, не делала сама: had it repaired. Предмет (it) стоит между have и V3." },
      { n: 4, verb: "drive", topic: "be-get-used-to", answers: ["is used to driving","'s used to driving","has got used to driving","'s got used to driving","has gotten used to driving","'s gotten used to driving","is getting used to driving","'s getting used to driving"], explain: "Сигнал — «Now, a month later» (переход от прошлого к настоящему) и «felt wrong at first»: уже привыкла → be used to + -ing (или has got used to): is used to driving. Ловушка: ✗ is used to drive." },
      { n: 5, verb: "wake", topic: "be-get-used-to", answers: ["getting used to waking"], explain: "Сигнал — «still»: процесс привыкания ещё идёт → get used to + -ing: (is still) getting used to waking. Перед пропуском уже стоит is still, поэтому нужна форма с -ing." },
      { n: 6, verb: "check", topic: "causative-have", answers: ["are having it checked","'re having it checked","are going to have it checked","'re going to have it checked","are having the heating checked","'re having the heating checked","are going to have the heating checked","'re going to have the heating checked"], explain: "Сигнал — «next week» и «by an engineer»: услуга запланирована → are having it checked (Present Continuous для планов) / are going to have it checked." },
      { n: 7, verb: "work", topic: "be-get-used-to", answers: ["isn't used to working","is not used to working","is still not used to working","'s still not used to working","hasn't got used to working","has not got used to working","hasn't gotten used to working","has not gotten used to working"], explain: "Сигнал — «yet» и «the flat is too quiet»: ещё не привыкла → отрицание: isn't used to working (после used to — глагол с -ing). Ловушка: ✗ isn't used to work." },
      { n: 8, verb: "cut", topic: "causative-have", answers: ["had it cut","had her hair cut","got it cut","got her hair cut"], explain: "Сигнал — «her hair was too long» и «at the barber's»: волосы стригли в парикмахерской, не сама → had it cut / had her hair cut (V3 у cut совпадает с V1: cut — cut — cut)." },
      { n: 9, verb: "live", topic: "be-get-used-to", answers: ["will be used to living","'ll be used to living","will have got used to living","'ll have got used to living","will have gotten used to living","'ll have gotten used to living"], explain: "Сигнал — «in a year» и «like locals»: прогноз, что к тому времени привыкнут → will be used to living (или will have got used to living). Продолжительное will be living здесь не подходит — речь о привычке, а не о процессе." }
    ]
  },

  {
    id: "story-b2-006", title: "The Rumour at Work", level: "B2",
    box: [
      { verb: "break", forms: ["break","breaks","breaking","broke","broken"] },
      { verb: "send", forms: ["send","sends","sending","sent"] },
      { verb: "copy", forms: ["copy","copies","copying","copied"] },
      { verb: "take", forms: ["take","takes","taking","took","taken"] },
      { verb: "go", forms: ["go","goes","going","went","gone"] },
      { verb: "lock", forms: ["lock","locks","locking","locked"] },
      { verb: "tell", forms: ["tell","tells","telling","told"] },
      { verb: "press", forms: ["press","presses","pressing","pressed"] },
      { verb: "join", forms: ["join","joins","joining","joined"] }
    ],
    text: [
      "On Monday morning Anna was printing a presentation for an important client when the office printer stopped working. “I'm sorry, I broke it when I was moving the paper,” she said. She (1) ___ the printer, so nobody was angry. The boss, Mr Clark, said, “I will send the files to the client by email before noon, I promise.” He (2) ___ the presentation before noon, and he did.",
      "An hour later the client phoned, and Mr Clark's face changed. The main design looked exactly like a competitor's logo. He turned to Tom, the designer, and shouted, “You copied it!” He (3) ___ the design from the competitor in front of everyone. “No, I didn't take the idea from anyone,” Tom answered. He (4) ___ the idea from anyone, but the boss did not believe him.",
      "At lunch Anna said, “Let's go to the boss's office and show him your first sketches.” She (5) ___ to the boss's office with the sketches. Tom was sure they existed, because he (6) ___ them in his drawer on Friday evening, and he could still hear the click of the key. But the drawer was empty. Then the cleaner explained everything: Anna had borrowed the sketches to scan them, but she (7) ___ Tom about it. Tom found the papers in the copier room, but the old scanner did not start, so he (8) ___ the green button for ten seconds, and at last it worked. “Will you join us at the meeting with the client?” Mr Clark asked quietly. Tom said, “OK, I'll come.” He (9) ___ the others there, and the client saw the proof."
    ],
    gaps: [
      { n: 1, verb: "break", topic: "reporting-verbs", answers: ["admitted breaking","admitted having broken","admitted to breaking","confessed to breaking","owned up to breaking","apologised for breaking","apologized for breaking"], explain: "Анна говорит «I broke it» — признаёт вину: admit + -ing (admitted breaking). После admit нельзя ✗ to break." },
      { n: 2, verb: "send", topic: "reporting-verbs", answers: ["promised to send","promised he would send","promised that he would send"], explain: "Прямая речь с «I promise»: promise + to + инфинитив (promised to send). Ловушка: ✗ promised sending." },
      { n: 3, verb: "copy", topic: "reporting-verbs", answers: ["accused Tom of copying","accused him of copying","blamed Tom for copying","blamed him for copying"], explain: "Босс кричит «You copied it!» — обвиняет: accuse + кого + of + -ing (accused Tom of copying). Ловушка: ✗ accused Tom to copy." },
      { n: 4, verb: "take", topic: "reporting-verbs", answers: ["denied taking","denied having taken"], explain: "Том говорит «No, I didn't take…» — отрицает: deny + -ing (denied taking). Отрицание уже в глаголе, поэтому ✗ denied not taking." },
      { n: 5, verb: "go", topic: "reporting-verbs", answers: ["suggested going","suggested we go","suggested that we go","suggested they go","suggested that they go"], explain: "Прямая речь «Let's go…»: suggest + -ing или suggest (that) we go (suggested going). Ловушка: ✗ suggested to go." },
      { n: 6, verb: "lock", topic: "gerund-infinitive-meaning", answers: ["remembered locking","remembered having locked"], explain: "Сигнал — «he could still hear the click of the key»: он помнит само действие в прошлом → remember + -ing (remembered locking). Remember + to означало бы «не забыл сделать»." },
      { n: 7, verb: "tell", topic: "gerund-infinitive-meaning", answers: ["forgot to tell"], explain: "Сигнал — «the sketches… the drawer was empty»: Анна не сделала то, что нужно было → forget + to + инфинитив (forgot to tell). Forgot telling значило бы «забыла, что рассказывала»." },
      { n: 8, verb: "press", topic: "gerund-infinitive-meaning", answers: ["tried pressing"], explain: "Сигнал — «the old scanner did not start… ten seconds… at last it worked»: он пробовал как эксперимент → try + -ing (tried pressing). Try + to — «пытался, прилагал усилие»." },
      { n: 9, verb: "join", topic: "reporting-verbs", answers: ["agreed to join","promised to join"], explain: "Прямая речь «OK, I'll come»: agree + to + инфинитив (agreed to join). Ловушка: ✗ agreed joining." }
    ]
  }

);
