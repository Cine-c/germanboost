# GermanBoost 🇩🇪 — Learn German (A1 → C2)

A complete, free, **offline-capable** German learning website covering the full **CEFR range (A1–C2)**. No build step, no dependencies, no account, no tracking — just open it in a browser. Pronunciation and audio use your browser's built-in speech synthesis.

## How to open

Double-click `index.html`, or from this folder run:

```powershell
start index.html
```

> **Note:** Some browser extensions block `file://` pages. If audio or a page misbehaves, serve it locally instead:
> ```
> python -m http.server 8777
> ```
> then open <http://127.0.0.1:8777/index.html>.
>
> For the best German voice, use Chrome or Edge (install a German TTS voice in your OS if none is available).

## Learn

| Section | What you get |
|---|---|
| **Levels (A1–C2)** | The full CEFR roadmap: what each level covers, can-do statements, and links into the matching lessons & vocab |
| **Alphabet** | All 26 letters + ä ö ü ß, letter names, example words with audio |
| **Pronunciation** | The tricky sounds (ch, ei/ie, eu, umlauts…) with rules and examples |
| **Numbers** | 0 → a billion, tens, ordinals, and the "backwards" number rule |
| **Vocabulary** | 18 themed sets (~230 words) A1–C2, with der/die/das articles, audio, **level filter**, and "mark learned" tracking |
| **Phrases** | Survival phrases: introductions, restaurant, shopping, directions, emergencies |
| **Grammar** | 23 lessons A1–C2, each CEFR-tagged: cases, tenses, modals, word order, Konjunktiv II, passive, relative clauses, indirect speech, nominal style, modal particles… |
| **Verb Conjugator** | 22 verbs fully conjugated (present + perfect) |

## Practice (all CEFR-level-aware)

| Mode | What it does |
|---|---|
| **Review (SRS)** | Spaced repetition (SM-2 / Anki-style). Rate Again/Hard/Good/Easy; cards resurface right before you'd forget. Filter by **level, category, and direction (DE↔EN)** |
| **Flashcards** | Flip cards, German↔English, level-filtered, listen & mark known |
| **Grammar Drills** | Fill-in-the-blank exercises (13 sets, A1–C1) with instant correction and scoring |
| **Listening** | Dictation — hear the German, type what you hear (words or sentences), by level |
| **Writing** | Translate English → German, then compare against a model answer |
| **Speaking** | Shadowing — hear the model, repeat, **record yourself and compare** (needs mic permission) |
| **Quiz** | Multiple-choice by level, instant feedback, best score saved |

## Track & back up

The **Progress** page stores everything locally (no account): words learned, day streak, activity heatmap, quiz/drill stats, and full SRS stats. You can **export** your progress to a JSON file, **copy** it, or **import** it — so it survives across browsers and devices.

## Files

```
index.html        page shell + navigation
css/styles.css    all styling (light/dark theme, responsive)
js/data.js        ALL content — vocab, grammar, phrases, verbs, levels, drills, sentences
js/app.js         hash router, views, controllers, speech, SRS, progress
```

## Extending it

Everything lives in `js/data.js` — the rest of the site updates automatically:

- **Vocabulary:** add `[german, english, article]` to a category in `DATA.vocab`; set its level in `DATA.vocabLevel`.
- **Verb:** add an entry to `DATA.verbs`.
- **Grammar lesson:** add `{ id, title, body }` to `DATA.grammar` and its level to `DATA.grammarLevel`.
- **Drill / example sentence:** add to `DATA.exercises` / `DATA.sentences`.

## Tech notes

- Pure vanilla JS, HTML, CSS — **zero dependencies, no build**.
- Hash-based routing (`#/vocab`, `#/review`, …).
- Speech via the Web Speech API (`speechSynthesis`); recording via `MediaRecorder`.
- State persisted in `localStorage`. Light/dark theme follows your OS and is toggleable.
- Fully responsive with a collapsing mobile menu.
