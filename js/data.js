/* ============================================================
   German learning content data
   All content is embedded so the site works fully offline.
   ============================================================ */

const DATA = {};

/* ---------------- Alphabet ---------------- */
DATA.alphabet = [
  { l: "A a", name: "ah", ex: "Apfel", en: "apple" },
  { l: "B b", name: "beh", ex: "Buch", en: "book" },
  { l: "C c", name: "tseh", ex: "Computer", en: "computer" },
  { l: "D d", name: "deh", ex: "Danke", en: "thanks" },
  { l: "E e", name: "eh", ex: "Esel", en: "donkey" },
  { l: "F f", name: "eff", ex: "Fisch", en: "fish" },
  { l: "G g", name: "geh", ex: "Garten", en: "garden" },
  { l: "H h", name: "hah", ex: "Haus", en: "house" },
  { l: "I i", name: "ih", ex: "Insel", en: "island" },
  { l: "J j", name: "yot", ex: "Jahr", en: "year" },
  { l: "K k", name: "kah", ex: "Katze", en: "cat" },
  { l: "L l", name: "ell", ex: "Lampe", en: "lamp" },
  { l: "M m", name: "emm", ex: "Mutter", en: "mother" },
  { l: "N n", name: "enn", ex: "Nacht", en: "night" },
  { l: "O o", name: "oh", ex: "Ozean", en: "ocean" },
  { l: "P p", name: "peh", ex: "Park", en: "park" },
  { l: "Q q", name: "kuh", ex: "Quelle", en: "spring/source" },
  { l: "R r", name: "err", ex: "Rot", en: "red" },
  { l: "S s", name: "ess", ex: "Sonne", en: "sun" },
  { l: "T t", name: "teh", ex: "Tisch", en: "table" },
  { l: "U u", name: "uh", ex: "Uhr", en: "clock" },
  { l: "V v", name: "fau", ex: "Vogel", en: "bird" },
  { l: "W w", name: "veh", ex: "Wasser", en: "water" },
  { l: "X x", name: "iks", ex: "Xylofon", en: "xylophone" },
  { l: "Y y", name: "üpsilon", ex: "Yoga", en: "yoga" },
  { l: "Z z", name: "tsett", ex: "Zug", en: "train" },
  { l: "Ä ä", name: "ah-umlaut", ex: "Äpfel", en: "apples" },
  { l: "Ö ö", name: "oh-umlaut", ex: "Öl", en: "oil" },
  { l: "Ü ü", name: "uh-umlaut", ex: "über", en: "over/about" },
  { l: "ß", name: "eszett", ex: "Straße", en: "street" },
];

/* Pronunciation rules */
DATA.pronunciation = [
  { s: "ei", say: "like 'eye'", ex: "mein (my), Wein (wine)" },
  { s: "ie", say: "like 'ee' in see", ex: "die (the), Liebe (love)" },
  { s: "eu / äu", say: "like 'oy' in boy", ex: "neu (new), Häuser (houses)" },
  { s: "au", say: "like 'ow' in cow", ex: "Haus (house), blau (blue)" },
  { s: "ch (after a,o,u)", say: "harsh, like Scottish 'loch'", ex: "Buch (book), Nacht (night)" },
  { s: "ch (after e,i)", say: "soft, like a hissed 'h'", ex: "ich (I), Milch (milk)" },
  { s: "sch", say: "like English 'sh'", ex: "Schule (school), Fisch (fish)" },
  { s: "sp / st (start)", say: "'shp' / 'sht'", ex: "spielen (play), Stadt (city)" },
  { s: "v", say: "usually like 'f'", ex: "Vater (father), viel (much)" },
  { s: "w", say: "like English 'v'", ex: "Wasser (water), wo (where)" },
  { s: "z", say: "like 'ts'", ex: "Zeit (time), Zug (train)" },
  { s: "j", say: "like English 'y'", ex: "ja (yes), Junge (boy)" },
  { s: "r", say: "guttural, back of throat", ex: "rot (red), Reise (trip)" },
  { s: "ß", say: "sharp 's' sound", ex: "Straße (street), heiß (hot)" },
  { s: "ä", say: "like 'e' in bed", ex: "Käse (cheese), spät (late)" },
  { s: "ö", say: "like 'i' in bird (rounded)", ex: "schön (beautiful), hören (hear)" },
  { s: "ü", say: "say 'ee' with rounded lips", ex: "über (over), für (for)" },
  { s: "final -e", say: "soft 'uh'", ex: "Katze (cat), Ende (end)" },
];

/* ---------------- Numbers ---------------- */
DATA.numbers = {
  base: [
    ["0", "null"], ["1", "eins"], ["2", "zwei"], ["3", "drei"], ["4", "vier"],
    ["5", "fünf"], ["6", "sechs"], ["7", "sieben"], ["8", "acht"], ["9", "neun"],
    ["10", "zehn"], ["11", "elf"], ["12", "zwölf"], ["13", "dreizehn"], ["14", "vierzehn"],
    ["15", "fünfzehn"], ["16", "sechzehn"], ["17", "siebzehn"], ["18", "achtzehn"],
    ["19", "neunzehn"], ["20", "zwanzig"],
  ],
  tens: [
    ["20", "zwanzig"], ["30", "dreißig"], ["40", "vierzig"], ["50", "fünfzig"],
    ["60", "sechzig"], ["70", "siebzig"], ["80", "achtzig"], ["90", "neunzig"], ["100", "(ein)hundert"],
  ],
  big: [
    ["21", "einundzwanzig"], ["42", "zweiundvierzig"], ["67", "siebenundsechzig"],
    ["100", "hundert"], ["101", "hunderteins"], ["234", "zweihundertvierunddreißig"],
    ["1.000", "tausend"], ["1.000.000", "eine Million"], ["1.000.000.000", "eine Milliarde"],
  ],
  ordinals: [
    ["1st", "erste"], ["2nd", "zweite"], ["3rd", "dritte"], ["4th", "vierte"],
    ["5th", "fünfte"], ["7th", "siebte"], ["8th", "achte"], ["20th", "zwanzigste"],
  ],
  note: "German builds numbers 'backwards' after 20: 21 = einundzwanzig = 'one-and-twenty'.",
};

/* ---------------- Vocabulary (categories) ----------------
   Each item: [german, english, article-or-info] */
