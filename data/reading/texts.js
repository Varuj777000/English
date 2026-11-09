// =====================================================================
// Тексты для чтения с вопросами.
//
// Формат:
// {
//   id: "read-a1-001",
//   level: "A1",
//   title: "Название",
//   text: ["Абзац 1", "Абзац 2"],
//   questions: [
//     // вопросы в том же формате, что и упражнения (choice или fill),
//     // но без id и topic — они добавляются автоматически
//     { type: "choice", q: "...", options: [...], answer: "..." }
//   ]
// }
// Все вопросы к текстам относятся к теме "reading".
// =====================================================================

DATA.texts.push(
  {
    id: "read-a1-001",
    level: "A1",
    title: "My Day",
    text: [
      "My name is Tom. I live in a small flat in Manchester with my cat, Leo.",
      "I work in a café. I start work at seven o'clock in the morning, so I get up very early. I usually walk to work because the café is near my flat.",
      "In the evening I cook dinner and watch films. I don't like TV shows, but I love old films. On Sundays I visit my parents."
    ],
    questions: [
      {
        type: "choice",
        q: "Where does Tom work?",
        options: ["In a shop", "In a café", "In a bank", "At home"],
        answer: "In a café"
      },
      {
        type: "choice",
        q: "How does Tom usually go to work?",
        options: ["By bus", "By car", "On foot", "By bike"],
        answer: "On foot",
        explain: "В тексте: I usually walk to work — хожу пешком (on foot)."
      },
      {
        type: "choice",
        q: "What does Tom NOT like?",
        options: ["Old films", "Cooking", "TV shows", "His cat"],
        answer: "TV shows"
      }
    ]
  },

  {
    id: "read-a1-002",
    level: "A1",
    title: "At the Market",
    text: [
      "Every Saturday morning, Maria goes to the market near her house. She buys fruit, vegetables and fresh bread. The market opens at eight, but Maria likes to arrive at nine because it is not so busy then.",
      "Maria always talks to Mr Brown. He sells cheese and he is very friendly. Today Maria wants to make a pizza for her friends, so she buys some cheese and tomatoes. She doesn't buy meat because her friends are vegetarians."
    ],
    questions: [
      { type: "choice", q: "When does Maria go to the market?", options: ["On Saturday mornings", "Every day", "On Sunday evenings", "Every morning at eight"], answer: "On Saturday mornings" },
      { type: "choice", q: "What does Mr Brown sell?", options: ["Cheese", "Bread", "Meat", "Tomatoes"], answer: "Cheese" },
      { type: "choice", q: "Why doesn't Maria buy meat?", options: ["Her friends don't eat meat", "It is too expensive", "Mr Brown doesn't sell it", "She doesn't like pizza"], answer: "Her friends don't eat meat", explain: "vegetarians — вегетарианцы, они не едят мясо." }
    ]
  },

  {
    id: "read-a2-001",
    level: "A2",
    title: "A New Job",
    text: [
      "Last month Sara started a new job at an IT company in Kazan. Before that, she worked in a small shop for five years. The new job is more interesting, but it is also harder: she often has to speak English with clients from other countries.",
      "At first Sara was nervous because her English wasn't very good. So she decided to take lessons twice a week after work. Her colleagues are very friendly and they often help her. Now, after a month, she feels more confident, and last Friday she had her first meeting in English without any help."
    ],
    questions: [
      { type: "choice", q: "Where did Sara work before?", options: ["In a shop", "In an IT company", "In a school", "At home"], answer: "In a shop" },
      { type: "choice", q: "Why was Sara nervous at first?", options: ["Her English wasn't very good", "Her colleagues weren't friendly", "The job was boring", "She had to work at weekends"], answer: "Her English wasn't very good" },
      { type: "choice", q: "How often does Sara have English lessons?", options: ["Twice a week", "Every day", "Once a month", "Only on Fridays"], answer: "Twice a week" },
      { type: "choice", q: "What happened last Friday?", options: ["She had a meeting in English without help", "She left the company", "She met her new colleagues", "She had her first English lesson"], answer: "She had a meeting in English without help" }
    ]
  },

  {
    id: "read-a2-002",
    level: "A2",
    title: "A Weekend in St Petersburg",
    text: [
      "Dima and his girlfriend Olya went to St Petersburg for the weekend. They took the night train from Moscow on Friday and arrived early on Saturday morning. They left their bags at the hotel and went for a walk along Nevsky Prospect.",
      "In the afternoon they visited the Hermitage. Dima wanted to see everything, but the museum is so big that they only saw a small part of it. In the evening it started to rain, so they had dinner in a café near the hotel instead of going on a boat trip.",
      "On Sunday the weather was better, and they finally took the boat trip before their train home."
    ],
    questions: [
      { type: "choice", q: "How did they travel to St Petersburg?", options: ["By train", "By plane", "By car", "By bus"], answer: "By train" },
      { type: "choice", q: "Why didn't they see the whole museum?", options: ["It was too big", "It was closed", "It was raining", "They didn't have tickets"], answer: "It was too big" },
      { type: "choice", q: "When did they go on the boat trip?", options: ["On Sunday", "On Saturday afternoon", "On Saturday evening", "They didn't go"], answer: "On Sunday", explain: "В субботу вечером пошёл дождь, и они поужинали в кафе «instead of» (вместо) прогулки на лодке." }
    ]
  },

  {
    id: "read-a2-003",
    level: "A2",
    title: "My Neighbour's Dog",
    text: [
      "Every morning before work, I walk my neighbour's dog, Buddy. My neighbour, Mrs Clarke, is 75 years old and can't walk very fast, so I offered to help her last year. Buddy is a big, friendly dog, and he loves to run in the park near our street.",
      "At first, I only walked Buddy once a week, but now I do it every day because I enjoy it so much. Mrs Clarke always gives me a cup of tea when I bring Buddy back. In return, she sometimes bakes a cake for me. We have become good friends, and I think Buddy is happy too — he always wags his tail when he sees me."
    ],
    questions: [
      { type: "choice", q: "Why did the writer start walking Buddy?", options: ["To help Mrs Clarke, who can't walk fast", "Because Mrs Clarke asked for money", "Because the writer wanted a dog", "Because Buddy was lost"], answer: "To help Mrs Clarke, who can't walk fast" },
      { type: "choice", q: "How often does the writer walk Buddy now?", options: ["Every day", "Once a week", "Twice a week", "Only on weekends"], answer: "Every day" },
      { type: "choice", q: "What does Mrs Clarke give the writer?", options: ["A cup of tea", "Money", "A new dog", "Nothing"], answer: "A cup of tea" },
      { type: "choice", q: "How do we know Buddy is happy to see the writer?", options: ["He wags his tail", "He barks loudly", "He runs away", "He sleeps"], answer: "He wags his tail" }
    ]
  },

  {
    id: "read-a2-004",
    level: "A2",
    title: "A Trip to the Doctor",
    text: [
      "Last Tuesday, Ben woke up with a terrible headache and a sore throat. He decided to call his doctor's office to make an appointment. The receptionist told him that the earliest appointment was at 4 pm, so he had to wait all day.",
      "When Ben finally saw the doctor, she checked his throat and took his temperature. \"It's just a cold,\" she said. \"Drink plenty of water, get some rest, and you'll feel better in a few days.\" She didn't give him any medicine, just some advice. Ben went home, made himself a hot drink, and went straight to bed."
    ],
    questions: [
      { type: "choice", q: "What was wrong with Ben?", options: ["He had a headache and a sore throat", "He had a broken arm", "He had a stomach ache", "He couldn't sleep"], answer: "He had a headache and a sore throat" },
      { type: "choice", q: "What time was Ben's appointment?", options: ["4 pm", "9 am", "12 pm", "6 pm"], answer: "4 pm" },
      { type: "choice", q: "What did the doctor say Ben had?", options: ["A cold", "An infection", "A broken bone", "A serious illness"], answer: "A cold" },
      { type: "choice", q: "What did the doctor give Ben?", options: ["No medicine, just advice", "Some pills", "An injection", "A prescription"], answer: "No medicine, just advice" }
    ]
  },

  {
    id: "read-a2-005",
    level: "A2",
    title: "Learning to Cook",
    text: [
      "When Yuki moved to a new city for university, she realised she didn't know how to cook. At home, her mother always made dinner, so Yuki had never needed to learn. In her first month away, she ate a lot of sandwiches and instant noodles.",
      "One weekend, Yuki called her mother and asked her to explain a simple recipe over the phone. It didn't go very well — Yuki burned the rice! After that, she started watching cooking videos online instead. Now, six months later, she can cook ten different dishes, and she even makes dinner for her friends every Friday."
    ],
    questions: [
      { type: "choice", q: "Why couldn't Yuki cook at first?", options: ["Her mother always cooked for her", "She didn't like cooking", "She had no kitchen", "She was too busy"], answer: "Her mother always cooked for her" },
      { type: "choice", q: "What happened when her mother explained a recipe by phone?", options: ["Yuki burned the rice", "The call didn't connect", "Yuki cooked it perfectly", "Her mother came to visit"], answer: "Yuki burned the rice" },
      { type: "choice", q: "How did Yuki learn to cook better?", options: ["By watching videos online", "By taking a cooking class", "By reading a cookbook", "By eating at restaurants"], answer: "By watching videos online" },
      { type: "choice", q: "What does Yuki do every Friday now?", options: ["She cooks dinner for her friends", "She eats instant noodles", "She calls her mother", "She goes to a restaurant"], answer: "She cooks dinner for her friends" }
    ]
  },

  {
    id: "read-a2-006",
    level: "A2",
    title: "The Lost Phone",
    text: [
      "Jack left his phone on a bus on his way to work. He didn't notice until lunchtime, when he wanted to call his wife. He felt terrible — all his photos, messages, and contacts were on that phone, and he hadn't made a backup.",
      "Jack called the bus company, but nobody had found the phone. He was sure he would never see it again. Three days later, however, a woman phoned his office. She had found the phone under a seat and had looked through the contacts to find someone to call. Jack was so happy that he bought her a big bunch of flowers to say thank you."
    ],
    questions: [
      { type: "choice", q: "Where did Jack lose his phone?", options: ["On a bus", "In a taxi", "At work", "In a shop"], answer: "On a bus" },
      { type: "choice", q: "When did Jack notice his phone was missing?", options: ["At lunchtime", "As soon as he got off the bus", "The next morning", "Three days later"], answer: "At lunchtime" },
      { type: "choice", q: "What worried Jack most about losing his phone?", options: ["He hadn't backed up his photos and contacts", "He couldn't call the bus company", "He had to buy a new phone", "He was late for work"], answer: "He hadn't backed up his photos and contacts" },
      { type: "choice", q: "How did Jack thank the woman?", options: ["He bought her flowers", "He gave her money", "He wrote her a letter", "He gave her his old phone"], answer: "He bought her flowers" }
    ]
  },

  {
    id: "read-b1-001",
    level: "B1",
    title: "Learning with Games",
    text: [
      "Many people think that video games are a waste of time, but for Alex they were the start of a new career. As a teenager, he spent hours playing online games with people from all over the world. Because the players communicated in English, he slowly picked up words and phrases that he had never learned at school.",
      "\"At school I was bored in English lessons,\" he says. \"In the games I had a real reason to speak.\" By the time he finished school, Alex could understand most films without subtitles. Today he works as a translator for a company that makes games, and he translates game texts from English into Russian.",
      "He admits, however, that games alone were not enough. \"My grammar was terrible. I had to take a course to fix the mistakes I had been making for years.\""
    ],
    questions: [
      { type: "choice", q: "How did Alex learn English as a teenager?", options: ["By talking to other players in online games", "In English lessons at school", "By watching films with subtitles", "By living abroad"], answer: "By talking to other players in online games" },
      { type: "choice", q: "What does Alex do now?", options: ["He translates games into Russian", "He teaches English", "He tests video games", "He writes subtitles for films"], answer: "He translates games into Russian" },
      { type: "choice", q: "What problem did Alex have?", options: ["His grammar had a lot of mistakes", "He couldn't understand films", "He got bored with games", "He didn't know enough words"], answer: "His grammar had a lot of mistakes" },
      { type: "choice", q: "What is the main idea of the text?", options: ["Games helped Alex, but he also needed to study grammar", "Video games are a waste of time", "School lessons are the best way to learn English", "All translators must play games"], answer: "Games helped Alex, but he also needed to study grammar" }
    ]
  },

  {
    id: "read-b1-002",
    level: "B1",
    title: "Digital Nomads",
    text: [
      "A \"digital nomad\" is someone who works online and travels at the same time. All they need is a laptop and a good internet connection. In recent years the number of digital nomads has grown quickly, and some countries now offer special visas for them.",
      "The lifestyle sounds perfect, but it has disadvantages too. Time differences can make meetings difficult: a call at 10 am in London can be at 5 pm in Bali. Many nomads also say that they feel lonely, because they are always saying goodbye to new friends. Moreover, it can be hard to separate work from holiday when your office is a beach.",
      "Most experts agree that the lifestyle suits people who are organised and independent. For others, a job in one place with a few long holidays may be a better choice."
    ],
    questions: [
      { type: "choice", q: "What does a digital nomad need to work?", options: ["A laptop and the internet", "A special office", "A visa for every country", "A lot of money"], answer: "A laptop and the internet" },
      { type: "choice", q: "Why can meetings be difficult for digital nomads?", options: ["Because of time differences", "Because the internet is slow", "Because they don't speak English", "Because they are on holiday"], answer: "Because of time differences" },
      { type: "choice", q: "Who is this lifestyle good for, according to experts?", options: ["Organised and independent people", "People who like long holidays", "People who often feel lonely", "Everyone who has a laptop"], answer: "Organised and independent people" },
      { type: "choice", q: "The word «Moreover» in paragraph 2 means...", options: ["Also, in addition", "However", "So, as a result", "For example"], answer: "Also, in addition" }
    ]
  },

  {
    id: "read-b1-003",
    level: "B1",
    title: "The Four-Day Week",
    text: [
      "For over a century, the five-day working week has been the standard in most countries. But in recent years, a growing number of companies have started experimenting with a four-day week instead, giving employees an extra day off without cutting their pay.",
      "Supporters argue that the change makes workers happier and, surprisingly, just as productive. When a UK company tried the idea with over 60 businesses, most reported that productivity stayed the same or even improved, while staff reported less stress and better sleep. Employees simply learned to focus more during the four days they worked, cutting out time spent on unnecessary meetings.",
      "Critics, however, point out that the model doesn't suit every industry. Hospitals, shops and factories, for example, often need someone available every day of the week, which makes a shorter week harder to organise. Even so, many experts believe that as technology continues to change how we work, the traditional five-day week may eventually become less common."
    ],
    questions: [
      { type: "choice", q: "What is a four-day week?", options: ["Working four days instead of five, with the same pay", "Working five days but four hours a day", "Working four hours a day", "Working every day but fewer hours"], answer: "Working four days instead of five, with the same pay" },
      { type: "choice", q: "What did the UK trial find?", options: ["Productivity stayed the same or improved", "Productivity fell sharply", "Employees wanted to work more days", "Companies lost a lot of money"], answer: "Productivity stayed the same or improved" },
      { type: "choice", q: "How did employees manage to stay productive in four days?", options: ["By focusing more and cutting unnecessary meetings", "By working longer hours each day", "By hiring more staff", "By working from home"], answer: "By focusing more and cutting unnecessary meetings" },
      { type: "choice", q: "Which industries does the text say find the four-day week difficult?", options: ["Hospitals, shops and factories", "Banks and offices", "Schools and universities", "IT companies"], answer: "Hospitals, shops and factories" }
    ]
  },

  {
    id: "read-b1-004",
    level: "B1",
    title: "Growing Vegetables in the City",
    text: [
      "Fifteen years ago, Elena lived in a small flat in the centre of Madrid with no outside space at all. Today, she grows tomatoes, peppers and herbs on her balcony, and she is far from alone: urban gardening has become one of the fastest-growing hobbies in European cities.",
      "There are several reasons for this trend. Many people want to know exactly where their food comes from, especially after seeing how far some vegetables travel before reaching the supermarket shelf. Others simply enjoy having a green space to relax in after a stressful day at work. For Elena, gardening has also become a way to meet her neighbours — she often shares tips, and tomatoes, with the family next door.",
      "Of course, growing food in a city isn't always easy. Balconies don't get as much sunlight as a garden, and space is extremely limited. Even so, city councils in several countries have started offering small plots of land for residents who want to grow more than their balcony allows, and waiting lists for these plots are often surprisingly long."
    ],
    questions: [
      { type: "choice", q: "Where does Elena grow vegetables?", options: ["On her balcony", "In a large garden", "On a farm outside the city", "In a community greenhouse"], answer: "On her balcony" },
      { type: "choice", q: "Why do some people want to grow their own food, according to the text?", options: ["They want to know where their food comes from", "It is cheaper than buying vegetables", "They don't trust supermarkets", "It is required by the city council"], answer: "They want to know where their food comes from" },
      { type: "choice", q: "How has gardening affected Elena's relationship with her neighbours?", options: ["It has helped her get to know them", "It has caused arguments about space", "She doesn't have any neighbours", "It hasn't changed anything"], answer: "It has helped her get to know them" },
      { type: "choice", q: "What is one challenge of growing food in a city, according to the text?", options: ["Balconies don't get much sunlight", "It is illegal in most cities", "Vegetables don't grow well in Spain", "City councils don't allow it"], answer: "Balconies don't get much sunlight" }
    ]
  },

  {
    id: "read-b1-005",
    level: "B1",
    title: "Learning a Language as an Adult",
    text: [
      "It's a common belief that children learn languages far more easily than adults, and that starting to learn a new language after the age of thirty is almost pointless. Recent research, however, suggests the situation is more complicated — and more encouraging — than that.",
      "While it's true that young children often develop a more native-like accent, adults have several advantages of their own. They already understand how grammar works in their first language, which helps them recognise patterns faster. Adults can also choose to study topics that genuinely interest them, which makes it easier to stay motivated over months or years. Perhaps most importantly, adults are usually better at organising their own learning, setting realistic goals, and practising consistently.",
      "Experts now agree that the biggest difference between children and adults isn't ability — it's time. Children are typically surrounded by a language for many hours every day, while adults often have to fit study into a busy schedule. This suggests that the real key to success isn't age at all, but simply how much time a learner is able to spend using the language."
    ],
    questions: [
      { type: "choice", q: "What does recent research suggest about adults learning languages?", options: ["The situation is more encouraging than people think", "Adults cannot learn languages well", "Only children can learn languages successfully", "Adults learn faster than children in every way"], answer: "The situation is more encouraging than people think" },
      { type: "choice", q: "What advantage do adults have, according to the text?", options: ["They already understand how grammar works", "They have more free time than children", "They always have better pronunciation", "They don't need to practise as much"], answer: "They already understand how grammar works" },
      { type: "choice", q: "According to the text, what is the real key to successful language learning?", options: ["How much time you spend using the language", "Your age when you start", "Having a native-like accent", "Studying grammar rules"], answer: "How much time you spend using the language" },
      { type: "choice", q: "Why do children often learn languages faster in practice?", options: ["They are surrounded by the language many hours a day", "They study grammar more carefully", "They have better memories", "They use apps to learn"], answer: "They are surrounded by the language many hours a day" }
    ]
  },

  {
    id: "read-b1-006",
    level: "B1",
    title: "The Rise of Podcasts",
    text: [
      "Twenty years ago, almost nobody had heard of a podcast. Today, millions of people around the world listen to them every single day, whether they're commuting to work, cooking dinner, or going for a run. So what explains this sudden rise in popularity?",
      "One reason is simply convenience: unlike a television programme, a podcast can be enjoyed while doing something else, which fits perfectly into busy modern lives. Another reason is variety — there is a podcast about almost any topic imaginable, from true crime to ancient history to learning a new language, so listeners can always find something that matches their interests exactly.",
      "Podcasts have also created new opportunities for people who would never have had access to traditional radio or television. Anyone with a microphone and an internet connection can start a podcast, and a surprising number of amateur podcasters have gone on to build large, loyal audiences. This has made the podcast world feel more personal and less polished than traditional media, which many listeners say is exactly what they enjoy about it."
    ],
    questions: [
      { type: "choice", q: "According to the text, why are podcasts convenient?", options: ["They can be enjoyed while doing other things", "They are shorter than TV programmes", "They don't need the internet", "They are free"], answer: "They can be enjoyed while doing other things" },
      { type: "choice", q: "What does the text say about the variety of podcasts?", options: ["There is a podcast about almost any topic", "Most podcasts are about the same few topics", "Podcasts are only about true crime", "There aren't many podcast topics yet"], answer: "There is a podcast about almost any topic" },
      { type: "choice", q: "Who can start a podcast, according to the text?", options: ["Anyone with a microphone and internet connection", "Only professional broadcasters", "Only people who work in radio", "Only large companies"], answer: "Anyone with a microphone and internet connection" },
      { type: "choice", q: "Why do many listeners like podcasts, according to the last paragraph?", options: ["They feel more personal and less polished", "They are always very professional", "They are shorter than radio shows", "They don't have adverts"], answer: "They feel more personal and less polished" }
    ]
  },

  // ---------- B2 ----------

  {
    id: "read-b2-001",
    level: "B2",
    title: "The Four-Day Working Week",
    text: [
      "For more than a century, the five-day working week has been treated as a fact of life. Yet a growing number of companies are now questioning whether it makes sense. In several large trials held in Europe and North America, employees were asked to work four days a week for the same pay, and the results surprised even the sceptics.",
      "Most firms reported that productivity had stayed the same or even risen. Workers described feeling less stressed and more focused, and many said they were far less likely to look for another job. Managers noted that meetings became shorter and that unnecessary tasks were quietly dropped, since nobody wanted to waste time they could no longer afford.",
      "Not everyone is convinced, though. Critics point out that the experiments mostly involved office-based companies, and that a shorter week would be much harder to organise in hospitals, shops or factories, where someone has to be present at all times. Supporters reply that the idea is not to copy one model everywhere but to rethink how working time is used."
    ],
    questions: [
      { type: "choice", q: "What is the main purpose of the text?", options: ["To describe trials of a shorter working week and the arguments around them", "To prove that all companies should switch to four days", "To explain why people dislike their jobs", "To compare working hours in different countries"], answer: "To describe trials of a shorter working week and the arguments around them" },
      { type: "choice", q: "According to the second paragraph, what happened in most of the companies?", options: ["Productivity stayed the same or went up", "Productivity fell slightly", "Workers asked for higher pay", "Managers held more meetings"], answer: "Productivity stayed the same or went up", explain: "В тексте: productivity had stayed the same or even risen." },
      { type: "choice", q: "Why were unnecessary tasks dropped?", options: ["Nobody wanted to waste the limited time they had", "Managers ordered it", "The tasks became illegal", "Employees were paid less"], answer: "Nobody wanted to waste the limited time they had" },
      { type: "choice", q: "What is the critics' main objection?", options: ["The trials mostly involved office jobs, so the idea may not work everywhere", "Workers would earn less", "Companies would lose money in every case", "Employees don't want free time"], answer: "The trials mostly involved office jobs, so the idea may not work everywhere" },
      { type: "choice", q: "The word 'sceptics' in the first paragraph means people who ...", options: ["doubted the idea would work", "organised the trials", "worked four days a week", "paid for the research"], answer: "doubted the idea would work", explain: "sceptics — скептики, те, кто сомневается." }
    ]
  },

  {
    id: "read-b2-002",
    level: "B2",
    title: "Why We Procrastinate",
    text: [
      "Almost everyone has put off an important task at some point, only to feel guilty afterwards. For a long time, procrastination was blamed on laziness or poor time management. Psychologists now suggest that the real cause lies elsewhere: we delay things not because we are idle, but because we want to avoid the unpleasant feelings that the task brings.",
      "A report we find boring, an email we dread answering, or an exam we fear failing can all trigger anxiety or self-doubt. Putting the task off gives us immediate relief, so the brain treats delay as a reward. The problem is that the relief is short-lived, and the stress usually returns, often stronger than before.",
      "Researchers recommend several strategies. Breaking a large task into very small steps makes it feel less threatening, and deciding exactly when and where you will start removes the need to rely on motivation. Perhaps most importantly, being kind to yourself after a delay seems to work better than self-criticism, which only adds to the stress that caused the problem."
    ],
    questions: [
      { type: "choice", q: "What do psychologists now believe about procrastination?", options: ["It is mainly a way of avoiding unpleasant feelings", "It is caused by laziness", "It is the result of bad time management only", "It is a sign of high intelligence"], answer: "It is mainly a way of avoiding unpleasant feelings" },
      { type: "choice", q: "Why does the brain treat delay as a reward?", options: ["It brings immediate relief from anxiety", "It leads to better results", "It saves energy for later", "It makes the task easier"], answer: "It brings immediate relief from anxiety" },
      { type: "choice", q: "What is true about the relief gained by delaying a task?", options: ["It doesn't last, and the stress usually comes back", "It lasts until the task is finished", "It makes the stress disappear for good", "It only works for boring tasks"], answer: "It doesn't last, and the stress usually comes back", explain: "В тексте: the relief is short-lived, and the stress usually returns." },
      { type: "choice", q: "What does the writer suggest about self-criticism?", options: ["It makes the problem worse", "It is the best way to change", "It helps people start earlier", "It is more effective than kindness"], answer: "It makes the problem worse" },
      { type: "choice", q: "In the second paragraph, 'dread' (an email we dread answering) means ...", options: ["feel afraid or worried about", "look forward to", "forget about", "refuse to read"], answer: "feel afraid or worried about", explain: "dread — бояться, испытывать тревогу перед чем-то." }
    ]
  },

  {
    id: "read-b2-003",
    level: "B2",
    title: "Cities Without Cars",
    text: [
      "In recent years, a number of European cities have begun to restrict car traffic in their centres. Some have closed entire streets to vehicles, while others charge drivers a fee to enter the busiest districts. The aim is to cut pollution and noise, but there is another goal too: to make cities more pleasant places to live.",
      "Early reactions were often hostile. Shopkeepers feared that customers would stay away, and many residents saw the changes as an attack on their freedom. However, studies carried out after the new rules came into force suggest that these fears were largely unfounded. In several cases, the number of people visiting the streets rose, and shops reported steady or even higher sales, as pedestrians tend to stop and look at windows far more often than drivers do.",
      "Of course, such policies work best where public transport is reliable and affordable. Where it is not, banning cars can simply make life harder for people who have no alternative. As one urban planner put it, 'You cannot take something away without offering something better in its place.'"
    ],
    questions: [
      { type: "choice", q: "Why are some cities restricting car traffic?", options: ["To reduce pollution and noise and make the city more pleasant", "To raise money for new roads", "To encourage people to buy more cars", "To protect shops from competition"], answer: "To reduce pollution and noise and make the city more pleasant" },
      { type: "choice", q: "How did shopkeepers react at first?", options: ["They worried that customers would stay away", "They welcomed the changes", "They moved to other cities", "They asked for more parking"], answer: "They worried that customers would stay away" },
      { type: "choice", q: "What did later studies find?", options: ["The shopkeepers' fears were mostly unfounded", "Sales dropped sharply in all cases", "Fewer people visited the streets", "Pollution increased"], answer: "The shopkeepers' fears were mostly unfounded", explain: "unfounded — необоснованные: опасения не подтвердились." },
      { type: "choice", q: "What condition does the writer give for the policy to work well?", options: ["Public transport must be reliable and affordable", "All shops must close", "Cars must be banned everywhere", "Fees must be very high"], answer: "Public transport must be reliable and affordable" },
      { type: "choice", q: "What does the urban planner's quotation mean?", options: ["People need a good alternative when something is taken away", "Cities should never change", "Planners should ignore residents", "Cars are better than buses"], answer: "People need a good alternative when something is taken away" }
    ]
  },

  {
    id: "read-b2-004",
    level: "B2",
    title: "Why Sleep Matters",
    text: [
      "For years, sleep was seen as wasted time, a pause in life that ambitious people should keep as short as possible. Research over the past two decades has shown how mistaken that view is. During sleep, the brain does not simply switch off; it sorts the day's experiences, stores important memories and clears away waste products that build up while we are awake.",
      "The consequences of missing sleep are more serious than most people realise. After a single night of poor sleep, concentration and mood suffer, and reaction times can become as slow as those of someone who has been drinking alcohol. Over the long term, a lack of sleep has been linked to heart disease, weight gain and weaker immunity.",
      "Experts therefore advise going to bed at roughly the same time every night and avoiding screens for an hour beforehand, since the light they give off can delay the body's natural signal that it is time to rest. Few of us, however, find it easy to follow such advice, and it is perhaps for this reason that sleep problems continue to grow."
    ],
    questions: [
      { type: "choice", q: "What is the writer's main point in the first paragraph?", options: ["Sleep is an active and necessary process for the brain", "Ambitious people need less sleep", "The brain stops working during sleep", "Sleep has little effect on memory"], answer: "Sleep is an active and necessary process for the brain" },
      { type: "choice", q: "What effect can one night of poor sleep have?", options: ["Slower reactions, similar to those of someone who has been drinking", "Permanent heart problems", "Better concentration", "Faster weight loss"], answer: "Slower reactions, similar to those of someone who has been drinking" },
      { type: "choice", q: "Why should we avoid screens before bed?", options: ["Their light can delay the body's signal to rest", "They make the room too warm", "They cause heart disease", "They shorten our sleep by an hour"], answer: "Their light can delay the body's signal to rest" },
      { type: "choice", q: "What does the writer suggest in the last sentence?", options: ["Many people find the advice hard to follow, so sleep problems keep growing", "Sleep problems are decreasing", "Everyone follows the advice", "Experts disagree about sleep"], answer: "Many people find the advice hard to follow, so sleep problems keep growing" },
      { type: "choice", q: "In the second paragraph, 'has been linked to' means ...", options: ["has been connected with", "has been protected from", "has been cured by", "has been unrelated to"], answer: "has been connected with", explain: "linked to — связано с (научная связь, не обязательно причина)." }
    ]
  },

  // ---------- ещё B2 и A1 ----------

  {
    id: "read-b2-005",
    level: "B2",
    title: "Learning from Failure",
    text: [
      "Schools and workplaces often treat mistakes as something to be ashamed of. Students who get a poor grade tend to hide it, and employees are reluctant to admit that a project did not go as planned. Yet many researchers argue that this attitude is exactly what prevents people from improving.",
      "In one well-known study, pupils who were praised for effort rather than talent were more willing to try difficult problems and recovered more quickly after a setback. The researchers concluded that the way we explain failure matters: seeing it as a sign of limited ability discourages us, whereas seeing it as information about what to try next keeps us moving forward.",
      "Some companies have taken this idea seriously. They hold regular meetings in which teams discuss what went wrong without blaming anyone, and a few even celebrate the most useful failure of the year. Critics warn that this can go too far if people start to take risks carelessly, but supporters insist that a safe place to fail is the only way to find new solutions."
    ],
    questions: [
      { type: "choice", q: "What is the main idea of the text?", options: ["Mistakes can be useful if people see them as a chance to learn", "Students should never receive poor grades", "Companies should punish careless employees", "Talent is more important than effort"], answer: "Mistakes can be useful if people see them as a chance to learn" },
      { type: "choice", q: "What did the study find about pupils who were praised for effort?", options: ["They were more willing to try hard problems and recovered faster", "They achieved perfect grades", "They stopped caring about mistakes", "They were less motivated"], answer: "They were more willing to try hard problems and recovered faster" },
      { type: "choice", q: "According to the researchers, how should failure be seen?", options: ["As information about what to try next", "As proof of limited ability", "As something to hide", "As bad luck"], answer: "As information about what to try next" },
      { type: "choice", q: "What do critics warn about?", options: ["People might start taking risks carelessly", "Meetings take too long", "Failures are always expensive", "Employees will refuse to work in teams"], answer: "People might start taking risks carelessly" },
      { type: "choice", q: "In the second paragraph, 'setback' means ...", options: ["a problem that delays progress", "a prize", "a long holiday", "a final exam"], answer: "a problem that delays progress", explain: "setback — неудача, препятствие, которое замедляет движение вперёд." }
    ]
  },

  {
    id: "read-b2-006",
    level: "B2",
    title: "The Trouble with Fast Fashion",
    text: [
      "Fashion used to follow the seasons: shops introduced new collections in spring and autumn, and people kept their clothes for years. Today, some retailers add hundreds of new designs every week, and prices are so low that many shoppers treat clothes as almost disposable. This model, known as fast fashion, has been growing rapidly since the early 2000s.",
      "The environmental cost is considerable. Producing a single cotton shirt can require thousands of litres of water, and synthetic fabrics release tiny plastic fibres into the oceans every time they are washed. Meanwhile, a large proportion of the clothing that is thrown away ends up in landfill, where it may take decades to break down.",
      "Consumers are not powerless, however. Buying fewer items of better quality, repairing what we already own and choosing second-hand clothes can all reduce waste. Some brands now offer to take back old garments for recycling, although critics argue that such schemes are used mainly to encourage customers to buy even more."
    ],
    questions: [
      { type: "choice", q: "What is fast fashion?", options: ["A model in which cheap clothes are produced and replaced very quickly", "A style of clothing for sports", "A seasonal sale in shops", "A method of washing clothes quickly"], answer: "A model in which cheap clothes are produced and replaced very quickly" },
      { type: "choice", q: "What problem with synthetic fabrics does the text mention?", options: ["They release plastic fibres into the oceans when washed", "They use more water than cotton", "They cannot be recycled at all", "They are made only from waste"], answer: "They release plastic fibres into the oceans when washed" },
      { type: "choice", q: "What happens to much of the clothing that is thrown away?", options: ["It ends up in landfill", "It is recycled into new clothes", "It is given to charities", "It is burned for energy"], answer: "It ends up in landfill" },
      { type: "choice", q: "What is the critics' view of take-back schemes?", options: ["They are used mainly to make customers buy more", "They solve the whole problem", "They are too expensive for brands", "They are illegal"], answer: "They are used mainly to make customers buy more" },
      { type: "choice", q: "In the first paragraph, 'disposable' means ...", options: ["made to be thrown away after use", "very expensive", "easy to repair", "hard to find"], answer: "made to be thrown away after use", explain: "disposable — одноразовый, рассчитанный на то, чтобы его выбросили." }
    ]
  },

  {
    id: "read-b2-007",
    level: "B2",
    title: "Do We Still Need Cash?",
    text: [
      "In some countries, paying with banknotes and coins has become rare. Shops put up signs saying 'card only', and a growing number of young people have never carried a wallet. Supporters of a cashless society argue that digital payments are faster, safer to carry and easier to track, which makes tax evasion and theft more difficult.",
      "Yet the change is not welcomed by everyone. Elderly people and those without bank accounts can find themselves excluded from ordinary shops and services. There are also concerns about privacy, since every digital payment leaves a record, and about what would happen during a power cut or a technical failure, when electronic systems stop working.",
      "For this reason, some governments have started to protect cash by law, requiring larger shops to accept it. Economists generally agree that cash is unlikely to disappear completely in the near future, but they expect its role to keep shrinking as digital habits spread."
    ],
    questions: [
      { type: "choice", q: "What is the writer's main purpose?", options: ["To present the advantages and disadvantages of a cashless society", "To persuade readers to stop using cards", "To explain how banknotes are made", "To describe a new payment app"], answer: "To present the advantages and disadvantages of a cashless society" },
      { type: "choice", q: "Which advantage of digital payments is mentioned?", options: ["They are easier to track", "They are always free", "They never fail", "They protect privacy"], answer: "They are easier to track" },
      { type: "choice", q: "Who may be excluded in a cashless society?", options: ["Elderly people and people without bank accounts", "Tourists only", "Young people", "Shop owners"], answer: "Elderly people and people without bank accounts" },
      { type: "choice", q: "Why have some governments protected cash by law?", options: ["To make sure people can still pay if they need to", "To make digital payments illegal", "To raise taxes", "To stop shops from using cards"], answer: "To make sure people can still pay if they need to" },
      { type: "choice", q: "What do economists expect?", options: ["Cash will remain but play a smaller role", "Cash will vanish next year", "Cash will become more popular", "Cards will be banned"], answer: "Cash will remain but play a smaller role" }
    ]
  },

  {
    id: "read-b2-008",
    level: "B2",
    title: "The Rise of Urban Gardening",
    text: [
      "On rooftops, balconies and in unused corners of city streets, growing numbers of people are planting vegetables. Urban gardening, once seen as a hobby for retired people, has attracted a younger and more varied crowd, from students sharing a courtyard plot to restaurants growing their own herbs.",
      "The benefits go beyond fresh food. Plants help cool the air in hot summers, absorb some of the dust produced by traffic and provide a habitat for insects such as bees. Community gardens also bring neighbours together, which can reduce loneliness and strengthen local ties.",
      "There are limits, though. City soil is often contaminated, so many gardeners use raised beds filled with clean earth, and space is always short. As a result, urban gardens will probably never feed a whole city, but, as one organiser remarked, 'they feed something just as important: the sense that people can change their surroundings.'"
    ],
    questions: [
      { type: "choice", q: "How has the image of urban gardening changed?", options: ["It now attracts a younger and more varied group of people", "It has become a hobby only for retired people", "It is now banned in many cities", "It is mainly done by restaurants"], answer: "It now attracts a younger and more varied group of people" },
      { type: "choice", q: "What benefit of plants in cities is mentioned?", options: ["They help cool the air", "They make traffic faster", "They produce electricity", "They remove all dust"], answer: "They help cool the air" },
      { type: "choice", q: "How do community gardens help neighbours?", options: ["They bring them together and can reduce loneliness", "They give them free tools", "They raise their taxes", "They make them move"], answer: "They bring them together and can reduce loneliness" },
      { type: "choice", q: "Why do many gardeners use raised beds?", options: ["City soil is often contaminated", "Raised beds are cheaper", "They need less water", "Local law requires it"], answer: "City soil is often contaminated", explain: "contaminated — загрязнённый." },
      { type: "choice", q: "What does the organiser's remark suggest?", options: ["Gardens give people a feeling that they can improve their surroundings", "Gardens will feed the whole city", "Gardening is a waste of time", "Only experts should garden"], answer: "Gardens give people a feeling that they can improve their surroundings" }
    ]
  },

  {
    id: "read-a1-003",
    level: "A1",
    title: "My Family",
    text: [
      "I have a big family. My mother's name is Anna and my father's name is Peter. I have one brother and one sister. My brother is ten years old and my sister is fifteen.",
      "We live in a house with a small garden. We have a dog. His name is Max. Every evening we have dinner together."
    ],
    questions: [
      { type: "choice", q: "How many brothers and sisters does the writer have?", options: ["Two", "One", "Three", "None"], answer: "Two", explain: "В тексте: one brother and one sister — всего двое." },
      { type: "choice", q: "How old is the writer's brother?", options: ["Ten", "Fifteen", "Five", "Twenty"], answer: "Ten" },
      { type: "choice", q: "What is the dog's name?", options: ["Max", "Leo", "Peter", "Tom"], answer: "Max" },
      { type: "choice", q: "When does the family have dinner together?", options: ["Every evening", "Every morning", "On Sundays", "Never"], answer: "Every evening" }
    ]
  },

  {
    id: "read-a1-004",
    level: "A1",
    title: "At the Supermarket",
    text: [
      "Today is Saturday. Maria goes to the supermarket. She needs milk, bread and apples. She also wants a cake for her friend's birthday.",
      "The supermarket is very busy. Maria waits in a long line. The milk is two euros and the bread is one euro. The apples cost three euros. She pays with her card and goes home."
    ],
    questions: [
      { type: "choice", q: "Where does Maria go on Saturday?", options: ["To the supermarket", "To a café", "To school", "To a park"], answer: "To the supermarket" },
      { type: "choice", q: "What does Maria NOT need?", options: ["Eggs", "Milk", "Bread", "Apples"], answer: "Eggs", explain: "Maria needs milk, bread and apples. Про яйца (eggs) в тексте ничего нет." },
      { type: "choice", q: "How much is the milk?", options: ["Two euros", "One euro", "Three euros", "Five euros"], answer: "Two euros" },
      { type: "choice", q: "How does Maria pay?", options: ["With her card", "With cash", "She doesn't pay", "With her phone"], answer: "With her card" }
    ]
  },

  {
    id: "read-a1-005",
    level: "A1",
    title: "The Weather in My City",
    text: [
      "I live in London. In summer, the weather is warm, but it is often rainy. In winter, it is cold and it sometimes snows.",
      "My favourite season is spring. The flowers are beautiful and the days are longer. Today it is sunny, so I want to go to the park with my friends."
    ],
    questions: [
      { type: "choice", q: "What is the weather like in London in summer?", options: ["Warm and often rainy", "Hot and dry", "Very cold", "Snowy"], answer: "Warm and often rainy" },
      { type: "choice", q: "What is the writer's favourite season?", options: ["Spring", "Summer", "Winter", "Autumn"], answer: "Spring" },
      { type: "choice", q: "Why does the writer want to go to the park today?", options: ["It is sunny", "It is rainy", "It is cold", "It is snowing"], answer: "It is sunny" },
      { type: "choice", q: "What happens in London in winter?", options: ["It is cold and sometimes snows", "It is hot", "It never rains", "It is always sunny"], answer: "It is cold and sometimes snows" }
    ]
  },

  // ---------- C1 ----------

  {
    id: "read-c1-001",
    level: "C1",
    title: "The Paradox of Choice",
    text: [
      "It is widely assumed that more choice leads to greater happiness. Supermarkets stock dozens of varieties of the same product, streaming platforms offer thousands of films, and online shops allow us to compare endless alternatives. Yet research suggests that an abundance of options can leave us feeling anxious and dissatisfied rather than free.",
      "The explanation seems to lie in the effort and regret that choosing involves. When faced with too many possibilities, people spend longer deliberating, are more likely to postpone the decision altogether, and, once they have chosen, tend to wonder whether a better option was available. The more alternatives there are, the easier it is to imagine that one of them would have been superior.",
      "None of this means that choice is harmful in itself. Rather, it implies that limits can be liberating. Those who set clear criteria in advance, or who are content with a result that is merely good enough, generally report greater satisfaction than those who insist on finding the perfect option."
    ],
    questions: [
      { type: "choice", q: "What is the main argument of the text?", options: ["Having too many options can reduce satisfaction", "People should have fewer rights", "Shops should sell fewer products", "Choice always increases happiness"], answer: "Having too many options can reduce satisfaction" },
      { type: "choice", q: "According to the second paragraph, why do people often feel regret after choosing?", options: ["They can easily imagine that another option would have been better", "They have chosen too quickly", "They had no information", "The options were too similar"], answer: "They can easily imagine that another option would have been better" },
      { type: "choice", q: "In the third paragraph, 'liberating' means ...", options: ["giving a sense of freedom", "making life harder", "causing disagreement", "forcing a decision"], answer: "giving a sense of freedom", explain: "liberating — освобождающий, дающий ощущение свободы." },
      { type: "choice", q: "Which people tend to be more satisfied, according to the text?", options: ["Those who accept a result that is good enough", "Those who always seek the perfect option", "Those who delay decisions", "Those who compare every alternative"], answer: "Those who accept a result that is good enough" }
    ]
  },

  {
    id: "read-c1-002",
    level: "C1",
    title: "How Memory Is Rebuilt",
    text: [
      "Most people picture memory as a kind of archive in which experiences are stored intact and retrieved unchanged. Neuroscientists, however, have long argued that this picture is misleading. Each time we recall an event, the brain does not play back a recording; it reconstructs the memory from fragments, and in doing so it may alter it slightly.",
      "This helps explain why eyewitnesses, who are often entirely sincere, can give accounts that differ markedly from what actually happened. Details are filled in by expectation, later conversations can be absorbed into the original memory, and confidence in a recollection turns out to be a poor guide to its accuracy. Courts are gradually beginning to take this into account.",
      "There is, nevertheless, a more encouraging side to the story. Because memories are rebuilt rather than simply retrieved, they can be updated and strengthened by repeated recall, which is precisely why testing yourself is a more effective way to learn than rereading your notes."
    ],
    questions: [
      { type: "choice", q: "What does the writer say about the traditional view of memory?", options: ["It is misleading", "It is confirmed by recent research", "It explains eyewitness errors", "It has been abandoned by courts"], answer: "It is misleading" },
      { type: "choice", q: "Why can sincere eyewitnesses be mistaken?", options: ["Expectations and later conversations can alter the memory", "They always lie", "They never see the event", "They have forgotten everything"], answer: "Expectations and later conversations can alter the memory" },
      { type: "choice", q: "What is said about confidence in a memory?", options: ["It is not a reliable indicator of accuracy", "It guarantees accuracy", "It is a good guide for courts", "It decreases with each recall"], answer: "It is not a reliable indicator of accuracy" },
      { type: "choice", q: "Why is self-testing effective, according to the text?", options: ["Recall strengthens and updates memories", "It is quicker than reading", "It replaces notes", "It changes the event itself"], answer: "Recall strengthens and updates memories", explain: "Память перестраивается при каждом воспоминании, поэтому повторное вспоминание её укрепляет." }
    ]
  },

  // ---------- Диалоги на слух (listen: true) ----------

  {
    id: "dlg-a1-001",
    level: "A1",
    title: "At the Café",
    listen: true,
    text: [
      "Waiter: Good morning! What would you like?",
      "Tom: A coffee with milk, please.",
      "Waiter: Anything to eat?",
      "Tom: Yes, a cheese sandwich.",
      "Waiter: That is five euros.",
      "Tom: Here you are. Thank you."
    ],
    questions: [
      { type: "choice", q: "What does Tom drink?", options: ["Coffee with milk", "Tea with lemon", "Orange juice", "Water"], answer: "Coffee with milk" },
      { type: "choice", q: "What does Tom eat?", options: ["A cheese sandwich", "A salad", "A cake", "Nothing"], answer: "A cheese sandwich" },
      { type: "choice", q: "How much does Tom pay?", options: ["Five euros", "Four euros", "Six euros", "Ten euros"], answer: "Five euros" }
    ]
  },

  {
    id: "dlg-a1-002",
    level: "A1",
    title: "Asking the Way",
    listen: true,
    text: [
      "Anna: Excuse me, where is the station?",
      "Man: Go straight and turn left at the bank.",
      "Anna: Is it far?",
      "Man: No, it is five minutes on foot.",
      "Anna: Thank you very much.",
      "Man: You are welcome."
    ],
    questions: [
      { type: "choice", q: "What is Anna looking for?", options: ["The station", "The bank", "A hotel", "A shop"], answer: "The station" },
      { type: "choice", q: "Where must she turn left?", options: ["At the bank", "At the school", "At the park", "At the cinema"], answer: "At the bank" },
      { type: "choice", q: "How long does it take on foot?", options: ["Five minutes", "Fifteen minutes", "One hour", "Two minutes"], answer: "Five minutes" }
    ]
  },

  {
    id: "dlg-a2-001",
    level: "A2",
    title: "Booking a Hotel Room",
    listen: true,
    text: [
      "Receptionist: Good afternoon, Grand Hotel. How can I help you?",
      "Mark: Hello. I would like to book a double room for three nights, from Friday.",
      "Receptionist: Let me check. Yes, we have a room with a sea view.",
      "Mark: How much is it per night?",
      "Receptionist: It is eighty euros, and breakfast is included.",
      "Mark: That sounds good. I will take it.",
      "Receptionist: Could I have your name and phone number, please?"
    ],
    questions: [
      { type: "choice", q: "How long does Mark want to stay?", options: ["Three nights", "Two nights", "A week", "One night"], answer: "Three nights" },
      { type: "choice", q: "What is special about the room?", options: ["It has a sea view", "It has a balcony", "It is on the top floor", "It is very quiet"], answer: "It has a sea view" },
      { type: "choice", q: "What is included in the price?", options: ["Breakfast", "Dinner", "Parking", "A taxi"], answer: "Breakfast" }
    ]
  },

  {
    id: "dlg-a2-002",
    level: "A2",
    title: "At the Doctor's",
    listen: true,
    text: [
      "Doctor: Good morning, Mrs Brown. What seems to be the problem?",
      "Mrs Brown: I have had a bad cough and a sore throat since Monday.",
      "Doctor: Do you have a temperature?",
      "Mrs Brown: Yes, a little. It was thirty-eight yesterday.",
      "Doctor: I will give you some medicine. Take it twice a day after meals.",
      "Mrs Brown: Should I stay at home?",
      "Doctor: Yes, rest for three days and drink plenty of water."
    ],
    questions: [
      { type: "choice", q: "How long has Mrs Brown been ill?", options: ["Since Monday", "For a month", "Since yesterday", "Since last week"], answer: "Since Monday" },
      { type: "choice", q: "How often should she take the medicine?", options: ["Twice a day", "Once a day", "Three times a day", "Only at night"], answer: "Twice a day" },
      { type: "choice", q: "What does the doctor advise?", options: ["To rest at home and drink water", "To go to work", "To do sport", "To visit a hospital"], answer: "To rest at home and drink water" }
    ]
  },

  {
    id: "dlg-a2-003",
    level: "A2",
    title: "Planning the Weekend",
    listen: true,
    text: [
      "Lisa: What are you doing on Saturday?",
      "Ben: Nothing special. Why?",
      "Lisa: There is a new exhibition at the art museum. Do you want to go?",
      "Ben: Sure, but I have football in the morning. I am free after two o'clock.",
      "Lisa: Perfect. Let's meet at the museum at three.",
      "Ben: Great. Shall we have dinner afterwards?",
      "Lisa: Good idea. I know a nice Italian restaurant nearby."
    ],
    questions: [
      { type: "choice", q: "What do they want to see?", options: ["An art exhibition", "A football match", "A film", "A concert"], answer: "An art exhibition" },
      { type: "choice", q: "Why can't Ben go in the morning?", options: ["He plays football", "He works", "He is ill", "He is travelling"], answer: "He plays football" },
      { type: "choice", q: "What will they do after the museum?", options: ["Have dinner", "Go shopping", "Go home", "Watch a film"], answer: "Have dinner" }
    ]
  },

  {
    id: "dlg-b1-001",
    level: "B1",
    title: "A Job Interview",
    listen: true,
    text: [
      "Interviewer: Thank you for coming in, Ms Clark. Tell me about your last job.",
      "Ms Clark: I worked as a marketing assistant for two years. I managed social media and organised events.",
      "Interviewer: Why did you decide to leave?",
      "Ms Clark: I wanted more responsibility, and there was no chance of promotion.",
      "Interviewer: What would you say is your biggest strength?",
      "Ms Clark: I am good at working in a team, and I stay calm under pressure.",
      "Interviewer: Excellent. When could you start if we offered you the job?",
      "Ms Clark: I would need to give a month's notice, so at the beginning of next month."
    ],
    questions: [
      { type: "choice", q: "Why did Ms Clark leave her last job?", options: ["She wanted more responsibility and had no chance of promotion", "She was unhappy with her salary", "The company closed", "She moved to another city"], answer: "She wanted more responsibility and had no chance of promotion" },
      { type: "choice", q: "What is her biggest strength?", options: ["Teamwork and staying calm under pressure", "Speaking foreign languages", "Computer skills", "Selling products"], answer: "Teamwork and staying calm under pressure" },
      { type: "choice", q: "When could she start?", options: ["At the beginning of next month", "Immediately", "In a week", "In three months"], answer: "At the beginning of next month" }
    ]
  },

  {
    id: "dlg-b1-002",
    level: "B1",
    title: "Returning a Faulty Phone",
    listen: true,
    text: [
      "Customer: Hello, I bought this phone here two weeks ago, but the battery dies after a few hours.",
      "Assistant: I am sorry to hear that. Do you have the receipt?",
      "Customer: Yes, here it is.",
      "Assistant: Thank you. Our policy is that we can either repair the phone or give you a replacement.",
      "Customer: I would prefer a replacement, if possible. I need it for work.",
      "Assistant: Of course. Unfortunately, we do not have this model in stock, but it will arrive on Thursday.",
      "Customer: That is fine. Could you call me when it comes in?"
    ],
    questions: [
      { type: "choice", q: "What is wrong with the phone?", options: ["The battery dies quickly", "The screen is broken", "It will not turn on", "The camera does not work"], answer: "The battery dies quickly" },
      { type: "choice", q: "What does the customer prefer?", options: ["A replacement", "A repair", "A refund", "A discount"], answer: "A replacement" },
      { type: "choice", q: "Why can't the assistant replace it today?", options: ["The model is out of stock until Thursday", "The shop is closing", "There is no receipt", "The manager is away"], answer: "The model is out of stock until Thursday" }
    ]
  },

  {
    id: "dlg-b1-003",
    level: "B1",
    title: "Changing Plans",
    listen: true,
    text: [
      "Emma: Hi Jack, I am afraid I cannot make it to dinner tonight. Something has come up at work.",
      "Jack: Oh, that's a pity. I booked a table for eight.",
      "Emma: I am really sorry. My boss wants the report finished by tomorrow morning.",
      "Jack: Don't worry. Could we do it on Friday instead?",
      "Emma: Friday is difficult because I am going to my sister's. How about Sunday?",
      "Jack: Sunday works for me. I will change the booking and send you a message.",
      "Emma: Thanks for being so understanding."
    ],
    questions: [
      { type: "choice", q: "Why does Emma cancel dinner?", options: ["She has to finish a report for work", "She is ill", "She forgot", "She has other plans with friends"], answer: "She has to finish a report for work" },
      { type: "choice", q: "Why is Friday difficult?", options: ["Emma is visiting her sister", "Jack is busy", "The restaurant is closed", "Emma is working late"], answer: "Emma is visiting her sister" },
      { type: "choice", q: "What do they decide?", options: ["To meet on Sunday", "To meet on Friday", "To cancel completely", "To eat at home"], answer: "To meet on Sunday" }
    ]
  },

  {
    id: "dlg-b2-001",
    level: "B2",
    title: "A Disagreement at Work",
    listen: true,
    text: [
      "Laura: I wanted to talk about the deadline. Honestly, I think two weeks is unrealistic.",
      "Manager: I understand your concern, but the client has been very clear about the date.",
      "Laura: The problem is that we are short-staffed. Half the team is on holiday next week.",
      "Manager: Could you work with the people who are here and bring in a freelancer?",
      "Laura: That would help, although it would push us over budget.",
      "Manager: I'll speak to finance. In the meantime, can you draw up a list of tasks that could be postponed?",
      "Laura: Fine, I'll have it ready by tomorrow afternoon."
    ],
    questions: [
      { type: "choice", q: "What is Laura's main concern?", options: ["The deadline is unrealistic with so few staff", "The salary is too low", "She dislikes the client", "She wants a holiday"], answer: "The deadline is unrealistic with so few staff" },
      { type: "choice", q: "What does the manager suggest?", options: ["Hiring a freelancer", "Cancelling the project", "Working at weekends", "Moving the deadline"], answer: "Hiring a freelancer" },
      { type: "choice", q: "What is the drawback of this solution?", options: ["It would exceed the budget", "It would take too long", "The client would refuse", "Nobody is available"], answer: "It would exceed the budget" },
      { type: "choice", q: "What will Laura do by tomorrow afternoon?", options: ["Prepare a list of tasks that can be postponed", "Hire the freelancer", "Talk to the client", "Call finance"], answer: "Prepare a list of tasks that can be postponed" }
    ]
  },

  {
    id: "dlg-b2-002",
    level: "B2",
    title: "Renting a Flat",
    listen: true,
    text: [
      "Agent: The flat is on the third floor, and as you can see, it gets plenty of natural light.",
      "Client: It's lovely. Is the rent inclusive of bills?",
      "Agent: Water and heating are included, but you would pay for electricity and internet separately.",
      "Client: And what about the deposit?",
      "Agent: It's the equivalent of one month's rent, which is returned at the end of the tenancy, provided there is no damage.",
      "Client: The only thing that bothers me is the noise from the main road.",
      "Agent: The windows are double-glazed, so most people find it perfectly quiet. Would you like to see the bedroom?"
    ],
    questions: [
      { type: "choice", q: "Which bills are included in the rent?", options: ["Water and heating", "Electricity and internet", "All of them", "None of them"], answer: "Water and heating" },
      { type: "choice", q: "What happens to the deposit?", options: ["It is returned if nothing is damaged", "It is kept by the agent", "It is used for the last month", "It is doubled"], answer: "It is returned if nothing is damaged" },
      { type: "choice", q: "What worries the client?", options: ["Noise from the road", "The price", "The size", "The distance to work"], answer: "Noise from the road" },
      { type: "choice", q: "Why does the agent say the flat is quiet?", options: ["The windows are double-glazed", "It is on a side street", "The walls are thick", "There are no neighbours"], answer: "The windows are double-glazed" }
    ]
  }
);

