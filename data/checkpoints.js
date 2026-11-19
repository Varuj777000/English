// =====================================================================
// checkpoints.js — вопросы КОНТРОЛЬНОЙ ПРОВЕРКИ (раз в 2 недели).
//
// Формат ТОЧНО такой же, как в data/placement-test.js — там же описаны
// все поля. Использует ДРУГИЕ примеры на те же темы, чтобы не повторять
// один в один вопросы стартового теста.
//
// Банк вопросов НАМНОГО больше, чем нужно для одной контрольной (около
// 90 вопросов вместо ~30 в одной проверке): для каждой контрольной
// js/pages/checkpoint.js выбирает случайную часть банка, отдавая
// предпочтение вопросам, которых вы ещё не видели в прошлых контрольных
// (см. RULES.checkpoint.questionsPer). Так задания не повторяются от
// проверки к проверке.
//
// Проверяются те же уровни A1–C1 с той же адаптивностью (если на уровне
// меньше 40% верных, более сложные вопросы раздела пропускаются) — код
// для этого уже есть в js/level.js и js/pages/checkpoint.js, отдельно
// писать ничего не нужно.
// =====================================================================

DATA.checkpoints.push(

  // ======================= ГРАММАТИКА =======================

  // ---------- A1 ----------
  { id: "cp-g-a1-1", section: "grammar", level: "A1", topic: "present-simple", type: "choice",
    q: "My father ___ in a hospital.", options: ["work", "works", "working"], answer: "works" },
  { id: "cp-g-a1-2", section: "grammar", level: "A1", topic: "to-be", type: "choice",
    q: "We ___ tired after the trip.", options: ["am", "is", "were"], answer: "were", explain: "Прошедшее время, с we — were." },
  { id: "cp-g-a1-3", section: "grammar", level: "A1", topic: "there-is-are", type: "choice",
    q: "___ a café near the station.", options: ["There is", "There are", "It is"], answer: "There is" },
  { id: "cp-g-a1-4", section: "grammar", level: "A1", topic: "pronouns-possessives", type: "choice",
    q: "This is our teacher. ___ name is Mr Brown.", options: ["His", "He", "Him"], answer: "His" },
  { id: "cp-g-a1-5", section: "grammar", level: "A1", topic: "present-continuous", type: "choice",
    q: "Be quiet, please! The baby ___.", options: ["sleeps", "is sleeping", "sleep"], answer: "is sleeping" },
  { id: "cp-g-a1-6", section: "grammar", level: "A1", topic: "articles-basic", type: "choice",
    q: "She works as ___ nurse.", options: ["a", "an", "the"], answer: "a" },
  { id: "cp-g-a1-7", section: "grammar", level: "A1", topic: "plurals", type: "choice",
    q: "There are five ___ in my family.", options: ["person", "people", "persons"], answer: "people" },
  { id: "cp-g-a1-8", section: "grammar", level: "A1", topic: "have-got", type: "choice",
    q: "___ you got a dog?", options: ["Have", "Do", "Are"], answer: "Have" },
  { id: "cp-g-a1-9", section: "grammar", level: "A1", topic: "can-ability", type: "choice",
    q: "My little brother ___ read yet.", options: ["can't", "doesn't can", "not can"], answer: "can't" },
  { id: "cp-g-a1-10", section: "grammar", level: "A1", topic: "question-words", type: "choice",
    q: "___ is your favourite colour?", options: ["What", "Who", "Where"], answer: "What" },

  // ---------- A2 ----------
  { id: "cp-g-a2-1", section: "grammar", level: "A2", topic: "past-simple", type: "choice",
    q: "She ___ to Italy two years ago.", options: ["go", "goes", "went"], answer: "went" },
  { id: "cp-g-a2-2", section: "grammar", level: "A2", topic: "present-perfect", type: "choice",
    q: "I ___ my keys. Have you seen them?", options: ["lost", "have lost", "lose"], answer: "have lost", explain: "Результат важен сейчас — Present Perfect." },
  { id: "cp-g-a2-3", section: "grammar", level: "A2", topic: "future-going-to", type: "choice",
    q: "Look at the sky! It ___ rain.", options: ["is going to", "will", "going to"], answer: "is going to" },
  { id: "cp-g-a2-4", section: "grammar", level: "A2", topic: "past-continuous", type: "choice",
    q: "I ___ dinner when the phone rang.", options: ["cooked", "was cooking", "cook"], answer: "was cooking", explain: "Длинное действие, прерванное другим — Past Continuous." },
  { id: "cp-g-a2-5", section: "grammar", level: "A2", topic: "present-simple-vs-continuous", type: "choice",
    q: "She ___ three languages, but right now she's learning a fourth.", options: ["speaks", "is speaking"], answer: "speaks" },
  { id: "cp-g-a2-6", section: "grammar", level: "A2", topic: "future-will", type: "choice",
    q: "I promise I ___ be late again.", options: ["won't", "don't", "am not"], answer: "won't" },
  { id: "cp-g-a2-7", section: "grammar", level: "A2", topic: "comparatives-superlatives", type: "choice",
    q: "This exercise is ___ than the last one.", options: ["easier", "more easy", "easiest"], answer: "easier" },
  { id: "cp-g-a2-8", section: "grammar", level: "A2", topic: "prepositions-time", type: "choice",
    q: "The shop closes ___ 9 pm.", options: ["at", "on", "in"], answer: "at" },
  { id: "cp-g-a2-9", section: "grammar", level: "A2", topic: "modals-must-have-to", type: "choice",
    q: "You ___ show your passport at the airport.", options: ["must", "mustn't", "don't have to"], answer: "must" },
  { id: "cp-g-a2-10", section: "grammar", level: "A2", topic: "should-advice", type: "choice",
    q: "You ___ drink more water — it's good for you.", options: ["should", "shouldn't", "should to"], answer: "should" },

  // ---------- B1 ----------
  { id: "cp-g-b1-1", section: "grammar", level: "B1", topic: "first-conditional", type: "choice",
    q: "If you ___ late, call me.", options: ["are", "will be", "were"], answer: "are" },
  { id: "cp-g-b1-2", section: "grammar", level: "B1", topic: "present-perfect-continuous", type: "choice",
    q: "I ___ English for three years.", options: ["study", "have been studying", "studied"], answer: "have been studying" },
  { id: "cp-g-b1-3", section: "grammar", level: "B1", topic: "passive-present-past", type: "choice",
    q: "This song ___ by a famous singer.", options: ["wrote", "was written", "has write"], answer: "was written" },
  { id: "cp-g-b1-4", section: "grammar", level: "B1", topic: "past-perfect", type: "choice",
    q: "By the time the ambulance arrived, the man ___.", options: ["had recovered", "recovered", "has recovered"], answer: "had recovered" },
  { id: "cp-g-b1-5", section: "grammar", level: "B1", topic: "used-to", type: "choice",
    q: "I ___ be afraid of the dark when I was a child.", options: ["used to", "use to", "am used to"], answer: "used to" },
  { id: "cp-g-b1-6", section: "grammar", level: "B1", topic: "second-conditional", type: "choice",
    q: "If she ___ the truth, she would tell us.", options: ["knew", "knows", "had known"], answer: "knew" },
  { id: "cp-g-b1-7", section: "grammar", level: "B1", topic: "future-time-clauses", type: "choice",
    q: "We won't leave until everyone ___ ready.", options: ["is", "will be", "was"], answer: "is" },
  { id: "cp-g-b1-8", section: "grammar", level: "B1", topic: "reported-speech", type: "choice",
    q: "He said he ___ come to the party.", options: ["would", "will", "can"], answer: "would" },
  { id: "cp-g-b1-9", section: "grammar", level: "B1", topic: "relative-clauses", type: "choice",
    q: "The restaurant ___ we ate last night was excellent.", options: ["where", "which", "who"], answer: "where" },
  { id: "cp-g-b1-10", section: "grammar", level: "B1", topic: "modals-deduction", type: "choice",
    q: "She's wearing a wedding ring, so she ___ be married.", options: ["must", "can't", "mustn't"], answer: "must" },

  // ---------- B2 ----------
  { id: "cp-g-b2-1", section: "grammar", level: "B2", topic: "third-conditional", type: "choice",
    q: "If I had known about the traffic, I ___ earlier.", options: ["would leave", "would have left", "left"], answer: "would have left" },
  { id: "cp-g-b2-2", section: "grammar", level: "B2", topic: "modals-past", type: "choice",
    q: "She ___ have forgotten — she never forgets birthdays.", options: ["can't", "mustn't", "shouldn't"], answer: "can't" },
  { id: "cp-g-b2-3", section: "grammar", level: "B2", topic: "wish-if-only", type: "choice",
    q: "I wish I ___ more time to finish this.", options: ["have", "had", "would have"], answer: "had" },
  { id: "cp-g-b2-4", section: "grammar", level: "B2", topic: "mixed-conditionals", type: "choice",
    q: "If she had studied medicine, she ___ a doctor now.", options: ["would be", "would have been", "will be"], answer: "would be" },
  { id: "cp-g-b2-5", section: "grammar", level: "B2", topic: "future-continuous-perfect", type: "choice",
    q: "By next year, I ___ here for a decade.", options: ["will have worked", "will be working", "have worked"], answer: "will have worked" },
  { id: "cp-g-b2-6", section: "grammar", level: "B2", topic: "passive-advanced", type: "choice",
    q: "I need to ___ my phone repaired.", options: ["get", "do", "make"], answer: "get" },
  { id: "cp-g-b2-7", section: "grammar", level: "B2", topic: "participle-clauses", type: "choice",
    q: "___ tired after the long flight, they went straight to bed.", options: ["Feeling", "Feel", "Felt"], answer: "Feeling" },
  { id: "cp-g-b2-8", section: "grammar", level: "B2", topic: "third-conditional", type: "choice",
    q: "If we had left earlier, we ___ the flight.", options: ["wouldn't have missed", "wouldn't miss", "didn't miss"], answer: "wouldn't have missed" },
  { id: "cp-g-b2-9", section: "grammar", level: "B2", topic: "modals-past", type: "choice",
    q: "You ___ have called me — I was worried all night!", options: ["should", "must", "can't"], answer: "should", explain: "should have + V3 — следовало сделать (но не сделали)." },
  { id: "cp-g-b2-10", section: "grammar", level: "B2", topic: "wish-if-only", type: "choice",
    q: "I wish I ___ more languages when I was younger.", options: ["had learned", "learned", "would learn"], answer: "had learned" },

  // ---------- C1 ----------
  { id: "cp-g-c1-1", section: "grammar", level: "C1", topic: "inversion", type: "choice",
    q: "Not only ___ late, he also forgot the documents.", options: ["he was", "was he", "he is"], answer: "was he" },
  { id: "cp-g-c1-2", section: "grammar", level: "C1", topic: "participle-clauses", type: "choice",
    q: "___ what to say, she just smiled.", options: ["Not knowing", "Not know", "Not to know"], answer: "Not knowing" },
  { id: "cp-g-c1-3", section: "grammar", level: "C1", topic: "cleft-sentences", type: "choice",
    q: "___ annoys me most is his constant lateness.", options: ["That", "It", "What"], answer: "What" },
  { id: "cp-g-c1-4", section: "grammar", level: "C1", topic: "inversion", type: "choice",
    q: "Under no circumstances ___ share this password with anyone.", options: ["should you", "you should", "you shouldn't"], answer: "should you" },
  { id: "cp-g-c1-5", section: "grammar", level: "C1", topic: "mixed-conditionals", type: "choice",
    q: "If I weren't so busy, I ___ to your party last night.", options: ["would have gone", "would go", "will go"], answer: "would have gone" },
  { id: "cp-g-c1-6", section: "grammar", level: "C1", topic: "modals-past", type: "choice",
    q: "He ___ have been driving fast — the crash was so serious.", options: ["must", "can't", "should"], answer: "must" },
  { id: "cp-g-c1-7", section: "grammar", level: "C1", topic: "passive-advanced", type: "choice",
    q: "The missing painting ___ to be worth millions.", options: ["is believed", "believes", "is believing"], answer: "is believed", explain: "is believed to be... — «считается, что...»." },
  { id: "cp-g-c1-8", section: "grammar", level: "C1", topic: "cleft-sentences", type: "choice",
    q: "___ surprised me most was how calm she stayed.", options: ["What", "That", "It"], answer: "What" },

  // ======================= ЛЕКСИКА =======================

  // ---------- A1 ----------
  { id: "cp-v-a1-1", section: "vocabulary", level: "A1", topic: "vocab-daily-life", type: "choice",
    q: "It's midnight — time to go to ___.", options: ["bed", "the bed", "asleep"], answer: "bed", explain: "go to bed — ложиться спать (без артикля). «Go to asleep» так не говорят." },
  { id: "cp-v-a1-2", section: "vocabulary", level: "A1", topic: "vocab-daily-life", type: "choice",
    q: "My father's mother is my ___.", options: ["aunt", "grandmother", "sister"], answer: "grandmother" },
  { id: "cp-v-a1-3", section: "vocabulary", level: "A1", topic: "vocab-daily-life", type: "choice",
    q: "The opposite of «expensive» is ___.", options: ["cheap", "big", "new"], answer: "cheap" },
  { id: "cp-v-a1-4", section: "vocabulary", level: "A1", topic: "vocab-daily-life", type: "choice",
    q: "My brother's daughter is my ___.", options: ["niece", "nephew", "cousin"], answer: "niece" },
  { id: "cp-v-a1-5", section: "vocabulary", level: "A1", topic: "vocab-daily-life", type: "choice",
    q: "We usually eat ___ at about 1 o'clock.", options: ["lunch", "breakfast", "dinner"], answer: "lunch" },
  { id: "cp-v-a1-6", section: "vocabulary", level: "A1", topic: "vocab-daily-life", type: "choice",
    q: "Can you ___ the window? It's cold in here.", options: ["close", "open", "break"], answer: "close" },

  // ---------- A2 ----------
  { id: "cp-v-a2-1", section: "vocabulary", level: "A2", topic: "vocab-work", type: "choice",
    q: "I need to send this report before the ___.", options: ["deadline", "salary", "interview"], answer: "deadline" },
  { id: "cp-v-a2-2", section: "vocabulary", level: "A2", topic: "collocations-make-do", type: "choice",
    q: "Could you ___ me a favour?", options: ["do", "make", "give"], answer: "do" },
  { id: "cp-v-a2-3", section: "vocabulary", level: "A2", topic: "vocab-travel", type: "choice",
    q: "Excuse me, where is the nearest ___?", options: ["bus stop", "bus stopping", "stop bus"], answer: "bus stop" },
  { id: "cp-v-a2-4", section: "vocabulary", level: "A2", topic: "vocab-work", type: "choice",
    q: "She got a ___ at the end of the year for her hard work.", options: ["bonus", "fee", "debt"], answer: "bonus" },
  { id: "cp-v-a2-5", section: "vocabulary", level: "A2", topic: "collocations-make-do", type: "choice",
    q: "I need to ___ my homework before dinner.", options: ["do", "make", "have"], answer: "do" },
  { id: "cp-v-a2-6", section: "vocabulary", level: "A2", topic: "vocab-travel", type: "choice",
    q: "Our flight was ___ by two hours.", options: ["delayed", "late", "slow"], answer: "delayed" },

  // ---------- B1 ----------
  { id: "cp-v-b1-1", section: "vocabulary", level: "B1", topic: "phrasal-verbs-common", type: "choice",
    q: "Don't forget to ___ the lights before you leave.", options: ["turn off", "turn up", "turn into"], answer: "turn off" },
  { id: "cp-v-b1-2", section: "vocabulary", level: "B1", topic: "confusing-words", type: "choice",
    q: "I'm sorry, I completely ___ your birthday!", options: ["forgot", "lost", "broke"], answer: "forgot" },
  { id: "cp-v-b1-3", section: "vocabulary", level: "B1", topic: "vocab-feelings-character", type: "choice",
    q: "He never shares his opinion in meetings — he's quite ___.", options: ["shy", "confident", "rude"], answer: "shy" },
  { id: "cp-v-b1-4", section: "vocabulary", level: "B1", topic: "word-formation", type: "choice",
    q: "It was a completely ___ decision — nobody expected it.", options: ["unexpected", "expectable", "expecting"], answer: "unexpected" },
  { id: "cp-v-b1-5", section: "vocabulary", level: "B1", topic: "confusing-words", type: "choice",
    q: "Can you ___ me your dictionary for a moment?", options: ["lend", "borrow", "carry"], answer: "lend" },
  { id: "cp-v-b1-6", section: "vocabulary", level: "B1", topic: "vocab-feelings-character", type: "choice",
    q: "She was ___ when she heard the good news.", options: ["delighted", "boring", "angry"], answer: "delighted" },

  // ---------- B2 ----------
  { id: "cp-v-b2-1", section: "vocabulary", level: "B2", topic: "word-formation", type: "choice",
    q: "His plan was completely ___ — nobody thought it could actually work.", options: ["unrealistic", "realistic", "realism"], answer: "unrealistic" },
  { id: "cp-v-b2-2", section: "vocabulary", level: "B2", topic: "vocab-feelings-character", type: "choice",
    q: "She stayed calm and ___ during the whole crisis.", options: ["patient", "patience", "patiently"], answer: "patient" },
  { id: "cp-v-b2-3", section: "vocabulary", level: "B2", topic: "word-formation", type: "choice",
    q: "The company's growth has been quite ___ this year.", options: ["impressive", "impress", "impression"], answer: "impressive" },
  { id: "cp-v-b2-4", section: "vocabulary", level: "B2", topic: "confusing-words", type: "choice",
    q: "I really ___ your help yesterday — thank you.", options: ["appreciated", "appreciate", "appreciating"], answer: "appreciated" },
  { id: "cp-v-b2-5", section: "vocabulary", level: "B2", topic: "vocab-work", type: "choice",
    q: "They had to ___ ten employees because of the crisis.", options: ["lay off", "lay down", "lay out"], answer: "lay off" },
  { id: "cp-v-b2-6", section: "vocabulary", level: "B2", topic: "vocab-feelings-character", type: "choice",
    q: "He remained ___ even when everyone else was panicking.", options: ["composed", "composing", "compose"], answer: "composed" },

  // ---------- C1 ----------
  { id: "cp-v-c1-1", section: "vocabulary", level: "C1", topic: "vocab-work", type: "choice",
    q: "The company decided to ___ down its operations abroad.", options: ["scale", "cut", "raise"], answer: "scale", explain: "scale down — сворачивать, сокращать." },
  { id: "cp-v-c1-2", section: "vocabulary", level: "C1", topic: "confusing-words", type: "choice",
    q: "His argument was logical but not entirely ___.", options: ["convincing", "convinced", "convince"], answer: "convincing" },
  { id: "cp-v-c1-3", section: "vocabulary", level: "C1", topic: "confusing-words", type: "choice",
    q: "The negotiations reached a ___ after months of talks.", options: ["breakthrough", "break", "breaking"], answer: "breakthrough" },
  { id: "cp-v-c1-4", section: "vocabulary", level: "C1", topic: "word-formation", type: "choice",
    q: "Her speech was both ___ and inspiring.", options: ["eloquent", "eloquently", "eloquence"], answer: "eloquent" },
  { id: "cp-v-c1-5", section: "vocabulary", level: "C1", topic: "vocab-work", type: "choice",
    q: "The firm is looking to ___ its market share next year.", options: ["expand", "widen", "large"], answer: "expand" },
  { id: "cp-v-c1-6", section: "vocabulary", level: "C1", topic: "vocab-feelings-character", type: "choice",
    q: "He's known for being extremely ___ — he never gives up.", options: ["persistent", "persisting", "persist"], answer: "persistent" },

  // ======================= ЧТЕНИЕ =======================

  { id: "cp-r-a2-1", section: "reading", level: "A2", topic: "reading", type: "choice", passage: "cp-tp-a2",
    q: "What did Nikita forget at home?", options: ["His umbrella", "His phone", "His keys", "His bag"], answer: "His phone" },
  { id: "cp-r-a2-2", section: "reading", level: "A2", topic: "reading", type: "choice", passage: "cp-tp-a2",
    q: "Why was Nikita late for work?", options: ["He went back home for his phone", "The bus was late", "He missed his stop", "He overslept"], answer: "He went back home for his phone" },
  { id: "cp-r-a2-3", section: "reading", level: "A2", topic: "reading", type: "choice", passage: "cp-tp-a2-2",
    q: "Why did Marina have to wait?", options: ["There were no free tables", "The café was closed", "She arrived too early", "She forgot her wallet"], answer: "There were no free tables" },
  { id: "cp-r-a2-4", section: "reading", level: "A2", topic: "reading", type: "choice", passage: "cp-tp-a2-2",
    q: "What was the problem with the café?", options: ["The service was slow", "The coffee was bad", "It was too expensive", "It was too noisy"], answer: "The service was slow" },
  { id: "cp-r-a2-5", section: "reading", level: "A2", topic: "reading", type: "choice", passage: "cp-tp-a2-3",
    q: "What problem did Andrey have?", options: ["Finding a parking space", "Getting to work on time", "Paying for petrol", "Finding a quiet route"], answer: "Finding a parking space" },
  { id: "cp-r-a2-6", section: "reading", level: "A2", topic: "reading", type: "choice", passage: "cp-tp-a2-3",
    q: "What does Andrey say about cycling now?", options: ["He enjoys it", "He still feels unsafe", "It takes too long", "It's too expensive"], answer: "He enjoys it" },

  { id: "cp-r-b1-1", section: "reading", level: "B1", topic: "reading", type: "choice", passage: "cp-tp-b1",
    q: "Why did Katya decide to learn to cook?", options: ["Restaurant food became too expensive for her", "She wanted a new hobby", "Her friends taught her", "She read a cookbook"], answer: "Restaurant food became too expensive for her" },
  { id: "cp-r-b1-2", section: "reading", level: "B1", topic: "reading", type: "choice", passage: "cp-tp-b1",
    q: "What does Katya do every Sunday now?", options: ["Cooks meals for the whole week", "Eats at a restaurant", "Buys new cookbooks", "Meets her friends for dinner"], answer: "Cooks meals for the whole week" },
  { id: "cp-r-b1-3", section: "reading", level: "B1", topic: "reading", type: "choice", passage: "cp-tp-b1-2",
    q: "Why did Pavel go to Georgia?", options: ["He wanted to visit and could work remotely", "His company sent him there", "He was looking for a new job", "He wanted to learn the language"], answer: "He wanted to visit and could work remotely" },
  { id: "cp-r-b1-4", section: "reading", level: "B1", topic: "reading", type: "choice", passage: "cp-tp-b1-2",
    q: "What was difficult about the trip?", options: ["The internet and meeting times", "The cost of living", "Making new friends", "Finding a place to stay"], answer: "The internet and meeting times" },
  { id: "cp-r-b1-5", section: "reading", level: "B1", topic: "reading", type: "choice", passage: "cp-tp-b1-3",
    q: "Why did Oksana stop buying a new phone every year?", options: ["To save money and reduce waste", "Her phone company advised her to", "She couldn't afford a new one", "Her friends convinced her"], answer: "To save money and reduce waste" },
  { id: "cp-r-b1-6", section: "reading", level: "B1", topic: "reading", type: "choice", passage: "cp-tp-b1-3",
    q: "What will Oksana do with the money she saved?", options: ["Plan a holiday", "Buy a new phone", "Give it to a friend", "Save it forever"], answer: "Plan a holiday" }
);

