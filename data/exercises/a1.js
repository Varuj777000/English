// =====================================================================
// Упражнения уровня A1.
//
// Формат упражнения:
// {
//   id: "pres-s-001",        // уникальный ID (по нему сайт помнит, что вы уже решали)
//   topic: "present-simple", // ID темы из data/topics.js
//   type: "choice",          // тип упражнения (см. ниже)
//   q: "...",                // текст задания
//   options: [...],          // только для choice: варианты ответа
//   answer: "...",           // только для choice: правильный вариант (точно как в options)
//   answers: [...],          // для fill / fix / translate: ВСЕ допустимые ответы
//   hint: "...",             // (необязательно) подсказка, например глагол в скобках
//   explain: "..."           // (необязательно) объяснение после ответа
// }
//
// Типы:
//   choice    — выбрать вариант.            q: "She ___ tea."  options + answer
//   fill      — вписать пропущенное слово.  q: "She ___ tea."  answers: ["drinks"]
//               (в answers — только то, что стоит на месте ___;
//                при проверке ответ подставляется в предложение целиком)
//   fix       — исправить ошибку.           q: неправильное предложение,
//               answers: исправленное предложение целиком
//   translate — перевести с русского.       q: русская фраза, answers: варианты перевода
//
// При проверке не важны: регистр букв, лишние пробелы, знаки препинания,
// вид апострофа (' или ’) и сокращения (don't = do not, I'm = I am).
// Поэтому в answers не нужно дублировать варианты с сокращениями.
// =====================================================================