DATA.vocab = {
  "Greetings & Basics": [
    ["Hallo", "Hello", ""],
    ["Guten Morgen", "Good morning", ""],
    ["Guten Tag", "Good day / Hello", ""],
    ["Guten Abend", "Good evening", ""],
    ["Gute Nacht", "Good night", ""],
    ["Tschüss", "Bye (informal)", ""],
    ["Auf Wiedersehen", "Goodbye (formal)", ""],
    ["Ja", "Yes", ""],
    ["Nein", "No", ""],
    ["Bitte", "Please / You're welcome", ""],
    ["Danke", "Thank you", ""],
    ["Entschuldigung", "Excuse me / Sorry", ""],
    ["Ja, gern", "Yes, gladly", ""],
    ["Vielleicht", "Maybe", ""],
    ["Genau", "Exactly", ""],
  ],
  "Colors": [
    ["rot", "red", ""], ["blau", "blue", ""], ["grün", "green", ""],
    ["gelb", "yellow", ""], ["schwarz", "black", ""], ["weiß", "white", ""],
    ["grau", "gray", ""], ["braun", "brown", ""], ["orange", "orange", ""],
    ["rosa", "pink", ""], ["lila", "purple", ""], ["bunt", "colorful", ""],
  ],
  "Family": [
    ["die Familie", "family", "die"], ["die Mutter", "mother", "die"],
    ["der Vater", "father", "der"], ["die Eltern", "parents", "die (pl)"],
    ["der Sohn", "son", "der"], ["die Tochter", "daughter", "die"],
    ["der Bruder", "brother", "der"], ["die Schwester", "sister", "die"],
    ["die Großmutter", "grandmother", "die"], ["der Großvater", "grandfather", "der"],
    ["das Kind", "child", "das"], ["der Onkel", "uncle", "der"],
    ["die Tante", "aunt", "die"], ["der Cousin", "cousin (m)", "der"],
  ],
  "Food & Drink": [
    ["das Brot", "bread", "das"], ["das Wasser", "water", "das"],
    ["der Kaffee", "coffee", "der"], ["der Tee", "tea", "der"],
    ["das Bier", "beer", "das"], ["der Wein", "wine", "der"],
    ["der Apfel", "apple", "der"], ["die Kartoffel", "potato", "die"],
    ["das Fleisch", "meat", "das"], ["der Käse", "cheese", "der"],
    ["das Ei", "egg", "das"], ["die Milch", "milk", "die"],
    ["der Zucker", "sugar", "der"], ["das Gemüse", "vegetables", "das"],
    ["das Obst", "fruit", "das"], ["das Frühstück", "breakfast", "das"],
  ],
  "Animals": [
    ["der Hund", "dog", "der"], ["die Katze", "cat", "die"],
    ["das Pferd", "horse", "das"], ["der Vogel", "bird", "der"],
    ["der Fisch", "fish", "der"], ["die Kuh", "cow", "die"],
    ["das Schwein", "pig", "das"], ["das Schaf", "sheep", "das"],
    ["der Bär", "bear", "der"], ["der Löwe", "lion", "der"],
    ["die Maus", "mouse", "die"], ["das Kaninchen", "rabbit", "das"],
  ],
  "Body": [
    ["der Kopf", "head", "der"], ["das Auge", "eye", "das"],
    ["die Nase", "nose", "die"], ["der Mund", "mouth", "der"],
    ["das Ohr", "ear", "das"], ["die Hand", "hand", "die"],
    ["der Arm", "arm", "der"], ["das Bein", "leg", "das"],
    ["der Fuß", "foot", "der"], ["das Herz", "heart", "das"],
    ["der Rücken", "back", "der"], ["der Bauch", "belly", "der"],
  ],
  "Time & Calendar": [
    ["Montag", "Monday", ""], ["Dienstag", "Tuesday", ""],
    ["Mittwoch", "Wednesday", ""], ["Donnerstag", "Thursday", ""],
    ["Freitag", "Friday", ""], ["Samstag", "Saturday", ""],
    ["Sonntag", "Sunday", ""], ["heute", "today", ""],
    ["morgen", "tomorrow", ""], ["gestern", "yesterday", ""],
    ["die Woche", "week", "die"], ["der Monat", "month", "der"],
    ["das Jahr", "year", "das"], ["die Stunde", "hour", "die"],
    ["die Minute", "minute", "die"], ["jetzt", "now", ""],
  ],
  "Travel & Places": [
    ["der Bahnhof", "train station", "der"], ["der Flughafen", "airport", "der"],
    ["das Hotel", "hotel", "das"], ["der Zug", "train", "der"],
    ["das Auto", "car", "das"], ["das Flugzeug", "airplane", "das"],
    ["die Straße", "street", "die"], ["die Stadt", "city", "die"],
    ["das Land", "country", "das"], ["links", "left", ""],
    ["rechts", "right", ""], ["geradeaus", "straight ahead", ""],
    ["die Karte", "map / ticket", "die"], ["der Ausgang", "exit", "der"],
  ],
  "Home": [
    ["das Haus", "house", "das"], ["die Wohnung", "apartment", "die"],
    ["die Küche", "kitchen", "die"], ["das Schlafzimmer", "bedroom", "das"],
    ["das Bad", "bathroom", "das"], ["der Tisch", "table", "der"],
    ["der Stuhl", "chair", "der"], ["das Bett", "bed", "das"],
    ["die Tür", "door", "die"], ["das Fenster", "window", "das"],
    ["die Lampe", "lamp", "die"], ["der Kühlschrank", "fridge", "der"],
  ],
  "Weather": [
    ["das Wetter", "weather", "das"], ["die Sonne", "sun", "die"],
    ["der Regen", "rain", "der"], ["der Schnee", "snow", "der"],
    ["der Wind", "wind", "der"], ["die Wolke", "cloud", "die"],
    ["warm", "warm", ""], ["kalt", "cold", ""],
    ["heiß", "hot", ""], ["sonnig", "sunny", ""],
    ["regnerisch", "rainy", ""], ["windig", "windy", ""],
  ],
  "Common Verbs": [
    ["sein", "to be", ""], ["haben", "to have", ""],
    ["gehen", "to go", ""], ["kommen", "to come", ""],
    ["machen", "to do/make", ""], ["sagen", "to say", ""],
    ["essen", "to eat", ""], ["trinken", "to drink", ""],
    ["sprechen", "to speak", ""], ["sehen", "to see", ""],
    ["wissen", "to know (fact)", ""], ["wollen", "to want", ""],
    ["können", "can / to be able", ""], ["arbeiten", "to work", ""],
    ["lernen", "to learn", ""], ["verstehen", "to understand", ""],
  ],
  "Adjectives": [
    ["groß", "big / tall", ""], ["klein", "small", ""],
    ["gut", "good", ""], ["schlecht", "bad", ""],
    ["neu", "new", ""], ["alt", "old", ""],
    ["schön", "beautiful", ""], ["schnell", "fast", ""],
    ["langsam", "slow", ""], ["teuer", "expensive", ""],
    ["billig", "cheap", ""], ["glücklich", "happy", ""],
    ["müde", "tired", ""], ["hungrig", "hungry", ""],
  ],
  "Question Words": [
    ["wer", "who", ""], ["was", "what", ""], ["wo", "where", ""],
    ["wann", "when", ""], ["warum", "why", ""], ["wie", "how", ""],
    ["welche", "which", ""], ["wie viel", "how much", ""],
    ["wie viele", "how many", ""], ["woher", "from where", ""],
    ["wohin", "to where", ""],
  ],
  "Feelings & Opinions": [
    ["die Freude", "joy", "die"], ["die Angst", "fear", "die"],
    ["die Hoffnung", "hope", "die"], ["stolz", "proud", ""],
    ["enttäuscht", "disappointed", ""], ["überrascht", "surprised", ""],
    ["begeistert", "enthusiastic", ""], ["der Zweifel", "doubt", "der"],
    ["Meiner Meinung nach", "In my opinion", ""],
    ["Ich finde, dass ...", "I think that ...", ""],
    ["einverstanden", "in agreement", ""], ["neidisch", "envious", ""],
  ],
  "Work & Study": [
    ["der Beruf", "profession", "der"], ["die Arbeit", "work", "die"],
    ["das Studium", "university studies", "das"], ["die Ausbildung", "apprenticeship", "die"],
    ["der Termin", "appointment", "der"], ["die Besprechung", "meeting", "die"],
    ["der Kollege", "colleague", "der"], ["das Gehalt", "salary", "das"],
    ["die Bewerbung", "job application", "die"], ["die Erfahrung", "experience", "die"],
    ["die Kenntnisse", "skills/knowledge", "die (pl)"], ["der Vertrag", "contract", "der"],
  ],
  "Connecting Words": [
    ["weil", "because", ""], ["dass", "that", ""], ["obwohl", "although", ""],
    ["deshalb", "therefore", ""], ["trotzdem", "nevertheless", ""],
    ["außerdem", "moreover", ""], ["zuerst", "first", ""],
    ["danach", "after that", ""], ["schließlich", "finally", ""],
    ["jedoch", "however", ""], ["sobald", "as soon as", ""], ["damit", "so that", ""],
  ],
  "Society & Environment": [
    ["die Gesellschaft", "society", "die"], ["die Umwelt", "environment", "die"],
    ["die Politik", "politics", "die"], ["die Wirtschaft", "economy", "die"],
    ["die Entwicklung", "development", "die"], ["die Möglichkeit", "possibility", "die"],
    ["die Verantwortung", "responsibility", "die"], ["die Auswirkung", "impact", "die"],
    ["nachhaltig", "sustainable", ""], ["die Herausforderung", "challenge", "die"],
    ["die Bildung", "education", "die"], ["die Meinung", "opinion", "die"],
  ],
  "Academic & Formal": [
    ["die Voraussetzung", "prerequisite", "die"], ["der Zusammenhang", "context", "der"],
    ["die These", "thesis/claim", "die"], ["hinsichtlich", "regarding", "(+gen)"],
    ["dennoch", "nonetheless", ""], ["folglich", "consequently", ""],
    ["die Erkenntnis", "insight/finding", "die"], ["berücksichtigen", "to take into account", ""],
    ["einerseits ... andererseits", "on one hand ... on the other", ""],
    ["gegebenenfalls", "if applicable", ""], ["die Schlussfolgerung", "conclusion", "die"],
    ["maßgeblich", "decisive", ""],
  ],
  "Idioms & Nuance": [
    ["die Nase voll haben", "to be fed up", ""],
    ["Schwein haben", "to get lucky", ""],
    ["die Daumen drücken", "to keep fingers crossed", ""],
    ["jemandem auf die Nerven gehen", "to get on someone's nerves", ""],
    ["das ist mir Wurst", "I couldn't care less", ""],
    ["Tomaten auf den Augen haben", "to miss the obvious", ""],
    ["die Katze im Sack kaufen", "to buy a pig in a poke", ""],
    ["um den heißen Brei reden", "to beat around the bush", ""],
    ["aus dem Häuschen sein", "to be over the moon", ""],
    ["den Nagel auf den Kopf treffen", "to hit the nail on the head", ""],
    ["die Flinte ins Korn werfen", "to throw in the towel", ""],
    ["Bahnhof verstehen", "to understand nothing", ""],
    ["das A und O", "the be-all and end-all", ""],
    ["auf dem Schlauch stehen", "to be stumped", ""],
    ["die Kirche im Dorf lassen", "to not overreact", ""],
  ],
};