// ---------- Тексты для вопросов на чтение (только для контрольной) ----------
DATA.testPassages.push(
  {
    id: "cp-tp-a2", level: "A2",
    text: [
      "Yesterday it was raining in the morning, so Nikita took his umbrella and left for work early. But at the bus stop he realised he had left his phone on the kitchen table.",
      "He ran back home to get it, and by the time he arrived at the office, he was twenty minutes late. His boss wasn't happy, but Nikita explained what had happened, and everyone laughed about it later."
    ]
  },
  {
    id: "cp-tp-a2-2", level: "A2",
    text: [
      "Last Saturday, Marina decided to try a new café in the city centre. She had read good reviews online, so she was excited to go.",
      "When she arrived, the café was much smaller than she expected, and there were no free tables. She had to wait for almost twenty minutes before someone left. The coffee was delicious, but the service was quite slow, so she didn't have time to finish her cake before she had to leave for a meeting."
    ]
  },
  {
    id: "cp-tp-a2-3", level: "A2",
    text: [
      "Andrey works in an office in the centre of town, but every morning he faces the same problem: parking. Last month he decided to try cycling to work instead.",
      "At first it was difficult — the roads were busy and he didn't feel very safe. But after a few weeks, he found a quieter route through the park, and now he actually enjoys the ride. He also saves a lot of money on petrol and parking, and he arrives at the office feeling more awake."
    ]
  },
  {
    id: "cp-tp-b1", level: "B1",
    text: [
      "Two years ago Katya ate at restaurants almost every day because she didn't know how to cook. But as prices went up, she realised she was spending most of her salary on food.",
      "So she found some simple recipes online and started cooking at home. At first her dishes weren't very good, but she kept practising. Now, every Sunday, she cooks meals for the whole week and puts them in the fridge — it saves her both time and money during busy weekdays."
    ]
  },
  {
    id: "cp-tp-b1-2", level: "B1",
    text: [
      "When Pavel's company allowed employees to work from anywhere, he decided to spend a month in Georgia. He had always wanted to visit, and working remotely meant he could explore during his lunch breaks and evenings.",
      "The trip wasn't perfect: the internet connection in his flat was unreliable, and the time difference meant some meetings were late at night. Still, Pavel says it was one of the best decisions he has made — he returned home with new energy and a much better understanding of a country he had only read about before."
    ]
  },
  {
    id: "cp-tp-b1-3", level: "B1",
    text: [
      "Oksana used to buy a new phone every year, following every trend. Two years ago, however, she decided to keep her phone until it completely stopped working, mainly to save money and reduce waste.",
      "Her friends thought she was being old-fashioned, especially when her phone's battery started dying by lunchtime. But Oksana says the change taught her something: she no longer feels the need to buy the newest gadget the moment it appears in shops, and she has saved enough money to plan a proper holiday this year."
    ]
  }
);