// =====================================================================
// ДОПОЛНЕНИЕ: диалоги на слух по целям ученика — работа, поездки,
// фильмы и игры (по 4 диалога на каждую цель: 2 на A2 и 2 на B1).
// Формат тот же, что выше (listen: true, реплики «Speaker: текст»).
// =====================================================================
DATA.texts.push(

  // ---------- Работа ----------
  {
    id: "dlg-a2-004",
    level: "A2",
    title: "A Job Interview",
    listen: true,
    text: [
      "Interviewer: Good morning, Mr Smith. Please sit down. Why do you want this job?",
      "Mr Smith: I like working with people, and I speak three languages.",
      "Interviewer: What experience do you have?",
      "Mr Smith: I worked in a hotel for two years. I was a receptionist.",
      "Interviewer: Can you start next month?",
      "Mr Smith: Yes, I can start on the first of June.",
      "Interviewer: Good. We will call you on Friday."
    ],
    questions: [
      { type: "choice", q: "What was Mr Smith's job in the hotel?", options: ["Receptionist", "Cook", "Driver", "Manager"], answer: "Receptionist" },
      { type: "choice", q: "How many languages does he speak?", options: ["Three", "Two", "Four", "One"], answer: "Three" },
      { type: "choice", q: "When can he start?", options: ["On the first of June", "Next week", "Tomorrow", "In September"], answer: "On the first of June" },
      { type: "choice", q: "When will they call him?", options: ["On Friday", "On Monday", "Tomorrow", "Next month"], answer: "On Friday" }
    ]
  },

  {
    id: "dlg-a2-005",
    level: "A2",
    title: "Moving a Meeting",
    listen: true,
    text: [
      "Anna: Hi Paul, can we move our meeting? I have a problem on Tuesday.",
      "Paul: What is the problem?",
      "Anna: I have to go to the dentist at three o'clock.",
      "Paul: OK. How about Wednesday morning at ten?",
      "Anna: Wednesday is good, but I can't come before eleven.",
      "Paul: No problem. Let's meet at eleven in room four.",
      "Anna: Great, thanks!"
    ],
    questions: [
      { type: "choice", q: "Why can't Anna meet on Tuesday?", options: ["She has to go to the dentist", "She is on holiday", "She is ill", "She has another meeting"], answer: "She has to go to the dentist" },
      { type: "choice", q: "Which day do they choose?", options: ["Wednesday", "Tuesday", "Thursday", "Monday"], answer: "Wednesday" },
      { type: "choice", q: "What time will they meet?", options: ["At eleven", "At ten", "At three", "At four"], answer: "At eleven" },
      { type: "choice", q: "Where will they meet?", options: ["In room four", "In room three", "In a café", "Online"], answer: "In room four" }
    ]
  },

  {
    id: "dlg-b1-004",
    level: "B1",
    title: "Asking for a Day Off",
    listen: true,
    text: [
      "Employee: Do you have a minute? I'd like to ask for a day off next Friday.",
      "Manager: Of course. Is it for something special?",
      "Employee: My sister is getting married, and the wedding is two hours' drive away.",
      "Manager: Congratulations! The problem is that we have a client presentation that morning.",
      "Employee: I've already prepared the slides. Maria could present them instead of me.",
      "Manager: That sounds reasonable. Just send me an email so I can approve it officially.",
      "Employee: I'll do it right away. Thank you for being so flexible."
    ],
    questions: [
      { type: "choice", q: "Why does the employee want a day off?", options: ["There is a family wedding", "There is a medical appointment", "There is a holiday abroad", "There is a moving day"], answer: "There is a family wedding" },
      { type: "choice", q: "What is the problem for the manager?", options: ["A client presentation that morning", "A lack of staff", "A budget meeting", "A training day"], answer: "A client presentation that morning" },
      { type: "choice", q: "Who could present the slides?", options: ["Maria", "The manager", "The employee's sister", "A client"], answer: "Maria" },
      { type: "choice", q: "What must the employee do to get official approval?", options: ["Send an email", "Fill in a form", "Call the HR department", "Talk to Maria"], answer: "Send an email" }
    ]
  },

  {
    id: "dlg-b1-005",
    level: "B1",
    title: "A Phone Call to a Client",
    listen: true,
    text: [
      "Sara: Good morning, this is Sara from Bright Print. May I speak to Mr Lewis?",
      "Assistant: I'm afraid he's in a meeting right now. Can I take a message?",
      "Sara: Yes, please. I'm calling about the order he placed last week. It will be ready on Thursday instead of Tuesday.",
      "Assistant: May I ask why there is a delay?",
      "Sara: One of our machines broke down, but it has been repaired now.",
      "Assistant: I see. I'll tell him as soon as he's free.",
      "Sara: Thank you. He can reach me on extension forty-two if he has any questions."
    ],
    questions: [
      { type: "choice", q: "Why can't Sara speak to Mr Lewis?", options: ["He is in a meeting", "He is on holiday", "He is abroad", "He is ill"], answer: "He is in a meeting" },
      { type: "choice", q: "What is the message about?", options: ["A delay with his order", "A new price", "A meeting date", "A complaint"], answer: "A delay with his order" },
      { type: "choice", q: "When will the order be ready?", options: ["On Thursday", "On Tuesday", "On Friday", "Next week"], answer: "On Thursday" },
      { type: "choice", q: "Why is the order late?", options: ["A machine broke down", "Some staff were ill", "The paper ran out", "The delivery was lost"], answer: "A machine broke down" }
    ]
  },

  // ---------- Поездки ----------
  {
    id: "dlg-a2-006",
    level: "A2",
    title: "Airport Check-in",
    listen: true,
    text: [
      "Agent: Good morning. Can I see your passport and ticket, please?",
      "Passenger: Here you are.",
      "Agent: Do you have any luggage to check in?",
      "Passenger: Yes, one suitcase.",
      "Agent: Please put it on the scale. It's twenty-two kilos, that's fine. Do you prefer a window or an aisle seat?",
      "Passenger: A window seat, please.",
      "Agent: Here is your boarding pass. Your flight leaves from gate twelve at half past nine."
    ],
    questions: [
      { type: "choice", q: "How many suitcases does the passenger check in?", options: ["One", "Two", "Three", "None"], answer: "One" },
      { type: "choice", q: "What kind of seat does the passenger want?", options: ["A window seat", "An aisle seat", "A seat at the front", "Any seat"], answer: "A window seat" },
      { type: "choice", q: "Which gate does the flight leave from?", options: ["Gate twelve", "Gate two", "Gate twenty", "Gate nine"], answer: "Gate twelve" },
      { type: "choice", q: "What time does the flight leave?", options: ["Half past nine", "Nine o'clock", "Quarter past nine", "Half past ten"], answer: "Half past nine" }
    ]
  },

  {
    id: "dlg-a2-007",
    level: "A2",
    title: "Buying a Train Ticket",
    listen: true,
    text: [
      "Customer: Hello. I'd like two tickets to Manchester, please.",
      "Clerk: Single or return?",
      "Customer: Return, please. We want to come back on Sunday.",
      "Clerk: That's forty-six pounds. The next train leaves at a quarter past two from platform three.",
      "Customer: Is it direct?",
      "Clerk: No, you change at Birmingham, but the second train is waiting for you there.",
      "Customer: OK, thank you."
    ],
    questions: [
      { type: "choice", q: "How many tickets does the customer buy?", options: ["Two", "One", "Three", "Four"], answer: "Two" },
      { type: "choice", q: "What kind of ticket do they want?", options: ["Return", "Single", "First class", "A season ticket"], answer: "Return" },
      { type: "choice", q: "Which platform does the train leave from?", options: ["Platform three", "Platform two", "Platform thirteen", "Platform four"], answer: "Platform three" },
      { type: "choice", q: "Is the journey direct?", options: ["No, they change at Birmingham", "Yes, it is direct", "No, they change at London", "No, they take a bus"], answer: "No, they change at Birmingham" }
    ]
  },

  {
    id: "dlg-b1-006",
    level: "B1",
    title: "A Lost Suitcase",
    listen: true,
    text: [
      "Passenger: Excuse me, my suitcase didn't arrive on the baggage belt.",
      "Staff: I'm sorry about that. Could you describe it?",
      "Passenger: It's a large blue suitcase with a red ribbon on the handle.",
      "Staff: Let me check the system. It seems it was left in Frankfurt and will arrive on the evening flight.",
      "Passenger: That's annoying. I'm staying in the city centre, so how will I get it?",
      "Staff: We'll deliver it to your hotel free of charge. Please fill in this form with the hotel's address.",
      "Passenger: And if it doesn't arrive tonight?",
      "Staff: Then you can buy the things you need and keep the receipts. The airline will refund you."
    ],
    questions: [
      { type: "choice", q: "What does the suitcase look like?", options: ["Large and blue, with a red ribbon", "Small and black", "Large and red, with a blue ribbon", "Brown, with a label"], answer: "Large and blue, with a red ribbon" },
      { type: "choice", q: "Where was the suitcase left?", options: ["In Frankfurt", "In London", "At home", "In Paris"], answer: "In Frankfurt" },
      { type: "choice", q: "How will the passenger get the suitcase?", options: ["It will be delivered to the hotel", "A friend will bring it", "The passenger will collect it tomorrow", "It will be sent by post"], answer: "It will be delivered to the hotel" },
      { type: "choice", q: "What can the passenger do if it doesn't arrive tonight?", options: ["Buy what is needed and get a refund", "Get a free flight", "Wait at the airport", "Get a new suitcase"], answer: "Buy what is needed and get a refund" }
    ]
  },

  {
    id: "dlg-b1-007",
    level: "B1",
    title: "A Flight Delay",
    listen: true,
    text: [
      "Ben: Have you seen the board? Our flight to Rome is delayed.",
      "Lily: Again? How long this time?",
      "Ben: Two hours, because of bad weather in the north.",
      "Lily: Then we'll miss the last bus to the hotel.",
      "Ben: I've just called the hotel. They said they'd send a taxi, and the reception is open all night.",
      "Lily: That's a relief. Shall we get something to eat while we wait?",
      "Ben: Good idea. The airline gave everyone a voucher for the café."
    ],
    questions: [
      { type: "choice", q: "Where are Ben and Lily flying to?", options: ["Rome", "Paris", "Berlin", "Madrid"], answer: "Rome" },
      { type: "choice", q: "How long is the delay?", options: ["Two hours", "Twenty minutes", "Four hours", "One day"], answer: "Two hours" },
      { type: "choice", q: "What is the reason for the delay?", options: ["Bad weather", "A technical problem", "A strike", "Too many passengers"], answer: "Bad weather" },
      { type: "choice", q: "What did the airline give the passengers?", options: ["A voucher for the café", "A free hotel", "A taxi", "Another ticket"], answer: "A voucher for the café" }
    ]
  },

  // ---------- Фильмы и игры ----------
  {
    id: "dlg-a2-008",
    level: "A2",
    title: "Choosing a Film",
    listen: true,
    text: [
      "Mia: What shall we watch tonight?",
      "Ben: I'd like to see the new space film. It has great reviews.",
      "Mia: I don't like science fiction. How about a comedy?",
      "Ben: OK, but not the one with the long title. My brother said it was boring.",
      "Mia: Then let's watch the detective film. It starts at eight.",
      "Ben: Perfect. I'll buy the popcorn."
    ],
    questions: [
      { type: "choice", q: "Which film does Ben want to see first?", options: ["A space film", "A comedy", "A detective film", "A cartoon"], answer: "A space film" },
      { type: "choice", q: "Why does Mia say no to the space film?", options: ["She doesn't like science fiction", "It is too long", "It is too expensive", "She has seen it"], answer: "She doesn't like science fiction" },
      { type: "choice", q: "Why doesn't Ben want the comedy with the long title?", options: ["His brother said it was boring", "It starts too late", "It is too expensive", "Mia has seen it"], answer: "His brother said it was boring" },
      { type: "choice", q: "What will Ben buy?", options: ["Popcorn", "Tickets", "Drinks", "Sweets"], answer: "Popcorn" }
    ]
  },

  {
    id: "dlg-a2-009",
    level: "A2",
    title: "Playing Online",
    listen: true,
    text: [
      "Dan: Are you online tonight? We need one more player for the team.",
      "Kate: I can play after dinner, around eight. Which game is it?",
      "Dan: The new racing game. You can choose any car you like.",
      "Kate: Great! Is it free?",
      "Dan: The game is free, but the best cars cost money.",
      "Kate: I'll use a free one first. See you at eight!"
    ],
    questions: [
      { type: "choice", q: "What does Dan need?", options: ["One more player", "A new game", "A car", "A new computer"], answer: "One more player" },
      { type: "choice", q: "What time can Kate play?", options: ["Around eight", "Around seven", "Around nine", "In the morning"], answer: "Around eight" },
      { type: "choice", q: "What kind of game is it?", options: ["A racing game", "A football game", "A puzzle game", "A shooting game"], answer: "A racing game" },
      { type: "choice", q: "What costs money?", options: ["The best cars", "The whole game", "Nothing", "Joining the team"], answer: "The best cars" }
    ]
  },

  {
    id: "dlg-b1-008",
    level: "B1",
    title: "Talking About a Game",
    listen: true,
    text: [
      "Alex: Have you finished the new adventure game yet?",
      "Jo: Nearly. I've been playing for about thirty hours, and I'm on the last level.",
      "Alex: Is it worth buying? I've heard the story is quite long.",
      "Jo: The graphics are amazing, although the controls are a bit difficult at the beginning.",
      "Alex: What about the music? My brother says it's the best part.",
      "Jo: He's right. It's calm while you explore and exciting in the fights. I'd recommend it if you like stories.",
      "Alex: OK, I'll buy it during the summer sale."
    ],
    questions: [
      { type: "choice", q: "How long has Jo been playing?", options: ["About thirty hours", "About three hours", "About a week", "About ten hours"], answer: "About thirty hours" },
      { type: "choice", q: "What is difficult at the beginning?", options: ["The controls", "The story", "The graphics", "The music"], answer: "The controls" },
      { type: "choice", q: "What does Alex's brother like most?", options: ["The music", "The graphics", "The story", "The characters"], answer: "The music" },
      { type: "choice", q: "When will Alex buy the game?", options: ["During the summer sale", "Tomorrow", "For his birthday", "Never"], answer: "During the summer sale" }
    ]
  },

  {
    id: "dlg-b1-009",
    level: "B1",
    title: "After the Cinema",
    listen: true,
    text: [
      "Eva: So, what did you think of the film?",
      "Mark: The acting was brilliant, especially the main actor, but I found the ending disappointing.",
      "Eva: Really? I thought it was clever. You don't find out who the thief is until the last minute.",
      "Mark: That's true, but the story was too slow in the middle.",
      "Eva: Maybe. I'd still give it four stars out of five.",
      "Mark: I'd give it three. I'd rather watch the first part again than the sequel.",
      "Eva: Then let's do that on Saturday. I'll bring the snacks."
    ],
    questions: [
      { type: "choice", q: "What did Mark like about the film?", options: ["The acting", "The ending", "The music", "The speed"], answer: "The acting" },
      { type: "choice", q: "What did Mark find disappointing?", options: ["The ending", "The acting", "The main actor", "The music"], answer: "The ending" },
      { type: "choice", q: "How many stars would Eva give the film?", options: ["Four", "Three", "Five", "Two"], answer: "Four" },
      { type: "choice", q: "What will they do on Saturday?", options: ["Watch the first part again", "Go to the cinema again", "Watch the sequel", "Play a game"], answer: "Watch the first part again" }
    ]
  }
);

