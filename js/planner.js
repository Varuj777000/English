// =====================================================================
// planner.js — составление ежедневного занятия.
//
// Как это работает (все числа — в RULES, файл rules.js):
//   1. Считаем, сколько упражнений помещается в выбранное время.
//   2. Берём темы вашего уровня и ниже. Если слабых тем на уровне почти
//      не осталось — добавляем темы следующего уровня.
//   3. Делим темы на слабые, обычные и освоенные.
//   4. Распределяем упражнения: 60% слабым, 25% обычным, 15% освоенным
//      (освоенные — только если их давно не было).
//   5. Внутри группы тема выбирается случайно, но чем выше приоритет,
//      тем больше шанс. Внутри темы — сначала новые упражнения,
//      потом те, где была ошибка, потом давно решённые.
//   6. Иногда добавляется текст для чтения.
// =====================================================================

// Сколько диктантов в занятии заданной длины: не меньше RULES.lesson.listenPerLesson,
// а в длинных занятиях растёт вместе со временем (RULES.lesson.listenPer10Minutes).
function listenCountForMinutes(minutes) {
  const L = RULES.lesson;
  return Math.max(L.listenPerLesson, Math.round(minutes / 10 * L.listenPer10Minutes));
}

// Сколько упражнений в занятии заданной длины
function lessonExerciseCount(minutes) {
  const L = RULES.lesson;
  const seconds = minutes * 60 * (1 - L.wordsShare);
  return Math.max(5, Math.round(seconds / L.secondsPerExercise));
}

// Уровень, по которому строятся занятия (до теста — A1)
function workingLevel(progress) {
  return progress.level || LEVELS[0];
}

// Темы, по которым есть упражнения (грамматика и лексика)
function practiceTopics() {
  return DATA.topics.filter(function (t) {
    return (t.category === "grammar" || t.category === "vocabulary") && exercisesOfTopic(t.id).length > 0;
  });
}

// Открыт ли следующий уровень? (слабых тем на текущем уровне почти не осталось)
function isNextLevelUnlocked(progress) {
  const N = RULES.nextLevel;
  const level = workingLevel(progress);
  if (levelIndex(level) >= LEVELS.length - 1) return false;

  const topics = practiceTopics().filter(function (t) { return t.level === level; });
  if (topics.length === 0) return true; // на этом уровне пока нечего решать

  let practiced = 0;
  let weak = 0;
  topics.forEach(function (t) {
    const stats = progress.topics[t.id];
    if (stats && stats.attempts > 0) practiced += 1;
    if (topicStatus(stats) === "weak") weak += 1;
  });
  return practiced / topics.length >= N.minPracticedShare && weak <= N.maxWeakTopics;
}

