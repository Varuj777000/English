// =====================================================================
// storage.js — хранение прогресса в браузере (localStorage).
//
// Весь прогресс — это один объект, который сохраняется под ключом
// STORAGE_KEY в виде JSON-строки. Его же целиком скачивает кнопка
// «Скачать мой прогресс».
//
// Как пользоваться из других файлов:
//     const p = loadProgress();   // прочитать
//     p.settings.minutesPerDay = 30;
//     saveProgress(p);            // сохранить
// =====================================================================

const STORAGE_KEY = "english-trainer-progress";

// Номер версии формата. Если когда-нибудь формат изменится,
// по этому номеру можно будет понять, что старые данные нужно обновить.
const PROGRESS_VERSION = 1;

// Как выглядит прогресс нового пользователя.
function defaultProgress() {
  return {
    version: PROGRESS_VERSION,
    createdAt: todayStr(),

    // Настройки
    settings: {
      minutesPerDay: 20,   // длина занятия по умолчанию (15 / 20 / 30 / 60)
      examGoal: "ielts",   // целевой экзамен (пока только для информации)
      // Уровень слов вручную (A1–C1) вместо автоматического — см. js/level.js
      // (effectiveVocabLevel). null — использовать автоматический (vocabLevel).
      vocabLevelManual: null,
      // Пауза автодобавления новых слов из встроенного словаря (js/srs.js,
      // enrollNewWords). Пока true — очередь повторения не растёт сама, даже
      // если открывать сайт каждый день. Включается на странице «Настройки».
      // По умолчанию выключена: новые слова идут сами, но enrollNewWords()
      // сама останавливается, пока накопилось много долгов (RULES.words.autoPauseDue).
      pauseNewWords: false,

      // Озвучка (js/speech.js): акцент и скорость для window.speechSynthesis
      speechAccent: "en-US",   // "en-US" | "en-GB"
      speechRate: "normal",    // "normal" | "slow"

      // Распознавание речи на странице «Говорение» (js/speaking.js). ВЫКЛЮЧЕНО по
      // умолчанию: в Chrome браузер отправляет звук на сервер распознавания Google,
      // а сайт во всём остальном работает без внешних вызовов. Включается самим учеником.
      speechRecognition: false,

      // Автоматическая резервная копия: в конце занятия сайт сам скачивает файл
      // с прогрессом, если прошло RULES.backup.autoEveryDays дней (см. maybeAutoBackup).
      autoBackup: true
    },

    // Текущий уровень CEFR: ставится после стартового теста,
    // пересчитывается после каждой контрольной. null — тест ещё не пройден.
    level: null,

    // Уровень ОТДЕЛЬНО по лексике (считается по разделу «Лексика» в тестах
    // и контрольных — см. evaluateTest в js/level.js). Используется при
    // пополнении словаря словами вашего уровня, если не выбран вручную
    // (settings.vocabLevelManual). null — ещё не посчитан.
    vocabLevel: null,

    // Результат стартового теста: { date, level, score, byTopic: {...} }
    placement: null,

    // Статистика по темам: { "present-simple": { priority, attempts, correct, streak, lastSeen, lastWrong } }
    topics: {},

    // Какие упражнения уже решались:
    // { "pres-s-001": { lastSeen: "2026-10-01", right: 2, wrong: 1, lastCorrect: true } }
    exercises: {},

    // Прочитанные тексты: { "read-a1-001": { lastSeen, correct, total } }
    texts: {},

    // Неправильные глаголы (js/verbs.js): карточка SM-2 на каждый глагол, который
    // хоть раз тренировали: { "go": { right, wrong, lastCorrect, lastSeen,
    //   ef, interval, reps, lapses, due, added } }
    verbs: {},

    // Говорение (js/speaking.js): карточка SM-2 на каждую фразу, которую проговаривали:
    // { "ex:listen-a2-001": { ef, interval, reps, lapses, due, added, lastSeen, lastQuality, tries } }
    // (ключ "om:<id>" — исправленное предложение из «Мои ошибки»)
    speaking: {},

    // Письмо по шаблону (js/writing.js): { "wr-a2-plans": { draft, text, times, lastSeen,
    // words, checksPassed, checksTotal } } — draft сохраняется по ходу набора, text — последнее готовое
    writing: {},

    // Мини-рассказы: { "story-past-001": { lastSeen, times, correct, total } }
    // (correct/total — результат последнего прохождения)
    stories: {},

    // История занятий: [ { date, minutes, total, correct, words, stories } ]
    lessons: [],

    // Спорные ответы («Мой ответ тоже верный»):
    // [ { kind: "exercise", id, answer, date } | { kind: "word", ref, wordEn, wordRu, answer, date } ]
    disputed: [],

    // Повторение слов (SM-2): { "reliable": { ef, interval, reps, due, lapses, added } }
    words: {},

    // Свои слова (из чата), которых нет в data/words: [ { en, ru, example, source } ]
    customWords: [],

    // Ошибки из чата без подходящей темы: [ { id, wrong, correct, explanation, date, srs: {...} } ]
    otherMistakes: [],

    // Контрольные: [ { date, level, correct, answered, weakTopics, strongTopics } ]
    checkpoints: [],

    // Серия дней подряд
    streak: { current: 0, best: 0, lastDay: null },

    // Активность по дням: { "2026-10-01": { exercises: 25, correct: 20, words: 15 } }
    activity: {},

    // Снимки приоритетов тем для страницы «Прогресс» (какие темы стали сильнее/слабее):
    // [ { date: "2026-10-01", priorities: { "present-simple": 35, ... } } ].
    // Снимок делается в конце занятия не чаще раза в 7 дней, хранится не больше 12 (см. saveTopicSnapshot).
    topicSnapshots: [],

    // История импортов из чата: [ { date, fileDate, mistakes, words } ]
    imports: [],

    // Дата последнего скачивания резервной копии ("2026-10-01") — используется
    // для напоминания на главной странице. null — ни разу не скачивали.
    lastBackupDate: null
  };
}

