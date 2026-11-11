# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A self-contained English-learning website (Russian-language UI) for a single learner. Grammar/vocabulary
*exercises* (`data/exercises/*.js`) currently only cover A1–B1; the *vocabulary bank* (`data/words/*.js`)
and both tests' question banks (`data/placement-test.js`, `data/checkpoints.js`) already span the full
A1–C1 scale — the data structures were built for all five levels from the start. It is plain HTML/CSS/JS with **no build step,
no backend, no external libraries/fonts, and no AI/API calls at runtime** — it must keep working forever
from a static host (GitHub Pages) or directly from `file://`. All progress lives in the browser's
`localStorage`.

## Commands

There is no build, lint, or test tooling (by design — no Node/npm dependency for the site itself).
To open the site, open any `.html` file directly in a browser, or serve the folder with any static
file server. There are no automated test files; verification of new exercises/logic is done ad hoc by
loading the site's own JS files into a Node `vm` context (see "Verifying content and logic changes" below).

## Architecture

### Why `.js` data files, not `.json`
Data files under `data/` are JavaScript (`window.DATA.xxx.push(...)`), not JSON, specifically so the
site works when opened via `file://` (browsers block `fetch`/`XHR` of local JSON under that origin, but
plain `<script src>` tags always load). Every HTML page loads `js/data.js` first (which pre-creates the
empty `DATA` arrays), then all `data/**/*.js` files, then the `js/*.js` logic files, then that page's
`js/pages/<name>.js` controller — in that exact order, via `<script>` tags. When adding a new data file,
it must be `<script>`-included on every page that needs it (see any existing `.html` file for the list).

### Core data flow
- **`js/data.js`** — declares `window.DATA` (`topics`, `exercises`, `texts`, `words`, `placement`,
  `checkpoints`, `testPassages`) and `window.LEVELS` (`["A1","A2","B1","B2","C1"]`). Loaded first.
- **`data/topics.js`** — the topic catalog: each topic has an `id` (kebab-case, e.g. `present-simple`),
  `level`, `category` (`grammar` | `vocabulary` | `reading` | `other`), Russian `explanation` paragraphs,
  and `examples`. Topic IDs are referenced by exercises, the placement test, and chat-import mistakes —
  **never rename an existing topic id**, since it's persisted in every learner's saved progress.
- **`data/exercises/{a1,a2,b1}.js`** — exercises grouped by CEFR level, each tagged with a `topic` id and
  a `type` (`choice` | `fill` | `fix` | `translate` | `listen`). Format is documented in the header comment
  of `data/exercises/a1.js`. `type: "listen"` (dictation) lives separately in
  `data/exercises/listen-{a1,a2,b1,b2}.js` instead of being mixed into the level files — format is documented in
  the header comment of `data/exercises/listen-a2.js`: `q` is the phrase spoken aloud (never shown as text
  before the learner answers — that's the whole exercise), `ru` is its translation (required, shown only
  after answering alongside `q` itself, even when the answer was already correct), `answers` is graded like
  `fix`/`translate` via the normal `isAnswerCorrect`. Phrases deliberately avoid classic homophones
  (their/there/they're, to/too/two, its/it's, your/you're, whose/who's, know/no, hear/here) since a learner
  can't distinguish them by ear even with full sentence context; a phrase with a spoken-out number (a year,
  "100") lists both the digit and word spelling in `answers`. See `js/planner.js` for how these are picked
  into lessons and `js/exercises.js` for how they're rendered — both documented below.
- **`data/exercises/b2.js`** — B2 exercises, added one topic at a time (done: `third-conditional` (22 items), `wish-if-only` (27), `mixed-conditionals` (25), `modals-past` (27), `future-continuous-perfect` (27), `passive-advanced` (28), `participle-clauses` (28) — all seven B2 topics in `data/topics.js` now have exercises). Same format as the other level files; loaded on every page right after `b1.js`. A B2 topic only enters lessons once the next level is unlocked (`isNextLevelUnlocked`) or if it turns weak.
- **`data/stories/{past,present,perfect,future,wordformation,passive}.js`** — «мини-рассказы с рамкой глаголов» (14 штук: 4 past + 2 present на A2, 3 perfect + 2 future + 2 wordformation + 1 passive на B1; все файлы подключены на lesson/settings/stories/verbs.html): `{ id, title, level, box: [{verb, forms[]}], text: [paragraphs with "(n) ___"], gaps: [{n, verb, topic, answers[], explain}] }`. The verbs in `box` and the gaps are 1:1 (each verb used exactly once); `forms` lists every inflected form of the verb (never be/am/is/are/was/were) so the UI can detect one verb typed twice. In `passive.js` each gap's answer is `be + V3` ("was built", "are locked", "will be announced"): box `forms` are the plain verb forms, the answer's LAST word must be one of them (be/will are part of the answer, never of `forms`), and gaps use topic `passive-simple`. In `wordformation.js` the box holds BASE words (fly, attract, choose…) and each gap's answer is a derivative or form (flown, attractive, choice, inconvenient): `forms` there lists every related form (verb, noun, adjective, adverb, un-/in- prefixed) and still must not overlap between two box words; gaps use topic `word-formation`. `validateStories()` in `js/validate.js` enforces: sequential `(n)` markers, box size = gap count, no form shared between two box verbs, each `answers` entry ends in a form of its gap's verb, topics exist.
- **`data/verbs.js`** + **`data/verb-examples.js`** — the irregular-verb bank behind `verbs.html` (122 verbs): `{ inf, past: [..], pp: [..], ru, group, tier, note, say? }`. `past`/`pp` are arrays of *all* accepted variants (learnt/learned, got/gotten, was/were; first = main); `tier` 1/2/3 = 50/42/30 by frequency; `group` is a key of `VERB_GROUPS` in `js/data.js` (AAA, AAB, ABA, ABB, ABB-ought, ABB-t, ABC, ABC-ew, ABC-iau, ABC-en); `say` optionally overrides what 🔊 speaks (only `read`: "reed"/"red"). `verb-examples.js` maps each `inf` → `[sentence with ___ for V2, sentence with ___ for V3, optional { past: [...] } restricting which variants fit the sentence]` (used by `be`: "She ___" → only `was`); the form itself is substituted from `verbs.js`, never duplicated. `validateVerbs()` in `js/validate.js` checks unique lowercase `inf`, non-empty `past`/`pp`, `tier` ∈ 1..3, known `group`, a translation, and exactly one `___` in each example (and no orphan examples).
- **`data/reading/texts.js`** — reading passages with comprehension questions (topic is implicitly `reading`); 27 reading texts (+10 listening dialogues, see below): A1 ×5, A2 ×6, B1 ×6, B2 ×8, C1 ×2 (`read-b2-001…008`, five choice questions each, with vocabulary-in-context and writer-attitude questions). C1 texts: `read-c1-001/002`.
- **`data/words/{a1,a2,b1,b2,c1}.js`** — vocabulary entries (`en`, `ru`, `example`, `level`, `tags`) for
  spaced repetition, several hundred per level; `en` doubles as the id (must stay unique across every
  words file — `validate.js` checks this globally, not per file).
