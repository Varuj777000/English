// =====================================================================
// Диктанты (тип "listen") уровня A2 — см. js/planner.js (pickListenItems)
// и js/exercises.js для того, как они показываются и проверяются.
//
// Формат одной записи:
//   {
//     id: "listen-a2-001",
//     topic: "past-simple",     // как у обычных упражнений — тема из data/topics.js
//     type: "listen",
//     q: "I bought a new phone last week.",  // именно эту фразу озвучивает сайт;
//                                             // текст нигде не показывается до ответа
//     ru: "Я купил новый телефон на прошлой неделе.", // перевод — показывается после ответа
//     answers: ["I bought a new phone last week."]    // как проверяется ответ (isAnswerCorrect)
//   }
//
// Фразы подобраны без классических омофонов (their/there/they're, to/too/two,
// its/it's, your/you're, whose/who's, know/no, hear/here) — при диктанте на слух
// их невозможно различить, даже понимая грамматику. Исключение — «too» в паре
// too/enough: это ровно то, что тема проверяет, там путаницы с контекстом нет.
// Если во фразе есть число, которое speechSynthesis прочитает словами (100, 2020
// и т.п.), оба написания — цифрами и словами — добавлены в answers.
// =====================================================================

DATA.exercises.push(
  { id: "listen-a2-001", topic: "past-simple", type: "listen", q: "I bought a new phone last week.", ru: "Я купил новый телефон на прошлой неделе.", answers: ["I bought a new phone last week."] },
  { id: "listen-a2-002", topic: "past-simple", type: "listen", q: "She visited her grandmother on Sunday.", ru: "Она навестила бабушку в воскресенье.", answers: ["She visited her grandmother on Sunday."] },

  { id: "listen-a2-003", topic: "past-continuous", type: "listen", q: "I was watching TV when you called.", ru: "Я смотрел телевизор, когда ты позвонил.", answers: ["I was watching TV when you called."] },
  { id: "listen-a2-004", topic: "past-continuous", type: "listen", q: "It was raining when we left the house.", ru: "Шёл дождь, когда мы вышли из дома.", answers: ["It was raining when we left the house."] },

  { id: "listen-a2-005", topic: "present-simple-vs-continuous", type: "listen", q: "Water boils at 100 degrees.", ru: "Вода кипит при ста градусах.", answers: ["Water boils at 100 degrees.", "Water boils at one hundred degrees."] },
  { id: "listen-a2-006", topic: "present-simple-vs-continuous", type: "listen", q: "Listen! Somebody is knocking at the door.", ru: "Слушай! Кто-то стучит в дверь.", answers: ["Listen! Somebody is knocking at the door."] },

  { id: "listen-a2-007", topic: "present-perfect", type: "listen", q: "I have never been to Japan.", ru: "Я никогда не был в Японии.", answers: ["I have never been to Japan."] },
  { id: "listen-a2-008", topic: "present-perfect", type: "listen", q: "She has just finished her homework.", ru: "Она только что закончила домашнее задание.", answers: ["She has just finished her homework."] },

  { id: "listen-a2-009", topic: "past-simple-vs-present-perfect", type: "listen", q: "I saw that film last year.", ru: "Я видел этот фильм в прошлом году.", answers: ["I saw that film last year."] },
  { id: "listen-a2-010", topic: "past-simple-vs-present-perfect", type: "listen", q: "She has worked here since 2020.", ru: "Она работает здесь с 2020 года.", answers: ["She has worked here since 2020.", "She has worked here since twenty twenty."] },

  { id: "listen-a2-011", topic: "future-going-to", type: "listen", q: "Look at those clouds! It is going to rain.", ru: "Посмотри на эти тучи! Сейчас пойдёт дождь.", answers: ["Look at those clouds! It is going to rain."] },
  { id: "listen-a2-012", topic: "future-going-to", type: "listen", q: "We are going to paint the kitchen this weekend.", ru: "Мы собираемся покрасить кухню в эти выходные.", answers: ["We are going to paint the kitchen this weekend."] },

  { id: "listen-a2-013", topic: "future-will", type: "listen", q: "I promise I will not be late again.", ru: "Обещаю, что больше не опоздаю.", answers: ["I promise I will not be late again."] },
  { id: "listen-a2-014", topic: "future-will", type: "listen", q: "I think it will be sunny tomorrow.", ru: "Думаю, завтра будет солнечно.", answers: ["I think it will be sunny tomorrow."] },

  { id: "listen-a2-015", topic: "comparatives-superlatives", type: "listen", q: "My brother is taller than me.", ru: "Мой брат выше меня.", answers: ["My brother is taller than me."] },
  { id: "listen-a2-016", topic: "comparatives-superlatives", type: "listen", q: "This is the happiest day of my life.", ru: "Это самый счастливый день в моей жизни.", answers: ["This is the happiest day of my life."] },

  { id: "listen-a2-017", topic: "adverbs-frequency", type: "listen", q: "I never eat meat.", ru: "Я никогда не ем мясо.", answers: ["I never eat meat."] },
  { id: "listen-a2-018", topic: "adverbs-frequency", type: "listen", q: "She usually goes to bed at eleven.", ru: "Она обычно ложится спать в одиннадцать.", answers: ["She usually goes to bed at eleven."] },

  { id: "listen-a2-019", topic: "prepositions-time", type: "listen", q: "The meeting is on Monday.", ru: "Встреча в понедельник.", answers: ["The meeting is on Monday."] },
  { id: "listen-a2-020", topic: "prepositions-time", type: "listen", q: "I usually get up at seven o'clock.", ru: "Я обычно встаю в семь часов.", answers: ["I usually get up at seven o'clock."] },

  { id: "listen-a2-021", topic: "much-many-a-lot", type: "listen", q: "Not many people came to the meeting.", ru: "На собрании было мало людей.", answers: ["Not many people came to the meeting."] },
  { id: "listen-a2-022", topic: "much-many-a-lot", type: "listen", q: "She has a lot of friends in Spain.", ru: "У неё много друзей в Испании.", answers: ["She has a lot of friends in Spain."] },

  { id: "listen-a2-023", topic: "modals-must-have-to", type: "listen", q: "You must not smoke in this building.", ru: "В этом здании нельзя курить.", answers: ["You must not smoke in this building."] },
  { id: "listen-a2-024", topic: "modals-must-have-to", type: "listen", q: "Yesterday I had to work late.", ru: "Вчера мне пришлось задержаться на работе допоздна.", answers: ["Yesterday I had to work late."] },

  { id: "listen-a2-025", topic: "should-advice", type: "listen", q: "You should see a doctor about that cough.", ru: "Тебе стоит показаться врачу из-за этого кашля.", answers: ["You should see a doctor about that cough."] },
  { id: "listen-a2-026", topic: "should-advice", type: "listen", q: "You should not eat so much fast food.", ru: "Тебе не стоит есть так много фастфуда.", answers: ["You should not eat so much fast food."] },

  { id: "listen-a2-027", topic: "gerund-infinitive-basic", type: "listen", q: "I enjoy swimming in the ocean.", ru: "Мне нравится плавать в океане.", answers: ["I enjoy swimming in the ocean."] },
  { id: "listen-a2-028", topic: "gerund-infinitive-basic", type: "listen", q: "She decided to stay at home.", ru: "Она решила остаться дома.", answers: ["She decided to stay at home."] },

  { id: "listen-a2-029", topic: "too-enough", type: "listen", q: "This coffee is too hot to drink.", ru: "Этот кофе слишком горячий, чтобы его пить.", answers: ["This coffee is too hot to drink."] },
  { id: "listen-a2-030", topic: "too-enough", type: "listen", q: "We don't have enough chairs for everyone.", ru: "У нас не хватает стульев на всех.", answers: ["We don't have enough chairs for everyone."] },

  { id: "listen-a2-031", topic: "articles", type: "listen", q: "She lives in the United States.", ru: "Она живёт в США.", answers: ["She lives in the United States."] },
  { id: "listen-a2-032", topic: "articles", type: "listen", q: "I usually go to work by bus.", ru: "Я обычно езжу на работу на автобусе.", answers: ["I usually go to work by bus."] },

  { id: "listen-a2-033", topic: "adjectives-adverbs", type: "listen", q: "She drives very carefully.", ru: "Она водит очень осторожно.", answers: ["She drives very carefully."] },
  { id: "listen-a2-034", topic: "adjectives-adverbs", type: "listen", q: "He speaks English very well.", ru: "Он очень хорошо говорит по-английски.", answers: ["He speaks English very well."] },

  { id: "listen-a2-035", topic: "adjectives-ed-ing", type: "listen", q: "The film was really boring.", ru: "Фильм был очень скучным.", answers: ["The film was really boring."] },
  { id: "listen-a2-036", topic: "adjectives-ed-ing", type: "listen", q: "I am interested in history.", ru: "Мне интересна история.", answers: ["I am interested in history."] },

  { id: "listen-a2-037", topic: "vocab-travel", type: "listen", q: "I would like a return ticket to Oxford, please.", ru: "Я бы хотел билет туда и обратно до Оксфорда, пожалуйста.", answers: ["I would like a return ticket to Oxford, please."] },
  { id: "listen-a2-038", topic: "vocab-travel", type: "listen", q: "We checked into the hotel in the afternoon.", ru: "Мы заселились в отель во второй половине дня.", answers: ["We checked into the hotel in the afternoon."] },

  { id: "listen-a2-039", topic: "vocab-work", type: "listen", q: "I have a job interview tomorrow.", ru: "У меня завтра собеседование на работу.", answers: ["I have a job interview tomorrow."] },
  { id: "listen-a2-040", topic: "vocab-work", type: "listen", q: "She applied for a job at a big company.", ru: "Она подала заявку на работу в большую компанию.", answers: ["She applied for a job at a big company."] },

  { id: "listen-a2-041", topic: "collocations-make-do", type: "listen", q: "Everybody makes mistakes.", ru: "Все ошибаются.", answers: ["Everybody makes mistakes."] },
  { id: "listen-a2-042", topic: "collocations-make-do", type: "listen", q: "Can you do me a favour?", ru: "Не мог бы ты сделать мне одолжение?", answers: ["Can you do me a favour?", "Can you do me a favor?"] },

  // --- смешение Simple / Continuous ---
  { id: "listen-a2-043", topic: "present-simple-vs-continuous", type: "listen", q: "Look! The children are playing in the garden.", ru: "Смотри! Дети играют в саду.", answers: ["Look! The children are playing in the garden."] },
  { id: "listen-a2-044", topic: "present-simple-vs-continuous", type: "listen", q: "My father usually reads the news in the morning.", ru: "Мой отец обычно читает новости по утрам.", answers: ["My father usually reads the news in the morning."] },
  { id: "listen-a2-045", topic: "present-simple-vs-continuous", type: "listen", q: "Are they waiting at the station now?", ru: "Они сейчас ждут на станции?", answers: ["Are they waiting at the station now?"] },
  { id: "listen-a2-046", topic: "present-simple-vs-continuous", type: "listen", q: "Does he play the guitar every day?", ru: "Он играет на гитаре каждый день?", answers: ["Does he play the guitar every day?"] },
  { id: "listen-a2-047", topic: "present-simple-vs-continuous", type: "listen", q: "She isn't sleeping at the moment.", ru: "Она сейчас не спит.", answers: ["She isn't sleeping at the moment.","She is not sleeping at the moment."] },
  { id: "listen-a2-048", topic: "present-simple-vs-continuous", type: "listen", q: "We don't drink coffee in the evening.", ru: "Мы не пьём кофе по вечерам.", answers: ["We don't drink coffee in the evening."] },
  { id: "listen-a2-049", topic: "present-simple-vs-continuous", type: "listen", q: "Listen! Someone is singing in the kitchen.", ru: "Послушай! Кто-то поёт на кухне.", answers: ["Listen! Someone is singing in the kitchen."] },
  { id: "listen-a2-050", topic: "present-simple-vs-continuous", type: "listen", q: "They are not working today.", ru: "Сегодня они не работают.", answers: ["They are not working today.","They aren't working today."] },
  { id: "listen-a2-051", topic: "present-simple-vs-continuous", type: "listen", q: "What is Tom doing now?", ru: "Что Том сейчас делает?", answers: ["What is Tom doing now?"] },
  { id: "listen-a2-052", topic: "adverbs-frequency", type: "listen", q: "My sister always drinks tea after dinner.", ru: "Моя сестра всегда пьёт чай после ужина.", answers: ["My sister always drinks tea after dinner."] },

  // --- спорт, музыка, игры; предлоги; фразовые глаголы ---
  { id: "listen-a2-053", topic: "word-patterns", type: "listen", q: "I am interested in learning the guitar.", ru: "Я интересуюсь игрой на гитаре.", answers: ["I am interested in learning the guitar."] },
  { id: "listen-a2-054", topic: "word-patterns", type: "listen", q: "The team has a game against the champions.", ru: "У команды игра против чемпионов.", answers: ["The team has a game against the champions."] },
  { id: "listen-a2-055", topic: "word-patterns", type: "listen", q: "This singer is very popular with young people.", ru: "Этот певец очень популярен среди молодёжи.", answers: ["This singer is very popular with young people."] },
  { id: "listen-a2-056", topic: "word-patterns", type: "listen", q: "She took part in the competition.", ru: "Она приняла участие в соревновании.", answers: ["She took part in the competition."] },
  { id: "listen-a2-057", topic: "vocab-sports-games", type: "listen", q: "The captain scored two goals in the final.", ru: "Капитан забил два гола в финале.", answers: ["The captain scored two goals in the final."] },
  { id: "listen-a2-058", topic: "word-formation", type: "listen", q: "My uncle is a stamp collector.", ru: "Мой дядя — коллекционер марок.", answers: ["My uncle is a stamp collector."] },
  { id: "listen-a2-059", topic: "prepositional-phrases", type: "listen", q: "The singer is on stage now.", ru: "Певец сейчас на сцене.", answers: ["The singer is on stage now."] },
  { id: "listen-a2-060", topic: "prepositional-phrases", type: "listen", q: "We arrived in time for the concert.", ru: "Мы пришли как раз к началу концерта.", answers: ["We arrived in time for the concert."] },
  { id: "listen-a2-061", topic: "phrasal-verbs-common", type: "listen", q: "Please turn down the music.", ru: "Пожалуйста, сделай музыку потише.", answers: ["Please turn down the music."] },
  { id: "listen-a2-062", topic: "phrasal-verbs-common", type: "listen", q: "He gave up playing football last year.", ru: "В прошлом году он бросил играть в футбол.", answers: ["He gave up playing football last year."] },

  // --- Unit 8–9: предлоги времени и места, путешествия ---
  { id: "listen-a2-063", topic: "prepositions-time-place", type: "listen", q: "We usually arrive at the airport at midday.", ru: "Обычно мы приезжаем в аэропорт в полдень.", answers: ["We usually arrive at the airport at midday."] },
  { id: "listen-a2-064", topic: "prepositions-time-place", type: "listen", q: "My cousin is moving to New Zealand in July.", ru: "Мой двоюродный брат переезжает в Новую Зеландию в июле.", answers: ["My cousin is moving to New Zealand in July."] },
  { id: "listen-a2-065", topic: "prepositions-time-place", type: "listen", q: "The party is on Saturday evening.", ru: "Вечеринка в субботу вечером.", answers: ["The party is on Saturday evening."] },
  { id: "listen-a2-066", topic: "prepositions-time-place", type: "listen", q: "They fly to Asia every winter.", ru: "Каждую зиму они летают в Азию.", answers: ["They fly to Asia every winter."] },
  { id: "listen-a2-067", topic: "prepositions-time-place", type: "listen", q: "The children played on the beach all afternoon.", ru: "Дети играли на пляже весь день.", answers: ["The children played on the beach all afternoon."] },
  { id: "listen-a2-068", topic: "prepositions-time-place", type: "listen", q: "We open our presents on Christmas Day.", ru: "Мы открываем подарки в Рождество.", answers: ["We open our presents on Christmas Day."] },
  { id: "listen-a2-069", topic: "prepositional-phrases", type: "listen", q: "They went to the harbour on foot.", ru: "Они пошли в гавань пешком.", answers: ["They went to the harbour on foot.", "They went to the harbor on foot."] },
  { id: "listen-a2-070", topic: "phrasal-verbs-common", type: "listen", q: "The man got in his car and drove away.", ru: "Мужчина сел в машину и уехал.", answers: ["The man got in his car and drove away."] },
  { id: "listen-a2-071", topic: "phrasal-verbs-common", type: "listen", q: "We got off the bus and walked to the hotel.", ru: "Мы вышли из автобуса и пошли в отель.", answers: ["We got off the bus and walked to the hotel."] },
  { id: "listen-a2-072", topic: "phrasal-verbs-common", type: "listen", q: "The plane took off ten minutes late.", ru: "Самолёт взлетел с опозданием на десять минут.", answers: ["The plane took off ten minutes late.", "The plane took off 10 minutes late."] }
);
