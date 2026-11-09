// =====================================================================
// placement-test.js — вопросы СТАРТОВОГО ТЕСТА уровня.
//
// Формат вопроса:
// {
//   id: "g-a1-1",            // уникальный ID
//   section: "grammar",      // раздел: grammar | vocabulary | reading
//   level: "A1",             // уровень вопроса (A1–C1)
//   topic: "to-be",          // тема из data/topics.js (по ней ищутся слабые места)
//   type: "choice",          // в тесте только выбор варианта
//   q: "My parents ___ doctors.",
//   options: ["is", "are", "am", "be"],   // порядок перемешивается при показе
//   answer: "are",
//   explain: "...",          // объяснение (показывается в разборе ошибок)
//   passage: "tp-a1"         // только для чтения: ID текста из DATA.testPassages
// }
//
// Внутри раздела вопросы показываются от A1 к C1.
// ВАЖНО: у каждого вопроса должен быть ровно ОДИН правильный вариант.
// =====================================================================

DATA.placement.push(

  // ======================= ГРАММАТИКА =======================

  // ---------- A1 ----------
  {
    id: "g-a1-1", section: "grammar", level: "A1", topic: "to-be", type: "choice",
    q: "My parents ___ doctors.",
    options: ["is", "are", "am", "be"], answer: "are",
    explain: "parents — множественное число, поэтому are."
  },
  {
    id: "g-a1-2", section: "grammar", level: "A1", topic: "present-simple", type: "choice",
    q: "She ___ in London.",
    options: ["live", "lives", "living", "is live"], answer: "lives",
    explain: "Present Simple: с she к глаголу добавляется -s."
  },
  {
    id: "g-a1-3", section: "grammar", level: "A1", topic: "question-words", type: "choice",
    q: "___ do you live? — In Moscow.",
    options: ["What", "Where", "Who", "Whose"], answer: "Where",
    explain: "Where — где. Ответ «In Moscow» — это место."
  },
  {
    id: "g-a1-4", section: "grammar", level: "A1", topic: "there-is-are", type: "choice",
    q: "___ two banks in our street.",
    options: ["There is", "There are", "It is", "They are"], answer: "There are",
    explain: "Сообщаем, что что-то где-то есть, во множественном числе — there are."
  },
  {
    id: "g-a1-5", section: "grammar", level: "A1", topic: "present-continuous", type: "choice",
    q: "Look! The children ___ in the garden.",
    options: ["play", "plays", "are playing", "is playing"], answer: "are playing",
    explain: "Look! — действие происходит сейчас: are + -ing (children — множественное число)."
  },
  {
    id: "g-a1-6", section: "grammar", level: "A1", topic: "articles-basic", type: "choice",
    q: "She is ___ engineer.",
    options: ["a", "an", "the", "—"], answer: "an",
    explain: "С профессией нужен артикль; engineer начинается с гласного звука, поэтому an."
  },

  // ---------- A2 ----------
  {
    id: "g-a2-1", section: "grammar", level: "A2", topic: "past-simple", type: "choice",
    q: "We ___ to the cinema last night.",
    options: ["go", "went", "have gone", "were go"], answer: "went",
    explain: "last night — законченное время в прошлом, нужен Past Simple: go → went."
  },
  {
    id: "g-a2-2", section: "grammar", level: "A2", topic: "present-perfect", type: "choice",
    q: "She ___ in this company since 2019.",
    options: ["works", "worked", "has worked", "is working"], answer: "has worked",
    explain: "since + начало периода, который длится до сих пор → Present Perfect."
  },
  {
    id: "g-a2-3", section: "grammar", level: "A2", topic: "past-simple-vs-present-perfect", type: "choice",
    q: "I ___ him two days ago.",
    options: ["have seen", "saw", "have saw", "see"], answer: "saw",
    explain: "ago — указано законченное время, поэтому Past Simple, а не Present Perfect."
  },
  {
    id: "g-a2-4", section: "grammar", level: "A2", topic: "comparatives-superlatives", type: "choice",
    q: "This phone is ___ than my old one.",
    options: ["more good", "better", "best", "gooder"], answer: "better",
    explain: "good → better → the best (неправильная форма)."
  },
  {
    id: "g-a2-5", section: "grammar", level: "A2", topic: "prepositions-time", type: "choice",
    q: "The party is ___ Saturday.",
    options: ["in", "on", "at", "—"], answer: "on",
    explain: "С днями недели — on."
  },
  {
    id: "g-a2-6", section: "grammar", level: "A2", topic: "modals-must-have-to", type: "choice",
    q: "You ___ pay — the museum is free today.",
    options: ["mustn't", "don't have to", "can't", "shouldn't"], answer: "don't have to",
    explain: "don't have to — «не обязательно». mustn't — «нельзя», здесь не подходит."
  },

  // ---------- B1 ----------
  {
    id: "g-b1-1", section: "grammar", level: "B1", topic: "future-time-clauses", type: "choice",
    q: "I'll call you when I ___ home.",
    options: ["get", "will get", "got", "would get"], answer: "get",
    explain: "После when в значении будущего — настоящее время, не will."
  },
  {
    id: "g-b1-2", section: "grammar", level: "B1", topic: "second-conditional", type: "choice",
    q: "If I ___ more money, I would buy a new car.",
    options: ["have", "had", "will have", "would have"], answer: "had",
    explain: "Второй тип условных: If + Past Simple, would + глагол."
  },
  {
    id: "g-b1-3", section: "grammar", level: "B1", topic: "present-perfect-continuous", type: "choice",
    q: "It ___ since this morning, and the streets are wet.",
    options: ["rains", "is raining", "has been raining", "rained"], answer: "has been raining",
    explain: "Действие началось в прошлом (since this morning) и продолжается → Present Perfect Continuous."
  },
  {
    id: "g-b1-4", section: "grammar", level: "B1", topic: "passive-present-past", type: "choice",
    q: "This bridge ___ in 1890.",
    options: ["built", "was built", "has built", "is building"], answer: "was built",
    explain: "Мост не строил сам себя — нужен пассив в прошедшем: was built."
  },
  {
    id: "g-b1-5", section: "grammar", level: "B1", topic: "reported-speech", type: "choice",
    q: "He asked me where ___.",
    options: ["I lived", "did I live", "do I live", "I do live"], answer: "I lived",
    explain: "В косвенном вопросе прямой порядок слов и нет do/did: where I lived."
  },
  {
    id: "g-b1-6", section: "grammar", level: "B1", topic: "used-to", type: "choice",
    q: "I ___ play football, but now I don't.",
    options: ["use to", "used to", "was used to", "am used to"], answer: "used to",
    explain: "used to + глагол — привычка в прошлом, которой больше нет."
  },

  // ---------- B2 ----------
  {
    id: "g-b2-1", section: "grammar", level: "B2", topic: "third-conditional", type: "choice",
    q: "If we had left earlier, we ___ the train.",
    options: ["wouldn't miss", "wouldn't have missed", "didn't miss", "hadn't missed"], answer: "wouldn't have missed",
    explain: "Третий тип: If + had V3, would have + V3."
  },
  {
    id: "g-b2-2", section: "grammar", level: "B2", topic: "wish-if-only", type: "choice",
    q: "I wish I ___ that to her yesterday. Now she's angry.",
    options: ["didn't say", "hadn't said", "wouldn't say", "don't say"], answer: "hadn't said",
    explain: "Сожаление о прошлом: wish + Past Perfect."
  },
  {
    id: "g-b2-3", section: "grammar", level: "B2", topic: "modals-past", type: "choice",
    q: "You ___ me! I would have helped you.",
    options: ["should tell", "should have told", "must have told", "had to tell"], answer: "should have told",
    explain: "should have + V3 — «следовало сделать (но не сделал)»."
  },
  {
    id: "g-b2-4", section: "grammar", level: "B2", topic: "passive-advanced", type: "choice",
    q: "He ___ to be the richest man in the city.",
    options: ["says", "is said", "said", "is saying"], answer: "is said",
    explain: "He is said to be... — «Говорят, что он...»."
  },
  {
    id: "g-b2-5", section: "grammar", level: "B2", topic: "future-continuous-perfect", type: "choice",
    q: "Don't call me at eight — I ___ dinner then.",
    options: ["will have had", "will be having", "have had", "was having"], answer: "will be having",
    explain: "Действие будет в процессе в конкретный момент будущего → Future Continuous."
  },

  // ---------- C1 ----------
  {
    id: "g-c1-1", section: "grammar", level: "C1", topic: "inversion", type: "choice",
    q: "Never ___ such a beautiful sunset.",
    options: ["I have seen", "have I seen", "I saw", "did I saw"], answer: "have I seen",
    explain: "После Never в начале предложения — инверсия, как в вопросе."
  },
  {
    id: "g-c1-2", section: "grammar", level: "C1", topic: "inversion", type: "choice",
    q: "___ you need any help, just call me.",
    options: ["Should", "Would", "Had", "Were"], answer: "Should",
    explain: "Should you need... = If you need... (условие с инверсией)."
  },
  {
    id: "g-c1-3", section: "grammar", level: "C1", topic: "cleft-sentences", type: "choice",
    q: "___ I need right now is a long holiday.",
    options: ["That", "What", "Which", "It"], answer: "What",
    explain: "What I need is... — «Что мне нужно, так это...»."
  },
  {
    id: "g-c1-4", section: "grammar", level: "C1", topic: "participle-clauses", type: "choice",
    q: "___ the report, she sent it to her boss.",
    options: ["Having finished", "Finished", "Being finished", "Have finished"], answer: "Having finished",
    explain: "Having + V3 — действие, которое закончилось до следующего."
  },
  {
    id: "g-c1-5", section: "grammar", level: "C1", topic: "mixed-conditionals", type: "choice",
    q: "If I had taken that job, I ___ rich now.",
    options: ["would be", "would have been", "will be", "am"], answer: "would be",
    explain: "Условие в прошлом, результат сейчас (now) → would + глагол."
  },

  // ======================= ЛЕКСИКА =======================

  // ---------- A1 ----------
  {
    id: "v-a1-1", section: "vocabulary", level: "A1", topic: "vocab-daily-life", type: "choice",
    q: "I'm hungry. Let's have ___.",
    options: ["lunch", "a shower", "a sleep", "homework"], answer: "lunch",
    explain: "hungry — голодный, значит, нужен обед: lunch."
  },
  {
    id: "v-a1-2", section: "vocabulary", level: "A1", topic: "vocab-daily-life", type: "choice",
    q: "The opposite of «cheap» is ___.",
    options: ["expensive", "small", "easy", "old"], answer: "expensive",
    explain: "cheap — дешёвый, expensive — дорогой."
  },
  {
    id: "v-a1-3", section: "vocabulary", level: "A1", topic: "vocab-daily-life", type: "choice",
    q: "My mother's brother is my ___.",
    options: ["uncle", "cousin", "nephew", "grandfather"], answer: "uncle",
    explain: "Брат мамы — дядя: uncle."
  },
  {
    id: "v-a1-4", section: "vocabulary", level: "A1", topic: "vocab-daily-life", type: "choice",
    q: "What time do you usually ___ up in the morning?",
    options: ["get", "go", "make", "take"], answer: "get",
    explain: "get up — вставать."
  },

  // ---------- A2 ----------
  {
    id: "v-a2-1", section: "vocabulary", level: "A2", topic: "vocab-travel", type: "choice",
    q: "You need to show your ___ before you get on the plane.",
    options: ["boarding pass", "receipt", "menu", "timetable"], answer: "boarding pass",
    explain: "boarding pass — посадочный талон."
  },
  {
    id: "v-a2-2", section: "vocabulary", level: "A2", topic: "collocations-make-do", type: "choice",
    q: "I always ___ my homework after dinner.",
    options: ["do", "make", "have", "take"], answer: "do",
    explain: "do homework — делать домашнее задание."
  },
  {
    id: "v-a2-3", section: "vocabulary", level: "A2", topic: "vocab-work", type: "choice",
    q: "She earns a good ___ as a programmer.",
    options: ["salary", "price", "cost", "bill"], answer: "salary",
    explain: "salary — зарплата."
  },
  {
    id: "v-a2-4", section: "vocabulary", level: "A2", topic: "vocab-travel", type: "choice",
    q: "I'd like to ___ a table for two, please.",
    options: ["book", "order", "take", "buy"], answer: "book",
    explain: "book a table — забронировать столик. order — заказывать еду."
  },

  // ---------- B1 ----------
  {
    id: "v-b1-1", section: "vocabulary", level: "B1", topic: "confusing-words", type: "choice",
    q: "Can you ___ me your pen for a minute?",
    options: ["lend", "borrow", "take", "keep"], answer: "lend",
    explain: "lend — дать на время. borrow — взять на время (у кого-то)."
  },
  {
    id: "v-b1-2", section: "vocabulary", level: "B1", topic: "phrasal-verbs-common", type: "choice",
    q: "We've ___ milk. Can you buy some?",
    options: ["run out of", "run into", "run away", "run over"], answer: "run out of",
    explain: "run out of — закончиться (о запасах)."
  },
  {
    id: "v-b1-3", section: "vocabulary", level: "B1", topic: "vocab-feelings-character", type: "choice",
    q: "He always keeps his promises. He's very ___.",
    options: ["reliable", "generous", "confident", "shy"], answer: "reliable",
    explain: "reliable — надёжный (на него можно положиться)."
  },
  {
    id: "v-b1-4", section: "vocabulary", level: "B1", topic: "word-formation", type: "choice",
    q: "It's ___ to learn a language in a week.",
    options: ["impossible", "unpossible", "dispossible", "inpossible"], answer: "impossible",
    explain: "possible → impossible (перед p используется приставка im-)."
  },

  // ---------- B2 ----------
  {
    id: "v-b2-1", section: "vocabulary", level: "B2", topic: "phrasal-verbs-common", type: "choice",
    q: "The police are trying to ___ the cause of the fire.",
    options: ["find out", "find up", "look up to", "get over"], answer: "find out",
    explain: "find out — выяснить, узнать."
  },
  {
    id: "v-b2-2", section: "vocabulary", level: "B2", topic: "collocations-make-do", type: "choice",
    q: "You should ___ advantage of this opportunity.",
    options: ["take", "make", "do", "get"], answer: "take",
    explain: "take advantage of — воспользоваться."
  },
  {
    id: "v-b2-3", section: "vocabulary", level: "B2", topic: "word-formation", type: "choice",
    q: "The ___ of the new road took three years.",
    options: ["construction", "constructive", "constructed", "constructively"], answer: "construction",
    explain: "После the ... of нужно существительное: construction — строительство."
  },
  {
    id: "v-b2-4", section: "vocabulary", level: "B2", topic: "vocab-feelings-character", type: "choice",
    q: "She was ___ when she didn't get the job she wanted.",
    options: ["disappointed", "disappointing", "delighted", "relieved"], answer: "disappointed",
    explain: "disappointed — разочарованный (чувство человека, поэтому -ed)."
  },

  // ---------- C1 ----------
  {
    id: "v-c1-1", section: "vocabulary", level: "C1", topic: "vocab-work", type: "choice",
    q: "The company is trying to ___ costs by 10%.",
    options: ["cut", "fall", "decline", "lower down"], answer: "cut",
    explain: "cut costs — сокращать расходы."
  },
  {
    id: "v-c1-2", section: "vocabulary", level: "C1", topic: "confusing-words", type: "choice",
    q: "His explanation was so ___ that nobody could follow it.",
    options: ["convoluted", "concise", "coherent", "straightforward"], answer: "convoluted",
    explain: "convoluted — запутанный. Остальные слова значат «краткий», «связный», «простой»."
  },
  {
    id: "v-c1-3", section: "vocabulary", level: "C1", topic: "confusing-words", type: "choice",
    q: "The new rules will come into ___ next month.",
    options: ["effect", "affect", "action", "power"], answer: "effect",
    explain: "come into effect — вступить в силу. affect — это глагол «влиять»."
  },
  {
    id: "v-c1-4", section: "vocabulary", level: "C1", topic: "vocab-work", type: "choice",
    q: "She's been under a lot of ___ at work recently.",
    options: ["pressure", "tension", "weight", "force"], answer: "pressure",
    explain: "be under pressure — быть под давлением, в напряжении."
  },

  // ======================= ЧТЕНИЕ =======================

  // ---------- A1 ----------
  {
    id: "r-a1-1", section: "reading", level: "A1", topic: "reading", type: "choice", passage: "tp-a1",
    q: "Who does Anna live with?",
    options: ["Her sister", "Her parents", "Her friends", "Nobody, she lives alone"], answer: "Her sister"
  },
  {
    id: "r-a1-2", section: "reading", level: "A1", topic: "reading", type: "choice", passage: "tp-a1",
    q: "Why does Anna often eat in cafés?",
    options: ["She doesn't like cooking", "She works in a café", "Her sister cooks badly", "Cafés are cheap"], answer: "She doesn't like cooking"
  },

  // ---------- A2 ----------
  {
    id: "r-a2-1", section: "reading", level: "A2", topic: "reading", type: "choice", passage: "tp-a2",
    q: "How many nights did they spend in the tent?",
    options: ["Three", "Seven", "One", "None"], answer: "Three"
  },
  {
    id: "r-a2-2", section: "reading", level: "A2", topic: "reading", type: "choice", passage: "tp-a2",
    q: "What is true about their plans for next year?",
    options: ["They want to travel in spring", "They want to camp for two weeks", "They are going with the hotel owner", "They are going to a different country"], answer: "They want to travel in spring"
  },

  // ---------- B1 ----------
  {
    id: "r-b1-1", section: "reading", level: "B1", topic: "reading", type: "choice", passage: "tp-b1",
    q: "What problem did Lena have when she worked from home?",
    options: ["She worked longer hours than before", "She spent too much time in traffic", "Her flat was too noisy", "She had a bad internet connection"], answer: "She worked longer hours than before"
  },
  {
    id: "r-b1-2", section: "reading", level: "B1", topic: "reading", type: "choice", passage: "tp-b1",
    q: "Why does Lena pay for a co-working space?",
    options: ["She feels more productive and happier there", "Her company pays her back", "It is cheaper than an office", "Her boss asked her to work there"], answer: "She feels more productive and happier there"
  },

  // ---------- B2 ----------
  {
    id: "r-b2-1", section: "reading", level: "B2", topic: "reading", type: "choice", passage: "tp-b2",
    q: "According to the text, why does multitasking make us slower?",
    options: ["The brain needs time to refocus after each switch", "People forget what they were doing", "It makes people physically tired", "People listen to music while working"], answer: "The brain needs time to refocus after each switch"
  },
  {
    id: "r-b2-2", section: "reading", level: "B2", topic: "reading", type: "choice", passage: "tp-b2",
    q: "What does the writer think about listening to music while cleaning?",
    options: ["It is not really a problem", "It should be avoided", "It makes cleaning slower", "It is the most difficult kind of multitasking"], answer: "It is not really a problem"
  },

  // ---------- C1 ----------
  {
    id: "r-c1-1", section: "reading", level: "C1", topic: "reading", type: "choice", passage: "tp-c1",
    q: "What does the writer suggest about so-called creative geniuses?",
    options: ["Their success comes mainly from long, regular work", "They rarely produce anything ordinary", "They depend on sudden moments of inspiration", "They are born with exceptional talent"], answer: "Their success comes mainly from long, regular work"
  },
  {
    id: "r-c1-2", section: "reading", level: "C1", topic: "reading", type: "choice", passage: "tp-c1",
    q: "The phrase «the preserve of a gifted few» means that creativity...",
    options: ["belongs only to a small number of talented people", "needs to be protected", "is a skill that few people want", "can be kept for a long time"], answer: "belongs only to a small number of talented people"
  }
);

