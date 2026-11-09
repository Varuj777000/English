// =====================================================================
// Мини-рассказы с рамкой глаголов — настоящее время.
// Формат — см. заголовок data/stories/past.js.
// =====================================================================

DATA.stories.push(

  {
    id: "story-present-001", title: "A Day at the Bakery", level: "A2",
    box: [
      { verb: "open",  forms: ["open", "opens", "opening", "opened"] },
      { verb: "bake",  forms: ["bake", "bakes", "baking", "baked"] },
      { verb: "make",  forms: ["make", "makes", "making", "made"] },
      { verb: "smell", forms: ["smell", "smells", "smelling", "smelled", "smelt"] },
      { verb: "come",  forms: ["come", "comes", "coming", "came"] },
      { verb: "clean", forms: ["clean", "cleans", "cleaning", "cleaned"] },
      { verb: "give",  forms: ["give", "gives", "giving", "gave", "given"] },
      { verb: "close", forms: ["close", "closes", "closing", "closed"] },
      { verb: "eat",   forms: ["eat", "eats", "eating", "ate", "eaten"] }
    ],
    text: [
      "Tom's family owns a small bakery in the old town. The bakery (1) ___ at six o'clock every morning. Dad (2) ___ the bread early, before sunrise. Tom's mum (3) ___ coffee for the first customers. Hot bread (4) ___ wonderful, so people queue outside.",
      "Many workers (5) ___ here to buy breakfast. Tom (6) ___ the shelves after school. Regular customers (7) ___ him a smile and a friendly \"hello\". The shop (8) ___ at four in the afternoon. After work, the whole family (9) ___ dinner together."
    ],
    gaps: [
      { n: 1, verb: "open",  topic: "present-simple", answers: ["opens"],  explain: "The bakery = it → opens (-s). every morning — Present Simple." },
      { n: 2, verb: "bake",  topic: "present-simple", answers: ["bakes"],  explain: "Dad = he → bakes (-s)." },
      { n: 3, verb: "make",  topic: "present-simple", answers: ["makes"],  explain: "Tom's mum = she → makes." },
      { n: 4, verb: "smell", topic: "present-simple", answers: ["smells"], explain: "Hot bread = it → smells. smell — глагол состояния, Continuous не нужен." },
      { n: 5, verb: "come",  topic: "present-simple", answers: ["come"],   explain: "Many workers = they → come, без -s." },
      { n: 6, verb: "clean", topic: "present-simple", answers: ["cleans"], explain: "Tom = he → cleans." },
      { n: 7, verb: "give",  topic: "present-simple", answers: ["give"],   explain: "Regular customers = they → give, без -s." },
      { n: 8, verb: "close", topic: "present-simple", answers: ["closes"], explain: "The shop = it → closes (-s)." },
      { n: 9, verb: "eat",   topic: "present-simple", answers: ["eats"],   explain: "The whole family — единое целое, как «it» → eats." }
    ]
  },

  {
    id: "story-present-002", title: "My Summer Job", level: "A2",
    box: [
      { verb: "study", forms: ["study", "studies", "studying", "studied"] },
      { verb: "live",  forms: ["live", "lives", "living", "lived"] },
      { verb: "stay",  forms: ["stay", "stays", "staying", "stayed"] },
      { verb: "work",  forms: ["work", "works", "working", "worked"] },
      { verb: "open",  forms: ["open", "opens", "opening", "opened"] },
      { verb: "sit",   forms: ["sit", "sits", "sitting", "sat"] },
      { verb: "take",  forms: ["take", "takes", "taking", "took", "taken"] },
      { verb: "have",  forms: ["have", "has", "having", "had"] },
      { verb: "go",    forms: ["go", "goes", "going", "went", "gone"] }
    ],
    text: [
      "My name is Anna, and I (1) ___ at a university in Leeds. Usually I (2) ___ in a small flat with two friends. But this summer I (3) ___ at home with my parents. I (4) ___ in a café near the beach for the summer.",
      "The café (5) ___ at seven o'clock every morning. Right now two tourists (6) ___ at the table next to me. They (7) ___ photos of the sea. I (8) ___ a short break at the moment, so I can write this message. I usually (9) ___ home at five o'clock."
    ],
    gaps: [
      { n: 1, verb: "study", topic: "present-simple",               answers: ["study"],        explain: "Учусь в университете — постоянно → Present Simple: I study." },
      { n: 2, verb: "live",  topic: "present-simple",               answers: ["live"],         explain: "Usually → Present Simple, с I без -s." },
      { n: 3, verb: "stay",  topic: "present-simple-vs-continuous", answers: ["am staying"],   explain: "this summer — временно → Present Continuous: am staying." },
      { n: 4, verb: "work",  topic: "present-simple-vs-continuous", answers: ["am working"],   explain: "for the summer — временно → am working." },
      { n: 5, verb: "open",  topic: "present-simple",               answers: ["opens"],        explain: "every morning — регулярно; The café = it → opens." },
      { n: 6, verb: "sit",   topic: "spelling-rules",               answers: ["are sitting"],  explain: "Right now → Continuous. Two tourists = they → are; sit → sitting (удваиваем t)." },
      { n: 7, verb: "take",  topic: "present-continuous",           answers: ["are taking"],   explain: "Происходит сейчас → are taking (take → taking: e убираем)." },
      { n: 8, verb: "have",  topic: "present-continuous",           answers: ["am having"],    explain: "have a break = «отдыхать», действие, at the moment → am having." },
      { n: 9, verb: "go",    topic: "present-simple",               answers: ["go"],           explain: "usually → Present Simple: I go." }
    ]
  }

);