// =====================================================================
// ДОПОЛНЕНИЕ: по одному вопросу на каждую тему, которой раньше не было в
// контрольных (чтобы пересчёт приоритетов видел и их), и по два — на
// лексические темы «спорт и игры» и «образование». Формат тот же.
// =====================================================================
DATA.checkpoints.push(

  // ---------- A1 ----------
  { id: "cp-g-a1-11", section: "grammar", level: "A1", topic: "imperatives", type: "choice",
    q: "___ late for school tomorrow!", options: ["Don't be", "Not be", "Aren't"], answer: "Don't be",
    explain: "Отрицательный приказ: Don't + глагол. С be — Don't be." },
  { id: "cp-g-a1-12", section: "grammar", level: "A1", topic: "prepositions-place", type: "choice",
    q: "The picture is ___ the wall.", options: ["on", "in", "at"], answer: "on" },
  { id: "cp-g-a1-13", section: "grammar", level: "A1", topic: "this-that-these-those", type: "choice",
    q: "Look at ___ birds over there!", options: ["those", "this", "that"], answer: "those",
    explain: "Много предметов и далеко — those." },
  { id: "cp-g-a1-14", section: "grammar", level: "A1", topic: "countable-uncountable", type: "choice",
    q: "There isn't much ___ in the fridge.", options: ["milk", "apples", "eggs"], answer: "milk",
    explain: "much — только с неисчисляемыми: milk." },
  { id: "cp-g-a1-15", section: "grammar", level: "A1", topic: "some-any", type: "choice",
    q: "Do you have ___ brothers or sisters?", options: ["any", "some", "a"], answer: "any",
    explain: "В вопросах и отрицаниях — any." },
  { id: "cp-g-a1-16", section: "grammar", level: "A1", topic: "word-order", type: "choice",
    q: "Choose the correct sentence.",
    options: ["She often drinks tea in the morning.", "She drinks often tea in the morning.", "Often she tea drinks in the morning."],
    answer: "She often drinks tea in the morning.", explain: "Наречие частоты стоит перед обычным глаголом." },

  // ---------- A2 ----------
  { id: "cp-g-a2-11", section: "grammar", level: "A2", topic: "irregular-verbs", type: "choice",
    q: "Someone has ___ my bike!", options: ["stolen", "stole", "stealed"], answer: "stolen",
    explain: "steal — stole — stolen; после have нужна третья форма." },
  { id: "cp-g-a2-12", section: "grammar", level: "A2", topic: "spelling-rules", type: "choice",
    q: "He is ___ a letter to his friend.", options: ["writing", "writeing", "writting"], answer: "writing",
    explain: "Перед -ing немая -e отбрасывается: write → writing." },
  { id: "cp-g-a2-13", section: "grammar", level: "A2", topic: "stative-verbs", type: "choice",
    q: "I ___ what you mean.", options: ["understand", "am understanding", "understanding"], answer: "understand",
    explain: "understand — глагол состояния, в Continuous не употребляется." },
  { id: "cp-g-a2-14", section: "grammar", level: "A2", topic: "adverbs-frequency", type: "choice",
    q: "Tom is never late — he ___ on time.", options: ["is always", "always is", "does always"], answer: "is always",
    explain: "С глаголом to be наречие частоты стоит после него: is always." },
  { id: "cp-g-a2-15", section: "grammar", level: "A2", topic: "prepositions-time-place", type: "choice",
    q: "We arrived ___ the airport at six.", options: ["at", "in", "to"], answer: "at",
    explain: "arrive at the airport, но arrive in a city." },
  { id: "cp-g-a2-16", section: "grammar", level: "A2", topic: "word-patterns", type: "choice",
    q: "She is very interested ___ history.", options: ["in", "on", "at"], answer: "in" },
  { id: "cp-g-a2-17", section: "grammar", level: "A2", topic: "prepositional-phrases", type: "choice",
    q: "I learned the poem ___ heart.", options: ["by", "with", "on"], answer: "by", explain: "by heart — наизусть." },
  { id: "cp-g-a2-18", section: "grammar", level: "A2", topic: "much-many-a-lot", type: "choice",
    q: "How ___ people came to the party?", options: ["many", "much", "a lot"], answer: "many",
    explain: "people исчисляемое: How many." },
  { id: "cp-g-a2-19", section: "grammar", level: "A2", topic: "gerund-infinitive-basic", type: "choice",
    q: "I enjoy ___ to music in the evening.", options: ["listening", "to listen", "listen"], answer: "listening",
    explain: "После enjoy — глагол с -ing." },
  { id: "cp-g-a2-20", section: "grammar", level: "A2", topic: "too-enough", type: "choice",
    q: "He isn't old ___ to drive a car.", options: ["enough", "too", "very"], answer: "enough",
    explain: "enough стоит после прилагательного: old enough." },
  { id: "cp-g-a2-21", section: "grammar", level: "A2", topic: "articles", type: "choice",
    q: "She is ___ best student in our class.", options: ["the", "a", "an"], answer: "the",
    explain: "С превосходной степенью (best) — the." },
  { id: "cp-g-a2-22", section: "grammar", level: "A2", topic: "adjectives-adverbs", type: "choice",
    q: "He drives very ___.", options: ["carefully", "careful", "care"], answer: "carefully",
    explain: "Описываем глагол drives — нужно наречие." },
  { id: "cp-g-a2-23", section: "grammar", level: "A2", topic: "adjectives-ed-ing", type: "choice",
    q: "The film was so ___ that I fell asleep.", options: ["boring", "bored", "bore"], answer: "boring",
    explain: "-ing — что вызывает чувство (фильм скучный); -ed — кто его испытывает." },

  // ---------- B1 ----------
  { id: "cp-g-b1-11", section: "grammar", level: "B1", topic: "present-perfect-simple-vs-continuous", type: "choice",
    q: "My hands are dirty because I ___ the car.",
    options: ["have been washing", "have washed", "washed"], answer: "have been washing",
    explain: "Процесс, след которого виден сейчас — Present Perfect Continuous." },
  { id: "cp-g-b1-12", section: "grammar", level: "B1", topic: "past-perfect-continuous", type: "choice",
    q: "When she arrived, her eyes were red. She ___ for an hour.",
    options: ["had been crying", "has been crying", "was cried"], answer: "had been crying",
    explain: "Длительное действие до момента в прошлом — Past Perfect Continuous." },
  { id: "cp-g-b1-13", section: "grammar", level: "B1", topic: "future-forms", type: "choice",
    q: "I can't come on Friday. I ___ my parents at the airport.",
    options: ["am meeting", "will meet", "meet"], answer: "am meeting",
    explain: "Договорённость на ближайшее будущее — Present Continuous." },
  { id: "cp-g-b1-14", section: "grammar", level: "B1", topic: "passive-simple", type: "choice",
    q: "This bridge ___ in 1990.", options: ["was built", "built", "is built"], answer: "was built",
    explain: "Мост не строил сам, его построили, и это в прошлом: was + V3." },
  { id: "cp-g-b1-15", section: "grammar", level: "B1", topic: "question-tags", type: "choice",
    q: "You haven't seen my keys, ___?", options: ["have you", "haven't you", "did you"], answer: "have you",
    explain: "После отрицания — вопрос без not, с тем же вспомогательным глаголом." },
  { id: "cp-g-b1-16", section: "grammar", level: "B1", topic: "so-such", type: "choice",
    q: "It was ___ a boring film that we left.", options: ["such", "so", "very"], answer: "such",
    explain: "such a + прилагательное + существительное; so — перед одним прилагательным." },
  { id: "cp-g-b1-17", section: "grammar", level: "B1", topic: "verb-patterns", type: "choice",
    q: "She decided ___ a new job.", options: ["to look for", "looking for", "look for"], answer: "to look for",
    explain: "После decide — to + глагол." },
  { id: "cp-g-b1-18", section: "grammar", level: "B1", topic: "linking-words", type: "choice",
    q: "___ it was raining, we went for a walk.", options: ["Although", "Because", "So"], answer: "Although",
    explain: "Although — «хотя», уступка; because — причина." },

  // ---------- Лексика ----------
  { id: "cp-v-a2-7", section: "vocabulary", level: "A2", topic: "vocab-sports-games", type: "choice",
    q: "Our team ___ the match 3–1.", options: ["won", "beat", "scored"], answer: "won",
    explain: "win a match / a game, но beat + соперника." },
  { id: "cp-v-a2-8", section: "vocabulary", level: "A2", topic: "vocab-sports-games", type: "choice",
    q: "Brazil ___ Germany in the final.", options: ["beat", "won", "took"], answer: "beat",
    explain: "beat + кого (соперника); win + что (матч, приз)." },
  { id: "cp-v-b1-7", section: "vocabulary", level: "B1", topic: "vocab-education", type: "choice",
    q: "He studied hard and ___ the exam, so he got his certificate.", options: ["passed", "failed", "revised"], answer: "passed",
    explain: "pass — сдать успешно; take — просто писать экзамен." },
  { id: "cp-v-b1-8", section: "vocabulary", level: "B1", topic: "vocab-education", type: "choice",
    q: "I need to ___ for my test tomorrow.", options: ["revise", "miss", "fail"], answer: "revise",
    explain: "revise for — повторять материал перед экзаменом." }
);