// Прочитать прогресс. Если его нет или он повреждён — вернуть новый.
function loadProgress() {
  let saved = null;
  try {
    const text = localStorage.getItem(STORAGE_KEY);
    if (text) saved = JSON.parse(text);
  } catch (e) {
    console.warn("Не удалось прочитать прогресс:", e);
  }
  return normalizeProgress(saved);
}

// Дополнить объект недостающими полями значениями по умолчанию —
// полезно и для обычного чтения, и при восстановлении из файла резервной
// копии (вдруг она сделана более старой версией сайта, где каких-то полей
// ещё не было).
function normalizeProgress(saved) {
  if (!saved || typeof saved !== "object") return defaultProgress();
  const base = defaultProgress();
  const merged = Object.assign(base, saved);
  merged.settings = Object.assign(defaultProgress().settings, saved.settings || {});
  merged.streak = Object.assign(defaultProgress().streak, saved.streak || {});
  // progress.verbs появился позже остальных полей: в старых копиях его нет (или он не словарь)
  if (!merged.verbs || typeof merged.verbs !== "object" || Array.isArray(merged.verbs)) merged.verbs = {};
  // progress.speaking тоже появился позже: в старых копиях его нет
  if (!merged.speaking || typeof merged.speaking !== "object" || Array.isArray(merged.speaking)) merged.speaking = {};
  if (!merged.writing || typeof merged.writing !== "object" || Array.isArray(merged.writing)) merged.writing = {};
  return merged;
}

// Похоже ли это на настоящую резервную копию прогресса (а не случайный
// файл)? Проверяем несколько ключевых полей, которые есть в любой версии.
function looksLikeProgressBackup(obj) {
  return !!obj && typeof obj === "object" &&
    typeof obj.version === "number" &&
    typeof obj.topics === "object" &&
    typeof obj.words === "object" &&
    typeof obj.settings === "object";
}

// Сохранить прогресс. Возвращает true, если получилось.
function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    return true;
  } catch (e) {
    alert("Не удалось сохранить прогресс. Возможно, в браузере закончилось место или запрещено хранение данных.");
    console.error(e);
    return false;
  }
}

// Полностью удалить прогресс (кнопка «Начать заново»).
function resetProgress() {
  localStorage.removeItem(STORAGE_KEY);
}

// Статистика одной темы. Если её ещё нет — создаётся с начальными значениями.
function getTopicStats(progress, topicId) {
  if (!progress.topics[topicId]) {
    progress.topics[topicId] = {
      priority: RULES.priority.start, // насколько тема «слабая» (0–100)
      attempts: 0,                    // сколько всего ответов
      correct: 0,                     // сколько правильных
      streak: 0,                      // правильных подряд
      lastSeen: null,                 // дата последнего упражнения
      lastWrong: null                 // дата последней ошибки
    };
  }
  return progress.topics[topicId];
}