// =====================================================================
// ДОПОЛНЕНИЕ: диалоги на слух уровня B2 (работа, поездки, книги и фильмы,
// техника, проекты, игры). Вопросы на детали и на причины, как в других B2.
// =====================================================================
DATA.texts.push(

  {
    id: "dlg-b2-003",
    level: "B2",
    title: "Negotiating a Job Offer",
    listen: true,
    text: [
      "Recruiter: Thank you for coming back. We'd like to offer you the position of project coordinator, with a starting salary of forty-two thousand a year.",
      "Candidate: I'm delighted, thank you. To be honest, I was hoping for something closer to forty-six, given that I'd be managing a team of five.",
      "Recruiter: I understand. The budget is fixed for this year, but I could offer a salary review after six months.",
      "Candidate: That's a reasonable compromise. Would it be possible to work from home two days a week?",
      "Recruiter: Normally we ask new staff to be in the office full-time for three months, but I'll check with the director.",
      "Candidate: I'd appreciate that. As for the start date, I have to give a month's notice at my current job.",
      "Recruiter: That's fine. I'll send you the contract by Friday, and you can take the weekend to think it over."
    ],
    questions: [
      { type: "choice", q: "What salary was the candidate hoping for?", options: ["About forty-six thousand", "Forty-two thousand", "Fifty thousand", "Thirty-eight thousand"], answer: "About forty-six thousand" },
      { type: "choice", q: "What does the recruiter offer instead of a higher starting salary?", options: ["A salary review after six months", "A bonus at Christmas", "A company car", "Extra holiday"], answer: "A salary review after six months" },
      { type: "choice", q: "What will the recruiter do about working from home?", options: ["Ask the director", "Refuse at once", "Agree immediately", "Offer three days a week"], answer: "Ask the director" },
      { type: "choice", q: "Why can't the candidate start immediately?", options: ["A month's notice at the current job", "A holiday abroad", "A university course", "A medical operation"], answer: "A month's notice at the current job" }
    ]
  },

  {
    id: "dlg-b2-004",
    level: "B2",
    title: "A Complaint at the Hotel",
    listen: true,
    text: [
      "Guest: Good morning. I'd like to speak to you about our room. We were promised a quiet room facing the garden, but it overlooks the car park.",
      "Manager: I'm very sorry to hear that. Let me check the booking. Ah, I see. There was a mistake, and our system didn't record your request.",
      "Guest: That wouldn't matter so much if the noise hadn't kept us awake until two in the morning. Some people were loading a van beneath our window.",
      "Manager: That must have been very frustrating. I can move you to a garden-view room this afternoon, and of course we'll refund last night's charge.",
      "Guest: A refund is fair, but I'd also like breakfast included for the rest of our stay, since we lost a night's sleep.",
      "Manager: I can't promise that, but I can offer you a free breakfast tomorrow and a voucher for the hotel restaurant.",
      "Guest: All right. I think that's a fair solution, provided the new room is really quiet."
    ],
    questions: [
      { type: "choice", q: "What was wrong with the room?", options: ["It overlooked the car park", "It was too small", "It was dirty", "It had no bathroom"], answer: "It overlooked the car park" },
      { type: "choice", q: "Why did the hotel not know about the guest's request?", options: ["The system didn't record it", "The guest forgot to ask", "The manager ignored it", "The booking was cancelled"], answer: "The system didn't record it" },
      { type: "choice", q: "What does the manager offer instead of breakfast for the whole stay?", options: ["A free breakfast tomorrow and a restaurant voucher", "Free parking", "A late checkout", "A free dinner every night"], answer: "A free breakfast tomorrow and a restaurant voucher" },
      { type: "choice", q: "On what condition does the guest accept the solution?", options: ["The new room is really quiet", "The refund is doubled", "They can stay longer", "The manager apologises again"], answer: "The new room is really quiet" }
    ]
  },

  {
    id: "dlg-b2-005",
    level: "B2",
    title: "The Book or the Film?",
    listen: true,
    text: [
      "Nina: I finally saw the adaptation of the novel you recommended. Honestly, I was a bit disappointed.",
      "Tom: Really? I thought the casting was spot on.",
      "Nina: The actors were great, but they cut the whole middle part of the book, which is exactly where the characters develop.",
      "Tom: Well, they had to. A faithful version would have been six hours long.",
      "Nina: I know, but that's no excuse for changing the ending. In the book she stays; in the film she leaves.",
      "Tom: Personally, I preferred the film's ending. It felt less predictable.",
      "Nina: Perhaps, but then it's a different story. I'd say the book is far superior, though I admit the soundtrack is stunning.",
      "Tom: We'll have to agree to disagree. Shall we watch it again and compare scenes?"
    ],
    questions: [
      { type: "choice", q: "What did Nina dislike about the film?", options: ["It cut the middle of the book", "The casting", "The soundtrack", "Its length"], answer: "It cut the middle of the book" },
      { type: "choice", q: "Why does Tom say the changes were necessary?", options: ["A faithful version would have been six hours long", "The budget was small", "The actors refused to learn the lines", "The director wanted a new story"], answer: "A faithful version would have been six hours long" },
      { type: "choice", q: "How does the ending differ?", options: ["In the book she stays, in the film she leaves", "In the book she leaves, in the film she stays", "She stays in both", "She leaves in both"], answer: "In the book she stays, in the film she leaves" },
      { type: "choice", q: "What do they decide to do at the end?", options: ["Watch the film again and compare scenes", "Read the book again", "See a different film", "Stop talking about it"], answer: "Watch the film again and compare scenes" }
    ]
  },

  {
    id: "dlg-b2-006",
    level: "B2",
    title: "A Call to Tech Support",
    listen: true,
    text: [
      "Agent: Technical support, Daniel speaking. How can I help?",
      "Customer: My laptop keeps freezing whenever I open more than three programs, and it started after yesterday's update.",
      "Agent: Have you tried restarting it in safe mode?",
      "Customer: Yes, and it works fine in safe mode, but as soon as I restart normally, the problem returns.",
      "Agent: In that case, the update itself is probably not the cause. It sounds more like a driver conflict. Could you check which graphics driver you're using?",
      "Customer: It says it was installed three weeks ago.",
      "Agent: Then I'd suggest updating it manually. If that doesn't work, we can send a technician, but you'd have to wait up to five working days.",
      "Customer: I'd rather avoid that, so I'll try the driver first and call back tomorrow if it's still freezing."
    ],
    questions: [
      { type: "choice", q: "When does the laptop freeze?", options: ["When more than three programs are open", "As soon as it is switched on", "Only when it is charging", "When it is connected to the internet"], answer: "When more than three programs are open" },
      { type: "choice", q: "What happens in safe mode?", options: ["It works fine", "It freezes immediately", "It won't start", "It restarts by itself"], answer: "It works fine" },
      { type: "choice", q: "What does the agent think is the cause?", options: ["A driver conflict", "The update itself", "A broken screen", "A virus"], answer: "A driver conflict" },
      { type: "choice", q: "What will the customer do?", options: ["Update the driver and call back tomorrow if necessary", "Wait for a technician", "Buy a new laptop", "Remove the update"], answer: "Update the driver and call back tomorrow if necessary" }
    ]
  },

  {
    id: "dlg-b2-007",
    level: "B2",
    title: "Planning a Team Project",
    listen: true,
    text: [
      "Lena: So, the client wants the website ready by the fifteenth of March, which gives us six weeks.",
      "Omar: That's tight, considering we haven't received the final logo yet.",
      "Lena: I know. I'll chase the client for it today. In the meantime, could you start on the layout, Omar?",
      "Omar: Sure, but if the logo arrives late, the colour scheme might have to change, which would mean redoing some pages.",
      "Lena: Then let's build in a margin. Aim to finish the layout by the end of week three, and we'll review it together.",
      "Omar: And who will write the text for the pages?",
      "Lena: Priya has offered to do it, provided someone proofreads it afterwards.",
      "Omar: I'll ask Jack. He's got a good eye for mistakes."
    ],
    questions: [
      { type: "choice", q: "How much time do they have to finish the website?", options: ["Six weeks", "Four weeks", "Two months", "Ten days"], answer: "Six weeks" },
      { type: "choice", q: "Why is Omar worried?", options: ["The final logo hasn't arrived yet", "The client is unreliable", "The budget is too small", "The layout is too complicated"], answer: "The final logo hasn't arrived yet" },
      { type: "choice", q: "What will Lena do today?", options: ["Contact the client about the logo", "Write the text", "Finish the layout", "Meet Priya"], answer: "Contact the client about the logo" },
      { type: "choice", q: "Who is Omar going to ask to proofread the text?", options: ["Jack", "Priya", "Lena", "The client"], answer: "Jack" }
    ]
  },

  {
    id: "dlg-b2-008",
    level: "B2",
    title: "Early Access or Not?",
    listen: true,
    text: [
      "Sam: Have you seen that the studio is releasing the sequel in early access? You can play it now, but it costs sixty euros.",
      "Kim: That's ridiculous. Paying full price for an unfinished game doesn't make sense to me.",
      "Sam: Well, the developers say the money goes straight into improving it, and players' feedback decides what gets added.",
      "Kim: In theory, yes. But the last game from this studio was abandoned after six months, and plenty of people felt cheated.",
      "Sam: Fair point. Still, the original was one of the best games I've ever played, so I'm willing to take the risk.",
      "Kim: I'd wait for the reviews and a sale. If it's as good as you say, it'll still be there in a year.",
      "Sam: Maybe you're right. I'll hold on until the first big update and then decide."
    ],
    questions: [
      { type: "choice", q: "What does Kim object to?", options: ["Paying full price for an unfinished game", "The game being too short", "The poor graphics", "It being a one-player game"], answer: "Paying full price for an unfinished game" },
      { type: "choice", q: "What happened to the studio's last game?", options: ["It was abandoned after six months", "It was sold to another studio", "It was a huge success", "It was banned"], answer: "It was abandoned after six months" },
      { type: "choice", q: "Why is Sam tempted to buy it now?", options: ["The original was one of the best games he has played", "His friends are already playing it", "It is on sale", "He likes the studio's owner"], answer: "The original was one of the best games he has played" },
      { type: "choice", q: "What does Sam decide in the end?", options: ["To wait until the first big update", "To buy it immediately", "To never buy it", "To ask Kim to buy it"], answer: "To wait until the first big update" }
    ]
  }
);