// ДОПОЛНЕНИЕ: вопросы контрольной по новой теме «Лексика: фильмы, сериалы, игры»
DATA.checkpoints.push(
  { id: "cp-v-a2-9", section: "vocabulary", level: "A2", topic: "vocab-films-games", type: "choice",
    q: "The ___ of the film is about a boy who finds a magic door.", options: ["plot", "genre", "trailer"], answer: "plot",
    explain: "plot — сюжет; genre — жанр." },
  { id: "cp-v-a2-10", section: "vocabulary", level: "A2", topic: "vocab-films-games", type: "choice",
    q: "I never watch ___ films — they are too scary.", options: ["horror", "comedy", "cartoon"], answer: "horror",
    explain: "horror — фильмы ужасов." }
);

// ДОПОЛНЕНИЕ: вопросы контрольной по теме «Смешанные времена»
DATA.checkpoints.push(
  { id: "cp-g-b1-19", section: "grammar", level: "B1", topic: "mixed-tenses", type: "choice",
    q: "I ___ in this city since I was born.", options: ["live", "am living", "have lived", "lived"], answer: "have lived",
    explain: "since — с прошлого до сейчас: Present Perfect." },
  { id: "cp-g-b1-20", section: "grammar", level: "B1", topic: "mixed-tenses", type: "choice",
    q: "While I ___ home, I met an old friend.", options: ["walk", "was walking", "have walked", "had walked"], answer: "was walking",
    explain: "While + длинное действие-фон в прошлом: Past Continuous." }
);