// Главная функция: составить занятие.
// Возвращает { items: [...], nextLevel: "B1" или null }
//   item = { kind: "word", ref: "reliable", direction: "en-ru" }        (карточка слова, см. srs.js)
//       или { kind: "other", ref: "om-..." }                           (карточка «Другое» из импорта чата)
//       или { kind: "exercise", id: "pres-s-001" }
//       или { kind: "reading", textId: "read-a1-001", qi: 0 }           (вопрос №qi к тексту)
//       или { kind: "story", storyId: "story-past-001" }               (мини-рассказ с рамкой глаголов, js/story.js)
// Слова идут первыми (самая быстрая часть занятия), затем упражнения по темам, затем чтение.
function buildLesson(progress, minutes) {
  const L = RULES.lesson;
  const total = lessonExerciseCount(minutes);
  const level = workingLevel(progress);
  const levelIdx = levelIndex(level);
  const nextUnlocked = isNextLevelUnlocked(progress);
  const today = todayStr();

  // ---------- 1. Пулы тем ----------
  const main = [];   // ваш уровень и ниже (+ слабые темы выше уровня, например из чата)
  const next = [];   // следующий уровень, если он открыт
  practiceTopics().forEach(function (t) {
    const idx = levelIndex(t.level);
    const stats = progress.topics[t.id];
    if (idx <= levelIdx) main.push(t.id);
    else if (idx === levelIdx + 1 && nextUnlocked) next.push(t.id);
    else if (topicStatus(stats) === "weak") main.push(t.id);
  });

  const weak = [];
  const normal = [];
  const review = [];
  main.forEach(function (id) {
    const stats = progress.topics[id];
    const status = topicStatus(stats);
    if (status === "weak") weak.push(id);
    else if (status === "mastered") {
      // Освоенная тема — только если её давно не было
      if (!stats.lastSeen || daysBetween(stats.lastSeen, today) >= L.masteredReviewAfterDays) review.push(id);
    } else normal.push(id); // "new" и "normal"
  });

  // Диктанты (тип "listen") отбираются отдельно от обычного пула тем — см. шаг 4.1 —
  // поэтому резервируем под них немного места заранее (даже если в итоге ни одного
  // не наберётся — если озвучки нет в браузере, например, — лишним это не станет).
  const listenBudget = listenCountForMinutes(minutes);

  // ---------- 2. Текст для чтения ----------
  let readingItems = [];
  const readingWeak = topicStatus(progress.topics["reading"]) === "weak";
  const readingTurn = fullLessons(progress).length % L.readingEvery === 0;
  if (total >= L.readingMinExercises && (readingTurn || readingWeak)) {
    const text = pickText(progress, nextUnlocked ? levelIdx + 1 : levelIdx);
    if (text) {
      readingItems = text.questions.map(function (q, qi) {
        return { kind: "reading", textId: text.id, qi: qi };
      });
    }
  }

  // ---------- 2.0. Диалог на слух ----------
  // Если в этом занятии нет текста для чтения, то раз в RULES.lesson.dialogueEvery
  // занятий вместо него идёт диалог на слух с вопросами (тексты с listen: true).
  // Нужна озвучка в браузере — без неё диалог не прочитать.
  if (readingItems.length === 0 && total >= L.dialogueMinExercises &&
      fullLessons(progress).length % L.dialogueEvery === 1 && ttsSupported() && hasEnglishVoice()) {
    const dlg = pickText(progress, nextUnlocked ? levelIdx + 1 : levelIdx, true);
    if (dlg) {
      readingItems = dlg.questions.map(function (q, qi) {
        return { kind: "reading", textId: dlg.id, qi: qi };
      });
    }
  }

  // ---------- 2.1. Мини-рассказ с рамкой глаголов ----------
  // Раз в RULES.lesson.storyEvery занятий (и не в одном занятии с текстом для
  // чтения — тогда он просто переносится на следующее). Рассказ занимает место
  // обычных упражнений: сколько в нём пропусков, столько упражнений убирается.
  let storyItem = null;
  if (total >= L.storyMinExercises && readingItems.length === 0 && isStoryDue(progress)) {
    const story = pickStory(progress, nextUnlocked ? levelIdx + 1 : levelIdx);
    if (story) storyItem = { kind: "story", storyId: story.id };
  }
  const storyBudget = storyItem ? findStory(storyItem.storyId).gaps.length : 0;

  // ---------- 3. Сколько упражнений на каждую группу ----------
  // Упражнения с ошибками, которым пришёл срок вернуться (см. RULES.lesson.mistakeIntervals)
  const mistakeItems = pickMistakeItems(
    progress,
    Math.round(Math.max(0, total - readingItems.length - listenBudget - storyBudget) * L.mistakeShare)
  );
  const exerciseTotal = Math.max(0, total - readingItems.length - listenBudget - storyBudget - mistakeItems.length);
  const nextCount = next.length ? Math.round(exerciseTotal * RULES.nextLevel.share) : 0;
  const rest = exerciseTotal - nextCount;
  let reviewCount = review.length ? Math.round(rest * L.mix.review) : 0;
  let weakCount = weak.length ? Math.round(rest * L.mix.weak) : 0;
  let normalCount = rest - reviewCount - weakCount;
  // Если обычных тем нет — их доля уходит слабым (и наоборот)
  if (normal.length === 0) { weakCount += normalCount; normalCount = 0; }
  if (weak.length === 0 && normal.length > 0) { normalCount += weakCount; weakCount = 0; }

  // ---------- 4. Выбор тем и упражнений ----------
  const used = {};         // уже выбранные упражнения (чтобы не повторялись)
  const perTopic = {};     // сколько упражнений каждой темы уже взято
  let items = [];
  mistakeItems.forEach(function (it) {
    used[it.id] = true;
    perTopic[it.topic] = (perTopic[it.topic] || 0) + 1;
    items.push(it);
  });

  function fill(pool, count) {
    let added = 0;
    let cap = L.maxPerTopic;
    let guard = 0;
    while (added < count && pool.length > 0 && guard++ < 500) {
      // Темы, у которых ещё не исчерпан лимит и есть свободные упражнения
      const open = pool.filter(function (id) {
        return (perTopic[id] || 0) < cap && freeExercises(id, used).length > 0;
      });
      if (open.length === 0) {
        // Все темы упёрлись в лимит — поднимаем лимит, если упражнения ещё есть
        const anyLeft = pool.some(function (id) { return freeExercises(id, used).length > 0; });
        if (!anyLeft) break;
        cap += 1;
        continue;
      }
      const topicId = weightedPick(open, function (id) { return topicWeight(progress, id); });
      const exId = pickExercise(progress, topicId, used);
      used[exId] = true;
      perTopic[topicId] = (perTopic[topicId] || 0) + 1;
      items.push({ kind: "exercise", id: exId, topic: topicId });
      added += 1;
    }
    return added;
  }

  const lacking =
    (weakCount - fill(weak, weakCount)) +
    (normalCount - fill(normal, normalCount)) +
    (reviewCount - fill(review, reviewCount)) +
    (nextCount - fill(next, nextCount));

  // Если в какой-то группе не хватило упражнений — добираем из всех доступных тем
  if (lacking > 0) fill(main.concat(next), lacking);

  // ---------- 4.1. Диктанты (тип "listen") ----------
  // Отдельно от обычного отбора выше: не больше listenCountForMinutes() за
  // занятие, и только если в браузере вообще есть озвучка (см. js/speech.js) —
  // иначе такое упражнение показать нечем.
  items = items.concat(pickListenItems(progress, main.concat(next), listenBudget, used));

  // ---------- 5. Порядок ----------
  // Упражнения одной темы идут подряд (блоками), блоки — в случайном порядке.
  // Чтение — в конце.
  // С RULES.lesson.interleave упражнения ПЕРЕМЕШАНЫ между темами (arrangeItems):
  // выбор формы в живой речи не подписан темой, поэтому и в занятии не должен.
  // Блоками остаются только новые темы — для них правило раскрыто в начале блока.
  items = arrangeItems(progress, items).map(function (it) { return { kind: "exercise", id: it.id }; });
  items = items.concat(readingItems);
  if (storyItem) items.push(storyItem);

  // ---------- 6. Повторение (слова + карточки «Другое» из импорта чата) ----------
  // Идут в начале занятия (это самая быстрая часть — короткие карточки).
  const reviewItems = pickReviewItems(progress, wordCountForMinutes(minutes));
  items = reviewItems.concat(items);

  return { items: items, nextLevel: next.length ? LEVELS[levelIdx + 1] : null };
}