/* ---------------- Phrases ---------------- */
DATA.phrases = {
  "Introducing Yourself": [
    ["Wie heißt du?", "What's your name? (informal)"],
    ["Ich heiße ...", "My name is ..."],
    ["Wie geht es dir?", "How are you? (informal)"],
    ["Mir geht es gut, danke.", "I'm doing well, thanks."],
    ["Woher kommst du?", "Where are you from?"],
    ["Ich komme aus ...", "I come from ..."],
    ["Freut mich!", "Nice to meet you!"],
    ["Ich spreche ein bisschen Deutsch.", "I speak a little German."],
  ],
  "Getting Help": [
    ["Sprechen Sie Englisch?", "Do you speak English? (formal)"],
    ["Ich verstehe nicht.", "I don't understand."],
    ["Können Sie das wiederholen?", "Can you repeat that?"],
    ["Langsamer, bitte.", "Slower, please."],
    ["Wie sagt man ... auf Deutsch?", "How do you say ... in German?"],
    ["Was bedeutet das?", "What does that mean?"],
    ["Können Sie mir helfen?", "Can you help me?"],
  ],
  "At a Restaurant": [
    ["Einen Tisch für zwei, bitte.", "A table for two, please."],
    ["Die Speisekarte, bitte.", "The menu, please."],
    ["Ich möchte ...", "I would like ..."],
    ["Was empfehlen Sie?", "What do you recommend?"],
    ["Die Rechnung, bitte.", "The check, please."],
    ["Das schmeckt gut!", "That tastes good!"],
    ["Zum Wohl! / Prost!", "Cheers!"],
    ["Ich bin Vegetarier.", "I'm a vegetarian."],
  ],
  "Shopping": [
    ["Was kostet das?", "How much does that cost?"],
    ["Das ist zu teuer.", "That's too expensive."],
    ["Haben Sie das in einer anderen Größe?", "Do you have this in another size?"],
    ["Ich schaue nur.", "I'm just looking."],
    ["Kann ich mit Karte zahlen?", "Can I pay by card?"],
    ["Wo ist die Kasse?", "Where is the checkout?"],
  ],
  "Directions": [
    ["Wo ist die Toilette?", "Where is the toilet?"],
    ["Wie komme ich zum Bahnhof?", "How do I get to the station?"],
    ["Ist es weit?", "Is it far?"],
    ["Gehen Sie geradeaus.", "Go straight ahead."],
    ["Biegen Sie links ab.", "Turn left."],
    ["Es ist gleich um die Ecke.", "It's just around the corner."],
  ],
  "Emergencies": [
    ["Hilfe!", "Help!"],
    ["Rufen Sie einen Krankenwagen!", "Call an ambulance!"],
    ["Ich brauche einen Arzt.", "I need a doctor."],
    ["Ich habe mich verlaufen.", "I'm lost."],
    ["Es ist ein Notfall.", "It's an emergency."],
    ["Rufen Sie die Polizei!", "Call the police!"],
  ],
};