// ДОПОЛНЕНИЕ «Этап 2»: вопросы контрольной по 15 новым темам B1–B2
DATA.checkpoints.push(
  { id: "cp-g-b1-21", section: "grammar", level: "B1", topic: "indirect-questions", type: "choice",
    q: "Could you tell me where ___?", options: ["the post office is", "is the post office", "does the post office be"], answer: "the post office is",
    explain: "В косвенном вопросе порядок слов как в утверждении." },
  { id: "cp-g-b1-22", section: "grammar", level: "B1", topic: "subject-questions", type: "choice",
    q: "Who ___ the window?", options: ["broke", "did break", "did broke"], answer: "broke",
    explain: "Вопрос к подлежащему — без did." },
  { id: "cp-g-b1-23", section: "grammar", level: "B1", topic: "both-either-neither", type: "choice",
    q: "___ of my two brothers is married. They are both single.", options: ["Neither", "Both", "None"], answer: "Neither",
    explain: "Ни один из двух — neither." },
  { id: "cp-g-b2-11", section: "grammar", level: "B2", topic: "be-get-used-to", type: "choice",
    q: "I'm not used to ___ so early.", options: ["getting up", "get up", "got up"], answer: "getting up",
    explain: "be used to + -ing." },
  { id: "cp-g-b2-12", section: "grammar", level: "B2", topic: "gerund-infinitive-meaning", type: "choice",
    q: "Please remember ___ the lights when you leave.", options: ["to turn off", "turning off", "turn off"], answer: "to turn off",
    explain: "remember + to — не забыть сделать." },
  { id: "cp-g-b2-13", section: "grammar", level: "B2", topic: "causative-have", type: "choice",
    q: "I ___ at the garage last week.", options: ["had my car repaired", "had repaired my car", "repaired my car by them"], answer: "had my car repaired",
    explain: "have + предмет + V3: услугу выполнил кто-то другой." },
  { id: "cp-g-b2-14", section: "grammar", level: "B2", topic: "unless-as-long-as", type: "choice",
    q: "Take some cash ___ they don't accept cards.", options: ["in case", "unless", "as long as"], answer: "in case",
    explain: "in case — на случай, если." },
  { id: "cp-g-b2-15", section: "grammar", level: "B2", topic: "would-rather-had-better", type: "choice",
    q: "I'd rather you ___ anyone about this.", options: ["didn't tell", "don't tell", "won't tell"], answer: "didn't tell",
    explain: "would rather + другой человек + Past Simple." },
  { id: "cp-g-b2-16", section: "grammar", level: "B2", topic: "articles-advanced", type: "choice",
    q: "___ happiness is more important than ___ money.", options: ["— / —", "The / the", "A / the"], answer: "— / —",
    explain: "Абстрактные понятия в общем смысле — без артикля." },
  { id: "cp-g-b2-17", section: "grammar", level: "B2", topic: "non-defining-relative", type: "choice",
    q: "She didn't call me back, ___ was rather rude.", options: ["which", "what", "that"], answer: "which",
    explain: ", which — комментарий ко всей ситуации." },
  { id: "cp-g-b2-18", section: "grammar", level: "B2", topic: "reporting-verbs", type: "choice",
    q: "He apologised ___ so late.", options: ["for arriving", "to arrive", "arriving"], answer: "for arriving",
    explain: "apologise for + -ing." },
  { id: "cp-g-b2-19", section: "grammar", level: "B2", topic: "phrasal-verbs-b2", type: "choice",
    q: "The concert was ___ because the singer was ill.", options: ["called off", "turned out", "put up with"], answer: "called off",
    explain: "call off — отменить." },
  { id: "cp-v-b2-7", section: "vocabulary", level: "B2", topic: "collocations-b2", type: "choice",
    q: "You should ___ more attention in class.", options: ["pay", "make", "do"], answer: "pay",
    explain: "pay attention — обращать внимание." },
  { id: "cp-v-b2-8", section: "vocabulary", level: "B2", topic: "vocab-technology-media", type: "choice",
    q: "The clip went ___ and got ten million views in a week.", options: ["viral", "digital", "virtual"], answer: "viral",
    explain: "go viral — стать вирусным." },
  { id: "cp-v-b2-9", section: "vocabulary", level: "B2", topic: "vocab-environment-society", type: "choice",
    q: "Wind and solar power are examples of ___ energy.", options: ["renewable", "disposable", "available"], answer: "renewable",
    explain: "renewable energy — возобновляемая энергия." }
);

