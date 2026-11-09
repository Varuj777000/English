// =====================================================================
// topics.js — список всех тем сайта.
//
// Формат одной темы:
// {
//   id: "present-simple",      // уникальный ID латиницей через дефис.
//                              // НЕ меняйте ID у существующих тем: на него
//                              // ссылаются упражнения и ваш сохранённый прогресс.
//   level: "A1",               // уровень CEFR: A1, A2, B1, B2, C1
//   category: "grammar",       // grammar | vocabulary | reading | other
//   title: "Present Simple",   // название для людей
//   summary: "...",            // одна строка: о чём тема
//   explanation: ["...", ...], // абзацы объяснения; **так** выделяется жирным
//   examples: [ { en: "...", ru: "..." } ]  // примеры с переводом
// }
//
// Темы уровней B2 и C1 уже описаны (чтобы стартовый тест и импорт из чата
// могли на них ссылаться), но упражнения для них появятся позже.
// Сайт сам пропускает темы, у которых пока нет упражнений.
// =====================================================================

DATA.topics.push(

  // ======================= A1 — ГРАММАТИКА =======================

  {
    id: "to-be", level: "A1", category: "grammar",
    title: "Глагол to be: am / is / are",
    summary: "«Быть», «являться», «находиться» — самый частый глагол.",
    explanation: [
      "В русском «быть» в настоящем времени обычно пропускают («Я студент»). В английском пропускать нельзя: **I am a student**.",
      "**am** — только с I; **is** — с he, she, it и единственным числом; **are** — с you, we, they и множественным числом.",
      "Отрицание: добавь **not** — I'm not, he isn't, they aren't. Вопрос: поставь am/is/are в начало — **Are you** tired?",
      "Прошедшее время: **was** (I, he, she, it) и **were** (you, we, they).",
      "**Краткие формы:** I'm, you're, he's, she's, it's, we're, they're. В отрицании два варианта: he **isn't** = he's not, they **aren't** = they're not. Но только **I'm not** (не «I amn't»).",
      "**Короткие ответы:** Are you tired? — Yes, I **am**. / No, I'm **not**. В ответе «да» краткую форму не используют: ✗ Yes, I'm.",
      "**Возраст, чувства, погода — с be:** I **am** 25 (не «I have 25»). I'm hungry. It's cold. Русское «мне 25 лет» по-английски — I am 25.",
      "**Типичные ошибки:** ✗ I student → ✓ I **am a** student. ✗ He are → ✓ He **is**. ✗ Are you have a car? → ✓ **Do you have** a car? (have — другой глагол, be с ним не нужен)."
    ],
    examples: [
      { en: "I'm from Russia.", ru: "Я из России." },
      { en: "She isn't at home.", ru: "Её нет дома." },
      { en: "Are they your friends?", ru: "Это твои друзья?" },
      { en: "We were tired yesterday.", ru: "Вчера мы устали." },
      { en: "I'm 25 years old.", ru: "Мне 25 лет." },
      { en: "Is she a teacher? — Yes, she is.", ru: "Она учитель? — Да." }
    ]
  },

  {
    id: "pronouns-possessives", level: "A1", category: "grammar",
    title: "Местоимения: I / me / my / mine",
    summary: "Кто? Кого? Чей? — разные формы местоимений.",
    explanation: [
      "Кто делает (подлежащее): **I, you, he, she, it, we, they**.",
      "Кого/кому — после глагола или предлога: **me, you, him, her, it, us, them**. Call **me**. This is for **her**.",
      "Чей — перед существительным: **my, your, his, her, its, our, their** — **my** car.",
      "Чей — без существительного: **mine, yours, his, hers, ours, theirs** — The car is **mine**.",
      "**its** (его/её — о предмете или животном) пишется без апострофа. **it's** — это сокращение it is.",
      "**Себя называем последним:** My friend and **I** went to the cinema. Give it to **him and me**. После предлога — me / him / her: with **me**, ✗ with I.",
      "**Части тела и одежда — всегда my / your…, не the:** I washed **my** hands. She lost **her** keys.",
      "**his / her — по владельцу, не по предмету:** Anna loves **her** dad, Tom loves **his** dad.",
      "**Типичные ошибки:** ✗ Is this **your's**? → ✓ **yours** (без апострофа). ✗ **it's** dog → ✓ **its** dog. ✗ Me and him went… → ✓ **He and I** went…"
    ],
    examples: [
      { en: "She loves him.", ru: "Она его любит." },
      { en: "This is our house.", ru: "Это наш дом." },
      { en: "Is this bag yours?", ru: "Эта сумка твоя?" },
      { en: "The dog is eating its food.", ru: "Собака ест свою еду." },
      { en: "My friend and I went to the cinema.", ru: "Мы с другом ходили в кино." },
      { en: "She washed her hands.", ru: "Она вымыла руки." }
    ]
  },

  {
    id: "present-simple", level: "A1", category: "grammar",
    title: "Present Simple",
    summary: "Привычки, регулярные действия и факты.",
    explanation: [
      "Используем для того, что происходит регулярно, всегда, или для фактов: I **work** in an office. Water **boils** at 100 degrees.",
      "С **he, she, it** к глаголу добавляется **-s** или **-es**: she works, he goes, it watches, she studies.",
      "Отрицание и вопрос строятся с **do / does**: I **don't** like coffee. **Does** she speak English?",
      "После does и doesn't глагол БЕЗ -s: Does he **work**? He doesn't **work**. (Не «Does he works».)",
      "**-s нужен не только после he / she / it, но и после любого подлежащего-существительного в единственном числе** (одного человека, предмета или понятия): **Dad belongs** to a chess club. My **sister works** in a shop. The **shop opens** at nine. **Regular exercise helps** you sleep. **Money matters**.",
      "Как не забыть -s: мысленно замени подлежащее на **he / she / it**. Dad → he → belong**s**. Regular exercise → it → help**s**. The shop → it → open**s**. Если существительное во множественном числе (my parents, the shops) — это **they**, и -s нет: My parents **belong** to a club.",
      "Неисчисляемые слова (exercise, money, music, news, weather, water) — тоже **it**, поэтому тоже -s: Music **makes** me happy. The news **is** bad.",
      "Слова-подсказки: always, usually, often, sometimes, never, every day, on Mondays."
    ],
    examples: [
      { en: "Dad belongs to a fishing club.", ru: "Папа состоит в клубе рыболовов." },
      { en: "Regular exercise helps you sleep better.", ru: "Регулярные упражнения помогают лучше спать." },
      { en: "My parents live near the sea.", ru: "Мои родители живут у моря." },
      { en: "I get up at seven every day.", ru: "Я встаю в семь каждый день." },
      { en: "My brother lives in Moscow.", ru: "Мой брат живёт в Москве." },
      { en: "We don't watch TV.", ru: "Мы не смотрим телевизор." },
      { en: "Does your sister play games?", ru: "Твоя сестра играет в игры?" }
    ]
  },

  {
    id: "present-continuous", level: "A1", category: "grammar",
    title: "Present Continuous",
    summary: "Действие происходит прямо сейчас или в этот период.",
    explanation: [
      "Форма: **am / is / are + глагол с -ing**. I **am reading**. She **is working**.",
      "Используем, когда действие идёт прямо сейчас (now, at the moment, Look!) или временно, в этот период (this week, these days).",
      "Правописание: make → **making** (e пропадает), sit → **sitting** (согласная удваивается), lie → **lying**.",
      "Глаголы состояния обычно НЕ ставятся в -ing: know, like, love, want, need, understand, believe, own. Правильно: I **know**, а не «I'm knowing».",
      "**Отрицание и вопрос:** I'm **not** working. She **isn't** sleeping. **Are** you listening? What **is** he doing? Краткие ответы: Yes, I **am**. / No, he **isn't**.",
      "**Запланированное будущее:** I'**m meeting** Anna tomorrow. We'**re flying** to Rome on Friday. Слово tomorrow / on Friday показывает, что это будущее, а не «сейчас».",
      "**always с раздражением:** He's **always losing** his keys! — раздражает, что это происходит слишком часто.",
      "**Правописание -ing:** run → **running**, swim → **swimming** (одна гласная + согласная — удваиваем); write → **writing**, come → **coming** (e пропадает); play → **playing** (y после гласной не меняется); die → **dying**.",
      "**Помощник один:** ✗ I am study → ✓ I **am studying**. ✗ She is work → ✓ She is **working**. Не смешивайте am / is / are с do / does."
    ],
    examples: [
      { en: "I'm cooking dinner now.", ru: "Я сейчас готовлю ужин." },
      { en: "Look! It's raining.", ru: "Смотри! Идёт дождь." },
      { en: "She's working from home this week.", ru: "На этой неделе она работает из дома." },
      { en: "What are you doing?", ru: "Что ты делаешь?" },
      { en: "I'm meeting my sister tomorrow.", ru: "Завтра я встречаюсь с сестрой." },
      { en: "He isn't listening to me.", ru: "Он меня не слушает." }
    ]
  },

  {
    id: "there-is-are", level: "A1", category: "grammar",
    title: "There is / There are",
    summary: "«Есть», «находится» — когда сообщаем, что что-то где-то существует.",
    explanation: [
      "Русское «В комнате есть стол» по-английски: **There is** a table in the room. Предложение начинается с there is / there are.",
      "**There is** — с единственным числом и неисчисляемыми (There is some milk). **There are** — с множественным числом.",
      "Отрицание: There **isn't** / There **aren't any**. Вопрос: **Is there** ...? **Are there** ...?",
      "Прошедшее время: **there was** / **there were**.",
      "**Порядок:** there is / are + предмет + место: **There is** a cat **on the sofa**. (Не «On the sofa is a cat».)",
      "**Вопрос и ответ:** **Is there** a bank near here? — Yes, **there is**. / No, **there isn't**. **Are there** any shops? — Yes, there **are**.",
      "**There is ≠ It is:** there is — «есть, существует» (новая информация); it is — о конкретном предмете: **There is** a book on the table. **It is** a good book.",
      "**Типичные ошибки:** ✗ In my room has a bed → ✓ **There is** a bed in my room. ✗ There is two cats → ✓ There **are** two cats. ✗ It is a bank near here → ✓ **There is** a bank near here."
    ],
    examples: [
      { en: "There is a bank near my house.", ru: "Рядом с моим домом есть банк." },
      { en: "There are two cats in the garden.", ru: "В саду две кошки." },
      { en: "Is there a supermarket here?", ru: "Здесь есть супермаркет?" },
      { en: "There were a lot of people at the party.", ru: "На вечеринке было много людей." },
      { en: "Is there any milk? — No, there isn't.", ru: "Молоко есть? — Нет." },
      { en: "There is a café on the corner.", ru: "На углу есть кафе." }
    ]
  },

  {
    id: "articles-basic", level: "A1", category: "grammar",
    title: "Артикли a / an / the: основы",
    summary: "Когда ставить a, an, the — и когда ничего.",
    explanation: [
      "**a / an** — «один из многих», говорим о предмете впервые. Только с исчисляемыми в единственном числе: I have **a** cat.",
      "**an** ставится перед гласным ЗВУКОМ: **an** apple, **an** hour (h не читается). Но **a** university (звучит как «ю»).",
      "**the** — конкретный, уже известный предмет, или единственный в своём роде: **The** cat is black. **the** sun.",
      "Без артикля — множественное число и неисчисляемые в общем смысле: I like cats. Water is important.",
      "С профессиями нужен a/an: She's **a** doctor. I'm **an** engineer.",
      "**Первое и повторное упоминание:** I saw **a** man. **The** man was tall. Сначала a — «какой-то», потом the — «тот самый».",
      "**Единственный в своём роде (the):** the sun, the moon, the sky, the world, the internet. Также когда понятно из ситуации: Open **the** door, please (дверь в этой комнате).",
      "**Без артикля:** имена, языки, большинство стран, приёмы пищи: I like **Anna**. I speak **English**. Let's have **lunch**.",
      "**Типичные ошибки:** ✗ I have cat → ✓ I have **a** cat. ✗ She is teacher → ✓ She is **a** teacher. ✗ I like the music (вообще) → ✓ I like music."
    ],
    examples: [
      { en: "I saw a dog. The dog was very big.", ru: "Я видел собаку. Собака была очень большая." },
      { en: "She's an actor.", ru: "Она актриса." },
      { en: "Can you close the window?", ru: "Можешь закрыть окно?" },
      { en: "I love music.", ru: "Я люблю музыку." },
      { en: "I need an umbrella.", ru: "Мне нужен зонт." },
      { en: "The sun is hot today.", ru: "Сегодня жаркое солнце." }
    ]
  },

  {
    id: "plurals", level: "A1", category: "grammar",
    title: "Множественное число существительных",
    summary: "-s, -es, -ies и исключения: men, children, people.",
    explanation: [
      "Обычно добавляем **-s**: book → books.",
      "После s, ss, sh, ch, x — **-es**: bus → buses, box → boxes, watch → watches.",
      "Согласная + y → **-ies**: city → cities. Но гласная + y → просто -s: day → days, boy → boys.",
      "Часто f / fe → **-ves**: knife → knives, leaf → leaves, wife → wives.",
      "Исключения: man → **men**, woman → **women**, child → **children**, person → **people**, foot → **feet**, tooth → **teeth**, mouse → **mice**. Не меняются: sheep, fish.",
      "**people** — это множественное число: People **are** friendly.",
      "**Слова на -o:** hero → heroes, potato → potatoes, tomato → tomatoes; но photo → photos, piano → pianos.",
      "**Всегда во множественном числе:** jeans, trousers, glasses, scissors, clothes: My **jeans are** new. Чтобы сказать «одна пара»: **a pair of** jeans.",
      "**Нет множественного числа:** news, money, advice, information, hair. ✗ newses, ✗ advices. Подробнее — в теме про исчисляемые и неисчисляемые.",
      "**Числа:** после two, three… — множественное: two **books**, ten **people**. Но когда число + существительное работает как определение — единственное: a **ten-minute** walk."
    ],
    examples: [
      { en: "I have two children.", ru: "У меня двое детей." },
      { en: "There are three boxes on the table.", ru: "На столе три коробки." },
      { en: "Many cities are expensive.", ru: "Многие города дорогие." },
      { en: "I need a new pair of jeans.", ru: "Мне нужны новые джинсы." },
      { en: "There are two potatoes in the bag.", ru: "В сумке две картофелины." }
    ]
  },

  {
    id: "have-got", level: "A1", category: "grammar",
    title: "Have / have got",
    summary: "«У меня есть» — владение, семья, внешность.",
    explanation: [
      "«У меня есть машина» = I **have** a car = I**'ve got** a car. Значение одинаковое.",
      "С he, she, it: he **has** / he**'s got**.",
      "С have got вопрос и отрицание без do: **Have** you **got** a car? I **haven't got** a car.",
      "С обычным have — через do: **Do** you **have** a car? I **don't have** a car.",
      "Нельзя смешивать: «Do you have got» — ошибка. В прошедшем времени только **had**: I had a bike.",
      "**Краткие формы:** I've got, you've got, he's got, she's got. Отрицание: **haven't / hasn't got**. Ответы: Yes, I **have**. / No, she **hasn't**.",
      "**Только have (не have got):** еда и действия — have **breakfast**, have **a shower**, have **a good time**. ✗ I've got breakfast at eight → ✓ I **have** breakfast at eight.",
      "**Описание внешности:** She **has** (has got) blue eyes and long hair. He's got a beard.",
      "**Британский и американский варианты:** в Британии часто have got, в США — просто have. Оба правильные."
    ],
    examples: [
      { en: "She's got blue eyes.", ru: "У неё голубые глаза." },
      { en: "Do you have any brothers?", ru: "У тебя есть братья?" },
      { en: "We haven't got much time.", ru: "У нас мало времени." },
      { en: "I have a shower every morning.", ru: "Я принимаю душ каждое утро." },
      { en: "Has she got any children?", ru: "У неё есть дети?" }
    ]
  },

  {
    id: "can-ability", level: "A1", category: "grammar",
    title: "Can / can't / could",
    summary: "Умею, могу, можно.",
    explanation: [
      "**can + глагол без to**: I can swim. (Не «I can to swim».)",
      "У can нет окончания -s: she **can** (не «cans»).",
      "Отрицание: **can't** / cannot. Вопрос: **Can** you drive?",
      "Прошедшее время: **could** / couldn't — I **couldn't** sleep last night.",
      "Просьба и разрешение: **Can I** open the window? **Could you** help me? (could — вежливее).",
      "**Возможность и разрешение:** I **can** come on Monday (мне подходит). **Can** I sit here? (можно?)",
      "**be able to — когда у can нет нужной формы:** I **will be able to** help you tomorrow (не «will can»). **could** — общая способность в прошлом: I **could** swim when I was five. Но один конкретный раз — **was able to**: I **was able to** finish yesterday.",
      "**Просьбы по вежливости:** Can you…? (обычно), Could you…? (вежливо), Would you mind…? (очень вежливо).",
      "**Типичные ошибки:** ✗ I can to swim → ✓ I can **swim**. ✗ He cans → ✓ He **can**. ✗ Do you can swim? → ✓ **Can** you swim?"
    ],
    examples: [
      { en: "I can speak a little English.", ru: "Я немного говорю по-английски." },
      { en: "She can't come today.", ru: "Она не может прийти сегодня." },
      { en: "Could you repeat that, please?", ru: "Не могли бы вы повторить?" },
      { en: "Will you be able to come on Friday?", ru: "Ты сможешь прийти в пятницу?" },
      { en: "I could swim when I was five.", ru: "Я умел плавать в пять лет." }
    ]
  },

  {
    id: "imperatives", level: "A1", category: "grammar",
    title: "Повелительное наклонение и Let's",
    summary: "Просьбы, команды, инструкции.",
    explanation: [
      "Просто глагол в начальной форме: **Open** the door. **Sit** down, please.",
      "Отрицание — **Don't** + глагол: **Don't** worry. **Don't** be late.",
      "Предложение сделать что-то вместе — **Let's** + глагол: **Let's** go! Let's not wait.",
      "Слово **please** делает просьбу вежливой.",
      "**Вежливо:** please в начале или в конце: **Please** sit down. / Sit down, **please**. Или вопрос-просьба: **Could you** open the window?",
      "**С подлежащим — для акцента:** **You** wait here; **I'll** go. **Do** be careful! (do усиливает просьбу).",
      "**Вывески и инструкции:** No smoking. Keep left. Mind the gap. Часто без глагола или с глаголом в начале.",
      "**Типичные ошибки:** ✗ Not touch it → ✓ **Don't** touch it. ✗ Don't to be late → ✓ Don't **be** late (после don't — глагол без to). ✗ Lets to go → ✓ **Let's** go."
    ],
    examples: [
      { en: "Turn left at the corner.", ru: "Поверните налево на углу." },
      { en: "Don't touch that!", ru: "Не трогай это!" },
      { en: "Let's have lunch.", ru: "Давай пообедаем." },
      { en: "Please sit down.", ru: "Пожалуйста, садитесь." },
      { en: "Don't be afraid.", ru: "Не бойся." }
    ]
  },

  {
    id: "prepositions-place", level: "A1", category: "grammar",
    title: "Предлоги места: in / on / at и другие",
    summary: "Где находится предмет.",
    explanation: [
      "**in** — внутри: in the box, in the room, in London, in the car.",
      "**on** — на поверхности: on the table, on the wall, on the second floor. Транспорт, где можно ходить: **on** the bus, on the train, on the plane.",
      "**at** — в точке или месте, где что-то делают: at the bus stop, at the door, **at home**, **at work**, **at school**.",
      "Русское «на работе» = **at work**, «в автобусе» = **on the bus**, «на улице» = **in the street**.",
      "Другие: under (под), next to (рядом с), between (между), behind (за), in front of (перед), opposite (напротив).",
      "**Запоминаем сочетаниями:** **at** home / work / school / the station / the airport / a party; **in** bed / hospital / the country / the city; **on** the left / the right / the first floor.",
      "**in the cinema и at the cinema:** at the cinema — «в кино» (смотрим фильм, общая ситуация); in the cinema — внутри здания.",
      "**Движение:** to (куда), from (откуда), into (внутрь), out of (из). **go to** school, **come from** Russia. ✗ I go to home → ✓ I go **home** (home без to).",
      "**Типичные ошибки:** ✗ in the work → ✓ **at** work. ✗ at the bus → ✓ **on** the bus. ✗ at the street → ✓ **in** the street (британский вариант) или **on** the street (американский): оба правильные."
    ],
    examples: [
      { en: "The keys are on the table.", ru: "Ключи на столе." },
      { en: "I'm at work now.", ru: "Я сейчас на работе." },
      { en: "The bank is next to the café.", ru: "Банк рядом с кафе." },
      { en: "He's on the train.", ru: "Он в поезде." },
      { en: "I live in a small town.", ru: "Я живу в маленьком городе." },
      { en: "He's at the airport now.", ru: "Он сейчас в аэропорту." }
    ]
  },

  {
    id: "question-words", level: "A1", category: "grammar",
    title: "Вопросы и вопросительные слова",
    summary: "What, where, when, who, why, how — и порядок слов в вопросе.",
    explanation: [
      "Вопросительные слова: what (что), where (где/куда), when (когда), who (кто), why (почему), how (как), which (который), whose (чей), how much / how many (сколько), how old, how long, how often.",
      "Порядок слов: **вопросительное слово + вспомогательный глагол + подлежащее + глагол**. Where **do you live**? What **is she doing**?",
      "Если who / what — это подлежащее (кто сделал?), do не нужен: **Who lives** here? **What happened**?",
      "Нельзя говорить «Where you live?» — вспомогательный глагол обязателен.",
      "**Предлог — в конце вопроса:** **Who** are you talking **to**? **What** is it made **of**? **Where** are you **from**? В разговоре предлог в начало не ставят.",
      "**what и which:** **what** — что, какой (без выбора из набора): What music do you like? **which** — который из нескольких известных: **Which** one is yours?",
      "**how + слово:** **how long** (сколько длится), **how far** (как далеко), **how often** (как часто), **how old**, **how much** (цена: How much is it?).",
      "**Вопрос к подлежащему — без do:** **Who** wants coffee? **What** happens next? Сравните: **Who do** you want? (кого?) — здесь do нужен.",
      "**Типичные ошибки:** ✗ What time you get up? → ✓ What time **do you** get up? ✗ How much people? → ✓ How **many** people?"
    ],
    examples: [
      { en: "Where do you work?", ru: "Где ты работаешь?" },
      { en: "Why are you late?", ru: "Почему ты опоздал?" },
      { en: "How many people came?", ru: "Сколько людей пришло?" },
      { en: "Who called you?", ru: "Кто тебе звонил?" },
      { en: "Who are you talking to?", ru: "С кем ты разговариваешь?" },
      { en: "What time does the film start?", ru: "Во сколько начинается фильм?" }
    ]
  },

  {
    id: "this-that-these-those", level: "A1", category: "grammar",
    title: "This / that / these / those",
    summary: "Этот, тот, эти, те.",
    explanation: [
      "**this** — этот (один, близко), **these** — эти (много, близко).",
      "**that** — тот (один, далеко), **those** — те (много, далеко).",
      "Глагол согласуется: This **is**, These **are**, That **is**, Those **are**.",
      "**Без существительного:** This is my brother. **That's** a good idea. **Those** are mine.",
      "**По телефону и при знакомстве:** **This is** Anna (я Анна). Is **that** Tom? (спрашиваем о собеседнике).",
      "**Единственное и множественное:** this book — these **books**; that man — those **men**. ✗ These book is → ✓ **This** book is / **These** books are.",
      "**Время:** this morning / this week — сегодня утром / на этой неделе; **that** day — тот день (в рассказе о прошлом).",
      "**Произношение:** this [ðɪs] ≠ these [ðiːz] — разница в длине гласной. С these / those артикль не нужен: ✗ the these books."
    ],
    examples: [
      { en: "This is my brother.", ru: "Это мой брат." },
      { en: "These shoes are new.", ru: "Эти туфли новые." },
      { en: "Who are those people?", ru: "Кто те люди?" },
      { en: "This is Anna, my friend.", ru: "Это Анна, моя подруга." },
      { en: "Are those your keys?", ru: "Это твои ключи?" }
    ]
  },

  {
    id: "countable-uncountable", level: "A1", category: "grammar",
    title: "Исчисляемые и неисчисляемые существительные",
    summary: "Почему нельзя сказать «an advice» или «informations».",
    explanation: [
      "Исчисляемые можно посчитать: an apple, two apples.",
      "Неисчисляемые нельзя: **water, money, information, advice, news, furniture, bread, luggage, homework, work** (работа). У них нет a/an и нет -s.",
      "С неисчисляемыми глагол в единственном числе: The news **is** good. Your advice **was** useful.",
      "Ловушка для русских: «информация», «советы», «новости», «деньги» — в английском неисчисляемые: some information, some advice, the money **is**.",
      "Чтобы посчитать: **a piece of** advice, a bottle of water, a loaf of bread, a cup of tea.",
      "**Количество:** с исчисляемыми — many, a few, a/an; с неисчисляемыми — much, a little. **a lot of / some** — с любыми. Подробнее — в теме про much / many.",
      "**Ещё неисчисляемые:** hair (волосы) — My hair **is** long; fruit, rice, traffic, weather, health, music, progress, travel.",
      "**Слова с двумя значениями:** a **glass** (стакан) — **glass** (стекло); a **paper** (газета, статья) — **paper** (бумага); a **chicken** — chicken (мясо). Во втором значении слово неисчисляемое.",
      "**Порции в кафе:** Two **coffees**, please — так можно, когда имеем в виду порции.",
      "**Типичные ошибки:** ✗ an advice → ✓ **some** advice. ✗ informations → ✓ information. ✗ The news are good → ✓ The news **is** good."
    ],
    examples: [
      { en: "Can you give me some advice?", ru: "Можешь дать мне совет?" },
      { en: "I need some information.", ru: "Мне нужна информация." },
      { en: "Where is the money?", ru: "Где деньги?" },
      { en: "Her hair is very long.", ru: "У неё очень длинные волосы." },
      { en: "Can I have two coffees, please?", ru: "Можно мне два кофе, пожалуйста?" }
    ]
  },

  {
    id: "some-any", level: "A1", category: "grammar",
    title: "Some / any / no",
    summary: "«Немного», «какие-нибудь», «никаких».",
    explanation: [
      "**some** — в утвердительных предложениях: I have **some** friends in London.",
      "**any** — в отрицаниях и вопросах: I don't have **any** money. Do you have **any** questions?",
      "В просьбах и предложениях — **some**: Would you like **some** tea? Can I have **some** water?",
      "**no** = not any: There's **no** milk = There isn't **any** milk.",
      "То же с составными словами: something / anything / nothing, somebody / anybody / nobody.",
      "**any в утверждениях — «любой»:** You can take **any** book (какую хочешь). **Anyone** can do it.",
      "**Просьбы и предложения — some:** Would you like **some** coffee? Can I have **some** water? Мы ожидаем ответ «да».",
      "**Составные слова:** somebody / something / somewhere — в утверждениях; anybody / anything / anywhere — в вопросах и отрицаниях; nobody / nothing / nowhere. Глагол после них — в единственном числе: Everyone **is** here. Nobody **knows**.",
      "**Нельзя двойное отрицание:** ✗ I don't know nothing → ✓ I don't know **anything** / I know **nothing**.",
      "**Типичные ошибки:** ✗ Do you have some questions? → ✓ Do you have **any** questions? ✗ There isn't some milk → ✓ There isn't **any** milk."
    ],
    examples: [
      { en: "There are some apples in the fridge.", ru: "В холодильнике есть яблоки." },
      { en: "Is there anything to eat?", ru: "Есть что-нибудь поесть?" },
      { en: "I have no idea.", ru: "Понятия не имею." },
      { en: "Would you like some tea?", ru: "Хочешь чаю?" },
      { en: "I don't know anyone here.", ru: "Я здесь никого не знаю." }
    ]
  },

  {
    id: "word-order", level: "A1", category: "grammar",
    title: "Порядок слов в предложении",
    summary: "Кто — делает — что — где — когда.",
    explanation: [
      "В русском порядок слов свободный, в английском — строгий: **подлежащее + глагол + дополнение + место + время**.",
      "I **met my friend in the park yesterday**. (Не «Yesterday in the park I my friend met».)",
      "Прилагательное стоит перед существительным: a **big red** car.",
      "Наречия частоты — перед основным глаголом: I **often** go, She **never** eats meat.",
      "**very much** — в конце: I like it **very much**. (Не «I very much like it».)",
      "**Место перед временем:** I went **to the cinema yesterday**. Порядок: место → время.",
      "**Наречия already, just, still — перед основным глаголом:** I have **just** finished. **never, always** после be: She **is never** late. Слова времени (yesterday, today) — в конце или в начале: **Yesterday** I stayed at home.",
      "**Прямое дополнение — сразу после глагола:** I like English **very much**. ✗ I like very much English.",
      "**Вопросы:** вспомогательный глагол перед подлежащим: **Do you** like it? **Where is** he? Подробнее — в теме про вопросы.",
      "**Типичные ошибки:** ✗ I very much like it → ✓ I like it **very much**. ✗ I yesterday saw him → ✓ I saw him **yesterday**."
    ],
    examples: [
      { en: "She speaks English very well.", ru: "Она очень хорошо говорит по-английски." },
      { en: "We bought a new car last month.", ru: "В прошлом месяце мы купили новую машину." },
      { en: "I usually drink coffee in the morning.", ru: "Утром я обычно пью кофе." },
      { en: "I have just finished my homework.", ru: "Я только что закончил домашнее задание." },
      { en: "She is always on time.", ru: "Она всегда приходит вовремя." }
    ]
  },

  // ======================= A2 — ГРАММАТИКА =======================

  {
    id: "past-simple", level: "A2", category: "grammar",
    title: "Past Simple",
    summary: "Законченные действия в прошлом: вчера, в 2020 году, неделю назад.",
    explanation: [
      "Используем для законченных действий в прошлом, часто с указанием времени: yesterday, last week, in 2020, two days **ago**.",
      "Правильные глаголы: **+ed** — work → worked, stop → stopped, study → studied, live → lived.",
      "Неправильные глаголы нужно запомнить: go → **went**, see → **saw**, buy → **bought**, have → **had**, make → **made**, take → **took**.",
      "Отрицание и вопрос — через **did / didn't**, а глагол в начальной форме: I **didn't go**. **Did** you **see** it? (Не «Did you saw».)",
      "**Вопросы и ответы:** **Did** you **go** out? — Yes, I **did**. / No, I **didn't**. С вопросительным словом: **Where did** you **go**? Вопрос к подлежащему — без did: **Who called** you?",
      "**to be в прошедшем — без did:** I **was** at home. **Were** you tired? (was / were заменяют did.)",
      "**Правописание -ed:** stop → **stopped**, plan → **planned** (одна гласная + согласная — удваиваем); study → **studied**, cry → **cried** (согласная + y → ied); play → **played** (гласная + y не меняется).",
      "**Произношение -ed:** [t] после глухих звуков (worked), [d] после звонких (played), [ɪd] после t и d (wanted, needed).",
      "**Типичные ошибки:** ✗ I didn't went → ✓ I **didn't go** (после didn't — начальная форма). ✗ Did you saw it? → ✓ Did you **see** it?"
    ],
    examples: [
      { en: "I watched a film yesterday.", ru: "Вчера я посмотрел фильм." },
      { en: "We went to Italy last summer.", ru: "Прошлым летом мы ездили в Италию." },
      { en: "She didn't call me.", ru: "Она мне не позвонила." },
      { en: "Did you buy the tickets?", ru: "Ты купил билеты?" },
      { en: "Where did you go on holiday?", ru: "Куда ты ездил в отпуск?" },
      { en: "Who called you last night?", ru: "Кто звонил тебе вчера вечером?" }
    ]
  },

  {
    id: "irregular-verbs", level: "A2", category: "grammar",
    title: "Неправильные глаголы",
    summary: "Went, bought, took, knew — самые частые, по группам.",
    explanation: [
      "**Правильные** глаголы образуют прошедшее время добавлением **-ed**: work → worked. **Неправильные** этого правила не знают — их формы нужно выучить: buy → **bought**, а не «buyed».",
      "У каждого глагола три формы: **V1** (начальная) — **V2** (Past Simple) — **V3** (для Present Perfect и пассива). В Past Simple берём **V2**: I **took** a photo. В Present Perfect — **V3**: I've **taken** a photo.",
      "После **did / didn't** глагол снова в начальной форме (V1), без изменений: Did you **take** it? I didn't **take** it.",
      "**Все три формы одинаковые:** put – put – put (класть), cut – cut – cut (резать), hit (ударять), let (позволять), set (устанавливать), shut (закрывать), hurt (причинять боль), cost (стоить). **read** — читается по-разному: read [ри:д] – read [рэд] – read [рэд].",
      "**V2 = V3, окончание -ought / -aught:** buy – bought – bought (покупать), think – thought – thought (думать), bring – brought – brought (приносить), catch – caught – caught (ловить), teach – taught – taught (учить, преподавать).",
      "**V2 = V3, окончание -t:** send – sent – sent (отправлять), spend – spent – spent (тратить), lend – lent – lent (одалживать), build – built – built (строить), lose – lost – lost (терять), leave – left – left (уходить, оставлять), keep – kept – kept (хранить), sleep – slept – slept (спать), feel – felt – felt (чувствовать), meet – met – met (встречать).",
      "**V2 = V3, другие:** make – made – made (делать), say – said – said (говорить), pay – paid – paid (платить), tell – told – told (рассказывать), sell – sold – sold (продавать), hold – held – held (держать), find – found – found (находить), stand – stood – stood (стоять), understand – understood – understood (понимать), hear – heard – heard (слышать), have – had – had (иметь), win – won – won (выигрывать), sit – sat – sat (сидеть), get – got – got (получать).",
      "**Пары с -ew / -own:** know – knew – known (знать), grow – grew – grown (расти), throw – threw – thrown (бросать), fly – flew – flown (летать), draw – drew – drawn (рисовать).",
      "**V3 заканчивается на -en:** take – took – taken (брать), give – gave – given (давать), see – saw – seen (видеть), write – wrote – written (писать), drive – drove – driven (водить машину), ride – rode – ridden (ездить верхом, на велосипеде), break – broke – broken (ломать), speak – spoke – spoken (говорить), choose – chose – chosen (выбирать), forget – forgot – forgotten (забывать), wake – woke – woken (просыпаться), wear – wore – worn (носить одежду), eat – ate – eaten (есть), fall – fell – fallen (падать).",
      "**Гласные i – a – u:** begin – began – begun (начинать), drink – drank – drunk (пить), swim – swam – swum (плавать), sing – sang – sung (петь), run – ran – run (бежать), come – came – come (приходить).",
      "**Особые:** go – went – gone (идти; been — «был, ездил»), do – did – done (делать), be – was / were – been (быть).",
      "**Типичные ошибки:** ❌ maked → ✅ made. ❌ knowed → ✅ knew. ❌ taked → ✅ took. ❌ buyed → ✅ bought. ❌ goed → ✅ went. ❌ thinked → ✅ thought. ❌ eated → ✅ ate. Если не уверен — это неправильный глагол, и «-ed» в нём почти точно лишнее.",
      "**Смысл подсказывает глагол.** В предложении «I haven't got a camera any more because I ___ it in May» по смыслу подходит sold (продал), lost (потерял) или gave (отдал), но не bought (купил — тогда камера бы у тебя была). Сначала пойми логику, потом подставляй форму."
    ],
    examples: [
      { en: "I bought a jacket last week.", ru: "На прошлой неделе я купил куртку." },
      { en: "She knew the answer, but she didn't say it.", ru: "Она знала ответ, но не сказала его." },
      { en: "My dad made a cake for my birthday.", ru: "Папа испёк торт на мой день рождения." },
      { en: "We took a taxi because it was raining.", ru: "Мы взяли такси, потому что шёл дождь." },
      { en: "He went to bed late and slept badly.", ru: "Он лёг поздно и плохо спал." }
    ]
  },

  {
    id: "spelling-rules", level: "A2", category: "grammar",
    title: "Правописание: -ing, -ed, -s/-es",
    summary: "Running, winning, stopped, studies — когда удваивать букву.",
    explanation: [
      "**Главное правило удвоения.** Если слово из одного слога заканчивается на **краткий гласный + одну согласную**, то перед -ing и -ed эта согласная **удваивается**: run → **runn**ing, win → **winn**ing, sit → **sitt**ing, swim → **swimm**ing, get → **gett**ing, stop → **stopp**ed, plan → **plann**ed.",
      "Не удваиваем, если: две согласные в конце (work → working, help → helping), два гласных (wait → waiting, eat → eating) или буквы **w, x, y** (show → showing, fix → fixing, play → playing).",
      "Слова из двух слогов: удваиваем только если ударение на **последнем** слоге: be**gin** → beginning, pre**fer** → preferred. Если ударение на первом — не удваиваем: **vi**sit → visiting, **o**pen → opened, **lis**ten → listening.",
      "**-ing, глагол на -e:** немое **e** пропадает: make → **making**, write → **writing**, have → **having**, come → **coming**, take → **taking**. Исключения: be → being, see → seeing.",
      "**-ing, глагол на -ie:** **ie → y**: lie → **lying**, die → **dying**, tie → **tying**. А **-y** в обычных глаголах остаётся: study → studying, try → trying, play → playing.",
      "**-ed, глагол на -e:** добавляем только **-d**: live → lived, like → liked, love → loved.",
      "**-ed, согласная + y:** **y → ied**: study → **studied**, try → **tried**, cry → **cried**. Но гласная + y — просто -ed: play → played, enjoy → enjoyed.",
      "**-s / -es** (he/she/it и множественное число существительных): обычно **+s** (works, plays). После **-s, -sh, -ch, -x, -z, -o** — **+es**: watch → **watches**, wash → **washes**, fix → **fixes**, pass → **passes**, go → **goes**. Согласная + y → **ies**: study → **studies**, try → **tries**, fly → **flies**. Гласная + y — просто -s: play → plays, buy → buys.",
      "**Примеры из уроков:** drop → **dropped**, plan → **planned**, stop → **stopped** (краткий гласный + одна согласная — удваиваем); start → **started**, mention → **mentioned** (две согласные в конце или ударение не на последнем слоге — не удваиваем); tidy → **tidied** (согласная + y → ied).",
      "**Типичные ошибки:** ❌ runing → ✅ running. ❌ wining → ✅ winning. ❌ stoped → ✅ stopped. ❌ writting → ✅ writing. ❌ haveing → ✅ having. ❌ studing → ✅ studying. ❌ studyed → ✅ studied. ❌ watchs → ✅ watches. Проверка: произнеси слово — краткий гласный (run, win, stop) → удваиваем; «длинный» или буква e на конце (write, make) → не удваиваем."
    ],
    examples: [
      { en: "Why are you running so fast?", ru: "Почему ты так быстро бежишь?" },
      { en: "Our team is winning the match.", ru: "Наша команда выигрывает матч." },
      { en: "The bus stopped at the corner.", ru: "Автобус остановился на углу." },
      { en: "She is writing a letter and having tea.", ru: "Она пишет письмо и пьёт чай." },
      { en: "She studied all night and passed the exam.", ru: "Она училась всю ночь и сдала экзамен." }
    ]
  },

  {
    id: "past-continuous", level: "A2", category: "grammar",
    title: "Past Continuous",
    summary: "Действие шло в какой-то момент в прошлом.",
    explanation: [
      "Форма: **was / were + глагол с -ing**. I **was sleeping**. They **were playing**.",
      "Действие продолжалось в конкретный момент прошлого: At 8 pm I **was watching** TV.",
      "Длинное действие прервано коротким (Past Simple): I **was cooking** when the phone **rang**.",
      "**while** + длительное действие: **While** I was walking, it started to rain.",
      "**was или were?** **was** — с I, he, she, it (и с любым подлежащим-«он/она/оно»: Dad was, the shop was). **were** — с you, we, they (и с подлежащим во множественном числе: my parents were). **С you — всегда were, даже когда ты один**: ❌ Was you having lunch? → ✅ **Were** you having lunch?",
      "Вопрос — помощник в начало: **Was** he sleeping? **Were** you waiting? **What were** they doing? Отрицание: **wasn't / weren't** + глагол-ing: She **wasn't listening**. Do/did тут не нужны (как и в Present Continuous)."
    ],
    examples: [
      { en: "Were you having lunch when I called?", ru: "Ты обедал, когда я звонил?" },
      { en: "What were you doing at ten o'clock?", ru: "Что ты делал в десять часов?" },
      { en: "It was raining when I left.", ru: "Когда я вышел, шёл дождь." },
      { en: "I saw him while I was waiting for the bus.", ru: "Я увидел его, пока ждал автобус." }
    ]
  },

  {
    id: "present-simple-vs-continuous", level: "A2", category: "grammar",
    title: "Present Simple или Present Continuous",
    summary: "«Обычно» или «сейчас» — и не смешивать детали двух времён.",
    explanation: [
      "Сначала выбери время. **Present Simple** — то, что происходит регулярно, всегда или это просто факт: I usually **drive** to work. **Present Continuous** — то, что происходит прямо сейчас или временно: Today I**'m taking** the bus.",
      "Подсказки для Simple: usually, always, often, every day, on Mondays. Для Continuous: now, at the moment, today, this week, Look!, Listen!",
      "**Постоянное или временное?** Это тоже выбор между наборами. **Постоянно, надолго** (always, usually, every day, обычно) → **Simple**: I **work** in a bank. **Временно, на ограниченный срок** (for the summer, this week, these days, for now, until + событие) → **Continuous**: I**'m working** at the library for the summer. I**'m using** my brother's guitar until I get a new one. My sister**'s staying** with us this week.",
      "Вопрос себе: «Это так всегда или только пока?» Если только пока — Continuous. После until (пока не) глагол стоит в Simple: ... until I **get** a new one (не «will get» и не «am getting»).",
      "**Правило 1. Два «набора» — не смешивай детали.**",
      "• Набор Present Simple: **без am/is/are**. Глагол — обычная форма (у he/she/it добавляем **-s**). Вопрос и отрицание — через **do / does / don't / doesn't** + глагол **без -s и без -ing**: She **doesn't like** tea. **Does** he **work** here?",
      "• Набор Present Continuous: **am / is / are + глагол с -ing**. Вопрос и отрицание — через сам am/is/are: She **isn't listening**. **Is** he **working** now?",
      "Детали из разных наборов склеивать нельзя. Ошибки такого рода: «are study», «does listening», «am usually buy», «is starts», «don't touching». Правильно: **are studying** (Continuous) или **study** (Simple) — но не вперемешку. Как проверить себя: увидел am/is/are — глагол должен быть с -ing; увидел do/does — глагол «голый».",
      "**Правило 2. В предложении нужен ровно один помощник.** Если в утверждении **уже есть am/is/are**, то вопрос получается переносом его в начало: She **is** listening → **Is** she listening? Слово do/does при этом **не нужно**. Если помощника **нет** — добавляется do/does: She listens → **Does** she **listen**? (а -s переходит на does, поэтому у глагола его уже нет).",
      "Глаголы состояния (know, like, want, need, understand, believe) — почти всегда в Simple, даже «сейчас»: I **need** help now. Подробнее — в теме «Глаголы состояния»."
    ],
    examples: [
      { en: "She usually walks to work.", ru: "Она обычно ходит на работу пешком." },
      { en: "She is walking to work now.", ru: "Сейчас она идёт на работу пешком." },
      { en: "Does he play tennis every day?", ru: "Он играет в теннис каждый день?" },
      { en: "Is he playing tennis at the moment?", ru: "Он играет в теннис в данный момент?" },
      { en: "I work in a bank, but this summer I'm working at a café.", ru: "Я работаю в банке, но этим летом работаю в кафе." },
      { en: "Look! The baby isn't sleeping.", ru: "Смотри! Малыш не спит." },
      { en: "Listen! They are singing in the next room.", ru: "Послушай! Они поют в соседней комнате." },
      { en: "My brother doesn't eat meat.", ru: "Мой брат не ест мясо." }
    ]
  },

  {
    id: "stative-verbs", level: "A2", category: "grammar",
    title: "Глаголы состояния (stative verbs)",
    summary: "Know, like, want, need — глаголы, которые не ставят в Continuous.",
    explanation: [
      "Есть глаголы, которые описывают **не действие, а состояние**: знание, чувство, желание, обладание. Их обычно **не используют в Continuous**, даже если это происходит «прямо сейчас».",
      "Частые глаголы состояния: **know, understand, believe, remember, forget** (мышление); **like, love, hate, prefer, want, need** (чувства и желания); **belong, own, have** (= «иметь», обладание), **seem, mean, cost** (прочее).",
      "Используем **Present Simple**: I **know** the answer. She **wants** some water. This bag **belongs** to me.",
      "Типичные ошибки: ❌ I am knowing → ✅ I **know**. ❌ He is wanting a coffee → ✅ He **wants** a coffee. ❌ We are loving this song → ✅ We **love** this song. ❌ Are you understanding me? → ✅ Do you **understand** me?",
      "Вопрос и отрицание — через **do/does**: Do you **need** help? He **doesn't believe** me.",
      "Осторожно: **have** в значении действия («есть, принимать, проводить») — обычный глагол: We**'re having** dinner. They**'re having** a great time. А **have** = «иметь» — состояние: I **have** a car (не «I'm having a car»)."
    ],
    examples: [
      { en: "I don't understand this word.", ru: "Я не понимаю это слово." },
      { en: "Do you know her name?", ru: "Ты знаешь, как её зовут?" },
      { en: "She needs a new phone.", ru: "Ей нужен новый телефон." },
      { en: "This house belongs to my grandparents.", ru: "Этот дом принадлежит моим бабушке и дедушке." },
      { en: "We're having lunch right now.", ru: "Мы сейчас обедаем." }
    ]
  },

  {
    id: "present-perfect", level: "A2", category: "grammar",
    title: "Present Perfect",
    summary: "Опыт, результат к настоящему моменту, for / since.",
    explanation: [
      "Форма: **have / has + третья форма глагола** (V3): I **have seen**, she **has finished**, we **have been**.",
      "Опыт в жизни (без указания когда): I**'ve been** to London. Have you **ever** tried sushi?",
      "Результат важен сейчас: I**'ve lost** my keys (и сейчас их нет).",
      "Слова-подсказки: just, already, yet, ever, never, recently, so far.",
      "Период до настоящего момента — **for** (сколько) и **since** (с какого момента): I**'ve lived** here **for** five years / **since** 2020. Русское «Я живу здесь 5 лет» ≠ «I live here for 5 years».",
      "**been** — был и вернулся, **gone** — уехал и сейчас там: She's **gone** to Paris.",
      "**Вопросы и отрицание:** **Have** you ever **been** to Spain? She **hasn't** called **yet**. Краткие ответы: Yes, I **have**. / No, she **hasn't**.",
      "**Место слов:** **just, already, ever, never** стоят между have и V3: I have **just** finished. **yet** — в конце вопросов и отрицаний: Have you finished **yet**?",
      "**Нельзя указывать законченное время:** ✗ I have seen him yesterday → ✓ I **saw** him yesterday (Past Simple). Вопрос **When…?** — тоже Past Simple.",
      "**Третью форму запоминайте:** go – went – **gone**, see – saw – **seen**, do – did – **done**, write – wrote – **written**. Тренировка — в разделе «Глаголы».",
      "**Новость, потом детали:** Present Perfect часто начинает разговор: «I've lost my phone!», а подробности уже в Past Simple: I left it on the bus."
    ],
    examples: [
      { en: "I've just finished my work.", ru: "Я только что закончил работу." },
      { en: "Have you done your homework yet?", ru: "Ты уже сделал домашнее задание?" },
      { en: "We've known each other since school.", ru: "Мы знаем друг друга со школы." },
      { en: "She has never been to Spain.", ru: "Она никогда не была в Испании." },
      { en: "Have you seen my keys?", ru: "Ты не видел мои ключи?" },
      { en: "She hasn't called me yet.", ru: "Она мне ещё не звонила." }
    ]
  },

  {
    id: "past-simple-vs-present-perfect", level: "A2", category: "grammar",
    title: "Past Simple или Present Perfect",
    summary: "Когда нужно «saw», а когда «have seen».",
    explanation: [
      "Если указано **законченное время** (yesterday, last year, in 2019, two days ago) — только **Past Simple**: I **saw** it last year.",
      "Вопрос **When...?** — тоже Past Simple: When **did** you **arrive**?",
      "Если время не указано или период ещё не закончился (today, this week, ever, never, yet, already, just) — **Present Perfect**: I**'ve seen** this film.",
      "Типичная схема разговора: сначала Present Perfect (новость), потом детали в Past Simple: I**'ve been** to Rome. I **went** there in 2019.",
      "**Быстрый тест:** есть ли слово из законченного прошлого (yesterday, last week, in 2019, ago)? Да → **Past Simple**. Нет, а период связан с настоящим (ever, already, yet, just, this week) → **Present Perfect**.",
      "**Сравните:** I **lived** in London for two years (сейчас не живу). I **have lived** in London for two years (живу до сих пор).",
      "**today / this week / this year:** пока период не закончился — Perfect: I've seen him **today**. Закончился — Simple: I **saw** him this morning (сейчас уже вечер).",
      "**Американский вариант:** в США часто используют Past Simple там, где в Британии Present Perfect: Did you eat yet?",
      "**Типичные ошибки:** ✗ I have seen him yesterday → ✓ I **saw** him yesterday. ✗ Did you ever been to Paris? → ✓ Have you ever **been** to Paris?"
    ],
    examples: [
      { en: "I've lost my phone. I lost it yesterday.", ru: "Я потерял телефон. Потерял вчера." },
      { en: "Have you ever been to Paris?", ru: "Ты когда-нибудь был в Париже?" },
      { en: "When did you start learning English?", ru: "Когда ты начал учить английский?" },
      { en: "I lived in Moscow for ten years.", ru: "Я прожил в Москве десять лет (и уже не живу там)." },
      { en: "I've lived here since 2020.", ru: "Я живу здесь с 2020 года." }
    ]
  },

  {
    id: "future-going-to", level: "A2", category: "grammar",
    title: "Be going to и планы на будущее",
    summary: "Намерения, договорённости и предсказания по признакам.",
    explanation: [
      "**am / is / are going to + глагол** — намерение, план: I**'m going to** buy a new laptop.",
      "Предсказание, когда есть видимые признаки: Look at those clouds! It**'s going to** rain.",
      "Точная договорённость (есть время, место, билеты) — часто **Present Continuous**: I**'m meeting** Anna tomorrow at six.",
      "**Отрицание и вопрос:** I'**m not going to** tell you. **Are** you **going to** come? What **are** you **going to** do? Краткие ответы: Yes, I **am**. / No, I'm **not**.",
      "**going to vs will:** план, принятый ДО разговора — **going to**: I'm going to cook tonight. Решение прямо сейчас — **will**: It's cold. I'll close the window.",
      "**Признаки:** Look at the sky! It's **going to** rain. Watch out! You're **going to** fall.",
      "**Типичные ошибки:** ✗ I going to buy → ✓ I **am** going to buy. ✗ I'm going to to go → ✓ I'm going **to go** (или просто I'm going to the cinema)."
    ],
    examples: [
      { en: "We're going to visit my parents this weekend.", ru: "В эти выходные мы собираемся навестить моих родителей." },
      { en: "Be careful! You're going to fall!", ru: "Осторожно! Ты сейчас упадёшь!" },
      { en: "I'm flying to Kazan on Friday.", ru: "В пятницу я лечу в Казань." },
      { en: "What are you going to do tonight?", ru: "Что ты собираешься делать сегодня вечером?" },
      { en: "I'm not going to tell anyone.", ru: "Я никому не собираюсь говорить." }
    ]
  },

  {
    id: "future-will", level: "A2", category: "grammar",
    title: "Future Simple: will",
    summary: "Решение в момент речи, обещания, предсказания-мнения.",
    explanation: [
      "**will + глагол** (для всех лиц). Отрицание: **won't** (= will not).",
      "Решение, принятое прямо сейчас: The phone is ringing. — I**'ll** get it!",
      "Обещания и предложения помощи: I**'ll** help you. I **won't** tell anyone.",
      "Мнение о будущем, часто после I think, I'm sure, probably: I think it **will** be sunny.",
      "Для заранее обдуманного плана лучше **going to**: I'm going to study medicine.",
      "**will + be** — когда в русском «будет / будут» без другого глагола: It **will be** cold tomorrow. There **will be** a test on Monday. Отрицание — **won't be**, и **be** терять нельзя: ❌ There won't a test → ❌ There won't → ✅ There **won't be** a test. Вопрос: **Will** there **be** a party? Will you **be** at home tonight?",
      "**Shall I / Shall we** — предложение или вопрос «как лучше?» (только с I и we): **Shall I** open the window? (Открыть окно?) **Shall we** go by bus? (Поедем на автобусе?) Ответ: Yes, please. / Good idea. Не путай с «Will you…?» — это просьба: **Will you** open the window, please? (Открой, пожалуйста.)",
      "Время-маркеры: tomorrow, next week, soon, in a year, probably, I think. После **when / as soon as / if** will НЕ ставим (см. тему про time clauses)."
    ],
    examples: [
      { en: "I'll call you later.", ru: "Я позвоню тебе позже." },
      { en: "Don't worry, I won't be late.", ru: "Не волнуйся, я не опоздаю." },
      { en: "I think you'll like this film.", ru: "Думаю, тебе понравится этот фильм." },
      { en: "There won't be any tickets left on Friday.", ru: "В пятницу билетов не останется." },
      { en: "Shall I carry your bag?", ru: "Понести твою сумку?" },
      { en: "Shall we have lunch at one?", ru: "Давай пообедаем в час?" }
    ]
  },

  {
    id: "comparatives-superlatives", level: "A2", category: "grammar",
    title: "Сравнение прилагательных",
    summary: "Bigger, more expensive, the best.",
    explanation: [
      "Короткие прилагательные: **+er / the +est** — cheap → cheaper → the cheapest; big → bigger → the biggest; easy → easier → the easiest.",
      "Длинные: **more / the most** — expensive → more expensive → the most expensive.",
      "Исключения: good → **better** → the **best**; bad → **worse** → the **worst**; far → **further** → the furthest.",
      "Сравнение — со словом **than**: This car is faster **than** mine.",
      "Равенство: **as ... as** — She's **as** tall **as** her father.",
      "Нельзя удваивать: «more better», «more cheaper» — ошибка.",
      "**Правописание:** big → **bigger**, hot → **hotter** (удвоение); easy → **easier**, happy → **happier** (y → i); nice → **nicer** (на -e добавляем только -r).",
      "**Двусложные:** на -y — easier; на -ow, -le, -er часто тоже -er (narrow → narrower, clever → cleverer); остальные — **more**: more careful, more modern.",
      "**Усиление:** **much / a lot / far** + сравнительная: **much** bigger. **a bit / slightly** — чуть-чуть: **a bit** cheaper.",
      "**the + превосходная + in / of:** после места и группы людей обычно **in** (the best student **in** the class, the tallest **in** the team); перед «всеми» или числом — **of** (the tallest **of** all, the best **of** the three).",
      "**Типичные ошибки:** ✗ more better → ✓ **better**. ✗ the most biggest → ✓ the **biggest**. ✗ bigger **that** → ✓ bigger **than**."
    ],
    examples: [
      { en: "Moscow is bigger than Kazan.", ru: "Москва больше Казани." },
      { en: "This is the best day of my life!", ru: "Это лучший день в моей жизни!" },
      { en: "English is not as difficult as Chinese.", ru: "Английский не такой сложный, как китайский." },
      { en: "My brother is much taller than me.", ru: "Мой брат намного выше меня." },
      { en: "This is the most expensive hotel in town.", ru: "Это самый дорогой отель в городе." }
    ]
  },

  {
    id: "adverbs-frequency", level: "A2", category: "grammar",
    title: "Наречия частоты",
    summary: "Always, usually, often, sometimes, never — и где их ставить.",
    explanation: [
      "Порядок от «всегда» к «никогда»: **always → usually → often → sometimes → rarely → never**.",
      "Ставим **перед основным глаголом**: I **often** go to the gym.",
      "Но **после to be**: She **is always** late.",
      "Выражения once a week, twice a month, every day — обычно **в конце**: I call my mum **every day**.",
      "Вопрос: **How often** do you ...?",
      "**Проценты (примерно):** always — 100%, usually — 80%, often — 60%, sometimes — 40%, rarely / seldom — 10%, never — 0%.",
      "**Вопрос и отрицание:** Do you **often** go out? She doesn't **usually** drink coffee. Наречие стоит между вспомогательным и основным глаголом.",
      "**never уже отрицание:** ✗ I don't never go → ✓ I **never** go.",
      "**С have и модальными:** после первого вспомогательного: I **have never** been there. You **can always** call me.",
      "**Обороты:** every day, once a week, twice a month, three times a year; **hardly ever** — почти никогда: I **hardly ever** watch TV."
    ],
    examples: [
      { en: "I usually have breakfast at eight.", ru: "Я обычно завтракаю в восемь." },
      { en: "He is never at home.", ru: "Его никогда нет дома." },
      { en: "We go to the cinema once a month.", ru: "Мы ходим в кино раз в месяц." },
      { en: "I hardly ever watch TV.", ru: "Я почти никогда не смотрю телевизор." },
      { en: "How often do you go to the gym?", ru: "Как часто ты ходишь в спортзал?" }
    ]
  },

  {
    id: "prepositions-time", level: "A2", category: "grammar",
    title: "Предлоги времени: in / on / at",
    summary: "At 5 o'clock, on Monday, in July.",
    explanation: [
      "**at** — точное время и некоторые выражения: at 5 o'clock, at noon, **at night**, at the weekend, at Christmas.",
      "**on** — дни и даты: on Monday, on 5 May, **on my birthday**, on Friday evening.",
      "**in** — месяцы, годы, времена года, части дня, века: in July, **in 1995**, in summer, **in the morning**, in the 21st century.",
      "**Без предлога** перед this, next, last, every, tomorrow, yesterday: **next week** (не «in next week»), **last year**, every day.",
      "**in** + период = «через»: I'll be back **in** ten minutes.",
      "**Части суток:** **in** the morning / afternoon / evening, но **at** night; с конкретным днём — **on**: **on** Monday morning, **on** Friday evening.",
      "**for / during / since / until:** **for** two hours (сколько), **during** the film (в течение), **since** 2020 (с какого момента), **until** Friday (до пятницы).",
      "**by и until:** **by** Friday — к пятнице (не позже); **until** Friday — до пятницы (всё это время): I'll finish **by** Friday. I'll work **until** Friday.",
      "**from … to:** open **from** nine **to** five; Monday **to** Friday.",
      "**Типичные ошибки:** ✗ in Monday → ✓ **on** Monday. ✗ at the morning → ✓ **in** the morning. ✗ on 2020 → ✓ **in** 2020."
    ],
    examples: [
      { en: "I was born in 1995.", ru: "Я родился в 1995 году." },
      { en: "The meeting is on Monday at 10.", ru: "Встреча в понедельник в 10." },
      { en: "I'll see you next week.", ru: "Увидимся на следующей неделе." },
      { en: "The shop is open from nine to five.", ru: "Магазин открыт с девяти до пяти." },
      { en: "I'll finish the report by Friday.", ru: "Я закончу отчёт к пятнице." }
    ]
  },

  {
    id: "prepositions-time-place", level: "A2", category: "grammar",
    title: "Предлоги времени, места и движения: in / on / at / to",
    summary: "On Wednesday evening, at midnight, on the beach, move to Spain, arrive at the airport.",
    explanation: [
      "Одна сводная таблица для трёх предлогов — in, on, at — и отдельное правило для движения: **to**. Все четыре пункта ниже — твои частые ошибки.",
      "**ВРЕМЯ.**",
      "• **in** — «внутри» длинного отрезка: части дня (**in the morning / afternoon / evening**), месяцы (in July), сезоны (in winter), годы (in 2024), века. Но не про «ночь» — это at.",
      "• **on** — день и дата: **on Monday**, **on 2 July** (читаем «on the second of July»), on my birthday, **on Christmas Day**, и если к дню добавлена часть дня — тоже **on**: **on Wednesday evening**, on Friday morning (не «in Wednesday evening»).",
      "• **at** — точка во времени: at 6 o'clock, **at midday**, **at midnight**, **at night**, at the weekend, at Easter, at Christmas (праздничный период в целом: at Christmas, но on Christmas Day — конкретный день).",
      "• ❌ at the second of July → ✅ **on** the second of July. ❌ in Christmas Day → ✅ **on** Christmas Day. ❌ in midday / in midnight → ✅ **at** midday / **at** midnight. ❌ in Wednesday evening → ✅ **on** Wednesday evening.",
      "• **Без предлога:** tomorrow, yesterday, today, tonight, this / next / last / every + слово: **next week**, **last Monday**, **every day** (не «in next week», не «at tomorrow»). Ещё без предлога: **tomorrow morning**, **yesterday afternoon**.",
      "**МЕСТО.**",
      "• **in** — внутри чего-то или в большом пространстве: in a room, in a box, **in London**, in Spain, in the sea, in the sky.",
      "• **on** — на поверхности или на линии: on the table, on the wall, on a page, **on the beach**, **on the mountain / on a hill**, on an island, on the coast, on the first floor, on the bus / train / plane (на транспорте, где можно ходить).",
      "• **at** — точка, адрес, место для занятия: **at the door**, at the bus stop, at 10 Baker Street, **at the airport**, at the station, at school / at work / at the cinema (здание как место действия: смотрим фильм, учимся).",
      "• ❌ in the beach → ✅ **on** the beach. ❌ in the mountain → ✅ **on** the mountain (на горе) или **in** the mountains (в горах, регион). ❌ arrive in Los Angeles airport → ✅ arrive **at** Los Angeles airport.",
      "**ДВИЖЕНИЕ = to.** После глаголов движения направление передаёт **to**, а не in: **go to** school, **come to** my house, **move to** New Zealand, **walk to** the shop, **run to** the station, **fly to** Asia, **drive to** the coast. ❌ move in New Zealand → ✅ move **to** New Zealand. ❌ walking in the corner shop → ✅ walking **to** the corner shop (или walking **into** — зайти внутрь). ❌ fly in Los Angeles → ✅ fly **to** Los Angeles.",
      "**Различай «где» и «куда»:** I live **in** Rome (где?) — I'm moving **to** Rome (куда?). Предлог in отвечает на «где», to — на «куда». Исключения нет, кроме слов **home**, **here**, **there**, **abroad**: go home, come here, go abroad — **без** предлога (не «go to abroad», не «go to home»).",
      "**ARRIVE — особый глагол.** Arrive **in** + город или страна: arrive **in** Paris, arrive **in** Japan. Arrive **at** + конкретная точка: arrive **at** the airport, **at** the station, **at** the hotel, at work. Никогда не «arrive to». Со словами here, there, home предлога нет: arrive here, arrive home.",
      "**ASK sb for sth** — просить что-то у кого-то: ask **me for** some money, ask **the waiter for** the bill. ❌ ask me about some money — это «спросить обо всём, что связано с деньгами» (**ask about** = задать вопрос о чём-то). Просим вещь — **ask for**; спрашиваем информацию — **ask about** / ask + вопрос.",
      "**Схема из трёх вопросов:** (1) это время, место или движение? (2) время/место: большое пространство или отрезок — in; поверхность или день — on; точка — at. (3) движение — to.",
      "**Типичные ошибки (сводка):** ❌ move in Spain → ✅ move to Spain. ❌ at the second of July → ✅ on the second of July. ❌ in midnight → ✅ at midnight. ❌ in the beach → ✅ on the beach. ❌ arrive in the airport → ✅ arrive at the airport. ❌ ask me about money → ✅ ask me for money. ❌ in next week → ✅ next week."
    ],
    examples: [
      { en: "My cousin is moving to Canada in September.", ru: "Мой двоюродный брат переезжает в Канаду в сентябре." },
      { en: "The party starts on Saturday evening, at eight.", ru: "Вечеринка начнётся в субботу вечером, в восемь." },
      { en: "We open our presents on Christmas Day and eat a big dinner at midday.", ru: "Мы открываем подарки в Рождество и в полдень устраиваем большой обед." },
      { en: "Children were playing on the beach near the harbour.", ru: "Дети играли на пляже возле гавани." },
      { en: "We flew to Madrid and arrived at the airport at midnight.", ru: "Мы прилетели в Мадрид и приехали в аэропорт в полночь." },
      { en: "They arrived in Rome on 5 May.", ru: "Они приехали в Рим пятого мая." },
      { en: "She walked to the corner shop and asked the man for a map.", ru: "Она дошла до магазинчика на углу и попросила у продавца карту." }
    ]
  },

  {
    id: "word-patterns", level: "A2", category: "grammar",
    title: "Слово + предлог (word patterns)",
    summary: "Interested in, keen on, popular with, a game against.",
    explanation: [
      "Многие слова «дружат» только с одним предлогом, и его нужно выучить вместе со словом. Русский предлог часто не подсказывает: «интересоваться ЧЕМ-ТО» → interested **in**.",
      "**Прилагательное + предлог:** interested **in**, keen **on** (увлечённый), crazy **about** (без ума от), good / bad **at**, bored **with** (в разговорной речи — и bored of), afraid **of**, proud **of**, fond **of**, tired **of**, worried **about**, ready **for**, similar **to**, different **from**.",
      "**popular with** + люди: Football is popular **with** young people. Для места — popular **in**: Tennis is popular **in** Britain. Не «popular for».",
      "**Существительное + предлог:** a fan **of** (болельщик, фанат), a game / match **against** (игра ПРОТИВ команды: a game **against** Spain, не «with»), a book **about**, a picture **of**, a reason **for**, an answer **to**, a problem **with**, an invitation **to**.",
      "**Глагол + предлог:** listen **to**, look **at**, wait **for**, depend **on**, belong **to**, laugh **at**, agree **with**, believe **in**, think **about**, play **against**, **take part in** (участвовать: take part **in** a competition, не «take part to»).",
      "**После предлога — глагол с -ing**, а не начальная форма: interested **in playing**, keen **on swimming**, good **at drawing**, bored **with waiting**, crazy **about dancing**, thank you **for helping**.",
      "**feel like + -ing** — «хочется что-то сделать»: I feel like **going** out tonight. Не «feel like to go».",
      "**Не путай:** interested (чувство «интересуюсь») — прилагательное с -ed: I'm interested **in** music. interesting — «интересный»: music is interesting. «interest in» без -ed — ошибка в такой фразе.",
      "**Ещё слова из уроков:** **capable of** (+ -ing: capable of winning), **talented at** (talented at music / at drawing), **cheat at** (cheat at a game, cards) и **cheat in** (cheat in an exam, in a test), **confuse A with B** (confuse «borrow» with «lend»), **continue with** (continue with the lesson; также continue + -ing), **cope with** (справляться: cope with stress), **help (sb) with** (help me with my homework), **succeed in** (+ -ing: succeed in finding a job), **know about / learn about** (знать о, узнавать о: learn about history), **an opinion about / of** (мнение о), **a question about** (вопрос о).",
      "**capable of + -ing** — «способный на что-то»: She is **capable of winning** the race. Не «capable of win» и не «capable to win». **succeed in + -ing** — «удаваться, суметь»: They **succeeded in finding** the way. Не «succeed to find» и не «succeed in find». Запомни схему: **предлог → -ing**.",
      "**Типичные ошибки:** ❌ capable of learn → ✅ capable of learning. ❌ succeed to find → ✅ succeed in finding. ❌ a game with Spain → ✅ a game against Spain. ❌ popular for teenagers → ✅ popular with teenagers. ❌ I'm interest in sport → ✅ I'm interested in sport. ❌ take part to → ✅ take part in. ❌ keen in → ✅ keen on.",
      "**Слова из уроков про путешествия:** **famous for** (известный чем-то: famous **for** its beaches; не «famous with» и не «famous of»), **far from** (далеко от: far **from** the station), **late for** (опоздать куда-то: late **for** the train, late **for** work), **suitable for** (подходящий для: a hotel suitable **for** families), **arrive at / in** (at — точка: arrive at the station; in — город и страна: arrive in Spain), **ask sb for sth** (просить: ask the guide **for** a map; не «ask me about money»), **provide sb with sth** (обеспечивать кого-то чем-то: the hotel provides guests **with** breakfast; также provide sth **for** sb: provide breakfast **for** guests).",
      "**Предлог → -ing, а не to-инфинитив:** famous **for being** the oldest, late **for** work, suitable **for** travelling with children."
    ],
    examples: [
      { en: "Our team has a game against the best club in the city.", ru: "У нашей команды игра против лучшего клуба города." },
      { en: "This game is very popular with teenagers.", ru: "Эта игра очень популярна среди подростков." },
      { en: "I'm interested in learning the guitar.", ru: "Я интересуюсь игрой на гитаре." },
      { en: "He's crazy about football and keen on tennis.", ru: "Он помешан на футболе и увлекается теннисом." },
      { en: "I don't feel like going out in the rain.", ru: "Мне не хочется выходить под дождь." },
      { en: "Over a hundred people took part in the competition.", ru: "Более ста человек приняли участие в соревновании." },
      { en: "Lisbon is famous for its yellow trams.", ru: "Лиссабон известен своими жёлтыми трамваями." },
      { en: "Our hotel is quite far from the beach.", ru: "Наш отель довольно далеко от пляжа." },
      { en: "Hurry up, or we'll be late for the ferry.", ru: "Поторопись, или мы опоздаем на паром." },
      { en: "This small hotel is suitable for families with children.", ru: "Этот небольшой отель подходит для семей с детьми." },
      { en: "I asked the receptionist for a map of the city.", ru: "Я попросил у администратора карту города." },
      { en: "The company provides all its drivers with a uniform.", ru: "Компания обеспечивает всех водителей формой." }
    ]
  },

  {
    id: "prepositional-phrases", level: "A2", category: "grammar",
    title: "Устойчивые выражения с предлогами",
    summary: "For fun, in the middle of, in time for, on stage.",
    explanation: [
      "Это готовые «кирпичики»: предлог в них не выбирают по смыслу, а запоминают вместе с выражением.",
      "**for:** for a long time (долго), for fun (ради удовольствия), for example (например), for the first time (в первый раз), for sale (продаётся).",
      "**in:** in the middle of (посреди), in the end (в конце концов), in fact (на самом деле), in front of (перед), in a hurry (в спешке), in love, in trouble (в беде).",
      "**on:** on stage (на сцене), on TV / the radio / the internet (по телевизору, радио, в интернете), on CD / DVD (на компакт-диске), on holiday, on the phone, on foot (пешком), on my own (один, сам).",
      "**at:** at home, at work, at the weekend, at the moment, at first (сначала), at least (по крайней мере), at the same time.",
      "**by:** by car / bus / train (на транспорте), by mistake (по ошибке), by heart (наизусть).",
      "**in time for и on time — разные вещи.** **in time for** — «успеть к чему-то, до начала»: We arrived **in time for** the concert (мы успели, пока оно не началось). **on time** — «точно по расписанию»: The train left **on time**. Если опоздал — «not in time» или «late».",
      "**in the end** — «в итоге»: In the end we won. **at the end of** — «в конце чего-либо»: at the end of the match.",
      "**Выражения для речи и сочинений:** **for instance** (например — то же, что for example), **in fact** (на самом деле, фактически: усиливает или уточняет), **in general** (в общем, как правило), **in conclusion** (в заключение — в конце текста), **in favour of** (за, в пользу: be in favour of the idea / of working at home), **by heart** (наизусть: learn a poem by heart).",
      "**Внимание на тип задания!** Иногда просят выбрать **предлог** (She is good ___ maths → at), а иногда — **слово** внутри выражения: She knows the poem by ___ (heart / instance / fact) — здесь предлог **by** уже стоит, а нужно вписать **heart**. Читай, что пропущено: предлог или слово. By ___ → **heart**; for ___ → **instance**; in ___ (of) → **favour**; in ___ → **fact / general / conclusion**. Запоминай выражения целиком.",
      "Порядок в тексте: Some students prefer homework. **For instance**, ... **In general**, most agree. **In fact**, ... **In conclusion**, I am **in favour of** shorter lessons. После in favour of — существительное или -ing: in favour of **school uniforms** / of **wearing** uniforms.",
      "Типичные ошибки: ❌ in CD → ✅ **on** CD. ❌ in TV → ✅ **on** TV. ❌ for a long time ago → ✅ a long time ago (без for). ❌ in the time for the concert → ✅ **in time for** the concert. ❌ by the heart → ✅ **by heart** (без the).",
      "**Блок «в пути»:** **способ передвижения — by** (без артикля!): **by air** (самолётом), **by sea** (морем), **by bus**, **by car**, **by train**, **by bike**. Но пешком — **on foot** (не «by foot»). ❌ by the bus → ✅ by bus. ❌ by foot → ✅ on foot. Если речь о конкретной машине, артикль появляется, а by исчезает: in **the** car, on **the** bus.",
      "**on board** — «на борту» (самолёта, корабля, поезда): Welcome **on board**! Все пассажиры уже **on board**. Не «in board» и не «on the board» (это уже «на доске»).",
      "**on holiday** — «в отпуске, на каникулах»: We're **on holiday** in Greece. ❌ to holiday / in holiday → ✅ **on holiday**. (А «ехать в отпуск» — go **on** holiday: Next week we're going **on** holiday.)",
      "**on schedule** — «по графику, по расписанию»: The train arrived **on schedule** (= on time). «Опаздывает» — **behind schedule**. ❌ arrives schedule → ✅ arrives **on** schedule. Предлог **on** нельзя пропускать.",
      "**on the coast** — «на побережье»: a small town **on the coast**. ❌ on coast → ✅ on **the** coast. Артикль the здесь нужен. Не путай: **on board** — без the, **on the coast** — с the, **on foot / on holiday / on schedule** — без the.",
      "Мини-шпаргалка: by + способ (by air / sea / bus / car), on + (foot, board, holiday, schedule, the coast)."
    ],
    examples: [
      { en: "I play the guitar just for fun.", ru: "Я играю на гитаре просто ради удовольствия." },
      { en: "The singer was on stage for two hours.", ru: "Певец был на сцене два часа." },
      { en: "Her new album is on CD and on the internet.", ru: "Её новый альбом есть на CD и в интернете." },
      { en: "We arrived in time for the first match.", ru: "Мы пришли как раз к началу первого матча." },
      { en: "The bus left on time, so we weren't late.", ru: "Автобус отправился по расписанию, так что мы не опоздали." },
      { en: "The phone rang in the middle of the film.", ru: "Телефон зазвонил посреди фильма." },
      { en: "Parcels to Australia usually go by air or by sea.", ru: "Посылки в Австралию обычно идут самолётом или морем." },
      { en: "The streets are closed, so we have to go on foot.", ru: "Улицы закрыты, так что нам придётся идти пешком." },
      { en: "Passengers, welcome on board flight 204.", ru: "Пассажиры, добро пожаловать на борт рейса 204." },
      { en: "My parents are on holiday in Croatia.", ru: "Мои родители в отпуске в Хорватии." },
      { en: "Our train arrived on schedule.", ru: "Наш поезд прибыл по расписанию." },
      { en: "They live in a village on the coast.", ru: "Они живут в деревне на побережье." }
    ]
  },

  {
    id: "much-many-a-lot", level: "A2", category: "grammar",
    title: "Much / many / a lot of / a few / a little",
    summary: "Много и мало с разными существительными.",
    explanation: [
      "**many** — с исчисляемыми: many books, many people.",
      "**much** — с неисчисляемыми: much money, much time. Обычно в отрицаниях и вопросах.",
      "**a lot of / lots of** — с любыми, особенно в утвердительных: a lot of friends, a lot of water.",
      "Вопрос: **How many** apples? **How much** water?",
      "Немного: **a few** — с исчисляемыми (a few days), **a little** — с неисчисляемыми (a little sugar).",
      "**В утверждениях much почти не используют**, кроме much с very / too / so / as: He has **so much** work. Обычно вместо него — **a lot of**.",
      "**little / few без a — «мало, почти нет» (негатив):** There is **little** hope. **a little / a few** — «немного, хватит»: I have **a few** friends here.",
      "**how much / how many:** вопросы о количестве; **How much** is it? — о цене.",
      "**Другие слова:** **plenty of** (много, достаточно), **enough**, **no**: plenty of time, enough money.",
      "**Типичные ошибки:** ✗ many money → ✓ **much** money. ✗ a lot of peoples → ✓ a lot of **people**. ✗ I have much friends → ✓ I have **a lot of** friends."
    ],
    examples: [
      { en: "I don't have much time.", ru: "У меня мало времени." },
      { en: "How many languages do you speak?", ru: "На скольких языках ты говоришь?" },
      { en: "She has a lot of friends.", ru: "У неё много друзей." },
      { en: "Wait a few minutes.", ru: "Подожди несколько минут." },
      { en: "How much is this jacket?", ru: "Сколько стоит эта куртка?" },
      { en: "I have only a few friends here.", ru: "У меня здесь всего несколько друзей." }
    ]
  },

  {
    id: "modals-must-have-to", level: "A2", category: "grammar",
    title: "Must / have to / mustn't / don't have to",
    summary: "Обязанность, запрет и «не обязательно».",
    explanation: [
      "**must** — обязанность по моему мнению или правило: I **must** call my mum. You **must** wear a seatbelt.",
      "**have to** — необходимость из-за внешних обстоятельств: I **have to** work on Saturday (так сказал начальник).",
      "**mustn't** — ЗАПРЕЩЕНО: You **mustn't** smoke here.",
      "**don't have to** — НЕ ОБЯЗАТЕЛЬНО (но можно): You **don't have to** come. Это очень разные вещи!",
      "Прошедшее время — только **had to**: I **had to** wait. («musted» не бывает.)",
      "**have to — все формы:** She **has to** go. **Do** you **have to** work? I **don't have to**. Будущее: I **will have to** leave early. Прошлое: I **had to** wait.",
      "**must — только настоящее и будущее.** Вопросы с must редки, естественнее: **Do I have to…?**",
      "**Правила и вывески:** You **must not** park here. Это запрет — mustn't.",
      "**needn't** (британский вариант) = **don't have to**: You **needn't** come.",
      "**Типичные ошибки:** ✗ You don't must go → ✓ You **mustn't** (запрет) / **don't have to** (не обязательно). ✗ He must to work → ✓ He **must** work. ✗ She have to → ✓ She **has to**."
    ],
    examples: [
      { en: "Students must not use phones during the exam.", ru: "Студентам нельзя пользоваться телефонами на экзамене." },
      { en: "Tomorrow is Sunday, so I don't have to get up early.", ru: "Завтра воскресенье, так что мне не нужно рано вставать." },
      { en: "She had to leave early.", ru: "Ей пришлось уйти рано." },
      { en: "Do I have to wear a tie?", ru: "Мне обязательно надевать галстук?" },
      { en: "You mustn't be late.", ru: "Нельзя опаздывать." }
    ]
  },

  {
    id: "should-advice", level: "A2", category: "grammar",
    title: "Should — совет",
    summary: "Тебе стоит..., тебе не следует...",
    explanation: [
      "**should + глагол без to** — совет: You **should** see a doctor.",
      "Отрицание: **shouldn't** — You **shouldn't** eat so much sugar.",
      "Вопрос: **Should I** call him?",
      "**ought to** значит то же самое, но звучит формальнее: You **ought to** rest.",
      "**Мнение и совет:** I think you **should** rest. **Should** I call him? — Yes, you **should**. / No, you **shouldn't**.",
      "**Сила совета:** **should** — обычный совет; **had better** — «лучше бы» (иначе будут проблемы): You'**d better** hurry. **Why don't you…?** — мягкое предложение: Why don't you ask her?",
      "**Просьба о совете:** What **should** I do? Where **should** we go? Could you give me some advice?",
      "**Типичные ошибки:** ✗ You should to go → ✓ You should **go**. ✗ He shoulds → ✓ He **should**. ✗ You should better → ✓ You'**d better**."
    ],
    examples: [
      { en: "You should try this café.", ru: "Тебе стоит попробовать это кафе." },
      { en: "We shouldn't be late.", ru: "Нам не следует опаздывать." },
      { en: "What should I do?", ru: "Что мне делать?" },
      { en: "Why don't you ask your teacher?", ru: "Почему бы тебе не спросить учителя?" },
      { en: "You'd better hurry up.", ru: "Тебе лучше поторопиться." }
    ]
  },

  {
    id: "gerund-infinitive-basic", level: "A2", category: "grammar",
    title: "Глагол + -ing или + to: основы",
    summary: "I enjoy swimming, но I want to swim.",
    explanation: [
      "После **enjoy, like, love, hate, finish, mind, avoid, stop, practise** — глагол с **-ing**: I enjoy **reading**.",
      "После **want, need, decide, hope, plan, would like, learn, agree, promise, try** — **to + глагол**: I want **to learn** English.",
      "После **предлогов** — всегда **-ing**: interested in **learning**, good at **drawing**, before **leaving**, thank you for **coming**.",
      "После **can, must, should, will** — глагол без to и без -ing: I can **swim**.",
      "**Подходят оба:** like, love, hate, start, begin — можно и -ing, и to: I like **swimming** / to swim. Значение почти одинаковое.",
      "**Меняют смысл:** **stop doing** — перестать: He stopped **smoking**. **stop to do** — остановиться, чтобы сделать: He stopped **to smoke**.",
      "**would like / want + to:** I **would like to** go. ✗ I would like going. С дополнением: I want **you to** come. ✗ I want that you come.",
      "**Типичные ошибки:** ✗ I enjoy to read → ✓ I enjoy **reading**. ✗ I want go → ✓ I want **to go**. ✗ interested to learn → ✓ interested **in learning**."
    ],
    examples: [
      { en: "I've finished cleaning the kitchen.", ru: "Я закончил убирать кухню." },
      { en: "We decided to stay at home.", ru: "Мы решили остаться дома." },
      { en: "She's good at cooking.", ru: "Она хорошо готовит." },
      { en: "I want you to come with me.", ru: "Я хочу, чтобы ты пошёл со мной." },
      { en: "He stopped smoking last year.", ru: "Он бросил курить в прошлом году." }
    ]
  },

  {
    id: "too-enough", level: "A2", category: "grammar",
    title: "Too и enough",
    summary: "Слишком и достаточно.",
    explanation: [
      "**too + прилагательное** = слишком: It's **too hot**.",
      "**прилагательное + enough** = достаточно (enough ПОСЛЕ прилагательного): He's **old enough**.",
      "**enough + существительное** (enough ПЕРЕД существительным): We have **enough money**.",
      "**too much** + неисчисляемое, **too many** + исчисляемое: too much sugar, too many people.",
      "**too ... to** — слишком ..., чтобы: It's **too** late **to** call him.",
      "**too ≠ very:** very — просто «очень» (It's very hot — нейтрально); **too** — «слишком», и это проблема: It's **too** hot to sit outside.",
      "**Для кого и что делать:** too heavy **for me**; **enough for** us; too heavy **for me to lift**.",
      "**not enough = слишком мало:** There isn't **enough** milk. We don't have **enough** time.",
      "**Типичные ошибки:** ✗ too much big → ✓ **too** big. ✗ enough old → ✓ old **enough**. ✗ too much people → ✓ too **many** people."
    ],
    examples: [
      { en: "This bag is too heavy for me.", ru: "Эта сумка слишком тяжёлая для меня." },
      { en: "The room isn't big enough.", ru: "Комната недостаточно большая." },
      { en: "Do we have enough chairs?", ru: "У нас достаточно стульев?" },
      { en: "It's too cold to swim today.", ru: "Сегодня слишком холодно, чтобы плавать." },
      { en: "She isn't old enough to drive.", ru: "Она ещё недостаточно взрослая, чтобы водить." }
    ]
  },

  {
    id: "articles", level: "A2", category: "grammar",
    title: "Артикли: частые случаи",
    summary: "The UK, at home, by bus, play the guitar.",
    explanation: [
      "Страны и города — обычно без артикля: Russia, London. Но **the** — если в названии есть «Kingdom», «States», «Republic» или форма множественного числа: **the UK, the USA**, the Netherlands.",
      "С **the**: реки, моря, океаны, горные цепи (the Volga, the Black Sea, the Alps), а также с превосходной степенью (**the best**), порядковыми числами (**the first**) и словом only (**the only**).",
      "Без артикля устойчивые выражения: **at home, at work, go to bed, go to school, by bus, by car, for breakfast**.",
      "Музыкальные инструменты — с the: play **the** guitar. Спорт и игры — без: play football, play chess.",
      "**a/an** в выражениях частоты и восклицаниях: twice **a** week, What **a** beautiful day!",
      "**Обобщение:** во множественном числе и с неисчисляемыми — без артикля: **Dogs** are friendly. **Money** isn't everything.",
      "**Повторное упоминание и уточнение:** I bought a jacket and a hat. **The** jacket was expensive. **the** girl **in the blue dress** — какая именно.",
      "**Профессия и должность:** She is **a** teacher. He is **the** manager of this bank (единственный).",
      "**Цель и место:** **go to school / bed / work** — без артикля, если речь о занятии (учиться, спать, работать). **the cinema / the theatre / the bank** — конкретные места: I'm going to **the** cinema.",
      "**Типичные ошибки:** ✗ I live in the Russia → ✓ in Russia. ✗ She plays the football → ✓ plays football. ✗ I have a breakfast → ✓ I have breakfast."
    ],
    examples: [
      { en: "She lives in the USA.", ru: "Она живёт в США." },
      { en: "I usually go to work by bus.", ru: "Я обычно езжу на работу на автобусе." },
      { en: "He is the tallest student in the class.", ru: "Он самый высокий ученик в классе." },
      { en: "Dogs are friendly animals.", ru: "Собаки — дружелюбные животные." },
      { en: "I'm going to the cinema tonight.", ru: "Сегодня вечером я иду в кино." }
    ]
  },

  {
    id: "adjectives-adverbs", level: "A2", category: "grammar",
    title: "Прилагательное или наречие: quick / quickly",
    summary: "Какой? или Как?",
    explanation: [
      "Прилагательное описывает существительное (какой?): a **careful** driver.",
      "Наречие описывает действие (как?): He drives **carefully**. Обычно это прилагательное + **-ly**.",
      "Исключения: good → **well**, fast → **fast**, hard → **hard**, late → **late**. (hardly = «едва», lately = «в последнее время» — другое значение!)",
      "После глаголов-связок **be, look, feel, sound, seem, smell, taste** — прилагательное: You **look tired**. It **sounds good**.",
      "**Прилагательные на -ly:** friendly, lovely, lonely, elderly — это прилагательные, не наречия. Наречие — **in a friendly way**.",
      "**Пары с разным смыслом:** **hard** — трудный / усердно, **hardly** — едва; **late** — поздно, **lately** — в последнее время; **high** (высоко) / **highly** (очень: highly successful); **near** (рядом) / **nearly** (почти).",
      "**Сравнение наречий:** quickly → **more** quickly; fast → faster; well → better. **as + наречие + as:** as **quickly** as possible.",
      "**Типичные ошибки:** ✗ She sings beautiful → ✓ She sings **beautifully**. ✗ He speaks English good → ✓ He speaks English **well** (прилагательное good ставим перед существительным: He speaks **good** English). ✗ I feel badly → ✓ I feel **bad**."
    ],
    examples: [
      { en: "She speaks English very well.", ru: "Она очень хорошо говорит по-английски." },
      { en: "He works hard.", ru: "Он усердно работает." },
      { en: "This soup tastes great.", ru: "Этот суп отличный на вкус." },
      { en: "He drives carefully.", ru: "Он водит аккуратно." },
      { en: "She sings beautifully.", ru: "Она красиво поёт." }
    ]
  },

  {
    id: "adjectives-ed-ing", level: "A2", category: "grammar",
    title: "Прилагательные на -ed и -ing",
    summary: "Bored или boring? Interested или interesting?",
    explanation: [
      "**-ed** — что чувствует человек: I'm **bored** (мне скучно). I'm **interested** in history.",
      "**-ing** — какой предмет или ситуация (вызывает чувство): The film is **boring** (фильм скучный). History is **interesting**.",
      "Пары: bored/boring, tired/tiring, interested/interesting, excited/exciting, surprised/surprising, confused/confusing, embarrassed/embarrassing.",
      "«I'm boring» значит «Я скучный человек», а не «Мне скучно»!",
      "**Как проверить:** спросите «кто чувствует?» → -ed; «что вызывает чувство?» → -ing. I'm **excited** about the trip. The trip is **exciting**.",
      "**Предлоги:** bored **with / of**, interested **in**, excited **about**, surprised **at / by**, tired **of** (надоело) / tired **from** (устал после).",
      "**Усилители:** **really** tired, **quite** boring, **extremely** tiring.",
      "**Частые пары:** frightened / frightening, annoyed / annoying, shocked / shocking, relaxed / relaxing, disappointed / disappointing."
    ],
    examples: [
      { en: "I was very tired after the long journey.", ru: "Я очень устал после долгой поездки." },
      { en: "The journey was tiring.", ru: "Поездка была утомительной." },
      { en: "Are you excited about the trip?", ru: "Ты в предвкушении поездки?" },
      { en: "I'm interested in photography.", ru: "Я интересуюсь фотографией." },
      { en: "It was a really tiring day.", ru: "Это был по-настоящему утомительный день." }
    ]
  },

  // ======================= B1 — ГРАММАТИКА =======================

  {
    id: "present-perfect-continuous", level: "B1", category: "grammar",
    title: "Present Perfect Continuous",
    summary: "Действие началось в прошлом и продолжается до сих пор.",
    explanation: [
      "Форма: **have / has been + глагол с -ing**. I**'ve been waiting**.",
      "Действие началось в прошлом и продолжается сейчас (часто с for, since, how long): I**'ve been learning** English **for** two years.",
      "Действие только что закончилось, и виден результат: I'm tired because I**'ve been running**.",
      "Present Perfect — сколько сделано (результат): I've **written** three emails. Continuous — как долго шёл процесс: I've **been writing** emails all morning.",
      "Глаголы состояния (know, like, be, have в значении «иметь») — без continuous: I've **known** him for years.",
      "**Отрицание и вопрос:** I **haven't been sleeping** well. **Have** you **been waiting** long? How long **has** she **been working** here? Краткие ответы: Yes, I **have**. / No, she **hasn't**.",
      "**for и since:** **for** + период (for two hours), **since** + момент (since nine o'clock). **How long…?** — главный вопрос к Continuous.",
      "**all day / lately / recently** подчёркивают длительность или недавний период: I've been feeling tired **lately**.",
      "**Continuous или Simple:** называем число или результат — Simple (I've read three books). Длительность или повторение — Continuous (I've been reading all day). С live, work, teach допустимы оба: I've lived / been living here for years.",
      "**Типичные ошибки:** ✗ I am waiting for two hours → ✓ I **have been waiting** for two hours. ✗ I have been knowing him → ✓ I have **known** him."
    ],
    examples: [
      { en: "How long have you been living here?", ru: "Как долго ты здесь живёшь?" },
      { en: "It's been raining since morning.", ru: "Дождь идёт с утра." },
      { en: "Your eyes are red. Have you been crying?", ru: "У тебя красные глаза. Ты плакал?" },
      { en: "I haven't been sleeping well lately.", ru: "В последнее время я плохо сплю." },
      { en: "How long has she been working here?", ru: "Как давно она здесь работает?" }
    ]
  },

  {
    id: "present-perfect-simple-vs-continuous", level: "B1", category: "grammar",
    title: "Present Perfect: простое или длительное",
    summary: "I've written (результат) или I've been writing (процесс)?",
    explanation: [
      "**Две формы.** Простое: **have / has + V3** — I**'ve written**. Длительное: **have / has + been + глагол с -ing** — I**'ve been writing**. Обе связывают прошлое с настоящим, но смотрят на действие по-разному.",
      "**Простое — результат.** Действие завершено, важно, ЧТО сделано (и сколько): I**'ve written** an article. She**'s read** three chapters. Одно событие, готовый итог.",
      "**Длительное — процесс.** Важно, КАК ДОЛГО шло действие, оно может быть не закончено: I**'ve been writing** since nine. Часто объясняет состояние сейчас: My eyes hurt — I**'ve been reading** all day.",
      "**Закончено или нет?** I**'ve read** an interview — прочитал целиком. I**'ve been reading** an interview — читаю, ещё не дочитал (или читал долго). Если в предложении сказано, что действие не закончено, нужно длительное: «I've read an interview, but I haven't finished it» — ❌, правильно: I**'ve been reading** an interview.",
      "**Вопросы:** **How long** + длительное для процесса: How long **have you been learning** English? **How many / how much** + простое для количества: How many pages **have you written**?",
      "**Какие глаголы не ставят в continuous.** (1) Состояния: know, like, love, want, belong, be, have («иметь»): I**'ve known** her for years (не «I've been knowing»). (2) Разовые события, которые происходят мгновенно: arrive, find, lose, drop, die, start (начаться): The train **has arrived** (не «has been arriving»). He **has lost** his keys.",
      "**Слова-подсказки.** Чаще с простым: just, already, yet, ever, never, so far, this week, how many. Чаще с длительным: how long, for, since, all day / morning, recently, lately. For и since бывают и с тем, и с другим — выбирай по смыслу (результат или процесс).",
      "**Порядок слов.** Слова just, already, also, always, never, ever стоят **между have и причастием**: I**'ve just** finished. We**'ve also been** planning (не «we have been also planning»). **Yet** — в конце: I haven't finished **yet**.",
      "**Отрицания и вопросы.** Отрицание — haven't / hasn't: She **hasn't taken** the exam yet (не теряй «not», если в условии «not yet»). Длительное: I **haven't been going** to the gym (не «I haven't going» — слово been обязательно). Вопрос: **Has** Paul **ever met** her? How long **has** it **been raining**?",
      "**Короткие формы.** В речи и письме: I have been → **I've been**, she has been → **she's been**, we have not → **we haven't**. В кратком ответе — полная форма: Have you finished? — Yes, I **have** (не «Yes, I've»).",
      "**Типичные ошибки:** ❌ I haven't going → ✅ I haven't **been** going. ❌ we have been also planning → ✅ we've **also been** planning. ❌ has been arriving → ✅ has **arrived**. ❌ he has taken (по смыслу «ещё не сдавал») → ✅ he **hasn't** taken."
    ],
    examples: [
      { en: "I've written three emails this morning.", ru: "Сегодня утром я написал три письма." },
      { en: "I've been writing emails all morning.", ru: "Я всё утро пишу письма." },
      { en: "How long have you been learning the guitar?", ru: "Как долго ты учишься играть на гитаре?" },
      { en: "We've also been planning a trip to Italy.", ru: "Мы также планируем поездку в Италию." },
      { en: "She hasn't taken the exam yet.", ru: "Она ещё не сдавала экзамен." },
      { en: "The delivery has arrived — it's at the door.", ru: "Доставка приехала — она у двери." },
      { en: "Has Paul ever met your sister?", ru: "Пол когда-нибудь встречался с твоей сестрой?" },
      { en: "I haven't been going to the gym lately.", ru: "В последнее время я не хожу в спортзал." }
    ]
  },

  {
    id: "past-perfect", level: "B1", category: "grammar",
    title: "Past Perfect",
    summary: "Действие, которое произошло раньше другого действия в прошлом.",
    explanation: [
      "Форма: **had + третья форма глагола** (для всех лиц): I **had finished**, she **had left**. Краткая форма: **'d** (he'd left). Отрицание: **hadn't** + V3.",
      "Показывает, что одно действие в прошлом было РАНЬШЕ другого: When I arrived, the train **had** already **left** (сначала ушёл поезд, потом я пришёл).",
      "**Последовательность событий.** Past Perfect = «то, что было раньше». Сравни: When I arrived, the film **had started** (я пришёл — фильм уже шёл). When I arrived, the film **started** (я пришёл — и тогда фильм начался).",
      "**before / after / by the time / when.** By the time we got there, the film **had started**. After she **had left**, we cleaned up (после слов after Past Simple тоже возможен: After she left...). The film **had** already **started** before we arrived.",
      "Часто с already, just, never, before, by the time, after.",
      "Если порядок понятен из слов before / after, можно использовать просто Past Simple.",
      "**Неправильные V3 — только правильные формы:** had **left** (не «leaved»), had **set** off (set – set – set, не «seted»), had **eaten**, had **spoken**, had **seen**, had **heard**, had **gone**."
    ],
    examples: [
      { en: "I had never seen snow before I moved to Moscow.", ru: "Я никогда не видел снега, пока не переехал в Москву." },
      { en: "They had already left when we got to the station.", ru: "Они уже ушли, когда мы добрались до вокзала." },
      { en: "He had set off before the rain started.", ru: "Он отправился в путь до того, как пошёл дождь." },
      { en: "By the time we got there, the film had started.", ru: "Когда мы пришли, фильм уже начался." },
      { en: "She was sad because she had lost her keys.", ru: "Она грустила, потому что потеряла ключи." }
    ]
  },

  {
    id: "past-perfect-continuous", level: "B1", category: "grammar",
    title: "Past Perfect Continuous",
    summary: "Что происходило до другого момента в прошлом (и объясняет его).",
    explanation: [
      "**Форма:** **had + been + глагол с -ing** (для всех лиц): I **had been waiting**, she **had been running**. Краткая форма: **'d been** (she'd been running). Отрицание: **hadn't been**. Вопрос: **Had** you **been waiting** long?",
      "**Когда используем.** Действие шло (длилось) ДО другого момента в прошлом и могло продолжаться до него. Часто с for, since, how long: We **had been walking for** two hours when it started to rain.",
      "**Причина состояния в прошлом.** Так объясняют, почему кто-то был в таком состоянии: She was tired **because she'd been running**. His hands were dirty — he **had been working** in the garden.",
      "**Чем отличается от Past Perfect (простого).** Past Perfect — результат или завершённое действие: She **had written** the report (отчёт готов). Past Perfect Continuous — процесс, длительность: She **had been writing** the report for hours (сколько длилось).",
      "**Чем отличается от Present Perfect Continuous.** Та же идея, только «сдвинутая» в прошлое: I**'ve been waiting** for an hour (сейчас) → I **had been waiting** for an hour when he finally arrived (в тот момент в прошлом).",
      "**Глаголы, которые не ставят в continuous** — как и раньше: состояния (know, like, be) и разовые события (arrive, find): I **had known** her for years (не «had been knowing»). They **had arrived** (не «had been arriving»).",
      "**Порядок слов.** just, already, also, always, never — между had и been: She**'d also been** working there. Один помощник had, затем been — без лишних слов: ❌ He had started been shouting → ✅ He **had been shouting** или ✅ He **had started shouting**.",
      "**Короткие формы:** I had been → **I'd been**, she had been → **she'd been**. В кратком ответе — полная форма: Had you been waiting? — Yes, I **had**."
    ],
    examples: [
      { en: "She was tired because she'd been running.", ru: "Она устала, потому что бегала." },
      { en: "We had been waiting for an hour when the bus came.", ru: "Мы ждали уже час, когда пришёл автобус." },
      { en: "His eyes were red — he had been crying.", ru: "У него были красные глаза — он плакал." },
      { en: "How long had you been living there before you moved?", ru: "Как долго ты жил там до переезда?" },
      { en: "They hadn't been working long when the lights went out.", ru: "Они работали недолго, когда погас свет." }
    ]
  },

  {
    id: "used-to", level: "B1", category: "grammar",
    title: "Used to / be used to",
    summary: "Раньше делал (а теперь нет) — и «привык».",
    explanation: [
      "**used to + глагол** — прошлая привычка или состояние, которых больше нет: I **used to** smoke (раньше курил, теперь нет).",
      "Отрицание: **didn't use to**. Вопрос: **Did** you **use to**...? (без d!)",
      "**be used to + -ing / существительное** — «привык»: I**'m used to getting** up early.",
      "**get used to** — «привыкать»: You'll **get used to** the weather.",
      "Для повторяющихся действий в прошлом можно использовать **would**: Every summer we **would** go to the sea. Но не для состояний.",
      "**Контраст «сейчас ... но раньше ...».** Сначала посмотри на «сейчас». Если сейчас **не** так, то раньше **было** так → после but — положительное **used to**: He **doesn't play** football now, but he **used to** play every day. Если сейчас **так**, то раньше **не было** → отрицание: He plays the guitar now, but he **didn't use to** play. Часто говорят и **never used to**: She never used to cook, but now she loves it. Обе формы верны.",
      "Памятка: «сейчас НЕТ, но раньше used to» и «сейчас ЕСТЬ, но раньше didn't use to / never used to». Не ставь отрицание там, где в прошлом действие как раз БЫЛО."
    ],
    examples: [
      { en: "He doesn't live here now, but he used to.", ru: "Сейчас он здесь не живёт, но раньше жил." },
      { en: "I like fish now, but I didn't use to.", ru: "Сейчас я люблю рыбу, а раньше не любил." },
      { en: "We used to live in a small town.", ru: "Раньше мы жили в маленьком городе." },
      { en: "Did you use to play computer games?", ru: "Ты раньше играл в компьютерные игры?" },
      { en: "I'm not used to driving on the left.", ru: "Я не привык ездить по левой стороне." }
    ]
  },

  {
    id: "first-conditional", level: "B1", category: "grammar",
    title: "Условные предложения 0 и 1 типа",
    summary: "If it rains, I'll stay at home.",
    explanation: [
      "**Нулевой тип** (факты, всегда так): **If + Present Simple, Present Simple** — If you heat ice, it melts.",
      "**Первый тип** (реальное будущее): **If + Present Simple, will + глагол** — If it **rains**, I**'ll stay** at home.",
      "Главная ошибка: после **if** НЕ ставится will. Не «If it will rain».",
      "**unless** = if not: I won't go **unless** you come with me.",
      "**Порядок частей:** если if-часть стоит второй, запятая не нужна: I'll stay at home **if it rains**.",
      "**Вместо will:** can, may, might, should, повелительное наклонение: If you see him, **tell** him. If you need help, you **can** call me.",
      "**if + will — только в просьбах:** If you **will** help me, I'd be grateful (= если вы согласны). В обычном условии — нет.",
      "**when или if:** if — возможно, не знаем; **when** — точно будет: **When** I get home, I'll call you.",
      "**Типичные ошибки:** ✗ If it will rain → ✓ If it **rains**. ✗ If I will see him → ✓ If I **see** him. ✗ Unless you don't hurry → ✓ **Unless** you hurry (unless уже содержит отрицание)."
    ],
    examples: [
      { en: "If you study every day, you'll improve quickly.", ru: "Если будешь заниматься каждый день, быстро улучшишь уровень." },
      { en: "If I'm late, start without me.", ru: "Если я опоздаю, начинайте без меня." },
      { en: "We'll miss the train unless we hurry.", ru: "Мы опоздаем на поезд, если не поторопимся." },
      { en: "If you need help, just call me.", ru: "Если нужна помощь, просто позвони мне." },
      { en: "I'll stay home if it rains.", ru: "Я останусь дома, если пойдёт дождь." }
    ]
  },

  {
    id: "second-conditional", level: "B1", category: "grammar",
    title: "Условные предложения 2 типа",
    summary: "If I had money, I would buy a house.",
    explanation: [
      "Нереальная или маловероятная ситуация сейчас или в будущем.",
      "Форма: **If + Past Simple, would + глагол**: If I **had** more time, I **would learn** Japanese.",
      "Хотя форма прошедшая, речь идёт о настоящем: «Если бы у меня было время (сейчас)...».",
      "С to be часто используют **were** для всех лиц: If I **were** you, I'd take the job.",
      "После if НЕ ставится would. Не «If I would have money».",
      "**Совет:** If I **were** you, I **would** take the job. Это самая частая форма совета.",
      "**Вопросы:** What **would** you do if you won a million? Краткий ответ: I **would** travel. / I **wouldn't** work.",
      "**Could и might вместо would:** If I had a car, I **could** drive you. If he tried, he **might** succeed.",
      "**1-й или 2-й тип:** 1-й — реально, может случиться (If it rains tomorrow, we'll stay home); 2-й — вряд ли или невозможно (If I won the lottery, I'd buy a house).",
      "**Сокращение:** I'd = I would: If I had more time, I'd study French.",
      "**Типичные ошибки:** ✗ If I would have money → ✓ If I **had** money. ✗ If I was you → в разговоре встречается, но в экзамене пишите If I **were** you."
    ],
    examples: [
      { en: "If I won the lottery, I would travel around the world.", ru: "Если бы я выиграл в лотерею, я бы поехал в кругосветное путешествие." },
      { en: "What would you do if you lost your passport?", ru: "Что бы ты сделал, если бы потерял паспорт?" },
      { en: "If I were you, I wouldn't do that.", ru: "На твоём месте я бы этого не делал." },
      { en: "What would you do if you won a million?", ru: "Что бы ты делал, если бы выиграл миллион?" },
      { en: "If I had a car, I could drive you.", ru: "Если бы у меня была машина, я мог бы тебя подвезти." }
    ]
  },

  {
    id: "future-forms", level: "B1", category: "grammar",
    title: "Формы будущего: какую выбрать",
    summary: "Present Continuous, Present Simple, be going to и will — что когда.",
    explanation: [
      "В английском для будущего есть несколько форм, и выбор зависит от **ситуации**, а не от перевода. В русском все они — «буду / поеду / собираюсь», поэтому и путаются. Смотри таблицу:",
      "• **Договорённость на определённое время** (есть люди, время, место, билеты) → **Present Continuous**: I**'m meeting** Kate at six. She**'s catching** the 8.15 train.",
      "• **Расписание, график, программа** (поезда, уроки, фильмы, рейсы) → **Present Simple**: My plane **leaves** at nine. The film **starts** at 7.30. Глагол — обычный: leaves, starts, begins, finishes (с he / she / it — окончание -s).",
      "• **Намерение, план** («собираюсь», решение уже принято) → **be going to**: I**'m going to** learn Spanish. She**'s going to** buy a bike.",
      "• **Предсказание по признакам** (видим причину сейчас) → **be going to**: Look at the sky! It**'s going to** rain. Be careful, you**'re going to** drop it!",
      "• **Предсказание-мнение** (думаю, наверное) → **will**: I think she**'ll** pass the exam. It**'ll** probably be cold.",
      "• **Решение в момент речи** → **will**: — There's no milk. — I**'ll** buy some.",
      "• **Предложение помощи, обещание, просьба** → **will**: I**'ll** carry that for you. I **won't** tell anyone. **Will** you help me, please?",
      "• **Предложение «Давай… / Мне…?»** → **Shall I / Shall we**: **Shall I** open the door? **Shall we** have a pizza?",
      "**Главные различия.** Договорённость (Present Continuous) — уже всё организовано: We**'re visiting** my grandma this weekend (мы договорились, поедем). Намерение (going to) — только план, без договорённостей: I**'m going to** become an explorer when I grow up. Для намерений Present Continuous обычно **не** подходит: ❌ I'm becoming an explorer when I grow up → ✅ I'm going to become… Для договорённости не используют will: ❌ We'll visit my grandma this weekend (если всё решено) → ✅ We**'re visiting** my grandma this weekend.",
      "**Расписание ≠ will.** ❌ My plane will leave at nine → ✅ My plane **leaves** at nine. ❌ The film will start at 7.30 → ✅ The film **starts** at 7.30. Прими: если в тексте есть «по расписанию, в 9.00 отправляется» — это Present Simple.",
      "**Отрицания и вопросы.** Present Continuous: I'**m not** meeting him. **Is** she **catching** the train? Present Simple: The shop **doesn't open** until ten. **Does** the bus **leave** at six? be going to: We **aren't going to** wait. **Are** you **going to** stay? will: I **won't** go. **Will** it rain?",
      "**Следи за инструкцией в задании.** Если сказано «Используй Present Continuous» — пиши именно эту форму, даже если будущее можно выразить иначе. Ошибка «просили одно, написал другое» — частая; сначала прочитай, что именно требуется.",
      "**Две мелочи.** С глаголами go + занятие **to не нужен**: go shopping, go swimming, go skiing, go fishing. Поэтому: ❌ I'm going to shopping → ✅ I'm **going shopping**. (Но: I'm going **to** the shop — место.) И в предсказании о существовании: **there will be / there won't be** — be нельзя пропускать: ❌ There won't any tickets → ✅ There **won't be** any tickets.",
      "**Смотри и на время-маркеры:** at six, at 9 a.m., tonight, on Friday, next week — часто с Present Continuous и Present Simple; I think, probably, perhaps, in the future — с will; look!, soon, any minute now — с going to."
    ],
    examples: [
      { en: "She is meeting her tutor at four, so she can't come.", ru: "Она встречается с репетитором в четыре, так что прийти не может." },
      { en: "The last bus leaves at 11.15.", ru: "Последний автобус уходит в 23:15." },
      { en: "I'm going to repaint my room in the summer.", ru: "Я собираюсь перекрасить свою комнату летом." },
      { en: "Watch out! The shelf is going to fall!", ru: "Осторожно! Полка сейчас упадёт!" },
      { en: "I think you'll enjoy the trip.", ru: "Думаю, поездка тебе понравится." },
      { en: "We're going shopping on Saturday.", ru: "В субботу мы идём по магазинам." },
      { en: "Shall I wait for you outside?", ru: "Подождать тебя на улице?" },
      { en: "There won't be a lesson tomorrow.", ru: "Завтра урока не будет." }
    ]
  },

  {
    id: "future-time-clauses", level: "B1", category: "grammar",
    title: "When / as soon as / until + настоящее время",
    summary: "I'll call you when I get home (не «when I will get»).",
    explanation: [
      "После **when, as soon as, before, after, until, if** в значении будущего ставим **настоящее время**, а не will.",
      "I'll call you **when** I **get** home. (Не «when I will get home».)",
      "We'll wait **until** you **arrive**.",
      "В русском «когда я приду» — будущее время, поэтому здесь очень частая ошибка.",
      "**Союзы:** when, as soon as, until / till, before, after, while, **by the time**, **once** — всегда Present Simple (или Present Perfect), не will.",
      "**Present Perfect подчёркивает завершённость:** I'll call you **when I've finished** (сначала закончу). I'll call you **when I finish** — просто «когда закончу».",
      "**Главная часть — will + глагол:** I **will** wait until you **arrive**.",
      "**Исключение — when как вопросительное слово:** I don't know **when** he **will** arrive. Здесь when не союз, а часть вопроса «когда?», поэтому will нужен.",
      "**Типичные ошибки:** ✗ When I will arrive, I will call → ✓ When I **arrive**, I'll call. ✗ as soon as I will know → ✓ as soon as I **know**."
    ],
    examples: [
      { en: "I'll text you as soon as I land.", ru: "Я напишу тебе, как только приземлюсь." },
      { en: "Finish your homework before you go out.", ru: "Сделай домашнее задание, прежде чем уйти." },
      { en: "When she comes, we'll have dinner.", ru: "Когда она придёт, мы поужинаем." },
      { en: "I'll call you when I've finished work.", ru: "Я позвоню тебе, когда закончу работу." },
      { en: "I don't know when he will arrive.", ru: "Не знаю, когда он приедет." }
    ]
  },

  {
    id: "passive-simple", level: "B1", category: "grammar",
    title: "Пассив: Present Simple, Past Simple, will",
    summary: "The shop is cleaned, the window was broken, the results will be published — be + V3.",
    explanation: [
      "**Идея.** В обычном (активном) предложении главный — тот, кто делает: **A thief stole my wallet** («Вор украл мой кошелёк»). В пассиве главным становится тот, **с кем или с чем что-то сделали**: **My wallet was stolen** («Мой кошелёк украли»). Пассив нужен, когда мы **не знаем**, кто это сделал, или это **неважно**, или нам интересен именно результат.",
      "**Формула — всегда одна: be (в нужной форме) + V3.** V3 — третья форма глагола: у правильных глаголов она совпадает с Past Simple (clean → cleaned, paint → painted), у неправильных у каждого своя (steal → stolen, write → written, build → built).",
      "**Таблица — меняется только be, а глагол остаётся в V3:**",
      "• **Present Simple:** am / is / are + V3 — The rooms **are cleaned** every day. This cheese **is made** in Italy.",
      "• **Past Simple:** was / were + V3 — The window **was broken** last night. The paintings **were stolen**.",
      "• **will:** will be + V3 — The results **will be published** on Friday. После will всегда **be**, оно не меняется.",
      "**Отрицание:** not ставим после be (или после will): The shop **isn't cleaned** on Sundays. The door **wasn't locked**. The tickets **won't be sold** online. Вопрос: be (или will) выходит **вперёд**, do / did не нужны: **Are** the rooms cleaned? **Was** the window broken? **Will** the results **be** published? Вопросительное слово — в самое начало: **Where** are these shoes made? **When** was the castle built?",
      "**Как превратить активное предложение в пассивное — 4 шага.** Берём: *Someone painted the fence yesterday.*",
      "1) Находим **объект** (кого/что) — *the fence*. Он становится подлежащим и идёт на первое место: *The fence …*",
      "2) Смотрим, **какое время** у глагола в активе: painted — Past Simple. Ставим **be в том же времени**: fence — одно, значит was: *The fence was …*",
      "3) Берём **V3**: paint → painted: *The fence was painted …*",
      "4) Дописываем остальное: ✅ **The fence was painted yesterday.** Если в активе подлежащее — someone / somebody / they / people / we (то есть «кто-то»), то в пассиве его просто **опускаем**. **by + кто сделал** добавляем только если это важно: The fence was painted **by my brother**.",
      "**Ловушка 1 — помощник один, глагол в V3.** Нельзя писать два глагола-«помощника» и нельзя оставлять глагол в начальной форме или с -s: ❌ The room **is cleans** → ✅ The room **is cleaned**. ❌ The glass **was break** → ✅ **was broken**. Это то же правило, что «are study» → «are studying»: после be глагол всегда в нужной форме, а не в «голой».",
      "**Ловушка 2 — время задаёт be, а не глагол.** Глагол всегда V3: **was** written, **is** written, **will be** written. Прошлое? Тогда was / were. Будущее? Тогда will be.",
      "**Ловушка 3 — нельзя пропускать be.** ❌ The window broken → ✅ The window **was** broken. ❌ Where the pictures painted? → ✅ Where **were** the pictures painted?",
      "**Ловушка 4 — пассив нужен не всегда.** Если мы сами делаем и это важно, остаётся актив: ❌ We will be invited our friends → ✅ We **will invite** our friends. Спроси себя: «Предмет сам это делает или с ним это делают?» Магазин сам открывается: The shop **opens** at nine. Письмо кто-то отправляет: The letter **is sent**.",
      "**Неправильные V3 — выучи наизусть:** steal → **stolen**, write → **written**, build → **built**, give → **given**, make → **made**, teach → **taught**, sell → **sold**, find → **found**, break → **broken**, throw → **thrown**, take → **taken**, eat → **eaten**, know → **known**. Ошибки «stealed», «breaked», «gived», «teached» не существуют.",
      "**Фразовые глаголы — частицу не теряем:** The kids **were picked up** from school. The club **was set up** last year. The children **are looked after** by a nanny. The old chairs **will be thrown away**. Не «were picked» и не «are looked».",
      "**Ещё немного про by:** The song was written **by** a local band (важно — кем). My phone was stolen (кем — неизвестно, by не нужно). Не пиши by someone / by people / by them — это лишнее."
    ],
    examples: [
      { en: "The rooms in this hotel are cleaned every morning.", ru: "Номера в этом отеле убирают каждое утро." },
      { en: "Our tickets were sold out in an hour.", ru: "Наши билеты распродали за час." },
      { en: "The new library will be opened next spring.", ru: "Новую библиотеку откроют следующей весной." },
      { en: "The cheese isn't made here; it's brought from the north.", ru: "Сыр делают не здесь, его привозят с севера." },
      { en: "When was the castle built?", ru: "Когда построили замок?" },
      { en: "Will the results be published on Friday?", ru: "Результаты опубликуют в пятницу?" },
      { en: "The little children are looked after by a nanny.", ru: "За маленькими детьми присматривает няня." },
      { en: "My lost keys were found under a sofa.", ru: "Мои потерянные ключи нашли под диваном." }
    ]
  },

  {
    id: "passive-present-past", level: "B1", category: "grammar",
    title: "Страдательный залог (Passive)",
    summary: "Is made, was built, will be done — be + V3.",
    explanation: [
      "**Идея.** В обычном (активном) предложении главный — тот, кто делает: **Someone stole my bike** («Кто-то украл мой велосипед»). В пассиве главный — то, **с чем сделали**: **My bike was stolen** («Мой велосипед украли»). Мы не знаем, кто это сделал, или нам это неважно. По-русски похоже: «велосипед украли», «здесь говорят по-английски», «меня пригласили».",
      "**Формула (всегда одна и та же): be + третья форма глагола (V3).** Меняется только **be** — оно показывает время. V3: у правильных глаголов = окончание **-ed** (invite → invited), у неправильных — третий столбец таблицы (steal → **stolen**, make → **made**, write → **written**; смотри раздел «Глаголы»).",
      "**Три времени из этого урока — меняем только be:**",
      "• **Present Simple** → am / **is** / **are** + V3: Grandma **is** always **invited**. English **is spoken** here. These phones **are made** in China.",
      "• **Past Simple** → **was / were** + V3: Uncle Adrian **was invited**. The bridge **was built** in 1900. The photos **were taken** yesterday.",
      "• **will** → **will be** + V3: The neighbours **will be invited**. (be после will не меняется — всегда **be**.)",
      "**Как сделать пассив из обычного предложения — 4 шага.** Берём: *Someone stole my sister's bike yesterday.*",
      "1) Находим **объект** (кого/что) — *my sister's bike*. Ставим его **на первое место** — он теперь подлежащее: *My sister's bike …*",
      "2) Смотрим, **какое время** у глагола: stole — Past Simple. Значит ставим **be в Past Simple**: was (bike — одно, значит was): *My sister's bike was …*",
      "3) Берём **V3** от глагола: steal → stolen: *My sister's bike was stolen …*",
      "4) Дописываем остальное: ✅ **My sister's bike was stolen yesterday.** Слова «someone / they / people» (неизвестно кто) просто **выбрасываем**.",
      "**Кто сделал — через by**, но только если это важно: The book was written **by** Tolstoy. Если исполнитель неизвестен или не нужен — by не пишем: My bike was stolen (а не «by someone»).",
      "**Отрицание и вопрос — как у глагола be, без do/did!** Отрицание: be + **not** + V3: Some people **aren't invited**. The bike **wasn't stolen**. They **won't be invited**. Вопрос: be переносим **вперёд**: **Is** everyone invited? **Was** Simon invited? **Were** the photos taken? **Will** the neighbours be invited? ❌ «Did Simon invited?» — do/did в пассиве не нужны: be уже есть.",
      "**Фразовые глаголы — частицу не теряем:** They **picked up** the broken glass. → The broken glass **was picked up**. (Не «was picked».)",
      "**Самая частая ошибка** — забыть be или оставить глагол в начальной форме: ❌ My bike stolen / ❌ My bike was steal / ❌ This house build in 1920 → ✅ My bike **was stolen** / This house **was built** in 1920. Проверка за секунду: **есть ли be? и стоит ли после него V3?**",
      "**Как понять, нужен ли пассив.** Спроси: «Предмет сам это делает или с ним это делают?» The shop **opens** at nine (магазин сам открывается — актив). The shop **was opened** in 1990 (его кто-то открыл — пассив). The letters **are delivered** every day (их доставляют — пассив)."
    ],
    examples: [
      { en: "These phones are made in China.", ru: "Эти телефоны производят в Китае." },
      { en: "I was invited to the party.", ru: "Меня пригласили на вечеринку." },
      { en: "The meeting has been cancelled.", ru: "Встречу отменили." },
      { en: "My sister's bike was stolen yesterday.", ru: "Велосипед моей сестры вчера украли." },
      { en: "Was Simon invited?", ru: "Саймона пригласили?" },
      { en: "The neighbours won't be invited.", ru: "Соседей не пригласят." },
      { en: "The broken glass was picked up.", ru: "Разбитое стекло подобрали." }
    ]
  },

  {
    id: "reported-speech", level: "B1", category: "grammar",
    title: "Косвенная речь",
    summary: "He said (that) he was tired.",
    explanation: [
      "Когда пересказываем слова после **said / told**, время обычно «сдвигается назад»: am/is → **was**, do → **did**, did → **had done**, will → **would**, can → **could**.",
      "\"I am tired,\" she said. → She said (that) she **was** tired.",
      "**say** — без человека (said that...) или said **to** me. **tell** — обязательно с человеком: She **told me** that...",
      "Вопросы превращаются в прямой порядок слов, без do: He asked where I **lived**. (Не «where did I live».) Для да/нет-вопросов — **if / whether**: She asked **if** I was OK.",
      "Меняются слова времени и места: tomorrow → the next day, here → there, now → then.",
      "**Что можно не сдвигать:** если сказанное верно и сейчас, время можно оставить: She said she **likes** coffee.",
      "**Модальные:** can → could, will → would, may → might, **must → had to**; would, could, should, might не меняются.",
      "**Просьбы и приказы — to + глагол:** She told me **to sit** down. He asked me **not to** smoke.",
      "**Другие глаголы пересказа:** **explained, suggested, promised, admitted, denied**: He **promised to** help. She **suggested going** out. He **denied taking** the money.",
      "**Типичные ошибки:** ✗ She said me → ✓ She **told** me / said **to** me. ✗ He asked where did I live → ✓ where I **lived**. ✗ She asked if I am OK → ✓ if I **was** OK."
    ],
    examples: [
      { en: "He said he would call me later.", ru: "Он сказал, что позвонит мне позже." },
      { en: "She told me she didn't like the film.", ru: "Она сказала мне, что ей не понравился фильм." },
      { en: "They asked me where I worked.", ru: "Они спросили, где я работаю." },
      { en: "She told me to sit down.", ru: "Она велела мне сесть." },
      { en: "He promised to help me.", ru: "Он пообещал мне помочь." }
    ]
  },

  {
    id: "relative-clauses", level: "B1", category: "grammar",
    title: "Придаточные с who / which / that / whose / where",
    summary: "The man who lives next door...",
    explanation: [
      "**who** — для людей, **which** — для предметов и животных, **that** — для людей и предметов (в разговорной речи).",
      "**whose** — «чей»: The girl **whose** dad is a pilot. **where** — «где»: The city **where** I was born.",
      "Если who/which/that — это дополнение (после него идёт другое подлежащее), его можно опустить: The book (**that**) I bought is great.",
      "Дополнительная информация в запятых — только **who / which**, не that: My brother, **who** lives in Kazan, is a doctor.",
      "**Определяющие и неопределяющие:** определяющее — без запятых, нужно для понимания: The man **who called** is my boss. Неопределяющее — в запятых, лишь добавляет сведения: My boss, **who is very tall**, called.",
      "**Предлог:** The woman **I talked to** (разговорно) = The woman **to whom** I talked (формально).",
      "**whose, where, when:** a man **whose** car was stolen; the city **where** I was born; the day **when** we met.",
      "**which к целой мысли:** He passed the exam, **which** surprised everyone.",
      "**Типичные ошибки:** ✗ The man who I called him → ✓ The man (who) **I called** (him повторять не нужно). ✗ the book which I read it → ✓ the book **which** I read."
    ],
    examples: [
      { en: "I have a friend who speaks five languages.", ru: "У меня есть друг, который говорит на пяти языках." },
      { en: "This is the phone I told you about.", ru: "Вот телефон, о котором я тебе рассказывал." },
      { en: "That's the café where we first met.", ru: "Это кафе, где мы впервые встретились." },
      { en: "The woman I talked to was very kind.", ru: "Женщина, с которой я говорил, была очень добра." },
      { en: "He passed the exam, which surprised everyone.", ru: "Он сдал экзамен, и это всех удивило." }
    ]
  },

  {
    id: "modals-deduction", level: "B1", category: "grammar",
    title: "Must / might / can't — предположения",
    summary: "Наверняка, возможно, не может быть.",
    explanation: [
      "**must** — почти уверен, что ДА: He's been working all day. He **must** be tired.",
      "**can't** — почти уверен, что НЕТ: That **can't** be true!",
      "**might / may / could** — возможно: She **might** be at home. I'm not sure.",
      "Для «не может быть» говорим **can't**, а не mustn't (mustn't — это запрет).",
      "**Шкала уверенности:** must (≈ 95%) → should / ought to (≈ 75%, «по логике») → might / may / could (≈ 50%) → can't (≈ 5%).",
      "**Процесс и состояние:** процесс сейчас — must + **be + V-ing**: She **must be working** now. Состояние — must + be: He **must be** at home.",
      "**Прошлое:** **must have + V3** — наверняка было; **can't / couldn't have + V3** — не могло быть; **might / may / could have + V3** — возможно было. Подробнее — в теме B2 «Модальные глаголы в прошлом».",
      "**Типичные ошибки:** ✗ He mustn't be at home → ✓ He **can't** be at home. ✗ It can be true → ✓ It **could / might** be true."
    ],
    examples: [
      { en: "Someone's at the door. It must be the pizza.", ru: "Кто-то у двери. Наверное, это пицца." },
      { en: "He can't be hungry — he's just eaten.", ru: "Он не может быть голоден — он только что поел." },
      { en: "Take an umbrella. It might rain.", ru: "Возьми зонт. Может пойти дождь." },
      { en: "She must be working — her light is on.", ru: "Она, наверное, работает — у неё горит свет." },
      { en: "It might be true.", ru: "Возможно, это правда." }
    ]
  },

  {
    id: "phrasal-verbs-common", level: "B1", category: "grammar",
    title: "Частые фразовые глаголы",
    summary: "Get up, give up, look for, find out...",
    explanation: [
      "Фразовый глагол = глагол + частица, и смысл часто меняется: look (смотреть) → **look for** (искать), **look after** (присматривать).",
      "Частые: get up (вставать), give up (бросать), find out (узнавать), turn on/off (включать/выключать), put on (надевать), take off (снимать; взлетать), pick up (поднимать; забирать), run out of (заканчиваться), go on (продолжать), set up (создавать), fill in (заполнять), come back (возвращаться).",
      "У многих можно разделять глагол и частицу: turn **the light** off = turn off the light. Но с местоимением — только внутри: turn **it** off (не «turn off it»).",
      "**Частицы и их общий смысл** (помогает угадывать значение):",
      "• **up** — вверх, начало, «до конца»: **take up** (начать заниматься, увлечься: take up tennis), **give up** (бросить, сдаться: give up smoking / give up trying), **turn up** (появиться: He didn't turn up; а также сделать громче), **cheer up**, **grow up**.",
      "• **down** — вниз, меньше: **turn down** (сделать тише: turn down the music; а также отклонить: turn down an offer), **sit down**, **calm down**, **write down**.",
      "• **in** — внутрь, присоединиться: **join in** (присоединиться к игре или разговору), **fill in**, **drop in** (заглянуть).",
      "• **off** — прочь, выключить, отправить: **send off** (отправить письмо; в футболе — удалить с поля), **take off**, **turn off**, **set off** (отправиться в путь).",
      "• **out** — наружу, «вне дома», выяснить: **eat out** (поесть в кафе, ресторане), **find out**, **work out**, **run out of**.",
      "• **on** — продолжать, включить: **carry on** (продолжать: carry on working), **turn on**, **go on**, **put on**.",
      "**give up** и **carry on** часто идут с -ing: He gave up **smoking**. Carry on **reading**. У **take up** — существительное или -ing: She took up **painting**. А **eat out**, **join in**, **turn up** (в значении «появиться») идут без дополнения.",
      "**Блок «письмо и учёба»:** **write down** (записать: write down the address), **cross out** (вычеркнуть: cross out the wrong word), **rub out** (стереть ластиком), **rip up** (разорвать на куски: rip up the paper), **look up** (найти в словаре или справочнике: look up a word), **point out** (указать, обратить внимание: point out a mistake), **read out** (прочитать вслух: read out the answers), **turn over** (перевернуть страницу или лист: turn over the page).",
      "**Учи пару целиком — глагол + частицу.** Частично помнить («там было out…») мало: rub **out**, cross **out**, rip **up**, look **up**, read **out**, point **out**, write **down**. Частица out повторяется в четырёх из них, поэтому ориентируйся на ГЛАГОЛ: стереть — **rub**, зачеркнуть — **cross**, порвать — **rip**, найти в словаре — **look**, прочитать вслух — **read**, указать — **point**, записать — **write**. Простой тест: закрой перевод и скажи глагол, потом частицу.",
      "С существительным частицу можно поставить после него: write **the date** down, look **the word** up, turn **the page** over. С местоимением — только внутри: write **it** down, look **it** up, rip **it** up, cross **it** out (не «write down it»). Исключение — point out: чаще point out **a mistake** или point **it** out. Read out обычно идёт с существительным: read out **the names**.",
      "**Блок «в дорогу»:** **get in** (сесть в машину, такси: get **in** the car), **get out** (выйти из машины: get **out of** the taxi), **get on** (сесть в автобус, поезд, самолёт, на велосипед: get **on** the bus), **get off** (сойти с автобуса, поезда, самолёта: get **off** the train), **go away** (уехать, уйти прочь: go away for the weekend), **go back** (вернуться: go back home), **set off** (отправиться в путь: set off at six), **take off** (взлетать: the plane took off).",
      "**in/out — для маленького закрытого транспорта (машина, такси); on/off — для большого, где можно встать и пройтись (автобус, поезд, самолёт, паром).** I got **in** the car, but we got **on** the bus.",
      "**ГЛАВНАЯ ОШИБКА — забыть про прошедшее время.** У фразового глагола в прошедшем времени меняется только **первое слово** (глагол), частица остаётся: ❌ The man **get** in his car → ✅ The man **got** in his car. ❌ We ran to the train and **get** on → ✅ and **got** on. **get → got**, **go → went**, **take → took**, **set → set** (не меняется!), **come → came**, **run → ran**.",
      "**Прошедшие формы блока:** get in → **got in**; get out → **got out**; get on → **got on**; get off → **got off**; go away → **went away**; go back → **went back**; set off → **set off** (V2 = set, без изменений); take off → **took off**. Вопрос и отрицание в Past Simple: **Did** he **get** in the car? He **didn't get** on the bus — после did / didn't глагол снова в начальной форме.",
      "Как не забыть: увидел в предложении yesterday, last week, ago или рассказ о прошлом — **сразу переведи первое слово** в V2, а частицу не трогай."
    ],
    examples: [
      { en: "He gave up playing football after his injury.", ru: "Он бросил играть в футбол после травмы." },
      { en: "My sister took up the guitar last year.", ru: "Моя сестра начала заниматься на гитаре в прошлом году." },
      { en: "Could you turn the music down? I'm trying to study.", ru: "Не мог бы ты сделать музыку потише? Я пытаюсь заниматься." },
      { en: "Only ten people turned up at the match.", ru: "На матч пришло всего десять человек." },
      { en: "We usually eat out on Fridays.", ru: "По пятницам мы обычно ужинаем в кафе." },
      { en: "I'm looking for my keys.", ru: "Я ищу свои ключи." },
      { en: "We've run out of milk.", ru: "У нас закончилось молоко." },
      { en: "Can you pick me up at the airport?", ru: "Можешь забрать меня из аэропорта?" },
      { en: "The man got in his car and drove away.", ru: "Мужчина сел в машину и уехал." },
      { en: "We ran to the train and got on just in time.", ru: "Мы добежали до поезда и вскочили в него в последний момент." },
      { en: "She got off the bus at the harbour.", ru: "Она вышла из автобуса возле гавани." },
      { en: "We set off at dawn and took off from Oslo at nine.", ru: "Мы отправились в путь на рассвете, а из Осло вылетели в девять." },
      { en: "After a week abroad, they went back home.", ru: "После недели за границей они вернулись домой." }
    ]
  },

  {
    id: "question-tags", level: "B1", category: "grammar",
    title: "Разделительные вопросы (question tags)",
    summary: "..., isn't it? ..., don't you?",
    explanation: [
      "Короткий вопрос в конце — «не так ли?». Утверждение → отрицательный хвостик, отрицание → положительный.",
      "Берём тот же вспомогательный глагол: You**'re** tired, **aren't** you? She **can** swim, **can't** she? They **didn't** come, **did** they?",
      "Если вспомогательного нет — используем do/does/did: She **works** here, **doesn't** she?",
      "Особые случаи: I'm right, **aren't I**? Let's go, **shall we**?",
      "**Интонация:** интонация вниз — мы почти уверены и ждём согласия: It's cold, isn't it? Интонация вверх — спрашиваем по-настоящему.",
      "**Особые случаи:** I am → **aren't I?**; Let's → **shall we?**; повелительное → **will you?**: Open the door, will you?; there is → **isn't there?**; **nobody / nothing** → положительный хвост с they: Nobody called, **did they**?",
      "**Ответ:** You like tea, don't you? — Yes, I do. / No, I don't. Отвечаем на сам факт, а не на форму вопроса.",
      "**Типичные ошибки:** ✗ You like tea, don't it? → ✓ don't **you**? ✗ He isn't coming, isn't he? → ✓ **is** he?"
    ],
    examples: [
      { en: "It's cold today, isn't it?", ru: "Сегодня холодно, правда?" },
      { en: "You haven't seen my phone, have you?", ru: "Ты не видел мой телефон?" },
      { en: "He lives in Paris, doesn't he?", ru: "Он ведь живёт в Париже?" },
      { en: "Open the window, will you?", ru: "Открой окно, ладно?" },
      { en: "Nobody called, did they?", ru: "Никто не звонил, да?" }
    ]
  },

  {
    id: "so-such", level: "B1", category: "grammar",
    title: "So и such",
    summary: "So beautiful, such a beautiful day.",
    explanation: [
      "**so + прилагательное / наречие** (без существительного): It's **so** cold! She speaks **so** fast.",
      "**such (a/an) + прилагательное + существительное**: It's **such a** cold day! They are **such** nice people.",
      "**so much / so many** + существительное: I have **so much** work.",
      "**so / such ... that** — настолько ..., что: It was **so** late **that** we took a taxi.",
      "**Результат (so / such … that):** It was **so** hot **that** we stayed inside. It was **such** a hot day **that** we stayed inside.",
      "**Восклицания:** What **a** lovely day! **Such** a pity! **So** kind of you!",
      "**Множественное число:** **such** nice people (нет a); **so many** people; **so much** noise.",
      "**Типичные ошибки:** ✗ It is so a nice day → ✓ **such** a nice day. ✗ such nice (без существительного) → ✓ **so** nice."
    ],
    examples: [
      { en: "The film was so boring!", ru: "Фильм был такой скучный!" },
      { en: "It was such a boring film!", ru: "Это был такой скучный фильм!" },
      { en: "There were so many people.", ru: "Там было так много людей." },
      { en: "It was such a lovely day!", ru: "Какой был чудесный день!" },
      { en: "She was so tired that she fell asleep.", ru: "Она так устала, что уснула." }
    ]
  },

  {
    id: "verb-patterns", level: "B1", category: "grammar",
    title: "Глагольные конструкции: stop doing / stop to do",
    summary: "Когда -ing и to меняют смысл; make/let someone do.",
    explanation: [
      "**stop doing** — перестать делать; **stop to do** — остановиться, чтобы сделать: I stopped **smoking**. I stopped **to buy** coffee.",
      "**remember / forget doing** — помнить (забыть), что делал; **remember / forget to do** — не забыть (забыть) сделать: Remember **to lock** the door!",
      "**want / ask / tell / expect someone to do**: I want **you to help** me. (Не «I want that you help me».)",
      "**make / let someone do** — без to: My boss **made me work** late. My parents **let me go**.",
      "**suggest doing** или suggest that...: He suggested **going** to the cinema. (Не «suggested me to go».)",
      "**После этих глаголов — только -ing, не to:** **finish, enjoy, avoid, keep (keep on), mind, practise, consider, suggest, imagine, can't help**. I've finished **writing** (не «finished to write»). She enjoys **swimming**. Avoid **making** the same mistake. Keep **trying**!",
      "Если рядом вспомогательные слова, формы не смешиваем: I **haven't finished getting** ready (не «hasn't finished to getting» и не «haven't finished to get»). Вопрос и отрицание строятся от вспомогательного: Have you finished **reading**? — I haven't finished **reading** it yet."
    ],
    examples: [
      { en: "I haven't finished packing yet.", ru: "Я ещё не закончил собирать вещи." },
      { en: "He avoids driving in the city.", ru: "Он избегает ездить по городу на машине." },
      { en: "I'll never forget meeting you.", ru: "Я никогда не забуду нашу встречу." },
      { en: "Don't forget to call your mum.", ru: "Не забудь позвонить маме." },
      { en: "She asked me to wait.", ru: "Она попросила меня подождать." }
    ]
  },

  {
    id: "linking-words", level: "B1", category: "grammar",
    title: "Слова-связки: although, however, despite...",
    summary: "Как связывать мысли в тексте.",
    explanation: [
      "**although / even though** + предложение (хотя): **Although** it was raining, we went out.",
      "**despite / in spite of** + существительное или -ing: **Despite** the rain, we went out. Despite **being** tired, she worked.",
      "**however** (однако) — обычно в начале нового предложения, с запятой: It's expensive. **However**, it's worth it.",
      "**because** + предложение, **because of** + существительное: because it rained / **because of** the rain.",
      "**so** (поэтому), **in order to / so that** (чтобы), **while / whereas** (тогда как), **on the other hand** (с другой стороны).",
      "**Контраст:** but, although, however, **nevertheless**, whereas, while, on the other hand.",
      "**Причина и результат:** because, as, since (причина); so, therefore, **as a result** (результат).",
      "**Добавление:** and, also, in addition, **moreover**, besides, as well as.",
      "**Цель:** to, in order to, so that: I study **in order to** pass. **so that** + предложение: I study so that I can pass.",
      "**Типичные ошибки:** ✗ Although it was cold, but we went out → ✓ Although it was cold, we went out (одна связка, не две). ✗ Despite of the rain → ✓ **Despite** the rain / **In spite of** the rain."
    ],
    examples: [
      { en: "Although he's rich, he isn't happy.", ru: "Хотя он богат, он несчастлив." },
      { en: "The flight was delayed because of the fog.", ru: "Рейс задержали из-за тумана." },
      { en: "I'm learning English so that I can work abroad.", ru: "Я учу английский, чтобы работать за границей." },
      { en: "I study in order to pass the exam.", ru: "Я учусь, чтобы сдать экзамен." },
      { en: "Despite the rain, we went out.", ru: "Несмотря на дождь, мы вышли." }
    ]
  },

  // ======================= ЛЕКСИКА =======================

  {
    id: "vocab-daily-life", level: "A1", category: "vocabulary",
    title: "Лексика: повседневная жизнь",
    summary: "Семья, дом, еда, время, распорядок дня.",
    explanation: [
      "Базовые слова для рассказа о себе: семья, дом, еда, распорядок дня, погода, время. Учите слова целыми фразами: не просто «breakfast», а **have breakfast**; не «bed», а **go to bed**.",
      "**Семья:** mother / father (parents), brother / sister, son / daughter, grandmother / grandfather, husband / wife, uncle / aunt, cousin. My **parents** live in Kazan.",
      "**Дом:** a flat (квартира), a house; комнаты: bedroom, bathroom, kitchen, living room; мебель: table, chair, sofa, bed, wardrobe, lamp. I live in a small **flat**.",
      "**Распорядок дня:** wake up (проснуться), get up (встать), have breakfast / lunch / dinner (поесть), go to work / school, come home, cook dinner, watch TV, go to bed. **have** breakfast — позавтракать, **make** breakfast — приготовить завтрак.",
      "**Еда и напитки:** bread, cheese, meat, fish, rice, soup, fruit, vegetables; water, tea, coffee, juice, milk. Заказ: **I'd like** a coffee, please.",
      "**Время и погода:** What time is it? It's half past seven. Today is Monday. It's sunny / rainy / cold / hot / windy. Про себя: **I'm cold** (мне холодно), а не «It's cold to me».",
      "**Типичные ошибки:** ✗ I have 25 years → ✓ I **am** 25. ✗ I go to home → ✓ I go **home**. ✗ I am agree → ✓ I **agree**."
    ],
    examples: [
      { en: "I have breakfast at eight.", ru: "Я завтракаю в восемь." },
      { en: "My flat has two bedrooms.", ru: "В моей квартире две спальни." },
      { en: "My parents live in Kazan.", ru: "Мои родители живут в Казани." },
      { en: "I'd like a coffee, please.", ru: "Мне, пожалуйста, кофе." },
      { en: "What time is it?", ru: "Который час?" }
    ]
  },

  {
    id: "vocab-travel", level: "A2", category: "vocabulary",
    title: "Лексика: путешествия",
    summary: "Аэропорт, отель, транспорт, город.",
    explanation: [
      "Слова и фразы для поездок: аэропорт, вокзал, отель, дорога, покупки, ресторан.",
      "Полезные фразы: **book** a room (забронировать), **check in / check out** (заселиться/выселиться), **boarding pass** (посадочный талон), **luggage** (багаж — неисчисляемое!), **return ticket** (билет туда-обратно).",
      "**В аэропорту и на вокзале:** **flight** (рейс, перелёт — сущ.: a long flight), **departure** (отправление, вылет) — **arrival** (прибытие), **delay** (задержка; гл. to delay — задерживать: the flight was delayed), **luggage** (багаж, неисчисляемое: some luggage, а не «a luggage»), **platform** (платформа на вокзале: the train leaves from platform 3), **destination** (пункт назначения, куда едешь), **pack** (упаковать вещи: pack a suitcase; pack / unpack), **crowded** (многолюдный: a crowded station), **ferry** (паром), **harbour** (гавань, порт; в США harbor).",
      "**В пути:** **journey** (поездка из пункта А в пункт Б, дорога: a long journey; не путать с **trip** — поездка туда и обратно, и **travel** — неисчисляемое: travel is fun, а не «a travel»), **vehicle** (транспортное средство — любое: машина, автобус, грузовик), **crash** (авария, столкновение; гл. to crash — разбиться: a car crash), **surface** (поверхность: a road surface; the surface of the sea), **convenient** (удобный по расположению или времени: a convenient train; противоположное — inconvenient), **backwards** (назад, задом наперёд: drive backwards).",
      "**Жильё и отдых:** **accommodation** (жильё, где остановиться — неисчисляемое, как luggage: good accommodation, а не «an accommodation»), **resort** (курорт: a beach / ski resort), **abroad** (за границей, за границу — без предлога: go abroad, live abroad), **foreign** (иностранный: a foreign language, a foreign country).",
      "**Не путай:** **abroad** — наречие (We go abroad), **foreign** — прилагательное (a foreign language). **journey** — сам путь, **flight** — путь по воздуху, **trip** — поездка с возвращением. **luggage** и **accommodation** — без -s и без a."
    ],
    examples: [
      { en: "I'd like to book a double room.", ru: "Я бы хотел забронировать двухместный номер." },
      { en: "Where can I check in?", ru: "Где можно зарегистрироваться?" },
      { en: "How much is a return ticket?", ru: "Сколько стоит билет туда и обратно?" },
      { en: "The flight was delayed because of the fog.", ru: "Рейс задержали из-за тумана." },
      { en: "The train to the coast leaves from platform 4.", ru: "Поезд на побережье отходит с платформы 4." },
      { en: "We packed our luggage the night before the journey.", ru: "Мы упаковали багаж накануне поездки." },
      { en: "The station was crowded, so we found a convenient café nearby.", ru: "На вокзале было многолюдно, и мы нашли удобное кафе поблизости." },
      { en: "The accommodation at the resort was cheap and clean.", ru: "Жильё на курорте было дешёвым и чистым." },
      { en: "My cousin lives abroad and speaks three foreign languages.", ru: "Мой двоюродный брат живёт за границей и говорит на трёх иностранных языках." }
    ]
  },

  {
    id: "vocab-work", level: "A2", category: "vocabulary",
    title: "Лексика: работа",
    summary: "Офис, собеседование, коллеги, задачи.",
    explanation: [
      "Слова для работы: профессии, офис, собеседование, встречи, письма.",
      "Частые сочетания: **apply for** a job (подать заявку на работу), **job interview** (собеседование), **salary** (зарплата), **colleague** (коллега), **deadline** (срок), **attend** a meeting (присутствовать на встрече).",
      "«Работа» как занятие — **work** (неисчисляемое): I have a lot of work (не «a lot of works»). Конкретная должность — **a job**: I've got a new job.",
      "**Найм:** **CV** (резюме), **application** (заявка), **hire** (нанимать), **promotion** (повышение), **contract** (контракт). **Заработок:** **salary** (зарплата за месяц, год), **wage** (почасовая оплата), **overtime** (сверхурочные). **График:** **full-time / part-time**, **schedule** (график), **work from home** (работать из дома).",
      "**work FOR + компания, work AS + профессия, work IN + отрасль или место:** I work **for** a big company. She works **as** a manager. He works **in** IT. **appointment** — приём по записи (к врачу), **meeting** — рабочая встреча, совещание."
    ],
    examples: [
      { en: "I'm applying for a job in IT.", ru: "Я подаю заявку на работу в IT." },
      { en: "The deadline is on Friday.", ru: "Срок — в пятницу." },
      { en: "She works as a manager.", ru: "Она работает менеджером." }
    ]
  },

  {
    id: "vocab-sports-games", level: "A2", category: "vocabulary",
    title: "Лексика: спорт, музыка, игры",
    summary: "Captain, competition, opponent, beat, take part, folk music.",
    explanation: [
      "**Люди:** **captain** (капитан), **coach** (тренер), **referee** (судья), **champion** (чемпион), **opponent** (соперник), **team** (команда), **member** (член команды, клуба).",
      "**Соревнование:** **competition** (соревнование, конкурс), **score** (счёт; также гл. забивать: score a goal), **challenge** (вызов; гл. бросить вызов), **risk** (риск), **prize** (приз).",
      "**Победа и поражение:** **win** (выиграть игру, приз — win a match) ≠ **beat** (победить КОГО-ТО: beat the other team). **defeat** — поражение (сущ.) или разгромить (гл.). **lose** — проиграть. Нельзя «win the other team» — только **beat** the other team.",
      "**Действия:** **support** (поддерживать, болеть за: support a team), **cheat** (жульничать), **take part in** = **participate in** (участвовать: participate in a race), **sail** (плавать под парусом; существительное — sailing, человек — sailor), **entertain** (развлекать), **entertaining** (занимательный, развлекательный).",
      "**keen** — увлечённый: keen **on** sport, keen **to** learn (очень хочет). **folk music** — народная музыка, **folk song** — народная песня.",
      "**play / do / go:** **play** + игра с мячом или соперником (play football, play chess); **go** + -ing (go swimming, go sailing); **do** + занятие без соперника (do yoga, do karate)."
    ],
    examples: [
      { en: "Our captain scored two goals in the final.", ru: "Наш капитан забил два гола в финале." },
      { en: "We beat the other team 3–1.", ru: "Мы обыграли другую команду 3:1." },
      { en: "Three hundred people took part in the competition.", ru: "В соревновании участвовало триста человек." },
      { en: "Keen sailors go sailing every weekend.", ru: "Заядлые яхтсмены выходят под парусом каждые выходные." },
      { en: "She loves folk music and plays the violin.", ru: "Она любит народную музыку и играет на скрипке." },
      { en: "The referee sent the player off for cheating.", ru: "Судья удалил игрока с поля за жульничество." }
    ]
  },

  {
    id: "collocations-make-do", level: "A2", category: "vocabulary",
    title: "Make или do",
    summary: "Make a mistake, do homework.",
    explanation: [
      "Оба глагола значат «делать», но сочетаются с разными словами — их нужно запомнить.",
      "**make**: a mistake, a decision, a cake, money, friends, noise, a phone call, an effort, a plan, progress.",
      "**do**: homework, the shopping, the dishes, exercise, business, your best, a favour, a job, sport, the housework.",
      "Общая идея: make — создаём что-то новое; do — выполняем действие, работу.",
      "**make ещё:** a mess, a speech, a suggestion, an appointment, a complaint, a living (зарабатывать на жизнь), a difference, sure (убедиться), a cup of tea, dinner.",
      "**do ещё:** the washing, the cooking, the ironing, **your hair**, an exam / a test, a course, research, damage, good / harm, **nothing / something / anything**.",
      "**Подсказка:** make — получается что-то новое (cake, noise, decision); do — процесс, работа, обязанность (homework, dishes, favour).",
      "**Типичные ошибки:** ✗ make homework → ✓ **do** homework. ✗ do a mistake → ✓ **make** a mistake. ✗ do a decision → ✓ **make** a decision. ✗ make sport → ✓ **do** sport."
    ],
    examples: [
      { en: "I made a lot of mistakes in the test.", ru: "Я сделал много ошибок в тесте." },
      { en: "Can you do me a favour?", ru: "Можешь оказать мне услугу?" },
      { en: "We need to make a decision.", ru: "Нам нужно принять решение." },
      { en: "She makes a living as a translator.", ru: "Она зарабатывает на жизнь переводчиком." },
      { en: "Have you done the washing-up?", ru: "Ты помыл посуду?" }
    ]
  },

  {
    id: "vocab-feelings-character", level: "B1", category: "vocabulary",
    title: "Лексика: чувства и характер",
    summary: "Как описать людей и эмоции.",
    explanation: [
      "Описываем характер: reliable (надёжный), confident (уверенный), shy (застенчивый), generous (щедрый), lazy (ленивый), honest (честный), patient (терпеливый).",
      "Описываем чувства: upset (расстроенный), worried (обеспокоенный), proud (гордый), jealous (ревнивый, завистливый), grateful (благодарный), disappointed (разочарованный).",
      "Многие прилагательные требуют определённого предлога: proud **of**, worried **about**, afraid **of**, angry **with** someone, good **at**.",
      "**Ещё о характере:** kind (добрый), rude (грубый), polite (вежливый), selfish (эгоистичный), ambitious (амбициозный), creative (творческий), stubborn (упрямый), careless (небрежный).",
      "**Ещё о чувствах:** delighted (в восторге), terrified (в ужасе), embarrassed (смущённый), anxious (тревожный), exhausted (измотанный), relieved (с облегчением), curious (любопытный).",
      "**Предлоги:** jealous **of**, angry **with** (кем) / **about** (чем), excited **about**, afraid **of**, bored **with**, pleased **with**, surprised **at / by**, disappointed **with / in**.",
      "**Отрицательные приставки:** un- (unkind, unhappy), im- (impatient, impolite), in- (inconsiderate), dis- (dishonest): **im**patient, **dis**honest."
    ],
    examples: [
      { en: "She's very patient with children.", ru: "Она очень терпелива с детьми." },
      { en: "I'm worried about the exam.", ru: "Я волнуюсь из-за экзамена." },
      { en: "We're proud of you.", ru: "Мы гордимся тобой." },
      { en: "He's very ambitious.", ru: "Он очень амбициозен." },
      { en: "I was relieved when I heard the news.", ru: "Я почувствовал облегчение, когда услышал новости." }
    ]
  },

  {
    id: "vocab-education", level: "B1", category: "vocabulary",
    title: "Лексика: учёба и мышление",
    summary: "Course, qualification, revise, concentrate, hesitate, wonder.",
    explanation: [
      "**Способности и ум:** **clever** (умный, сообразительный; в США чаще smart), **smart**, **talented** (одарённый: talented at music), **expert** (эксперт: an expert in / on history), **brain** (мозг; также «голова»: use your brain), **mental** (умственный: mental arithmetic, mental health).",
      "**Результат и усилия:** **achieve** (достичь: achieve a goal), **fail** (провалить, не сдать) ≠ **pass** (сдать: pass an exam), **take an exam** (сдавать, писать экзамен: take ≠ pass), **make progress** (делать успехи: you've all made a lot of progress), **make sure** (убедиться, проследить).",
      "**Учёба:** **course** (курс: a course in design), **degree** (учёная степень, диплом вуза), **qualification** (квалификация, документ о квалификации), **skill** (навык), **subject** (предмет), **term** (учебный семестр, триместр), **mark** (оценка; в США — grade), **report** (школьный табель; также доклад, отчёт), **instruction** (инструкция; обычно instructions: follow the instructions), **experience** (опыт — неисчисляемое: a lot of experience).",
      "**Мышление и память:** **revise** (повторять материал перед экзаменом — британский вариант; в США review), **remind** (напомнить: remind me to call), **guess** (догадаться, предположить), **wonder** (интересоваться, «мне интересно...»: I wonder what time it is), **consider** (обдумывать, рассматривать; + -ing: consider moving), **concentrate** (сосредоточиться: concentrate **on** the task), **hesitate** (колебаться, мяться: don't **hesitate** to ask).",
      "**Пары, которые путают:** **take an exam** (сдавать) / **pass an exam** (сдать успешно). **learn** (учить, узнавать самому) / **teach** (учить кого-то). **remember** (помнить) / **remind** (напомнить). **experience** (опыт) / **experiment** (научный эксперимент). **mark** (оценка) / **marks** (оценки), в США — **grade**. **lesson** (урок) / **course** (курс из занятий). **clever** (сообразительный) / **wise** (мудрый).",
      "**Типичные ошибки:** ❌ She took the exam, so now she is a qualified teacher → ✅ she **passed** the exam (took — только «сдавала», без результата). ❌ I'll revise my teacher → ✅ I'll **revise** the unit / for the exam (revise — повторять материал). ❌ concentrate in → ✅ concentrate **on**. ❌ hesitate asking → ✅ hesitate **to ask**."
    ],
    examples: [
      { en: "She is very clever and learns languages quickly.", ru: "Она очень умная и быстро учит языки." },
      { en: "I need to revise for the exam on Friday.", ru: "Мне нужно повторить материал к экзамену в пятницу." },
      { en: "You've all made a lot of progress this term.", ru: "Вы все сделали большие успехи в этом семестре." },
      { en: "It's hard to concentrate on the lesson when it's noisy.", ru: "Трудно сосредоточиться на уроке, когда шумно." },
      { en: "Don't hesitate to ask if you have a question.", ru: "Не стесняйтесь спрашивать, если есть вопрос." },
      { en: "I wonder if I should consider a different course.", ru: "Интересно, не стоит ли мне подумать о другом курсе." }
    ]
  },

  {
    id: "word-formation", level: "B1", category: "vocabulary",
    title: "Словообразование: суффиксы и приставки",
    summary: "Как по месту в предложении понять часть речи — и какой суффикс нужен.",
    explanation: [
      "**Шаг 1. Определи, какая часть речи нужна — по месту в предложении.**",
      "• **Существительное:** после a / an / the / some / much / many / my / this (и после прилагательного): a CD **collection**, the **entertainment**, much **competition**.",
      "• **Прилагательное:** перед существительным (a **musical** instrument, an **athletic** boy) и после is / are / was / very / quite / too: She is very **athletic**.",
      "• **Глагол:** после to / will / can / must / don't / does: I want to **collect** stamps. It will **entertain** you.",
      "• **Человек или предмет?** Подумай: нужен «тот, кто делает» (singer, collector) или «само действие/результат» (singing, collection).",
      "**Шаг 2. Выбери суффикс.**",
      "**Человек:** -er (singer, player, teacher), -or (actor, collector, sailor, visitor), -ian (musician, electrician), -ist (artist, guitarist, scientist), -ant / -ent (assistant, student).",
      "**Действие или результат:** -ion / -tion / -ation (collection, action, competition, decoration), -ment (entertainment, enjoyment, development, movement), -ness (happiness, kindness), -ity (ability).",
      "**Прилагательное:** -ic (athletic, heroic, artistic), -al (musical, national, traditional), -ful (playful, useful), -less (useless — «без»), -able (comfortable), -ous (dangerous, famous), -y (sunny).",
      "**Состояние, период:** -hood (childhood, neighbourhood), -ship (friendship, championship).",
      "**Семьи слов:** music → **musician** (человек) → **musical** (прил.). entertain (гл.) → **entertainer** (человек) → **entertaining** (прил., «занимательный») → **entertainment** (сущ.). collect → **collector** → **collection**. sail → **sailor** → **sailing** (спорт). compete → **competitor** → **competition** → **competitive**. athlete (спортсмен) → **athletic** (прил.) → **athletics** (лёгкая атлетика).",
      "**Неправильные формы:** child → children, man → men, woman → women, person → people, foot → feet. Они не образуются добавлением -s.",
      "**Частые ошибки правописания:** **singer** (sing + er) ≠ signer (тот, кто подписывает); **musician** — без h (не «musichian»); **entertainment** — entertain + ment (не «entertains» и не «entertainement»); **collector** — это collect + or, а у слова collection уже есть суффикс: «collectioner» не существует. **Два суффикса подряд не ставят.**",
      "**Слова из уроков: учёба и память.** educate → **education** (-ion); instruct → **instruction** (-ion) и **instructor** (-or, человек); begin → **beginner** (человек; n удваивается) и **beginning** (начало); brave → **bravery** (-ery); correct → **correction** (исправление) и **incorrect** (приставка in-: неверный); divide → **division** (-ide → -ision); memory → **memorise** (-ise, глагол «запоминать») и **memorial** (-al, мемориал); refer → **reference** (-ence, ссылка; одна r, не «referrence»); silent → **silence** (-ence) и **silently** (-ly, наречие); simple → **simplify** (-ify, глагол) и **simplicity** (-ity).",
      "**Три пары, где легко ошибиться:** **instruct → instructor** (человек, суффикс **-or**; «instructer» — ошибка) **/ instruction** (инструкция, указание). **silent** (тихий, молчаливый, прил.) → **silence** (тишина, сущ.; не «silents») → **silently** (молча, нареч.). **simple** (простой) → **simplify** (упростить, гл.) → **simplicity** (простота, сущ.). Ещё: **brave → bravery**, **divide → division**, **begin → beginner**, **music → musician**.",
      "Как выбрать по месту в предложении: после the / a — существительное (the **education**, a **beginner**), после is / very — прилагательное (**silent**, **brave**), после to / will — глагол (to **simplify**, will **memorise**), после глагола — наречие (listened **silently**).",
      "**Слова из уроков: путешествия.** fly → **flew** (прош.) → **flown** (V3: has flown) → **flight** (сущ., рейс; не «fly» после the!); attract → **attractive** (прил., привлекательный) → **attraction** (сущ., достопримечательность); choose → **chose / chosen** → **choice** (сущ., выбор; не «choose»); comfort → **comfortable** → **uncomfortable** (приставка un-); depart → **departure** (сущ., отправление; -ure); drive → **drove** (прош.) → **driven** → **driver** (человек); travel → **traveller** (человек; британское написание с двумя l; в США — traveler) → **travelling**; visit → **visitor** (-or, человек); direct → **direction** (-ion, направление; чаще во мн.ч.: ask for directions) и **directly** (-ly, прямо); back → **backwards** (-wards, назад, задом наперёд).",
      "**Определяй часть речи по месту — на примерах из путешествий:** We booked a **flight** (после a — существительное, а не flew). It was an **attractive** town (после an, перед существительным — прилагательное). The **choice** was difficult (после the — существительное). Yesterday he **drove** for six hours (прошедшее время — глагол V2, а не driver). Hotel **visitors** must leave at ten (мн. число, люди). The seats were **uncomfortable** (после were — прилагательное). The **departure** time is 8:15 (перед time — существительное). He walked **backwards** (после глагола — наречие). We asked for **directions** (после for — существительное).",
      "**Внимание: в «Going abroad»-заданиях слово в скобках дано в начальной форме**, и нужно сначала решить — какая часть речи, а потом — какая форма: fly → flown / flew / flight; drive → drove / driver / driven; choose → choice / chose. Если перед пропуском has / have / had — нужна V3 (**flown**, **driven**, **chosen**); если слов-подсказок a / the / my — существительное; если был, ходил, летел — V2.",
      "Приставки с отрицательным значением: **un-** (unhappy), **dis-** (dislike), **im-** (impossible), **in-** (incorrect), **ir-** (irregular), **il-** (illegal).",
      "Другие приставки: **re-** — снова (rewrite), **mis-** — неправильно (misunderstand), **over-** — слишком (overeat)."
    ],
    examples: [
      { en: "He has a big CD collection.", ru: "У него большая коллекция компакт-дисков." },
      { en: "My uncle is a stamp collector.", ru: "Мой дядя — коллекционер марок." },
      { en: "She wants to be a professional musician.", ru: "Она хочет стать профессиональным музыкантом." },
      { en: "The film was entertaining, but the music was too loud.", ru: "Фильм был занимательным, но музыка была слишком громкой." },
      { en: "Sports and games are good entertainment for children.", ru: "Спорт и игры — хорошее развлечение для детей." },
      { en: "It's impossible to learn everything in a day.", ru: "Невозможно выучить всё за день." },
      { en: "Thanks for your help — it was very useful.", ru: "Спасибо за помощь — она была очень полезной." },
      { en: "Sorry, I misunderstood you.", ru: "Извини, я тебя неправильно понял." },
      { en: "We've never flown over mountains like these.", ru: "Мы никогда не летали над такими горами." },
      { en: "The old town is very attractive and has many attractions.", ru: "Старый город очень привлекателен, и там много достопримечательностей." },
      { en: "The departure of the ferry was delayed by an hour.", ru: "Отправление парома задержали на час." },
      { en: "The tourists asked for directions and then drove to the hotel.", ru: "Туристы спросили дорогу и поехали в отель." }
    ]
  },

  {
    id: "confusing-words", level: "B1", category: "vocabulary",
    title: "Слова, которые часто путают",
    summary: "Say/tell, borrow/lend, lose/miss, remember/remind.",
    explanation: [
      "**say** something / **tell** someone something: She **said** hello. She **told me** a story.",
      "**borrow** — взять на время (у кого-то), **lend** — дать на время: Can I **borrow** your pen? Can you **lend** me your pen?",
      "**lose** — потерять, **miss** — пропустить, опоздать, скучать: I **lost** my keys. I **missed** the bus. I **miss** you.",
      "**remember** — помнить, **remind** — напоминать: **Remind** me to call him.",
      "**bring** — принести сюда, **take** — отнести туда. **fun** — весёлый (приятный), **funny** — смешной. **economic** — экономический, **economical** — экономный.",
      "**Другие пары:** **affect** (влиять, глагол) / **effect** (влияние, существительное); **advice** (сущ.) / **advise** (гл.); **rise** (подниматься) / **raise** (поднимать).",
      "**look, see, watch:** **look at** — смотреть (направить взгляд), **see** — видеть, **watch** — наблюдать за движением (a film, a match, TV).",
      "**hear и listen:** **listen to** — слушать намеренно, **hear** — слышать.",
      "**another / other / the others:** **another** (ещё один) + единственное число; **other** + множественное; **the others** — остальные.",
      "**Ложные друзья переводчика:** **sensible** (разумный) ≠ sensitive (чувствительный); **actual** (настоящий, фактический) ≠ «актуальный»; **eventually** (в конце концов) ≠ «возможно»; **fabric** (ткань) ≠ «фабрика»."
    ],
    examples: [
      { en: "Could you lend me some money?", ru: "Не мог бы ты одолжить мне денег?" },
      { en: "He told me the truth.", ru: "Он сказал мне правду." },
      { en: "Hurry up or we'll miss the train!", ru: "Быстрее, а то опоздаем на поезд!" },
      { en: "Let's watch a film tonight.", ru: "Давай посмотрим фильм сегодня вечером." },
      { en: "Stress can affect your health.", ru: "Стресс может влиять на здоровье." }
    ]
  },

  // ======================= ЧТЕНИЕ =======================

  {
    id: "reading", level: "A1", category: "reading",
    title: "Чтение",
    summary: "Понимание текстов: основная мысль и детали.",
    explanation: [
      "Сначала прочитайте текст целиком и постарайтесь понять общую идею. Не переводите каждое слово.",
      "Потом прочитайте вопрос и найдите в тексте место, где есть ответ.",
      "Будьте внимательны к словам not, never, only, all — они часто меняют правильный ответ."
    ],
    examples: []
  },

  // ======================= ДРУГОЕ =======================

  {
    id: "other", level: "A1", category: "other",
    title: "Другое",
    summary: "Ошибки из чата с Claude, для которых нет отдельной темы.",
    explanation: [
      "Сюда попадают ошибки из импортированных файлов, если их тема не найдена на сайте.",
      "Они показываются для повторения в виде карточек: неправильно → правильно + объяснение."
    ],
    examples: []
  },

  // ============ B2–C1 (упражнения: data/exercises/b2.js, c1.js) ============

  {
    id: "third-conditional", level: "B2", category: "grammar",
    title: "Условные предложения 3 типа",
    summary: "If I had known, I would have come.",
    explanation: [
      "**Нереальное прошлое.** Говорим о том, чего НЕ было, и о его воображаемом результате. Чаще всего это сожаление, упрёк или облегчение: «если бы я знал — пришёл бы» (но я не знал и не пришёл).",
      "**Форма:** **If + had + V3** (Past Perfect), **would have + V3**: If I **had known**, I **would have come**. Части можно поменять местами; запятая нужна, только если if-часть стоит первой: I **would have come** if I **had known**.",
      "**Отрицание:** If we **hadn't left** so late, we **wouldn't have missed** the train. В речи сокращают: **'d** — это и had, и would: If I'd known, I'd have come.",
      "**Вместо would** можно **could have** («смог бы») и **might have** («возможно, смог бы»): If she had asked, I **could have helped**. If it hadn't rained, we **might have gone** to the beach.",
      "**Типичные ошибки:** ✗ If I **would have known** — после if никогда нет would, только had + V3. ✗ If I **knew**, I would have come — Past Simple относится к настоящему (это 2-й тип).",
      "**Сравните три типа.** 1-й: If it rains, we **will stay** (реально, будущее). 2-й: If I **had** money, I **would buy** it (нереально, сейчас). 3-й: If I **had had** money, I **would have bought** it (нереально, в прошлом)."
    ],
    examples: [
      { en: "If we had left earlier, we wouldn't have missed the plane.", ru: "Если бы мы вышли раньше, мы бы не опоздали на самолёт." },
      { en: "I would have called you if I had had your number.", ru: "Я бы тебе позвонил, если бы у меня был твой номер." },
      { en: "If she hadn't been ill, she could have taken the exam.", ru: "Если бы она не болела, она смогла бы сдать экзамен." },
      { en: "What would you have done if you had lost your job?", ru: "Что бы ты сделал, если бы потерял работу?" },
      { en: "If I'd known it was your birthday, I'd have bought you a present.", ru: "Если бы я знал, что у тебя день рождения, я бы купил подарок." }
    ]
  },

  {
    id: "mixed-conditionals", level: "B2", category: "grammar",
    title: "Смешанные условные предложения",
    summary: "If I had studied medicine, I would be a doctor now.",
    explanation: [
      "**Смешанные условные** соединяют РАЗНЫЕ времена: условие и результат относятся к разным моментам. Два основных случая.",
      "**1) Прошлое условие → результат сейчас:** **If + had + V3, would + V1**. If I **had taken** the job in London, I **would live** there now. (Не взял — и не живу.) Сигналы результата: now, today, these days.",
      "**2) Настоящее (постоянное свойство) → результат в прошлом:** **If + Past Simple, would have + V3**. If I **were** more patient, I **wouldn't have shouted** at him yesterday. (Я нетерпеливый — поэтому накричал.) С be в условной части обычно **were**: If I **were** you…",
      "**Как выбрать форму.** Спросите себя про каждую часть отдельно: «когда было условие?» и «когда результат?». Условие в прошлом → **had + V3**; условие в настоящем → **Past Simple (were)**. Результат в прошлом → **would have + V3**; результат сейчас → **would + V1**.",
      "**После if — никакого would:** ✗ If I would have taken the job. В условной части только had + V3 или Past Simple.",
      "**Можно could / might:** If she hadn't broken her leg, she **could be** in the team now. If he **were** braver, he **might have asked** her out."
    ],
    examples: [
      { en: "If I hadn't missed the flight, I would be in Rome now.", ru: "Если бы я не опоздал на рейс, я бы сейчас был в Риме." },
      { en: "If I had taken the job in London, I would live there now.", ru: "Если бы я взял работу в Лондоне, я бы жил там сейчас." },
      { en: "If I were more patient, I wouldn't have shouted at him.", ru: "Будь я терпеливее, я бы на него не накричал." },
      { en: "If she had studied medicine, she would be a doctor today.", ru: "Если бы она училась на врача, она сегодня была бы врачом." },
      { en: "If he weren't so shy, he would have asked her to dance.", ru: "Если бы он не был таким застенчивым, он бы пригласил её танцевать." }
    ]
  },

  {
    id: "wish-if-only", level: "B2", category: "grammar",
    title: "I wish / If only",
    summary: "Сожаления и желания.",
    explanation: [
      "**I wish** и **If only** выражают сожаление или нереальное желание. **If only** эмоциональнее («ах, если бы только…»), грамматика у них одна. Глагол «сдвигается» на шаг в прошлое, как в условных предложениях.",
      "**1) Сожаление о настоящем → Past Simple:** I wish I **had** more free time. I wish I **could** swim. С I / he / she / it допустимо и **were**: I wish I **were** taller. (Времени нет, плавать не умею, рост невысокий.)",
      "**2) Сожаление о прошлом → Past Perfect:** I wish I **had studied** harder. If only I **hadn't said** that! (Сказал — и жалею.)",
      "**3) Недовольство чужим поведением или ситуацией, которую можно изменить → wish + would:** I wish you **would stop** talking. I wish it **would stop** raining. Это раздражение или просьба; про себя так не говорят: ✗ I wish I would have more time.",
      "**Чего нельзя:** ✗ I wish I **have** more time — после wish не ставят настоящее время. ✗ I wish I **would be** rich — о себе только Past Simple: I wish I **were** rich.",
      "**Связь с условными:** I wish I **had** a car ≈ If I **had** a car, I would drive. I wish I **had known** ≈ If I **had known**, I would have acted differently.",
      "**wish ≠ hope.** **hope** — реальное желание о будущем: I **hope** you **will** come. **wish** — нереальное: I **wish** you **could** come (но не можешь)."
    ],
    examples: [
      { en: "I wish I could speak French.", ru: "Жаль, что я не говорю по-французски." },
      { en: "I wish I had more free time.", ru: "Жаль, что у меня мало свободного времени." },
      { en: "If only I hadn't spent all my money!", ru: "Если бы я только не потратил все деньги!" },
      { en: "I wish you would stop interrupting me.", ru: "Хотел бы я, чтобы ты перестал меня перебивать." },
      { en: "She wishes she had booked an earlier flight.", ru: "Она жалеет, что не забронировала более ранний рейс." }
    ]
  },

  {
    id: "modals-past", level: "B2", category: "grammar",
    title: "Модальные глаголы в прошлом",
    summary: "Must have done, should have done, can't have done.",
    explanation: [
      "**Модальный глагол + have + V3** описывает прошлое: догадку, критику или упущенную возможность.",
      "**Догадки (шкала уверенности):** **must have + V3** — почти наверняка было: The lights are off, they **must have gone** to bed. **may / might / could have + V3** — возможно, было: She **might have forgotten**. **can't / couldn't have + V3** — не могло быть: He **can't have stolen** the money — he was abroad.",
      "**Критика и сожаление:** **should have + V3** — следовало, но не сделал: You **should have told** me. **shouldn't have + V3** — не следовало, но сделал: I **shouldn't have eaten** so much. **ought to have + V3** значит то же, что should have.",
      "**Упущенная возможность:** **could have + V3** — мог бы, но не сделал: You **could have called** me! Сравните: **couldn't have** — не мог бы (по причине): I **couldn't have called** — my phone was dead.",
      "**needn't have + V3** — сделал зря, можно было не делать: You **needn't have bought** milk, we had plenty. Не путайте с **didn't need to** — просто не было необходимости (делали или нет — неизвестно).",
      "**Важно:** для «не могло быть» нужно **can't have**, а не ✗ mustn't have. **mustn't** — запрет сейчас: You mustn't smoke here.",
      "**Шкала уверенности:** must have (≈ 95%) → may / might / could have (≈ 50%) → can't have (≈ 5%)."
    ],
    examples: [
      { en: "I should have studied harder.", ru: "Мне следовало заниматься усерднее." },
      { en: "She must have forgotten about our meeting.", ru: "Она, должно быть, забыла о нашей встрече." },
      { en: "He can't have seen us — he walked straight past.", ru: "Он не мог нас видеть — он прошёл прямо мимо." },
      { en: "You could have told me you were coming!", ru: "Ты мог бы сказать мне, что приедешь!" },
      { en: "We needn't have hurried — the train was late.", ru: "Нам не стоило спешить — поезд опоздал." }
    ]
  },

  {
    id: "future-continuous-perfect", level: "B2", category: "grammar",
    title: "Future Continuous и Future Perfect",
    summary: "Will be doing, will have done.",
    explanation: [
      "**Future Continuous: will be + V-ing** — действие будет ИДТИ в конкретный момент в будущем. This time tomorrow I **will be flying** to London. Сигналы: this time tomorrow, at 8 pm tonight, next week at this time, all day.",
      "**Вежливый вопрос о планах:** **Will** you **be using** the car tonight? (Мне нужна машина — не помешаю?) Это не просьба, а вопрос о планах. Также: Don't call at eight — **we'll be having** dinner.",
      "**Future Perfect: will have + V3** — действие ЗАКОНЧИТСЯ к моменту в будущем: By 2030 I **will have finished** university. Сигналы: **by** + момент, **by the time**, **before**, by then. Вопрос и отрицание: **Will** you **have finished** by Friday? I **won't have finished**.",
      "**Future Perfect Continuous: will have been + V-ing** — подчёркивает ДЛИТЕЛЬНОСТЬ к будущему моменту: By June I **will have been working** here for ten years.",
      "**by и until.** **by** — «к сроку» (завершится): I'll finish **by** five. **until** — «до момента» (будет продолжаться): I'll work **until** five.",
      "**После when / by the time / before / as soon as — Present Simple, не will:** By the time you **arrive**, we **will have eaten**. ✗ By the time you will arrive.",
      "**Сравните:** At 8 I **will call** you (событие) — At 8 I **will be calling** clients (процесс) — By 8 I **will have called** everyone (уже закончу)."
    ],
    examples: [
      { en: "Don't call at eight — I'll be having dinner.", ru: "Не звони в восемь — я буду ужинать." },
      { en: "This time tomorrow I'll be lying on a beach in Spain.", ru: "Завтра в это время я буду лежать на пляже в Испании." },
      { en: "By 2030 I will have finished my degree.", ru: "К 2030 году я закончу университет." },
      { en: "By the time you arrive, we will have eaten.", ru: "К тому времени, как ты приедешь, мы уже поедим." },
      { en: "In June she will have been teaching for twenty years.", ru: "В июне она будет преподавать уже двадцать лет." }
    ]
  },

  {
    id: "passive-advanced", level: "B2", category: "grammar",
    title: "Passive: сложные случаи",
    summary: "It is said that..., have something done.",
    explanation: [
      "**1) Безличные конструкции:** **It is said / believed / thought / reported / expected that + предложение**: It **is said that** he is rich. То же с подлежащим: He **is said to be** rich. Так говорят о слухах, новостях, ожиданиях.",
      "**Какая форма инфинитива после:** настоящее — **to + V1**: He is said **to be** a millionaire. Прошлое — **to have + V3**: She is believed **to have left** the country in 2010. Процесс — **to be + V-ing**: They are thought **to be hiding**.",
      "**2) have / get + предмет + V3 (каузатив)** — кто-то делает это для вас: I **had my hair cut**. We're **getting the windows cleaned**. **get** разговорнее. Сравните: I cut my hair (сам) ≠ I had my hair cut (мне подстригли). Так же говорят о неприятностях: He **had his car stolen**.",
      "**3) Пассив в разных формах:** be в нужной форме + V3. **is being built** (процесс сейчас), **was being cleaned** (процесс тогда), **has been repaired** (результат), **must have been done** (догадка), **will be announced** (будущее).",
      "**4) Два дополнения:** gave him a book → He **was given** a book / A book **was given** to him. Обычно начинают с человека.",
      "**by + исполнитель** добавляют только если это важно: The bridge was designed **by** Zaha Hadid. Если неважно или неизвестно — без by.",
      "**Не пассив:** глаголы без прямого дополнения (happen, arrive, die, fall, seem) пассива не имеют: ✗ The accident was happened → The accident happened."
    ],
    examples: [
      { en: "It is said that the museum will open next year.", ru: "Говорят, что музей откроется в следующем году." },
      { en: "He is said to be a millionaire.", ru: "Говорят, он миллионер." },
      { en: "She is believed to have left the country in 2010.", ru: "Считается, что она уехала из страны в 2010 году." },
      { en: "I need to get my car repaired.", ru: "Мне нужно отремонтировать машину (в сервисе)." },
      { en: "The road is being repaired, so we can't use it.", ru: "Дорогу сейчас ремонтируют, поэтому мы не можем по ней ехать." }
    ]
  },

  {
    id: "participle-clauses", level: "B2", category: "grammar",
    title: "Причастные обороты",
    summary: "Having finished..., Walking down the street...",
    explanation: [
      "**Причастный оборот** заменяет придаточное, когда у двух действий **одно подлежащее**. Короче и «письменнее»: **Walking** down the street, I met an old friend. (= While I was walking down the street, I met…)",
      "**1) V-ing — активный смысл, одновременность или причина:** **Opening** the door, he saw a stranger. **Feeling** tired, she went to bed. Для действия, которое было РАНЬШЕ: **Having + V3**: **Having finished** work, she went home.",
      "**2) V3 — пассивный смысл («что-то было сделано»):** **Built** in 1900, the bridge is still in use (= which was built). **Written** in simple English, the book is easy to read. Полные формы: **Having been built**, **Being written** — обычно их сокращают.",
      "**3) Отрицание — not перед причастием:** **Not knowing** what to do, he asked for help. **Not having seen** the film, I can't comment.",
      "**4) Союз можно оставить для ясности:** **While waiting**, he read a book. **After leaving** school, she travelled. **Before signing**, read the contract carefully.",
      "**5) После существительного — вместо who / which:** The man **sitting** next to me is a doctor (= who is sitting). The books **written** by him are popular (= which were written).",
      "**Главное правило:** подлежащее главной части — тот, кто выполняет действие причастия. ✗ Walking down the street, the rain started. ✓ Walking down the street, I felt the first drops of rain."
    ],
    examples: [
      { en: "Not knowing what to do, I called my mum.", ru: "Не зная, что делать, я позвонил маме." },
      { en: "Having finished work, she went for a walk.", ru: "Закончив работу, она пошла гулять." },
      { en: "Built in 1900, the bridge is still in use.", ru: "Построенный в 1900 году, мост до сих пор используется." },
      { en: "The woman sitting next to me is a doctor.", ru: "Женщина, сидящая рядом со мной, — врач." },
      { en: "While waiting for the train, he read a book.", ru: "Пока он ждал поезд, он читал книгу." }
    ]
  },

  {
    id: "inversion", level: "C1", category: "grammar",
    title: "Инверсия",
    summary: "Never have I seen..., Not only..., Hardly had I...",
    explanation: [
      "**Инверсия** — вспомогательный или модальный глагол выходит ПЕРЕД подлежащим, как в вопросе. Она нужна, когда в начале предложения стоит слово с отрицательным или ограничительным значением. Эффект: усиление, формальный и письменный стиль.",
      "**Формула:** слово-ограничитель + вспомогательный глагол + подлежащее + остальное: **Never have I seen** such a beautiful place. **Rarely does** he **complain**. **Seldom do** we **meet**.",
      "**Если вспомогательного глагола нет** (Present / Past Simple), берём **do / does / did**: **Little did** she **know** that… **Not only did** he **lose** his job, but he also lost his flat.",
      "**Not only … but also:** **Not only is he** smart, but he is also kind. Инверсия — только в первой части.",
      "**«Едва… как»:** **Hardly / Scarcely / Barely … when** и **No sooner … than** + Past Perfect: **Hardly had** I sat down **when** the phone rang. **No sooner had** we left **than** it started to rain. Пары нельзя путать: hardly … when, но no sooner … than.",
      "**Only + обстоятельство:** **Only then did** I realise… **Only after** the meeting **did** she explain. **Only when** you pay **can** you enter. Инверсия — в ГЛАВНОЙ части, после only-фразы.",
      "**Отрицательные выражения:** **Under no circumstances should** you open this door. **At no time did** he admit it. **On no account must** you tell anyone.",
      "**So / such:** **So tired was she** that she fell asleep. **Such was** the noise that nobody could sleep.",
      "**Условие без if (формально):** **Should you** need help, call me (= If you should need). **Were I** you, I'd apologise (= If I were you). **Had I known**, I would have come (= If I had known). Отрицание: **Had I not** known…",
      "**Типичные ошибки:** ✗ Never I have seen; ✗ Hardly I had sat down; ✗ Not only he is smart — порядок слов как в вопросе: **Never have I seen**, **Hardly had I sat**, **Not only is he smart**."
    ],
    examples: [
      { en: "Never have I seen such a beautiful place.", ru: "Никогда я не видел такого красивого места." },
      { en: "Not only is he smart, but he's also kind.", ru: "Он не только умный, но и добрый." },
      { en: "Hardly had I sat down when the phone rang.", ru: "Едва я сел, как зазвонил телефон." },
      { en: "Only then did I realise my mistake.", ru: "Только тогда я понял свою ошибку." },
      { en: "Under no circumstances should you open this door.", ru: "Ни при каких обстоятельствах не открывайте эту дверь." },
      { en: "Had I known, I would have come.", ru: "Если бы я знал, я бы пришёл." }
    ]
  },

  {
    id: "cleft-sentences", level: "C1", category: "grammar",
    title: "Выделительные конструкции",
    summary: "What I need is..., It was John who...",
    explanation: [
      "**Cleft** («расщеплённые») предложения делят одну мысль на две части, чтобы **выделить** главное, как логическое ударение. Они естественно звучат и в разговоре, и в письме.",
      "**1) What-конструкция:** **What + подлежащее + глагол + is / was + выделяемое**: **What I need is** a holiday. **What he said was** that he was leaving. После is / was может стоять существительное, **(to) + глагол** или целое предложение: **What I want to do is (to) travel.**",
      "**2) It-конструкция:** **It is / was + выделяемое слово + who / that + остальное**: **It was John who** broke the window (а не кто-то другой). **It was in Paris that** we met. **It was yesterday that** I heard the news. Про людей — who или that; про всё остальное — that.",
      "**3) All-конструкция:** **All I want is** a quiet evening. **The only thing I remember is** her smile.",
      "**4) Обратный порядок:** выделяемое в начале: **A holiday is what** I need. **The people are what** I like most about my job.",
      "**Действие через do:** **What I did was** (to) call him. **What happened was that** the car broke down.",
      "**Время:** be согласуется со временем главной мысли: **What I need is** a rest. **What I needed was** a rest.",
      "**Типичные ошибки:** ✗ What I need **it** is a holiday — лишнее it. ✗ It was John **broke** the window — нужен who / that: It was John **who broke**."
    ],
    examples: [
      { en: "What I need is a holiday.", ru: "Что мне нужно, так это отпуск." },
      { en: "It was John who broke the window.", ru: "Это именно Джон разбил окно." },
      { en: "What I like most about my job is the people.", ru: "Больше всего в моей работе мне нравятся люди." },
      { en: "It was in Paris that we first met.", ru: "Мы впервые встретились именно в Париже." },
      { en: "All I want is a quiet evening at home.", ru: "Всё, чего я хочу, — тихий вечер дома." },
      { en: "What happened was that the car broke down.", ru: "Дело в том, что машина сломалась." }
    ]
  }
);

