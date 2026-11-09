// =====================================================================
// Неправильные глаголы для раздела «Неправильные глаголы» (verbs.html).
//
// Формат записи:
// {
//   inf: "go",              // инфинитив (V1) — он же ID глагола, должен быть уникальным
//   past: ["went"],         // Past Simple (V2) — ВСЕ допустимые варианты (первый — основной)
//   pp: ["gone"],           // Past Participle (V3) — все допустимые варианты
//   ru: "идти, ехать",      // перевод
//   group: "ABC",           // группа по форме (см. VERB_GROUPS в js/data.js)
//   tier: 1,                // частотность: 1 — 50 самых частых, 2 — следующие 40, 3 — остальные
//   note: "",               // только для особых случаев
//   say: { inf, past, pp }  // (необязательно) как озвучить, если написание читается неверно
// }
//
// Группы (VERB_GROUPS):
//   AAA        — три формы одинаковые (cut–cut–cut)
//   AAB        — V1 = V2 (beat–beat–beaten)
//   ABA        — V1 = V3 (come–came–come)
//   ABB        — V2 = V3 (make–made–made)
//   ABB-ought  — V2 = V3 на -ought / -aught (buy–bought–bought)
//   ABB-t      — V2 = V3 на -t (send–sent–sent)
//   ABC        — три разные формы, особые (go–went–gone)
//   ABC-ew     — -ew / -own (know–knew–known)
//   ABC-iau    — i–a–u (sing–sang–sung)
//   ABC-en     — V3 на -en / -n (take–took–taken)
// =====================================================================

