// =====================================================================
// Мини-рассказы с рамкой слов — словообразование (тема word-formation,
// слова из Unit 9 «Coming and going»). Формат — см. data/stories/past.js, но:
// в рамке стоят НАЧАЛЬНЫЕ слова (fly, attract, …), а в пропуск нужно вписать
// производное слово или нужную форму (flown, attractive, choice…).
// Поэтому в forms перечислены ВСЕ родственные формы слова (глагольные,
// существительные, прилагательные, наречия, с приставками); ни одна форма не
// повторяется у двух слов рамки. Последнее слово каждого ответа обязано
// быть одной из forms своего слова — это проверяет validateStories().
// =====================================================================

DATA.stories.push(

  {
    id: "story-wf-001", title: "Going Abroad", level: "B1",
    box: [
      { verb: "fly",     forms: ["fly", "flies", "flying", "flew", "flown", "flight", "flights"] },
      { verb: "attract", forms: ["attract", "attracts", "attracting", "attracted", "attractive", "attraction", "attractions"] },
      { verb: "choose",  forms: ["choose", "chooses", "choosing", "chose", "chosen", "choice", "choices"] },
      { verb: "comfort", forms: ["comfort", "comforts", "comforting", "comforted", "comfortable", "uncomfortable", "comfortably", "uncomfortably"] },
      { verb: "depart",  forms: ["depart", "departs", "departing", "departed", "departure", "departures"] },
      { verb: "drive",   forms: ["drive", "drives", "driving", "drove", "driven", "driver", "drivers"] },
      { verb: "travel",  forms: ["travel", "travels", "travelling", "traveling", "travelled", "traveled", "traveller", "travellers", "traveler", "travelers"] },
      { verb: "visit",   forms: ["visit", "visits", "visiting", "visited", "visitor", "visitors"] },
      { verb: "direct",  forms: ["direct", "directs", "directing", "directed", "direction", "directions", "directly"] }
    ],
    text: [
      "Last summer my family went abroad for the first time. Before that, none of us had ever (1) ___ in a plane, so we were a little nervous. We needed to find a hotel, and that wasn't easy: there was too much (2) ___, and every website looked very (3) ___ with its beautiful photos. In the end, my mum picked a small hotel near the old town.",
      "Our (4) ___ time was half past six in the morning, so we got up at four. My dad (5) ___ us to the airport in the dark, and the empty roads made it easy.",
      "The journey was long, and my seat was hard and (6) ___, so I couldn't sleep. The man next to me, a (7) ___ from Norway, said that thousands of (8) ___ come to the city every year, so we should buy tickets for the museums early. At the airport we got lost, but a woman at the information desk gave us (9) ___ to the hotel."
    ],
    gaps: [
      { n: 1, verb: "fly",     topic: "word-formation", answers: ["flown"], explain: "had ever + V3: fly → flown." },
      { n: 2, verb: "choose",  topic: "word-formation", answers: ["choice"], explain: "После too much — существительное: choice." },
      { n: 3, verb: "attract", topic: "word-formation", answers: ["attractive"], explain: "После looked very — прилагательное: attractive." },
      { n: 4, verb: "depart",  topic: "word-formation", answers: ["departure"], explain: "Our ___ time — существительное: departure." },
      { n: 5, verb: "drive",   topic: "word-formation", answers: ["drove"], explain: "Рассказ о прошлом — Past Simple: drive → drove." },
      { n: 6, verb: "comfort", topic: "word-formation", answers: ["uncomfortable"], explain: "Сиденье жёсткое и не давало спать — значит uncomfortable (приставка un-)." },
      { n: 7, verb: "travel",  topic: "word-formation", answers: ["traveller", "traveler"], explain: "После a — человек, единственное число: traveller (в США — traveler)." },
      { n: 8, verb: "visit",   topic: "word-formation", answers: ["visitors"], explain: "thousands of + люди во мн. числе: visitors." },
      { n: 9, verb: "direct",  topic: "word-formation", answers: ["directions"], explain: "gave us + существительное: directions (указания, как пройти)." }
    ]
  },

  {
    id: "story-wf-002", title: "A Weekend in Lisbon", level: "B1",
    box: [
      { verb: "adventure",   forms: ["adventure", "adventures", "adventurous"] },
      { verb: "expense",     forms: ["expense", "expenses", "expensive", "inexpensive"] },
      { verb: "arrive",      forms: ["arrive", "arrives", "arriving", "arrived", "arrival", "arrivals"] },
      { verb: "accommodate", forms: ["accommodate", "accommodates", "accommodating", "accommodated", "accommodation"] },
      { verb: "convenient",  forms: ["convenient", "inconvenient", "conveniently", "convenience", "inconvenience"] },
      { verb: "tour",        forms: ["tour", "tours", "touring", "toured", "tourist", "tourists"] },
      { verb: "danger",      forms: ["danger", "dangers", "dangerous", "dangerously"] },
      { verb: "foreign",     forms: ["foreign", "foreigner", "foreigners"] },
      { verb: "back",        forms: ["back", "backs", "backed", "backwards", "backward"] }
    ],
    text: [
      "My friend Tom is a very (1) ___ person: he loves trying new things. Last month he invited me to spend a weekend in Lisbon. We found cheap tickets, because Lisbon is not an (2) ___ city for visitors. Our (3) ___ at the airport was at midnight, but the owner of the hostel was waiting for us.",
      "The (4) ___ was simple but clean. It was a bit (5) ___, though, because the metro was a twenty-minute walk away.",
      "On Saturday we joined a group of (6) ___ and walked through the old streets. Some people say that the yellow trams are (7) ___, because the hills are so steep, but our driver was very careful. In the market we heard many (8) ___ languages. In the evening Tom, who loves jokes, walked (9) ___ along the beach and fell on the sand. We laughed all the way home."
    ],
    gaps: [
      { n: 1, verb: "adventure",   topic: "word-formation", answers: ["adventurous"], explain: "После very — прилагательное: adventurous (любит приключения)." },
      { n: 2, verb: "expense",     topic: "word-formation", answers: ["expensive"], explain: "Перед city — прилагательное: expensive (дорогой)." },
      { n: 3, verb: "arrive",      topic: "word-formation", answers: ["arrival"], explain: "После Our — существительное: arrival (прибытие)." },
      { n: 4, verb: "accommodate", topic: "word-formation", answers: ["accommodation"], explain: "После The — существительное: accommodation (жильё)." },
      { n: 5, verb: "convenient",  topic: "word-formation", answers: ["inconvenient"], explain: "«Но метро далеко» — значит неудобно: in + convenient." },
      { n: 6, verb: "tour",        topic: "word-formation", answers: ["tourists"], explain: "group of + люди во мн. числе: tourists." },
      { n: 7, verb: "danger",      topic: "word-formation", answers: ["dangerous"], explain: "После are — прилагательное: dangerous." },
      { n: 8, verb: "foreign",     topic: "word-formation", answers: ["foreign"], explain: "Перед languages — прилагательное: foreign (иностранные)." },
      { n: 9, verb: "back",        topic: "word-formation", answers: ["backwards", "backward"], explain: "После глагола walked — наречие: backwards (задом наперёд)." }
    ]
  }

);