DATA.exercises.push(

  // ---------- to-be ----------
  { id: "be-001", topic: "to-be", type: "choice", q: "I ___ a student.", options: ["am", "is", "are"], answer: "am", explain: "С I всегда am." },
  { id: "be-002", topic: "to-be", type: "choice", q: "They ___ at home yesterday.", options: ["was", "were", "are"], answer: "were", explain: "yesterday — прошлое; с they — were." },
  { id: "be-003", topic: "to-be", type: "fill", q: "___ your sister a doctor?", answers: ["Is"], explain: "Вопрос с to be: Is + she/he/it (your sister)." },
  { id: "be-004", topic: "to-be", type: "fix", q: "She are my best friend.", answers: ["She is my best friend."], explain: "С she — is." },
  { id: "be-005", topic: "to-be", type: "translate", q: "Я не устал.", answers: ["I am not tired."], explain: "В английском глагол to be нельзя пропускать: I am not tired." },
  { id: "be-006", topic: "to-be", type: "translate", q: "Где ты?", answers: ["Where are you?"], explain: "Вопрос с be: **are** ставим перед подлежащим — Where **are** you? Не «Where you are?» и не «Where do you be?»." },
  { id: "be-007", topic: "to-be", type: "fill", q: "We ___ from Russia.", answers: ["are"], explain: "С we — are." },
  { id: "be-008", topic: "to-be", type: "choice", q: "It ___ very cold last night.", options: ["is", "was", "were"], answer: "was", explain: "last night — прошлое; с it — was." },

  // ---------- pronouns-possessives ----------
  { id: "pron-001", topic: "pronouns-possessives", type: "choice", q: "This is my brother. Do you know ___?", options: ["he", "him", "his"], answer: "him", explain: "После глагола (know) — форма «кого»: him." },
  { id: "pron-002", topic: "pronouns-possessives", type: "choice", q: "Is this pen ___?", options: ["your", "yours", "you"], answer: "yours", explain: "Без существительного после — yours." },
  { id: "pron-003", topic: "pronouns-possessives", type: "fill", q: "They love ___ new house.", hint: "их", answers: ["their"], explain: "Перед существительным (house) нужно притяжательное **their** («их»). They — подлежащее, а their — «чей»." },
  { id: "pron-004", topic: "pronouns-possessives", type: "fix", q: "This is Anna and this is she car.", answers: ["This is Anna and this is her car."], explain: "«Её» перед существительным — her." },
  { id: "pron-005", topic: "pronouns-possessives", type: "choice", q: "The cat is playing with ___ toy.", options: ["its", "it's", "it"], answer: "its", explain: "its — его/её (о животном). it's = it is." },
  { id: "pron-006", topic: "pronouns-possessives", type: "translate", q: "Позвони мне.", answers: ["Call me.", "Phone me.", "Give me a call."], explain: "После глагола call — местоимение-дополнение **me**, а не I или my: Call **me**. Phone me / Give me a call тоже верно." },
  { id: "pron-007", topic: "pronouns-possessives", type: "fill", q: "Can you help ___? We are lost.", hint: "нам", answers: ["us"], explain: "После глагола help — дополнение: **us** (нас), а не we." },
  { id: "pron-008", topic: "pronouns-possessives", type: "choice", q: "I gave the book to ___.", options: ["she", "her", "hers"], answer: "her", explain: "После предлога to — форма «кого/кому»: her." },

  // ---------- present-simple ----------
  { id: "pres-s-001", topic: "present-simple", type: "choice", q: "My sister ___ in a bank.", options: ["work", "works", "working", "is work"], answer: "works", explain: "С he / she / it в Present Simple глагол получает -s: she works." },
  { id: "pres-s-002", topic: "present-simple", type: "fill", q: "___ your brother speak English?", answers: ["Does"], explain: "Вопрос с he / she / it строится с does." },
  { id: "pres-s-003", topic: "present-simple", type: "fix", q: "He don't like coffee.", answers: ["He doesn't like coffee."], explain: "С he / she / it отрицание — doesn't." },
  { id: "pres-s-004", topic: "present-simple", type: "translate", q: "Я не работаю по субботам.", answers: ["I don't work on Saturdays.", "I don't work on Saturday."], explain: "Отрицание в Present Simple: don't + глагол. Дни недели — с предлогом on." },
  { id: "pres-s-005", topic: "present-simple", type: "choice", q: "We ___ to the gym on Mondays.", options: ["go", "goes", "going"], answer: "go", explain: "С we — глагол без -s." },
  { id: "pres-s-006", topic: "present-simple", type: "fill", q: "My father ___ TV every evening.", hint: "watch", answers: ["watches"], explain: "После ch добавляется -es: watches." },
  { id: "pres-s-007", topic: "present-simple", type: "fix", q: "Does she likes pizza?", answers: ["Does she like pizza?"], explain: "После does глагол без -s." },
  { id: "pres-s-008", topic: "present-simple", type: "choice", q: "They ___ meat.", options: ["don't eat", "doesn't eat", "not eat"], answer: "don't eat", explain: "С they — don't." },
  { id: "pres-s-009", topic: "present-simple", type: "translate", q: "Он живёт в Москве.", answers: ["He lives in Moscow."], explain: "He/she/it в Present Simple: глагол + **-s** — He lives. Предлог для города — **in** Moscow." },

  // --- pres-s: do/does и «голый» глагол ---
  { id: "pres-s-010", topic: "present-simple", type: "fix", q: "She don't works on Sundays.", answers: ["She doesn't work on Sundays."], explain: "С she — doesn't, а -s уходит: doesn't work." },
  { id: "pres-s-011", topic: "present-simple", type: "fix", q: "Does he plays tennis every week?", answers: ["Does he play tennis every week?"], explain: "После does глагол без -s: -s «забирает» does." },
  { id: "pres-s-012", topic: "present-simple", type: "fix", q: "My brother is goes to school every day.", answers: ["My brother goes to school every day."], explain: "В Present Simple am/is/are не нужны: goes — и всё." },
  { id: "pres-s-013", topic: "present-simple", type: "fix", q: "I am like pizza.", answers: ["I like pizza."], explain: "like — обычный глагол, am перед ним не ставится." },
  { id: "pres-s-014", topic: "present-simple", type: "fix", q: "Do your sister speak French?", answers: ["Does your sister speak French?"], explain: "your sister = she → Does." },
  { id: "pres-s-015", topic: "present-simple", type: "fix", q: "He doesn't likes spicy food.", answers: ["He doesn't like spicy food."], explain: "После doesn't глагол без -s." },

  { id: "pres-s-016", topic: "present-simple", type: "choice", q: "What time ___ the shop open?", options: ["does", "do", "is"], answer: "does", explain: "the shop = it → does; после does глагол «голый»: open." },
  { id: "pres-s-017", topic: "present-simple", type: "choice", q: "My cat ___ fish.", options: ["likes", "is likes", "like"], answer: "likes", explain: "С he/she/it глагол получает -s, am/is/are не нужны." },
  { id: "pres-s-018", topic: "present-simple", type: "choice", q: "They ___ in a bank.", options: ["work", "works", "are work"], answer: "work", explain: "С they глагол без -s и без are." },
  { id: "pres-s-019", topic: "present-simple", type: "choice", q: "___ you live near the school?", options: ["Do", "Are", "Does"], answer: "Do", explain: "live — обычный глагол, поэтому Do you live...?" },

  { id: "pres-s-020", topic: "present-simple", type: "fill", q: "Anna ___ to music every evening.", hint: "listen", answers: ["listens"], explain: "С she — глагол с -s." },
  { id: "pres-s-021", topic: "present-simple", type: "fill", q: "My dog ___ much.", hint: "not / eat", answers: ["doesn't eat", "does not eat"], explain: "С he/she/it — doesn't + глагол без -s." },
  { id: "pres-s-022", topic: "present-simple", type: "fill", q: "___ your parents work on Saturdays?", answers: ["Do"], explain: "your parents = they → Do." },

  { id: "pres-s-023", topic: "present-simple", type: "translate", q: "Он не любит рыбу.", answers: ["He doesn't like fish."], explain: "doesn't + like (без -s)." },
  { id: "pres-s-024", topic: "present-simple", type: "translate", q: "Ты говоришь по-английски?", answers: ["Do you speak English?"], explain: "Вопрос Simple: Do you + speak." },

  // --- pres-s: подлежащее — существительное ---
  { id: "pres-s-025", topic: "present-simple", type: "fix", q: "Dad belong to a chess club.", answers: ["Dad belongs to a chess club."], explain: "Dad → he → belongs. После существительного в единственном числе тоже нужен -s." },
  { id: "pres-s-026", topic: "present-simple", type: "fix", q: "Regular exercise help you sleep better.", answers: ["Regular exercise helps you sleep better."], explain: "Regular exercise → it → helps." },
  { id: "pres-s-027", topic: "present-simple", type: "fix", q: "The shop open at nine every day.", answers: ["The shop opens at nine every day."], explain: "The shop → it → opens." },
  { id: "pres-s-028", topic: "present-simple", type: "fix", q: "My sister like pizza.", answers: ["My sister likes pizza."], explain: "My sister → she → likes." },
  { id: "pres-s-029", topic: "present-simple", type: "fix", q: "Money don't buy happiness.", answers: ["Money doesn't buy happiness."], explain: "Money → it → doesn't." },
  { id: "pres-s-030", topic: "present-simple", type: "fix", q: "Music help me relax.", answers: ["Music helps me relax."], explain: "Music → it → helps." },

  { id: "pres-s-031", topic: "present-simple", type: "choice", q: "My teacher ___ us a lot of homework.", options: ["give", "gives", "giving"], answer: "gives", explain: "My teacher → she/he → gives." },
  { id: "pres-s-032", topic: "present-simple", type: "choice", q: "My parents ___ in a small village.", options: ["lives", "live", "living"], answer: "live", explain: "My parents → they → без -s." },

  { id: "pres-s-033", topic: "present-simple", type: "fill", q: "The train ___ at eight o'clock every morning.", hint: "leave", answers: ["leaves"], explain: "The train → it → leaves." },
  { id: "pres-s-034", topic: "present-simple", type: "fill", q: "My cousin ___ like fish.", hint: "not", answers: ["doesn't", "does not"], explain: "My cousin → he/she → doesn't." },

  { id: "pres-s-035", topic: "present-simple", type: "translate", q: "Папа работает в больнице.", answers: ["Dad works in a hospital.", "My dad works in a hospital.", "My father works in a hospital.", "Father works in a hospital.", "Dad works at a hospital.", "My dad works at a hospital.", "My father works at a hospital."], explain: "Dad → he → works." },
  { id: "pres-s-036", topic: "present-simple", type: "translate", q: "Деньги не растут на деревьях.", answers: ["Money doesn't grow on trees."], explain: "Money → it → doesn't grow." },

  // ---------- present-continuous ----------
  { id: "pres-c-001", topic: "present-continuous", type: "choice", q: "Be quiet! The baby ___.", options: ["sleeps", "is sleeping", "sleeping"], answer: "is sleeping", explain: "Действие происходит прямо сейчас." },
  { id: "pres-c-002", topic: "present-continuous", type: "fill", q: "I ___ a book at the moment.", hint: "read", answers: ["am reading"], explain: "at the moment → am/is/are + -ing." },
  { id: "pres-c-003", topic: "present-continuous", type: "fix", q: "I am understand you.", answers: ["I understand you."], explain: "understand — глагол состояния, его не ставят в -ing и не добавляют am." },
  { id: "pres-c-004", topic: "present-continuous", type: "choice", q: "What ___ you doing?", options: ["are", "do", "is"], answer: "are", explain: "Вопрос о том, что происходит сейчас: **am/is/are + подлежащее + -ing**. С you — **are**: What **are** you doing?" },
  { id: "pres-c-005", topic: "present-continuous", type: "translate", q: "Что ты сейчас делаешь?", answers: ["What are you doing now?", "What are you doing right now?", "What are you doing at the moment?"], explain: "Сейчас → Present Continuous: What **are** you **doing** now? Вопросительное слово + are + подлежащее + -ing." },
  { id: "pres-c-006", topic: "present-continuous", type: "fill", q: "Look! It ___.", hint: "snow", answers: ["is snowing"], explain: "Look! — действие идёт прямо сейчас, значит **is snowing** (is + -ing). Не «It snows»." },
  { id: "pres-c-007", topic: "present-continuous", type: "choice", q: "She ___ jeans today.", options: ["wears", "is wearing", "wear"], answer: "is wearing", explain: "today — сейчас, временно → Present Continuous." },
  { id: "pres-c-008", topic: "present-continuous", type: "fill", q: "They ___ football in the park now.", hint: "play", answers: ["are playing"], explain: "now — признак Present Continuous: They **are playing**. После are глагол с -ing, и один помощник." },

  // --- pres-c: -ing, правописание, отрицания ---
  { id: "pres-c-009", topic: "present-continuous", type: "fill", q: "Look at the score! Our team ___ the match.", hint: "win", answers: ["is winning"], explain: "win → winning: удваиваем -n (короткий слог: гласная + согласная)." },
  { id: "pres-c-010", topic: "present-continuous", type: "fill", q: "Why are you ___ so fast? Slow down!", hint: "run", answers: ["running"], explain: "run → running: удваиваем -n." },
  { id: "pres-c-011", topic: "present-continuous", type: "fill", q: "Look! The bus ___ at the corner.", hint: "stop", answers: ["is stopping"], explain: "stop → stopping: удваиваем -p." },
  { id: "pres-c-012", topic: "present-continuous", type: "fill", q: "Be quiet! Dad ___ an email.", hint: "write", answers: ["is writing"], explain: "write → writing: -e на конце пропадает." },
  { id: "pres-c-013", topic: "present-continuous", type: "fill", q: "She ___ today, so don't call her.", hint: "not / work", answers: ["isn't working", "is not working"], explain: "Отрицание: isn't (is not) + глагол-ing." },
  { id: "pres-c-014", topic: "present-continuous", type: "fill", q: "I ___ to you. I'm telling the truth!", hint: "not / lie", answers: ["am not lying", "'m not lying"], explain: "lie → lying: ie меняется на y. С I — только am not (сокращения isn't для I нет)." },

  { id: "pres-c-015", topic: "present-continuous", type: "fix", q: "I am have a cup of tea now.", answers: ["I am having a cup of tea now."], explain: "После am нужен глагол с -ing: am having. (have = «пить, есть» — обычное действие.)" },
  { id: "pres-c-016", topic: "present-continuous", type: "fix", q: "She is listen to the radio at the moment.", answers: ["She is listening to the radio at the moment."], explain: "is + глагол-ing: is listening." },
  { id: "pres-c-017", topic: "present-continuous", type: "fix", q: "Are you work today?", answers: ["Are you working today?"], explain: "Are уже в начале — глагол после него с -ing: Are you working?" },
  { id: "pres-c-018", topic: "present-continuous", type: "fix", q: "The kids are play in the garden now.", answers: ["The kids are playing in the garden now."], explain: "are + глагол-ing: are playing." },
  { id: "pres-c-019", topic: "present-continuous", type: "fix", q: "My sister doesn't sleeping now.", answers: ["My sister isn't sleeping now."], explain: "С -ing отрицание строится через isn't (am not / aren't), а не через doesn't." },
  { id: "pres-c-020", topic: "present-continuous", type: "fix", q: "They aren't watch TV. They are playing a game.", answers: ["They aren't watching TV. They are playing a game."], explain: "aren't + глагол-ing: aren't watching." },

  { id: "pres-c-021", topic: "present-continuous", type: "choice", q: "Look at Anna! She ___ a lovely dress.", options: ["is wearing", "wearing", "does wearing"], answer: "is wearing", explain: "Look! — сейчас. Нужен помощник is + глагол-ing." },

  { id: "pres-c-022", topic: "present-continuous", type: "translate", q: "Мы сейчас ждём автобус.", answers: ["We are waiting for the bus now.", "We are waiting for the bus right now.", "We are waiting for the bus at the moment.", "Now we are waiting for the bus.", "Right now we are waiting for the bus.", "At the moment we are waiting for the bus."], explain: "сейчас → are waiting (wait for = ждать)." },
  { id: "pres-c-023", topic: "present-continuous", type: "translate", q: "Почему ты плачешь?", answers: ["Why are you crying?"], explain: "Вопрос с are: Why are you crying?" },

  // ---------- there-is-are ----------
  { id: "there-001", topic: "there-is-are", type: "choice", q: "___ a problem with my phone.", options: ["There is", "There are", "It has"], answer: "There is", explain: "Одна проблема — **There is**. Нельзя «It has a problem» в значении «есть проблема»." },
  { id: "there-002", topic: "there-is-are", type: "choice", q: "___ any shops near here?", options: ["Are there", "Is there", "There are"], answer: "Are there", explain: "Вопрос во множественном числе: **Are there** any shops? Any стоит с множественным числом и в вопросах." },
  { id: "there-003", topic: "there-is-are", type: "fill", q: "There ___ a lot of people at the concert yesterday.", answers: ["were"], explain: "Прошлое, множественное число → there were." },
  { id: "there-004", topic: "there-is-are", type: "fix", q: "In my room is a big window.", answers: ["There is a big window in my room.", "In my room there is a big window."], explain: "«В комнате есть...» → There is ... in the room." },
  { id: "there-005", topic: "there-is-are", type: "translate", q: "В холодильнике нет молока.", answers: ["There is no milk in the fridge.", "There isn't any milk in the fridge.", "There is not any milk in the fridge."], explain: "«Нет молока» = **There is no milk**. Milk неисчисляемое — is, а не are." },
  { id: "there-006", topic: "there-is-are", type: "choice", q: "How many students ___ in your class?", options: ["are there", "there are", "is there"], answer: "are there", explain: "How many students + **are there**: порядок как в вопросе (глагол до there). Не «there are»." },
  { id: "there-007", topic: "there-is-are", type: "fill", q: "___ there a bank near your house?", answers: ["Is"], explain: "Вопрос в единственном числе (a bank): **Is** there a bank…? Is стоит перед there." },

  // ---------- articles-basic ----------
  { id: "art-b-001", topic: "articles-basic", type: "choice", q: "I saw ___ elephant at the zoo.", options: ["a", "an", "the"], answer: "an", explain: "Впервые упоминаем + гласный звук → an." },
  { id: "art-b-002", topic: "articles-basic", type: "choice", q: "Can you open ___ door, please?", options: ["a", "an", "the"], answer: "the", explain: "Понятно, о какой двери речь → the." },
  { id: "art-b-003", topic: "articles-basic", type: "fill", q: "My brother is ___ teacher.", answers: ["a"], explain: "С профессией нужен a/an." },
  { id: "art-b-004", topic: "articles-basic", type: "fix", q: "She is doctor.", answers: ["She is a doctor."], explain: "С профессией нужен a/an." },
  { id: "art-b-005", topic: "articles-basic", type: "choice", q: "___ sun is very hot today.", options: ["A", "The", "—"], answer: "The", explain: "Солнце одно → the." },
  { id: "art-b-006", topic: "articles-basic", type: "choice", q: "She eats ___ apple every day.", options: ["a", "an"], answer: "an", explain: "apple начинается с гласного звука → an." },
  { id: "art-b-007", topic: "articles-basic", type: "translate", q: "У меня есть собака.", answers: ["I have a dog.", "I have got a dog."], explain: "Собака впервые, одна из многих — **a dog**. Have + a + существительное в единственном числе." },
  { id: "art-b-008", topic: "articles-basic", type: "choice", q: "I'm ___ university student.", options: ["a", "an"], answer: "a", explain: "university звучит как «юниверсити» — первый звук согласный [j] → a." },

  // ---------- plurals ----------
  { id: "plur-001", topic: "plurals", type: "choice", q: "I have two ___.", options: ["child", "childs", "children"], answer: "children", explain: "child → **children** (особое множественное число, не childs)." },
  { id: "plur-002", topic: "plurals", type: "fill", q: "There are three ___ on the table.", hint: "box", answers: ["boxes"], explain: "После x добавляется -es." },
  { id: "plur-003", topic: "plurals", type: "choice", q: "Many ___ live in this city.", options: ["person", "people", "persons"], answer: "people", explain: "Много людей — **people** (множественное число от person). Не persons." },
  { id: "plur-004", topic: "plurals", type: "fill", q: "Brush your ___ twice a day.", hint: "tooth", answers: ["teeth"], explain: "tooth → **teeth** (особая форма). Brush your teeth — чистить зубы." },
  { id: "plur-005", topic: "plurals", type: "fix", q: "I visited three citys last year.", answers: ["I visited three cities last year."], explain: "Согласная + y → -ies: cities." },
  { id: "plur-006", topic: "plurals", type: "choice", q: "The ___ in this office are very friendly.", options: ["womans", "women", "woman"], answer: "women", explain: "woman → **women** (особая форма множественного числа); сказуемое тоже во множественном: the women **are** friendly." },
  { id: "plur-007", topic: "plurals", type: "fill", q: "We need two ___ for the cake.", hint: "knife", answers: ["knives"], explain: "knife → **knives**: f/fe меняются на **-ves** (knife, wife, leaf)." },
  { id: "plur-008", topic: "plurals", type: "choice", q: "It takes three ___ to get there.", options: ["days", "daies", "day"], answer: "days", explain: "Гласная + y → просто -s: days." },

  // ---------- have-got ----------
  { id: "have-001", topic: "have-got", type: "choice", q: "___ you got a car?", options: ["Have", "Do", "Are"], answer: "Have", explain: "С have got вопрос строится без do: **Have** you got a car? Не «Do you got»." },
  { id: "have-002", topic: "have-got", type: "choice", q: "She ___ got long hair.", options: ["has", "have", "is"], answer: "has", explain: "С she — **has got**. Вспомогательное has заменяет have, got остаётся." },
  { id: "have-003", topic: "have-got", type: "fill", q: "Do you ___ any brothers or sisters?", answers: ["have"], explain: "Вопрос с обычным have идёт через do: Do you **have**…? Здесь без got." },
  { id: "have-004", topic: "have-got", type: "fix", q: "Do you have got a pen?", answers: ["Have you got a pen?", "Do you have a pen?"], explain: "Либо Have you got..., либо Do you have... — смешивать нельзя." },
  { id: "have-005", topic: "have-got", type: "translate", q: "У нас нет машины.", answers: ["We haven't got a car.", "We don't have a car.", "We have no car."], explain: "Отрицание с have got: **haven't got**. Без got: We don't have a car." },
  { id: "have-006", topic: "have-got", type: "choice", q: "My brother ___ a new job.", options: ["has got", "have got", "is got"], answer: "has got", explain: "С he/she — **has got**. Форма «have got» — только с I, you, we, they." },
  { id: "have-007", topic: "have-got", type: "fill", q: "I ___ got time now, sorry.", hint: "отрицание", answers: ["haven't", "have not"], explain: "Отрицание с got: I **haven't** got time. С got помощник do не нужен (без got было бы I don't have time)." },

  // ---------- can-ability ----------
  { id: "can-001", topic: "can-ability", type: "choice", q: "I can ___ three languages.", options: ["speak", "to speak", "speaking"], answer: "speak", explain: "После can — глагол без to." },
  { id: "can-002", topic: "can-ability", type: "choice", q: "She ___ swim when she was five.", options: ["can", "could", "cans"], answer: "could", explain: "Прошлое → could." },
  { id: "can-003", topic: "can-ability", type: "fix", q: "He cans play the guitar.", answers: ["He can play the guitar."], explain: "У can нет окончания -s." },
  { id: "can-004", topic: "can-ability", type: "fill", q: "___ you help me, please?", answers: ["Can", "Could"], explain: "Вопрос с can: **Can** you help me? Can идёт первым. Could — вежливее." },
  { id: "can-005", topic: "can-ability", type: "translate", q: "Я не умею водить.", answers: ["I can't drive.", "I don't know how to drive."], explain: "Отрицание: **can't** + глагол без to. I can't drive. Не «I don't can»." },
  { id: "can-006", topic: "can-ability", type: "choice", q: "Sorry, I ___ come to your party.", options: ["can't", "don't can", "not can"], answer: "can't", explain: "Отрицание от can — **can't** (cannot). Нельзя «don't can» или «not can»." },
  { id: "can-007", topic: "can-ability", type: "fix", q: "Can you to open the window?", answers: ["Can you open the window?"], explain: "После can — глагол без to." },

  // ---------- imperatives ----------
  { id: "imp-001", topic: "imperatives", type: "choice", q: "___ worry, everything will be OK.", options: ["Don't", "Not", "No"], answer: "Don't", explain: "Запрет: **Don't** + глагол. Don't worry. Нельзя No worry или Not worry." },
  { id: "imp-002", topic: "imperatives", type: "choice", q: "___ go to the cinema tonight!", options: ["Let's", "Let", "Lets"], answer: "Let's", explain: "Предложение сделать что-то вместе: **Let's** + глагол (= let us). Пишется с апострофом." },
  { id: "imp-003", topic: "imperatives", type: "fill", q: "___ the door, please. It's cold.", hint: "закрой", answers: ["Close", "Shut"], explain: "Приказ — глагол в начальной форме: **Close** the door. Без you и без to." },
  { id: "imp-004", topic: "imperatives", type: "fix", q: "Don't to be late!", answers: ["Don't be late!"], explain: "Don't + глагол без to." },
  { id: "imp-005", topic: "imperatives", type: "translate", q: "Не трогай это!", answers: ["Don't touch it!", "Don't touch that!", "Don't touch this!"], explain: "Запрет: **Don't touch** it! Don't + глагол без to." },
  { id: "imp-006", topic: "imperatives", type: "choice", q: "___ careful! The floor is wet.", options: ["Be", "Are", "Being"], answer: "Be", explain: "С be повелительное — **Be**: Be careful! Нельзя «Are careful» или «Being careful»." },

  // ---------- prepositions-place ----------
  { id: "prep-p-001", topic: "prepositions-place", type: "choice", q: "The keys are ___ the table.", options: ["on", "in", "at"], answer: "on", explain: "Предмет лежит на поверхности — **on** the table." },
  { id: "prep-p-002", topic: "prepositions-place", type: "choice", q: "I'm ___ work now. I'll call you later.", options: ["at", "in", "on"], answer: "at", explain: "«На работе» — at work." },
  { id: "prep-p-003", topic: "prepositions-place", type: "fill", q: "She lives ___ London.", answers: ["in"], explain: "С городами — in." },
  { id: "prep-p-004", topic: "prepositions-place", type: "choice", q: "We met ___ the bus stop.", options: ["at", "in", "on"], answer: "at", explain: "Остановка как точка встречи — **at** the bus stop." },
  { id: "prep-p-005", topic: "prepositions-place", type: "fix", q: "I'm in the bus now.", answers: ["I'm on the bus now."], explain: "В автобусе, поезде, самолёте — on." },
  { id: "prep-p-006", topic: "prepositions-place", type: "translate", q: "Кошка под столом.", answers: ["The cat is under the table."], explain: "Под чем-то — **under**. The cat is under the table." },
  { id: "prep-p-007", topic: "prepositions-place", type: "choice", q: "The bank is ___ the post office and the café.", options: ["between", "next", "opposite of"], answer: "between", explain: "Между двумя предметами — **between … and …**." },
  { id: "prep-p-008", topic: "prepositions-place", type: "fill", q: "Is anybody ___ home?", answers: ["at"], explain: "Дома — at home." },

  // ---------- question-words ----------
  { id: "qw-001", topic: "question-words", type: "choice", q: "___ is your birthday? — In May.", options: ["When", "Where", "What"], answer: "When", explain: "Вопрос о времени (когда) — **When**. Ответ In May — месяц." },
  { id: "qw-002", topic: "question-words", type: "choice", q: "___ bag is this? — It's mine.", options: ["Whose", "Who", "Who's"], answer: "Whose", explain: "Вопрос «чей» — **Whose** + существительное. Who's = who is, это другое." },
  { id: "qw-003", topic: "question-words", type: "fill", q: "___ old are you?", answers: ["How"], explain: "Возраст спрашивают через **How old**. Не «What age»." },
  { id: "qw-004", topic: "question-words", type: "fix", q: "Where you live?", answers: ["Where do you live?"], explain: "В вопросе нужен вспомогательный глагол: do." },
  { id: "qw-005", topic: "question-words", type: "choice", q: "___ people came to the party?", options: ["How many", "How much", "How"], answer: "How many", explain: "people — исчисляемое → how many." },
  { id: "qw-006", topic: "question-words", type: "translate", q: "Почему ты опоздал?", answers: ["Why are you late?", "Why were you late?"], explain: "Why + are + подлежащее: Why **are** you late? С be вспомогательный do не нужен." },
  { id: "qw-007", topic: "question-words", type: "choice", q: "Who ___ this cake? It's delicious!", options: ["made", "did make", "did made"], answer: "made", explain: "Who — подлежащее, поэтому did не нужен." },
  { id: "qw-008", topic: "question-words", type: "fix", q: "What time you get up?", answers: ["What time do you get up?"], explain: "В вопросе нужен помощник: What time **do you** get up? Не «What time you get up»." },

  // ---------- this-that-these-those ----------
  { id: "this-001", topic: "this-that-these-those", type: "choice", q: "___ shoes are too small for me.", options: ["These", "This", "That"], answer: "These", explain: "shoes — множественное число → these." },
  { id: "this-002", topic: "this-that-these-those", type: "choice", q: "Look at ___ birds in the sky!", options: ["those", "that", "this"], answer: "those", explain: "Много и далеко → those." },
  { id: "this-003", topic: "this-that-these-those", type: "fill", q: "___ is my friend Tom.", hint: "это (рядом со мной)", answers: ["This"], explain: "Представляем человека рядом — **This** is my friend. This is — для одного." },
  { id: "this-004", topic: "this-that-these-those", type: "fix", q: "These book is interesting.", answers: ["This book is interesting.", "These books are interesting."], explain: "Book — единственное число, поэтому **This** book is. Для books было бы These books are." },
  { id: "this-005", topic: "this-that-these-those", type: "choice", q: "Who is ___ man over there?", options: ["that", "this", "those"], answer: "that", explain: "Один и далеко (over there) → that." },
  { id: "this-006", topic: "this-that-these-those", type: "translate", q: "Эти яблоки очень вкусные.", answers: ["These apples are very tasty.", "These apples are very good.", "These apples are delicious.", "These apples are very delicious."], explain: "Яблоки (много) и близко — **These** apples **are**. Глагол согласуется: these + are." },

  // ---------- countable-uncountable ----------
  { id: "count-001", topic: "countable-uncountable", type: "choice", q: "Can you give me some ___?", options: ["advice", "advices", "an advice"], answer: "advice", explain: "advice — неисчисляемое." },
  { id: "count-002", topic: "countable-uncountable", type: "choice", q: "The news ___ very good today.", options: ["is", "are", "were"], answer: "is", explain: "news — неисчисляемое, глагол в единственном числе." },
  { id: "count-003", topic: "countable-uncountable", type: "fix", q: "I need an information about the hotel.", answers: ["I need some information about the hotel.", "I need information about the hotel."], explain: "information — неисчисляемое, без an." },
  { id: "count-004", topic: "countable-uncountable", type: "choice", q: "How much ___ do you have?", options: ["money", "moneys", "dollar"], answer: "money", explain: "Money неисчисляемое: How much **money**. Не moneys." },
  { id: "count-005", topic: "countable-uncountable", type: "fill", q: "Would you like a ___ of tea?", answers: ["cup", "mug", "glass"], explain: "Чай считают порциями: a **cup** of tea (a glass / a mug тоже возможны)." },
  { id: "count-006", topic: "countable-uncountable", type: "translate", q: "Твои деньги на столе.", answers: ["Your money is on the table."], explain: "money — неисчисляемое: money is." },
  { id: "count-007", topic: "countable-uncountable", type: "fix", q: "Our furnitures are very old.", answers: ["Our furniture is very old."], explain: "furniture — неисчисляемое." },

  // ---------- some-any ----------
  { id: "some-001", topic: "some-any", type: "choice", q: "I don't have ___ money.", options: ["any", "some", "no"], answer: "any", explain: "В отрицании — any." },
  { id: "some-002", topic: "some-any", type: "choice", q: "There are ___ apples on the table.", options: ["some", "any", "a"], answer: "some", explain: "В утверждении — some." },
  { id: "some-003", topic: "some-any", type: "choice", q: "There isn't ___ milk left.", options: ["any", "some", "no"], answer: "any", explain: "В отрицании — **any**: There isn't any milk. Some в отрицании не ставят." },
  { id: "some-004", topic: "some-any", type: "fill", q: "Is there ___ in the kitchen? I can hear a noise.", hint: "кто-нибудь", answers: ["anybody", "anyone", "somebody", "someone"], explain: "В вопросе — any-слова: **anybody / anyone**. В утверждении было бы somebody." },
  { id: "some-005", topic: "some-any", type: "fix", q: "I didn't see nobody.", answers: ["I didn't see anybody.", "I didn't see anyone.", "I saw nobody.", "I saw no one."], explain: "В английском одно отрицание: didn't + anybody или просто nobody." },
  { id: "some-006", topic: "some-any", type: "translate", q: "У меня есть несколько вопросов.", answers: ["I have some questions.", "I have a few questions.", "I have got some questions.", "I have got a few questions.", "I have several questions."], explain: "В утверждении — **some**: I have some questions. В отрицании было бы any." },

  // ---------- word-order ----------
  { id: "order-001", topic: "word-order", type: "choice", q: "Выберите правильное предложение.", options: ["I often go to the gym.", "I go often to the gym.", "I go to often the gym."], answer: "I often go to the gym.", explain: "Наречие частоты — перед основным глаголом." },
  { id: "order-002", topic: "word-order", type: "choice", q: "Выберите правильное предложение.", options: ["She speaks English very well.", "She speaks very well English.", "She very well speaks English."], answer: "She speaks English very well.", explain: "Глагол и дополнение не разделяются: speaks English + very well." },
  { id: "order-003", topic: "word-order", type: "fix", q: "I like very much this song.", answers: ["I like this song very much."], explain: "very much — в конце." },
  { id: "order-004", topic: "word-order", type: "fix", q: "We yesterday went to the park.", answers: ["We went to the park yesterday.", "Yesterday we went to the park."], explain: "Время — в конце (или в самом начале) предложения." },
  { id: "order-005", topic: "word-order", type: "choice", q: "Выберите правильное предложение.", options: ["He has a big red car.", "He has a red big car.", "He has a car big red."], answer: "He has a big red car.", explain: "Размер перед цветом, прилагательные — перед существительным." },
  { id: "order-006", topic: "word-order", type: "translate", q: "Я обычно пью кофе утром.", answers: ["I usually drink coffee in the morning.", "I usually have coffee in the morning.", "In the morning I usually drink coffee.", "In the morning I usually have coffee."], explain: "Порядок: подлежащее + частота + глагол + дополнение + время: I **usually drink** coffee **in the morning**." },

  { id: "order-007", topic: "word-order", type: "fix", q: "She meets usually her friends in the evening.", answers: ["She usually meets her friends in the evening.", "In the evening she usually meets her friends.", "Usually she meets her friends in the evening."], explain: "Наречие частоты — перед глаголом; время (in the evening) — в конце или в начале." },
  { id: "order-008", topic: "word-order", type: "fix", q: "I watch every day the news.", answers: ["I watch the news every day.", "Every day I watch the news."], explain: "Между глаголом и дополнением ничего не вставляем: watch the news, а every day — в конец или в начало." },
  { id: "order-009", topic: "word-order", type: "fix", q: "In the evening she meets usually her friends.", answers: ["In the evening she usually meets her friends.", "She usually meets her friends in the evening."], explain: "Обстоятельство времени в начале, дальше обычный порядок: she usually meets." },
  { id: "order-010", topic: "word-order", type: "fix", q: "My mother cooks every Sunday a big dinner.", answers: ["My mother cooks a big dinner every Sunday.", "Every Sunday my mother cooks a big dinner."], explain: "Время — не между глаголом и дополнением: в конец или в начало." },
  { id: "order-011", topic: "word-order", type: "fix", q: "They play football on Saturdays often.", answers: ["They often play football on Saturdays.", "On Saturdays they often play football.", "Often they play football on Saturdays."], explain: "often — перед глаголом, а не в конце после времени." },

  { id: "order-012", topic: "word-order", type: "choice", q: "Выберите правильное предложение.", options: ["In the morning I usually drink tea.", "In the morning I drink usually tea.", "I drink tea usually in the morning."], answer: "In the morning I usually drink tea.", explain: "Время в начале, usually — перед глаголом." },
  { id: "order-013", topic: "word-order", type: "choice", q: "Выберите правильное предложение.", options: ["She often goes to the park at weekends.", "She goes often to the park at weekends.", "She goes to the park often at weekends."], answer: "She often goes to the park at weekends.", explain: "often — перед глаголом goes." },
  { id: "order-014", topic: "word-order", type: "choice", q: "Выберите правильное предложение.", options: ["We have lunch at one o'clock every day.", "We have at one o'clock lunch every day.", "We have every day lunch at one o'clock."], answer: "We have lunch at one o'clock every day.", explain: "Сначала дополнение (lunch), потом место/время." },

  { id: "order-015", topic: "word-order", type: "translate", q: "Составь предложение: Helen — often — eat fast food — for lunch", answers: ["Helen often eats fast food for lunch.", "For lunch Helen often eats fast food.", "Often Helen eats fast food for lunch."], explain: "often — перед глаголом; у Helen (she) — eats. for lunch — в конце или в начале." },
  { id: "order-016", topic: "word-order", type: "translate", q: "Составь предложение: my parents — sometimes — go to the cinema — on Fridays", answers: ["My parents sometimes go to the cinema on Fridays.", "On Fridays my parents sometimes go to the cinema.", "Sometimes my parents go to the cinema on Fridays."], explain: "sometimes — перед глаголом go (у my parents = they без -s)." },
  { id: "order-017", topic: "word-order", type: "translate", q: "Составь предложение: she — be — never — late — for school", answers: ["She is never late for school."], explain: "С глаголом be: is never late (наречие после is)." },
  { id: "order-018", topic: "word-order", type: "translate", q: "Составь предложение: in the morning — I — often — drink — tea", answers: ["In the morning I often drink tea.", "I often drink tea in the morning.", "Often I drink tea in the morning."], explain: "often — перед глаголом drink; время — в начале или в конце." },

  // ---------- vocab-daily-life ----------
  { id: "v-daily-001", topic: "vocab-daily-life", type: "choice", q: "I usually ___ breakfast at 8.", options: ["have", "do", "take"], answer: "have", explain: "have breakfast — завтракать." },
  { id: "v-daily-002", topic: "vocab-daily-life", type: "choice", q: "My sister's son is my ___.", options: ["nephew", "niece", "cousin"], answer: "nephew", explain: "nephew — племянник, niece — племянница." },
  { id: "v-daily-003", topic: "vocab-daily-life", type: "choice", q: "I'm tired. I'm going to ___.", options: ["bed", "the bed", "a bed"], answer: "bed", explain: "go to bed — ложиться спать (без артикля)." },
  { id: "v-daily-004", topic: "vocab-daily-life", type: "fill", q: "The opposite of «hot» is ___.", answers: ["cold"], explain: "Противоположность hot — **cold** (холодный)." },
  { id: "v-daily-005", topic: "vocab-daily-life", type: "choice", q: "We ___ the dishes after dinner.", options: ["wash", "make", "cook"], answer: "wash", explain: "Посуду моют — **wash** the dishes (также do the dishes). Make / cook здесь не подходят." },
  { id: "v-daily-006", topic: "vocab-daily-life", type: "translate", q: "Который час?", answers: ["What time is it?", "What's the time?", "Do you have the time?"], explain: "Время спрашивают: **What time is it?** (Который час?)" },
  { id: "v-daily-007", topic: "vocab-daily-life", type: "choice", q: "Saturday and Sunday are the ___.", options: ["weekend", "week", "holiday"], answer: "weekend", explain: "Суббота и воскресенье — **weekend** (выходные)." }
);
