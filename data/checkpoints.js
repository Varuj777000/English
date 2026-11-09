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