DATA.verbs.push(

  // ---------- AAA: все три формы одинаковые ----------
  { inf: "cut",       past: ["cut"],       pp: ["cut"],       ru: "резать",                  group: "AAA", tier: 1, note: "" },
  { inf: "let",       past: ["let"],       pp: ["let"],       ru: "позволять",               group: "AAA", tier: 1, note: "" },
  { inf: "put",       past: ["put"],       pp: ["put"],       ru: "класть, ставить",         group: "AAA", tier: 1, note: "" },
  { inf: "set",       past: ["set"],       pp: ["set"],       ru: "устанавливать, ставить",  group: "AAA", tier: 1, note: "" },
  { inf: "read",      past: ["read"],      pp: ["read"],      ru: "читать",                  group: "AAA", tier: 1, note: "Пишутся одинаково, но читаются по-разному: read /riːd/ — read /red/ — read /red/.", say: { inf: "reed", past: "red", pp: "red" } },
  { inf: "hit",       past: ["hit"],       pp: ["hit"],       ru: "ударять",                 group: "AAA", tier: 2, note: "" },
  { inf: "hurt",      past: ["hurt"],      pp: ["hurt"],      ru: "причинять боль, болеть",  group: "AAA", tier: 2, note: "" },
  { inf: "shut",      past: ["shut"],      pp: ["shut"],      ru: "закрывать",               group: "AAA", tier: 2, note: "" },
  { inf: "cost",      past: ["cost"],      pp: ["cost"],      ru: "стоить",                  group: "AAA", tier: 2, note: "" },
  { inf: "quit",      past: ["quit"],      pp: ["quit"],      ru: "бросать (занятие)",       group: "AAA", tier: 3, note: "" },
  { inf: "bet",       past: ["bet"],       pp: ["bet"],       ru: "держать пари",            group: "AAA", tier: 3, note: "" },
  { inf: "burst",     past: ["burst"],     pp: ["burst"],     ru: "лопнуть, прорваться",     group: "AAA", tier: 3, note: "" },
  { inf: "spread",    past: ["spread"],    pp: ["spread"],    ru: "распространять(ся)",      group: "AAA", tier: 3, note: "" },
  { inf: "split",     past: ["split"],     pp: ["split"],     ru: "расколоть, разделить",    group: "AAA", tier: 3, note: "" },
  { inf: "broadcast", past: ["broadcast"], pp: ["broadcast"], ru: "транслировать",           group: "AAA", tier: 3, note: "" },
  { inf: "upset",     past: ["upset"],     pp: ["upset"],     ru: "расстраивать",            group: "AAA", tier: 3, note: "" },

  // ---------- AAB: V1 = V2 ----------
  { inf: "beat",      past: ["beat"],       pp: ["beaten"],    ru: "побеждать, бить",         group: "AAB", tier: 2, note: "В V2 beat читается так же, как в инфинитиве (/biːt/); V3 — beaten." },

  // ---------- ABA: V1 = V3 ----------
  { inf: "come",      past: ["came"],      pp: ["come"],      ru: "приходить, приезжать",    group: "ABA", tier: 1, note: "" },
  { inf: "become",    past: ["became"],    pp: ["become"],    ru: "становиться",             group: "ABA", tier: 1, note: "" },
  { inf: "run",       past: ["ran"],       pp: ["run"],       ru: "бежать",                  group: "ABA", tier: 1, note: "" },
  { inf: "overcome",  past: ["overcame"],  pp: ["overcome"],  ru: "преодолевать",            group: "ABA", tier: 3, note: "" },

  // ---------- ABB-ought: -ought / -aught ----------
  { inf: "buy",       past: ["bought"],    pp: ["bought"],    ru: "покупать",                group: "ABB-ought", tier: 1, note: "" },
  { inf: "bring",     past: ["brought"],   pp: ["brought"],   ru: "приносить",               group: "ABB-ought", tier: 1, note: "" },
  { inf: "think",     past: ["thought"],   pp: ["thought"],   ru: "думать",                  group: "ABB-ought", tier: 1, note: "" },
  { inf: "teach",     past: ["taught"],    pp: ["taught"],    ru: "учить (кого-то), преподавать", group: "ABB-ought", tier: 2, note: "" },
  { inf: "catch",     past: ["caught"],    pp: ["caught"],    ru: "ловить",                  group: "ABB-ought", tier: 2, note: "" },
  { inf: "fight",     past: ["fought"],    pp: ["fought"],    ru: "драться, бороться",       group: "ABB-ought", tier: 2, note: "" },
  { inf: "seek",      past: ["sought"],    pp: ["sought"],    ru: "искать",                  group: "ABB-ought", tier: 3, note: "" },

  // ---------- ABB-t: V2 = V3 на -t ----------
  { inf: "leave",     past: ["left"],      pp: ["left"],      ru: "уходить, оставлять",      group: "ABB-t", tier: 1, note: "" },
  { inf: "feel",      past: ["felt"],      pp: ["felt"],      ru: "чувствовать",             group: "ABB-t", tier: 1, note: "" },
  { inf: "keep",      past: ["kept"],      pp: ["kept"],      ru: "держать, хранить",        group: "ABB-t", tier: 1, note: "" },
  { inf: "mean",      past: ["meant"],     pp: ["meant"],     ru: "значить, иметь в виду",   group: "ABB-t", tier: 1, note: "meant читается /ment/." },
  { inf: "meet",      past: ["met"],       pp: ["met"],       ru: "встречать, знакомиться",  group: "ABB-t", tier: 1, note: "" },
  { inf: "lose",      past: ["lost"],      pp: ["lost"],      ru: "терять, проигрывать",     group: "ABB-t", tier: 1, note: "" },
  { inf: "send",      past: ["sent"],      pp: ["sent"],      ru: "посылать, отправлять",    group: "ABB-t", tier: 1, note: "" },
  { inf: "build",     past: ["built"],     pp: ["built"],     ru: "строить",                 group: "ABB-t", tier: 1, note: "" },
  { inf: "spend",     past: ["spent"],     pp: ["spent"],     ru: "тратить, проводить (время)", group: "ABB-t", tier: 1, note: "" },
  { inf: "sleep",     past: ["slept"],     pp: ["slept"],     ru: "спать",                   group: "ABB-t", tier: 2, note: "" },
  { inf: "lend",      past: ["lent"],      pp: ["lent"],      ru: "одалживать (кому-то)",    group: "ABB-t", tier: 2, note: "" },
  { inf: "bend",      past: ["bent"],      pp: ["bent"],      ru: "гнуть, наклоняться",      group: "ABB-t", tier: 2, note: "" },
  { inf: "learn",     past: ["learnt", "learned"], pp: ["learnt", "learned"], ru: "учить, узнавать", group: "ABB-t", tier: 2, note: "learnt — британский вариант, learned — американский (в США — основной)." },
  { inf: "burn",      past: ["burnt", "burned"],   pp: ["burnt", "burned"],   ru: "гореть, жечь",    group: "ABB-t", tier: 2, note: "burnt — британский вариант, burned — американский." },
  { inf: "dream",     past: ["dreamt", "dreamed"], pp: ["dreamt", "dreamed"], ru: "мечтать, видеть сон", group: "ABB-t", tier: 2, note: "dreamt читается /dremt/, dreamed — /driːmd/." },
  { inf: "spell",     past: ["spelt", "spelled"],  pp: ["spelt", "spelled"],  ru: "писать по буквам", group: "ABB-t", tier: 2, note: "spelt — британский вариант, spelled — американский." },
  { inf: "deal",      past: ["dealt"],     pp: ["dealt"],     ru: "иметь дело; раздавать (карты)", group: "ABB-t", tier: 3, note: "" },
  { inf: "sweep",     past: ["swept"],     pp: ["swept"],     ru: "подметать",               group: "ABB-t", tier: 3, note: "" },
  { inf: "creep",     past: ["crept"],     pp: ["crept"],     ru: "ползти, красться",        group: "ABB-t", tier: 3, note: "" },
  { inf: "kneel",     past: ["knelt", "kneeled"],  pp: ["knelt", "kneeled"],  ru: "стоять на коленях, опускаться на колени", group: "ABB-t", tier: 3, note: "" },

  // ---------- ABB: V2 = V3 (остальные) ----------
  { inf: "have",      past: ["had"],       pp: ["had"],       ru: "иметь",                   group: "ABB", tier: 1, note: "" },
  { inf: "say",       past: ["said"],      pp: ["said"],      ru: "сказать, говорить",       group: "ABB", tier: 1, note: "said читается /sed/." },
  { inf: "make",      past: ["made"],      pp: ["made"],      ru: "делать, создавать",       group: "ABB", tier: 1, note: "" },
  { inf: "get",       past: ["got"],       pp: ["got", "gotten"], ru: "получать, становиться", group: "ABB", tier: 1, note: "gotten — американский вариант V3 (в британском — got)." },
  { inf: "find",      past: ["found"],     pp: ["found"],     ru: "находить",                group: "ABB", tier: 1, note: "" },
  { inf: "tell",      past: ["told"],      pp: ["told"],      ru: "рассказывать, сказать",   group: "ABB", tier: 1, note: "" },
  { inf: "hold",      past: ["held"],      pp: ["held"],      ru: "держать",                 group: "ABB", tier: 1, note: "" },
  { inf: "stand",     past: ["stood"],     pp: ["stood"],     ru: "стоять",                  group: "ABB", tier: 1, note: "" },
  { inf: "hear",      past: ["heard"],     pp: ["heard"],     ru: "слышать",                 group: "ABB", tier: 1, note: "heard читается /hɜːd/, как bird." },
  { inf: "pay",       past: ["paid"],      pp: ["paid"],      ru: "платить",                 group: "ABB", tier: 1, note: "" },
  { inf: "sit",       past: ["sat"],       pp: ["sat"],       ru: "сидеть",                  group: "ABB", tier: 1, note: "" },
  { inf: "understand", past: ["understood"], pp: ["understood"], ru: "понимать",            group: "ABB", tier: 1, note: "" },
  { inf: "win",       past: ["won"],       pp: ["won"],       ru: "выигрывать",              group: "ABB", tier: 1, note: "" },
  { inf: "sell",      past: ["sold"],      pp: ["sold"],      ru: "продавать",               group: "ABB", tier: 2, note: "" },
  { inf: "lead",      past: ["led"],       pp: ["led"],       ru: "вести",                   group: "ABB", tier: 2, note: "" },
  { inf: "shoot",     past: ["shot"],      pp: ["shot"],      ru: "стрелять",                group: "ABB", tier: 2, note: "" },
  { inf: "hang",      past: ["hung"],      pp: ["hung"],      ru: "вешать",                  group: "ABB", tier: 2, note: "О повешении человека говорят hang — hanged — hanged (правильный глагол)." },
  { inf: "feed",      past: ["fed"],       pp: ["fed"],       ru: "кормить",                 group: "ABB", tier: 2, note: "" },
  { inf: "lay",       past: ["laid"],      pp: ["laid"],      ru: "класть, накрывать",       group: "ABB", tier: 2, note: "lay (класть) — не то же, что lie (лежать): lie — lay — lain." },
  { inf: "shine",     past: ["shone"],     pp: ["shone"],     ru: "светить, сиять",          group: "ABB", tier: 3, note: "Когда shine = «начищать», глагол правильный: shined." },
  { inf: "dig",       past: ["dug"],       pp: ["dug"],       ru: "копать",                  group: "ABB", tier: 3, note: "" },
  { inf: "swing",     past: ["swung"],     pp: ["swung"],     ru: "качаться, размахиваться", group: "ABB", tier: 3, note: "" },
  { inf: "stick",     past: ["stuck"],     pp: ["stuck"],     ru: "приклеивать, втыкать",    group: "ABB", tier: 3, note: "" },
  { inf: "strike",    past: ["struck"],    pp: ["struck"],    ru: "ударять",                 group: "ABB", tier: 3, note: "" },
  { inf: "slide",     past: ["slid"],      pp: ["slid"],      ru: "скользить",               group: "ABB", tier: 3, note: "" },
  { inf: "light",     past: ["lit", "lighted"], pp: ["lit", "lighted"], ru: "зажигать",     group: "ABB", tier: 3, note: "Чаще lit; lighted — реже." },
  { inf: "bleed",     past: ["bled"],      pp: ["bled"],      ru: "кровоточить",             group: "ABB", tier: 3, note: "" },
  { inf: "flee",      past: ["fled"],      pp: ["fled"],      ru: "бежать, спасаться бегством", group: "ABB", tier: 3, note: "" },

  // ---------- ABC-ew: -ew / -own ----------
  { inf: "know",      past: ["knew"],      pp: ["known"],     ru: "знать",                   group: "ABC-ew", tier: 1, note: "" },
  { inf: "grow",      past: ["grew"],      pp: ["grown"],     ru: "расти, выращивать",       group: "ABC-ew", tier: 1, note: "" },
  { inf: "draw",      past: ["drew"],      pp: ["drawn"],     ru: "рисовать, тянуть",        group: "ABC-ew", tier: 1, note: "" },
  { inf: "throw",     past: ["threw"],     pp: ["thrown"],    ru: "бросать",                 group: "ABC-ew", tier: 2, note: "" },
  { inf: "fly",       past: ["flew"],      pp: ["flown"],     ru: "летать",                  group: "ABC-ew", tier: 2, note: "" },
  { inf: "blow",      past: ["blew"],      pp: ["blown"],     ru: "дуть",                    group: "ABC-ew", tier: 2, note: "" },
  { inf: "withdraw",  past: ["withdrew"],  pp: ["withdrawn"], ru: "снимать (деньги), отзывать", group: "ABC-ew", tier: 3, note: "" },

  // ---------- ABC-iau: i – a – u ----------
  { inf: "begin",     past: ["began"],     pp: ["begun"],     ru: "начинать(ся)",            group: "ABC-iau", tier: 1, note: "" },
  { inf: "drink",     past: ["drank"],     pp: ["drunk"],     ru: "пить",                    group: "ABC-iau", tier: 2, note: "" },
  { inf: "sing",      past: ["sang"],      pp: ["sung"],      ru: "петь",                    group: "ABC-iau", tier: 2, note: "" },
  { inf: "swim",      past: ["swam"],      pp: ["swum"],      ru: "плавать",                 group: "ABC-iau", tier: 2, note: "" },
  { inf: "ring",      past: ["rang"],      pp: ["rung"],      ru: "звонить",                 group: "ABC-iau", tier: 2, note: "" },
  { inf: "sink",      past: ["sank"],      pp: ["sunk"],      ru: "тонуть",                  group: "ABC-iau", tier: 2, note: "" },
  { inf: "shrink",    past: ["shrank"],    pp: ["shrunk"],    ru: "садиться (об одежде), сокращаться", group: "ABC-iau", tier: 3, note: "" },

  // ---------- ABC-en: V3 на -en / -n ----------
  { inf: "take",      past: ["took"],      pp: ["taken"],     ru: "брать",                   group: "ABC-en", tier: 1, note: "" },
  { inf: "see",       past: ["saw"],       pp: ["seen"],      ru: "видеть",                  group: "ABC-en", tier: 1, note: "" },
  { inf: "give",      past: ["gave"],      pp: ["given"],     ru: "давать",                  group: "ABC-en", tier: 1, note: "" },
  { inf: "write",     past: ["wrote"],     pp: ["written"],   ru: "писать",                  group: "ABC-en", tier: 1, note: "" },
  { inf: "speak",     past: ["spoke"],     pp: ["spoken"],    ru: "говорить",                group: "ABC-en", tier: 1, note: "" },
  { inf: "break",     past: ["broke"],     pp: ["broken"],    ru: "ломать",                  group: "ABC-en", tier: 1, note: "" },
  { inf: "drive",     past: ["drove"],     pp: ["driven"],    ru: "водить (машину)",         group: "ABC-en", tier: 1, note: "" },
  { inf: "wear",      past: ["wore"],      pp: ["worn"],      ru: "носить (одежду)",         group: "ABC-en", tier: 1, note: "" },
  { inf: "choose",    past: ["chose"],     pp: ["chosen"],    ru: "выбирать",                group: "ABC-en", tier: 1, note: "" },
  { inf: "eat",       past: ["ate"],       pp: ["eaten"],     ru: "есть, кушать",            group: "ABC-en", tier: 1, note: "ate читается /et/ (британский) или /eɪt/ (американский)." },
  { inf: "fall",      past: ["fell"],      pp: ["fallen"],    ru: "падать",                  group: "ABC-en", tier: 2, note: "" },
  { inf: "forget",    past: ["forgot"],    pp: ["forgotten"], ru: "забывать",                group: "ABC-en", tier: 2, note: "" },
  { inf: "wake",      past: ["woke"],      pp: ["woken"],     ru: "просыпаться, будить",     group: "ABC-en", tier: 2, note: "" },
  { inf: "ride",      past: ["rode"],      pp: ["ridden"],    ru: "ездить верхом, на велосипеде", group: "ABC-en", tier: 2, note: "" },
  { inf: "hide",      past: ["hid"],       pp: ["hidden"],    ru: "прятать(ся)",             group: "ABC-en", tier: 2, note: "" },
  { inf: "bite",      past: ["bit"],       pp: ["bitten"],    ru: "кусать",                  group: "ABC-en", tier: 2, note: "" },
  { inf: "shake",     past: ["shook"],     pp: ["shaken"],    ru: "трясти",                  group: "ABC-en", tier: 2, note: "" },
  { inf: "steal",     past: ["stole"],     pp: ["stolen"],    ru: "красть",                  group: "ABC-en", tier: 2, note: "" },
  { inf: "rise",      past: ["rose"],      pp: ["risen"],     ru: "подниматься",             group: "ABC-en", tier: 2, note: "rise — подниматься (сам); raise — поднимать что-то (правильный глагол)." },
  { inf: "tear",      past: ["tore"],      pp: ["torn"],      ru: "рвать",                   group: "ABC-en", tier: 2, note: "" },
  { inf: "freeze",    past: ["froze"],     pp: ["frozen"],    ru: "замерзать, замораживать", group: "ABC-en", tier: 2, note: "" },
  { inf: "swear",     past: ["swore"],     pp: ["sworn"],     ru: "клясться, ругаться",      group: "ABC-en", tier: 3, note: "" },
  { inf: "forbid",    past: ["forbade"],   pp: ["forbidden"], ru: "запрещать",               group: "ABC-en", tier: 3, note: "forbade читается /fəˈbæd/ или /fəˈbeɪd/." },
  { inf: "forgive",   past: ["forgave"],   pp: ["forgiven"],  ru: "прощать",                 group: "ABC-en", tier: 3, note: "" },
  { inf: "mistake",   past: ["mistook"],   pp: ["mistaken"],  ru: "принять за другое, ошибаться", group: "ABC-en", tier: 3, note: "" },

  // ---------- ABC: особые ----------
  { inf: "be",        past: ["was", "were"], pp: ["been"],    ru: "быть",                    group: "ABC", tier: 1, note: "was — с I / he / she / it, were — с you / we / they." },
  { inf: "do",        past: ["did"],       pp: ["done"],      ru: "делать",                  group: "ABC", tier: 1, note: "" },
  { inf: "go",        past: ["went"],      pp: ["gone"],      ru: "идти, ехать",             group: "ABC", tier: 1, note: "gone — «ушёл и сейчас там», been — «был и вернулся»: She has gone to Paris / She has been to Paris." },
  { inf: "lie",       past: ["lay"],       pp: ["lain"],      ru: "лежать",                  group: "ABC", tier: 2, note: "lie в значении «лгать» — правильный глагол: lie – lied – lied. Не путать с lay – laid – laid («класть»)." },
  { inf: "show",      past: ["showed"],    pp: ["shown", "showed"], ru: "показывать",        group: "ABC", tier: 2, note: "V2 правильный (showed); V3 чаще shown, но showed тоже верно." },
  { inf: "undo",      past: ["undid"],     pp: ["undone"],    ru: "отменять, расстёгивать",  group: "ABC", tier: 3, note: "" },
  { inf: "prove",     past: ["proved"],    pp: ["proved", "proven"], ru: "доказывать",       group: "ABC", tier: 3, note: "V2 — proved; V3 — proved или proven (proven часто как прилагательное: a proven method)." }

);