/* ---------------- Grammar lessons ---------------- */
DATA.grammar = [
  {
    id: "gender",
    title: "Gender & Articles (der/die/das)",
    body: `
<p>Every German noun has one of three genders. The definite article ("the") shows it:</p>
<table class="g-table">
<tr><th>Gender</th><th>Definite (the)</th><th>Indefinite (a)</th><th>Example</th></tr>
<tr><td>Masculine</td><td>der</td><td>ein</td><td>der Mann (the man)</td></tr>
<tr><td>Feminine</td><td>die</td><td>eine</td><td>die Frau (the woman)</td></tr>
<tr><td>Neuter</td><td>das</td><td>ein</td><td>das Kind (the child)</td></tr>
<tr><td>Plural</td><td>die</td><td>—</td><td>die Kinder (the children)</td></tr>
</table>
<p><strong>Tip:</strong> Always learn the article <em>with</em> the noun. Some patterns help:
words ending in <em>-ung, -heit, -keit, -schaft, -tion</em> are usually feminine;
<em>-chen, -lein, -ment</em> are neuter; <em>-er</em> (people/tools) are often masculine.</p>`,
  },
  {
    id: "cases",
    title: "The Four Cases",
    body: `
<p>German nouns change their articles depending on their <strong>role</strong> in the sentence.</p>
<table class="g-table">
<tr><th>Case</th><th>Role</th><th>der</th><th>die</th><th>das</th><th>plural</th></tr>
<tr><td>Nominative</td><td>subject</td><td>der</td><td>die</td><td>das</td><td>die</td></tr>
<tr><td>Accusative</td><td>direct object</td><td><b>den</b></td><td>die</td><td>das</td><td>die</td></tr>
<tr><td>Dative</td><td>indirect object</td><td><b>dem</b></td><td><b>der</b></td><td><b>dem</b></td><td><b>den</b> (+n)</td></tr>
<tr><td>Genitive</td><td>possession</td><td><b>des</b> (+s)</td><td><b>der</b></td><td><b>des</b> (+s)</td><td><b>der</b></td></tr>
</table>
<p><em>Der Mann</em> gibt <em>dem Kind</em> <em>den Ball</em>. → "The man gives the child the ball."
(Mann = subject/nom, Kind = indirect/dat, Ball = direct/acc.)</p>`,
  },
  {
    id: "pronouns",
    title: "Personal Pronouns",
    body: `
<table class="g-table">
<tr><th>English</th><th>Nominative</th><th>Accusative</th><th>Dative</th></tr>
<tr><td>I</td><td>ich</td><td>mich</td><td>mir</td></tr>
<tr><td>you (sg, informal)</td><td>du</td><td>dich</td><td>dir</td></tr>
<tr><td>he</td><td>er</td><td>ihn</td><td>ihm</td></tr>
<tr><td>she</td><td>sie</td><td>sie</td><td>ihr</td></tr>
<tr><td>it</td><td>es</td><td>es</td><td>ihm</td></tr>
<tr><td>we</td><td>wir</td><td>uns</td><td>uns</td></tr>
<tr><td>you (pl, informal)</td><td>ihr</td><td>euch</td><td>euch</td></tr>
<tr><td>they / you (formal)</td><td>sie / Sie</td><td>sie / Sie</td><td>ihnen / Ihnen</td></tr>
</table>
<p><strong>Formal vs informal:</strong> Use <em>du</em> with friends, family, children. Use <em>Sie</em> (always capitalized) with strangers and in professional settings.</p>`,
  },
  {
    id: "present",
    title: "Present Tense (Regular Verbs)",
    body: `
<p>Take the stem (infinitive minus <em>-en</em>) and add endings. Example: <em>spielen</em> (to play), stem = <em>spiel-</em>:</p>
<table class="g-table">
<tr><th>Pronoun</th><th>Ending</th><th>Example</th></tr>
<tr><td>ich</td><td>-e</td><td>ich spiele</td></tr>
<tr><td>du</td><td>-st</td><td>du spielst</td></tr>
<tr><td>er/sie/es</td><td>-t</td><td>er spielt</td></tr>
<tr><td>wir</td><td>-en</td><td>wir spielen</td></tr>
<tr><td>ihr</td><td>-t</td><td>ihr spielt</td></tr>
<tr><td>sie/Sie</td><td>-en</td><td>sie spielen</td></tr>
</table>
<p>German has <strong>no continuous tense</strong> — "ich spiele" means both "I play" and "I am playing".</p>`,
  },
  {
    id: "seinhaben",
    title: "sein & haben (to be / to have)",
    body: `
<p>The two most important irregular verbs. Memorize them fully.</p>
<table class="g-table">
<tr><th>Pronoun</th><th>sein (to be)</th><th>haben (to have)</th></tr>
<tr><td>ich</td><td>bin</td><td>habe</td></tr>
<tr><td>du</td><td>bist</td><td>hast</td></tr>
<tr><td>er/sie/es</td><td>ist</td><td>hat</td></tr>
<tr><td>wir</td><td>sind</td><td>haben</td></tr>
<tr><td>ihr</td><td>seid</td><td>habt</td></tr>
<tr><td>sie/Sie</td><td>sind</td><td>haben</td></tr>
</table>`,
  },
  {
    id: "modals",
    title: "Modal Verbs",
    body: `
<p>Modal verbs (can, must, want...) send the main verb to the <strong>end</strong> as an infinitive.</p>
<p><em>Ich <b>muss</b> jetzt gehen.</em> → "I must go now."</p>
<table class="g-table">
<tr><th></th><th>können<br>(can)</th><th>müssen<br>(must)</th><th>wollen<br>(want)</th><th>dürfen<br>(may)</th><th>sollen<br>(should)</th><th>mögen<br>(like)</th></tr>
<tr><td>ich</td><td>kann</td><td>muss</td><td>will</td><td>darf</td><td>soll</td><td>mag</td></tr>
<tr><td>du</td><td>kannst</td><td>musst</td><td>willst</td><td>darfst</td><td>sollst</td><td>magst</td></tr>
<tr><td>er/sie/es</td><td>kann</td><td>muss</td><td>will</td><td>darf</td><td>soll</td><td>mag</td></tr>
<tr><td>wir</td><td>können</td><td>müssen</td><td>wollen</td><td>dürfen</td><td>sollen</td><td>mögen</td></tr>
</table>`,
  },
  {
    id: "perfekt",
    title: "Past Tense (Perfekt)",
    body: `
<p>Everyday spoken past uses <strong>haben/sein + past participle</strong> (at the end).</p>
<p><em>Ich <b>habe</b> Pizza <b>gegessen</b>.</em> → "I ate/have eaten pizza."<br>
<em>Sie <b>ist</b> nach Berlin <b>gefahren</b>.</em> → "She went to Berlin."</p>
<p><strong>Participles:</strong> regular verbs → <em>ge-</em> + stem + <em>-t</em> (spielen → gespielt).
Many strong verbs → <em>ge-</em> + stem + <em>-en</em> (essen → gegessen).</p>
<p><strong>Use sein</strong> (not haben) with verbs of movement/change of state: gehen, fahren, kommen, laufen, werden, sein.</p>`,
  },
  {
    id: "wordorder",
    title: "Word Order",
    body: `
<p><strong>Rule 1 — Verb second:</strong> In a statement, the conjugated verb is always the 2nd element.</p>
<p><em>Heute <b>gehe</b> ich ins Kino.</em> ("Today I go to the cinema." — note verb before subject.)</p>
<p><strong>Rule 2 — Verb to the end:</strong> In subordinate clauses (weil, dass, wenn...), the verb goes last.</p>
<p><em>Ich bleibe zu Hause, weil ich krank <b>bin</b>.</em> ("I'm staying home because I am sick.")</p>
<p><strong>Rule 3 — TeKaMoLo:</strong> When stacking info, order is <em>Time – Manner – Place</em>.
<em>Ich fahre <b>morgen</b> (time) <b>mit dem Zug</b> (manner) <b>nach Köln</b> (place).</em></p>`,
  },
  {
    id: "plurals",
    title: "Plurals",
    body: `
<p>German has several plural patterns — learn them with the word. Common ones:</p>
<table class="g-table">
<tr><th>Pattern</th><th>Singular → Plural</th></tr>
<tr><td>-e</td><td>der Tisch → die Tisch<b>e</b></td></tr>
<tr><td>-er (+ umlaut)</td><td>das Kind → die Kind<b>er</b>; das Buch → die B<b>ü</b>ch<b>er</b></td></tr>
<tr><td>-(e)n</td><td>die Frau → die Frau<b>en</b>; die Blume → die Blume<b>n</b></td></tr>
<tr><td>-s (loanwords)</td><td>das Auto → die Auto<b>s</b></td></tr>
<tr><td>umlaut only</td><td>der Vater → die V<b>ä</b>ter</td></tr>
</table>
<p>Remember: the plural article is always <strong>die</strong> in the nominative.</p>`,
  },
  {
    id: "negation",
    title: "Negation (nicht & kein)",
    body: `
<p><strong>kein</strong> negates a noun with an indefinite article or no article:</p>
<p><em>Ich habe <b>kein</b> Auto.</em> ("I don't have a car.")<br>
<em>Das ist <b>keine</b> gute Idee.</em> ("That's not a good idea.")</p>
<p><strong>nicht</strong> negates verbs, adjectives, or specific things:</p>
<p><em>Ich verstehe das <b>nicht</b>.</em> ("I don't understand that.")<br>
<em>Der Kaffee ist <b>nicht</b> heiß.</em> ("The coffee is not hot.")</p>`,
  },
  {
    id: "adjendings",
    title: "Adjective Endings (overview)",
    body: `
<p>Adjectives <em>before</em> a noun take an ending; adjectives after "sein" do not.</p>
<p><em>Das Auto ist <b>rot</b>.</em> (no ending) → <em>Das <b>rote</b> Auto.</em> (ending -e)</p>
<p>After <strong>der/die/das</strong> (definite), endings are simple — mostly <b>-e</b> or <b>-en</b>:</p>
<table class="g-table">
<tr><th></th><th>masc</th><th>fem</th><th>neut</th><th>plural</th></tr>
<tr><td>Nom</td><td>der gut<b>e</b></td><td>die gut<b>e</b></td><td>das gut<b>e</b></td><td>die gut<b>en</b></td></tr>
<tr><td>Acc</td><td>den gut<b>en</b></td><td>die gut<b>e</b></td><td>das gut<b>e</b></td><td>die gut<b>en</b></td></tr>
</table>
<p>This is one of the trickier topics — don't rush it. Focus on getting the meaning across first.</p>`,
  },
  {
    id: "prepositions",
    title: "Prepositions & Cases",
    body: `
<p>Prepositions force a case on the following noun.</p>
<p><strong>Always Accusative:</strong> durch, für, gegen, ohne, um.<br>
<strong>Always Dative:</strong> aus, bei, mit, nach, seit, von, zu.<br>
<strong>Two-way (Wechsel):</strong> an, auf, hinter, in, neben, über, unter, vor, zwischen —
use <em>accusative</em> for motion (wohin?), <em>dative</em> for location (wo?).</p>
<p><em>Ich gehe <b>in die</b> Schule.</em> (motion → acc)<br>
<em>Ich bin <b>in der</b> Schule.</em> (location → dat)</p>`,
  },
  {
    id: "praeteritum",
    title: "Simple Past (Präteritum)",
    body: `
<p>The <strong>Präteritum</strong> is the "written" past — used in books, news and reports, and always for <em>sein, haben</em> and modal verbs even in speech.</p>
<table class="g-table">
<tr><th></th><th>sein</th><th>haben</th><th>machen (weak)</th><th>gehen (strong)</th></tr>
<tr><td>ich</td><td>war</td><td>hatte</td><td>machte</td><td>ging</td></tr>
<tr><td>du</td><td>warst</td><td>hattest</td><td>machtest</td><td>gingst</td></tr>
<tr><td>er/sie/es</td><td>war</td><td>hatte</td><td>machte</td><td>ging</td></tr>
<tr><td>wir</td><td>waren</td><td>hatten</td><td>machten</td><td>gingen</td></tr>
</table>
<p><strong>Weak verbs</strong> add <em>-te</em> to the stem (machen → machte). <strong>Strong verbs</strong> change their vowel (gehen → ging, fahren → fuhr, sehen → sah).</p>`,
  },
  {
    id: "reflexive",
    title: "Reflexive Verbs",
    body: `
<p>Reflexive verbs describe an action done to oneself. They need a <strong>reflexive pronoun</strong>.</p>
<p><em>Ich freue <b>mich</b>.</em> (I'm happy.) · <em>Er wäscht <b>sich</b>.</em> (He washes himself.)</p>
<table class="g-table">
<tr><th></th><th>Accusative</th><th>Dative</th></tr>
<tr><td>ich</td><td>mich</td><td>mir</td></tr>
<tr><td>du</td><td>dich</td><td>dir</td></tr>
<tr><td>er/sie/es</td><td>sich</td><td>sich</td></tr>
<tr><td>wir / ihr / sie</td><td>uns / euch / sich</td><td>uns / euch / sich</td></tr>
</table>
<p>Common ones: <em>sich freuen</em> (be glad), <em>sich interessieren für</em> (be interested in), <em>sich erinnern an</em> (remember), <em>sich fühlen</em> (feel). Use <strong>dative</strong> when there's already a direct object: <em>Ich putze <b>mir</b> die Zähne.</em></p>`,
  },
  {
    id: "future",
    title: "Future Tense (Futur I)",
    body: `
<p>Formed with <strong>werden + infinitive</strong> (infinitive goes to the end).</p>
<p><em>Ich <b>werde</b> morgen nach Berlin <b>fahren</b>.</em> ("I will travel to Berlin tomorrow.")</p>
<table class="g-table">
<tr><td>ich werde</td><td>wir werden</td></tr>
<tr><td>du wirst</td><td>ihr werdet</td></tr>
<tr><td>er/sie/es wird</td><td>sie/Sie werden</td></tr>
</table>
<p><strong>Note:</strong> Germans often use the <em>present tense + a time word</em> for the future: <em>Morgen fahre ich nach Berlin.</em> Futur I is also used to express a present-time assumption: <em>Er wird wohl krank sein.</em> ("He's probably sick.")</p>`,
  },
  {
    id: "konjunktiv2",
    title: "Konjunktiv II (Would / Could / Should)",
    body: `
<p>The subjunctive for <strong>politeness, wishes and hypotheticals</strong>. Everyday form: <strong>würde + infinitive</strong>.</p>
<p><em>Ich <b>würde</b> gern nach Italien <b>reisen</b>.</em> ("I would like to travel to Italy.")</p>
<p>But the most common verbs have their own one-word forms — learn these:</p>
<table class="g-table">
<tr><th>Verb</th><th>Konjunktiv II</th><th>Meaning</th></tr>
<tr><td>sein</td><td>ich wäre</td><td>I would be</td></tr>
<tr><td>haben</td><td>ich hätte</td><td>I would have</td></tr>
<tr><td>können</td><td>ich könnte</td><td>I could</td></tr>
<tr><td>müssen</td><td>ich müsste</td><td>I would have to</td></tr>
<tr><td>werden</td><td>ich würde</td><td>I would</td></tr>
</table>
<p><strong>Polite:</strong> <em>Könnten Sie mir helfen?</em> · <strong>Wish:</strong> <em>Ich hätte gern einen Kaffee.</em> · <strong>Advice:</strong> <em>An deiner Stelle würde ich bleiben.</em> ("If I were you, I'd stay.")</p>`,
  },
  {
    id: "passive",
    title: "Passive Voice (Passiv)",
    body: `
<p>The passive puts the <em>action</em> in focus, not who does it. Formed with <strong>werden + Partizip II</strong>.</p>
<table class="g-table">
<tr><th>Tense</th><th>Example</th></tr>
<tr><td>Present</td><td>Das Haus <b>wird gebaut</b>. (is being built)</td></tr>
<tr><td>Präteritum</td><td>Das Haus <b>wurde gebaut</b>. (was built)</td></tr>
<tr><td>Perfekt</td><td>Das Haus <b>ist gebaut worden</b>. (has been built)</td></tr>
</table>
<p>Name the doer with <strong>von + dative</strong>: <em>Der Brief wird <b>von der Chefin</b> geschrieben.</em>
Compare with active: <em>Die Chefin schreibt den Brief.</em></p>`,
  },
  {
    id: "relative",
    title: "Relative Clauses",
    body: `
<p>Relative clauses add info about a noun using <em>der/die/das</em> as "who/which/that". The pronoun's <strong>gender & number</strong> come from the noun; its <strong>case</strong> comes from its role in the relative clause. The verb goes to the <strong>end</strong>.</p>
<p><em>Das ist der Mann, <b>der</b> nebenan wohnt.</em> (subject → nominative)<br>
<em>Das ist der Film, <b>den</b> ich gesehen habe.</em> (object → accusative)<br>
<em>Das ist die Frau, <b>mit der</b> ich gesprochen habe.</em> (after preposition → dative)</p>
<table class="g-table">
<tr><th></th><th>masc</th><th>fem</th><th>neut</th><th>plural</th></tr>
<tr><td>Nom</td><td>der</td><td>die</td><td>das</td><td>die</td></tr>
<tr><td>Acc</td><td>den</td><td>die</td><td>das</td><td>die</td></tr>
<tr><td>Dat</td><td>dem</td><td>der</td><td>dem</td><td>denen</td></tr>
</table>`,
  },
  {
    id: "connectors",
    title: "Connectors (Konnektoren)",
    body: `
<p>Connectors join ideas — and each type affects word order differently.</p>
<table class="g-table">
<tr><th>Type</th><th>Words</th><th>Effect on verb</th></tr>
<tr><td>Coordinating</td><td>und, aber, oder, denn, sondern</td><td>no change (verb stays 2nd)</td></tr>
<tr><td>Adverbial</td><td>deshalb, trotzdem, dann, außerdem</td><td>verb comes right after (inversion)</td></tr>
<tr><td>Subordinating</td><td>weil, dass, obwohl, wenn, damit</td><td>verb goes to the end</td></tr>
</table>
<p><em>Es regnet, <b>deshalb bleibe</b> ich zu Hause.</em> (inversion)<br>
<em>Ich bleibe zu Hause, <b>weil</b> es <b>regnet</b>.</em> (verb last)</p>
<p><strong>Two-part:</strong> <em>entweder … oder</em> (either…or), <em>zwar … aber</em> (admittedly…but), <em>je … desto</em> (the more…the more).</p>`,
  },
  {
    id: "konjunktiv1",
    title: "Indirect Speech (Konjunktiv I)",
    body: `
<p>Used in journalism and formal writing to report what someone said <em>without vouching for it</em>. Built from the verb stem + subjunctive endings.</p>
<p>Direct: <em>Er sagt: „Ich <b>habe</b> keine Zeit."</em><br>
Indirect: <em>Er sagt, er <b>habe</b> keine Zeit.</em></p>
<table class="g-table">
<tr><th>Indikativ</th><th>Konjunktiv I</th></tr>
<tr><td>er ist</td><td>er <b>sei</b></td></tr>
<tr><td>er hat</td><td>er <b>habe</b></td></tr>
<tr><td>er kommt</td><td>er <b>komme</b></td></tr>
<tr><td>sie haben</td><td>sie <b>hätten</b> (→ K II, to stay distinct)</td></tr>
</table>
<p><strong>Rule of thumb:</strong> when Konjunktiv I looks identical to the normal present, switch to Konjunktiv II so the reported nature stays clear.</p>`,
  },
  {
    id: "nominalstyle",
    title: "Nominal Style & Nominalisation",
    body: `
<p>Formal, academic and official German prefers <strong>nouns over verbs</strong> — the "Nominalstil". Verbal clauses get compressed into noun phrases.</p>
<p>Verbal: <em>Weil die Preise <b>gestiegen sind</b>, …</em><br>
Nominal: <em>Wegen <b>des Anstiegs</b> der Preise …</em> ("Due to the rise in prices …")</p>
<table class="g-table">
<tr><th>Verb</th><th>Noun</th></tr>
<tr><td>prüfen</td><td>die Prüfung</td></tr>
<tr><td>entscheiden</td><td>die Entscheidung</td></tr>
<tr><td>entwickeln</td><td>die Entwicklung</td></tr>
<tr><td>ankommen</td><td>die Ankunft</td></tr>
</table>
<p><strong>C2 skill:</strong> recognise nominal style effortlessly when reading dense texts, and deploy it deliberately in formal writing — but keep speech verbal and natural.</p>`,
  },
  {
    id: "modalparticles",
    title: "Modal Particles (Modalpartikeln)",
    body: `
<p>Tiny "flavouring" words that colour a sentence's tone. They rarely translate directly — mastering them is what makes you sound truly native.</p>
<table class="g-table">
<tr><th>Particle</th><th>Adds…</th><th>Example</th></tr>
<tr><td>doch</td><td>contradiction / emphasis</td><td>Komm <b>doch</b> mit! (Do come along!)</td></tr>
<tr><td>mal</td><td>softens a request</td><td>Warte <b>mal</b>. (Hang on a sec.)</td></tr>
<tr><td>ja</td><td>shared knowledge / surprise</td><td>Das ist <b>ja</b> toll! (Well that's great!)</td></tr>
<tr><td>halt / eben</td><td>resignation ("just how it is")</td><td>Das ist <b>halt</b> so.</td></tr>
<tr><td>wohl</td><td>probably</td><td>Er ist <b>wohl</b> krank.</td></tr>
<tr><td>denn</td><td>interest in a question</td><td>Was machst du <b>denn</b>? </td></tr>
</table>`,
  },
  {
    id: "partizipial",
    title: "Extended Participial Attributes",
    body: `
<p>A hallmark of written German: a whole descriptive phrase packed <strong>before</strong> the noun, built on a participle.</p>
<p><em>der <b>seit Tagen anhaltende</b> Regen</em> = "the rain that has been going on for days"<br>
<em>die <b>von der Regierung beschlossenen</b> Maßnahmen</em> = "the measures decided on by the government"</p>
<p><strong>Partizip I</strong> (stem + <em>-end</em>) is active and ongoing: <em>die steigenden Preise</em> (the rising prices).<br>
<strong>Partizip II</strong> is passive/completed: <em>das gekochte Ei</em> (the boiled egg).</p>
<p>To read these, find the noun first, then unpack the phrase in front of it as a relative clause.</p>`,
  },
  {
    id: "subjmodals",
    title: "Subjective Use of Modal Verbs",
    body: `
<p>Beyond "can/must/want", modal verbs express the speaker's <strong>attitude toward how certain a claim is</strong> — a subtle C1 skill.</p>
<table class="g-table">
<tr><th>Modal</th><th>Subjective meaning</th><th>Example</th></tr>
<tr><td>sollen</td><td>reportedly (others say)</td><td>Er <b>soll</b> sehr reich sein. — He's said to be rich.</td></tr>
<tr><td>wollen</td><td>claims (unverified)</td><td>Sie <b>will</b> alles gesehen haben. — She claims to have seen everything.</td></tr>
<tr><td>dürfte</td><td>probably</td><td>Das <b>dürfte</b> stimmen. — That's probably true.</td></tr>
<tr><td>müsste</td><td>ought to (by logic)</td><td>Er <b>müsste</b> schon da sein. — He ought to be here by now.</td></tr>
<tr><td>könnte</td><td>might</td><td>Das <b>könnte</b> gefährlich sein. — That could be dangerous.</td></tr>
<tr><td>mag</td><td>may well (concede)</td><td>Das <b>mag</b> sein. — That may well be.</td></tr>
</table>
<p>Note how <em>sollen</em> and <em>wollen</em> here have nothing to do with obligation or desire — context tells you it's the subjective sense.</p>`,
  },
];