// Порядок упражнений в занятии. items = [{ kind:"exercise", id, topic }].
//   interleave = false → как раньше: темы блоками, блоки в случайном порядке.
//   interleave = true  → «единицы» перемешиваются: каждое упражнение уже
//   знакомой темы — отдельная единица, а все упражнения НОВОЙ темы (ещё ни
//   одного ответа) — один блок. Единицы выбираются так, чтобы две подряд не
//   были одной темы, пока это возможно: сначала берётся тема, у которой
//   больше всего упражнений осталось (с небольшой долей случайности).
function arrangeItems(progress, items) {
  const blocks = {};
  items.forEach(function (it) { (blocks[it.topic] = blocks[it.topic] || []).push(it); });

  if (!RULES.lesson.interleave) {
    let out = [];
    shuffle(Object.keys(blocks)).forEach(function (topicId) { out = out.concat(blocks[topicId]); });
    return out;
  }

  const units = [];
  Object.keys(blocks).forEach(function (topicId) {
    const stats = progress.topics[topicId];
    if (!stats || stats.attempts === 0) units.push({ topic: topicId, items: blocks[topicId] });
    else blocks[topicId].forEach(function (it) { units.push({ topic: topicId, items: [it] }); });
  });

  const out = [];
  let rest = shuffle(units);
  let last = null;
  while (rest.length) {
    const count = {};
    rest.forEach(function (u) { count[u.topic] = (count[u.topic] || 0) + 1; });
    let best = -1, bestScore = -1;
    rest.forEach(function (u, i) {
      if (u.topic === last) return;
      const score = count[u.topic] + Math.random() * 0.99;
      if (score > bestScore) { bestScore = score; best = i; }
    });
    if (best === -1) best = 0; // остались только упражнения последней темы — неизбежно подряд
    const unit = rest[best];
    rest.splice(best, 1);
    unit.items.forEach(function (it) { out.push(it); });
    last = unit.topic;
  }
  return out;
}

