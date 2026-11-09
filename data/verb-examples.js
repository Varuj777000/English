// =====================================================================
// Предложения для тренировки неправильных глаголов (режимы «Выбери правильную
// форму» и «Найди ошибку», см. js/verbs.js).
//
// Формат: инфинитив → [предложение с пропуском для V2, предложение с пропуском для V3]
// Вместо ___ подставляется форма глагола из data/verbs.js, поэтому сами формы
// здесь писать не нужно — только рамка предложения.
// Необязательный третий элемент — { past: [...], pp: [...] }: если в предложении
// подходит не каждый вариант из data/verbs.js (например, be: «She ___» — только was).
// =====================================================================

Object.assign(DATA.verbExamples, {

  // ---------- AAA ----------
  cut:       ["She ___ her finger with a knife.", "I have ___ the bread into slices."],
  let:       ["Mum ___ me stay up late yesterday.", "They have never ___ us use their computer."],
  put:       ["He ___ the keys on the table.", "I have ___ the milk in the fridge."],
  set:       ["She ___ the alarm for six o'clock.", "The table has been ___ for dinner."],
  read:      ["I ___ this book last summer.", "Have you ___ the news today?"],
  hit:       ["The ball ___ the window.", "He has ___ his head on the door."],
  hurt:      ["She ___ her knee while running.", "I have ___ my back."],
  shut:      ["He ___ the door quietly.", "The shop has ___ for the night."],
  cost:      ["The ticket ___ twenty pounds.", "That mistake has ___ us a lot of money."],
  quit:      ["He ___ his job last month.", "She has ___ smoking."],
  bet:       ["I ___ ten euros on that horse.", "He has ___ on the match again."],
  burst:     ["The balloon ___ with a loud bang.", "The pipe has ___ and the kitchen is wet."],
  spread:    ["The news ___ quickly through the town.", "The fire has ___ to the next house."],
  split:     ["They ___ the bill between four people.", "The class has ___ into two groups."],
  broadcast: ["The BBC ___ the match live.", "The concert was ___ on the radio."],
  upset:     ["The bad news ___ her a lot.", "I'm sorry if I have ___ you."],

  // ---------- AAB / ABA ----------
  beat:      ["Our team ___ them 3–0.", "We have never ___ them."],
  come:      ["My cousin ___ to see us on Sunday.", "Spring has ___ at last."],
  become:    ["She ___ a doctor in 2015.", "He has ___ very famous."],
  run:       ["He ___ five kilometres this morning.", "I have ___ out of milk."],
  overcome:  ["She ___ her fear of water.", "He has ___ many difficulties."],

  // ---------- ABB: -ought / -aught ----------
  buy:       ["We ___ a new sofa last week.", "I have ___ tickets for the concert."],
  bring:     ["She ___ her camera to the party.", "Have you ___ your passport?"],
  think:     ["I ___ about you all day.", "I have never ___ of that."],
  teach:     ["Mr Brown ___ us history.", "She has ___ English for ten years."],
  catch:     ["The cat ___ a mouse.", "We have ___ the last train."],
  fight:     ["The two brothers ___ over the toy.", "They have ___ for years."],
  seek:      ["They ___ shelter from the rain.", "He has ___ advice from experts."],

  // ---------- ABB: -t ----------
  leave:     ["We ___ home at seven.", "She has ___ her umbrella on the bus."],
  feel:      ["I ___ very tired after the trip.", "He has ___ ill all week."],
  keep:      ["She ___ the letter for years.", "I have ___ your book safe."],
  mean:      ["I ___ no harm.", "I have always ___ to call you."],
  meet:      ["I ___ my best friend at school.", "Have you ___ his sister?"],
  lose:      ["He ___ his phone on the train.", "We have ___ the game."],
  send:      ["She ___ me a postcard from Rome.", "I have ___ the email to my boss."],
  build:     ["They ___ a house by the river.", "The workers have ___ a new bridge here."],
  spend:     ["We ___ a week in Spain.", "He has ___ all his money."],
  sleep:     ["The baby ___ all night.", "I haven't ___ well this week."],
  lend:      ["My uncle ___ me his car.", "She has ___ me her notes."],
  bend:      ["He ___ down to tie his shoe.", "The wind has ___ the tree."],
  learn:     ["I ___ to swim when I was five.", "She has ___ a lot of new words."],
  burn:      ["He ___ the toast again.", "The old letters have been ___."],
  dream:     ["I ___ about my grandmother last night.", "I have never ___ of flying."],
  spell:     ["She ___ the word correctly.", "He has ___ my name wrong again."],
  deal:      ["She ___ with the problem quickly.", "We have ___ with many customers."],
  sweep:     ["He ___ the floor after dinner.", "I have ___ the leaves into a pile."],
  creep:     ["The cat ___ up to the bird.", "Fear has ___ into his voice."],
  kneel:     ["She ___ down to pick up the ball.", "He has ___ beside the bed."],

  // ---------- ABB: остальные ----------
  have:      ["We ___ a great time at the party.", "I have ___ this phone for two years."],
  say:       ["She ___ goodbye and left.", "What have you ___?"],
  make:      ["Dad ___ a cake for my birthday.", "I have ___ a big mistake."],
  get:       ["I ___ a letter from my friend.", "It has ___ colder this week."],
  find:      ["He ___ his keys under the bed.", "Have you ___ a job yet?"],
  tell:      ["She ___ me a funny story.", "I have ___ you the truth."],
  hold:      ["He ___ the baby carefully.", "The meeting was ___ on Monday."],
  stand:     ["We ___ in line for an hour.", "She has ___ here since morning."],
  hear:      ["I ___ a strange noise in the night.", "Have you ___ the news?"],
  pay:       ["He ___ for the tickets.", "I have ___ the bill already."],
  sit:       ["She ___ next to me in class.", "We have ___ here for an hour."],
  understand: ["I ___ the question at once.", "I haven't ___ this rule yet."],
  win:       ["Our team ___ the final.", "She has ___ three prizes."],
  sell:      ["He ___ his old bike for fifty pounds.", "They have ___ their house."],
  lead:      ["Our captain ___ the team to victory.", "This road has ___ us to the lake."],
  shoot:     ["The hunter ___ at the target.", "The film has been ___ in Iceland."],
  hang:      ["She ___ her coat on the hook.", "Pictures have been ___ on every wall."],
  feed:      ["We ___ the ducks in the park.", "Have you ___ the cat?"],
  lay:       ["She ___ the table for dinner.", "The workers have ___ new pipes."],
  shine:     ["The sun ___ all day.", "The stars have ___ brightly tonight."],
  dig:       ["He ___ a deep hole in the garden.", "They have ___ a tunnel."],
  swing:     ["The children ___ on the rope.", "The door has ___ open."],
  stick:     ["She ___ a stamp on the letter.", "The label has ___ to the box."],
  strike:    ["The clock ___ twelve.", "Lightning has ___ the tree."],
  slide:     ["The boy ___ down the hill.", "The coin has ___ under the sofa."],
  light:     ["He ___ a candle in the dark.", "Someone has ___ a fire."],
  bleed:     ["His finger ___ a lot.", "The cut has ___ for an hour."],
  flee:      ["The thieves ___ in a car.", "Many people have ___ the city."],

  // ---------- ABC: -ew / -own ----------
  know:      ["I ___ her when we were children.", "I have ___ him for years."],
  grow:      ["The tree ___ very tall.", "He has ___ a beard."],
  draw:      ["She ___ a picture of her dog.", "I have ___ a map for you."],
  throw:     ["He ___ the ball to his friend.", "Who has ___ this paper on the floor?"],
  fly:       ["We ___ to Rome last June.", "She has ___ many times."],
  blow:      ["The wind ___ all night.", "He has ___ out the candles."],
  withdraw:  ["She ___ some money from the bank.", "He has ___ from the race."],

  // ---------- ABC: i – a – u ----------
  begin:     ["The film ___ at eight.", "The lesson has already ___."],
  drink:     ["He ___ a glass of water.", "I have ___ too much coffee."],
  sing:      ["She ___ beautifully at the concert.", "We have ___ this song many times."],
  swim:      ["They ___ in the lake yesterday.", "I have ___ a kilometre today."],
  ring:      ["The phone ___ twice.", "Someone has ___ the bell."],
  sink:      ["The ship ___ in the storm.", "The boat has ___ to the bottom."],
  shrink:    ["My sweater ___ in the wash.", "The company has ___ a lot."],

  // ---------- ABC: V3 на -en / -n ----------
  take:      ["She ___ a photo of the sea.", "I have ___ your book by mistake."],
  see:       ["We ___ a great film last night.", "Have you ___ my keys?"],
  give:      ["He ___ me a present.", "She has ___ me good advice."],
  write:     ["I ___ a letter to my aunt.", "He has ___ three books."],
  speak:     ["She ___ to the manager.", "I have ___ to him twice."],
  break:     ["Tom ___ the window.", "The cup has ___ into pieces."],
  drive:     ["We ___ to the coast.", "He has ___ this car for ten years."],
  wear:      ["She ___ a red coat.", "I have ___ these shoes all week."],
  choose:    ["He ___ the blue one.", "Have you ___ a name for the dog?"],
  eat:       ["We ___ pizza for dinner.", "I have already ___ lunch."],
  fall:      ["The boy ___ off his bike.", "Snow has ___ all night."],
  forget:    ["I ___ my umbrella.", "He has ___ my name."],
  wake:      ["The noise ___ the baby.", "I have ___ up early today."],
  ride:      ["She ___ her bike to school.", "I have never ___ a horse."],
  hide:      ["The child ___ behind the door.", "The money has been ___ under the bed."],
  bite:      ["The dog ___ the postman.", "I have been ___ by a mosquito."],
  shake:     ["He ___ my hand.", "The explosion has ___ the building."],
  steal:     ["Someone ___ my bag.", "My bike has been ___."],
  rise:      ["The sun ___ at six.", "Prices have ___ again."],
  tear:      ["He ___ the letter in half.", "I have ___ my jeans."],
  freeze:    ["The lake ___ last night.", "The pipes have ___."],
  swear:     ["He ___ never to lie again.", "She has ___ to keep it a secret."],
  forbid:    ["The teacher ___ us to talk.", "Smoking is ___ here."],
  forgive:   ["She ___ him at once.", "I have ___ you."],
  mistake:   ["I ___ him for his brother.", "She has ___ my words."],

  // ---------- ABC: особые ----------
  be:        ["She ___ very happy yesterday.", "I have ___ to London twice.", { past: ["was"] }],
  do:        ["He ___ his homework after school.", "I have ___ all my work."],
  go:        ["We ___ to the cinema yesterday.", "She has ___ to Paris."],
  lie:       ["The cat ___ on the sofa all afternoon.", "The book has ___ there for years."],
  show:      ["She ___ me her photos.", "He has ___ me the way."],
  undo:      ["He ___ his shoelaces.", "I have ___ the knot."],
  prove:     ["She ___ that she was right.", "The idea has been ___ wrong."]

});