- **`data/placement-test.js`** — the 58-question adaptive placement test (`section`: grammar/vocabulary/
  reading; `level`; `topic`) plus `DATA.testPassages` (reading passages just for the test).
- **`data/checkpoints.js`** — the biweekly-checkpoint question bank, same shape as `data/placement-test.js`
  and sharing its `DATA.testPassages` pool (ids prefixed `cp-tp-`). Deliberately oversized (~120 questions,
  ~4x what one checkpoint shows; every grammar/vocabulary topic is now covered by at least one question
  here or in the placement test) so `js/pages/checkpoint.js`'s `buildFlow()` can pick a fresh subset each
  time — `pickPreferUnseen()` there prefers question/passage ids not present in any past
  `progress.checkpoints[].askedIds` before falling back to already-seen ones, so retaking checkpoints
  doesn't mean memorizing the same ~30 questions. Reading questions are picked and shown one whole passage
  at a time, never split. Per-checkpoint counts live in `RULES.checkpoint.questionsPerLevel` /
  `readingPassagesPerLevel`, not hardcoded in `checkpoint.js`.
- **`js/storage.js`** — all `localStorage` read/write. `loadProgress()`/`saveProgress()` are the only way
  to touch persisted state; `defaultProgress()` defines the full progress shape (settings, level, topic
  stats, exercise history, word SRS cards, custom words, checkpoints, streak, activity log, etc.). Also
  owns streak bookkeeping (`recordActivity`, `updateStreak`, `currentStreak`) and date helpers
  (`todayStr`, `daysBetween`, `addDays`).
- **`js/rules.js`** — **every tunable number for adaptivity lives here**, grouped by concern (`priority`,
  `status`, `lesson`, `nextLevel`, `checkpoint`, `placement`, `words`). This is the file to edit when
  changing how the site adapts (e.g. how much a wrong answer raises a topic's priority, lesson
  exercise/topic mix, when the next CEFR level unlocks, SM-2 tuning and the "Уже знаю" interval). It also
  exports `applyAnswerToTopic()` and `topicStatus()` (`"new"|"weak"|"normal"|"mastered"`), used by both
  the planner and the placement-test scorer.
- **`js/level.js`** — turns a set of placement/checkpoint answers into a CEFR level, weak/strong topics,
  and initial topic priorities (`evaluateTest`, `determineLevel`). `evaluateTest()` also computes
  `byLevelBySection` (the same `byLevel` breakdown, but kept separate per test section) and derives
  `result.vocabLevel` by re-running `determineLevel()` on just the `vocabulary` bucket — a learner's
  grammar and vocabulary levels often diverge, and vocabulary content is picked by `vocabLevel`, not the
  overall `level` (see `effectiveVocabLevel()` below and `enrollNewWords()` in `js/srs.js`).
  `applyPlacementResult()` (first-ever test) still **overwrites** topic priority with the fixed constants
  in `RULES.placement` via `applyTestedTopicPriorities(..., fillUntested: true)`, since there's no prior
  lesson history to protect. `applyCheckpointResult()` (biweekly retest) is deliberately different and
  must stay that way: it applies each answered question through the same `applyAnswerToTopic()` every
  lesson exercise uses (via `evaluateTest()`'s `result.testedTopics` — a flat, ordered `{topic, correct}`
  list built in the same filtered pass as `byTopic`), so a checkpoint nudges priority incrementally
  instead of clobbering two weeks of accumulated lesson statistics; topics the checkpoint didn't happen to
  ask about aren't touched at all. Also owns the checkpoint-due calculation (`nextCheckpointDate()`,
  `isCheckpointDue()`, driven by `RULES.checkpoint.everyDays`, read by `index.html`, `lesson.html`, and
  `checkpoint.html`) and `effectiveVocabLevel(progress)` (`settings.vocabLevelManual` → `progress.vocabLevel`
  → `progress.level`, first one set wins).
- **`js/chart.js`** — `renderLevelChart(container, points)` draws the level-over-time line chart on
  `progress.html` as hand-built inline SVG (categorical x-axis by checkpoint order, not real time
  scale); no charting library, colors come from CSS classes (`.chart-line`, `.chart-dot`, …) that
  reference the theme's CSS custom properties so it re-themes for dark mode automatically.