// Упражнения, в которых вы ошибались и которым пришёл срок вернуться
// (rec.again <= сегодня, см. onAnswered в pages/lesson.js). Сначала самые
// просроченные; не больше limit штук. Диктанты — только если есть озвучка.
function pickMistakeItems(progress, limit) {
  if (limit <= 0) return [];
  const today = todayStr();
  const canListen = ttsSupported() && hasEnglishVoice();
  const due = [];
  DATA.exercises.forEach(function (e) {
    const rec = progress.exercises[e.id];
    if (!rec || !rec.again || rec.again > today) return;
    if (e.type === "listen" && !canListen) return;
    due.push({ id: e.id, topic: e.topic, again: rec.again, rnd: Math.random() });
  });
  due.sort(function (a, b) { return a.again < b.again ? -1 : a.again > b.again ? 1 : a.rnd - b.rnd; });
  return due.slice(0, limit).map(function (d) {
    return { kind: "exercise", id: d.id, topic: d.topic };
  });
}

// Вес темы при случайном выборе: чем выше приоритет, тем чаще.
// Темы ниже вашего уровня выбираются реже (RULES.lesson.belowLevelWeight).
function topicWeight(progress, topicId) {
  const stats = progress.topics[topicId];
  const priority = stats ? stats.priority : RULES.priority.start;
  let weight = priority + 5; // +5, чтобы у темы с приоритетом 0 тоже был шанс
  const topic = findTopic(topicId);
  if (topic && levelIndex(topic.level) < levelIndex(workingLevel(progress))) {
    weight *= RULES.lesson.belowLevelWeight;
  }
  return weight;
}

// Случайный выбор с весами
function weightedPick(list, weightFn) {
  const weights = list.map(weightFn);
  const sum = weights.reduce(function (a, b) { return a + b; }, 0);
  let r = Math.random() * sum;
  for (let i = 0; i < list.length; i++) {
    r -= weights[i];
    if (r <= 0) return list[i];
  }
  return list[list.length - 1];
}

// Упражнения темы, ещё не взятые в это занятие.
// Тип "listen" (диктант) сюда не попадает — он отбирается отдельно, см. pickListenItems.
function freeExercises(topicId, used) {
  return exercisesOfTopic(topicId).filter(function (e) { return !used[e.id] && e.type !== "listen"; });
}