// ---------- Тексты для вопросов на чтение ----------
DATA.testPassages.push(
  {
    id: "tp-a1", level: "A1",
    text: [
      "Anna is 25. She lives in a small flat in Kazan with her sister. She works in a shop from Monday to Friday.",
      "At the weekend she goes swimming and meets her friends. She doesn't like cooking, so she often eats in cafés."
    ]
  },
  {
    id: "tp-a2", level: "A2",
    text: [
      "Last summer Mark went to Scotland with two friends. They planned to camp for a week, but it rained almost every day, so after three nights in the tent they moved to a small hotel.",
      "Mark says it was the best decision of the trip: the hotel owner showed them beautiful places that aren't in any guidebook. Next year they want to go back, but this time they are going to travel in spring."
    ]
  },
  {
    id: "tp-b1", level: "B1",
    text: [
      "When Lena started working from home, she thought it would be perfect: no traffic, no noisy office and more time for herself.",
      "After a few months, however, she noticed that she was working longer hours than before, because it was difficult to stop. She also missed chatting with her colleagues.",
      "Now she goes to a co-working space three days a week. It costs money, but she says she gets more done there and feels much happier."
    ]
  },
  {
    id: "tp-b2", level: "B2",
    text: [
      "Many people believe that multitasking makes them more efficient. Research suggests the opposite: every time we switch between tasks, our brain needs a moment to refocus, and these small delays add up. Moreover, people who regularly multitask tend to be worse at filtering out irrelevant information.",
      "This does not mean we should never do two things at once — listening to music while cleaning is hardly a problem — but for tasks that require real concentration, doing one thing at a time is usually faster."
    ]
  },
  {
    id: "tp-c1", level: "C1",
    text: [
      "The notion that creativity is the preserve of a gifted few has proved remarkably persistent, despite mounting evidence to the contrary. Studies of so-called creative geniuses reveal not sudden flashes of inspiration so much as years of deliberate, often tedious practice.",
      "What distinguishes them is less innate talent than a willingness to produce large quantities of work, most of which is unremarkable. Seen in this light, creativity looks rather less like a gift and rather more like a habit."
    ]
  }
);
