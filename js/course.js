/* ============================================================
   GermanBoost — structured course content
   Each unit teaches a topic: intro → vocab → grammar → examples
   → practice (fill-in) → mini-quiz. Rendered in order as a lesson.
   ============================================================ */
DATA.course = [
  {
    id: "a1-u1", level: "A1", num: 1, title: "Greetings & Introductions",
    goal: "Greet people, introduce yourself, and ask how someone is.",
    sections: [
      { type: "intro", text: "<p>German has two words for “you”: <strong>du</strong> (informal — friends, family, children) and <strong>Sie</strong> (formal — strangers, officials). Start every conversation with a greeting.</p>" },
      { type: "vocab", title: "Key words", items: [
        ["Hallo", "Hello", ""], ["Guten Morgen", "Good morning", ""], ["Guten Tag", "Good day / Hello", ""],
        ["Guten Abend", "Good evening", ""], ["Tschüss", "Bye (informal)", ""], ["Auf Wiedersehen", "Goodbye (formal)", ""],
        ["Wie heißt du?", "What's your name? (informal)", ""], ["Ich heiße …", "My name is …", ""],
        ["Wie geht es dir?", "How are you? (informal)", ""], ["Gut, danke.", "Good, thanks.", ""],
        ["Freut mich!", "Nice to meet you!", ""], ["und dir?", "and you?", ""],
      ]},
      { type: "grammar", title: "The verbs heißen & sein", text: "<p>To give your name use <strong>heißen</strong>: <em>ich heiße, du heißt</em>. To describe yourself use <strong>sein</strong> (to be): <em>ich <b>bin</b>, du <b>bist</b>, er/sie <b>ist</b></em>.</p><p><em>Ich heiße Anna. Ich bin müde.</em></p>" },
      { type: "examples", items: [
        ["Hallo, ich heiße Anna.", "Hello, my name is Anna."],
        ["Wie heißt du?", "What's your name?"],
        ["Wie geht es dir?", "How are you?"],
        ["Mir geht es gut, danke. Und dir?", "I'm doing well, thanks. And you?"],
      ]},
      { type: "practice", instructions: "Fill in the blanks.", items: [
        { q: "Ich ___ Anna. (heißen)", answer: "heiße", en: "My name is Anna." },
        { q: "Wie ___ du? (heißen)", answer: "heißt", en: "What's your name?" },
        { q: "___ geht es dir?", answer: "wie", en: "How are you?" },
        { q: "Ich ___ müde. (sein)", answer: "bin", en: "I am tired." },
      ]},
      { type: "quiz", items: [
        { q: "How do you say “My name is Anna”?", options: ["Ich heiße Anna.", "Ich bin Anna Jahre.", "Wie heißt Anna?"], answer: "Ich heiße Anna." },
        { q: "“Wie geht es dir?” means …", options: ["How are you?", "What's your name?", "Where are you from?"], answer: "How are you?" },
        { q: "Which is the formal “you”?", options: ["Sie", "du", "ihr"], answer: "Sie" },
      ]},
    ],
  },
  {
    id: "a1-u2", level: "A1", num: 2, title: "Numbers & Age",
    goal: "Count to 100 and say how old you are.",
    sections: [
      { type: "intro", text: "<p>From 21 on, German numbers are said “backwards”: <em>einundzwanzig</em> = “one-and-twenty”. Use <strong>haben</strong> (to have) for things you own.</p>" },
      { type: "vocab", title: "Numbers & age", items: [
        ["null", "zero", ""], ["zehn", "ten", ""], ["zwanzig", "twenty", ""], ["hundert", "hundred", ""],
        ["die Zahl", "number", "die"], ["alt", "old", ""], ["das Jahr", "year", "das"],
        ["Wie alt bist du?", "How old are you?", ""], ["Ich bin … Jahre alt.", "I am … years old.", ""],
        ["die Telefonnummer", "phone number", "die"], ["das Geschwister", "sibling", "das"], ["kein", "no / none", ""],
      ]},
      { type: "grammar", title: "haben (to have)", text: "<table class='g-table'><tr><td>ich habe</td><td>wir haben</td></tr><tr><td>du hast</td><td>ihr habt</td></tr><tr><td>er/sie hat</td><td>sie/Sie haben</td></tr></table><p><em>Ich habe zwei Geschwister. Ich habe kein Auto.</em></p>" },
      { type: "examples", items: [
        ["Ich bin dreißig Jahre alt.", "I am thirty years old."],
        ["Wie alt bist du?", "How old are you?"],
        ["Ich habe zwei Geschwister.", "I have two siblings."],
        ["Meine Nummer ist null-eins-sieben-…", "My number is 0-1-7-…"],
      ]},
      { type: "practice", instructions: "Fill in the correct form.", items: [
        { q: "Ich ___ 25 Jahre alt. (sein)", answer: "bin", en: "I am 25 years old." },
        { q: "Wie ___ bist du?", answer: "alt", en: "How old are you?" },
        { q: "Ich ___ zwei Geschwister. (haben)", answer: "habe", en: "I have two siblings." },
        { q: "Du ___ ein Auto. (haben)", answer: "hast", en: "You have a car." },
      ]},
      { type: "quiz", items: [
        { q: "How do you write 21 in German?", options: ["einundzwanzig", "zwanzigeins", "zwanzig-eins"], answer: "einundzwanzig" },
        { q: "“Ich bin … Jahre alt” means …", options: ["I am … years old", "I have … years", "My year is …"], answer: "I am … years old" },
        { q: "er/sie ___ (haben)", options: ["hat", "habe", "hast"], answer: "hat" },
      ]},
    ],
  },
  {
    id: "a1-u3", level: "A1", num: 3, title: "Countries & Languages",
    goal: "Say where you're from and what languages you speak.",
    sections: [
      { type: "intro", text: "<p>Use <strong>kommen aus</strong> for origin and <strong>wohnen in</strong> for where you live now. <em>sprechen</em> (to speak) changes its vowel in the du/er form: <em>du sprichst</em>.</p>" },
      { type: "vocab", title: "Places & languages", items: [
        ["das Land", "country", "das"], ["die Stadt", "city", "die"], ["Deutschland", "Germany", ""],
        ["Österreich", "Austria", ""], ["die Schweiz", "Switzerland", ""], ["woher", "from where", ""],
        ["Ich komme aus …", "I come from …", ""], ["wohnen", "to live / reside", ""],
        ["die Sprache", "language", "die"], ["Deutsch", "German", ""], ["Englisch", "English", ""], ["sprechen", "to speak", ""],
      ]},
      { type: "grammar", title: "kommen & sprechen", text: "<p><strong>kommen:</strong> ich komme, du kommst, er kommt. Used with <em>aus</em>: <em>Ich komme <b>aus</b> Italien.</em></p><p><strong>sprechen</strong> (vowel change): ich spreche, <b>du sprichst</b>, <b>er spricht</b>, wir sprechen.</p>" },
      { type: "examples", items: [
        ["Woher kommst du?", "Where are you from?"],
        ["Ich komme aus Spanien.", "I come from Spain."],
        ["Ich wohne in Berlin.", "I live in Berlin."],
        ["Ich spreche Deutsch und Englisch.", "I speak German and English."],
      ]},
      { type: "practice", instructions: "Fill in the blanks.", items: [
        { q: "Ich ___ aus Frankreich. (kommen)", answer: "komme", en: "I come from France." },
        { q: "Woher ___ du? (kommen)", answer: "kommst", en: "Where are you from?" },
        { q: "Ich ___ in Wien. (wohnen)", answer: "wohne", en: "I live in Vienna." },
        { q: "Du ___ gut Deutsch. (sprechen)", answer: "sprichst", en: "You speak German well." },
      ]},
      { type: "quiz", items: [
        { q: "“Woher kommst du?” asks …", options: ["Where are you from?", "Where do you live?", "What do you speak?"], answer: "Where are you from?" },
        { q: "I come from Germany =", options: ["Ich komme aus Deutschland.", "Ich wohne Deutschland.", "Ich spreche Deutschland."], answer: "Ich komme aus Deutschland." },
        { q: "du ___ (sprechen)", options: ["sprichst", "sprechst", "sprechen"], answer: "sprichst" },
      ]},
    ],
  },
  {
    id: "a1-u4", level: "A1", num: 4, title: "Family",
    goal: "Talk about your family using mein/dein.",
    sections: [
      { type: "intro", text: "<p>Possessives <strong>mein</strong> (my) and <strong>dein</strong> (your) add <em>-e</em> before feminine and plural nouns: <em>mein Vater, mein<b>e</b> Mutter</em>.</p>" },
      { type: "vocab", title: "Family members", items: [
        ["die Familie", "family", "die"], ["die Mutter", "mother", "die"], ["der Vater", "father", "der"],
        ["die Eltern", "parents", "die (pl)"], ["der Bruder", "brother", "der"], ["die Schwester", "sister", "die"],
        ["der Sohn", "son", "der"], ["die Tochter", "daughter", "die"], ["das Kind", "child", "das"],
        ["die Großeltern", "grandparents", "die (pl)"], ["verheiratet", "married", ""], ["ledig", "single", ""],
      ]},
      { type: "grammar", title: "mein & dein", text: "<table class='g-table'><tr><th></th><th>masc / neut</th><th>fem / plural</th></tr><tr><td>my</td><td>mein</td><td>meine</td></tr><tr><td>your</td><td>dein</td><td>deine</td></tr></table><p><em>Das ist <b>mein</b> Vater und <b>meine</b> Mutter.</em></p>" },
      { type: "examples", items: [
        ["Das ist meine Mutter.", "This is my mother."],
        ["Ich habe einen Bruder und eine Schwester.", "I have a brother and a sister."],
        ["Meine Eltern wohnen in Köln.", "My parents live in Cologne."],
        ["Bist du verheiratet?", "Are you married?"],
      ]},
      { type: "practice", instructions: "Choose mein or meine.", items: [
        { q: "Das ist ___ Vater.", answer: "mein", en: "This is my father." },
        { q: "Das ist ___ Mutter.", answer: "meine", en: "This is my mother." },
        { q: "___ Eltern sind nett. (my)", answer: "meine", en: "My parents are nice." },
        { q: "Ich habe ___ Bruder. (einen)", answer: "einen", hint: "accusative masc.", en: "I have a brother." },
      ]},
      { type: "quiz", items: [
        { q: "“my mother” =", options: ["meine Mutter", "mein Mutter", "deine Mutter"], answer: "meine Mutter" },
        { q: "die Eltern means …", options: ["parents", "siblings", "grandparents"], answer: "parents" },
        { q: "“verheiratet” means …", options: ["married", "single", "young"], answer: "married" },
      ]},
    ],
  },
  {
    id: "a1-u5", level: "A1", num: 5, title: "Food & Ordering",
    goal: "Order food and drinks politely in a café.",
    sections: [
      { type: "intro", text: "<p>To order politely, use <strong>ich möchte</strong> (I would like) + the thing in the <strong>accusative</strong> (der → den, ein → einen).</p>" },
      { type: "vocab", title: "Food & drink", items: [
        ["das Wasser", "water", "das"], ["der Kaffee", "coffee", "der"], ["der Tee", "tea", "der"],
        ["das Brot", "bread", "das"], ["der Kuchen", "cake", "der"], ["die Suppe", "soup", "die"],
        ["essen", "to eat", ""], ["trinken", "to drink", ""], ["ich möchte", "I would like", ""],
        ["die Speisekarte", "menu", "die"], ["die Rechnung", "the bill", "die"], ["lecker", "tasty", ""],
      ]},
      { type: "grammar", title: "möchten + accusative", text: "<p><em>ich möchte, du möchtest, er möchte</em>. The object takes the accusative: <em>der Kaffee → Ich möchte <b>einen</b> Kaffee.</em> (die/das don't change: eine Suppe, ein Wasser.)</p>" },
      { type: "examples", items: [
        ["Ich möchte einen Kaffee, bitte.", "I'd like a coffee, please."],
        ["Was möchten Sie?", "What would you like?"],
        ["Die Rechnung, bitte.", "The bill, please."],
        ["Das schmeckt lecker!", "That tastes delicious!"],
      ]},
      { type: "practice", instructions: "Fill in the article or verb.", items: [
        { q: "Ich möchte ___ Kaffee. (der → acc)", answer: "einen", en: "I'd like a coffee." },
        { q: "Ich möchte ___ Suppe. (eine)", answer: "eine", en: "I'd like a soup." },
        { q: "Was ___ Sie? (möchten)", answer: "möchten", en: "What would you like?" },
        { q: "Ich ___ Wasser. (trinken)", answer: "trinke", en: "I drink water." },
      ]},
      { type: "quiz", items: [
        { q: "“I'd like a coffee” =", options: ["Ich möchte einen Kaffee.", "Ich möchte ein Kaffee.", "Ich esse einen Kaffee."], answer: "Ich möchte einen Kaffee." },
        { q: "die Rechnung means …", options: ["the bill", "the menu", "the cake"], answer: "the bill" },
        { q: "“lecker” means …", options: ["tasty", "expensive", "cold"], answer: "tasty" },
      ]},
    ],
  },
  {
    id: "a1-u6", level: "A1", num: 6, title: "Daily Routine & Time",
    goal: "Tell the time and describe your day.",
    sections: [
      { type: "intro", text: "<p>Ask the time with <em>Wie spät ist es?</em> Answer with <em>Es ist … Uhr</em>. Watch out for <strong>separable verbs</strong> like <em>aufstehen</em> — the prefix jumps to the end: <em>Ich stehe um sieben <b>auf</b></em>.</p>" },
      { type: "vocab", title: "Time & routine", items: [
        ["die Uhr", "clock / o'clock", "die"], ["die Zeit", "time", "die"], ["aufstehen", "to get up", ""],
        ["frühstücken", "to have breakfast", ""], ["arbeiten", "to work", ""], ["schlafen", "to sleep", ""],
        ["der Morgen", "morning", "der"], ["der Abend", "evening", "der"], ["um … Uhr", "at … o'clock", ""],
        ["früh", "early", ""], ["spät", "late", ""], ["fernsehen", "to watch TV", ""],
      ]},
      { type: "grammar", title: "Telling time & separable verbs", text: "<p><strong>Time:</strong> <em>Es ist acht Uhr. Es ist halb neun</em> (8:30).</p><p><strong>Separable verbs</strong> split: <em>aufstehen → Ich <b>stehe</b> um 7 Uhr <b>auf</b>. fernsehen → Ich <b>sehe</b> abends <b>fern</b>.</em></p>" },
      { type: "examples", items: [
        ["Wie spät ist es?", "What time is it?"],
        ["Es ist acht Uhr.", "It's eight o'clock."],
        ["Ich stehe um sieben Uhr auf.", "I get up at seven."],
        ["Am Abend sehe ich fern.", "In the evening I watch TV."],
      ]},
      { type: "practice", instructions: "Complete the sentence.", items: [
        { q: "Es ___ acht Uhr. (sein)", answer: "ist", en: "It's eight o'clock." },
        { q: "Ich ___ um 7 Uhr ___. (aufstehen)", answer: "stehe auf|stehe...auf", hint: "separable", en: "I get up at 7." },
        { q: "Wie ___ ist es?", answer: "spät", en: "What time is it?" },
        { q: "Ich ___ acht Stunden. (schlafen)", answer: "schlafe", en: "I sleep eight hours." },
      ]},
      { type: "quiz", items: [
        { q: "“Wie spät ist es?” asks …", options: ["What time is it?", "How late are you?", "When do you sleep?"], answer: "What time is it?" },
        { q: "I get up at 7 =", options: ["Ich stehe um 7 Uhr auf.", "Ich aufstehe um 7 Uhr.", "Ich stehe auf um 7."], answer: "Ich stehe um 7 Uhr auf." },
        { q: "“früh” means …", options: ["early", "late", "evening"], answer: "early" },
      ]},
    ],
  },
  {
    id: "a1-u7", level: "A1", num: 7, title: "Shopping & Prices",
    goal: "Shop for things and ask what they cost.",
    sections: [
      { type: "intro", text: "<p>Ask the price with <strong>Was kostet das?</strong> Say what you need with <strong>brauchen</strong> (to need) + accusative. € prices: <em>3,50 € = drei Euro fünfzig</em>.</p>" },
      { type: "vocab", title: "Shopping", items: [
        ["kaufen", "to buy", ""], ["kosten", "to cost", ""], ["der Preis", "price", "der"],
        ["das Geld", "money", "das"], ["teuer", "expensive", ""], ["billig", "cheap", ""],
        ["der Supermarkt", "supermarket", "der"], ["brauchen", "to need", ""], ["wie viel", "how much", ""],
        ["die Kasse", "checkout", "die"], ["bezahlen", "to pay", ""], ["günstig", "good value", ""],
      ]},
      { type: "grammar", title: "kosten & brauchen", text: "<p><em>Was <b>kostet</b> das?</em> (singular) / <em>Was <b>kosten</b> die Äpfel?</em> (plural). <strong>brauchen</strong> takes the accusative: <em>Ich <b>brauche</b> einen Apfel und ein Brot.</em></p>" },
      { type: "examples", items: [
        ["Was kostet das?", "How much is that?"],
        ["Das kostet drei Euro.", "That costs three euros."],
        ["Ich brauche Brot und Milch.", "I need bread and milk."],
        ["Das ist zu teuer.", "That's too expensive."],
      ]},
      { type: "practice", instructions: "Fill in the blanks.", items: [
        { q: "Was ___ das? (kosten)", answer: "kostet", en: "How much is that?" },
        { q: "Ich ___ Brot. (brauchen)", answer: "brauche", en: "I need bread." },
        { q: "Das ist zu ___. (expensive)", answer: "teuer", en: "That's too expensive." },
        { q: "Wo ist die ___? (checkout)", answer: "Kasse", en: "Where is the checkout?" },
      ]},
      { type: "quiz", items: [
        { q: "“Was kostet das?” means …", options: ["How much is that?", "What is that?", "Where is that?"], answer: "How much is that?" },
        { q: "“teuer” is the opposite of …", options: ["billig", "groß", "gut"], answer: "billig" },
        { q: "I need bread =", options: ["Ich brauche Brot.", "Ich kaufe Kasse.", "Ich koste Brot."], answer: "Ich brauche Brot." },
      ]},
    ],
  },
  {
    id: "a1-u8", level: "A1", num: 8, title: "Living & Home",
    goal: "Describe where and how you live.",
    sections: [
      { type: "intro", text: "<p>Use <strong>es gibt</strong> (there is/are) + accusative to say what a place has. Describe rooms with simple adjectives.</p>" },
      { type: "vocab", title: "Home", items: [
        ["die Wohnung", "apartment", "die"], ["das Haus", "house", "das"], ["das Zimmer", "room", "das"],
        ["die Küche", "kitchen", "die"], ["das Bad", "bathroom", "das"], ["das Schlafzimmer", "bedroom", "das"],
        ["der Tisch", "table", "der"], ["das Bett", "bed", "das"], ["es gibt", "there is / are", ""],
        ["groß", "big", ""], ["klein", "small", ""], ["gemütlich", "cozy", ""],
      ]},
      { type: "grammar", title: "es gibt + accusative", text: "<p><em>es gibt</em> is always followed by the accusative: <em>Es gibt <b>einen</b> Tisch und <b>ein</b> Bett.</em> To say where something is, use <em>in</em> + dative: <em>Das Bett ist <b>im</b> Schlafzimmer.</em></p>" },
      { type: "examples", items: [
        ["Ich wohne in einer Wohnung.", "I live in an apartment."],
        ["Es gibt zwei Zimmer.", "There are two rooms."],
        ["Die Küche ist klein aber gemütlich.", "The kitchen is small but cozy."],
        ["Das Bett steht im Schlafzimmer.", "The bed is in the bedroom."],
      ]},
      { type: "practice", instructions: "Complete the sentence.", items: [
        { q: "Es ___ zwei Zimmer. (geben)", answer: "gibt", en: "There are two rooms." },
        { q: "Ich wohne in einer ___. (apartment)", answer: "Wohnung", en: "I live in an apartment." },
        { q: "Die Küche ist ___. (small)", answer: "klein", en: "The kitchen is small." },
        { q: "Es gibt ___ Tisch. (ein → acc masc)", answer: "einen", en: "There is a table." },
      ]},
      { type: "quiz", items: [
        { q: "“es gibt” means …", options: ["there is / are", "it goes", "he gives you"], answer: "there is / are" },
        { q: "die Küche is the …", options: ["kitchen", "bedroom", "bathroom"], answer: "kitchen" },
        { q: "“gemütlich” means …", options: ["cozy", "big", "expensive"], answer: "cozy" },
      ]},
    ],
  },

  /* ===================== A2 ===================== */
  {
    id: "a2-u1", level: "A2", num: 1, title: "Free Time & Hobbies",
    goal: "Talk about your hobbies and what you like doing.",
    sections: [
      { type: "intro", text: "<p>Add <strong>gern</strong> after a verb to say you like doing it: <em>Ich spiele <b>gern</b> Fußball</em> (I like playing football). Use <strong>können</strong> for what you can do.</p>" },
      { type: "vocab", title: "Hobbies", items: [
        ["das Hobby", "hobby", "das"], ["die Freizeit", "free time", "die"], ["spielen", "to play", ""],
        ["lesen", "to read", ""], ["schwimmen", "to swim", ""], ["tanzen", "to dance", ""],
        ["kochen", "to cook", ""], ["reisen", "to travel", ""], ["gern", "gladly / like to", ""],
        ["oft", "often", ""], ["manchmal", "sometimes", ""], ["nie", "never", ""],
      ]},
      { type: "grammar", title: "gern & können", text: "<p><em>Ich lese <b>gern</b>. Ich spiele <b>gern</b> Gitarre.</em> The opposite is <em>nicht gern</em>.</p><p><strong>können</strong>: ich kann, du kannst, er kann. <em>Ich <b>kann</b> gut kochen.</em></p>" },
      { type: "examples", items: [
        ["Was machst du in deiner Freizeit?", "What do you do in your free time?"],
        ["Ich spiele gern Fußball.", "I like playing football."],
        ["Ich lese oft, aber ich tanze nie.", "I read often, but I never dance."],
        ["Ich kann gut schwimmen.", "I can swim well."],
      ]},
      { type: "practice", instructions: "Fill in the blanks.", items: [
        { q: "Ich spiele ___ Tennis. (like to)", answer: "gern", en: "I like playing tennis." },
        { q: "Ich ___ gut kochen. (können)", answer: "kann", en: "I can cook well." },
        { q: "Was ___ du gern? (machen)", answer: "machst", en: "What do you like doing?" },
        { q: "Ich lese ___. (often)", answer: "oft", en: "I read often." },
      ]},
      { type: "quiz", items: [
        { q: "“Ich spiele gern Fußball” means …", options: ["I like playing football", "I must play football", "I played football"], answer: "I like playing football" },
        { q: "ich ___ (können)", options: ["kann", "kanne", "könne"], answer: "kann" },
        { q: "“nie” means …", options: ["never", "often", "sometimes"], answer: "never" },
      ]},
    ],
  },
  {
    id: "a2-u2", level: "A2", num: 2, title: "Talking About the Past",
    goal: "Describe past events with the Perfekt tense.",
    sections: [
      { type: "intro", text: "<p>Spoken past = <strong>haben/sein + past participle</strong> (at the end). Most verbs use <em>haben</em>; verbs of movement use <em>sein</em>.</p>" },
      { type: "vocab", title: "Past & participles", items: [
        ["gestern", "yesterday", ""], ["letzte Woche", "last week", ""], ["gemacht", "done/made", ""],
        ["gegessen", "eaten", ""], ["getrunken", "drunk", ""], ["gefahren", "driven/gone", ""],
        ["gesehen", "seen", ""], ["gekauft", "bought", ""], ["gearbeitet", "worked", ""],
        ["gespielt", "played", ""], ["gegangen", "gone (on foot)", ""], ["geschlafen", "slept", ""],
      ]},
      { type: "grammar", title: "The Perfekt", text: "<p><em>Ich <b>habe</b> Pizza <b>gegessen</b>. Sie <b>ist</b> nach Berlin <b>gefahren</b>.</em></p><p>Regular participle = <em>ge- + stem + -t</em> (spielen → gespielt). Use <strong>sein</strong> with gehen, fahren, kommen, laufen.</p>" },
      { type: "examples", items: [
        ["Gestern habe ich einen Film gesehen.", "Yesterday I watched a film."],
        ["Wir haben im Restaurant gegessen.", "We ate at the restaurant."],
        ["Ich bin nach Hause gefahren.", "I went home."],
        ["Was hast du am Wochenende gemacht?", "What did you do on the weekend?"],
      ]},
      { type: "practice", instructions: "Fill in the auxiliary (haben/sein).", items: [
        { q: "Ich ___ Kaffee getrunken.", answer: "habe", en: "I drank coffee." },
        { q: "Sie ___ nach Köln gefahren.", answer: "ist", hint: "movement → sein", en: "She went to Cologne." },
        { q: "Wir ___ Fußball gespielt.", answer: "haben", en: "We played football." },
        { q: "Er ___ lange geschlafen.", answer: "hat", en: "He slept a long time." },
      ]},
      { type: "quiz", items: [
        { q: "“I ate pizza” =", options: ["Ich habe Pizza gegessen.", "Ich bin Pizza gegessen.", "Ich esse Pizza gestern."], answer: "Ich habe Pizza gegessen." },
        { q: "Which verb uses sein?", options: ["fahren", "essen", "kaufen"], answer: "fahren" },
        { q: "participle of spielen =", options: ["gespielt", "gespielen", "spielte"], answer: "gespielt" },
      ]},
    ],
  },
  {
    id: "a2-u3", level: "A2", num: 3, title: "Directions & Transport",
    goal: "Ask for and give directions, and talk about getting around.",
    sections: [
      { type: "intro", text: "<p>Ask the way with <em>Wie komme ich zu …?</em> Give directions with the <strong>imperative</strong>: <em>Gehen Sie geradeaus!</em> Travel <em>mit</em> + dative: <em>mit dem Bus</em>.</p>" },
      { type: "vocab", title: "Getting around", items: [
        ["links", "left", ""], ["rechts", "right", ""], ["geradeaus", "straight ahead", ""],
        ["die Ecke", "corner", "die"], ["die Ampel", "traffic light", "die"], ["der Bus", "bus", "der"],
        ["die Bahn", "train/tram", "die"], ["zu Fuß", "on foot", ""], ["abbiegen", "to turn", ""],
        ["die Haltestelle", "stop (bus/tram)", "die"], ["weit", "far", ""], ["die Kreuzung", "crossroads", "die"],
      ]},
      { type: "grammar", title: "Imperative & mit + dative", text: "<p><strong>Formal imperative:</strong> verb + Sie: <em>Gehen Sie …! Biegen Sie links ab!</em></p><p><strong>mit</strong> takes dative: <em>mit <b>dem</b> Bus, mit <b>der</b> Bahn</em>.</p>" },
      { type: "examples", items: [
        ["Wie komme ich zum Bahnhof?", "How do I get to the station?"],
        ["Gehen Sie geradeaus und dann links.", "Go straight ahead and then left."],
        ["Biegen Sie an der Ampel rechts ab.", "Turn right at the traffic light."],
        ["Ich fahre mit dem Bus.", "I go by bus."],
      ]},
      { type: "practice", instructions: "Complete the sentence.", items: [
        { q: "Ich fahre mit ___ Bus. (der → dat)", answer: "dem", en: "I go by bus." },
        { q: "Gehen Sie ___! (straight ahead)", answer: "geradeaus", en: "Go straight ahead!" },
        { q: "Biegen Sie ___ ab. (left)", answer: "links", en: "Turn left." },
        { q: "Ist es ___? (far)", answer: "weit", en: "Is it far?" },
      ]},
      { type: "quiz", items: [
        { q: "“Biegen Sie rechts ab” means …", options: ["Turn right", "Go straight", "Turn left"], answer: "Turn right" },
        { q: "mit ___ Bahn (die → dat)", options: ["der", "die", "dem"], answer: "der" },
        { q: "“zu Fuß” means …", options: ["on foot", "by car", "by train"], answer: "on foot" },
      ]},
    ],
  },
  {
    id: "a2-u4", level: "A2", num: 4, title: "Health & At the Doctor",
    goal: "Describe how you feel and talk to a doctor.",
    sections: [
      { type: "intro", text: "<p>Say what hurts with <strong>Ich habe … schmerzen</strong> or <em>… tut weh</em>. Give advice with <strong>sollen</strong>: <em>Sie sollen viel trinken.</em></p>" },
      { type: "vocab", title: "Health", items: [
        ["der Arzt", "doctor", "der"], ["krank", "ill", ""], ["gesund", "healthy", ""],
        ["die Schmerzen", "pain", "die (pl)"], ["der Kopf", "head", "der"], ["der Bauch", "belly", "der"],
        ["das Fieber", "fever", "das"], ["die Tablette", "tablet", "die"], ["wehtun", "to hurt", ""],
        ["sich fühlen", "to feel", ""], ["die Apotheke", "pharmacy", "die"], ["der Termin", "appointment", "der"],
      ]},
      { type: "grammar", title: "sollen & tut weh", text: "<p><strong>sollen</strong> (should): ich soll, du sollst, Sie sollen. <em>Sie <b>sollen</b> im Bett bleiben.</em></p><p><em>Der Kopf <b>tut</b> weh. Die Füße <b>tun</b> weh.</em> (dative person: <em>Mir tut der Kopf weh.</em>)</p>" },
      { type: "examples", items: [
        ["Ich fühle mich nicht gut.", "I don't feel well."],
        ["Ich habe Kopfschmerzen.", "I have a headache."],
        ["Mir tut der Bauch weh.", "My stomach hurts."],
        ["Sie sollen viel Wasser trinken.", "You should drink lots of water."],
      ]},
      { type: "practice", instructions: "Fill in the blanks.", items: [
        { q: "Ich ___ mich krank. (sich fühlen)", answer: "fühle", en: "I feel ill." },
        { q: "Der Kopf ___ weh. (wehtun)", answer: "tut", en: "My head hurts." },
        { q: "Sie ___ im Bett bleiben. (sollen)", answer: "sollen", en: "You should stay in bed." },
        { q: "Ich habe ___. (a fever)", answer: "Fieber", en: "I have a fever." },
      ]},
      { type: "quiz", items: [
        { q: "“Ich habe Kopfschmerzen” =", options: ["I have a headache", "I feel healthy", "I need a doctor"], answer: "I have a headache" },
        { q: "die Apotheke is the …", options: ["pharmacy", "hospital", "doctor"], answer: "pharmacy" },
        { q: "“gesund” means …", options: ["healthy", "ill", "tired"], answer: "healthy" },
      ]},
    ],
  },
  {
    id: "a2-u5", level: "A2", num: 5, title: "Clothes & Shopping",
    goal: "Shop for clothes and compare things.",
    sections: [
      { type: "intro", text: "<p>Compare with <strong>-er … als</strong> (bigger than) and the best with <strong>am -sten</strong>. Colours and sizes help you shop.</p>" },
      { type: "vocab", title: "Clothes", items: [
        ["die Kleidung", "clothing", "die"], ["das Hemd", "shirt", "das"], ["die Hose", "trousers", "die"],
        ["das Kleid", "dress", "das"], ["die Schuhe", "shoes", "die (pl)"], ["die Jacke", "jacket", "die"],
        ["die Größe", "size", "die"], ["anprobieren", "to try on", ""], ["passen", "to fit", ""],
        ["tragen", "to wear", ""], ["die Farbe", "colour", "die"], ["modisch", "fashionable", ""],
      ]},
      { type: "grammar", title: "Comparatives", text: "<p><em>klein → <b>kleiner</b>, groß → <b>größer</b>, teuer → <b>teurer</b>.</em> Compare with <em>als</em>: <em>Die Jacke ist <b>teurer als</b> das Hemd.</em> Best: <em>am teuersten, am schönsten</em>. Irregular: gut → <b>besser</b> → am besten.</p>" },
      { type: "examples", items: [
        ["Welche Größe haben Sie?", "What size are you?"],
        ["Kann ich das anprobieren?", "Can I try this on?"],
        ["Die Hose ist größer als das Kleid.", "The trousers are bigger than the dress."],
        ["Diese Schuhe passen gut.", "These shoes fit well."],
      ]},
      { type: "practice", instructions: "Write the comparative.", items: [
        { q: "Das Kleid ist ___ als die Hose. (teuer)", answer: "teurer", en: "The dress is more expensive than the trousers." },
        { q: "Die Jacke ist ___ als das Hemd. (groß)", answer: "größer", en: "The jacket is bigger than the shirt." },
        { q: "Kann ich das ___? (try on)", answer: "anprobieren", en: "Can I try this on?" },
        { q: "Welche ___ haben Sie? (size)", answer: "Größe", en: "What size are you?" },
      ]},
      { type: "quiz", items: [
        { q: "comparative of “groß” =", options: ["größer", "großer", "größsten"], answer: "größer" },
        { q: "“anprobieren” means …", options: ["to try on", "to buy", "to pay"], answer: "to try on" },
        { q: "gut → ___ (comparative)", options: ["besser", "guter", "gutter"], answer: "besser" },
      ]},
    ],
  },
  {
    id: "a2-u6", level: "A2", num: 6, title: "Food & Restaurant",
    goal: "Order a meal and talk about food you like.",
    sections: [
      { type: "intro", text: "<p>Order with <em>Ich nehme …</em> or <em>Ich hätte gern …</em> Quantities: <em>ein Glas, eine Tasse, eine Portion</em>.</p>" },
      { type: "vocab", title: "At the restaurant", items: [
        ["die Vorspeise", "starter", "die"], ["das Hauptgericht", "main course", "das"], ["der Nachtisch", "dessert", "der"],
        ["das Gemüse", "vegetables", "das"], ["das Fleisch", "meat", "das"], ["der Fisch", "fish", "der"],
        ["die Portion", "portion", "die"], ["das Glas", "glass", "das"], ["die Tasse", "cup", "die"],
        ["bestellen", "to order", ""], ["empfehlen", "to recommend", ""], ["satt", "full (not hungry)", ""],
      ]},
      { type: "grammar", title: "Ordering politely", text: "<p><em>Ich <b>nehme</b> das Hauptgericht. Ich <b>hätte gern</b> eine Suppe.</em> Ask for a recommendation: <em>Was <b>empfehlen</b> Sie?</em></p>" },
      { type: "examples", items: [
        ["Was empfehlen Sie?", "What do you recommend?"],
        ["Ich nehme den Fisch mit Gemüse.", "I'll have the fish with vegetables."],
        ["Ich hätte gern ein Glas Wein.", "I'd like a glass of wine."],
        ["Danke, ich bin satt.", "Thanks, I'm full."],
      ]},
      { type: "practice", instructions: "Complete the sentence.", items: [
        { q: "Ich ___ den Fisch. (nehmen)", answer: "nehme", en: "I'll have the fish." },
        { q: "Was ___ Sie? (empfehlen)", answer: "empfehlen", en: "What do you recommend?" },
        { q: "Ich hätte gern eine ___ Kaffee. (cup)", answer: "Tasse", en: "I'd like a cup of coffee." },
        { q: "Ich bin ___. (full)", answer: "satt", en: "I'm full." },
      ]},
      { type: "quiz", items: [
        { q: "der Nachtisch is the …", options: ["dessert", "starter", "main course"], answer: "dessert" },
        { q: "“Ich nehme …” means …", options: ["I'll have …", "I recommend …", "I'm full"], answer: "I'll have …" },
        { q: "“empfehlen” means …", options: ["to recommend", "to order", "to pay"], answer: "to recommend" },
      ]},
    ],
  },
  {
    id: "a2-u7", level: "A2", num: 7, title: "Describing People",
    goal: "Describe someone's appearance and personality.",
    sections: [
      { type: "intro", text: "<p>Describe with <em>sein</em> + adjective: <em>Er <b>ist</b> groß und freundlich.</em> Hair and eyes use <em>haben</em>: <em>Sie <b>hat</b> blonde Haare.</em></p>" },
      { type: "vocab", title: "Appearance & character", items: [
        ["groß", "tall", ""], ["klein", "short/small", ""], ["die Haare", "hair", "die (pl)"],
        ["blond", "blond", ""], ["freundlich", "friendly", ""], ["nett", "nice", ""],
        ["lustig", "funny", ""], ["ernst", "serious", ""], ["schlank", "slim", ""],
        ["die Augen", "eyes", "die (pl)"], ["ruhig", "calm", ""], ["fleißig", "hard-working", ""],
      ]},
      { type: "grammar", title: "sein vs haben for descriptions", text: "<p><strong>sein</strong> for qualities: <em>Er ist nett/groß/lustig.</em></p><p><strong>haben</strong> for features: <em>Sie hat blaue Augen / lange Haare.</em></p>" },
      { type: "examples", items: [
        ["Meine Schwester ist groß und schlank.", "My sister is tall and slim."],
        ["Er hat kurze, braune Haare.", "He has short, brown hair."],
        ["Sie ist sehr freundlich und lustig.", "She is very friendly and funny."],
        ["Mein Chef ist ernst, aber fair.", "My boss is serious but fair."],
      ]},
      { type: "practice", instructions: "Fill in sein or haben.", items: [
        { q: "Er ___ groß. (sein)", answer: "ist", en: "He is tall." },
        { q: "Sie ___ blonde Haare. (haben)", answer: "hat", en: "She has blond hair." },
        { q: "Meine Eltern ___ sehr nett. (sein)", answer: "sind", en: "My parents are very nice." },
        { q: "Ich ___ braune Augen. (haben)", answer: "habe", en: "I have brown eyes." },
      ]},
      { type: "quiz", items: [
        { q: "“Sie hat blonde Haare” — which verb describes features?", options: ["haben", "sein", "werden"], answer: "haben" },
        { q: "“fleißig” means …", options: ["hard-working", "funny", "calm"], answer: "hard-working" },
        { q: "opposite of “groß” (person) =", options: ["klein", "schlank", "nett"], answer: "klein" },
      ]},
    ],
  },
  {
    id: "a2-u8", level: "A2", num: 8, title: "Travel & Holidays",
    goal: "Talk about a past holiday and the weather.",
    sections: [
      { type: "intro", text: "<p>Tell holiday stories in the <strong>Perfekt</strong>. Talk about weather with <em>Es ist … / Es gibt …</em></p>" },
      { type: "vocab", title: "Holidays & weather", items: [
        ["der Urlaub", "holiday/vacation", "der"], ["die Reise", "trip", "die"], ["das Meer", "sea", "das"],
        ["der Strand", "beach", "der"], ["die Berge", "mountains", "die (pl)"], ["das Hotel", "hotel", "das"],
        ["sonnig", "sunny", ""], ["regnerisch", "rainy", ""], ["der Koffer", "suitcase", "der"],
        ["besichtigen", "to visit/sightsee", ""], ["der Flug", "flight", "der"], ["die Sonne", "sun", "die"],
      ]},
      { type: "grammar", title: "Perfekt for narration + weather", text: "<p><em>Wir <b>sind</b> ans Meer <b>gefahren</b> und <b>haben</b> viel <b>besichtigt</b>.</em></p><p>Weather: <em>Es <b>war</b> sonnig. Es <b>hat</b> geregnet.</em></p>" },
      { type: "examples", items: [
        ["Im Sommer war ich in Italien.", "In summer I was in Italy."],
        ["Wir sind ans Meer gefahren.", "We went to the sea."],
        ["Das Wetter war sonnig und warm.", "The weather was sunny and warm."],
        ["Wir haben viele Städte besichtigt.", "We visited many cities."],
      ]},
      { type: "practice", instructions: "Complete the past-tense sentence.", items: [
        { q: "Wir ___ nach Spanien gefahren. (sein)", answer: "sind", en: "We went to Spain." },
        { q: "Ich ___ viel fotografiert. (haben)", answer: "habe", en: "I took lots of photos." },
        { q: "Das Wetter ___ schön. (sein, past)", answer: "war", en: "The weather was nice." },
        { q: "Es hat ___. (rained)", answer: "geregnet", en: "It rained." },
      ]},
      { type: "quiz", items: [
        { q: "“Wir sind ans Meer gefahren” means …", options: ["We went to the sea", "We fly to the sea", "We live by the sea"], answer: "We went to the sea" },
        { q: "der Strand is the …", options: ["beach", "mountains", "flight"], answer: "beach" },
        { q: "past of “sein” (wir) =", options: ["waren", "sind", "sein"], answer: "waren" },
      ]},
    ],
  },

  /* ===================== B1 ===================== */
  {
    id: "b1-u1", level: "B1", num: 1, title: "Subordinate Clauses",
    goal: "Connect ideas with weil, dass and wenn — sending the verb to the end.",
    sections: [
      { type: "intro", text: "<p>After <strong>weil</strong> (because), <strong>dass</strong> (that) and <strong>wenn</strong> (if/when), the conjugated verb jumps to the <strong>end</strong> of the clause.</p>" },
      { type: "vocab", title: "Connectors & verbs", items: [
        ["weil", "because", ""], ["dass", "that", ""], ["wenn", "if / when", ""],
        ["denken", "to think", ""], ["glauben", "to believe", ""], ["hoffen", "to hope", ""],
        ["deshalb", "therefore", ""], ["obwohl", "although", ""], ["der Grund", "reason", "der"],
        ["wichtig", "important", ""], ["möglich", "possible", ""], ["sicher", "sure", ""],
      ]},
      { type: "grammar", title: "Verb to the end", text: "<p><em>Ich bleibe zu Hause, <b>weil</b> ich krank <b>bin</b>.</em><br><em>Ich glaube, <b>dass</b> er recht <b>hat</b>.</em><br><em><b>Wenn</b> es <b>regnet</b>, bleibe ich zu Hause.</em> (Note: after the wenn-clause, the main verb comes first.)</p>" },
      { type: "examples", items: [
        ["Ich lerne Deutsch, weil ich in Berlin wohne.", "I learn German because I live in Berlin."],
        ["Ich denke, dass das eine gute Idee ist.", "I think that's a good idea."],
        ["Wenn ich Zeit habe, besuche ich dich.", "If I have time, I'll visit you."],
        ["Obwohl es spät ist, arbeite ich noch.", "Although it's late, I'm still working."],
      ]},
      { type: "practice", instructions: "Put the verb in the right place (write the verb form).", items: [
        { q: "Ich bleibe hier, weil ich müde ___. (sein)", answer: "bin", en: "…because I am tired." },
        { q: "Ich glaube, dass er recht ___. (haben)", answer: "hat", en: "…that he is right." },
        { q: "Wenn es ___, bleibe ich zu Hause. (regnen)", answer: "regnet", en: "If it rains…" },
        { q: "Sie kommt nicht, weil sie krank ___. (sein)", answer: "ist", en: "…because she is ill." },
      ]},
      { type: "quiz", items: [
        { q: "In “…, weil ich krank bin”, the verb “bin” goes …", options: ["at the end", "second", "first"], answer: "at the end" },
        { q: "“obwohl” means …", options: ["although", "because", "therefore"], answer: "although" },
        { q: "Ich denke, dass er recht ___.", options: ["hat", "hast", "haben"], answer: "hat" },
      ]},
    ],
  },
  {
    id: "b1-u2", level: "B1", num: 2, title: "The Simple Past (Präteritum)",
    goal: "Tell a story in the written past tense.",
    sections: [
      { type: "intro", text: "<p>The <strong>Präteritum</strong> is used in writing and narration. Weak verbs add <em>-te</em>; strong verbs change their vowel. <em>sein, haben</em> and modals use it even in speech.</p>" },
      { type: "vocab", title: "Past-tense forms", items: [
        ["war", "was (sein)", ""], ["hatte", "had (haben)", ""], ["ging", "went (gehen)", ""],
        ["kam", "came (kommen)", ""], ["machte", "did/made (machen)", ""], ["sah", "saw (sehen)", ""],
        ["fand", "found (finden)", ""], ["die Geschichte", "story", "die"], ["damals", "back then", ""],
        ["plötzlich", "suddenly", ""], ["danach", "afterwards", ""], ["früher", "in the past", ""],
      ]},
      { type: "grammar", title: "Weak vs strong", text: "<table class='g-table'><tr><th>Infinitive</th><th>Präteritum (er)</th></tr><tr><td>machen (weak)</td><td>machte</td></tr><tr><td>gehen (strong)</td><td>ging</td></tr><tr><td>sein</td><td>war</td></tr><tr><td>haben</td><td>hatte</td></tr></table>" },
      { type: "examples", items: [
        ["Früher wohnte ich in München.", "In the past I lived in Munich."],
        ["Er ging nach Hause und machte das Fenster zu.", "He went home and closed the window."],
        ["Plötzlich kam ein Mann herein.", "Suddenly a man came in."],
        ["Ich hatte keine Zeit, denn ich war krank.", "I had no time because I was ill."],
      ]},
      { type: "practice", instructions: "Write the Präteritum (er/sie form).", items: [
        { q: "Er ___ nach Hause. (gehen)", answer: "ging", en: "He went home." },
        { q: "Ich ___ krank. (sein)", answer: "war", en: "I was ill." },
        { q: "Sie ___ keine Zeit. (haben)", answer: "hatte", en: "She had no time." },
        { q: "Er ___ die Tür zu. (machen)", answer: "machte", en: "He closed the door." },
      ]},
      { type: "quiz", items: [
        { q: "Präteritum of “gehen” (er) =", options: ["ging", "gehte", "gegangen"], answer: "ging" },
        { q: "“damals” means …", options: ["back then", "suddenly", "afterwards"], answer: "back then" },
        { q: "haben → er ___ (Präteritum)", options: ["hatte", "hat", "gehabt"], answer: "hatte" },
      ]},
    ],
  },
  {
    id: "b1-u3", level: "B1", num: 3, title: "Adjective Endings",
    goal: "Add the right ending to adjectives before nouns.",
    sections: [
      { type: "intro", text: "<p>After <strong>der/die/das</strong>, adjective endings are easy: mostly <b>-e</b> or <b>-en</b>. After sein, no ending: <em>Das Auto ist rot → das <b>rote</b> Auto.</em></p>" },
      { type: "vocab", title: "Adjectives", items: [
        ["neu", "new", ""], ["alt", "old", ""], ["schön", "beautiful", ""],
        ["interessant", "interesting", ""], ["teuer", "expensive", ""], ["wichtig", "important", ""],
        ["bequem", "comfortable", ""], ["schnell", "fast", ""], ["hell", "bright", ""],
        ["dunkel", "dark", ""], ["frei", "free/vacant", ""], ["voll", "full", ""],
      ]},
      { type: "grammar", title: "After der/die/das", text: "<table class='g-table'><tr><th></th><th>masc</th><th>fem</th><th>neut</th><th>pl</th></tr><tr><td>Nom</td><td>der gut<b>e</b></td><td>die gut<b>e</b></td><td>das gut<b>e</b></td><td>die gut<b>en</b></td></tr><tr><td>Acc</td><td>den gut<b>en</b></td><td>die gut<b>e</b></td><td>das gut<b>e</b></td><td>die gut<b>en</b></td></tr></table>" },
      { type: "examples", items: [
        ["Das ist ein schönes Haus.", "That's a beautiful house."],
        ["Ich mag den roten Mantel.", "I like the red coat."],
        ["Die neue Wohnung ist teuer.", "The new apartment is expensive."],
        ["Wir haben das kleine Auto gekauft.", "We bought the small car."],
      ]},
      { type: "practice", instructions: "Add the correct ending.", items: [
        { q: "der neu__ Computer", answer: "neue|e", en: "the new computer" },
        { q: "die schön__ Stadt", answer: "schöne|e", en: "the beautiful city" },
        { q: "Ich sehe den alt__ Mann. (acc)", answer: "alten|en", en: "I see the old man." },
        { q: "das klein__ Kind", answer: "kleine|e", en: "the small child" },
      ]},
      { type: "quiz", items: [
        { q: "“the red coat (acc, der Mantel)” =", options: ["den roten Mantel", "der rote Mantel", "den rote Mantel"], answer: "den roten Mantel" },
        { q: "die gut__ Idee (nom)", options: ["gute", "guten", "guter"], answer: "gute" },
        { q: "After “sein”, the adjective takes …", options: ["no ending", "-e", "-en"], answer: "no ending" },
      ]},
    ],
  },
  {
    id: "b1-u4", level: "B1", num: 4, title: "Future & Conditions",
    goal: "Talk about the future and hypothetical situations.",
    sections: [
      { type: "intro", text: "<p><strong>werden + infinitive</strong> = future. Combine with <strong>wenn</strong> for conditions: <em>Wenn es regnet, bleibe ich zu Hause.</em></p>" },
      { type: "vocab", title: "Future & plans", items: [
        ["werden", "will / to become", ""], ["die Zukunft", "future", "die"], ["planen", "to plan", ""],
        ["vielleicht", "maybe", ""], ["bald", "soon", ""], ["nächste", "next", ""],
        ["hoffentlich", "hopefully", ""], ["die Absicht", "intention", "die"], ["das Ziel", "goal", "das"],
        ["umziehen", "to move (house)", ""], ["sich bewerben", "to apply", ""], ["erreichen", "to achieve", ""],
      ]},
      { type: "grammar", title: "werden + infinitive", text: "<p><em>Ich <b>werde</b> nächstes Jahr Deutsch <b>lernen</b>.</em> The infinitive goes to the end. Germans also use the present + a time word: <em>Morgen fahre ich nach Wien.</em></p>" },
      { type: "examples", items: [
        ["Nächstes Jahr werde ich umziehen.", "Next year I will move."],
        ["Ich werde mich um die Stelle bewerben.", "I will apply for the job."],
        ["Wenn ich Geld habe, werde ich reisen.", "If I have money, I'll travel."],
        ["Hoffentlich wird das Wetter besser.", "Hopefully the weather will get better."],
      ]},
      { type: "practice", instructions: "Fill in the correct form of werden.", items: [
        { q: "Ich ___ morgen kommen.", answer: "werde", en: "I will come tomorrow." },
        { q: "Er ___ bald umziehen.", answer: "wird", en: "He will move soon." },
        { q: "Wir ___ nächstes Jahr heiraten.", answer: "werden", en: "We will marry next year." },
        { q: "Was ___ du machen? (future)", answer: "wirst", en: "What will you do?" },
      ]},
      { type: "quiz", items: [
        { q: "“Ich werde reisen” means …", options: ["I will travel", "I traveled", "I travel now"], answer: "I will travel" },
        { q: "er ___ (werden)", options: ["wird", "werde", "werdet"], answer: "wird" },
        { q: "“die Zukunft” means …", options: ["future", "past", "goal"], answer: "future" },
      ]},
    ],
  },
  {
    id: "b1-u5", level: "B1", num: 5, title: "Reflexive Verbs & Feelings",
    goal: "Talk about feelings and daily actions with reflexive verbs.",
    sections: [
      { type: "intro", text: "<p>Reflexive verbs need a reflexive pronoun (<em>mich, dich, sich, uns, euch, sich</em>). Many describe feelings and routines.</p>" },
      { type: "vocab", title: "Reflexive verbs", items: [
        ["sich freuen", "to be glad", ""], ["sich ärgern", "to be annoyed", ""], ["sich fühlen", "to feel", ""],
        ["sich interessieren", "to be interested", ""], ["sich treffen", "to meet", ""], ["sich erinnern", "to remember", ""],
        ["sich entspannen", "to relax", ""], ["sich beeilen", "to hurry", ""], ["froh", "glad", ""],
        ["müde", "tired", ""], ["nervös", "nervous", ""], ["zufrieden", "satisfied", ""],
      ]},
      { type: "grammar", title: "Reflexive pronouns", text: "<p><em>Ich freue <b>mich</b>. Du freust <b>dich</b>. Er freut <b>sich</b>.</em></p><p>With prepositions: <em>sich freuen <b>auf</b></em> (look forward to), <em>sich interessieren <b>für</b></em> (be interested in).</p>" },
      { type: "examples", items: [
        ["Ich freue mich auf das Wochenende.", "I'm looking forward to the weekend."],
        ["Er interessiert sich für Musik.", "He's interested in music."],
        ["Wir treffen uns um acht.", "We meet at eight."],
        ["Beeil dich, wir sind spät dran!", "Hurry up, we're late!"],
      ]},
      { type: "practice", instructions: "Insert the reflexive pronoun.", items: [
        { q: "Ich freue ___ auf den Urlaub.", answer: "mich", en: "I look forward to the holiday." },
        { q: "Er interessiert ___ für Sport.", answer: "sich", en: "He's interested in sport." },
        { q: "Wir treffen ___ morgen.", answer: "uns", en: "We meet tomorrow." },
        { q: "Wie fühlst du ___?", answer: "dich", en: "How do you feel?" },
      ]},
      { type: "quiz", items: [
        { q: "Ich freue ___.", options: ["mich", "sich", "dich"], answer: "mich" },
        { q: "“sich interessieren für” =", options: ["to be interested in", "to look forward to", "to be annoyed about"], answer: "to be interested in" },
        { q: "“zufrieden” means …", options: ["satisfied", "nervous", "tired"], answer: "satisfied" },
      ]},
    ],
  },
  {
    id: "b1-u6", level: "B1", num: 6, title: "Giving Opinions",
    goal: "Express and justify your opinion.",
    sections: [
      { type: "intro", text: "<p>Introduce opinions with <em>Meiner Meinung nach …</em> or <em>Ich finde, dass …</em> Agree and disagree politely.</p>" },
      { type: "vocab", title: "Opinion phrases", items: [
        ["die Meinung", "opinion", "die"], ["Ich finde …", "I think …", ""], ["Ich glaube …", "I believe …", ""],
        ["einverstanden", "in agreement", ""], ["dagegen", "against it", ""], ["dafür", "in favour", ""],
        ["der Vorteil", "advantage", "der"], ["der Nachteil", "disadvantage", "der"], ["stimmen", "to be correct", ""],
        ["recht haben", "to be right", ""], ["diskutieren", "to discuss", ""], ["das Argument", "argument", "das"],
      ]},
      { type: "grammar", title: "Opinion structures", text: "<p><em>Meiner Meinung nach <b>ist</b> das falsch.</em> (verb second)<br><em>Ich finde, <b>dass</b> das eine gute Idee <b>ist</b>.</em> (verb to the end)<br><em>Ich bin <b>dafür</b> / <b>dagegen</b>.</em></p>" },
      { type: "examples", items: [
        ["Meiner Meinung nach ist das zu teuer.", "In my opinion that's too expensive."],
        ["Ich finde, dass wir mehr üben sollten.", "I think we should practice more."],
        ["Da bin ich ganz deiner Meinung.", "I completely agree with you."],
        ["Das sehe ich anders.", "I see that differently."],
      ]},
      { type: "practice", instructions: "Complete the sentence.", items: [
        { q: "Ich ___, dass das richtig ist. (think)", answer: "finde", en: "I think that's right." },
        { q: "Meiner Meinung ___ ist das falsch.", answer: "nach", en: "In my opinion that's wrong." },
        { q: "Ich bin ___ deiner Meinung. (of the same)", answer: "ganz", en: "I fully agree." },
        { q: "Ich bin ___. (in favour)", answer: "dafür", en: "I'm in favour." },
      ]},
      { type: "quiz", items: [
        { q: "“Meiner Meinung nach” means …", options: ["In my opinion", "I agree", "I'm against it"], answer: "In my opinion" },
        { q: "der Vorteil is the …", options: ["advantage", "disadvantage", "argument"], answer: "advantage" },
        { q: "“recht haben” means …", options: ["to be right", "to be wrong", "to agree"], answer: "to be right" },
      ]},
    ],
  },
  {
    id: "b1-u7", level: "B1", num: 7, title: "Work & Career",
    goal: "Talk about jobs, workplaces and applications.",
    sections: [
      { type: "intro", text: "<p>Talk about professions with <em>Ich bin … von Beruf</em> and workplaces. Applications and interviews are common B1 topics.</p>" },
      { type: "vocab", title: "Work", items: [
        ["der Beruf", "profession", "der"], ["die Stelle", "job/position", "die"], ["die Firma", "company", "die"],
        ["der Kollege", "colleague", "der"], ["das Gehalt", "salary", "das"], ["die Bewerbung", "application", "die"],
        ["der Lebenslauf", "CV", "der"], ["das Vorstellungsgespräch", "job interview", "das"], ["verdienen", "to earn", ""],
        ["die Erfahrung", "experience", "die"], ["die Ausbildung", "training", "die"], ["selbstständig", "self-employed", ""],
      ]},
      { type: "grammar", title: "als + profession", text: "<p><em>Ich arbeite <b>als</b> Lehrer.</em> (no article after <em>als</em> for jobs)<br><em>Ich bin Ärztin <b>von Beruf</b>.</em></p>" },
      { type: "examples", items: [
        ["Ich arbeite als Ingenieur bei einer großen Firma.", "I work as an engineer at a big company."],
        ["Ich möchte mich um die Stelle bewerben.", "I'd like to apply for the position."],
        ["Wie viel verdient man in diesem Beruf?", "How much do you earn in this job?"],
        ["Ich habe drei Jahre Erfahrung.", "I have three years of experience."],
      ]},
      { type: "practice", instructions: "Fill in the blanks.", items: [
        { q: "Ich arbeite ___ Lehrer. (as)", answer: "als", en: "I work as a teacher." },
        { q: "Ich möchte mich um die Stelle ___. (apply)", answer: "bewerben", en: "I'd like to apply for the job." },
        { q: "Wie viel ___ du? (earn)", answer: "verdienst", en: "How much do you earn?" },
        { q: "Ich habe viel ___. (experience)", answer: "Erfahrung", en: "I have a lot of experience." },
      ]},
      { type: "quiz", items: [
        { q: "“Ich arbeite als Lehrer” — after “als” you use …", options: ["no article", "der", "ein"], answer: "no article" },
        { q: "die Bewerbung is the …", options: ["application", "salary", "colleague"], answer: "application" },
        { q: "“verdienen” means …", options: ["to earn", "to apply", "to work"], answer: "to earn" },
      ]},
    ],
  },

  /* ===================== B2 ===================== */
  {
    id: "b2-u1", level: "B2", num: 1, title: "Konjunktiv II — Politeness & Hypotheticals",
    goal: "Make polite requests and talk about hypothetical situations.",
    sections: [
      { type: "intro", text: "<p>The subjunctive <strong>Konjunktiv II</strong> softens requests and expresses “would/could”. Everyday form: <strong>würde + infinitive</strong>; common verbs have one-word forms (<em>wäre, hätte, könnte</em>).</p>" },
      { type: "vocab", title: "Key forms", items: [
        ["wäre", "would be", ""], ["hätte", "would have", ""], ["könnte", "could", ""],
        ["würde", "would", ""], ["müsste", "would have to", ""], ["sollte", "should", ""],
        ["an deiner Stelle", "in your place", ""], ["der Wunsch", "wish", "der"], ["der Rat", "advice", "der"],
        ["höflich", "polite", ""], ["die Bitte", "request", "die"], ["vorschlagen", "to suggest", ""],
      ]},
      { type: "grammar", title: "würde & one-word forms", text: "<p><em>Ich <b>würde</b> gern kommen. <b>Könnten</b> Sie mir helfen? An deiner Stelle <b>würde</b> ich bleiben.</em></p><table class='g-table'><tr><td>sein → wäre</td><td>haben → hätte</td></tr><tr><td>können → könnte</td><td>werden → würde</td></tr></table>" },
      { type: "examples", items: [
        ["Ich hätte gern einen Termin.", "I'd like an appointment."],
        ["Könnten Sie das bitte wiederholen?", "Could you repeat that, please?"],
        ["An deiner Stelle würde ich mehr schlafen.", "If I were you, I'd sleep more."],
        ["Es wäre schön, wenn du kommen würdest.", "It would be nice if you came."],
      ]},
      { type: "practice", instructions: "Fill in the Konjunktiv II form.", items: [
        { q: "Ich ___ gern einen Kaffee. (haben)", answer: "hätte", en: "I'd like a coffee." },
        { q: "___ Sie mir helfen? (können)", answer: "könnten", en: "Could you help me?" },
        { q: "An deiner Stelle ___ ich vorsichtig. (sein)", answer: "wäre", en: "If I were you I'd be careful." },
        { q: "Ich ___ das nie tun. (würde)", answer: "würde", en: "I would never do that." },
      ]},
      { type: "quiz", items: [
        { q: "Polite form of “Können Sie…?” =", options: ["Könnten Sie…?", "Konnten Sie…?", "Kannst Sie…?"], answer: "Könnten Sie…?" },
        { q: "sein → Konjunktiv II =", options: ["wäre", "war", "sei"], answer: "wäre" },
        { q: "“An deiner Stelle” means …", options: ["If I were you", "At your place (location)", "Next to you"], answer: "If I were you" },
      ]},
    ],
  },
  {
    id: "b2-u2", level: "B2", num: 2, title: "The Passive Voice",
    goal: "Describe processes and actions where the doer is unimportant.",
    sections: [
      { type: "intro", text: "<p>The passive puts the focus on the action. Form: <strong>werden + Partizip II</strong>. Name the doer (optional) with <em>von</em> + dative.</p>" },
      { type: "vocab", title: "Passive & processes", items: [
        ["hergestellt", "produced", ""], ["gebaut", "built", ""], ["repariert", "repaired", ""],
        ["geliefert", "delivered", ""], ["verkauft", "sold", ""], ["organisiert", "organised", ""],
        ["das Produkt", "product", "das"], ["die Ware", "goods", "die"], ["der Vorgang", "process", "der"],
        ["automatisch", "automatic", ""], ["die Herstellung", "production", "die"], ["die Lösung", "solution", "die"],
      ]},
      { type: "grammar", title: "werden + Partizip II", text: "<table class='g-table'><tr><th>Tense</th><th>Example</th></tr><tr><td>Present</td><td>Das Haus <b>wird gebaut</b>.</td></tr><tr><td>Past</td><td>Das Haus <b>wurde gebaut</b>.</td></tr><tr><td>Perfekt</td><td>Das Haus <b>ist gebaut worden</b>.</td></tr></table>" },
      { type: "examples", items: [
        ["Die Autos werden in Deutschland hergestellt.", "The cars are produced in Germany."],
        ["Der Brief wurde gestern geschrieben.", "The letter was written yesterday."],
        ["Das Problem wird bald gelöst.", "The problem will be solved soon."],
        ["Die Ware wird von der Firma geliefert.", "The goods are delivered by the company."],
      ]},
      { type: "practice", instructions: "Fill in the correct form of werden.", items: [
        { q: "Das Haus ___ gebaut. (present)", answer: "wird", en: "The house is being built." },
        { q: "Der Brief ___ gestern geschrieben. (past)", answer: "wurde", en: "The letter was written yesterday." },
        { q: "Die Produkte ___ hier hergestellt. (present, pl)", answer: "werden", en: "The products are made here." },
        { q: "Das Auto wird von der Firma ___. (repaired)", answer: "repariert", en: "The car is repaired by the company." },
      ]},
      { type: "quiz", items: [
        { q: "The passive is formed with …", options: ["werden + Partizip II", "haben + Infinitiv", "sein + Adjektiv"], answer: "werden + Partizip II" },
        { q: "“The house was built” =", options: ["Das Haus wurde gebaut.", "Das Haus wird bauen.", "Das Haus hat gebaut."], answer: "Das Haus wurde gebaut." },
        { q: "The doer is named with …", options: ["von + dative", "für + accusative", "mit + genitive"], answer: "von + dative" },
      ]},
    ],
  },
  {
    id: "b2-u3", level: "B2", num: 3, title: "Relative Clauses",
    goal: "Add detail to nouns with relative clauses.",
    sections: [
      { type: "intro", text: "<p>Relative pronouns (<em>der, die, das …</em>) take their <strong>gender/number</strong> from the noun and their <strong>case</strong> from their role in the clause. The verb goes to the end.</p>" },
      { type: "vocab", title: "Useful nouns", items: [
        ["der Nachbar", "neighbour", "der"], ["die Kollegin", "colleague (f)", "die"], ["das Gebäude", "building", "das"],
        ["die Person", "person", "die"], ["der Freund", "friend", "der"], ["die Sache", "thing/matter", "die"],
        ["empfehlen", "to recommend", ""], ["treffen", "to meet", ""], ["kennen", "to know (person)", ""],
        ["gehören", "to belong", ""], ["der Ort", "place", "der"], ["das Ereignis", "event", "das"],
      ]},
      { type: "grammar", title: "Relative pronouns", text: "<p><em>Der Mann, <b>der</b> dort steht … (nom)</em><br><em>Der Film, <b>den</b> ich gesehen habe … (acc)</em><br><em>Die Frau, <b>mit der</b> ich spreche … (dat)</em></p><table class='g-table'><tr><td></td><td>m</td><td>f</td><td>n</td><td>pl</td></tr><tr><td>Nom</td><td>der</td><td>die</td><td>das</td><td>die</td></tr><tr><td>Acc</td><td>den</td><td>die</td><td>das</td><td>die</td></tr><tr><td>Dat</td><td>dem</td><td>der</td><td>dem</td><td>denen</td></tr></table>" },
      { type: "examples", items: [
        ["Das ist der Kollege, der neben mir arbeitet.", "That's the colleague who works next to me."],
        ["Der Film, den wir gesehen haben, war toll.", "The film we saw was great."],
        ["Die Frau, mit der ich gesprochen habe, ist Ärztin.", "The woman I spoke with is a doctor."],
        ["Das ist das Haus, das meinen Eltern gehört.", "That's the house that belongs to my parents."],
      ]},
      { type: "practice", instructions: "Choose the relative pronoun.", items: [
        { q: "Der Mann, ___ dort steht, ist mein Chef. (nom)", answer: "der", en: "…who is standing there." },
        { q: "Das Buch, ___ ich lese, ist spannend. (acc)", answer: "das", en: "…that I'm reading." },
        { q: "Die Frau, ___ ich helfe, ist krank. (dat)", answer: "der", en: "…whom I help." },
        { q: "Der Film, ___ ich gesehen habe … (acc)", answer: "den", en: "…that I saw." },
      ]},
      { type: "quiz", items: [
        { q: "“Der Film, ___ ich mag” (acc, masc) =", options: ["den", "der", "dem"], answer: "den" },
        { q: "In a relative clause, the verb goes …", options: ["to the end", "second", "first"], answer: "to the end" },
        { q: "The pronoun's case comes from …", options: ["its role in the clause", "the main verb", "the noun's gender only"], answer: "its role in the clause" },
      ]},
    ],
  },
  {
    id: "b2-u4", level: "B2", num: 4, title: "Connectors & Word Order",
    goal: "Link ideas smoothly and control word order.",
    sections: [
      { type: "intro", text: "<p>Different connectors affect word order differently. <strong>deshalb/trotzdem</strong> cause inversion; <strong>weil/obwohl</strong> send the verb to the end; <strong>und/aber/denn</strong> change nothing.</p>" },
      { type: "vocab", title: "Connectors", items: [
        ["deshalb", "therefore", ""], ["trotzdem", "nevertheless", ""], ["außerdem", "moreover", ""],
        ["jedoch", "however", ""], ["sondern", "but rather", ""], ["denn", "because (coord.)", ""],
        ["dennoch", "nonetheless", ""], ["zwar … aber", "admittedly … but", ""], ["entweder … oder", "either … or", ""],
        ["deswegen", "for that reason", ""], ["nämlich", "namely/you see", ""], ["allerdings", "however", ""],
      ]},
      { type: "grammar", title: "Three groups", text: "<table class='g-table'><tr><th>Type</th><th>Words</th><th>Verb</th></tr><tr><td>Coordinating</td><td>und, aber, oder, denn, sondern</td><td>stays 2nd</td></tr><tr><td>Adverbial</td><td>deshalb, trotzdem, außerdem</td><td>inversion (verb after)</td></tr><tr><td>Subordinating</td><td>weil, obwohl, dass, wenn</td><td>to the end</td></tr></table>" },
      { type: "examples", items: [
        ["Es regnet, deshalb bleibe ich zu Hause.", "It's raining, therefore I'm staying home."],
        ["Er ist müde, trotzdem arbeitet er weiter.", "He's tired; nevertheless he keeps working."],
        ["Ich mag nicht Tee, sondern Kaffee.", "I don't like tea, but rather coffee."],
        ["Sie lernt viel, denn sie hat bald eine Prüfung.", "She studies a lot because she has an exam soon."],
      ]},
      { type: "practice", instructions: "Fill in the verb in the right position.", items: [
        { q: "Es regnet, deshalb ___ ich zu Hause. (bleiben)", answer: "bleibe", hint: "inversion", en: "…therefore I stay home." },
        { q: "Er ist müde, trotzdem ___ er weiter. (arbeiten)", answer: "arbeitet", en: "…nevertheless he works on." },
        { q: "Ich lerne, weil ich eine Prüfung ___. (haben)", answer: "habe", hint: "verb to end", en: "…because I have an exam." },
        { q: "Ich mag nicht Tee, ___ Kaffee. (but rather)", answer: "sondern", en: "…but rather coffee." },
      ]},
      { type: "quiz", items: [
        { q: "After “deshalb”, the verb …", options: ["comes right after (inversion)", "goes to the end", "stays second"], answer: "comes right after (inversion)" },
        { q: "“trotzdem” means …", options: ["nevertheless", "therefore", "because"], answer: "nevertheless" },
        { q: "“sondern” is used after …", options: ["a negative (nicht/kein)", "a question", "a positive statement"], answer: "a negative (nicht/kein)" },
      ]},
    ],
  },
  {
    id: "b2-u5", level: "B2", num: 5, title: "The Genitive",
    goal: "Show possession and use genitive prepositions.",
    sections: [
      { type: "intro", text: "<p>The <strong>genitive</strong> shows possession (“of the …”). Articles become <em>des/der</em>, and masculine/neuter nouns add <em>-s</em>. Several formal prepositions take the genitive.</p>" },
      { type: "vocab", title: "Genitive prepositions & nouns", items: [
        ["während", "during", "(+gen)"], ["wegen", "because of", "(+gen)"], ["trotz", "despite", "(+gen)"],
        ["statt", "instead of", "(+gen)"], ["innerhalb", "within", "(+gen)"], ["der Titel", "title", "der"],
        ["der Grund", "reason", "der"], ["das Ende", "end", "das"], ["der Anfang", "beginning", "der"],
        ["der Besitzer", "owner", "der"], ["die Bedeutung", "meaning", "die"], ["der Zweck", "purpose", "der"],
      ]},
      { type: "grammar", title: "Genitive forms", text: "<p><em>das Auto <b>des</b> Mann<b>es</b>, die Farbe <b>der</b> Blume, das Ende <b>des</b> Film<b>s</b>.</em></p><p>Prepositions: <em><b>wegen des</b> Wetters, <b>während der</b> Woche, <b>trotz des</b> Regens.</em></p>" },
      { type: "examples", items: [
        ["Das ist das Auto meines Vaters.", "That's my father's car."],
        ["Wegen des schlechten Wetters bleiben wir zu Hause.", "Because of the bad weather we stay home."],
        ["Während der Ferien habe ich viel gelesen.", "During the holidays I read a lot."],
        ["Trotz des Regens gingen wir spazieren.", "Despite the rain we went for a walk."],
      ]},
      { type: "practice", instructions: "Fill in the genitive article.", items: [
        { q: "das Auto ___ Mannes (of the man)", answer: "des", en: "the man's car" },
        { q: "die Farbe ___ Blume (of the flower, die)", answer: "der", en: "the colour of the flower" },
        { q: "Wegen ___ Wetters bleiben wir hier. (des/das)", answer: "des", en: "Because of the weather…" },
        { q: "Während ___ Woche arbeite ich. (der/die)", answer: "der", en: "During the week I work." },
      ]},
      { type: "quiz", items: [
        { q: "“my father's car” =", options: ["das Auto meines Vaters", "das Auto mein Vater", "das Auto meinem Vater"], answer: "das Auto meines Vaters" },
        { q: "Which preposition takes the genitive?", options: ["wegen", "mit", "für"], answer: "wegen" },
        { q: "Masculine/neuter genitive nouns add …", options: ["-(e)s", "-n", "-e"], answer: "-(e)s" },
      ]},
    ],
  },
  {
    id: "b2-u6", level: "B2", num: 6, title: "Argumentation & Discussion",
    goal: "Structure an argument and weigh pros and cons.",
    sections: [
      { type: "intro", text: "<p>At B2 you can build a structured argument: introduce a point, add reasons, concede, and conclude. Useful for essays and debates.</p>" },
      { type: "vocab", title: "Discussion language", items: [
        ["einerseits", "on one hand", ""], ["andererseits", "on the other hand", ""], ["zunächst", "first of all", ""],
        ["schließlich", "finally", ""], ["der Standpunkt", "point of view", "der"], ["begründen", "to justify", ""],
        ["betonen", "to emphasise", ""], ["berücksichtigen", "to take into account", ""], ["die Auswirkung", "impact", "die"],
        ["zusammenfassend", "in summary", ""], ["einräumen", "to concede", ""], ["die Tatsache", "fact", "die"],
      ]},
      { type: "grammar", title: "Structuring an argument", text: "<p><em><b>Einerseits</b> ist es teuer, <b>andererseits</b> spart man Zeit.</em><br><em>Man muss <b>berücksichtigen</b>, dass …</em><br><em><b>Zusammenfassend</b> lässt sich sagen, dass …</em></p>" },
      { type: "examples", items: [
        ["Einerseits ist das Auto praktisch, andererseits ist es teuer.", "On one hand the car is practical, on the other it's expensive."],
        ["Ich möchte betonen, dass die Umwelt wichtig ist.", "I'd like to emphasise that the environment is important."],
        ["Man muss die Kosten berücksichtigen.", "One has to take the costs into account."],
        ["Zusammenfassend bin ich der Meinung, dass …", "In summary, I'm of the opinion that …"],
      ]},
      { type: "practice", instructions: "Fill in the discourse marker.", items: [
        { q: "___ ist es teuer, andererseits gut. (on one hand)", answer: "einerseits", en: "On one hand it's expensive…" },
        { q: "Ich möchte ___, dass das wichtig ist. (emphasise)", answer: "betonen", en: "I'd like to emphasise that…" },
        { q: "Man muss die Kosten ___. (take into account)", answer: "berücksichtigen", en: "One must consider the costs." },
        { q: "___ lässt sich sagen, dass … (in summary)", answer: "zusammenfassend", en: "In summary one can say…" },
      ]},
      { type: "quiz", items: [
        { q: "“einerseits … andererseits” =", options: ["on one hand … on the other", "first … finally", "because … therefore"], answer: "on one hand … on the other" },
        { q: "“berücksichtigen” means …", options: ["to take into account", "to emphasise", "to conclude"], answer: "to take into account" },
        { q: "“die Tatsache” means …", options: ["fact", "impact", "point of view"], answer: "fact" },
      ]},
    ],
  },

  /* ===================== C1 ===================== */
  {
    id: "c1-u1", level: "C1", num: 1, title: "Indirect Speech (Konjunktiv I)",
    goal: "Report what others said in a neutral, journalistic way.",
    sections: [
      { type: "intro", text: "<p>News and formal writing report speech with <strong>Konjunktiv I</strong> — signalling you're relaying, not vouching for, a claim. Built from the verb stem + subjunctive endings.</p>" },
      { type: "vocab", title: "Reporting verbs", items: [
        ["behaupten", "to claim", ""], ["erklären", "to explain/state", ""], ["mitteilen", "to announce", ""],
        ["betonen", "to stress", ""], ["die Aussage", "statement", "die"], ["die Quelle", "source", "die"],
        ["angeblich", "allegedly", ""], ["laut", "according to", "(+dat)"], ["der Sprecher", "spokesperson", "der"],
        ["zufolge", "according to", "(+dat)"], ["bestreiten", "to deny", ""], ["die Meldung", "report", "die"],
      ]},
      { type: "grammar", title: "Konjunktiv I forms", text: "<table class='g-table'><tr><th>Indikativ</th><th>Konjunktiv I</th></tr><tr><td>er ist</td><td>er <b>sei</b></td></tr><tr><td>er hat</td><td>er <b>habe</b></td></tr><tr><td>er kommt</td><td>er <b>komme</b></td></tr><tr><td>sie haben</td><td>sie <b>hätten</b> (→ K II)</td></tr></table><p>When K I looks like the present, switch to Konjunktiv II to stay clear.</p>" },
      { type: "examples", items: [
        ["Der Minister sagte, er habe keine Zeit.", "The minister said he had no time."],
        ["Sie erklärte, das Projekt sei erfolgreich.", "She stated the project was successful."],
        ["Laut dem Bericht komme die Lösung bald.", "According to the report, the solution is coming soon."],
        ["Er behauptete, er wisse nichts davon.", "He claimed he knew nothing about it."],
      ]},
      { type: "practice", instructions: "Write the Konjunktiv I form.", items: [
        { q: "Er sagt, er ___ keine Zeit. (haben)", answer: "habe", en: "He says he has no time." },
        { q: "Sie meint, das ___ richtig. (sein)", answer: "sei", en: "She thinks that's correct." },
        { q: "Er behauptet, er ___ später. (kommen)", answer: "komme", en: "He claims he'll come later." },
        { q: "Man sagt, er ___ krank. (sein)", answer: "sei", en: "They say he's ill." },
      ]},
      { type: "quiz", items: [
        { q: "Konjunktiv I is mainly used for …", options: ["indirect/reported speech", "polite requests", "hypotheticals"], answer: "indirect/reported speech" },
        { q: "sein → er ___ (Konjunktiv I)", options: ["sei", "wäre", "ist"], answer: "sei" },
        { q: "“angeblich” means …", options: ["allegedly", "certainly", "clearly"], answer: "allegedly" },
      ]},
    ],
  },
  {
    id: "c1-u2", level: "C1", num: 2, title: "Subjective Modal Verbs",
    goal: "Use modal verbs to signal certainty, rumour and assumption.",
    sections: [
      { type: "intro", text: "<p>Modal verbs can express the speaker's <strong>attitude to a claim</strong>: <em>soll</em> = reportedly, <em>will</em> = claims, <em>dürfte</em> = probably, <em>müsste</em> = ought to.</p>" },
      { type: "vocab", title: "Nuance words", items: [
        ["vermutlich", "presumably", ""], ["offenbar", "apparently", ""], ["angeblich", "supposedly", ""],
        ["wahrscheinlich", "probably", ""], ["die Vermutung", "assumption", "die"], ["der Zweifel", "doubt", "der"],
        ["annehmen", "to assume", ""], ["vermuten", "to suspect", ""], ["gewiss", "certain", ""],
        ["kaum", "hardly", ""], ["durchaus", "quite/definitely", ""], ["keineswegs", "by no means", ""],
      ]},
      { type: "grammar", title: "Subjective meanings", text: "<table class='g-table'><tr><th>Modal</th><th>Meaning</th></tr><tr><td>Er <b>soll</b> reich sein.</td><td>He's said to be rich (reportedly)</td></tr><tr><td>Sie <b>will</b> es gesehen haben.</td><td>She claims to have seen it</td></tr><tr><td>Das <b>dürfte</b> stimmen.</td><td>That's probably true</td></tr><tr><td>Er <b>müsste</b> da sein.</td><td>He ought to be here</td></tr></table>" },
      { type: "examples", items: [
        ["Er soll sehr wohlhabend sein.", "He's said to be very wealthy."],
        ["Sie will nichts davon gewusst haben.", "She claims to have known nothing about it."],
        ["Das dürfte kein Problem sein.", "That shouldn't be a problem."],
        ["Er müsste eigentlich schon angekommen sein.", "He really ought to have arrived by now."],
      ]},
      { type: "practice", instructions: "Choose the modal that fits the meaning.", items: [
        { q: "Er ___ reich sein. (reportedly)", answer: "soll", en: "He's said to be rich." },
        { q: "Das ___ stimmen. (probably)", answer: "dürfte", en: "That's probably true." },
        { q: "Sie ___ alles gesehen haben. (claims)", answer: "will", en: "She claims to have seen everything." },
        { q: "Er ___ schon da sein. (ought to)", answer: "müsste", en: "He ought to be here already." },
      ]},
      { type: "quiz", items: [
        { q: "“Er soll reich sein” means …", options: ["He's reportedly rich", "He should get rich", "He wants to be rich"], answer: "He's reportedly rich" },
        { q: "“dürfte” (subjective) means …", options: ["probably", "is allowed to", "must"], answer: "probably" },
        { q: "“Sie will es gesehen haben” =", options: ["She claims to have seen it", "She wants to see it", "She saw it for sure"], answer: "She claims to have seen it" },
      ]},
    ],
  },
  {
    id: "c1-u3", level: "C1", num: 3, title: "Participial Constructions",
    goal: "Understand and use compact participial attributes.",
    sections: [
      { type: "intro", text: "<p>Written German packs a whole descriptive phrase <strong>before</strong> the noun, built on a participle. <em>Partizip I</em> (-end) is active; <em>Partizip II</em> is passive/completed.</p>" },
      { type: "vocab", title: "Participles & register", items: [
        ["steigend", "rising", ""], ["wachsend", "growing", ""], ["betreffend", "concerning", ""],
        ["gelöst", "solved", ""], ["beschlossen", "decided", ""], ["erwähnt", "mentioned", ""],
        ["die Maßnahme", "measure", "die"], ["die Entwicklung", "development", "die"], ["zunehmend", "increasing", ""],
        ["anhaltend", "persistent", ""], ["die Herausforderung", "challenge", "die"], ["die Voraussetzung", "prerequisite", "die"],
      ]},
      { type: "grammar", title: "Partizip I & II as attributes", text: "<p><strong>Partizip I</strong> (active, ongoing): <em>die <b>steigenden</b> Preise</em> (the rising prices).<br><strong>Partizip II</strong> (passive/done): <em>die <b>beschlossenen</b> Maßnahmen</em> (the decided measures).</p><p>To read: find the noun, then unpack the phrase as a relative clause.</p>" },
      { type: "examples", items: [
        ["Die steigenden Kosten sind ein Problem.", "The rising costs are a problem."],
        ["Der seit Tagen anhaltende Regen hört nicht auf.", "The rain, persisting for days, won't stop."],
        ["Die von der Regierung beschlossenen Maßnahmen …", "The measures decided by the government …"],
        ["Das oben erwähnte Beispiel zeigt …", "The example mentioned above shows …"],
      ]},
      { type: "practice", instructions: "Choose Partizip I or II.", items: [
        { q: "die ___ Preise (rising → Partizip I)", answer: "steigenden", en: "the rising prices" },
        { q: "das gekocht__ Ei (Partizip II ending)", answer: "gekochte|e", en: "the boiled egg" },
        { q: "die ___ Herausforderung (growing)", answer: "wachsende", en: "the growing challenge" },
        { q: "die ___ Maßnahmen (decided → Partizip II)", answer: "beschlossenen", en: "the decided measures" },
      ]},
      { type: "quiz", items: [
        { q: "“die steigenden Preise” uses …", options: ["Partizip I (active)", "Partizip II (passive)", "Konjunktiv"], answer: "Partizip I (active)" },
        { q: "Partizip I is formed with …", options: ["stem + -end", "ge- + -t", "stem + -te"], answer: "stem + -end" },
        { q: "“anhaltend” means …", options: ["persistent", "solved", "mentioned"], answer: "persistent" },
      ]},
    ],
  },
  {
    id: "c1-u4", level: "C1", num: 4, title: "Nominal Style",
    goal: "Read and write the noun-heavy style of formal German.",
    sections: [
      { type: "intro", text: "<p>Academic and official German prefers <strong>nouns over verbs</strong>. Verbal clauses get compressed into noun phrases — dense but precise.</p>" },
      { type: "vocab", title: "Verb → noun", items: [
        ["die Prüfung", "examination (prüfen)", "die"], ["die Entscheidung", "decision (entscheiden)", "die"],
        ["die Entwicklung", "development (entwickeln)", "die"], ["die Umsetzung", "implementation", "die"],
        ["die Durchführung", "execution", "die"], ["die Feststellung", "finding", "die"],
        ["die Berücksichtigung", "consideration", "die"], ["die Verbesserung", "improvement", "die"],
        ["die Einführung", "introduction", "die"], ["die Erhöhung", "increase", "die"],
        ["die Verwendung", "use", "die"], ["die Vermeidung", "avoidance", "die"],
      ]},
      { type: "grammar", title: "Verbal ↔ nominal", text: "<p>Verbal: <em>Weil die Preise <b>gestiegen sind</b>, …</em><br>Nominal: <em>Wegen <b>des Anstiegs</b> der Preise …</em></p><p>Recognise it when reading; use it sparingly in writing, and keep speech verbal.</p>" },
      { type: "examples", items: [
        ["Nach Prüfung der Unterlagen entscheiden wir.", "After examining the documents, we decide."],
        ["Die Umsetzung des Plans dauert lange.", "The implementation of the plan takes long."],
        ["Zur Vermeidung von Fehlern ist Sorgfalt nötig.", "To avoid errors, care is necessary."],
        ["Die Erhöhung der Preise war unvermeidlich.", "The increase in prices was unavoidable."],
      ]},
      { type: "practice", instructions: "Give the noun for the verb.", items: [
        { q: "entscheiden → die ___", answer: "Entscheidung", en: "decision" },
        { q: "entwickeln → die ___", answer: "Entwicklung", en: "development" },
        { q: "verbessern → die ___", answer: "Verbesserung", en: "improvement" },
        { q: "einführen → die ___", answer: "Einführung", en: "introduction" },
      ]},
      { type: "quiz", items: [
        { q: "Nominal style prefers …", options: ["nouns over verbs", "verbs over nouns", "adjectives"], answer: "nouns over verbs" },
        { q: "“die Umsetzung” means …", options: ["implementation", "decision", "avoidance"], answer: "implementation" },
        { q: "Nominal style is typical of …", options: ["academic/official texts", "casual speech", "text messages"], answer: "academic/official texts" },
      ]},
    ],
  },
  {
    id: "c1-u5", level: "C1", num: 5, title: "Idioms & Register",
    goal: "Recognise idioms and shift between formal and colloquial German.",
    sections: [
      { type: "intro", text: "<p>At C1, mastery means understanding <strong>idioms</strong> and choosing the right <strong>register</strong> — formal, neutral or colloquial — for the situation.</p>" },
      { type: "vocab", title: "Idioms", items: [
        ["die Nase voll haben", "to be fed up", ""], ["Schwein haben", "to get lucky", ""],
        ["den Nagel auf den Kopf treffen", "to hit the nail on the head", ""], ["ins Gras beißen", "to kick the bucket", ""],
        ["die Daumen drücken", "to keep fingers crossed", ""], ["um den heißen Brei reden", "to beat around the bush", ""],
        ["das A und O", "the essential thing", ""], ["aus dem Häuschen sein", "to be over the moon", ""],
        ["die Flinte ins Korn werfen", "to throw in the towel", ""], ["auf dem Schlauch stehen", "to be stumped", ""],
        ["die Kirche im Dorf lassen", "to not overreact", ""], ["jemandem auf die Nerven gehen", "to get on someone's nerves", ""],
      ]},
      { type: "grammar", title: "Register", text: "<p>Formal: <em>Ich möchte Sie darüber informieren, dass …</em><br>Neutral: <em>Ich wollte dir sagen, dass …</em><br>Colloquial: <em>Ich wollt' dir nur kurz sagen …</em></p><p>Idioms usually belong to informal/neutral register — avoid them in very formal writing.</p>" },
      { type: "examples", items: [
        ["Ich habe die Nase voll von diesem Wetter.", "I'm fed up with this weather."],
        ["Da hast du wirklich Schwein gehabt!", "You really got lucky there!"],
        ["Mit dem Kommentar hast du den Nagel auf den Kopf getroffen.", "With that comment you hit the nail on the head."],
        ["Red nicht um den heißen Brei — sag es direkt.", "Don't beat around the bush — say it directly."],
      ]},
      { type: "practice", instructions: "Match the idiom (type the German verb/word).", items: [
        { q: "to be fed up = die Nase voll ___", answer: "haben", en: "to be fed up" },
        { q: "to get lucky = ___ haben", answer: "Schwein", en: "to get lucky" },
        { q: "to keep fingers crossed = die Daumen ___", answer: "drücken", en: "to keep fingers crossed" },
        { q: "to be stumped = auf dem ___ stehen", answer: "Schlauch", en: "to be stumped" },
      ]},
      { type: "quiz", items: [
        { q: "“den Nagel auf den Kopf treffen” =", options: ["to hit the nail on the head", "to be stumped", "to get lucky"], answer: "to hit the nail on the head" },
        { q: "“Schwein haben” means …", options: ["to get lucky", "to be fed up", "to give up"], answer: "to get lucky" },
        { q: "Idioms mostly belong to which register?", options: ["informal/neutral", "very formal", "academic"], answer: "informal/neutral" },
      ]},
    ],
  },

  /* ===================== C2 ===================== */
  {
    id: "c2-u1", level: "C2", num: 1, title: "Modal Particles",
    goal: "Colour your speech naturally with modal particles.",
    sections: [
      { type: "intro", text: "<p>Little flavouring words — <em>doch, mal, ja, halt, wohl, denn, eben, schon</em> — carry no dictionary meaning but convey attitude. Mastering them is what makes you sound native.</p>" },
      { type: "vocab", title: "Particles & tone", items: [
        ["doch", "(emphasis/contradiction)", ""], ["mal", "(softening)", ""], ["ja", "(shared knowledge)", ""],
        ["halt", "(resignation)", ""], ["eben", "(precisely/just so)", ""], ["wohl", "(probably)", ""],
        ["denn", "(interest in questions)", ""], ["schon", "(reassurance)", ""], ["etwa", "(surprise/doubt)", ""],
        ["ruhig", "(go ahead)", ""], ["bloß", "(intensifier)", ""], ["eigentlich", "(actually)", ""],
      ]},
      { type: "grammar", title: "How particles work", text: "<table class='g-table'><tr><th>Particle</th><th>Effect</th></tr><tr><td>Komm <b>doch</b> mit!</td><td>friendly urging</td></tr><tr><td>Warte <b>mal</b>.</td><td>softens the request</td></tr><tr><td>Das ist <b>ja</b> toll!</td><td>pleasant surprise</td></tr><tr><td>Das ist <b>halt</b> so.</td><td>resignation</td></tr></table>" },
      { type: "examples", items: [
        ["Komm doch mit ins Kino!", "Do come along to the cinema!"],
        ["Was machst du denn hier?", "What on earth are you doing here?"],
        ["Das wird schon klappen.", "It'll work out (don't worry)."],
        ["Das ist eben nicht so einfach.", "It's just not that simple."],
      ]},
      { type: "practice", instructions: "Choose the fitting particle.", items: [
        { q: "Komm ___ mit! (friendly urging)", answer: "doch", en: "Do come along!" },
        { q: "Was machst du ___ hier? (interest, question)", answer: "denn", en: "What are you doing here?" },
        { q: "Warte ___. (softening)", answer: "mal", en: "Hang on a sec." },
        { q: "Das ist ___ so. (resignation)", answer: "halt|eben", en: "That's just how it is." },
      ]},
      { type: "quiz", items: [
        { q: "In “Komm doch mit!”, “doch” adds …", options: ["friendly urging", "a question", "past tense"], answer: "friendly urging" },
        { q: "“denn” is typical in …", options: ["questions (showing interest)", "commands", "the past"], answer: "questions (showing interest)" },
        { q: "Modal particles mainly convey …", options: ["attitude/tone", "tense", "case"], answer: "attitude/tone" },
      ]},
    ],
  },
  {
    id: "c2-u2", level: "C2", num: 2, title: "Figurative & Idiomatic Language",
    goal: "Understand advanced idioms, metaphor and colloquialism.",
    sections: [
      { type: "intro", text: "<p>Near-native command means grasping <strong>figurative language</strong> — metaphors, idioms and irony — and using them appropriately.</p>" },
      { type: "vocab", title: "Advanced idioms", items: [
        ["das ist mir Wurst", "I couldn't care less", ""], ["Tomaten auf den Augen haben", "to miss the obvious", ""],
        ["die Katze im Sack kaufen", "to buy blindly", ""], ["Bahnhof verstehen", "to understand nothing", ""],
        ["ins Fettnäpfchen treten", "to put one's foot in it", ""], ["die Kuh vom Eis holen", "to resolve a crisis", ""],
        ["Öl ins Feuer gießen", "to add fuel to the fire", ""], ["den Faden verlieren", "to lose one's train of thought", ""],
        ["auf großem Fuß leben", "to live large", ""], ["das Handtuch werfen", "to throw in the towel", ""],
        ["jemandem reinen Wein einschenken", "to tell the honest truth", ""], ["die Ohren spitzen", "to prick up one's ears", ""],
      ]},
      { type: "grammar", title: "Reading figurative meaning", text: "<p>Idioms are non-compositional — the meaning isn't the sum of the words. <em>Öl ins Feuer gießen</em> literally “pour oil on the fire” = make a conflict worse. Context and tone signal irony and metaphor.</p>" },
      { type: "examples", items: [
        ["Mit dieser Bemerkung hat er Öl ins Feuer gegossen.", "With that remark he added fuel to the fire."],
        ["Ich verstehe nur Bahnhof.", "I don't understand a thing."],
        ["Sie ist ins Fettnäpfchen getreten.", "She put her foot in it."],
        ["Jetzt müssen wir die Kuh vom Eis holen.", "Now we have to sort out this mess."],
      ]},
      { type: "practice", instructions: "Complete the idiom (type the missing word).", items: [
        { q: "to add fuel to the fire = Öl ins ___ gießen", answer: "Feuer", en: "to add fuel to the fire" },
        { q: "to understand nothing = ___ verstehen", answer: "Bahnhof", en: "to understand nothing" },
        { q: "to throw in the towel = das ___ werfen", answer: "Handtuch", en: "to throw in the towel" },
        { q: "I couldn't care less = das ist mir ___", answer: "Wurst", en: "I couldn't care less" },
      ]},
      { type: "quiz", items: [
        { q: "“Öl ins Feuer gießen” means …", options: ["to make a conflict worse", "to cook well", "to stay calm"], answer: "to make a conflict worse" },
        { q: "“Bahnhof verstehen” means …", options: ["to understand nothing", "to travel", "to be on time"], answer: "to understand nothing" },
        { q: "Idioms are …", options: ["non-compositional", "always literal", "grammar rules"], answer: "non-compositional" },
      ]},
    ],
  },
  {
    id: "c2-u3", level: "C2", num: 3, title: "Style & Register",
    goal: "Shift tone deliberately for rhetorical effect.",
    sections: [
      { type: "intro", text: "<p>At C2 you command the full range of <strong>register</strong> — from bureaucratic to literary to colloquial — and shift it consciously for effect.</p>" },
      { type: "vocab", title: "Register & rhetoric", items: [
        ["gehoben", "elevated/formal", ""], ["umgangssprachlich", "colloquial", ""], ["sachlich", "matter-of-fact", ""],
        ["die Ironie", "irony", "die"], ["die Anspielung", "allusion", "die"], ["die Untertreibung", "understatement", "die"],
        ["die Betonung", "emphasis", "die"], ["der Ausdruck", "expression", "der"], ["treffend", "apt", ""],
        ["der Beamtendeutsch", "officialese", "der"], ["prägnant", "concise/pithy", ""], ["die Nuance", "nuance", "die"],
      ]},
      { type: "grammar", title: "Same idea, three registers", text: "<p>Formal (gehoben): <em>Ich gestatte mir, Sie darauf hinzuweisen …</em><br>Neutral: <em>Ich möchte Sie darauf hinweisen …</em><br>Colloquial: <em>Ich wollt' bloß sagen …</em></p><p>Choosing register is a deliberate rhetorical act.</p>" },
      { type: "examples", items: [
        ["Der Text ist in einem sehr gehobenen Stil geschrieben.", "The text is written in a very elevated style."],
        ["Das war eine feine Ironie.", "That was subtle irony."],
        ["Er drückt sich sehr prägnant aus.", "He expresses himself very concisely."],
        ["Das ist typischer Beamtendeutsch.", "That's typical officialese."],
      ]},
      { type: "practice", instructions: "Fill in the term.", items: [
        { q: "a formal/elevated style = ein ___ Stil", answer: "gehobener|gehobenen|gehobene", en: "an elevated style" },
        { q: "casual language = ___ Sprache", answer: "umgangssprachliche|umgangssprachlich", en: "colloquial language" },
        { q: "saying less than meant = die ___", answer: "Untertreibung", en: "understatement" },
        { q: "concise and pithy = ___", answer: "prägnant", en: "concise" },
      ]},
      { type: "quiz", items: [
        { q: "“umgangssprachlich” means …", options: ["colloquial", "formal", "academic"], answer: "colloquial" },
        { q: "“die Untertreibung” is …", options: ["understatement", "exaggeration", "irony"], answer: "understatement" },
        { q: "Choosing register is …", options: ["a deliberate rhetorical act", "a grammar rule", "random"], answer: "a deliberate rhetorical act" },
      ]},
    ],
  },
  {
    id: "c2-u4", level: "C2", num: 4, title: "Fine Distinctions & Nuance",
    goal: "Grasp subtle differences between near-synonyms and shades of meaning.",
    sections: [
      { type: "intro", text: "<p>The final polish: distinguishing near-synonyms and connotations that native speakers feel instinctively.</p>" },
      { type: "vocab", title: "Near-synonym pairs", items: [
        ["benutzen / verwenden", "to use (neutral / formal)", ""], ["bekommen / erhalten", "to get (neutral / formal)", ""],
        ["anfangen / beginnen", "to start (neutral / formal)", ""], ["reden / sprechen", "to talk / to speak", ""],
        ["billig / preiswert", "cheap / good value", ""], ["die Arbeit / die Tätigkeit", "work / activity", ""],
        ["schauen / betrachten", "to look / to contemplate", ""], ["merken / bemerken", "to notice (inward/outward)", ""],
        ["die Wirkung / die Auswirkung", "effect / consequence", ""], ["klug / gescheit / weise", "clever / bright / wise", ""],
        ["die Grenze / die Schranke", "border / barrier", ""], ["fordern / verlangen", "to demand (assertive shades)", ""],
      ]},
      { type: "grammar", title: "Connotation matters", text: "<p><em>billig</em> can imply “cheap/low quality”, while <em>preiswert</em> is positive (“worth the price”). <em>verwenden</em> is more formal than <em>benutzen</em>. Register and connotation guide word choice.</p>" },
      { type: "examples", items: [
        ["Diese Methode ist preiswert, nicht billig.", "This method is good value, not cheap."],
        ["Wir verwenden ausschließlich hochwertige Materialien.", "We use exclusively high-quality materials."],
        ["Er hat es sofort bemerkt.", "He noticed it immediately."],
        ["Das hat eine große Auswirkung auf die Umwelt.", "That has a big impact on the environment."],
      ]},
      { type: "practice", instructions: "Pick the better-fitting word (type it).", items: [
        { q: "Good value (positive): ___ (billig/preiswert)", answer: "preiswert", en: "good value" },
        { q: "Formal 'to use': ___ (benutzen/verwenden)", answer: "verwenden", en: "to use (formal)" },
        { q: "Formal 'to receive': ___ (bekommen/erhalten)", answer: "erhalten", en: "to receive (formal)" },
        { q: "long-term consequence: die ___ (Wirkung/Auswirkung)", answer: "Auswirkung", en: "consequence" },
      ]},
      { type: "quiz", items: [
        { q: "Which is positive?", options: ["preiswert", "billig", "both negative"], answer: "preiswert" },
        { q: "More formal “to use” =", options: ["verwenden", "benutzen", "brauchen"], answer: "verwenden" },
        { q: "“die Auswirkung” stresses …", options: ["a consequence/impact", "an immediate effect", "a cause"], answer: "a consequence/impact" },
      ]},
    ],
  },
];