// Диктанты (тип "listen") для занятия: до count штук из тем topicIds, случайно.
// Только если в браузере вообще есть озвучка — иначе такое упражнение нечем показать
// (см. ttsSupported()/hasEnglishVoice() в js/speech.js).
function pickListenItems(progress, topicIds, count, used) {
  if (count <= 0 || !ttsSupported() || !hasEnglishVoice()) return [];
  // Тема выбирается по весу (слабые темы и темы вашего уровня чаще — как у
  // обычных упражнений), а внутри темы сначала берётся диктант, которого
  // ещё не было, иначе случайный.
  const pools = {};
  topicIds.forEach(function (topicId) {
    const list = exercisesOfTopic(topicId).filter(function (e) { return e.type === "listen" && !used[e.id]; });
    if (list.length) pools[topicId] = list;
  });
  const result = [];
  while (result.length < count) {
    const open = Object.keys(pools).filter(function (id) { return pools[id].length > 0; });
    if (open.length === 0) break;
    const topicId = weightedPick(open, function (id) { return topicWeight(progress, id); });
    const fresh = pools[topicId].filter(function (e) { return !progress.exercises[e.id]; });
    const from = fresh.length ? fresh : pools[topicId];
    const e = from[Math.floor(Math.random() * from.length)];
    pools[topicId] = pools[topicId].filter(function (x) { return x.id !== e.id; });
    used[e.id] = true;
    result.push({ kind: "exercise", id: e.id, topic: e.topic });
  }
  return result;
}

// Выбрать лучшее упражнение темы:
//   0 — новое (ещё не решали)
//   1 — была ошибка, и прошло repeatWrongAfterDays
//   2 — решали давно (прошло exerciseCooldownDays)
//   3 — решали недавно (берём, только если больше нечего)
function pickExercise(progress, topicId, used) {
  const L = RULES.lesson;
  const today = todayStr();
  const scored = freeExercises(topicId, used).map(function (e) {
    const rec = progress.exercises[e.id];
    let group;
    let days = 0;
    if (!rec) group = 0;
    else {
      days = daysBetween(rec.lastSeen, today);
      if (!rec.lastCorrect && days >= L.repeatWrongAfterDays) group = 1;
      else if (days >= L.exerciseCooldownDays) group = 2;
      else group = 3;
    }
    // Внутри группы: сначала давно решённые, при равенстве — случайно
    return { id: e.id, group: group, days: days, rnd: Math.random() };
  });
  scored.sort(function (a, b) {
    return a.group - b.group || b.days - a.days || a.rnd - b.rnd;
  });
  return scored[0].id;
}

// Выбрать текст для чтения не выше заданного уровня: сначала непрочитанные,
// потом давно прочитанные. Предпочитаем тексты ближе к вашему уровню.
// wantListen = true — выбираем диалог на слух (texts с listen: true), иначе обычный текст.
function pickText(progress, maxLevelIdx, wantListen) {
  const today = todayStr();
  const candidates = DATA.texts.filter(function (t) {
    return !!t.listen === !!wantListen && levelIndex(t.level) <= maxLevelIdx;
  });
  if (candidates.length === 0) return null;
  const scored = candidates.map(function (t) {
    const rec = progress.texts[t.id];
    return {
      text: t,
      unread: rec ? 1 : 0,
      days: rec ? daysBetween(rec.lastSeen, today) : 0,
      levelGap: maxLevelIdx - levelIndex(t.level),
      rnd: Math.random()
    };
  });
  scored.sort(function (a, b) {
    return a.unread - b.unread || a.levelGap - b.levelGap || b.days - a.days || a.rnd - b.rnd;
  });
  return scored[0].text;
}