- **`js/planner.js`** — `buildLesson(progress, minutes)` assembles a daily lesson: converts minutes to an
  exercise count, splits eligible topics into weak/normal/mastered pools (with weighted random topic
  selection favoring weak + current-level topics), fills each pool's share per `RULES.lesson.mix`, orders
  exercises with `arrangeItems()` — interleaved across topics (`RULES.lesson.interleave`; two of the same topic
  never sit next to each other while avoidable) except that a NEW topic (no answers yet) stays one block so its
  rule can be shown open at the block start — and optionally appends a reading passage. Also exposes
  `isNextLevelUnlocked()`, `pickRetryExercise()` (used after a wrong answer), and `focusTopics()`.
  Dictation exercises (`type: "listen"`) are excluded from that normal weighted pool entirely —
  `freeExercises()` filters them out — and picked separately by `pickListenItems()`: up to
  `listenCountForMinutes(minutes)` per lesson (at least `RULES.lesson.listenPerLesson` = 2, plus `listenPer10Minutes` = 1 per 10 minutes of lesson length), only when `ttsSupported() && hasEnglishVoice()`
  (see `js/speech.js`) say the browser can actually speak, chosen from the same
  level-appropriate topic pool as everything else: the topic is picked by `topicWeight()` (weak topics and the learner's own level more often), then a never-seen dictation of that topic first. `exerciseTotal` reserves that many slots up front
  regardless of whether TTS turns out to be available, so a lesson is at most `listenPerLesson` shorter
  than its nominal size rather than reshuffling the other pools' counts when it isn't.
- **Cloze word cards** — `pickDirection(word)` in `js/srs.js` can return a third direction, `"cloze"` (a share `RULES.words.clozeShare` of the ru-en cards): the card shows the word's `example` with the word replaced by a blank (`clozeSentence()`, only when the word occurs verbatim in its example) plus the Russian translation as a hint; typing/grading is identical to ru-en (`renderRuEn(..., cloze)`).
- **`data/exercises/c1.js`** and **`data/exercises/listen-c1.js`** — C1 exercises for the two C1 topics (`inversion`, `cleft-sentences`; 28 + 26 items) and 12 dictations; texts `read-c1-001/002` live in `data/reading/texts.js`. All loaded on every page after the B2 files. `data/exercises/listen-a1.js` (61 dictations) also exists, so every level A1–C1 has dictations.
- **A1–B1 theory** — the 44 shortest explanations (< 700 characters; 16 at A1, 16 at A2, 12 at B1, incl. `to-be`, `present-continuous`, `past-simple`, `present-perfect`, `first/second-conditional`, `reported-speech`, `question-tags`…) got 3–5 extra paragraphs each (11–772 → 770–1400 characters) and 1–2 extra examples: form details, typical errors marked ✗/✓, comparisons with neighbouring topics. The original paragraphs and examples were kept verbatim (only `vocab-daily-life` was rewritten); ids, levels, titles untouched. The ~25 topics that were already longer (present-simple, future-will, past-perfect, passive, word-formation, …) were not touched.
- **B2 / C1 theory** — the explanations of the seven B2 topics and both C1 topics (`inversion`, `cleft-sentences`) in `data/topics.js` were rewritten from 2–4 lines to 6–10 paragraphs (formula, how to choose the form, common errors marked with ✗/✓, comparisons with neighbouring topics) with 5–6 examples each; topic ids, levels and exercises are untouched. When adding a gap/exercise to these topics keep it consistent with those rules (e.g. no `would` after `if`; `wish + would` only for other people's behaviour; `can't have`, not `mustn't have`, for past impossibility; the participle's subject = the main clause's subject).
- **B2 stories and dialogues** — `data/stories/b2.js` (4 stories × 9 gaps, included on lesson/settings/stories/verbs.html after `passive.js`): `story-b2-001` modals-past + third-conditional, `-002` wish-if-only + mixed-conditionals, `-003` passive-advanced, `-004` future-continuous-perfect + participle-clauses. Answers are whole verb groups ("should have tested", "had booked", "is said to have been built", "Waiting"); `validateStories()` still applies (last word of each answer is a form of the gap's verb; `be/have/had/will/would` are never in `forms`). `pickStory()` now orders: unseen → more gaps in weak topics → **closest to the learner's level** → least recently seen, so a B2 learner is not handed A2 stories while B2 ones remain. Dialogues: `dlg-b2-003…008` (work offer, hotel complaint, book vs film, tech support, team project, early-access games) at the end of `data/reading/texts.js` — 28 listening dialogues in total (A1 ×2, A2 ×9, B1 ×9, B2 ×8, C1 none yet).
- **Words from reading texts** — in `js/pages/lesson.js` every word of a reading passage is a clickable `.rd-word` (`readableParagraph`, `bindPassageWords`). Clicking opens a panel: a word found in `DATA.words`/`customWords` (also via simple endings — works → work, `lookupWord`) is put into the SRS queue with `addWordToReview`; an unknown word asks for a translation and goes through `addCustomWord(..., "text")` with the sentence from the text as `example`. `source: "text"` is shown as «из текста» on `words.html`.
- **Quick add word during a lesson** — `lesson.html` has a «+ Добавить слово» button and a small form (`#quick-word`); `bindQuickWord()` in `js/pages/lesson.js` submits it through `addCustomWord(..., "manual")` (words already known to the site are just queued for review). The form closes on every `showExercise()` and digits typed into it don't trigger the 1–9 answer shortcuts (`onKeyDown` ignores inputs).
- **Lesson summary extras** — `showFinish()` in `js/pages/lesson.js` calls `hardAndTomorrowHtml(done, progress)`: topics with the most mistakes in the lesson (up to 3), words rated «не помню/трудно» (up to 6), and how many words (`due <= tomorrow`) and mistake exercises (`again <= tomorrow`) will be in tomorrow's queue. Read-only; no progress is changed.
- **Warm-up (разминка)** — a 5-minute review-only session (`RULES.warmup`: `minutes`, `maxMistakes`). `buildWarmup()` in `js/planner.js` takes due mistake exercises (`pickMistakeItems`) plus as many due word/other cards as fit the remaining time; no new topics, texts or stories, and no retry-after-wrong extras. `lesson.html` has a «Разминка · 5 мин» button (disabled when nothing is due). Warm-up lessons are saved in `progress.lessons` with `warmup: true` and are skipped by `fullLessons()` so they don't shift the reading/story schedule.
- **Progress dynamics** — `progress.html` (`dynamicsSectionHtml` in `js/pages/progress.js`) compares the last 7 days with the 7 before (tasks = exercises + words, accuracy, days active), draws 14 day-bars from `progress.activity`, and lists topics that got stronger/weaker (priority moved by ≥ 10) since the newest `progress.topicSnapshots` entry that is ≥ 5 days old. Snapshots (`{date, priorities}`) are written by `saveTopicSnapshot()` (`js/storage.js`) at the end of a lesson, at most one per 7 days, 12 kept; older backups without the field are fine (`normalizeProgress`).
- **Auto backup** — `settings.autoBackup` (default `true`, toggle on `settings.html`). `finishLesson()` in `js/pages/lesson.js` calls `maybeAutoBackup(progress)` (`js/storage.js`): if `RULES.backup.autoEveryDays` (3) days have passed since `lastBackupDate` (or there was never a backup), it downloads `english-trainer-backup-<date>.json` via `downloadProgressFile()` (the same function the manual button on `settings.html` uses) and the finish screen says so. Restore = «Загрузить прогресс из файла» on `settings.html`. The browser decides where the file goes (its Downloads folder); the site cannot write elsewhere or overwrite one file.
- **Listening dialogues** — entries of `data/reading/texts.js` with `listen: true` (`dlg-<level>-NNN`, 22 now: A1 ×2, A2 ×9, B1 ×9, B2 ×2 — the last 12 (`dlg-a2-004…009`, `dlg-b1-004…009`) follow the learner's goals: work, travel, films/games, in a second `DATA.texts.push` block at the end of the file). `text` is a list of lines `"Speaker: sentence"`; questions are the usual `choice` ones. They are excluded from normal reading (`pickText(progress, maxLevelIdx, wantListen)` filters by `!!t.listen`). `buildLesson()` puts one dialogue into a lesson when `readingItems` is empty, `fullLessons(progress).length % RULES.lesson.dialogueEvery === 1` (every 3rd lesson, offset from reading), the lesson has ≥ `dialogueMinExercises` exercises and the browser has an English voice; its questions are ordinary `{kind: "reading"}` items. `lesson.js` (`dialogueCardHtml`, `onDialogueAction`) hides the text until «Показать текст»; if there is no voice the text is shown at once. `speakDialogue()` in `js/speech.js` speaks the lines in turn (second speaker = another English voice, or a lower pitch). The index counts `listen` texts separately.
- **Работа над ошибками (exercise mistakes)** — `onAnswered()` in `js/pages/lesson.js` sets `progress.exercises[id].again` (a date) and `.step` on a wrong answer (next review in `RULES.lesson.mistakeIntervals` = 1, 3, 7 days; each correct answer advances a step, the last one clears `again`; disputed answers and reading questions are ignored). `pickMistakeItems()` in `js/planner.js` puts every exercise whose `again <= today` into the next lesson first, capped at `RULES.lesson.mistakeShare` of the exercise slots. `index.html` also shows the weekly goal (`RULES.goals.weeklyDays`, days Mon–Sun with any activity).
- **`js/exercises.js`** — renders a single exercise into a container and grades free-text answers.
  Answer-checking (`isAnswerCorrect`/`checkExerciseAnswer`) normalizes case, punctuation, apostrophe
  style, contractions (`don't` ↔ `do not`, `he's` ↔ `he is`/`he has`, etc.), and spelled-out numbers
  0–20, and reports near-miss typos via edit distance. This is the most test-worthy file when editing
  answer-matching behavior. `type: "listen"` is rendered differently from every other type: no question
  text appears at all before answering (only `EXERCISE_PROMPTS.listen` and a "🔁 Повторить"/"🐢
  Помедленнее" button pair, the latter calling `speak(ex.q, LISTEN_SLOW_RATE)`), and `ex.q` is spoken once
  automatically via `speak()` the moment the card renders — the one deliberate exception to "speech never
  fires automatically" (see `js/speech.js`), since without it there'd be nothing to transcribe. Those two
  buttons sit in a `.btn-row.listen-controls` div specifically so `finish()`'s
  `container.querySelector(".btn-row:not(.listen-controls)")` hides only the Проверить/Не знаю row after
  answering, not the replay controls. The feedback always reveals `ex.answers[0]` and `ex.ru` for `listen`
  (even on a correct answer, since the text was never shown before) — every other type only shows an
  alternate answer when the learner's own answer didn't match `answers[0]`.
- **`js/validate.js`** — `validateData()` runs on every page load (hooked from `js/common.js`) and checks
  every data file for structural errors (duplicate/missing ids, unknown topic references, a `choice`
  question whose `answer` isn't in `options`, etc.), rendering a red banner if anything is wrong. Always
  keep this passing when editing `data/**`.
- **`js/chat-import.js`** — parses and applies the `chat-import` JSON a learner pastes from a Claude
  conversation (format documented in `README.md` and on `topics.html`'s "Список тем для Claude" panel).
  EVERY mistake now goes through `addMyMistake(progress, m, source)` and is kept as a `progress.otherMistakes`
  entry with its own SM-2 card (`{ id, topic, wrong, correct, explanation, source: "chat"|"manual", srs: {...} }`),
  whatever its topic; the same wrong+correct pair is never added twice. If `topic` is a real, non-`other`
  topic id, that topic's priority is bumped too (`RULES.priority.onChatMistake`). These cards flow into the
  same review queue as vocabulary (see `js/srs.js`); `renderMistakeCard()` shows the wrong sentence and the
  learner TYPES the corrected one (graded by `isAnswerCorrect`; falls back to the old reveal card when
  `js/exercises.js` isn't loaded). The «Мои ошибки» page (`mistakes.html` + `js/pages/mistakes.js`, nav «Ошибки»)
  lists them, adds one manually, deletes, and links to `words.html` for the actual review. Words go through `addCustomWord()` from `words-store.js`
  with `source: "chat"`.
- **`js/words-store.js`** — manual vocabulary entry, including `parseWordList()` for the bulk
  "word — translation" paste format (also used by chat-import, per README's plan). `addCustomWord()` is
  the entry point that both records a word's text (in `progress.customWords`, unless it's already in
  `DATA.words`) *and* puts it into the SRS queue via `addWordToReview()`; calling `addWordToReview()`
  alone (bypassing `addCustomWord`) creates an orphaned SRS card with no backing word text — `srs.js`'s
  `renderWordCard()` handles that gracefully (auto-skips with `skippedMissing: true`), but don't rely on
  that path when writing new code or test data.
- **`js/srs.js`** — the SM-2 spaced-repetition algorithm (`gradeWordCard(progress, key, quality)`, quality
  0–5 from the "Не помню/Трудно/Хорошо/Легко" buttons) plus flashcard rendering (`renderWordCard`) in two
  directions: `en-ru` (self-graded reveal card) and `ru-en` (typed answer, auto-checked via
  `isAnswerCorrect` from `js/exercises.js`, so pages using `srs.js` must also load `js/exercises.js`).
  The review queue mixes two card kinds — `{kind:"word", ref: wordKey}` and `{kind:"other", ref: mistakeId}`
  (a chat-import correction with no matching topic, see `js/chat-import.js`) — behind one shared surface:
  `applySm2(card, quality)` is the pure SM-2 step, `gradeWordCard`/`gradeOtherMistake` apply it to the
  right collection, and `gradeReviewItem(progress, item, quality)` is what callers actually use, since it
  dispatches on `item.kind` so `lesson.js`/`words.js` never need to branch themselves. Likewise
  `renderReviewCard()` (aliased as `renderWordCard()` for the name callers already use) dispatches to
  `renderEnRu`/`renderRuEn` for words or `renderMistakeCard` for an "other" card, all three built on the
  shared `renderRevealCard()` flip-card shell, which now also takes an optional extra front-row button
  (used for the word-card-only "Уже знаю" / `markWordKnown()`: jumps the card's interval straight to
  `RULES.words.knownInterval` instead of running SM-2, and reports `{alreadyApplied: true}` in its result
  so `lesson.js`/`words.js` know not to call `gradeReviewItem()` again — the same convention `skippedMissing`
  already used). `renderRuEn` also offers "Мой ответ тоже верный" on a wrong answer, mirroring
  `exercises.js`'s dispute button: accepting it still asks for a difficulty grade (quality is real, not
  assumed) and tags the result `{disputed: true, answer}`, which `lesson.js`/`words.js` push onto
  `progress.disputed` as `{kind: "word", ref, wordEn, wordRu, answer, date}` — distinct from an exercise
  dispute's `{kind: "exercise", id, answer, date}`; `settings.js`'s disputed-answers list branches on
  `d.kind` to render either shape. `pickReviewItems()`/`wordCountForMinutes()` build the
  due-card queue consumed by both the daily lesson (front-loaded into `js/planner.js`'s `buildLesson()`
  output, sized by `RULES.lesson.wordsShare` / `RULES.words.secondsPerCard`) and the standalone review
  flow on `words.html` — don't rebuild queue-selection logic at a call site; extend `pickReviewItems()`
  instead, the way both of those already do. `enrollNewWords()` is the
  other half: the built-in dictionary (`data/words/*.js`) never enters the review queue on its own — this
  function pulls in up to `RULES.words.newWordsPerDay` not-yet-queued words at or below the learner's
  level (closest to the learner's own `effectiveVocabLevel()` first, then downward — so a learner whose
  vocab level is already B2 gets B2 words before ever being offered A1 ones) each day, and is called from
  every page that shows or uses the queue (`index.html`, `lesson.html`'s `showStart()`, `words.html`'s
  load handler). It returns 0 immediately when `progress.settings.pauseNewWords` is true (default is now `false` for new progress; saved progress keeps its old value) and also when the overdue backlog (words + «Мои ошибки» cards) is ≥ `RULES.words.autoPauseDue` (30) — an automatic pause that lifts itself once the backlog is cleared; toggled on
`settings.html`, which also has «Разложить накопившееся по дням» — `onSpreadDue()` in `js/pages/settings.js`
re-dates overdue word/«other» cards at `RULES.words.newWordsPerDay` per day starting today, no data lost). The daily cap counts *all* cards added that day (`card.added === today`), including ones
  the learner typed in manually — so a big manual/chat-import batch on a given day correctly suppresses
  that day's auto-enrollment instead of piling on top of it.
- **`js/story.js`** — `renderStory(container, story, {draft, onDraft, onDone})` draws one whole story (inputs inline, verb box whose chips grey out when used / go red when the same verb is typed in two gaps — a soft warning, checking is never blocked; `storyVerbOf()` maps typed text to a box verb by scanning tokens right-to-left against `forms`). "Проверить всё" grades every gap with `isAnswerCorrect` (so contractions etc. work, `js/exercises.js` must be loaded), shows per-gap fixes, and offers "Мой ответ тоже верный" per gap. `applyStoryResults(progress, story, results)` is the one place that records a finished story: `applyAnswerToTopic()` per gap on that gap's own `topic` (disputed gaps skip it and go to `progress.disputed` as `{kind:"exercise", id:"story-…#n", …}`), `progress.stories[id]`, `recordActivity`. Used by both `lesson.js` and `js/pages/stories.js` (the free-practice page `stories.html`, with its own draft key). `js/planner.js`: `isStoryDue()` (a lesson records `stories: [ids]`; due again after `RULES.lesson.storyEvery − 1` story-less lessons, first one after the 2nd lesson), `pickStory()` (unseen first, then most weak-topic gaps, then least recently seen; level ≤ working level, +1 if next level unlocked), and `buildLesson()` appends one `{kind:"story", storyId}` item last, only if the lesson has ≥ `RULES.lesson.storyMinExercises` slots and no reading text, subtracting the story's gap count from `exerciseTotal`. In `lesson.js` a story is ONE item ("N of M") whose gaps are pushed to `lesson.results` as ordinary `kind:"exercise"` results with id `story-…#n` (so the finish screen, topic stats and `findExerciseForSummary()` treat them like exercises); typed-but-unchecked answers are kept in `lesson.storyDraft`.
- **`js/verbs.js`** + **`js/pages/verbs.js`** + **`js/pages/verbs-train.js`** — the «Неправильные глаголы» section (`verbs.html`, nav item «Глаголы»). Reference tab (`pages/verbs.js`): search, tier / group filters, 🔊 on every form, "Скрыть V2 / V3 / перевод" self-test (click a hidden cell to reveal it). Training tab (`pages/verbs-train.js`, UI only) sits on the logic in `js/verbs.js`: `pickVerbSession()` (weak/overdue first, then never-tried, then least recently seen), `buildVerbQuestion(v, mode)` for modes `both` / `form` / `choice` / `error` (+ `mix`), `gradeVerbQuestion(q, inputs)` (every variant in `past`/`pp` is accepted; `error` also accepts the whole corrected sentence), `wrongForms(v, slot)` (the typical mistakes used as distractors / planted errors: regularised maked-goed-runned, the other slot's form gone-for-went, double marking wented, …; never contains a correct form), and `recordVerbAnswer()`. Progress is `progress.verbs[inf]` = an SM-2 card (`applySm2` from `js/srs.js`) plus `right`/`wrong`/`lastCorrect`; "learned" = `interval >= RULES.verbs.learnedInterval`, "weak" = last answer wrong or overdue, "due" = tried and `due <= today`. A correct answer on the same day as the previous review does not advance the interval (otherwise three sessions in a row "learn" a verb in one day); a wrong one always resets it. `recordVerbAnswer()` — called once per verb per session, at "Далее" / "Мой ответ тоже верный" — also calls `applyAnswerToTopic()` on topic `irregular-verbs` (disputed answers don't move the topic; they go to `progress.disputed` as `{kind:"verb", inf, ru, answer, expected, date}`, rendered by `settings.js`). `index.html` shows a link plus "К повторению сегодня: N глаголов" via `verbStats()`. `progress.verbs` is part of the normal JSON backup; `normalizeProgress()` gives old backups an empty `{}`.
- **Goal-driven vocabulary (work / films and games / travel)** — `vocab-work` (A2) now has 25 graded exercises (`v-work-008…025`: salary vs wage, CV, hire, part-time, work FOR/AS, `work` uncountable, appointment vs meeting) and an expanded explanation; the new A2 topic `vocab-films-games` (24 exercises `v-fg-001…024`: plot/character/episode vs season/genre/review/graphics/level/download, -ed vs -ing) lives at the end of `data/topics.js`; 33 related words were added to the ends of `data/words/{a2,b1}.js` (tags `films`, `games`, `work`, `travel`) and 2 checkpoint questions (`cp-v-a2-9/10`).
- **`js/speaking.js`** + **`js/pages/speaking.js`** — раздел «Говорение» (`speaking.html`, nav «Говорение»; shadowing: listen → repeat → record yourself → compare → self-rate). Optional speech recognition (OFF by default, `progress.settings.speechRecognition`, toggled on `speaking.html` itself): the browser's `SpeechRecognition`/`webkitSpeechRecognition` listens to the phrase (`rec.lang` = `settings.speechAccent`, `maxAlternatives = 5`), `compareSpoken()` in `js/speaking.js` aligns the heard words with the phrase (`normalizeAnswer` tokens, longest common subsequence, best alternative wins) and returns matched/missed/extra words, a percent and a SUGGESTED quality (`RULES.speaking.recogGood` 90 / `recogOk` 70) — the suggested grade button is only highlighted (`.suggested`), the learner still decides; the percent is stored as `progress.speaking[id].lastMatch`. **Privacy:** in Chrome this sends audio to Google's recognition server — the only place sound leaves the browser, hence the explicit opt-in and the warning text; never turn it on by default. Without it the learner rates themselves («Не получилось / Почти / Получилось» = `RULES.speaking.quality*`), recordings stay in page memory (`MediaRecorder` blob, never saved or sent; needs a secure context — https, localhost or `file://`). Phrases come from `speakingPool()`: the learner's corrected sentences (`progress.otherMistakes[].correct`, ids `om:<id>`) first, then dictation phrases (`type: "listen"`, `q` + `ru`, ids `ex:<id>`) of topics up to the working level. `progress.speaking[id]` is an SM-2 card (`applySm2`, so `srs.js` must be loaded); `gradeSpeaking()` also calls `recordActivity({words: 1})` so a phrase counts like a word card toward the streak. `pickSpeakingSession()` = due first, then new, learner's own mistakes ahead within each group. `normalizeProgress()` gives old backups an empty `{}`.
- **`data/writing.js`** + **`js/writing.js`** + **`js/pages/writing.js`** — «Письмо по шаблону» (`writing.html`, nav «Письмо»; open a task via `writing.html#wr-a2-plans`). `DATA.writing` = 11 tasks A2–B2 (`{id wr-<level>-<name>, level, title, prompt, minWords/maxWords, topics, steps[{title,hint}], phrases[{en,ru}], checks[{text, pattern, min?, forbid?}]}`; format in the header of `data/writing.js`; `validateWritingData()` in `js/validate.js` also compiles every regex). `DATA.writingPitfalls` = heuristic «проверьте» hints built from the learner's real repeating mistakes (`journal.md`: meet with, go to shopping, in night, been in, didn't finished, had went, when I'll…, does listening, lowercase I…); they are tips, never errors — keep them free of false positives (test on correct sentences when adding one). The site only counts words, runs `checks`, shows pitfalls live and keeps `progress.writing[id]` (`draft` autosaved ~600 ms, `text/times/words/checksPassed` on «Готово»; a finished text counts as `RULES.writing.activityPoints` word cards in `recordActivity`). Real grammar checking is done by Claude in chat: «Скопировать для проверки в чате» builds the prompt with `buildWritingClaudeText()` → `buildClaudeText(taskLines)` (now lives in `js/chat-import.js`, shared with `topics.html`, which therefore loads that file) and asks for WHOLE-sentence `wrong`/`correct` pairs, which come back through chat-import into «Мои ошибки». `normalizeProgress()` gives old backups an empty `writing: {}`.
- **Header on phones** — with 13 nav items the wrapped header took ~216 px (a quarter of a phone screen). At ≤ 600 px `.nav` is now a single horizontally scrollable row with a faded right edge (header ≈ 97 px) and `renderHeader()` scrolls the active item into view. `.header-inner` MUST be `flex-wrap: nowrap` there: in a wrapping column flex container the line width is taken from the content (the 1157 px menu), which made the whole page wider than the screen. Checked at 375 px on all 13 pages (no horizontal overflow).
- **`js/common.js`** — shared chrome: nav header (`NAV_ITEMS`), `escapeHtml`/`richText` (safe HTML +
  `**bold**` markup), `shuffle`, `formatDate`, topic/exercise lookup helpers. Runs `renderHeader()` and
  `validateData()` on `DOMContentLoaded` for every page.
- **`js/speech.js`** — English pronunciation via the browser's own `window.speechSynthesis` (no external
  TTS service, no library). `speakButtonHtml(text, title?)` returns a `<button class="speak-btn"
  data-speak="...">🔊</button>`; callers never bind a click handler themselves — one delegated
  `document`-level click listener in this file catches every `.speak-btn`, including ones inserted later
  via `innerHTML`, and calls `speak()`. Blank markers (`___`) are replaced with `...` before speaking
  (`speakableText()`) both so it doesn't read oddly and so a not-yet-answered exercise question can't leak
  its answer through audio. `speak()` reads accent/rate from `progress.settings.speechAccent` (`"en-US"` |
  `"en-GB"`) and `speechRate` (`"normal"` | `"slow"`, the latter → `rate: 0.7`), both editable on
  `settings.html` and persisted like any other setting. If `window.speechSynthesis` doesn't exist, or no
  installed voice's `lang` starts with `en` (checked via `hasEnglishVoice()`, re-checked on
  `onvoiceschanged` since Chrome loads the voice list asynchronously), every `.speak-btn` is hidden via a
  `tts-unavailable` class this file toggles on `document.body`, and `settings.js`'s `renderTts()` shows an
  explanation instead of the accent/rate chips. Speech is **never** triggered automatically — only ever
  from a `.speak-btn` click. Loaded right after `js/common.js` (needs `escapeHtml`) on every page that can
  render a `.speak-btn`: `topics.html`, `words.html`, `lesson.html`, `settings.html`.
- **`js/pages/*.js`** — one controller per HTML page (`index` has its logic inline in `index.html` instead
  of a separate file; the rest are `topics.js`, `test.js`, `lesson.js`, `words.js`, `checkpoint.js`,
  `progress.js`, `settings.js`), each wiring up that page's DOM and calling into the shared logic files
  above. An in-progress test or lesson is persisted separately from `progress` (own `localStorage` keys,
  e.g. `RUN_KEY`/`LESSON_KEY` in `js/pages/test.js`/`checkpoint.js`/`lesson.js`) so a learner can close the
  tab mid-session and resume later. `progress.js` is read-only — it just aggregates and formats
  already-computed `progress` fields for display, no state changes. `settings.js` owns everything that
  isn't covered by a more specific file: the minutes-per-day and vocab-level pickers, JSON backup
  (download raw `progress`; restore via `normalizeProgress()` + `looksLikeProgressBackup()` sanity check
  before overwriting), the chat-import file picker, and the disputed-answers / `otherMistakes` management
  lists (both support per-item delete, not just the bulk "clear all").
- **`css/style.css`** — single stylesheet; theme colors are CSS custom properties on `:root`, with a
  `prefers-color-scheme: dark` override block. System fonts only (no web fonts).

### Adding content
**Every graded exercise (`choice` / `fill` / `fix` / `translate`) must have an `explain`** — one or two Russian sentences saying WHICH rule decides the answer and, where useful, the typical trap (all 1791 have one; the last 486 were written in a batch). It is shown after the answer, right or wrong (`js/exercises.js`, `**bold**` markup is rendered). Dictations (`listen`) don't need one: they show `ru` instead. `validateData()` deliberately does not enforce it (a red banner would be intrusive), so check with a quick script that `exercises.filter(e => e.type !== "listen" && !e.explain)` is empty after adding content.

Follow the format comment block at the top of each `data/**/*.js` file. Every new record needs a unique
`id` (never reused/renamed once shipped, since progress keys off it) and a valid `topic` reference. After
editing, open any page in a browser — `validateData()`'s red banner will immediately flag structural
mistakes (bad topic id, `choice` answer not among `options`, duplicate id, etc.).

### Verifying content and logic changes
Since there's no test runner, changes to `js/rules.js`, `js/planner.js`, `js/exercises.js`, or
`js/level.js`, or bulk additions to `data/**`, should be sanity-checked by loading the relevant files into
a Node `vm.Script`/`vm.createContext` with a minimal fake `document`/`localStorage`/`window`, then calling
functions like `validateData()`, `checkExerciseAnswer()`, `buildLesson()`, or `evaluateTest()` directly
and asserting on the results (this is how the current test/lesson/planner logic was validated during
development — there's no committed script for it, write one ad hoc under a temp/scratch location).

### Terminology / naming conventions
- Topic ids: kebab-case, e.g. `past-simple-vs-present-perfect`.
- Exercise ids: short prefix + number, e.g. `pres-s-001`, `cond1-003` — grep existing files for a topic's
  prefix before adding more so ids stay unique and sequential.
- CEFR levels are always one of `LEVELS = ["A1","A2","B1","B2","C1"]`; use `levelIndex()`/`LEVELS.indexOf`
  rather than string comparison when ordering.

## Project status (see README.md "Порядок работы" for the full staged plan)

Built so far: topic catalog + reference page (`topics.html`), adaptive placement test (`test.html`),
adaptive daily lessons with integrated word review (`lesson.html`), manual word entry plus standalone
spaced-repetition review (`words.html`), biweekly checkpoint retest (`checkpoint.html`), a progress
dashboard with a level-history chart (`progress.html`), and JSON backup/restore plus the Claude-chat-import
feature on `settings.html` (format documented in README.md — a `chat-import` JSON with `mistakes`/`words`
arrays keyed by topic id, matched against `data/topics.js` ids, falling back to an SRS-reviewed
`otherMistakes` entry). English pronunciation (`js/speech.js`, built on `window.speechSynthesis` — no
external service, no library) is available as a 🔊 button on word cards, `words.html`'s word list and its
free-form "listen to anything" input, exercise questions/answers, and `topics.html`'s examples, with
accent (en-US/en-GB) and speed settings on `settings.html`; every button self-hides when the browser has
no English voice. Built on the same API, `type: "listen"` dictation exercises (`data/exercises/listen-{a2,
b1}.js`, 122 phrases total) speak a phrase the learner transcribes, graded like `fix`/`translate`; up to 2
appear in a daily lesson when TTS is available (`js/planner.js`'s `pickListenItems()`), none otherwise.
Irregular verbs: 122-verb reference + SM-2 training on `verbs.html` (see `js/verbs.js` above). Mini-stories: 18 stories × 9 gaps (4 past, 2 present, 3 perfect, 2 future, 2 word-formation, 1 passive, 4 B2) in `data/stories/`, shown on `stories.html` and every 4th lesson. **Verified totals (final check, 2026-11-09):** 80 topics, 2063 exercises (1791 graded + 272 dictation: A1 239 / A2 795 / B1 730 / B2 233 / C1 66 per topic level), 692 words (A1 129 / A2 208 / B1 193 / B2 94 / C1 68), 55 texts (27 reading + 28 listening dialogues), 18 stories, 122 verbs, 58 placement + 123 checkpoint questions, 11 writing tasks; every topic with exercises has ≥ 700 characters of theory and ≥ 3 examples, every topic except `other` is covered by a test question. The older volume notes below are historical (written when the site only had A1–B1: ~1250 exercises) —
every A2 and B1 *grammar* topic now has 15 graded exercises each (A1 and the A2/B1 *vocabulary* topics are
still at the original, lower count). The present-tense cluster got extra drilling aimed at the learner's
main mistake — mixing the "sets" of Simple and Continuous ("are study", "does listening", "is starts"):
`present-simple-vs-continuous` has 56 graded (+ dictation), `present-simple` 36, `present-continuous` 23,
`adverbs-frequency` 27, `word-order` 18 (incl. "Составь предложение: A — b — c" `translate` items with every
valid word order listed in `answers`), and the new A2 topic `stative-verbs` (know/like/want/need/belong…,
15 exercises in `a2.js`; it also appears automatically in the topic-id list for Claude chat on `topics.html`,
which is built from `DATA.topics`). A second batch targeted the learner's next set of mistakes: two new A2 topics, `irregular-verbs` (30 exercises, ~60 verbs grouped by sound/pattern in the explanation) and `spelling-rules` (25; doubling before -ing/-ed, -ies/-es), plus extra exercises for `present-simple` (noun subjects: "Dad belongs"), `present-simple-vs-continuous` (temporary vs permanent), `past-continuous` ("Were you…", never "Was you"; 25 total), `past-simple` (27; the first half of the sentence decides the verb: sold/lost/gave) and `used-to` (25; "now … but he used to …" contrast, `didn't use to` and `never used to` are both accepted). About 40% of those additions are `fix` exercises. A third batch ("Fun and games" lesson): new topics `word-patterns` (A2 grammar: interested **in**, popular **with**, a game **against**, feel like + -ing; 25 exercises, prefix `wp-`), `prepositional-phrases` (A2 grammar: for fun, on stage, in time for vs on time; 15, `pprep-`) and `vocab-sports-games` (A2 vocabulary: captain, beat vs win, take part in, folk music; 20, `v-sport-`); `word-formation` (B1 vocabulary, now 32) got a part-of-speech-by-position rule + suffix table (singer ≠ signer, musician, collector vs collection) and `phrasal-verbs-common` (B1, now 30) a particles block (give up, take up, turn up/down, carry on, join in, eat out, send off). Their exercises live in `a2.js` (A2 topics) and `b1.js` (B1 topics); 68 related words were added to `data/words/{a2,b1}.js` (tags `sport`/`music`/`games`/`hobbies`) and 10 dictations to `listen-a2.js`. A fourth batch (Units 4–6, Present/Past Perfect and «Learning and doing»): new B1 topics `present-perfect-simple-vs-continuous` (33 incl. 3 dictations; prefix `ppsvc-`; the contrast result/process, negation kept, `just/already/also` between have and V3/been, no continuous for states and one-off events), `past-perfect-continuous` (17; `pastpc-`) and `vocab-education` (25; `v-edu-`), plus extra exercises for `present-perfect` (+12), `past-perfect` (+12, irregular V3), `verb-patterns` (+8, finish/enjoy/avoid/keep + -ing), `prepositional-phrases` (+12: by heart, for instance, in conclusion, in fact, in favour of, in general), `phrasal-verbs-common` (+10: cross out, look up, point out, read out, rip up, rub out, turn over, write down), `word-formation` (+20), `word-patterns` (+20) and `spelling-rules` (+6); 3 mini-stories in `data/stories/perfect.js` (a gap answer may be typed in contracted form glued to the word before the gap — `storyAnswerOk()` in `js/story.js`: "They ___" → "'ve been looking"); 10 dictations in `listen-b1.js`; 61 words in `data/words/{a2,b1,b2}.js`. ~619 built-in words spread A1–C1 (`data/words/*.js`), 14 reading
passages (2 A1, 6 A2, 6 B1) for lessons and 6 for checkpoints (plus the placement test's own 5). GitHub
Pages deployment is documented step-by-step in README.md ("Как разместить сайт на GitHub Pages") —
everything in the original staged plan is done. Remaining open item, not part of the original plan: A1
grammar and the A1/A2/B1 *vocabulary* topics (as opposed to grammar) are still at their original lower
exercise counts (6–8 each) and could get the same 15-per-topic treatment later if needed.

Fifth batch (Unit 7, future forms): new B1 topic `future-forms` (prefix `ff-`, 40 exercises, 16 `fix`; every `fill` states the required form in `q` — "Используй Present Continuous / Present Simple / be going to / will" — because the learner's mistake was ignoring the instruction), extra exercises for `future-will` (+8, `will-016…`), `phrasal-verbs-common` (+14, `phr-041…`; `fill` shows the verb's first letter in `hint`), `prepositional-phrases` (+10, `pprep-028…`; `choice` asks for the *word* in by heart / for instance / in favour of, one item asks for the preposition on purpose), `word-patterns` (+6), `word-formation` (+10), `vocab-education` (+5) and `spelling-rules` (+5); 10 dictations `listen-b1-051…060`; 2 future stories; 6 words in `data/words/b1.js`. Small fixes: `ppsvc-013/014` accept the simple forms, `v-edu-003/015` rewritten, `build` example in `data/verb-examples.js`, and `gradeVerbQuestion()` (mode `form`) accepts the homonym pair when the given word is another verb's infinitive (lie→"lay": lie/lain **or** lay/laid).

Sixth batch (Units 8–9, prepositions and «Coming and going»): new A2 topic `prepositions-time-place` (prefix `ptp-`, 45 graded in `a2.js` — 15 time / 15 place / 15 motion, 18 `fix`; every `fill` says «Нужен именно предлог»; rules: on + date/day(+part of day), at + midday/midnight/night/Easter, in + part of day/month/year; on the beach/mountain/island/coast, at the airport/door; motion = to; arrive in city / at airport; ask sb **for** sth) — it sits alongside the older `prepositions-time` (A2) and `prepositions-place` (A1), which stay untouched. Extra exercises: `phrasal-verbs-common` +12 (`phr-055…066`, the `fill` states the tense: «Используй Past Simple: The man ___ (get in) …» → got in; `set off` is unchanged in the past), `prepositional-phrases` +14 (`pprep-038…051`: by air/sea/bus/car, on foot, on board, on holiday, on schedule, on the coast; `fill` takes the whole phrase with a letter hint), `word-formation` +25 (`wf-063…087`, base word in `hint`, part of speech decided from context), `word-patterns` +8 (`wp-052…059`), `vocab-travel` +25 (`v-travel-008…032`, topic text now grouped airport / on the way / accommodation); 10 dictations `listen-a2-063…072`; 2 word-formation stories (`data/stories/wordformation.js`); 18 words in `data/words/{a2,b1}.js` (words already present — abroad, accommodation, convenient, crowded, delay, flight, journey, luggage, platform — were not duplicated).

Seventh batch (Unit 10, the passive): new B1 topic `passive-simple` (prefix `pas-`, 45 graded in `b1.js`: 15 Present Simple / 15 Past Simple / 10 will / 5 choose-the-tense, 18 `fix`; every `fill`/`translate` states the form — «Используй Passive, Past Simple», «Перепиши в пассиве», «Составь предложение (Passive, will): A — b — c» with every valid word order in `answers`; `fix` targets «is cleans», «was broke», «was steal», «will be invited» (active needed → will invite), «The window broken» and a missing be in a question). It deliberately coexists with the older `passive-present-past` (B1, `pass-001…068`, prefix and ids unchanged) — two topics now cover the same grammar. Review-3 top-ups: `future-forms` +10 (`ff-041…050`, one correct choice among 4, or the form named in `q`), `phrasal-verbs-common` +10 (`phr-067…076`: get into / out of, set off, take off, go away, look after, turn up; `fill` has the first letter in `hint` and the tense in `q`), `prepositional-phrases` +6 (`pprep-052…057`), `word-patterns` +6 (`wp-060…065`: provide … WITH, ask … FOR, prepare FOR), `word-formation` +10 (`wf-088…097`), `irregular-verbs` +6 (`irr-031…036`: choosed/flied/stealed/breaked caught by `fix`); 10 dictations `listen-b1-069…078`; one passive story (`data/stories/passive.js`, «The Missing Painting», included on lesson/settings/stories/verbs.html); 16 words (b1: announce, thief, robbery, deliver, damage, produce, destroy, invent, cancel; b2: burglar, theft, publish, arrest, install, manufacture; a2: steal). Verified in a Node `vm` run: `validateData()` clean, every `answers` entry accepted and every `fix` original rejected, `buildLesson()` ×1000 with no errors.

Eighth batch («База B1», 2026-11-11 — first stage of the road-to-B2 plan): new topic `mixed-tenses` (level A2 at the learner's request so it enters lessons right away, although its exercises sit in `b1.js` and its two checkpoint questions are B1; prefix `mt-`, 44 graded; the tense is NOT named — 4-option `choice` across tenses, `fill` with hint «go — время выбери сам», `fix` on the learner's recurring errors: have seen yesterday, live here since, didn't finished, had went, when I'll, been in; prefix `mix-` was already taken by `mixed-conditionals`). Thin B1 topics topped up to ~30 graded each: `first-conditional` (`cond1-016…030`), `second-conditional` (`cond2-016…030`), `reported-speech` (`rep-016…032`), `relative-clauses` (`rel-016…031`), `modals-deduction` (`deduct-016…032`, present deduction only — past forms belong to B2 `modals-past`), `future-time-clauses` (`ftc-016…031`), `linking-words` (`link-016…032`), `vocab-feelings-character` (`v-feel-007…024`), `confusing-words` (`conf-008…027`: lend/borrow, say/tell, leave/forget + place, rise/raise, actually). 398 B1 words appended to `data/words/b1.js` (new tags `health`, `home`, `city`, `nature`, `tech`, `money`, `people`, `communication`, `verbs`, `adjectives`, `nouns`, `linkers`; every example contains the word verbatim, so all of them work as cloze cards). 2 checkpoint questions `cp-g-b1-19/20`. New totals: 81 topics, 2258 exercises (1986 graded), 1090 words (B1 591), 125 checkpoint questions. Still thin at B1 (15 graded): `question-tags`, `so-such`, `present-perfect-continuous`. Planned next stages: (2) missing B1–B2 grammar topics, B2 vocabulary topics, 400–600-word texts, B2 words; (3) key-word transformations / open cloze exercise types, B2 writing and speaking tasks, a more precise checkpoint (more questions at the boundary level, B2 reading).

Ninth batch («Этап 2», 2026-11-11 — second stage of the road-to-B2 plan): 15 new topics, 16 graded exercises each (240 total; no dictations yet). B1 grammar (exercises in `b1.js`): `indirect-questions` (`indq-`), `subject-questions` (`subq-`), `both-either-neither` (`quant-`). B2 grammar (in `b2.js`): `be-get-used-to` (`bgu-`), `gerund-infinitive-meaning` (`gim-`: remember/forget/stop/try/regret), `causative-have` (`caus-`), `unless-as-long-as` (`cnd-`, incl. in case / provided that), `would-rather-had-better` (`rather-`, incl. it's time + past), `articles-advanced` (`artx-`; `art-b` was taken; a choice option «—» means no article), `non-defining-relative` (`ndr-`; no exercise depends on commas, because the checker ignores punctuation), `reporting-verbs` (`rverb-`), `phrasal-verbs-b2` (`phb-`). B2 vocabulary — the first B2 lexical topics: `collocations-b2` (`colb-`), `vocab-technology-media` (`v-tech-`), `vocab-environment-society` (`v-env-`). Each topic has 7–8 paragraphs of theory with ✗/✓ errors and 4–5 examples, and one checkpoint question (`cp-g-b1-21…23`, `cp-g-b2-11…19`, `cp-v-b2-7…9`). Four long B2 reading texts `read-b2-009…012` (440–457 words, 6 choice questions each with `explain`, incl. vocabulary-in-context and writer's-attitude questions; remote work, video games, overtourism, procrastination) in a new `DATA.texts.push` block at the end of `data/reading/texts.js`. 318 B2 words appended to `data/words/b2.js` (tags `work`, `society`, `environment`, `science`, `media`, `health`, `education`, `verbs`, `adjectives`, `nouns`, `linkers`). New totals: 96 topics, 2498 exercises (2226 graded), 1408 words (A1 129 / A2 208 / B1 591 / B2 412 / C1 68), 59 texts (31 reading + 28 dialogues), 140 checkpoint questions. Verified in a Node `vm` run: `validateData()` clean, all answers accepted, every `fix` original rejected, 900 lessons built without errors. Still open for stage 3: key-word-transformation / open-cloze exercise types, B2 writing and speaking tasks, long listening, B2 reading passages in the checkpoint, dictations and stories for the new topics.
