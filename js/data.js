// =====================================================================
// data.js — общий «склад» учебных данных.
//
// Этот файл подключается САМЫМ ПЕРВЫМ на каждой странице.
// Он создаёт пустые списки, а файлы из папки data/ потом добавляют
// в них свои записи командой push, например:
//     DATA.exercises.push({ id: "...", ... });
//
// Почему .js, а не .json? Если открыть сайт с компьютера двойным кликом
// (адрес начинается с file://), браузер запрещает загружать .json-файлы,
// а обычные .js-файлы загружает всегда. Так сайт работает и локально,
// и на GitHub Pages.
// =====================================================================

window.DATA = {
  topics: [],       // темы (грамматика, лексика, чтение) — data/topics.js
  exercises: [],    // упражнения — data/exercises/*.js
  texts: [],        // тексты для чтения с вопросами — data/reading/*.js
  words: [],        // слова для повторения — data/words/*.js
  placement: [],    // вопросы стартового теста — data/placement-test.js
  checkpoints: [],  // вопросы контрольных — data/checkpoints.js
  testPassages: [], // короткие тексты для вопросов на чтение в тестах
  stories: [],      // мини-рассказы с рамкой глаголов — data/stories/*.js
  verbs: [],        // неправильные глаголы (раздел «Неправильные глаголы») — data/verbs.js
  writing: [],      // задания «Письмо по шаблону» (план, фразы, проверки) — data/writing.js
  writingPitfalls: [], // типичные ошибки, которые подсвечиваются в письме — data/writing.js
  verbExamples: {}  // предложения к ним для тренировки: inf → [предложение с V2, предложение с V3] — data/verb-examples.js
};

// Группы неправильных глаголов (поле group у записей data/verbs.js): код → название
window.VERB_GROUPS = {
  "AAA":       "AAA — три формы одинаковые (cut–cut–cut)",
  "AAB":       "AAB — V1 = V2 (beat–beat–beaten)",
  "ABA":       "ABA — V1 = V3 (come–came–come)",
  "ABB":       "ABB — V2 = V3 (make–made–made)",
  "ABB-ought": "ABB — на -ought / -aught (buy–bought–bought)",
  "ABB-t":     "ABB — на -t (send–sent–sent)",
  "ABC":       "ABC — особые (go–went–gone)",
  "ABC-ew":    "ABC — -ew / -own (know–knew–known)",
  "ABC-iau":   "ABC — i–a–u (sing–sang–sung)",
  "ABC-en":    "ABC — V3 на -en / -n (take–took–taken)"
};

// Разделы тестов (стартового и контрольных)
window.TEST_SECTIONS = {
  grammar: "Грамматика",
  vocabulary: "Лексика",
  reading: "Чтение"
};

// Уровни CEFR по порядку. Чтобы добавить B2/C1-контент, ничего менять
// здесь не нужно — уровни уже перечислены.
window.LEVELS = ["A1", "A2", "B1", "B2", "C1"];
