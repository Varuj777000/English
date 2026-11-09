// =====================================================================
// Мини-рассказ с рамкой глаголов — пассив (be + V3: Present Simple,
// Past Simple, will). Формат — см. data/stories/past.js. В пропуск нужно
// вписать be + V3 («was built», «are invited», «will be announced»); в answers
// у каждого пропуска последнее слово — V3 нужного глагола, а be и will входят
// в ответ. В forms — все формы глагола (кроме be), формы разных глаголов
// рамки не пересекаются.
// =====================================================================

DATA.stories.push(

  {
    id: "story-passive-001", title: "The Missing Painting", level: "B1",
    box: [
      { verb: "build",    forms: ["build", "builds", "building", "built"] },
      { verb: "find",     forms: ["find", "finds", "finding", "found"] },
      { verb: "lock",     forms: ["lock", "locks", "locking", "locked"] },
      { verb: "steal",    forms: ["steal", "steals", "stealing", "stole", "stolen"] },
      { verb: "sell",     forms: ["sell", "sells", "selling", "sold"] },
      { verb: "repair",   forms: ["repair", "repairs", "repairing", "repaired"] },
      { verb: "invite",   forms: ["invite", "invites", "inviting", "invited"] },
      { verb: "announce", forms: ["announce", "announces", "announcing", "announced"] },
      { verb: "deliver",  forms: ["deliver", "delivers", "delivering", "delivered"] }
    ],
    text: [
      "The small museum in Oakby (1) ___ in 1902, and thousands of people visit it every year. Its most famous painting, The Blue Harbour, (2) ___ in an old barn many years ago.",
      "Every evening the doors of the museum (3) ___ at six o'clock, and a guard walks through the rooms. But on Tuesday morning the guard saw an empty frame on the wall. During the night the painting (4) ___ !",
      "The museum is closed now. New tickets (5) ___ until the painting comes back. The broken window in the east room (6) ___ tomorrow morning.",
      "Every month the police and the museum staff (7) ___ to a meeting at the town hall. At the last meeting the mayor said, “The name of the thief (8) ___ as soon as we know it.” Yesterday a short letter (9) ___ to the museum. It said: “The painting is safe. Please be patient.”"
    ],
    gaps: [
      { n: 1, verb: "build",    topic: "passive-simple", answers: ["was built"], explain: "in 1902 — прошлое, музей один: was built." },
      { n: 2, verb: "find",     topic: "passive-simple", answers: ["was found"], explain: "many years ago — Past Simple, картину нашли: was found (find → found)." },
      { n: 3, verb: "lock",     topic: "passive-simple", answers: ["are locked"], explain: "Every evening — Present Simple, doors — мн. число: are locked." },
      { n: 4, verb: "steal",    topic: "passive-simple", answers: ["was stolen"], explain: "During the night — Past Simple, картина одна: was stolen (steal → stolen)." },
      { n: 5, verb: "sell",     topic: "passive-simple", answers: ["won't be sold", "will not be sold", "aren't sold", "are not sold"], explain: "until the painting comes back — пока не вернётся картина, билеты не будут продавать: won't be sold (sell → sold)." },
      { n: 6, verb: "repair",   topic: "passive-simple", answers: ["will be repaired", "'ll be repaired"], explain: "tomorrow morning — будущее: will be repaired." },
      { n: 7, verb: "invite",   topic: "passive-simple", answers: ["are invited"], explain: "Every month — регулярно, the police and the staff — мн. число: are invited." },
      { n: 8, verb: "announce", topic: "passive-simple", answers: ["will be announced", "'ll be announced"], explain: "as soon as we know it — будущее: will be announced." },
      { n: 9, verb: "deliver",  topic: "passive-simple", answers: ["was delivered"], explain: "Yesterday — Past Simple, письмо одно: was delivered." }
    ]
  }

);
