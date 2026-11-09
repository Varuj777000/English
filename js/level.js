// =====================================================================
// level.js — подсчёт уровня CEFR и поиск сильных/слабых тем
// по результатам теста. Используется стартовым тестом и контрольными.
//
// Ответы теста хранятся так:
//   answers = {
//     "g-a1-1": { chosen: "are", correct: true },
//     "g-a1-2": { chosen: null,  correct: false },   // «Не знаю»
//     "g-c1-1": { skipped: true, correct: false }     // пропущен (слишком сложно)
//   }
// =====================================================================

// Описание уровней для людей
const LEVEL_INFO = {
  A1: { name: "Начальный", text: "Вы понимаете и используете простые фразы о себе и о повседневных вещах." },
  A2: { name: "Элементарный", text: "Вы справляетесь с простыми бытовыми ситуациями: можете рассказать о себе, работе, покупках, спросить дорогу." },
  B1: { name: "Средний", text: "Вы справляетесь с большинством ситуаций в поездках, понимаете основное в ясной речи на знакомые темы, можете рассказать об опыте и планах." },
  B2: { name: "Выше среднего", text: "Вы понимаете сложные тексты и свободно общаетесь с носителями языка без особого напряжения." },
  C1: { name: "Продвинутый", text: "Вы понимаете длинные сложные тексты, говорите бегло и гибко используете язык в работе и учёбе." }
};

// Подсчитать результат теста.
//   questions — список вопросов теста (DATA.placement или DATA.checkpoints)
//   answers   — объект ответов (см. выше)
function evaluateTest(questions, answers) {
  const R = RULES.placement;

  // 1) Сколько правильных на каждом уровне (пропущенные считаются неправильными).
  //    Заодно то же самое — отдельно по каждому разделу (byLevelBySection):
  //    это даёт «уровень лексики» отдельно от общего уровня — см. determineLevel
  //    ниже и progress.vocabLevel в applyPlacementResult/applyCheckpointResult.
  const byLevel = {};
  const byLevelBySection = {};
  LEVELS.forEach(function (lvl) { byLevel[lvl] = { correct: 0, total: 0, skipped: 0 }; });
  Object.keys(TEST_SECTIONS).forEach(function (s) {
    byLevelBySection[s] = {};
    LEVELS.forEach(function (lvl) { byLevelBySection[s][lvl] = { correct: 0, total: 0, skipped: 0 }; });
  });

  let correctTotal = 0;
  let answeredTotal = 0;
  questions.forEach(function (q) {
    const a = answers[q.id];
    if (!a) return; // вопрос не задавался
    byLevel[q.level].total += 1;
    byLevelBySection[q.section][q.level].total += 1;
    if (a.correct) { byLevel[q.level].correct += 1; byLevelBySection[q.section][q.level].correct += 1; }
    if (a.skipped) {
      byLevel[q.level].skipped += 1;
      byLevelBySection[q.section][q.level].skipped += 1;
    } else {
      answeredTotal += 1;
      if (a.correct) correctTotal += 1;
    }
  });

  // 2) Уровень (общий и отдельно по лексике — тем же способом, просто на
  //    другом наборе данных: determineLevel не знает и не спрашивает,
  //    из какого раздела эти цифры)
  const level = determineLevel(byLevel);
  const sectionHasAnswers = function (bucket) { return LEVELS.some(function (l) { return bucket[l].total > 0; }); };
  const vocabLevel = sectionHasAnswers(byLevelBySection.vocabulary) ? determineLevel(byLevelBySection.vocabulary) : null;

  // 3) «Близко к следующему уровню?»
  const next = LEVELS[levelIndex(level) + 1];
  let nearNext = null;
  if (next && byLevel[next].total > 0 && ratio(byLevel[next]) >= R.nearNextFrom) {
    nearNext = next;
  }

  // 4) Темы и разделы — только по вопросам не выше «уровень + topicLevelsAbove»
  //    и только по тем, на которые вы действительно отвечали.
  //    testedTopics — тот же набор ответов построчно (topic + correct), а не
  //    сложенный по темам: контрольная применяет их как обычные ответы в
  //    занятии (см. applyCheckpointResult), а не перезаписывает приоритет.
  const maxIndex = levelIndex(level) + R.topicLevelsAbove;
  const byTopic = {};
  const bySection = {};
  const testedTopics = [];
  questions.forEach(function (q) {
    const a = answers[q.id];
    if (!a || a.skipped) return;
    if (levelIndex(q.level) > maxIndex) return;

    if (!byTopic[q.topic]) byTopic[q.topic] = { correct: 0, total: 0 };
    byTopic[q.topic].total += 1;
    if (a.correct) byTopic[q.topic].correct += 1;

    if (!bySection[q.section]) bySection[q.section] = { correct: 0, total: 0 };
    bySection[q.section].total += 1;
    if (a.correct) bySection[q.section].correct += 1;

    testedTopics.push({ topic: q.topic, correct: a.correct });
  });

  const weakTopics = [];
  const strongTopics = [];
  Object.keys(byTopic).forEach(function (id) {
    const s = byTopic[id];
    if (s.correct < s.total) weakTopics.push(id);
    else strongTopics.push(id);
  });
  // Сначала более простые темы — их важнее закрыть в первую очередь
  weakTopics.sort(byTopicLevel);
  strongTopics.sort(byTopicLevel);

  // 5) Ошибки для разбора
  const mistakes = questions
    .filter(function (q) { const a = answers[q.id]; return a && !a.skipped && !a.correct; })
    .map(function (q) { return { id: q.id, chosen: answers[q.id].chosen }; });

  return {
    date: todayStr(),
    level: level,
    vocabLevel: vocabLevel,
    nearNext: nearNext,
    correct: correctTotal,
    answered: answeredTotal,
    byLevel: byLevel,
    bySection: bySection,
    byTopic: byTopic,
    weakTopics: weakTopics,
    strongTopics: strongTopics,
    mistakes: mistakes,
    testedTopics: testedTopics
  };
}

