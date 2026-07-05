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
];