/* ---------------- Verb conjugator data ----------------
   forms: [ich, du, er/sie/es, wir, ihr, sie/Sie], plus perfect participle & aux */
DATA.verbs = {
  sein:      { en: "to be",         type: "irregular", pres: ["bin","bist","ist","sind","seid","sind"], part: "gewesen", aux: "sein" },
  haben:     { en: "to have",       type: "irregular", pres: ["habe","hast","hat","haben","habt","haben"], part: "gehabt", aux: "haben" },
  werden:    { en: "to become",     type: "irregular", pres: ["werde","wirst","wird","werden","werdet","werden"], part: "geworden", aux: "sein" },
  gehen:     { en: "to go",         type: "strong",    pres: ["gehe","gehst","geht","gehen","geht","gehen"], part: "gegangen", aux: "sein" },
  kommen:    { en: "to come",       type: "strong",    pres: ["komme","kommst","kommt","kommen","kommt","kommen"], part: "gekommen", aux: "sein" },
  machen:    { en: "to do/make",    type: "regular",   pres: ["mache","machst","macht","machen","macht","machen"], part: "gemacht", aux: "haben" },
  spielen:   { en: "to play",       type: "regular",   pres: ["spiele","spielst","spielt","spielen","spielt","spielen"], part: "gespielt", aux: "haben" },
  lernen:    { en: "to learn",      type: "regular",   pres: ["lerne","lernst","lernt","lernen","lernt","lernen"], part: "gelernt", aux: "haben" },
  arbeiten:  { en: "to work",       type: "regular",   pres: ["arbeite","arbeitest","arbeitet","arbeiten","arbeitet","arbeiten"], part: "gearbeitet", aux: "haben" },
  essen:     { en: "to eat",        type: "strong",    pres: ["esse","isst","isst","essen","esst","essen"], part: "gegessen", aux: "haben" },
  trinken:   { en: "to drink",      type: "strong",    pres: ["trinke","trinkst","trinkt","trinken","trinkt","trinken"], part: "getrunken", aux: "haben" },
  sprechen:  { en: "to speak",      type: "strong",    pres: ["spreche","sprichst","spricht","sprechen","sprecht","sprechen"], part: "gesprochen", aux: "haben" },
  sehen:     { en: "to see",        type: "strong",    pres: ["sehe","siehst","sieht","sehen","seht","sehen"], part: "gesehen", aux: "haben" },
  fahren:    { en: "to drive/go",   type: "strong",    pres: ["fahre","fährst","fährt","fahren","fahrt","fahren"], part: "gefahren", aux: "sein" },
  lesen:     { en: "to read",       type: "strong",    pres: ["lese","liest","liest","lesen","lest","lesen"], part: "gelesen", aux: "haben" },
  nehmen:    { en: "to take",       type: "strong",    pres: ["nehme","nimmst","nimmt","nehmen","nehmt","nehmen"], part: "genommen", aux: "haben" },
  geben:     { en: "to give",       type: "strong",    pres: ["gebe","gibst","gibt","geben","gebt","geben"], part: "gegeben", aux: "haben" },
  finden:    { en: "to find",       type: "strong",    pres: ["finde","findest","findet","finden","findet","finden"], part: "gefunden", aux: "haben" },
  wissen:    { en: "to know",       type: "irregular", pres: ["weiß","weißt","weiß","wissen","wisst","wissen"], part: "gewusst", aux: "haben" },
  wohnen:    { en: "to live/reside",type: "regular",   pres: ["wohne","wohnst","wohnt","wohnen","wohnt","wohnen"], part: "gewohnt", aux: "haben" },
  kaufen:    { en: "to buy",        type: "regular",   pres: ["kaufe","kaufst","kauft","kaufen","kauft","kaufen"], part: "gekauft", aux: "haben" },
  schlafen:  { en: "to sleep",      type: "strong",    pres: ["schlafe","schläfst","schläft","schlafen","schlaft","schlafen"], part: "geschlafen", aux: "haben" },
};