// ---------- Активность и серия дней ----------

// Записать сделанное сегодня. what — { exercises: 1, correct: 1 } или { words: 1 }.
// Когда за день набирается достаточно упражнений, день засчитывается в серию.
function recordActivity(progress, what) {
  const today = todayStr();
  const day = progress.activity[today] || (progress.activity[today] = { exercises: 0, correct: 0, words: 0 });
  Object.keys(what).forEach(function (key) {
    day[key] = (day[key] || 0) + what[key];
  });
  if (day.exercises + day.words >= RULES.lesson.streakMinExercises) updateStreak(progress);
}

// Засчитать сегодняшний день в серию (один раз в день).
function updateStreak(progress) {
  const today = todayStr();
  const s = progress.streak;
  if (s.lastDay === today) return;
  if (s.lastDay && daysBetween(s.lastDay, today) === 1) s.current += 1; // вчера тоже занимались
  else s.current = 1;                                                   // серия началась заново
  s.lastDay = today;
  if (s.current > s.best) s.best = s.current;
}

// Текущая серия для показа: если пропущен вчерашний день, серия уже прервалась.
function currentStreak(progress) {
  const s = progress.streak;
  if (!s.lastDay) return 0;
  return daysBetween(s.lastDay, todayStr()) <= 1 ? s.current : 0;
}

// ---------- Даты ----------

// Сегодняшняя дата в виде "2026-10-01" (по местному времени).
function todayStr() {
  return dateToStr(new Date());
}

function dateToStr(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return y + "-" + m + "-" + day;
}

// Сколько дней прошло между двумя датами "ГГГГ-ММ-ДД".
function daysBetween(fromStr, toStr) {
  const a = new Date(fromStr + "T00:00:00");
  const b = new Date(toStr + "T00:00:00");
  return Math.round((b - a) / 86400000);
}

// Прибавить дни к дате "ГГГГ-ММ-ДД".
function addDays(dateStr, days) {
  const d = new Date(dateStr + "T00:00:00");
  d.setDate(d.getDate() + days);
  return dateToStr(d);
}

// ---------------------------------------------------------------------
// Снимок приоритетов тем (для динамики на странице «Прогресс»).
// Вызывается в конце занятия; делает новый снимок, только если прошлому
// 7+ дней. Хранит не больше 12 последних.
// ---------------------------------------------------------------------
function saveTopicSnapshot(progress) {
  if (!Array.isArray(progress.topicSnapshots)) progress.topicSnapshots = [];
  const snaps = progress.topicSnapshots;
  const today = todayStr();
  const last = snaps[snaps.length - 1];
  if (last && daysBetween(last.date, today) < 7) return;
  const priorities = {};
  Object.keys(progress.topics).forEach(function (id) {
    const t = progress.topics[id];
    if (t && t.attempts > 0) priorities[id] = Math.round(t.priority);
  });
  snaps.push({ date: today, priorities: priorities });
  if (snaps.length > 12) snaps.shift();
}

// ---------------------------------------------------------------------
// Резервная копия прогресса файлом.
//   downloadProgressFile — скачать JSON (вручную из «Настроек» и автоматически).
//   maybeAutoBackup      — вызывается в конце занятия: если автокопия включена
//                          (settings.autoBackup) и с прошлой копии прошло
//                          RULES.backup.autoEveryDays дней и больше (или копии не
//                          было вовсе), скачивает файл и ставит lastBackupDate.
//                          Возвращает true, если файл был скачан. Сам progress
//                          не сохраняет — это делает вызывающий код.
// ---------------------------------------------------------------------
function downloadProgressFile(progress) {
  const blob = new Blob([JSON.stringify(progress, null, 2)], { type: "application/json;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "english-trainer-backup-" + todayStr() + ".json";
  link.click();
  setTimeout(function () { URL.revokeObjectURL(link.href); }, 1000);
}

function maybeAutoBackup(progress) {
  if (!progress.settings.autoBackup) return false;
  const last = progress.lastBackupDate;
  if (last && daysBetween(last, todayStr()) < RULES.backup.autoEveryDays) return false;
  try {
    downloadProgressFile(progress);
  } catch (e) {
    console.warn("Автокопия не удалась:", e);
    return false;
  }
  progress.lastBackupDate = todayStr();
  return true;
}
