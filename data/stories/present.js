// =====================================================================
// Мини-рассказы с рамкой глаголов — настоящее время.
// Формат — см. заголовок data/stories/past.js.
// =====================================================================

DATA.stories.push(

  {
    id: "story-present-001", title: "The Festival Day at the Bakery", level: "A2",
    box: [
      { verb: "open", forms: ["open","opens","opening","opened"] },
      { verb: "bake", forms: ["bake","bakes","baking","baked"] },
      { verb: "make", forms: ["make","makes","making","made"] },
      { verb: "smell", forms: ["smell","smells","smelling","smelled","smelt"] },
      { verb: "come", forms: ["come","comes","coming","came"] },
      { verb: "clean", forms: ["clean","cleans","cleaning","cleaned"] },
      { verb: "give", forms: ["give","gives","giving","gave","given"] },
      { verb: "close", forms: ["close","closes","closing","closed"] },
      { verb: "eat", forms: ["eat","eats","eating","ate","eaten"] }
    ],
    text: [
      "Tom's family owns a small bakery, and on Saturday the whole town celebrates its festival. The bakery (1) ___ at six o'clock every morning, but today Dad is already in the kitchen at four. He (2) ___ the bread in the big oven, and Tom's mum (3) ___ coffee for the first customers. Hot bread (4) ___ wonderful, so by seven a long queue stands outside.",
      "Many workers (5) ___ here to buy breakfast, and today they buy twice as much. Tom (6) ___ the shelves every hour, because crumbs are everywhere. Regular customers (7) ___ him a smile and say that it is the best bakery in the city. The shop (8) ___ at four, early because of the parade. After work the whole family (9) ___ dinner together, tired but happy, and counts the money."
    ],
    gaps: [
      { n: 1, verb: "open", topic: "present-simple", answers: ["opens"], explain: "Сигнал — «every morning»: регулярное действие → Present Simple; the bakery — it, поэтому opens." },
      { n: 2, verb: "bake", topic: "present-simple", answers: ["bakes"], explain: "Сигнал — «Dad is already in the kitchen»: он обычно печёт хлеб, это его работа → Present Simple; Dad — he, поэтому bakes." },
      { n: 3, verb: "make", topic: "present-simple", answers: ["makes"], explain: "Обычная обязанность мамы → Present Simple; Tom's mum — she, поэтому makes." },
      { n: 4, verb: "smell", topic: "present-simple", answers: ["smells"], explain: "Общее свойство («Hot bread smells wonderful») → Present Simple; глагол восприятия smell не употребляется в Continuous; bread — it, поэтому smells." },
      { n: 5, verb: "come", topic: "present-simple", answers: ["come"], explain: "Сигнал — «to buy breakfast» и «Many workers»: регулярное действие, подлежащее во мн. числе → come (без -s)." },
      { n: 6, verb: "clean", topic: "present-simple", answers: ["cleans"], explain: "Сигнал — «every hour»: повторяющееся действие → Present Simple; Tom — he, поэтому cleans." },
      { n: 7, verb: "give", topic: "present-simple", answers: ["give"], explain: "Сигнал — «Regular customers»: регулярное действие, мн. число → give (без -s)." },
      { n: 8, verb: "close", topic: "present-simple", answers: ["closes"], explain: "Расписание магазина → Present Simple; the shop — it, поэтому closes." },
      { n: 9, verb: "eat", topic: "present-simple", answers: ["eats"], explain: "Сигнал — «After work»: обычный порядок дня → Present Simple; the whole family — it/she (единый коллектив), поэтому eats." }
    ]
  },

  {
    id: "story-present-002", title: "A Message from the Café", level: "A2",
    box: [
      { verb: "study", forms: ["study","studies","studying","studied"] },
      { verb: "live", forms: ["live","lives","living","lived"] },
      { verb: "stay", forms: ["stay","stays","staying","stayed"] },
      { verb: "work", forms: ["work","works","working","worked"] },
      { verb: "open", forms: ["open","opens","opening","opened"] },
      { verb: "sit", forms: ["sit","sits","sitting","sat"] },
      { verb: "take", forms: ["take","takes","taking","took","taken"] },
      { verb: "have", forms: ["have","has","having","had"] },
      { verb: "go", forms: ["go","goes","going","went","gone"] }
    ],
    text: [
      "Hi Mia! You asked what I am doing this summer, so here is the full story. I (1) ___ at a university in Leeds, as you know. Usually I (2) ___ in a small flat with two friends, but this summer I (3) ___ at home with my parents, because I need to save money for a trip to Spain. That is why I (4) ___ in a café near the beach until September.",
      "The café (5) ___ at seven o'clock every morning, and it is a busy place. Right now two tourists (6) ___ at the table next to me, and they (7) ___ photos of the sea. I (8) ___ a short break at the moment, so I can write this message. I usually (9) ___ home at five o'clock, so come to the café at five and we can walk to my house together!"
    ],
    gaps: [
      { n: 1, verb: "study", topic: "present-simple", answers: ["study"], explain: "Постоянная ситуация («as you know») → Present Simple, study." },
      { n: 2, verb: "live", topic: "present-simple", answers: ["live"], explain: "Сигнал — «Usually»: обычное положение дел → Present Simple, live." },
      { n: 3, verb: "stay", topic: "present-simple-vs-continuous", answers: ["am staying","'m staying"], explain: "Сигнал — «this summer» и контраст с «usually»: временная ситуация → Present Continuous, am staying." },
      { n: 4, verb: "work", topic: "present-simple-vs-continuous", answers: ["am working","'m working"], explain: "Сигнал — «until September»: временная работа на лето → Present Continuous, am working." },
      { n: 5, verb: "open", topic: "present-simple", answers: ["opens"], explain: "Сигнал — «at seven o'clock every morning»: расписание, регулярность → Present Simple; the café — it, поэтому opens." },
      { n: 6, verb: "sit", topic: "spelling-rules", answers: ["are sitting"], explain: "Сигнал — «Right now»: действие в момент речи → Present Continuous, are sitting (tourists — мн. число)." },
      { n: 7, verb: "take", topic: "present-continuous", answers: ["are taking"], explain: "Продолжение того, что происходит прямо сейчас («Right now two tourists… and they…»): Present Continuous, are taking photos." },
      { n: 8, verb: "have", topic: "present-continuous", answers: ["am having","'m having"], explain: "Сигнал — «at the moment»: сейчас → Present Continuous; в значении «брать перерыв» have допускает Continuous: am having a break." },
      { n: 9, verb: "go", topic: "present-simple", answers: ["go"], explain: "Сигнал — «usually»: привычка → Present Simple, go." }
    ]
  }

);