DATA.pronounLabels = ["ich", "du", "er/sie/es", "wir", "ihr", "sie/Sie"];

/* ---------------- Grammar drills (fill-in-the-blank) ----------------
   Each item: q (sentence with ___), answer (| separates accepted forms),
   optional hint and en (translation). Answers are checked case-insensitively. */
DATA.exercises = [
  {
    id: "sein-haben", title: "sein & haben", level: "A1", topic: "Verbs",
    instructions: "Fill each blank with the correct form of sein or haben.",
    items: [
      { q: "Ich ___ müde.", answer: "bin", en: "I am tired." },
      { q: "Du ___ ein Auto.", answer: "hast", en: "You have a car." },
      { q: "Er ___ Lehrer.", answer: "ist", en: "He is a teacher." },
      { q: "Wir ___ Hunger.", answer: "haben", en: "We are hungry." },
      { q: "Sie ___ glücklich. (they)", answer: "sind", en: "They are happy." },
      { q: "Ihr ___ Zeit.", answer: "habt", en: "You (pl) have time." },
    ],
  },
  {
    id: "articles-nom", title: "Articles: der / die / das", level: "A1", topic: "Nouns",
    instructions: "Write the correct definite article (der, die or das).",
    items: [
      { q: "___ Mann", answer: "der", hint: "masculine", en: "the man" },
      { q: "___ Frau", answer: "die", hint: "feminine", en: "the woman" },
      { q: "___ Kind", answer: "das", hint: "neuter", en: "the child" },
      { q: "___ Katze", answer: "die", en: "the cat" },
      { q: "___ Haus", answer: "das", en: "the house" },
      { q: "___ Hund", answer: "der", en: "the dog" },
    ],
  },
  {
    id: "present-endings", title: "Present tense endings", level: "A1", topic: "Verbs",
    instructions: "Conjugate the verb in brackets in the present tense.",
    items: [
      { q: "ich ___ (spielen)", answer: "spiele", en: "I play" },
      { q: "du ___ (machen)", answer: "machst", en: "you do" },
      { q: "er ___ (wohnen)", answer: "wohnt", en: "he lives" },
      { q: "wir ___ (lernen)", answer: "lernen", en: "we learn" },
      { q: "ihr ___ (kaufen)", answer: "kauft", en: "you (pl) buy" },
    ],
  },
  {
    id: "perfekt-aux", title: "Perfekt: haben or sein?", level: "A2", topic: "Past tense",
    instructions: "Fill in the correct auxiliary (a form of haben or sein).",
    items: [
      { q: "Ich ___ Pizza gegessen.", answer: "habe", en: "I ate pizza." },
      { q: "Sie ___ nach Berlin gefahren.", answer: "ist", hint: "movement → sein", en: "She went to Berlin." },
      { q: "Wir ___ im Park gespielt.", answer: "haben", en: "We played in the park." },
      { q: "Er ___ früh aufgestanden.", answer: "ist", en: "He got up early." },
      { q: "Ihr ___ das Buch gelesen.", answer: "habt", en: "You (pl) read the book." },
    ],
  },
  {
    id: "modals-a2", title: "Modal verbs", level: "A2", topic: "Verbs",
    instructions: "Conjugate the modal verb in brackets.",
    items: [
      { q: "Ich ___ schwimmen. (können)", answer: "kann", en: "I can swim." },
      { q: "Du ___ lernen. (müssen)", answer: "musst", en: "You must study." },
      { q: "Er ___ schlafen. (wollen)", answer: "will", en: "He wants to sleep." },
      { q: "Wir ___ hier parken. (dürfen)", answer: "dürfen", en: "We may park here." },
    ],
  },
  {
    id: "akkusativ", title: "Accusative articles", level: "A2", topic: "Cases",
    instructions: "Put the definite article into the accusative case.",
    items: [
      { q: "Ich sehe ___ Mann. (der)", answer: "den", en: "I see the man." },
      { q: "Er hat ___ Katze. (die)", answer: "die", en: "He has the cat." },
      { q: "Wir besuchen ___ Kind. (das)", answer: "das", en: "We visit the child." },
      { q: "Sie kauft ___ Apfel. (der)", answer: "den", en: "She buys the apple." },
    ],
  },
  {
    id: "praeteritum-b1", title: "Präteritum (simple past)", level: "B1", topic: "Past tense",
    instructions: "Write the Präteritum form of the verb in brackets.",
    items: [
      { q: "Er ___ nach Hause. (gehen)", answer: "ging", en: "He went home." },
      { q: "Wir ___ keine Zeit. (haben)", answer: "hatten", en: "We had no time." },
      { q: "Ich ___ krank. (sein)", answer: "war", en: "I was sick." },
      { q: "Sie ___ die Tür zu. (machen)", answer: "machte", en: "She closed the door." },
      { q: "Ihr ___ zu spät. (kommen)", answer: "kamt", en: "You (pl) came too late." },
    ],
  },
  {
    id: "adj-endings-b1", title: "Adjective endings", level: "B1", topic: "Adjectives",
    instructions: "Add the correct ending after the definite article.",
    items: [
      { q: "der gut__ Mann", answer: "gute|e", en: "the good man" },
      { q: "die schön__ Frau", answer: "schöne|e", en: "the beautiful woman" },
      { q: "das klein__ Kind", answer: "kleine|e", en: "the small child" },
      { q: "Ich sehe den alt__ Hund.", answer: "alten|en", hint: "accusative masc.", en: "I see the old dog." },
    ],
  },
  {
    id: "reflexive-b1", title: "Reflexive pronouns", level: "B1", topic: "Verbs",
    instructions: "Insert the correct reflexive pronoun.",
    items: [
      { q: "Ich freue ___.", answer: "mich", en: "I'm glad." },
      { q: "Du wäschst ___.", answer: "dich", en: "You wash yourself." },
      { q: "Er interessiert ___ für Musik.", answer: "sich", en: "He's interested in music." },
      { q: "Wir treffen ___ um acht.", answer: "uns", en: "We meet at eight." },
    ],
  },
  {
    id: "konjunktiv2-b2", title: "Konjunktiv II", level: "B2", topic: "Mood",
    instructions: "Fill in the Konjunktiv II form of the verb in brackets.",
    items: [
      { q: "Ich ___ gern einen Kaffee. (haben)", answer: "hätte", en: "I'd like a coffee." },
      { q: "An deiner Stelle ___ ich vorsichtig. (sein)", answer: "wäre", en: "If I were you I'd be careful." },
      { q: "___ Sie mir helfen? (können)", answer: "könnten", en: "Could you help me?" },
      { q: "Ich ___ das nie tun. (werden)", answer: "würde", en: "I would never do that." },
    ],
  },
  {
    id: "passive-b2", title: "Passive voice", level: "B2", topic: "Voice",
    instructions: "Fill in the correct form of werden.",
    items: [
      { q: "Das Haus ___ gebaut. (present)", answer: "wird", en: "The house is being built." },
      { q: "Der Brief ___ gestern geschrieben. (past)", answer: "wurde", en: "The letter was written yesterday." },
      { q: "Die Autos ___ in Deutschland produziert. (present)", answer: "werden", en: "The cars are produced in Germany." },
    ],
  },
  {
    id: "relative-b2", title: "Relative pronouns", level: "B2", topic: "Clauses",
    instructions: "Choose the correct relative pronoun.",
    items: [
      { q: "Das ist der Mann, ___ nebenan wohnt.", answer: "der", hint: "subject", en: "…the man who lives next door." },
      { q: "Das ist die Frau, ___ ich gesehen habe.", answer: "die", hint: "object", en: "…the woman I saw." },
      { q: "Das ist das Kind, ___ ich geholfen habe.", answer: "dem", hint: "dative (helfen)", en: "…the child I helped." },
      { q: "Das ist der Film, ___ ich mag.", answer: "den", hint: "accusative", en: "…the film that I like." },
    ],
  },
  {
    id: "konjunktiv1-c1", title: "Indirect speech (Konjunktiv I)", level: "C1", topic: "Mood",
    instructions: "Write the Konjunktiv I form for reported speech.",
    items: [
      { q: "Er sagt, er ___ keine Zeit. (haben)", answer: "habe", en: "He says he has no time." },
      { q: "Sie meint, das ___ richtig. (sein)", answer: "sei", en: "She thinks that is correct." },
      { q: "Er behauptet, er ___ später. (kommen)", answer: "komme", en: "He claims he'll come later." },
    ],
  },
  {
    id: "comparatives-a2", title: "Comparative & superlative", level: "A2", topic: "Adjectives",
    instructions: "Write the comparative or superlative form of the adjective.",
    items: [
      { q: "Berlin ist ___ als München. (groß)", answer: "größer", en: "Berlin is bigger than Munich." },
      { q: "Der Zug ist ___ als das Auto. (schnell)", answer: "schneller", en: "The train is faster than the car." },
      { q: "Das ist das ___ Hotel der Stadt. (teuer)", answer: "teuerste", hint: "superlative", en: "That's the most expensive hotel in town." },
      { q: "Anna ist meine ___ Freundin. (gut, superlative)", answer: "beste", en: "Anna is my best friend." },
    ],
  },
  {
    id: "twoway-b1", title: "Two-way prepositions", level: "B1", topic: "Cases",
    instructions: "Choose accusative (motion) or dative (location) — fill in the article.",
    items: [
      { q: "Das Buch liegt auf ___ Tisch. (der)", answer: "dem", hint: "location → dative", en: "The book is lying on the table." },
      { q: "Ich lege das Buch auf ___ Tisch. (der)", answer: "den", hint: "motion → accusative", en: "I put the book on the table." },
      { q: "Wir gehen in ___ Schule. (die)", answer: "die", hint: "motion → accusative", en: "We go to school." },
      { q: "Die Kinder sind in ___ Schule. (die)", answer: "der", hint: "location → dative", en: "The children are at school." },
    ],
  },
  {
    id: "subjmodals-c1", title: "Subjective modal verbs", level: "C1", topic: "Mood",
    instructions: "Choose the modal verb that fits the meaning in brackets.",
    items: [
      { q: "Er ___ sehr reich sein. (reportedly)", answer: "soll", en: "He's said to be very rich." },
      { q: "Das ___ stimmen. (probably)", answer: "dürfte", en: "That's probably true." },
      { q: "Sie ___ alles gesehen haben. (claims)", answer: "will", en: "She claims to have seen everything." },
      { q: "Das ___ sein. (that may well be)", answer: "mag", en: "That may well be." },
    ],
  },
];