// ---------- Цели ученика: новая лексическая тема ----------
DATA.topics.push(
  {
    id: "vocab-films-games", level: "A2", category: "vocabulary",
    title: "Лексика: фильмы, сериалы, игры",
    summary: "Plot, character, episode, genre, review, level, download.",
    explanation: [
      "**Фильм и сериал:** **plot** (сюжет), **character** (персонаж), **scene** (сцена), **ending** (концовка), **cast** (актёрский состав), **actor / actress**, **director** (режиссёр), **trailer** (трейлер), **subtitles** (субтитры; обычно во мн. числе), **soundtrack** (саундтрек), **review** (отзыв, рецензия). **Series** — сериал: форма та же и в единственном, и во множественном (one series, two series). **Episode** — серия, **season** — сезон.",
      "**Жанры (genres):** **comedy**, **drama**, **horror** (ужасы), **cartoon** (мультфильм), **detective film**, **science fiction** (фантастика), **adventure**.",
      "**Игры:** **level** (уровень), **boss** (босс), **graphics** (графика; всегда во мн. числе: the graphics are amazing), **multiplayer** (для нескольких игроков), **download** (скачать), **online** (в сети: we play online), **achievement** (достижение).",
      "**Прилагательные -ed / -ing:** фильм **boring / exciting / frightening / scary** (что вызывает чувство), а я **bored / excited / frightened** (что я чувствую). Не «the film was bored».",
      "**Пассив с фильмами:** The film **was directed by** a famous director. The game **was made by** a small studio."
    ],
    examples: [
      { en: "I liked the plot, but the ending was disappointing.", ru: "Мне понравился сюжет, но концовка разочаровала." },
      { en: "There are ten episodes in the first season of the series.", ru: "В первом сезоне сериала десять серий." },
      { en: "The graphics in this game are amazing.", ru: "Графика в этой игре потрясающая." },
      { en: "I can't finish the last level — the boss is too strong.", ru: "Не могу пройти последний уровень: босс слишком сильный." },
      { en: "The film was so boring that I fell asleep.", ru: "Фильм был такой скучный, что я уснул." },
      { en: "You can download the game for free.", ru: "Игру можно скачать бесплатно." }
    ]
  }
);