// Уровень = самый высокий, на котором ≥ levelPass правильных,
// при условии что на всех уровнях ниже ≥ lowerLevelsMin.
// Если не набран даже A1 — всё равно A1 (ниже шкала не опускается).
function determineLevel(byLevel) {
  const R = RULES.placement;
  let result = LEVELS[0];
  LEVELS.forEach(function (lvl, i) {
    const s = byLevel[lvl];
    if (!s || s.total === 0) return;
    let lowerOk = true;
    for (let j = 0; j < i; j++) {
      const lower = byLevel[LEVELS[j]];
      if (lower && lower.total > 0 && ratio(lower) < R.lowerLevelsMin) lowerOk = false;
    }
    if (ratio(s) >= R.levelPass && lowerOk) result = lvl;
  });
  return result;
}

// Записать результат стартового теста в прогресс и задать начальные приоритеты тем.
function applyPlacementResult(progress, result) {
  progress.level = result.level;
  if (result.vocabLevel) progress.vocabLevel = result.vocabLevel;
  progress.placement = result;
  applyTestedTopicPriorities(progress, result, true);
}

// Записать результат контрольной: обновить уровень, сохранить историю
// и МЯГКО скорректировать приоритет тем, которые встретились в контрольной.
//
// В отличие от стартового теста, здесь мы НЕ перезаписываем приоритет темы
// фиксированными числами — вместо этого каждый ответ контрольной применяется
// как обычный ответ в занятии (applyAnswerToTopic из rules.js, то же +15/−6,
// что и везде). Так короткая выборка из ~30 вопросов раз в две недели мягко
// подправляет статистику, а не затирает то, что накопилось за две недели
// обычных занятий. Темы, которых в контрольной не было, вообще не трогаем.
function applyCheckpointResult(progress, result) {
  const previousLevel = progress.level;
  progress.level = result.level;
  if (result.vocabLevel) progress.vocabLevel = result.vocabLevel;
  progress.checkpoints.push({
    date: result.date,
    level: result.level,
    correct: result.correct,
    answered: result.answered,
    weakTopics: result.weakTopics,
    strongTopics: result.strongTopics,
    askedIds: result.askedIds || []
  });

  result.testedTopics.forEach(function (t) {
    applyAnswerToTopic(getTopicStats(progress, t.topic), t.correct);
  });

  return previousLevel; // пригодится, чтобы показать «уровень вырос» / «понизился»
}