/* ---------------- Example sentences (leveled, with audio) ---------------- */
DATA.sentences = [
  { de: "Am Wochenende gehe ich gern ins Kino.", en: "On weekends I like to go to the cinema.", level: "A2" },
  { de: "Kannst du mir bitte helfen?", en: "Can you help me, please?", level: "A2" },
  { de: "Ich habe gestern einen Film gesehen.", en: "I watched a film yesterday.", level: "A2" },
  { de: "Wir fahren morgen mit dem Zug nach Hamburg.", en: "Tomorrow we're taking the train to Hamburg.", level: "A2" },
  { de: "Wenn ich Zeit habe, besuche ich meine Großeltern.", en: "When I have time, I visit my grandparents.", level: "B1" },
  { de: "Obwohl es regnet, gehen wir spazieren.", en: "Although it's raining, we're going for a walk.", level: "B1" },
  { de: "Ich interessiere mich sehr für Geschichte.", en: "I'm very interested in history.", level: "B1" },
  { de: "Er hat versprochen, dass er pünktlich kommt.", en: "He promised that he'll come on time.", level: "B1" },
  { de: "An deiner Stelle würde ich mit dem Chef sprechen.", en: "If I were you, I'd talk to the boss.", level: "B2" },
  { de: "Das Problem muss so schnell wie möglich gelöst werden.", en: "The problem must be solved as soon as possible.", level: "B2" },
  { de: "Der Mann, der dort steht, ist mein Nachbar.", en: "The man standing there is my neighbour.", level: "B2" },
  { de: "Trotz des schlechten Wetters war die Reise schön.", en: "Despite the bad weather, the trip was lovely.", level: "B2" },
  { de: "Er behauptet, er habe von nichts gewusst.", en: "He claims he knew nothing about it.", level: "C1" },
  { de: "Die steigenden Preise bereiten vielen Menschen Sorgen.", en: "The rising prices worry many people.", level: "C1" },
  { de: "Es wäre ratsam, die Angelegenheit gründlich zu prüfen.", en: "It would be advisable to examine the matter thoroughly.", level: "C1" },
  { de: "Angesichts der aktuellen Lage müssen wir umdenken.", en: "In view of the current situation, we have to rethink.", level: "C1" },
  { de: "Hätte ich das gewusst, wäre ich früher gekommen.", en: "Had I known that, I would have come earlier.", level: "C1" },
  { de: "Je mehr man übt, desto sicherer wird man.", en: "The more you practise, the more confident you become.", level: "C1" },
  { de: "Es lässt sich nicht leugnen, dass sich die Lage verschärft hat.", en: "It cannot be denied that the situation has worsened.", level: "C2" },
];

/* ---------------- Listening-comprehension dialogues ---------------- */
DATA.dialogues = [
  {
    id: "cafe", title: "Im Café", level: "A2", topic: "Ordering",
    lines: [
      { s: "Kellner", de: "Guten Tag! Was möchten Sie?", en: "Hello! What would you like?" },
      { s: "Gast", de: "Ich hätte gern einen Kaffee und ein Stück Kuchen.", en: "I'd like a coffee and a piece of cake." },
      { s: "Kellner", de: "Möchten Sie den Kuchen mit Sahne?", en: "Would you like the cake with cream?" },
      { s: "Gast", de: "Nein danke, ohne Sahne.", en: "No thanks, without cream." },
      { s: "Kellner", de: "Sonst noch etwas?", en: "Anything else?" },
      { s: "Gast", de: "Ja, ein Glas Wasser bitte.", en: "Yes, a glass of water please." },
      { s: "Kellner", de: "Gern. Das macht zusammen sechs Euro.", en: "Sure. That's six euros altogether." },
    ],
    questions: [
      { q: "Was möchte der Gast trinken?", options: ["Kaffee und Wasser", "nur Tee", "Saft und Wasser"], answer: "Kaffee und Wasser" },
      { q: "Möchte der Gast Sahne auf dem Kuchen?", options: ["Nein", "Ja", "Nur ein bisschen"], answer: "Nein" },
      { q: "Was kostet alles zusammen?", options: ["sechs Euro", "sieben Euro", "fünf Euro"], answer: "sechs Euro" },
    ],
  },
  {
    id: "arzt", title: "Beim Arzt", level: "B1", topic: "Health",
    lines: [
      { s: "Ärztin", de: "Guten Tag, was fehlt Ihnen?", en: "Hello, what's the matter?" },
      { s: "Patient", de: "Ich habe seit drei Tagen starke Kopfschmerzen.", en: "I've had a bad headache for three days." },
      { s: "Ärztin", de: "Haben Sie auch Fieber?", en: "Do you also have a fever?" },
      { s: "Patient", de: "Ja, gestern hatte ich achtunddreißig Grad.", en: "Yes, yesterday I had thirty-eight degrees." },
      { s: "Ärztin", de: "Nehmen Sie diese Tabletten zweimal täglich und trinken Sie viel.", en: "Take these tablets twice a day and drink plenty." },
      { s: "Patient", de: "Wie lange soll ich sie nehmen?", en: "How long should I take them?" },
      { s: "Ärztin", de: "Eine Woche. Wenn es nicht besser wird, kommen Sie wieder.", en: "One week. If it doesn't get better, come back." },
    ],
    questions: [
      { q: "Seit wann hat der Patient Kopfschmerzen?", options: ["seit drei Tagen", "seit einer Woche", "seit gestern"], answer: "seit drei Tagen" },
      { q: "Wie oft soll er die Tabletten nehmen?", options: ["zweimal täglich", "einmal täglich", "dreimal täglich"], answer: "zweimal täglich" },
      { q: "Was soll er tun, wenn es nicht besser wird?", options: ["wiederkommen", "mehr schlafen", "ins Krankenhaus gehen"], answer: "wiederkommen" },
    ],
  },
  {
    id: "kino", title: "Eine Verabredung", level: "B1", topic: "Plans",
    lines: [
      { s: "Anna", de: "Hast du am Samstag schon etwas vor?", en: "Do you have plans on Saturday yet?" },
      { s: "Ben", de: "Nein, noch nichts. Warum fragst du?", en: "No, nothing yet. Why do you ask?" },
      { s: "Anna", de: "Ich wollte ins Kino gehen. Hast du Lust mitzukommen?", en: "I wanted to go to the cinema. Do you feel like coming along?" },
      { s: "Ben", de: "Gern! Welchen Film möchtest du sehen?", en: "Gladly! Which film do you want to see?" },
      { s: "Anna", de: "Es läuft ein neuer Krimi. Er soll sehr spannend sein.", en: "There's a new crime film on. It's said to be very exciting." },
      { s: "Ben", de: "Klingt gut. Um wie viel Uhr treffen wir uns?", en: "Sounds good. What time shall we meet?" },
      { s: "Anna", de: "Sagen wir um sieben vor dem Kino.", en: "Let's say seven, in front of the cinema." },
    ],
    questions: [
      { q: "Wohin wollen Anna und Ben gehen?", options: ["ins Kino", "ins Theater", "ins Restaurant"], answer: "ins Kino" },
      { q: "Was für ein Film läuft?", options: ["ein Krimi", "eine Komödie", "ein Liebesfilm"], answer: "ein Krimi" },
      { q: "Wann treffen sie sich?", options: ["um sieben", "um acht", "um sechs"], answer: "um sieben" },
    ],
  },
  {
    id: "job", title: "Das Vorstellungsgespräch", level: "B2", topic: "Work",
    lines: [
      { s: "Personalerin", de: "Erzählen Sie mir etwas über Ihre bisherige Erfahrung.", en: "Tell me a bit about your previous experience." },
      { s: "Bewerber", de: "Ich habe fünf Jahre als Projektmanager gearbeitet.", en: "I worked for five years as a project manager." },
      { s: "Personalerin", de: "Warum möchten Sie die Stelle wechseln?", en: "Why do you want to change jobs?" },
      { s: "Bewerber", de: "Ich suche eine neue Herausforderung und möchte mich weiterentwickeln.", en: "I'm looking for a new challenge and want to develop further." },
      { s: "Personalerin", de: "Was sind Ihre größten Stärken?", en: "What are your greatest strengths?" },
      { s: "Bewerber", de: "Ich bin sehr organisiert und arbeite gut im Team.", en: "I'm very organized and work well in a team." },
      { s: "Personalerin", de: "Vielen Dank. Wir melden uns nächste Woche.", en: "Thank you. We'll be in touch next week." },
    ],
    questions: [
      { q: "Wie lange war der Bewerber Projektmanager?", options: ["fünf Jahre", "drei Jahre", "zehn Jahre"], answer: "fünf Jahre" },
      { q: "Warum will er die Stelle wechseln?", options: ["neue Herausforderung", "mehr Geld", "kürzere Wege"], answer: "neue Herausforderung" },
      { q: "Wann meldet sich die Firma?", options: ["nächste Woche", "morgen", "nächsten Monat"], answer: "nächste Woche" },
    ],
  },
];