// Найти ещё одно упражнение темы для повтора после ошибки (или null)
function pickRetryExercise(progress, topicId, usedIds) {
  const used = {};
  usedIds.forEach(function (id) { used[id] = true; });
  if (freeExercises(topicId, used).length === 0) return null;
  return pickExercise(progress, topicId, used);
}

// Топ слабых тем (для показа «Сегодня в фокусе»)
function focusTopics(progress, limit) {
  return practiceTopics()
    .filter(function (t) { return topicStatus(progress.topics[t.id]) === "weak"; })
    .sort(function (a, b) { return progress.topics[b.id].priority - progress.topics[a.id].priority; })
    .slice(0, limit)
    .map(function (t) { return t.id; });
}

// ---------------------------------------------------------------------
// Мини-рассказы с рамкой глаголов (js/story.js, data/stories/*.js)
// ---------------------------------------------------------------------

function findStory(id) {
  return DATA.stories.filter(function (s) { return s.id === id; })[0] || null;
}

// Пора ли рассказу: если в последних (storyEvery − 1) занятиях рассказа не было.
// Пока рассказов не было вообще — после второго занятия.
function isStoryDue(progress) {
  const lessons = fullLessons(progress);
  let last = -1;
  lessons.forEach(function (l, i) { if (l.stories && l.stories.length) last = i; });
  if (last === -1) return lessons.length >= 2;
  return lessons.length - 1 - last >= RULES.lesson.storyEvery - 1;
}

// Лучший рассказ: ещё не решённый, затем с большим числом пропусков по слабым
// темам, затем решённый давнее всех. Только уровня не выше maxLevelIdx.
function pickStory(progress, maxLevelIdx) {
  const today = todayStr();
  const candidates = DATA.stories.filter(function (s) {
    return levelIndex(s.level) <= maxLevelIdx;
  });
  if (candidates.length === 0) return null;
  const scored = candidates.map(function (s) {
    const rec = progress.stories[s.id];
    let weakGaps = 0;
    s.gaps.forEach(function (g) {
      if (topicStatus(progress.topics[g.topic]) === "weak") weakGaps += 1;
    });
    return {
      story: s, seen: rec ? 1 : 0, weak: weakGaps,
      levelGap: maxLevelIdx - levelIndex(s.level),   // 0 — рассказ ровно вашего уровня
      days: rec ? daysBetween(rec.lastSeen, today) : 0, rnd: Math.random()
    };
  });
  // Сначала нерешённые; среди них — с большим числом слабых тем; затем ближайшие
  // к вашему уровню (ученику B2 не предлагаются рассказы A2, пока есть B2), затем давние.
  scored.sort(function (a, b) {
    return a.seen - b.seen || b.weak - a.weak || a.levelGap - b.levelGap || b.days - a.days || a.rnd - b.rnd;
  });
  return scored[0].story;
}

// ---------------------------------------------------------------------
// Разминка (RULES.warmup): короткое занятие только из повторения — слова,
// карточки «Другое» и упражнения с ошибками, которым пришёл срок. Новых тем
// и текстов нет. Такие занятия помечаются warmup: true в progress.lessons и
// не сдвигают расписание текстов и рассказов (fullLessons).
// ---------------------------------------------------------------------

// Обычные занятия (без разминок)
function fullLessons(progress) {
  return progress.lessons.filter(function (l) { return !l.warmup; });
}

// Составить разминку: { items, nextLevel: null }. items может быть пустым —
// тогда сегодня повторять нечего.
function buildWarmup(progress) {
  const W = RULES.warmup;
  const mistakes = pickMistakeItems(progress, W.maxMistakes);
  const secondsLeft = Math.max(0, W.minutes * 60 - mistakes.length * RULES.lesson.secondsPerExercise);
  const wordCount = Math.round(secondsLeft / RULES.words.secondsPerCard);
  const items = pickReviewItems(progress, wordCount).concat(mistakes);
  return { items: items, nextLevel: null };
}
