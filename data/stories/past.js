// =====================================================================
// Мини-рассказы с рамкой глаголов — прошедшее время.
//
// Формат рассказа (подробности — в js/story.js и js/validate.js):
// {
//   id: "story-past-001",          // уникальный ID (по нему сайт помнит, что вы уже решали)
//   title: "...", level: "A2",
//   box: [ { verb: "go", forms: ["go","goes","going","went","gone"] }, ... ],
//          // рамка: каждый глагол используется РОВНО ОДИН РАЗ. forms — все его
//          // формы (нужны, чтобы заметить, что один глагол вписан дважды);
//          // be/am/is/are/was/were в forms не входят — это вспомогательные слова.
//   text: [ "Абзац с пропусками вида (1) ___ ...", "Следующий абзац ..." ],
//   gaps: [ { n: 1, verb: "go", topic: "irregular-verbs",
//             answers: ["went"], explain: "..." }, ... ]
//          // n — номер пропуска из текста; topic — ID темы из topics.js, её приоритет
//          // меняется как у обычного упражнения; answers — все верные варианты
//          // (целиком то, что стоит на месте ___, например "were playing").
// }
// Число глаголов в рамке = числу пропусков = числу номеров в тексте.
// =====================================================================

DATA.stories.push(

  {
    id: "story-past-001", title: "The Lost Wallet", level: "A2",
    box: [
      { verb: "go",     forms: ["go", "goes", "going", "went", "gone"] },
      { verb: "buy",    forms: ["buy", "buys", "buying", "bought"] },
      { verb: "put",    forms: ["put", "puts", "putting"] },
      { verb: "notice", forms: ["notice", "notices", "noticing", "noticed"] },
      { verb: "look",   forms: ["look", "looks", "looking", "looked"] },
      { verb: "give",   forms: ["give", "gives", "giving", "gave", "given"] },
      { verb: "run",    forms: ["run", "runs", "running", "ran"] },
      { verb: "find",   forms: ["find", "finds", "finding", "found"] },
      { verb: "feel",   forms: ["feel", "feels", "feeling", "felt"] }
    ],
    text: [
      "Ben is twelve years old, and he loves the Saturday market. Last Saturday he (1) ___ to the market with his little sister. He (2) ___ some apples and paid with a ten-pound note. Then he (3) ___ his wallet in his jacket pocket.",
      "Ten minutes later, Ben (4) ___ that the wallet was not there. He (5) ___ everywhere, but he could not see it. His sister (6) ___ him a hug and said, \"Don't worry.\" They (7) ___ back to the apple stall. The seller (8) ___ the wallet on the ground and handed it to Ben. Ben (9) ___ very happy and thanked him many times."
    ],
    gaps: [
      { n: 1, verb: "go",     topic: "irregular-verbs", answers: ["went"],   explain: "go → went. Прошедшее время (Last Saturday), глагол неправильный." },
      { n: 2, verb: "buy",    topic: "irregular-verbs", answers: ["bought"], explain: "buy → bought (не «buyed»)." },
      { n: 3, verb: "put",    topic: "irregular-verbs", answers: ["put"],    explain: "put — все три формы одинаковые: put – put – put." },
      { n: 4, verb: "notice", topic: "spelling-rules",  answers: ["noticed"], explain: "Глагол на -e в прошедшем получает только -d: notice → noticed." },
      { n: 5, verb: "look",   topic: "past-simple",     answers: ["looked"], explain: "Правильный глагол: look + ed." },
      { n: 6, verb: "give",   topic: "irregular-verbs", answers: ["gave"],   explain: "give → gave (V2). given — это V3." },
      { n: 7, verb: "run",    topic: "irregular-verbs", answers: ["ran"],    explain: "run → ran." },
      { n: 8, verb: "find",   topic: "irregular-verbs", answers: ["found"],  explain: "find → found." },
      { n: 9, verb: "feel",   topic: "irregular-verbs", answers: ["felt"],   explain: "feel → felt." }
    ]
  },

  {
    id: "story-past-002", title: "The Power Cut", level: "A2",
    box: [
      { verb: "cook",  forms: ["cook", "cooks", "cooking", "cooked"] },
      { verb: "watch", forms: ["watch", "watches", "watching", "watched"] },
      { verb: "play",  forms: ["play", "plays", "playing", "played"] },
      { verb: "go",    forms: ["go", "goes", "going", "went", "gone"] },
      { verb: "get",   forms: ["get", "gets", "getting", "got", "gotten"] },
      { verb: "find",  forms: ["find", "finds", "finding", "found"] },
      { verb: "light", forms: ["light", "lights", "lighting", "lit", "lighted"] },
      { verb: "sleep", forms: ["sleep", "sleeps", "sleeping", "slept"] },
      { verb: "eat",   forms: ["eat", "eats", "eating", "ate", "eaten"] }
    ],
    text: [
      "Last winter there was a big storm in our town. At seven o'clock my mum (1) ___ dinner in the kitchen. Dad (2) ___ the news on TV. My brother and I (3) ___ a board game.",
      "Suddenly all the lights (4) ___ out. It (5) ___ very dark and quiet. Dad (6) ___ some candles in the cupboard. While he (7) ___ them, the electricity came back. My little sister (8) ___ on the sofa when the power returned, and she did not even wake up! After that, we (9) ___ dinner together."
    ],
    gaps: [
      { n: 1, verb: "cook",  topic: "past-continuous", answers: ["was cooking"],   explain: "Действие шло в момент прошлого (At seven o'clock): was + cooking. Mum = she → was." },
      { n: 2, verb: "watch", topic: "past-continuous", answers: ["was watching"],  explain: "Dad = he → was watching." },
      { n: 3, verb: "play",  topic: "past-continuous", answers: ["were playing"],  explain: "My brother and I = we → were playing." },
      { n: 4, verb: "go",    topic: "irregular-verbs", answers: ["went"],          explain: "Короткое событие → Past Simple: went out." },
      { n: 5, verb: "get",   topic: "irregular-verbs", answers: ["got"],           explain: "get dark = «темнеть»: get → got." },
      { n: 6, verb: "find",  topic: "irregular-verbs", answers: ["found"],         explain: "find → found." },
      { n: 7, verb: "light", topic: "past-continuous", answers: ["was lighting"],  explain: "While + длительное действие → was lighting; потом его прервало короткое came back." },
      { n: 8, verb: "sleep", topic: "past-continuous", answers: ["was sleeping"],  explain: "Сестра спала в момент, когда вернулся свет → was sleeping." },
      { n: 9, verb: "eat",   topic: "irregular-verbs", answers: ["ate"],           explain: "eat → ate (законченное действие после события)." }
    ]
  },

  {
    id: "story-past-003", title: "The Football Final", level: "A2",
    box: [
      { verb: "plan",  forms: ["plan", "plans", "planning", "planned"] },
      { verb: "drop",  forms: ["drop", "drops", "dropping", "dropped"] },
      { verb: "stop",  forms: ["stop", "stops", "stopping", "stopped"] },
      { verb: "try",   forms: ["try", "tries", "trying", "tried"] },
      { verb: "run",   forms: ["run", "runs", "running", "ran"] },
      { verb: "cry",   forms: ["cry", "cries", "crying", "cried"] },
      { verb: "win",   forms: ["win", "wins", "winning", "won"] },
      { verb: "hug",   forms: ["hug", "hugs", "hugging", "hugged"] },
      { verb: "dance", forms: ["dance", "dances", "dancing", "danced"] }
    ],
    text: [
      "Our school football team reached the city final last month. Our coach (1) ___ the match very carefully for weeks. In the first half, our goalkeeper (2) ___ the ball but quickly picked it up. The referee (3) ___ the game for a minute because of the heavy rain.",
      "Our captain (4) ___ to score from far away, but she missed. Then Lucy (5) ___ past three players and scored. Everyone (6) ___ with joy. In the end, we (7) ___ the match 2–1. Our fans (8) ___ the captain and lifted her into the air. That evening we (9) ___ at the school party until midnight."
    ],
    gaps: [
      { n: 1, verb: "plan",  topic: "spelling-rules",  answers: ["planned"],  explain: "plan → planned: краткий гласный + n → удваиваем n." },
      { n: 2, verb: "drop",  topic: "spelling-rules",  answers: ["dropped"],  explain: "drop → dropped: удваиваем p." },
      { n: 3, verb: "stop",  topic: "spelling-rules",  answers: ["stopped"],  explain: "stop → stopped: удваиваем p." },
      { n: 4, verb: "try",   topic: "spelling-rules",  answers: ["tried"],    explain: "Согласная + y → ied: try → tried." },
      { n: 5, verb: "run",   topic: "irregular-verbs", answers: ["ran"],      explain: "run → ran." },
      { n: 6, verb: "cry",   topic: "spelling-rules",  answers: ["cried"],    explain: "cry → cried (y → ied)." },
      { n: 7, verb: "win",   topic: "irregular-verbs", answers: ["won"],      explain: "win → won." },
      { n: 8, verb: "hug",   topic: "spelling-rules",  answers: ["hugged"],   explain: "hug → hugged: удваиваем g." },
      { n: 9, verb: "dance", topic: "spelling-rules",  answers: ["danced"],   explain: "dance кончается на -e: добавляем только -d." }
    ]
  },

  {
    id: "story-past-004", title: "Grandpa's Village", level: "A2",
    box: [
      { verb: "live",   forms: ["live", "lives", "living", "lived"] },
      { verb: "walk",   forms: ["walk", "walks", "walking", "walked"] },
      { verb: "go",     forms: ["go", "goes", "going", "went", "gone"] },
      { verb: "build",  forms: ["build", "builds", "building", "built"] },
      { verb: "close",  forms: ["close", "closes", "closing", "closed"] },
      { verb: "change", forms: ["change", "changes", "changing", "changed"] },
      { verb: "grow",   forms: ["grow", "grows", "growing", "grew", "grown"] },
      { verb: "visit",  forms: ["visit", "visits", "visiting", "visited"] },
      { verb: "sell",   forms: ["sell", "sells", "selling", "sold"] }
    ],
    text: [
      "My grandpa Joe is eighty years old, and he knows every corner of his village. When he was a boy, he (1) ___ in a small house near the river. Every morning he (2) ___ five kilometres to school. Today the village children (3) ___ to school by bus.",
      "Last year the village (4) ___ a new library. The old shop (5) ___ in 2015, so now people drive to the town. Grandpa says that the village (6) ___ every year. He still (7) ___ vegetables in his garden, just as he did as a boy. My cousins and I (8) ___ him every summer. Last summer he (9) ___ his old bicycle to a neighbour."
    ],
    gaps: [
      { n: 1, verb: "live",   topic: "past-simple",     answers: ["lived"],  explain: "When he was a boy — прошлое. live + d (глагол на -e)." },
      { n: 2, verb: "walk",   topic: "past-simple",     answers: ["walked"], explain: "Every morning, но в детстве (прошлое) → Past Simple: walked." },
      { n: 3, verb: "go",     topic: "present-simple",  answers: ["go"],     explain: "Today — сегодня, привычка. The children = they → go, без -s." },
      { n: 4, verb: "build",  topic: "irregular-verbs", answers: ["built"],  explain: "Last year → прошлое; build → built." },
      { n: 5, verb: "close",  topic: "past-simple",     answers: ["closed"], explain: "in 2015 → прошлое: close + d." },
      { n: 6, verb: "change", topic: "present-simple",  answers: ["changes"], explain: "every year — регулярно, Present Simple; the village = it → changes." },
      { n: 7, verb: "grow",   topic: "present-simple",  answers: ["grows"],  explain: "He still ... — сейчас, привычка: he → grows." },
      { n: 8, verb: "visit",  topic: "present-simple",  answers: ["visit"],  explain: "every summer — привычка; My cousins and I = we → visit, без -s." },
      { n: 9, verb: "sell",   topic: "irregular-verbs", answers: ["sold"],   explain: "Last summer → прошлое; sell → sold." }
    ]
  }

);