// =====================================================================
// ДОПОЛНЕНИЕ «Чтение A1 / B2 / C1»: до этого в банке контрольной были тексты
// только для A2 и B1, поэтому на A1, B2 и C1 контрольная (и повторный
// стартовый тест) показывала одни и те же тексты из data/placement-test.js.
// По 3 текста на уровень, по 2 вопроса к каждому (темы: работа, поездки,
// фильмы и игры). На B2/C1 один вопрос из двух — на отношение автора или
// значение выражения в контексте, а не на поиск факта.
// =====================================================================
DATA.checkpoints.push(
  // ---- A1 ----
  { id: "cp-r-a1-1", section: "reading", level: "A1", topic: "reading", type: "choice", passage: "cp-tp-a1",
    q: "What does Dima do at the hotel?", options: ["He takes guests' bags", "He cooks breakfast", "He drives guests home", "He cleans the rooms"], answer: "He takes guests' bags",
    explain: "В тексте: «I help them with their bags» — он помогает гостям с сумками. Готовить и убирать он не упоминает." },
  { id: "cp-r-a1-2", section: "reading", level: "A1", topic: "reading", type: "choice", passage: "cp-tp-a1",
    q: "When does Dima finish work?", options: ["At five o'clock", "At eight o'clock", "At three o'clock", "At seven o'clock"], answer: "At five o'clock",
    explain: "«I start work at eight … and finish at five». Восемь часов — это начало работы, а не конец." },
  { id: "cp-r-a1-3", section: "reading", level: "A1", topic: "reading", type: "choice", passage: "cp-tp-a1-2",
    q: "Why are Anna and her sister at the airport?", options: ["They are waiting for a plane", "They are looking for work", "They are meeting their mother", "They are buying new bags"], answer: "They are waiting for a plane",
    explain: "Они хотят лететь в Рим, самолёт в 10:30, а сейчас 9:00 — поэтому ждут. Про работу, маму и покупку сумок в тексте ничего нет." },
  { id: "cp-r-a1-4", section: "reading", level: "A1", topic: "reading", type: "choice", passage: "cp-tp-a1-2",
    q: "What do they do before the plane leaves?", options: ["They drink coffee", "They buy tickets", "They walk in the city", "They sleep on a bench"], answer: "They drink coffee",
    explain: "«They have a coffee and wait» — они пьют кофе и ждут. Билеты у них, видимо, уже есть, а город они ещё не видели." },
  { id: "cp-r-a1-5", section: "reading", level: "A1", topic: "reading", type: "choice", passage: "cp-tp-a1-3",
    q: "When does Max play games on weekdays?", options: ["After his homework", "Before school starts", "Together with his father", "Only on Friday evening"], answer: "After his homework",
    explain: "«He does his homework first and then plays a game» — сначала уроки, потом игра. С отцом он смотрит фильм, и только в пятницу вечером." },
  { id: "cp-r-a1-6", section: "reading", level: "A1", topic: "reading", type: "choice", passage: "cp-tp-a1-3",
    q: "Why doesn't Max like scary films?", options: ["He sleeps badly after them", "They are too long for him", "His father doesn't like them", "They cost too much money"], answer: "He sleeps badly after them",
    explain: "«He can't sleep after them» — после страшных фильмов он не может уснуть. Про длину, отца и цену в тексте нет." },

  // ---- B2 ----
  { id: "cp-r-b2-1", section: "reading", level: "B2", topic: "reading", type: "choice", passage: "cp-tp-b2",
    q: "What is the writer's attitude to the results of the trial?", options: ["Interested, but unsure that every industry could copy it", "Certain that every employer should make the change at once", "Disappointed that output fell a great deal during the experiment", "Dismissive, because too few firms took part in the experiment"], answer: "Interested, but unsure that every industry could copy it",
    explain: "Автор признаёт, что результаты впечатляют, но в 3-м абзаце сомневается, что больницы или заводы смогут так же. Выпуск в эксперименте не упал, а малое число фирм — лишь одна из оговорок критиков, а не позиция автора." },
  { id: "cp-r-b2-2", section: "reading", level: "B2", topic: "reading", type: "choice", passage: "cp-tp-b2",
    q: "In paragraph 2, what does \"cut the waste\" mean?", options: ["Remove activities that add little value", "Reduce the number of people on the team", "Spend less money on office equipment", "Finish the working day a few hours earlier"], answer: "Remove activities that add little value",
    explain: "Контекст: лишние совещания и проверка почты — это и есть «waste». Команда заменила двухчасовую планёрку короткой запиской. Речь о действиях, а не о людях или деньгах." },
  { id: "cp-r-b2-3", section: "reading", level: "B2", topic: "reading", type: "choice", passage: "cp-tp-b2-2",
    q: "What is the writer's main point?", options: ["Planning too strictly can spoil what makes a trip memorable", "Famous monuments have become too crowded to be worth visiting", "Staying in one region is the cheapest way to see a country", "Booking apps often give travellers unreliable information"], answer: "Planning too strictly can spoil what makes a trip memorable",
    explain: "Вывод в последнем абзаце: никакой список не заменит любопытство, часть плана лучше оставить случаю. Автор прямо говорит, что знаменитые места отвергать несправедливо, и что «slow travel» не дешевле." },
  { id: "cp-r-b2-4", section: "reading", level: "B2", topic: "reading", type: "choice", passage: "cp-tp-b2-2",
    q: "In paragraph 3, what does \"pushing back\" mean?", options: ["Resisting a popular habit", "Going back to places they know", "Complaining about rising prices", "Travelling over a longer period"], answer: "Resisting a popular habit",
    explain: "Группа путешественников действует против общепринятого подхода (списки «must-see»). «Push back» здесь — сопротивляться тенденции, а не возвращаться или жаловаться на цены." },
  { id: "cp-r-b2-5", section: "reading", level: "B2", topic: "reading", type: "choice", passage: "cp-tp-b2-3",
    q: "What does the writer suggest about people who criticise remakes?", options: ["Their choices do not always match their complaints", "They know little about how film studios make money", "They prefer playing video games to going to the cinema", "They enjoy original films far more than any remake"], answer: "Their choices do not always match their complaints",
    explain: "Последняя фраза: индустрия даёт зрителям то, что они «говорят, что не любят, и всё равно выбирают». Критикуют одно, покупают другое. Остальные варианты в тексте не утверждаются." },
  { id: "cp-r-b2-6", section: "reading", level: "B2", topic: "reading", type: "choice", passage: "cp-tp-b2-3",
    q: "In paragraph 2, what does \"a gamble\" mean?", options: ["Something with an uncertain result", "An activity that is against the rules", "A project that needs a very large team", "A decision made by the audience"], answer: "Something with an uncertain result",
    explain: "Студия тратит огромные деньги и «не может знать, понравится ли зрителям» — это риск с непредсказуемым исходом. Дальше ремейк описан как способ снизить эту неопределённость." },

  // ---- C1 ----
  { id: "cp-r-c1-1", section: "reading", level: "C1", topic: "reading", type: "choice", passage: "cp-tp-c1",
    q: "What is the writer's view of the measures some employers have introduced?", options: ["They are unexciting but aimed at the right problem", "They are too complicated to have any real effect", "They are exciting enough to remove the bias completely", "They are unnecessary because performance is judged fairly"], answer: "They are unexciting but aimed at the right problem",
    explain: "Автор называет меры скромными и даже немного бюрократичными, но говорит, что они затрагивают «настоящий источник проблемы». В последнем абзаце он также не ждёт, что предвзятость исчезнет полностью." },
  { id: "cp-r-c1-2", section: "reading", level: "C1", topic: "reading", type: "choice", passage: "cp-tp-c1",
    q: "The phrase \"operates beneath conscious intention\" suggests that proximity bias is", options: ["something managers are usually unaware of", "a deliberate policy in a few large firms", "a problem found only in very big companies", "an effect that proper training would remove"], answer: "something managers are usually unaware of",
    explain: "Сразу перед этим: «Nobody decides to discriminate». Предпочтение действует ниже уровня осознанного намерения — значит, руководители его обычно не замечают, и поэтому его трудно оспорить." },
  { id: "cp-r-c1-3", section: "reading", level: "C1", topic: "reading", type: "choice", passage: "cp-tp-c1-2",
    q: "What does the writer suggest about the claim that visiting fragile places encourages people to protect them?", options: ["It is partly true but exaggerated by tour companies", "It is false, as visitors never change their habits afterwards", "It is true and justifies the growth of such trips", "It cannot be tested because surveys are unreliable"], answer: "It is partly true but exaggerated by tour companies",
    explain: "Автор признаёт, что некоторые посетители становятся активистами, но «доказательств меньше, чем подразумевают брошюры», а большинство быстро возвращается к прежним привычкам. Значит: отчасти верно и преувеличено рекламой." },
  { id: "cp-r-c1-4", section: "reading", level: "C1", topic: "reading", type: "choice", passage: "cp-tp-c1-2",
    q: "In paragraph 3, \"a boycott would hardly be a gift\" means a boycott would be", options: ["of little help to the people it is meant to support", "an unexpected but welcome present for the islanders", "too expensive for travel companies to organise properly", "a way of rewarding the more responsible tour operators"], answer: "of little help to the people it is meant to support",
    explain: "«Hardly a gift» — вряд ли подарок. Дальше объяснено почему: бойкот лишит островитян единственного дохода, ради которого им вообще выгодно сохранять риф." },
  { id: "cp-r-c1-5", section: "reading", level: "C1", topic: "reading", type: "choice", passage: "cp-tp-c1-3",
    q: "How does the writer seem to feel about the way many games handle player choice?", options: ["Partly sympathetic, though aware of its weaknesses", "Angry that studios cheat their customers on purpose", "Sure that more choices always make better games", "Uninterested in whether the choices really matter"], answer: "Partly sympathetic, though aware of its weaknesses",
    explain: "Автор объясняет практические причины, приводит «снисходительное» сравнение с фокусником, но в конце отмечает предел этой терпимости: эффект слабеет. Ни гнева, ни безразличия, ни веры в «больше выбора» нет." },
  { id: "cp-r-c1-6", section: "reading", level: "C1", topic: "reading", type: "choice", passage: "cp-tp-c1-3",
    q: "What is the purpose of the comparison with a magician?", options: ["To suggest that players accept the illusion willingly", "To show that game designers are dishonest by nature", "To explain why games need less writing and animation", "To argue that magic is more engaging than games are"], answer: "To suggest that players accept the illusion willingly",
    explain: "Фокус работает, только если зритель согласен, что его обманут. Так «снисходительные» критики объясняют выбор в играх: игрок отчасти сам принимает иллюзию. Это не обвинение в нечестности." }
);