// Общая часть applyPlacementResult и applyCheckpointResult: пересчитать
// приоритет и статистику тем, которые встретились в тесте.
//   fillUntested — для тем, которых в тесте не было (только для стартового
//                  теста, когда по теме вообще ещё нет статистики — иначе
//                  на контрольной мы бы стирали накопленный прогресс).
function applyTestedTopicPriorities(progress, result, fillUntested) {
  const R = RULES.placement;
  const userIndex = levelIndex(result.level);

  DATA.topics.forEach(function (topic) {
    if (topic.category === "other") return;
    const tested = result.byTopic[topic.id];
    const stats = getTopicStats(progress, topic.id);

    if (tested) {
      // Тема была в тесте: приоритет по результату, ответы теста идут в статистику
      if (tested.correct === 0) stats.priority = R.priorityAllWrong;
      else if (tested.correct < tested.total) stats.priority = R.prioritySomeWrong;
      else stats.priority = R.priorityAllRight;

      stats.attempts += tested.total;
      stats.correct += tested.correct;
      stats.streak = tested.correct === tested.total ? stats.streak + tested.correct : 0;
      stats.lastSeen = result.date;
      if (tested.correct < tested.total) stats.lastWrong = result.date;
    } else if (fillUntested && stats.attempts === 0) {
      // Темы не было в тесте и вы её ещё не решали — приоритет по уровню темы
      const diff = levelIndex(topic.level) - userIndex;
      if (diff < 0) stats.priority = R.untestedBelowLevel;
      else if (diff === 0) stats.priority = R.untestedAtLevel;
      else stats.priority = R.untestedAbove;
    }
  });
}

// ---------- Когда пора проходить контрольную ----------

// Дата следующей контрольной (или null, если стартовый тест ещё не пройден —
// без него отсчитывать нечего).
function nextCheckpointDate(progress) {
  const last = progress.checkpoints.length
    ? progress.checkpoints[progress.checkpoints.length - 1].date
    : (progress.placement ? progress.placement.date : null);
  return last ? addDays(last, RULES.checkpoint.everyDays) : null;
}

// Пора ли проходить контрольную сегодня (или уже просрочена)?
function isCheckpointDue(progress) {
  const next = nextCheckpointDate(progress);
  return next !== null && todayStr() >= next;
}

// ---------- Уровень лексики ----------
//
// Грамматика и лексика часто «прокачаны» по-разному (например, слабая
// грамматика тянет общий уровень вниз, а слова вы знаете гораздо лучше).
// progress.vocabLevel считается отдельно по разделу «Лексика» в тестах
// и контрольных (см. evaluateTest выше) и используется при пополнении
// словаря (enrollNewWords в srs.js), а не общий progress.level.
//
// Уровень слов можно также выбрать вручную в настройках
// (progress.settings.vocabLevelManual) — тогда он в приоритете.
function effectiveVocabLevel(progress) {
  return progress.settings.vocabLevelManual || progress.vocabLevel || progress.level || LEVELS[0];
}

// ---------- Помощники ----------

// Доля правильных (0..1)
function ratio(s) {
  return s.total > 0 ? s.correct / s.total : 0;
}

// Процент для показа: 0.756 → 76
function percent(s) {
  return Math.round(ratio(s) * 100);
}

// Сортировка ID тем по уровню темы
function byTopicLevel(a, b) {
  const ta = findTopic(a);
  const tb = findTopic(b);
  return levelIndex(ta ? ta.level : "C1") - levelIndex(tb ? tb.level : "C1");
}