/* ---------------- CEFR levels (A1–C2) ---------------- */
/* Maps each grammar lesson id to the CEFR level it's introduced at */
DATA.grammarLevel = {
  gender: "A1", cases: "A1", pronouns: "A1", present: "A1", seinhaben: "A1",
  plurals: "A1", negation: "A1", modals: "A2", perfekt: "A2", prepositions: "A2",
  wordorder: "A2", adjendings: "B1", praeteritum: "B1", reflexive: "B1", future: "B1",
  konjunktiv2: "B2", passive: "B2", relative: "B2", connectors: "B2", konjunktiv1: "C1",
  nominalstyle: "C2", modalparticles: "C2", partizipial: "C2", subjmodals: "C1",
};

/* CEFR level of each vocabulary category */
DATA.vocabLevel = {
  "Greetings & Basics": "A1", "Colors": "A1", "Family": "A1", "Food & Drink": "A1",
  "Animals": "A1", "Body": "A1", "Time & Calendar": "A1", "Home": "A1",
  "Common Verbs": "A1", "Adjectives": "A1", "Question Words": "A1",
  "Travel & Places": "A2", "Weather": "A2",
  "Feelings & Opinions": "B1", "Work & Study": "B1", "Connecting Words": "B1",
  "Society & Environment": "B2", "Academic & Formal": "C1", "Idioms & Nuance": "C2",
};

DATA.levels = [
  {
    id: "A1", band: "Beginner", color: "#16a34a",
    subtitle: "Breaking the ice",
    summary: "Understand and use familiar everyday expressions and very basic phrases. Introduce yourself and others, ask and answer simple personal questions.",
    canDo: [
      "Say hello, introduce yourself and spell your name",
      "Ask for and give basic personal info (name, origin, age)",
      "Order food and drink, shop for simple things",
      "Count, tell the time, name days and months",
      "Fill in a simple form with your details",
    ],
    grammar: ["gender", "pronouns", "present", "seinhaben", "cases", "plurals", "negation"],
    vocab: ["Greetings & Basics", "Colors", "Family", "Food & Drink", "Time & Calendar", "Numbers"],
    tip: "Focus on articles (der/die/das) from day one — always learn a noun with its article.",
  },
  {
    id: "A2", band: "Beginner", color: "#0891b2",
    subtitle: "Everyday survival",
    summary: "Communicate in simple, routine tasks. Describe your background, immediate environment and matters of immediate need in simple terms.",
    canDo: [
      "Talk about your daily routine and past events (Perfekt)",
      "Use modal verbs to express ability, wishes and obligations",
      "Give and follow directions; handle travel situations",
      "Describe people, places and the weather",
      "Make simple comparisons (bigger, faster, cheaper)",
    ],
    grammar: ["modals", "perfekt", "prepositions", "wordorder"],
    vocab: ["Travel & Places", "Home", "Weather", "Body", "Common Verbs"],
    tip: "Master the Perfekt tense (haben/sein + participle) — it's how Germans talk about the past in conversation.",
  },
  {
    id: "B1", band: "Intermediate", color: "#2563eb",
    subtitle: "Independent user",
    summary: "Deal with most situations while travelling. Produce connected text on familiar topics and describe experiences, dreams and ambitions.",
    canDo: [
      "Connect ideas with weil, dass, wenn, obwohl (subordinate clauses)",
      "Express opinions and justify them",
      "Use adjective endings correctly before nouns",
      "Talk about the future and hypothetical plans",
      "Handle reflexive verbs and the genitive case",
    ],
    grammar: ["adjendings", "praeteritum", "reflexive", "future"],
    vocab: ["Feelings & Opinions", "Work & Study", "Connecting Words"],
    tip: "Word order in subordinate clauses (verb to the end!) is the B1 make-or-break skill.",
  },
  {
    id: "B2", band: "Intermediate", color: "#7c3aed",
    subtitle: "Fluent conversationalist",
    summary: "Interact with a degree of fluency and spontaneity. Understand the main ideas of complex text and produce clear, detailed writing on a wide range of subjects.",
    canDo: [
      "Use Konjunktiv II for politeness and hypotheticals (würde, hätte, wäre)",
      "Form the passive voice (wird/wurde + participle)",
      "Build relative clauses (der Mann, der ...)",
      "Use Genitive prepositions (während, wegen, trotz)",
      "Express nuanced opinions and argue a point",
    ],
    grammar: ["konjunktiv2", "passive", "relative", "connectors"],
    vocab: ["Society & Environment"],
    tip: "Konjunktiv II and the passive are the two big B2 gateways — practice them until they're automatic.",
  },
  {
    id: "C1", band: "Advanced", color: "#c026d3",
    subtitle: "Effective operational proficiency",
    summary: "Express yourself fluently and spontaneously without obvious searching for expressions. Use language flexibly for social, academic and professional purposes.",
    canDo: [
      "Use Konjunktiv I for reported/indirect speech (er sagte, er sei …)",
      "Handle participial constructions (der lachende Mann)",
      "Use advanced connectors and discourse markers",
      "Understand implicit meaning, idioms and register",
      "Structure extended, well-organised argumentation",
    ],
    grammar: ["konjunktiv1", "subjmodals"],
    vocab: ["Academic & Formal"],
    extra: [
      "Nominalisation — das Lesen, beim Nachdenken",
      "Partizip I/II as adjectives — die steigenden Preise, das gekochte Ei",
      "Idioms — die Nase voll haben, ins Gras beißen, Schwein haben",
    ],
    tip: "At C1, precision of register (formal vs. colloquial) matters as much as grammar.",
  },
  {
    id: "C2", band: "Advanced", color: "#db2777",
    subtitle: "Mastery",
    summary: "Understand with ease virtually everything heard or read. Express yourself spontaneously, very fluently and precisely, differentiating finer shades of meaning even in complex situations.",
    canDo: [
      "Understand academic, literary and specialised texts effortlessly",
      "Command subtle nuance, irony and stylistic variation",
      "Produce clear, smoothly-flowing, well-structured speech and writing",
      "Use idiomatic and colloquial language naturally",
      "Summarise and reconstruct arguments from multiple sources",
    ],
    grammar: ["nominalstyle", "modalparticles", "partizipial"],
    vocab: ["Idioms & Nuance"],
    extra: ["Register & stylistics — shifting tone deliberately for rhetorical effect"],
    tip: "C2 is less about new rules and more about immersion: read literature, listen to podcasts, and absorb nuance.",
  },
];