DATA.testPassages.push(
  // ---- A1 ----
  {
    id: "cp-tp-a1", level: "A1",
    text: [
      "My name is Dima. I work in a small hotel. I start work at eight o'clock in the morning and finish at five. I meet new people every day and I help them with their bags. My job is not easy, but I like it. In the evening I go home by bus. On Saturdays and Sundays I don't work. I play football with my friends."
    ]
  },
  {
    id: "cp-tp-a1-2", level: "A1",
    text: [
      "Anna is at the airport with her sister. They want to fly to Rome. Their plane leaves at 10:30, but it is only 9:00 now, so they have a coffee and wait. Anna is a little nervous because she doesn't like planes. Anna has a small red bag and her sister has a big blue bag. They are very happy because Rome is a beautiful city and they want to see it."
    ]
  },
  {
    id: "cp-tp-a1-3", level: "A1",
    text: [
      "Max is fourteen. He likes games and films. His favourite game is about football. He plays it with his friend Ivan. On weekdays he does his homework first and then plays a game for one hour. On Friday evening he watches a film with his father. They like funny films, but his mother likes scary films. Max thinks scary films are bad because he can't sleep after them."
    ]
  },
  // ---- B2 ----
  {
    id: "cp-tp-b2", level: "B2",
    text: [
      "A growing number of companies are experimenting with a four-day working week, and the early results have surprised even the sceptics. In one trial involving several dozen firms, employees kept their full salaries but worked Monday to Thursday. Most managers expected output to fall. Instead, revenue stayed broadly the same, and sick leave dropped noticeably.",
      "Supporters argue that the results are hardly surprising. A great deal of the typical working day, they say, is lost to unnecessary meetings and constant email checking. When the time available shrinks, people simply cut the waste. One participant described how her team replaced a weekly two-hour briefing with a short written update, and nobody missed it.",
      "Critics, however, urge caution. The firms that volunteered for the trial were mostly small, office-based businesses, where tasks are easy to rearrange. It is far less obvious that a hospital or a factory could squeeze the same work into four days without hiring extra staff, which would cancel out the savings. There is also a risk that employees end up working harder, not smarter, and find the longer days exhausting.",
      "What the experiment does show is that the five-day week is a habit rather than a law of nature. Whether it can become the norm will depend less on productivity figures than on whether employers are willing to trust their staff to manage their own time."
    ]
  },
  {
    id: "cp-tp-b2-2", level: "B2",
    text: [
      "Ask most people what they remember from a holiday, and the answer is rarely the famous monument. It is usually something unplanned: a conversation with a taxi driver, a meal in a street nobody had recommended, a train that took the wrong turn. Yet the way we plan trips increasingly works against such accidents.",
      "Booking apps rank everything from restaurants to viewpoints, and thousands of visitors follow the same top-ten lists. The result is a curious sameness: the queue for the 'must-see' photograph in one city looks remarkably like the queue in another. Some travel writers have begun to call this 'checklist tourism', and they argue that it turns a place into a task to be completed.",
      "A small but growing group of travellers is pushing back. They choose one region and stay for weeks, rent a flat instead of a hotel room, and deliberately leave afternoons empty. Their approach, sometimes called slow travel, is not cheaper, since a long stay can cost as much as several short ones, but they claim it gives them something the lists cannot: the feeling of having actually been somewhere.",
      "It would be unfair to dismiss the famous sights; they are popular for good reasons. The real point is that no list, however carefully compiled, can replace curiosity. The best trips are probably those in which a little of the plan is left to chance."
    ]
  },
  {
    id: "cp-tp-b2-3", level: "B2",
    text: [
      "Every year, studios release a new batch of remakes, reboots and sequels, and every year critics complain that the film industry has run out of ideas. The explanation, however, has less to do with creativity than with money. A film based on a familiar title arrives with a ready-made audience, and in an expensive business, that is worth a great deal.",
      "Making an original film is a gamble. A studio may spend two hundred million dollars on a story nobody has heard of and have no way of knowing whether viewers will care. A remake reduces that uncertainty. Marketing departments can promise 'the story you loved, brought up to date', and many viewers, curious or nostalgic, buy a ticket.",
      "This does not mean that remakes are always lazy. A few have been clearly better than the originals, usually when the director had a genuine reason to retell the story: a new setting, a different point of view, or technology that finally made the original idea possible. The worst examples tend to be those where the only reason is the title itself.",
      "Interestingly, the same logic has taken over video games, where successful series are released again with improved graphics. Players complain, yet they continue to buy them. Perhaps the industry is simply giving audiences what they say they dislike and still choose."
    ]
  },
  // ---- C1 ----
  {
    id: "cp-tp-c1", level: "C1",
    text: [
      "When offices reopened after the pandemic, many companies announced a 'hybrid' model with great enthusiasm: two or three days at home, the rest in the building. On paper it looked like a sensible compromise. In practice, researchers have begun to identify a quiet problem that the policy documents did not anticipate, which has been termed proximity bias.",
      "The idea is simple, though its effects are not. Managers, like everyone else, tend to form favourable impressions of people they see regularly. An employee who happens to be at the next desk when a promising project is being handed out is more likely to be remembered than a colleague whose excellent work arrives by email from another city. Nobody decides to discriminate; the preference operates beneath conscious intention, which is precisely what makes it so difficult to challenge.",
      "The consequences are uneven. Studies suggest that staff who spend most of their time at home are less likely to be promoted, even when their measured performance is identical. Since, in many organisations, women and parents of young children are the ones who choose to work remotely, the gap threatens to reinforce inequalities that firms claim to be reducing.",
      "Some employers have responded by changing how work is assessed rather than where it is done: clear written goals, decisions recorded in shared documents instead of corridor conversations, and meetings in which remote participants speak first. These measures are modest, even slightly bureaucratic, and few people find them exciting. Yet they address the real source of the trouble, which is not distance itself but the habit of treating visibility as a substitute for value.",
      "It would be naive to expect the bias to disappear altogether. Human beings are social animals, and a shared coffee will always count for something. The realistic aim is not to eliminate that instinct, but to stop it from quietly deciding who gets ahead."
    ]
  },
  {
    id: "cp-tp-c1-2", level: "C1",
    text: [
      "There is a particular kind of holiday that has become fashionable in the last decade: the trip to see something before it vanishes. Travel companies market glaciers, coral reefs and low-lying islands as places that must be visited 'while they still exist', and the advertising works. Demand for such journeys has risen sharply, and so, unavoidably, have the emissions that come with them.",
      "The logic of last-chance tourism rests on a comfortable assumption: that witnessing a fragile place will make us care enough to protect it. There is some evidence for this. Visitors who have stood beside a retreating glacier often return home with a sharper sense of what is at stake, and a few become active campaigners. But the evidence is thinner than the brochures imply. Most travellers, according to surveys, report feeling moved, then go back to their previous habits within weeks.",
      "The paradox is hard to escape. Flying thousands of kilometres to admire a landscape threatened by warming is, in a modest way, a contribution to the very process being mourned. Local communities complicate the picture further. For islanders whose economies depend on visitors, a boycott would hardly be a gift; it would remove the only income that makes preserving the reef worthwhile to them.",
      "The most defensible position, perhaps, is an uncomfortable middle one. Travel less often, stay longer, choose operators that invest in conservation and are honest about their footprint, and accept that no choice in this area will be entirely free of contradiction. What we should resist is the self-congratulation that so often accompanies such trips, the notion that looking is the same as helping."
    ]
  },
  {
    id: "cp-tp-c1-3", level: "C1",
    text: [
      "Video games have long promised something that no other medium can offer: a story that responds to you. In recent years, major titles have advertised hundreds of decisions, multiple endings and consequences that 'change everything'. Yet anyone who has played several of these games to the end will have noticed a certain flatness behind the promise. The choices rarely alter the story as radically as the marketing suggests.",
      "The reason is largely practical. Every genuine branch in a narrative multiplies the amount of writing, animation and voice recording required. A game with ten truly independent choices would, in theory, need over a thousand different paths, an impossible task for any studio. Designers therefore rely on a quieter craft: they let players make decisions that feel weighty, then steer the story back to a small number of fixed points. The choice affects a line of dialogue or a character's mood, while the plot moves on largely unchanged.",
      "Some critics regard this as a kind of deception. Others, more charitably, compare it to a good magician: the trick works only if the audience agrees, at some level, to be fooled. What matters, they argue, is not whether the choice changes the world but whether it changes the player. A decision that leaves you uneasy for the rest of the game has done its job, regardless of what happens in the code.",
      "There is, however, a limit to this generosity. Once players discover the pattern, the effect weakens, and the next 'life-changing' decision is met with a shrug. The studios that have avoided this trap tend to be those that promise less: games with fewer choices, each of which visibly matters. Restraint, it seems, is more convincing than abundance."
    ]
  }
);
