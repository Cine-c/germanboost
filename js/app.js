/* ============================================================
   GermanBoost — application logic
   ============================================================ */
(function () {
  "use strict";

  const view = document.getElementById("view");
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.getElementById("backdrop");

  /* ---------------- Speech synthesis (German TTS) ---------------- */
  const Speech = {
    voice: null,
    ready: false,
    pick() {
      const voices = window.speechSynthesis ? speechSynthesis.getVoices() : [];
      this.voice =
        voices.find((v) => /de[-_]/i.test(v.lang) && /google|microsoft/i.test(v.name)) ||
        voices.find((v) => /de[-_]/i.test(v.lang)) ||
        null;
      this.ready = voices.length > 0;
    },
    say(text) {
      if (!("speechSynthesis" in window)) return;
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "de-DE";
      if (this.voice) u.voice = this.voice;
      u.rate = 0.92;
      speechSynthesis.speak(u);
    },
  };
  if ("speechSynthesis" in window) {
    Speech.pick();
    speechSynthesis.onvoiceschanged = () => Speech.pick();
  }
  // Delegated click handler for any speak button
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-say]");
    if (b) {
      e.preventDefault();
      e.stopPropagation();
      Speech.say(b.getAttribute("data-say"));
    }
  });
  const spk = (text) =>
    `<button class="speak" data-say="${escapeAttr(text)}" title="Listen" aria-label="Listen to ${escapeAttr(text)}">🔊</button>`;

  /* ---------------- Progress (localStorage) ---------------- */
  const Progress = {
    key: "dl_progress_v1",
    data: { learned: {}, quizzes: 0, quizBest: 0, flashSeen: 0, streakDays: [], drills: { done: 0, best: 0 }, plan: {} },
    load() {
      try {
        const raw = localStorage.getItem(this.key);
        if (raw) this.data = Object.assign(this.data, JSON.parse(raw));
      } catch (_) {}
      this.touchDay();
    },
    save() {
      try { localStorage.setItem(this.key, JSON.stringify(this.data)); } catch (_) {}
    },
    touchDay() {
      const today = new Date().toISOString().slice(0, 10);
      if (!this.data.streakDays.includes(today)) {
        this.data.streakDays.push(today);
        this.data.streakDays = this.data.streakDays.slice(-60);
        this.save();
      }
    },
    toggleLearned(id) {
      if (this.data.learned[id]) delete this.data.learned[id];
      else this.data.learned[id] = true;
      this.save();
    },
    isLearned(id) { return !!this.data.learned[id]; },
    learnedCount() { return Object.keys(this.data.learned).length; },
    recordQuiz(score, total) {
      this.data.quizzes++;
      const pct = Math.round((score / total) * 100);
      if (pct > this.data.quizBest) this.data.quizBest = pct;
      this.save();
    },
    addFlash(n) { this.data.flashSeen += n; this.save(); },
    recordDrill(pct) {
      if (!this.data.drills) this.data.drills = { done: 0, best: 0 };
      this.data.drills.done++;
      if (pct > this.data.drills.best) this.data.drills.best = pct;
      this.save();
    },
    getPlan(date) { this.data.plan = this.data.plan || {}; return this.data.plan[date] || (this.data.plan[date] = {}); },
    togglePlan(date, id) { const p = this.getPlan(date); if (p[id]) delete p[id]; else p[id] = true; this.save(); },
    currentStreak() {
      const days = new Set(this.data.streakDays);
      let streak = 0;
      let d = new Date();
      for (;;) {
        const s = d.toISOString().slice(0, 10);
        if (days.has(s)) { streak++; d.setDate(d.getDate() - 1); }
        else break;
      }
      return streak;
    },
  };
  Progress.load();

  /* ---------------- Spaced Repetition (SM-2 / Anki-style) ---------------- */
  const DAY_MS = 86400000;
  function fmtDays(n) {
    if (n < 1) return "<1d";
    if (n < 30) return n + "d";
    const m = Math.round(n / 30);
    if (m < 12) return m + "mo";
    return (n / 365).toFixed(1) + "y";
  }
  const SRS = {
    DEFAULT_EASE: 2.5,
    NEW_PER_DAY: 20,
    store() { return Progress.data.srs || (Progress.data.srs = {}); },
    newLog() { return Progress.data.srsNew || (Progress.data.srsNew = {}); },
    reviewLog() { return Progress.data.srsReviews || (Progress.data.srsReviews = {}); },
    today() { return new Date().toISOString().slice(0, 10); },
    seen(id) { return !!this.store()[id]; },
    dueList(now) {
      now = now || Date.now();
      const s = this.store();
      return Object.keys(s).filter((id) => s[id].due <= now);
    },
    newIntroducedToday() { return this.newLog()[this.today()] || 0; },
    remainingNew() { return Math.max(0, this.NEW_PER_DAY - this.newIntroducedToday()); },
    reviewedToday() { return this.reviewLog()[this.today()] || 0; },
    // Compute what the next interval would be for a rating, without mutating
    previewInterval(id, rating) {
      if (rating === "again") return "<1m";
      const c = this.store()[id] || { ease: this.DEFAULT_EASE, interval: 0, reps: 0 };
      let iv;
      if (rating === "hard") iv = c.interval < 1 ? 1 : Math.round(c.interval * 1.2);
      else if (rating === "good") iv = c.reps === 0 ? 1 : c.reps === 1 ? 3 : Math.round(c.interval * c.ease);
      else iv = c.reps === 0 ? 4 : Math.round(Math.max(c.interval, 1) * (c.ease + 0.15) * 1.3);
      return fmtDays(iv);
    },
    grade(id, rating) {
      const store = this.store();
      const now = Date.now();
      let c = store[id];
      if (!c) {
        c = { ease: this.DEFAULT_EASE, interval: 0, reps: 0, due: now, lapses: 0 };
        const t = this.today();
        this.newLog()[t] = (this.newLog()[t] || 0) + 1;
      }
      if (rating === "again") {
        c.reps = 0; c.lapses++;
        c.ease = Math.max(1.3, c.ease - 0.2);
        c.interval = 0; c.due = now;
      } else if (rating === "hard") {
        c.ease = Math.max(1.3, c.ease - 0.15);
        c.interval = c.interval < 1 ? 1 : Math.round(c.interval * 1.2);
        c.reps++; c.due = now + c.interval * DAY_MS;
      } else if (rating === "good") {
        c.interval = c.reps === 0 ? 1 : c.reps === 1 ? 3 : Math.round(c.interval * c.ease);
        c.reps++; c.due = now + c.interval * DAY_MS;
      } else { // easy
        c.ease += 0.15;
        c.interval = c.reps === 0 ? 4 : Math.round(Math.max(c.interval, 1) * c.ease * 1.3);
        c.reps++; c.due = now + c.interval * DAY_MS;
      }
      store[id] = c;
      const t = this.today();
      this.reviewLog()[t] = (this.reviewLog()[t] || 0) + 1;
      // once a card sticks for a day+, count the underlying word as "learned"
      // (map both forward "w:" and reverse "r:" ids back to the base word)
      if (c.interval >= 1) Progress.data.learned["w:" + id.replace(/^[wr]:/, "")] = true;
      Progress.save();
      return c;
    },
    nextDueLabel(now) {
      now = now || Date.now();
      const s = this.store();
      let min = Infinity;
      Object.keys(s).forEach((id) => { if (s[id].due > now && s[id].due < min) min = s[id].due; });
      if (min === Infinity) return "";
      const hrs = (min - now) / 3600000;
      if (hrs < 1) return "in under an hour";
      if (hrs < 24) return "in about " + Math.round(hrs) + " h";
      return "in " + Math.round(hrs / 24) + " day(s)";
    },
    stats() {
      const s = this.store();
      const ids = Object.keys(s);
      const now = Date.now();
      let due = 0, mature = 0;
      ids.forEach((id) => {
        if (s[id].due <= now) due++;
        if (s[id].interval >= 21) mature++;
      });
      return { tracked: ids.length, due, mature, young: ids.length - mature, reviewedToday: this.reviewedToday() };
    },
  };

  /* ---------------- Helpers ---------------- */
  function escapeAttr(s) { return String(s).replace(/"/g, "&quot;").replace(/</g, "&lt;"); }
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function allWords() {
    const out = [];
    Object.keys(DATA.vocab).forEach((cat) => {
      DATA.vocab[cat].forEach(([de, en, info]) => out.push({ de, en, info, cat }));
    });
    return out;
  }
  const CEFR_LEVELS = ["All", "A1", "A2", "B1", "B2", "C1", "C2"];
  function levelColor(lvl) {
    const l = DATA.levels.find((x) => x.id === lvl);
    return l ? l.color : "var(--muted)";
  }
  function wordsForLevel(level) {
    const all = allWords();
    return !level || level === "All" ? all : all.filter((w) => DATA.vocabLevel[w.cat] === level);
  }
  function flattenPhrases() {
    const out = [];
    Object.keys(DATA.phrases).forEach((cat) =>
      DATA.phrases[cat].forEach(([de, en]) => out.push({ de, en, cat }))
    );
    return out;
  }
  // Pool of German/English pairs for translation & speaking practice
  function sentencePool(level, src) {
    if (src === "phrases") return flattenPhrases().map((p) => ({ de: p.de, en: p.en, tag: p.cat }));
    return DATA.sentences
      .filter((s) => level === "All" || s.level === level)
      .map((s) => ({ de: s.de, en: s.en, tag: s.level }));
  }
  function normDE(s) {
    return s.toLowerCase().trim().replace(/[.,!?;:„""'"()-]/g, "").replace(/\s+/g, " ");
  }
  function levelFilterChips(active, attr) {
    return CEFR_LEVELS.map((l) => {
      const on = l === active;
      const style = on && l !== "All" ? ` style="background:${levelColor(l)};border-color:${levelColor(l)};color:#fff"` : "";
      return `<button class="chip ${on ? "active" : ""}" data-${attr}="${l}"${style}>${l}</button>`;
    }).join("");
  }
  function articleBadge(info) {
    const a = (info || "").split(" ")[0];
    if (["der", "die", "das"].includes(a)) return `<span class="badge ${a}">${info}</span>`;
    return info ? `<span class="badge" style="background:var(--surface-2);color:var(--muted)">${info}</span>` : "";
  }

  /* ============================================================
     VIEWS
     ============================================================ */
  const Views = {
    /* ---------- Home ---------- */
    home() {
      const totalWords = allWords().length;
      return `
        <div class="hero">
          <h1>Willkommen! 👋</h1>
          <p>Learn German from scratch — the alphabet, real vocabulary, grammar that finally makes sense, and practice that sticks. Everything in one place, free, and it works offline.</p>
          <a class="btn" href="#/alphabet">Start with the Alphabet →</a>
        </div>

        <div class="stat-row">
          <div class="stat"><div class="n">${SRS.dueList().length}</div><div class="l">cards due now</div></div>
          <div class="stat"><div class="n">${Progress.learnedCount()}</div><div class="l">words learned</div></div>
          <div class="stat"><div class="n">${Progress.currentStreak()}🔥</div><div class="l">day streak</div></div>
          <div class="stat"><div class="n">${Progress.data.quizBest}%</div><div class="l">best quiz score</div></div>
          <div class="stat"><div class="n">${totalWords}</div><div class="l">words available</div></div>
        </div>
        ${(function () {
          const due = SRS.dueList().length;
          const streak = Progress.currentStreak();
          const reviewedToday = SRS.reviewedToday();
          const tracked = SRS.stats().tracked;
          let msg = "", cta = "Start reviewing →";
          if (due > 0) {
            msg = `🔁 <strong>${due}</strong> card${due > 1 ? "s are" : " is"} due for review${streak > 1 ? ` — keep your ${streak}-day streak alive!` : "."}`;
          } else if (tracked > 0 && reviewedToday === 0) {
            msg = `⏰ Nothing's due yet, but a quick session keeps your ${streak}-day streak going.`;
          } else if (tracked === 0) {
            msg = "🌱 Start your first spaced-repetition session — the smartest way to memorize.";
          } else {
            return `<div class="nudge nudge-done">✅ You're all caught up for today. Reviewed ${reviewedToday} card${reviewedToday === 1 ? "" : "s"} — sehr gut!</div>`;
          }
          return `<a class="nudge" href="#/review"><span>${msg}</span><span class="nudge-cta">${cta}</span></a>`;
        })()}

        <h2 style="margin:28px 0 12px">Explore</h2>
        <div class="grid cols-3">
          ${tile("🗓️", "Today's Plan", "A balanced daily mix across every skill.", "#/today")}
          ${tile("🎯", "Levels (A1–C2)", "The full CEFR roadmap from beginner to mastery.", "#/levels")}
          ${tile("🔤", "Alphabet", "All 26 letters + ä ö ü ß, with sound.", "#/alphabet")}
          ${tile("🗣️", "Pronunciation", "Master ch, ei/ie, umlauts and more.", "#/pronunciation")}
          ${tile("🔢", "Numbers", "Count from 0 to a billion.", "#/numbers")}
          ${tile("📚", "Vocabulary", "13 themed sets with articles & audio.", "#/vocab")}
          ${tile("💬", "Phrases", "Survival phrases for real situations.", "#/phrases")}
          ${tile("📐", "Grammar", "Cases, verbs, word order — explained.", "#/grammar")}
          ${tile("⚙️", "Conjugator", "See any verb across all persons.", "#/conjugator")}
          ${tile("🔁", "Spaced Repetition", "Smart daily review that beats forgetting.", "#/review")}
          ${tile("✏️", "Grammar Drills", "Fill-in-the-blank practice for A1–C1.", "#/drills")}
          ${tile("🎧", "Listening", "Dictation: hear it, type what you hear.", "#/listening")}
          ${tile("🗨️", "Dialogues", "Real conversations with comprehension questions.", "#/dialogues")}
          ${tile("📝", "Writing", "Translate English to German, check the model.", "#/writing")}
          ${tile("🎤", "Speaking", "Shadow the model, record & compare.", "#/speaking")}
          ${tile("🃏", "Flashcards", "Flip, listen, and mark what you know.", "#/flashcards")}
          ${tile("✅", "Quiz", "Test yourself with instant feedback.", "#/quiz")}
        </div>

        <div class="card" style="margin-top:26px">
          <h3 style="margin-top:0">💡 A suggested path for total beginners</h3>
          <ol style="margin:0;padding-left:20px;line-height:2">
            <li>Learn the <a href="#/alphabet">alphabet</a> and <a href="#/pronunciation">pronunciation rules</a>.</li>
            <li>Pick up <a href="#/vocab">Greetings</a> and <a href="#/phrases">introduction phrases</a>.</li>
            <li>Understand <a href="#/grammar">gender (der/die/das)</a> and the <a href="#/grammar">present tense</a>.</li>
            <li>Drill new words daily with <a href="#/flashcards">flashcards</a> and <a href="#/quiz">quizzes</a>.</li>
            <li>Come back tomorrow — keep your 🔥 streak alive!</li>
          </ol>
        </div>
      `;

      function tile(em, h, p, href) {
        return `<a class="tile" href="${href}"><div class="em">${em}</div><h3>${h}</h3><p>${p}</p></a>`;
      }
    },

    /* ---------- Today's Plan ---------- */
    today() {
      const date = new Date().toISOString().slice(0, 10);
      const di = Math.floor(Date.now() / 86400000);
      const gram = DATA.grammar[di % DATA.grammar.length];
      const drill = DATA.exercises[di % DATA.exercises.length];
      const vcats = Object.keys(DATA.vocab);
      const vcat = vcats[di % vcats.length];
      const sentence = DATA.sentences[di % DATA.sentences.length];
      const due = SRS.dueList().length;
      const plan = Progress.getPlan(date);

      const tasks = [
        { id: "review", icon: "🔁", title: due > 0 ? `Review ${due} due card${due > 1 ? "s" : ""}` : "Do a spaced-repetition review", sub: "Keep your memories fresh", href: "#/review", auto: SRS.reviewedToday() > 0 },
        { id: "vocab", icon: "📚", title: `Learn words: ${vcat}`, sub: `${DATA.vocabLevel[vcat] || ""} vocabulary set`, href: "#/vocab" },
        { id: "grammar", icon: "📐", title: `Grammar: ${gram.title}`, sub: `${DATA.grammarLevel[gram.id] || ""} lesson of the day`, href: "#/grammar" },
        { id: "drill", icon: "✏️", title: `Drill: ${drill.title}`, sub: `${drill.level} · ${drill.items.length} questions`, href: "#/drills" },
        { id: "listen", icon: "🎧", title: "Listening / dictation", sub: "Train your ear", href: "#/listening" },
        { id: "speak", icon: "🎤", title: `Speak: “${sentence.de}”`, sub: "Shadow the model out loud", href: "#/speaking" },
      ];
      const isDone = (t) => !!plan[t.id] || !!t.auto;
      const doneCount = tasks.filter(isDone).length;
      const pct = Math.round((doneCount / tasks.length) * 100);
      const streak = Progress.currentStreak();

      const rows = tasks
        .map((t) => {
          const done = isDone(t);
          return `
          <div class="plan-item ${done ? "done" : ""}">
            <button class="plan-check" data-task="${t.id}" ${t.auto ? 'disabled title="tracked automatically"' : ""}>${done ? "✓" : ""}</button>
            <div class="grow">
              <div class="plan-title">${t.icon} ${t.title}</div>
              <div class="plan-sub">${t.sub}${t.auto && done ? " · done automatically ✓" : ""}</div>
            </div>
            <a class="btn ghost small" href="${t.href}">${done ? "Again" : "Start"} →</a>
          </div>`;
        })
        .join("");

      const r = 52, circ = 2 * Math.PI * r;
      const ring = `
        <svg width="130" height="130" viewBox="0 0 130 130" class="plan-ring">
          <circle cx="65" cy="65" r="${r}" fill="none" stroke="var(--surface-2)" stroke-width="12"/>
          <circle cx="65" cy="65" r="${r}" fill="none" stroke="var(--primary)" stroke-width="12"
            stroke-linecap="round" stroke-dasharray="${circ}" stroke-dashoffset="${circ * (1 - doneCount / tasks.length)}"
            transform="rotate(-90 65 65)"/>
          <text x="65" y="60" text-anchor="middle" font-size="26" font-weight="800" fill="var(--text)">${doneCount}/${tasks.length}</text>
          <text x="65" y="82" text-anchor="middle" font-size="12" fill="var(--muted)">done</text>
        </svg>`;

      return `
        ${head("Today's Plan", new Date().toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" }) + " — a balanced mix across every skill. Check things off as you go; it resets each day.")}
        <div class="card plan-hero">
          ${ring}
          <div>
            <h2 style="margin:0 0 4px">${doneCount === tasks.length ? "Alles erledigt! 🎉" : doneCount === 0 ? "Los geht's! 🚀" : "Weiter so! 💪"}</h2>
            <p style="margin:0;color:var(--muted)">${doneCount === tasks.length ? "You've completed today's plan. Sehr gut!" : `${tasks.length - doneCount} task${tasks.length - doneCount > 1 ? "s" : ""} left today.`}</p>
            <p style="margin:8px 0 0;color:var(--muted)">🔥 ${streak}-day streak</p>
          </div>
        </div>
        <div class="card" style="margin-top:16px;padding:6px 14px">${rows}</div>
      `;
    },

    /* ---------- Levels (CEFR A1–C2) ---------- */
    levels() {
      const grammarTitle = (id) => (DATA.grammar.find((g) => g.id === id) || {}).title || id;
      const cards = DATA.levels
        .map((lv, i) => {
          const grammarLinks = (lv.grammar || [])
            .map((id) => `<a href="#/grammar" class="lv-link">${grammarTitle(id)}</a>`)
            .join("");
          const vocabLinks = (lv.vocab || [])
            .map((c) => `<a href="#/vocab" class="lv-link">${c}</a>`)
            .join("");
          const extra = (lv.extra || [])
            .map((t) => `<li>${t}</li>`)
            .join("");
          return `
          <div class="acc-item lv-item ${i === 0 ? "open" : ""}" data-acc style="border-left:5px solid ${lv.color}">
            <div class="acc-head">
              <span><span class="lv-chip" style="background:${lv.color}">${lv.id}</span>
              ${lv.subtitle} <span class="lv-band">· ${lv.band}</span></span>
              <span class="caret">▶</span>
            </div>
            <div class="acc-body">
              <p style="margin-top:12px">${lv.summary}</p>
              <h4>✅ What you can do</h4>
              <ul>${lv.canDo.map((c) => `<li>${c}</li>`).join("")}</ul>
              ${grammarLinks || extra ? `<h4>📐 Key grammar</h4>` : ""}
              ${grammarLinks ? `<div class="lv-links">${grammarLinks}</div>` : ""}
              ${extra ? `<ul>${extra}</ul>` : ""}
              ${vocabLinks ? `<h4>📚 Vocabulary to study</h4><div class="lv-links">${vocabLinks}</div>` : ""}
              <div class="lv-tip">💡 <strong>Tip:</strong> ${lv.tip}</div>
            </div>
          </div>`;
        })
        .join("");
      return `
        ${head("CEFR Levels (A1–C2)", "German proficiency follows the Common European Framework — the same scale used by the Goethe-Institut, telc and university exams. Here's the full roadmap from absolute beginner to mastery. Click a level to expand it.")}
        <div class="lv-ladder">
          ${DATA.levels.map((lv) => `<a href="#/levels" class="lv-rung" style="background:${lv.color}" title="${lv.subtitle}">${lv.id}</a>`).join("<span class='lv-arrow'>→</span>")}
        </div>
        ${cards}
        <div class="card" style="margin-top:16px">
          <p style="margin:0;color:var(--muted)">This site covers <strong>A1–C1</strong> with tagged lessons and vocabulary — including B2/C1 grammar (Konjunktiv II, passive, relative clauses, indirect speech) and advanced word lists. Everything is level-tagged: filter <a href="#/vocab">vocabulary</a> and <a href="#/quiz">quizzes</a> by level, and look for the coloured badge on each <a href="#/grammar">grammar lesson</a>.</p>
        </div>
      `;
    },

    /* ---------- Alphabet ---------- */
    alphabet() {
      const cards = DATA.alphabet
        .map(
          (a) => `
        <div class="alpha-card" data-say="${escapeAttr(a.ex)}">
          <div class="big">${a.l}</div>
          <div class="say">[${a.name}]</div>
          <div class="ex">${a.ex} — ${a.en}</div>
        </div>`
        )
        .join("");
      return `
        ${head("The German Alphabet", "26 letters plus the umlauts ä, ö, ü and the ß (eszett). Tap any card to hear an example word.")}
        <div class="card" style="margin-bottom:18px">
          <strong>Try saying the whole alphabet:</strong>
          ${spk("A B C D E F G H I J K L M N O P Q R S T U V W X Y Z")}
        </div>
        <div class="alpha-grid">${cards}</div>
      `;
    },

    /* ---------- Pronunciation ---------- */
    pronunciation() {
      const rows = DATA.pronunciation
        .map(
          (p) => `
        <tr>
          <td><strong>${p.s}</strong></td>
          <td>${p.say}</td>
          <td>${p.ex} ${spk(p.ex.replace(/\s*\(.*?\)/g, ""))}</td>
        </tr>`
        )
        .join("");
      return `
        ${head("Pronunciation Guide", "German is phonetic — once you know the rules, you can read almost any word aloud. Tap 🔊 to hear the examples.")}
        <div class="card table-scroll">
          <table class="data-table">
            <tr><th>Letters</th><th>How to say it</th><th>Examples</th></tr>
            ${rows}
          </table>
        </div>
        <div class="card" style="margin-top:16px">
          <h3 style="margin-top:0">Golden rules</h3>
          <ul style="margin:0;padding-left:20px;line-height:1.9">
            <li>Stress usually falls on the <strong>first syllable</strong> (except many loanwords).</li>
            <li>Every letter is pronounced — there are almost no silent letters.</li>
            <li>Vowels are "pure": no gliding like in English "day" or "go".</li>
            <li>A doubled consonant means the vowel before it is <strong>short</strong> (Bett vs. Beet).</li>
          </ul>
        </div>
      `;
    },

    /* ---------- Numbers ---------- */
    numbers() {
      const n = DATA.numbers;
      const list = (arr) =>
        arr
          .map(
            ([num, word]) => `
        <div class="word-row"><span class="de" style="width:64px">${num}</span>
        <span class="grow">${word}</span>${spk(word)}</div>`
          )
          .join("");
      return `
        ${head("Numbers (die Zahlen)", n.note)}
        <div class="grid cols-3">
          <div class="card"><h3 style="margin-top:0">0–20</h3>${list(n.base)}</div>
          <div class="card"><h3 style="margin-top:0">Tens & 100</h3>${list(n.tens)}</div>
          <div class="card"><h3 style="margin-top:0">Bigger numbers</h3>${list(n.big)}</div>
        </div>
        <div class="card" style="margin-top:16px">
          <h3 style="margin-top:0">Ordinals (1st, 2nd…)</h3>
          <div class="grid cols-auto">${list(n.ordinals)}</div>
          <p style="color:var(--muted);margin-bottom:0">Ordinals get adjective endings: <em>der <b>erste</b> Tag</em> (the first day).</p>
        </div>
      `;
    },

    /* ---------- Vocabulary ---------- */
    vocab() {
      const levelFilter = State.vocabLevel || "All";
      const cats = Object.keys(DATA.vocab).filter(
        (c) => levelFilter === "All" || DATA.vocabLevel[c] === levelFilter
      );
      let active = State.vocabCat;
      if (!active || !cats.includes(active)) active = cats[0];
      const catChips = cats
        .map((c) => {
          const lv = DATA.vocabLevel[c];
          const badge = lv ? `<span class="cat-lvl" style="background:${levelColor(lv)}">${lv}</span>` : "";
          return `<button class="chip ${c === active ? "active" : ""}" data-vcat="${escapeAttr(c)}">${c} ${badge}</button>`;
        })
        .join("");
      const rows = (DATA.vocab[active] || [])
        .map(([de, en, info]) => {
          const id = "w:" + de;
          const learned = Progress.isLearned(id);
          return `
        <div class="word-row">
          ${spk(de)}
          <span class="de">${de}</span>
          <span class="grow en">— ${en}</span>
          ${articleBadge(info)}
          <button class="btn small ${learned ? "" : "ghost"}" data-learn="${escapeAttr(id)}">
            ${learned ? "✓ Learned" : "Mark learned"}
          </button>
        </div>`;
        })
        .join("");
      return `
        ${head("Vocabulary", "Themed word sets, tagged by CEFR level. Filter by level, tap 🔊 to hear pronunciation, and mark words you've learned.")}
        <div class="chips chips-levels">${levelFilterChips(levelFilter, "vlevel")}</div>
        <div class="chips">${catChips}</div>
        <div class="card" style="padding:6px 12px">${rows}</div>
      `;
    },

    /* ---------- Phrases ---------- */
    phrases() {
      const sections = Object.keys(DATA.phrases)
        .map((sec) => {
          const rows = DATA.phrases[sec]
            .map(
              ([de, en]) => `
          <div class="word-row">
            ${spk(de)}
            <div class="grow">
              <div class="de">${de}</div>
              <div class="en">${en}</div>
            </div>
          </div>`
            )
            .join("");
          return `<div class="card" style="margin-bottom:16px"><h3 style="margin-top:0">${sec}</h3><div>${rows}</div></div>`;
        })
        .join("");
      return `${head("Essential Phrases", "Ready-to-use sentences for real situations. Listen, repeat, and memorize.")}${sections}`;
    },

    /* ---------- Grammar ---------- */
    grammar() {
      const items = DATA.grammar
        .map((g, i) => {
          const lvl = DATA.grammarLevel[g.id];
          const lv = lvl && DATA.levels.find((l) => l.id === lvl);
          const badge = lv ? `<span class="lv-chip" style="background:${lv.color}" title="CEFR ${lvl}">${lvl}</span>` : "";
          return `
        <div class="acc-item ${i === 0 ? "open" : ""}" data-acc>
          <div class="acc-head"><span>${badge}${g.title}</span><span class="caret">▶</span></div>
          <div class="acc-body">${g.body}</div>
        </div>`;
        })
        .join("");
      return `${head("Grammar Lessons", "The essentials, in plain English — each tagged with its CEFR level. Click a topic to expand it.")}
        <p style="margin:-8px 0 16px"><a href="#/levels" class="lv-link">🎯 See the full A1–C2 roadmap →</a></p>${items}`;
    },

    /* ---------- Conjugator ---------- */
    conjugator() {
      const verbs = Object.keys(DATA.verbs).sort();
      const sel = State.verb || "sein";
      const options = verbs
        .map((v) => `<option value="${v}" ${v === sel ? "selected" : ""}>${v} — ${DATA.verbs[v].en}</option>`)
        .join("");
      return `
        ${head("Verb Conjugator", "Choose a verb to see it fully conjugated in the present tense, plus its perfect (past) form.")}
        <div class="conj-controls">
          <label>Verb: <select id="verbSelect">${options}</select></label>
          <button class="btn ghost small" id="randomVerb">🎲 Random</button>
        </div>
        <div id="conjOut">${Views._conjTable(sel)}</div>
      `;
    },
    _conjTable(v) {
      const info = DATA.verbs[v];
      if (!info) return "";
      const rows = DATA.pronounLabels
        .map(
          (p, i) => `
        <tr>
          <td style="width:120px">${p}</td>
          <td><strong>${info.pres[i]}</strong></td>
          <td>${spk(p.split("/")[0] + " " + info.pres[i])}</td>
        </tr>`
        )
        .join("");
      const example = `${DATA.pronounLabels[0]} ${info.aux === "sein" ? DATA.verbs.sein.pres[0] : DATA.verbs.haben.pres[0]} … ${info.part}`;
      return `
        <div class="card">
          <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-bottom:6px">
            <h2 style="margin:0">${v}</h2>
            <span class="badge" style="background:var(--surface-2);color:var(--muted)">${info.type}</span>
            <span style="color:var(--muted)">— ${info.en}</span>
            ${spk(v)}
          </div>
          <h4 style="margin:14px 0 4px">Present tense</h4>
          <table class="g-table">${rows}</table>
          <h4 style="margin:16px 0 4px">Perfect (past) tense</h4>
          <p style="margin:0">Auxiliary: <strong>${info.aux}</strong> · Participle: <strong>${info.part}</strong></p>
          <p style="color:var(--muted)">e.g. <em>${example}</em> ${spk(example)}</p>
        </div>
      `;
    },

    /* ---------- Spaced Repetition ---------- */
    review() {
      return `
        ${head("Spaced Repetition", "The smartest way to memorize. Rate how well you recalled each word and the app schedules the next review right before you'd forget — reviews get further apart as words stick.")}
        <div id="srsArea"></div>
      `;
    },

    /* ---------- Flashcards ---------- */
    flashcards() {
      const level = State.flashLevel || "All";
      const cats = Object.keys(DATA.vocab).filter((c) => level === "All" || DATA.vocabLevel[c] === level);
      return `
        ${head("Flashcards", "German on the front, English on the back — or flip it. Filter by CEFR level, tap the card to reveal, then say if you knew it.")}
        <div class="chips chips-levels">${levelFilterChips(level, "flevel")}</div>
        <div class="chips" id="fcDeck">
          <button class="chip active" data-deck="all">All${level === "All" ? "" : " " + level} words</button>
          ${cats.map((c) => `<button class="chip" data-deck="${escapeAttr(c)}">${c}</button>`).join("")}
        </div>
        <div class="chips">
          <button class="chip" id="fcDir">Show German first ↔</button>
        </div>
        <div class="fc-stage" id="fcStage"></div>
      `;
    },

    /* ---------- Quiz ---------- */
    quiz() {
      const level = State.quizLevel || "All";
      return `
        ${head("Quiz", "Multiple-choice questions from the vocabulary. Pick a CEFR level to practise, get instant feedback, and your best score is saved.")}
        <div class="chips chips-levels">${levelFilterChips(level, "qlevel")}</div>
        <div id="quizArea"></div>
      `;
    },

    /* ---------- Grammar Drills ---------- */
    drills() {
      const level = State.drillLevel || "All";
      const sets = DATA.exercises.filter((e) => level === "All" || e.level === level);
      const cards = sets
        .map((e) => {
          const lv = e.level;
          return `
          <button class="tile drill-tile" data-drill="${e.id}">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
              <span class="lv-chip" style="background:${levelColor(lv)};margin:0">${lv}</span>
              <span style="color:var(--muted);font-size:.82rem">${e.topic}</span>
            </div>
            <h3 style="margin:0 0 4px">${e.title}</h3>
            <p style="margin:0">${e.items.length} questions</p>
          </button>`;
        })
        .join("");
      return `
        ${head("Grammar Drills", "Practice the grammar, don't just read it. Fill in the blanks, check your answers, and see instant corrections. Pick a set to begin.")}
        <div class="chips chips-levels">${levelFilterChips(level, "dlevel")}</div>
        <div id="drillArea">
          <div class="grid cols-3">${cards || `<p style="color:var(--muted)">No drill sets at this level yet.</p>`}</div>
        </div>
      `;
    },

    /* ---------- Listening / Dictation ---------- */
    listening() {
      const level = State.listenLevel || "All";
      const src = State.listenSrc || "words";
      return `
        ${head("Listening & Dictation", "Train your ear: listen to the German, then type exactly what you hear. Check to see how you did — with the text and translation revealed.")}
        <div class="chips chips-levels">${levelFilterChips(level, "llevel")}</div>
        <div class="chips">
          <button class="chip ${src === "words" ? "active" : ""}" data-lsrc="words">🔤 Words</button>
          <button class="chip ${src === "sentences" ? "active" : ""}" data-lsrc="sentences">💬 Sentences</button>
        </div>
        <div id="listenArea"></div>
      `;
    },

    /* ---------- Listening-comprehension Dialogues ---------- */
    dialogues() {
      const level = State.diaLevel || "All";
      const sets = DATA.dialogues.filter((d) => level === "All" || d.level === level);
      const cards = sets
        .map((d) => `
          <button class="tile drill-tile" data-dialogue="${d.id}">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
              <span class="lv-chip" style="background:${levelColor(d.level)};margin:0">${d.level}</span>
              <span style="color:var(--muted);font-size:.82rem">${d.topic}</span>
            </div>
            <h3 style="margin:0 0 4px">${d.title}</h3>
            <p style="margin:0">${d.lines.length} lines · ${d.questions.length} questions</p>
          </button>`)
        .join("");
      return `
        ${head("Dialogues", "Real conversations. Listen to the whole exchange (or line by line), reveal the translation, then answer comprehension questions.")}
        <div class="chips chips-levels">${levelFilterChips(level, "dialevel")}</div>
        <div id="diaArea">
          <div class="grid cols-3">${cards || `<p style="color:var(--muted)">No dialogues at this level yet.</p>`}</div>
        </div>
      `;
    },

    /* ---------- Writing / Translation ---------- */
    writing() {
      const level = State.writeLevel || "All";
      const src = State.writeSrc || "sentences";
      return `
        ${head("Writing & Translation", "Active recall at its best: read the English, write it in German, then compare against a model answer.")}
        <div class="chips chips-levels">${levelFilterChips(level, "wlevel")}</div>
        <div class="chips">
          <button class="chip ${src === "sentences" ? "active" : ""}" data-wsrc="sentences">💬 Sentences</button>
          <button class="chip ${src === "phrases" ? "active" : ""}" data-wsrc="phrases">🗣️ Phrases</button>
        </div>
        <div id="writeArea"></div>
      `;
    },

    /* ---------- Speaking / Shadowing ---------- */
    speaking() {
      const level = State.speakLevel || "All";
      const src = State.speakSrc || "sentences";
      return `
        ${head("Speaking & Shadowing", "Say it out loud. Listen to the model, repeat it, then record yourself and compare. Great for rhythm and pronunciation.")}
        <div class="chips chips-levels">${levelFilterChips(level, "slevel")}</div>
        <div class="chips">
          <button class="chip ${src === "sentences" ? "active" : ""}" data-ssrc="sentences">💬 Sentences</button>
          <button class="chip ${src === "phrases" ? "active" : ""}" data-ssrc="phrases">🗣️ Phrases</button>
        </div>
        <div id="speakArea"></div>
      `;
    },

    /* ---------- Progress ---------- */
    progress() {
      const learned = Progress.learnedCount();
      const total = allWords().length;
      const pct = total ? Math.round((learned / total) * 100) : 0;
      const days = new Set(Progress.data.streakDays);
      // last 28 days heatmap
      let cells = "";
      for (let i = 27; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const s = d.toISOString().slice(0, 10);
        const on = days.has(s);
        cells += `<div title="${s}" style="width:20px;height:20px;border-radius:5px;background:${on ? "var(--primary)" : "var(--surface-2)"};border:1px solid var(--border)"></div>`;
      }
      const learnedList = Object.keys(Progress.data.learned)
        .map((id) => id.replace(/^w:/, ""))
        .sort()
        .map((w) => `<span class="chip" style="cursor:default">${w}</span>`)
        .join(" ") || `<p style="color:var(--muted)">No words marked learned yet. Head to <a href="#/vocab">Vocabulary</a>!</p>`;

      return `
        ${head("Your Progress", "Everything is stored locally in your browser — no account needed.")}
        <div class="stat-row">
          <div class="stat"><div class="n">${learned}/${total}</div><div class="l">words learned (${pct}%)</div></div>
          <div class="stat"><div class="n">${Progress.currentStreak()}🔥</div><div class="l">current streak</div></div>
          <div class="stat"><div class="n">${Progress.data.quizzes}</div><div class="l">quizzes taken</div></div>
          <div class="stat"><div class="n">${Progress.data.quizBest}%</div><div class="l">best quiz</div></div>
          <div class="stat"><div class="n">${(Progress.data.drills || {}).done || 0}</div><div class="l">drills done</div></div>
        </div>
        <div class="card" style="margin-top:18px">
          <h3 style="margin-top:0">🔁 Spaced repetition</h3>
          ${(function () {
            const s = SRS.stats();
            return `<div class="stat-row">
              <div class="stat"><div class="n">${s.due}</div><div class="l">due now</div></div>
              <div class="stat"><div class="n">${s.tracked}</div><div class="l">cards in rotation</div></div>
              <div class="stat"><div class="n">${s.mature}</div><div class="l">mature (21d+)</div></div>
              <div class="stat"><div class="n">${s.reviewedToday}</div><div class="l">reviewed today</div></div>
            </div>
            <p style="color:var(--muted);margin-bottom:0">${s.tracked ? `Next review ${SRS.nextDueLabel() || "is ready now"}.` : "No cards yet — start a"} ${s.tracked ? "" : `<a href="#/review">review session</a> to begin.`}</p>`;
          })()}
        </div>
        <div class="card" style="margin-top:16px">
          <h3 style="margin-top:0">Last 28 days</h3>
          <div style="display:flex;gap:5px;flex-wrap:wrap">${cells}</div>
        </div>
        <div class="card" style="margin-top:16px">
          <div class="quiz-bar" style="height:14px"><span style="width:${pct}%"></span></div>
          <h3 style="margin:14px 0 8px">Learned words</h3>
          <div style="display:flex;gap:6px;flex-wrap:wrap">${learnedList}</div>
        </div>
        <div class="card" style="margin-top:16px">
          <h3 style="margin-top:0">💾 Back up & transfer</h3>
          <p style="color:var(--muted);margin-top:0">Your progress lives only in this browser. Export it to a file to keep a backup or move it to another device/browser.</p>
          <div class="drill-actions">
            <button class="btn" id="exportProg">⬇ Export to file</button>
            <button class="btn ghost" id="copyProg">📋 Copy JSON</button>
            <label class="btn ghost" style="cursor:pointer">📂 Import file
              <input type="file" id="importFile" accept="application/json,.json" hidden />
            </label>
          </div>
          <details style="margin-top:12px">
            <summary style="cursor:pointer;color:var(--muted)">…or paste JSON to import</summary>
            <textarea id="importText" class="drill-input" style="width:100%;min-height:90px;margin-top:8px;font-family:monospace;font-size:.82rem" placeholder='Paste exported JSON here'></textarea>
            <button class="btn ghost small" id="importTextBtn" style="margin-top:8px">Import pasted JSON</button>
          </details>
          <div id="ioMsg" style="margin-top:10px;font-weight:600"></div>
        </div>
        <button class="btn ghost small" id="resetProgress" style="margin-top:18px">Reset all progress</button>
      `;
    },
  };

  function head(title, sub) {
    return `<div class="page-head"><h1>${title}</h1><p>${sub}</p></div>`;
  }

  /* ============================================================
     Interactive controllers (run after a view renders)
     ============================================================ */
  const State = { vocabCat: null, verb: null };

  const Controllers = {
    vocab() {
      view.querySelectorAll("[data-vlevel]").forEach((b) =>
        b.addEventListener("click", () => {
          State.vocabLevel = b.getAttribute("data-vlevel");
          State.vocabCat = null; // reset to first category in the new level
          render("vocab");
        })
      );
      view.querySelectorAll("[data-vcat]").forEach((b) =>
        b.addEventListener("click", () => {
          State.vocabCat = b.getAttribute("data-vcat");
          render("vocab");
        })
      );
      view.querySelectorAll("[data-learn]").forEach((b) =>
        b.addEventListener("click", () => {
          Progress.toggleLearned(b.getAttribute("data-learn"));
          render("vocab");
        })
      );
    },

    grammar() {
      view.querySelectorAll("[data-acc] .acc-head").forEach((h) =>
        h.addEventListener("click", () => h.parentElement.classList.toggle("open"))
      );
    },

    levels() {
      view.querySelectorAll("[data-acc] .acc-head").forEach((h) =>
        h.addEventListener("click", () => h.parentElement.classList.toggle("open"))
      );
    },

    today() {
      const date = new Date().toISOString().slice(0, 10);
      view.querySelectorAll("[data-task]").forEach((b) =>
        b.addEventListener("click", () => {
          if (b.disabled) return;
          Progress.togglePlan(date, b.getAttribute("data-task"));
          render("today");
        })
      );
    },

    conjugator() {
      const sel = document.getElementById("verbSelect");
      const out = document.getElementById("conjOut");
      sel.addEventListener("change", () => {
        State.verb = sel.value;
        out.innerHTML = Views._conjTable(sel.value);
      });
      document.getElementById("randomVerb").addEventListener("click", () => {
        const verbs = Object.keys(DATA.verbs);
        const v = verbs[Math.floor(Math.random() * verbs.length)];
        State.verb = v;
        sel.value = v;
        out.innerHTML = Views._conjTable(v);
      });
    },

    review() {
      const area = document.getElementById("srsArea");
      const words = allWords();
      const cats = ["All"].concat(Object.keys(DATA.vocab));

      // Build a lookup for BOTH directions of every word.
      // Forward "w:" = German→English (recall meaning); Reverse "r:" = English→German (produce it).
      const byId = {};
      words.forEach((w) => {
        byId["w:" + w.de] = { id: "w:" + w.de, dir: "fwd", front: w.de, back: w.en, de: w.de, en: w.en, info: w.info, cat: w.cat };
        byId["r:" + w.de] = { id: "r:" + w.de, dir: "rev", front: w.en, back: w.de, de: w.de, en: w.en, info: w.info, cat: w.cat };
      });

      const settings = Progress.data.srsSettings || (Progress.data.srsSettings = { category: "All", direction: "both", level: "All" });
      if (!settings.level) settings.level = "All";
      function saveSettings() { Progress.data.srsSettings = settings; Progress.save(); }

      function dirIds(w) {
        return settings.direction === "both" ? ["w:" + w.de, "r:" + w.de]
          : settings.direction === "rev" ? ["r:" + w.de] : ["w:" + w.de];
      }
      function buildNew(limit) {
        const out = [];
        for (const w of words) {
          if (settings.category !== "All" && w.cat !== settings.category) continue;
          if (settings.level !== "All" && DATA.vocabLevel[w.cat] !== settings.level) continue;
          for (const id of dirIds(w)) {
            if (!SRS.seen(id)) out.push(id);
            if (out.length >= limit) return out;
          }
        }
        return out;
      }

      function startScreen() {
        const now = Date.now();
        const inScope = (id) =>
          byId[id] &&
          (settings.category === "All" || byId[id].cat === settings.category) &&
          (settings.level === "All" || DATA.vocabLevel[byId[id].cat] === settings.level) &&
          (settings.direction === "both" || byId[id].dir === settings.direction);
        const due = SRS.dueList(now).filter(inScope);
        const newCandidates = buildNew(SRS.remainingNew());
        const reviewed = SRS.reviewedToday();
        const nextDue = SRS.nextDueLabel(now);

        const controls = `
          <div class="srs-controls">
            <label>Level
              <select id="srsLevel">${CEFR_LEVELS.map((l) => `<option ${l === settings.level ? "selected" : ""}>${l}</option>`).join("")}</select>
            </label>
            <label>Category
              <select id="srsCat">${cats.map((c) => `<option ${c === settings.category ? "selected" : ""}>${c}</option>`).join("")}</select>
            </label>
            <div class="srs-dir" role="group" aria-label="Card direction">
              <button class="chip ${settings.direction === "fwd" ? "active" : ""}" data-dir="fwd">🇩🇪→🇬🇧 DE→EN</button>
              <button class="chip ${settings.direction === "rev" ? "active" : ""}" data-dir="rev">🇬🇧→🇩🇪 EN→DE</button>
              <button class="chip ${settings.direction === "both" ? "active" : ""}" data-dir="both">Both</button>
            </div>
          </div>`;

        if (!due.length && !newCandidates.length) {
          area.innerHTML = `${controls}
            <div class="card" style="text-align:center">
              <div style="font-size:3rem">🎉</div>
              <h2 style="margin:6px 0">All caught up!</h2>
              <p style="color:var(--muted)">Nothing is due for this selection.${nextDue ? " Your next review is " + nextDue + "." : ""}</p>
              <p style="color:var(--muted)">Reviewed today: <strong>${reviewed}</strong>${SRS.remainingNew() === 0 ? " · daily new-card limit reached" : ""}.</p>
              <a class="btn ghost" href="#/vocab">Browse vocabulary</a>
            </div>`;
        } else {
          area.innerHTML = `${controls}
            <div class="stat-row" style="margin-bottom:18px">
              <div class="stat"><div class="n">${due.length}</div><div class="l">due for review</div></div>
              <div class="stat"><div class="n">${newCandidates.length}</div><div class="l">new cards</div></div>
              <div class="stat"><div class="n">${reviewed}</div><div class="l">reviewed today</div></div>
            </div>
            <div class="card" style="text-align:center">
              <p style="margin-top:0;color:var(--muted)">This session: <strong>${due.length + newCandidates.length}</strong> cards
              (${due.length} due + ${newCandidates.length} new). Recall the answer, then rate yourself honestly.</p>
              <button class="btn" id="srsStart">Start review →</button>
            </div>`;
          document.getElementById("srsStart").onclick = () => runSession(shuffle(due).concat(newCandidates));
        }

        // wire controls
        const lvlSel = document.getElementById("srsLevel");
        lvlSel.onchange = () => { settings.level = lvlSel.value; saveSettings(); startScreen(); };
        const catSel = document.getElementById("srsCat");
        catSel.onchange = () => { settings.category = catSel.value; saveSettings(); startScreen(); };
        area.querySelectorAll("[data-dir]").forEach((b) =>
          (b.onclick = () => { settings.direction = b.getAttribute("data-dir"); saveSettings(); startScreen(); })
        );
      }

      function runSession(queue) {
        let reviewed = 0;

        function draw() {
          if (!queue.length) return finish();
          const id = queue[0];
          const c = byId[id];
          const pct = (reviewed / (reviewed + queue.length)) * 100;
          const frontAudio = c.dir === "fwd" ? spk(c.de) : "";
          const backAudio = c.dir === "rev" ? spk(c.de) : "";
          const hint = c.dir === "fwd" ? "German — recall the meaning" : "English — say it in German";
          area.innerHTML = `
            <div class="quiz-bar"><span style="width:${pct}%"></span></div>
            <div class="srs-meta">${queue.length} left in this session · ${reviewed} done · ${c.dir === "fwd" ? "DE→EN" : "EN→DE"}</div>
            <div class="card srs-card">
              <div class="srs-hint">${hint}</div>
              <div class="srs-word">${c.front} ${frontAudio}</div>
              <div id="srsBack" hidden>
                <hr class="srs-sep"/>
                <div class="srs-answer">${c.back} ${backAudio}</div>
                <div class="srs-info">${c.info ? c.info + " · " : ""}<span style="color:var(--muted)">${c.cat}</span></div>
              </div>
              <div id="srsReveal" style="margin-top:16px"><button class="btn" id="srsShow">Show answer</button></div>
              <div id="srsRatings" class="srs-ratings" hidden>
                <button class="btn srs-again" data-rate="again">Again<span>${SRS.previewInterval(id, "again")}</span></button>
                <button class="btn srs-hard" data-rate="hard">Hard<span>${SRS.previewInterval(id, "hard")}</span></button>
                <button class="btn srs-good" data-rate="good">Good<span>${SRS.previewInterval(id, "good")}</span></button>
                <button class="btn srs-easy" data-rate="easy">Easy<span>${SRS.previewInterval(id, "easy")}</span></button>
              </div>
            </div>`;
          document.getElementById("srsShow").onclick = () => {
            document.getElementById("srsBack").hidden = false;
            document.getElementById("srsReveal").hidden = true;
            document.getElementById("srsRatings").hidden = false;
            Speech.say(c.de);
          };
          area.querySelectorAll("[data-rate]").forEach((b) =>
            (b.onclick = () => {
              const rating = b.getAttribute("data-rate");
              SRS.grade(id, rating);
              queue.shift();
              if (rating === "again") queue.splice(Math.min(3, queue.length), 0, id);
              else reviewed++;
              draw();
            })
          );
        }

        function finish() {
          area.innerHTML = `
            <div class="card" style="text-align:center">
              <div style="font-size:3rem">✅</div>
              <h2 style="margin:6px 0">Session complete!</h2>
              <p style="color:var(--muted)">You reviewed <strong>${reviewed}</strong> cards. Komm morgen wieder — come back tomorrow to keep them fresh!</p>
              <button class="btn" id="srsMore">Back to review</button>
              <a class="btn ghost" href="#/progress" style="margin-left:8px">See progress</a>
            </div>`;
          document.getElementById("srsMore").onclick = startScreen;
        }
        draw();
      }

      startScreen();
    },

    flashcards() {
      const stage = document.getElementById("fcStage");
      const level = State.flashLevel || "All";
      view.querySelectorAll("[data-flevel]").forEach((b) =>
        b.addEventListener("click", () => { State.flashLevel = b.getAttribute("data-flevel"); render("flashcards"); })
      );
      let deck = buildDeck("all");
      let idx = 0;
      let germanFirst = true;

      function buildDeck(name) {
        let words = name === "all" ? wordsForLevel(level) : DATA.vocab[name].map(([de, en, info]) => ({ de, en, info }));
        return shuffle(words);
      }
      function draw() {
        if (!deck.length) return;
        const c = deck[idx];
        const front = germanFirst ? c.de : c.en;
        const back = germanFirst ? c.en : c.de;
        const frontHint = germanFirst ? "German" : "English";
        const backHint = germanFirst ? "English" : "German";
        stage.innerHTML = `
          <div class="fc-progress">Card ${idx + 1} of ${deck.length}</div>
          <div class="flashcard" id="theCard">
            <div class="flashcard-inner">
              <div class="fc-face">
                <div class="hint">${frontHint}</div>
                <div class="word">${front}</div>
                ${germanFirst ? spk(c.de) : ""}
                <div class="hint">tap to flip</div>
              </div>
              <div class="fc-face fc-back">
                <div class="hint">${backHint}</div>
                <div class="word">${back}</div>
                ${!germanFirst ? spk(c.de) : ""}
                <div class="hint">${c.info || ""}</div>
              </div>
            </div>
          </div>
          <div class="fc-controls">
            <button class="btn ghost" id="fcPrev">← Prev</button>
            <button class="btn" id="fcKnew">I knew it ✓</button>
            <button class="btn ghost" id="fcNext">Next →</button>
          </div>
        `;
        const card = document.getElementById("theCard");
        card.addEventListener("click", (e) => {
          if (e.target.closest(".speak")) return;
          card.classList.toggle("flipped");
        });
        document.getElementById("fcPrev").onclick = () => { idx = (idx - 1 + deck.length) % deck.length; Progress.addFlash(1); draw(); };
        document.getElementById("fcNext").onclick = () => { idx = (idx + 1) % deck.length; Progress.addFlash(1); draw(); };
        document.getElementById("fcKnew").onclick = () => {
          Progress.toggleLearned("w:" + deck[idx].de);
          idx = (idx + 1) % deck.length; Progress.addFlash(1); draw();
        };
      }
      view.querySelectorAll("#fcDeck [data-deck]").forEach((b) =>
        b.addEventListener("click", () => {
          view.querySelectorAll("#fcDeck .chip").forEach((x) => x.classList.remove("active"));
          b.classList.add("active");
          deck = buildDeck(b.getAttribute("data-deck"));
          idx = 0; draw();
        })
      );
      document.getElementById("fcDir").addEventListener("click", () => { germanFirst = !germanFirst; draw(); });
      draw();
    },

    drills() {
      const drillArea = document.getElementById("drillArea");
      view.querySelectorAll("[data-dlevel]").forEach((b) =>
        b.addEventListener("click", () => { State.drillLevel = b.getAttribute("data-dlevel"); render("drills"); })
      );
      view.querySelectorAll("[data-drill]").forEach((b) =>
        b.addEventListener("click", () => openSet(DATA.exercises.find((e) => e.id === b.getAttribute("data-drill"))))
      );

      function norm(s) {
        return s.toLowerCase().trim().replace(/[.,!?;:]+$/, "").replace(/\s+/g, " ");
      }
      function isCorrect(input, answer) {
        return answer.split("|").map(norm).includes(norm(input));
      }

      function openSet(e) {
        if (!e) return;
        const rows = e.items
          .map((it, i) => `
          <div class="drill-item" data-i="${i}">
            <div class="drill-q">${i + 1}. ${it.q.replace(/_{2,}/g, '<span class="drill-blank">_____</span>')}</div>
            <div class="drill-row">
              <input class="drill-input" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="type your answer" />
              <span class="drill-fb"></span>
            </div>
            ${it.hint ? `<span class="drill-hint">💡 ${it.hint}</span>` : ""}
            ${it.en ? `<div class="drill-en">${it.en}</div>` : ""}
          </div>`)
          .join("");
        drillArea.innerHTML = `
          <button class="btn ghost small" id="drillBack">← All drills</button>
          <div class="card" style="margin-top:12px">
            <div style="display:flex;align-items:center;gap:10px">
              <span class="lv-chip" style="background:${levelColor(e.level)};margin:0">${e.level}</span>
              <h2 style="margin:0">${e.title}</h2>
            </div>
            <p style="color:var(--muted)">${e.instructions}</p>
            ${rows}
            <div class="drill-actions">
              <button class="btn" id="drillCheck">Check answers</button>
              <button class="btn ghost" id="drillReset">Reset</button>
              <span id="drillScore" class="drill-score"></span>
            </div>
          </div>`;
        document.getElementById("drillBack").onclick = () => render("drills");
        document.getElementById("drillReset").onclick = () => openSet(e);
        const items = drillArea.querySelectorAll(".drill-item");
        drillArea.querySelectorAll(".drill-input").forEach((inp) =>
          inp.addEventListener("keydown", (ev) => { if (ev.key === "Enter") { ev.preventDefault(); check(); } })
        );
        document.getElementById("drillCheck").onclick = check;

        function check() {
          let correct = 0;
          items.forEach((row, i) => {
            const it = e.items[i];
            const inp = row.querySelector(".drill-input");
            const fb = row.querySelector(".drill-fb");
            const val = inp.value;
            inp.classList.remove("ok", "bad");
            if (!val.trim()) { fb.textContent = ""; fb.className = "drill-fb"; return; }
            if (isCorrect(val, it.answer)) {
              correct++; inp.classList.add("ok"); fb.textContent = "✓"; fb.className = "drill-fb ok";
            } else {
              inp.classList.add("bad");
              fb.innerHTML = `✗ → <strong>${it.answer.split("|")[0]}</strong>`; fb.className = "drill-fb bad";
            }
          });
          const pct = Math.round((correct / e.items.length) * 100);
          const el = document.getElementById("drillScore");
          el.textContent = `${correct} / ${e.items.length} correct (${pct}%)`;
          el.style.color = pct >= 80 ? "var(--good)" : pct >= 50 ? "var(--text)" : "var(--bad)";
          Progress.recordDrill(pct);
        }
      }
    },

    listening() {
      const area = document.getElementById("listenArea");
      const level = State.listenLevel || "All";
      const src = State.listenSrc || "words";
      view.querySelectorAll("[data-llevel]").forEach((b) =>
        b.addEventListener("click", () => { State.listenLevel = b.getAttribute("data-llevel"); render("listening"); })
      );
      view.querySelectorAll("[data-lsrc]").forEach((b) =>
        b.addEventListener("click", () => { State.listenSrc = b.getAttribute("data-lsrc"); render("listening"); })
      );

      function norm(s) {
        return s.toLowerCase().trim().replace(/[.,!?;:„""'"()-]/g, "").replace(/\s+/g, " ");
      }
      // Build the pool
      let pool;
      if (src === "sentences") {
        pool = DATA.sentences
          .filter((s) => level === "All" || s.level === level)
          .map((s) => ({ de: s.de, en: s.en }));
      } else {
        pool = wordsForLevel(level).map((w) => ({ de: w.de, en: w.en }));
      }
      pool = shuffle(pool);

      if (!pool.length) {
        area.innerHTML = `<div class="card" style="text-align:center"><p style="margin:0;color:var(--muted)">No ${src} available at this level. Try another level or source.</p></div>`;
        return;
      }

      let idx = 0, score = 0, answered = 0;

      function draw() {
        const item = pool[idx];
        area.innerHTML = `
          <div class="quiz-bar"><span style="width:${(answered / pool.length) * 100}%"></span></div>
          <div class="srs-meta">Item ${idx + 1} of ${pool.length} · Score: ${score}/${answered}</div>
          <div class="card" style="text-align:center">
            <div class="listen-big" title="Play"><button class="btn listen-play" data-say="${escapeAttr(item.de)}">🔊 Play audio</button></div>
            <p class="srs-hint" style="margin:14px 0 8px">Type what you hear (in German):</p>
            <input class="drill-input" id="listenInput" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="type here…" style="min-width:min(420px,80vw)" />
            <div id="listenBack" hidden>
              <hr class="srs-sep"/>
              <div class="srs-answer">${item.de} ${spk(item.de)}</div>
              <div class="srs-info">${item.en}</div>
              <div id="listenVerdict" class="drill-score" style="margin-top:8px"></div>
            </div>
            <div class="drill-actions" style="justify-content:center">
              <button class="btn" id="listenCheck">Check</button>
              <button class="btn ghost" id="listenReveal">Reveal</button>
              <button class="btn ghost" id="listenNext" hidden>Next →</button>
            </div>
          </div>`;
        const input = document.getElementById("listenInput");
        input.focus();
        Speech.say(item.de);
        input.addEventListener("keydown", (ev) => { if (ev.key === "Enter") { ev.preventDefault(); finishItem(true); } });
        document.getElementById("listenCheck").onclick = () => finishItem(true);
        document.getElementById("listenReveal").onclick = () => finishItem(false);
        document.getElementById("listenNext").onclick = next;

        function finishItem(grade) {
          const back = document.getElementById("listenBack");
          if (!back.hidden) return; // already answered
          input.disabled = true;
          if (grade) {
            answered++;
            const ok = norm(input.value) === norm(item.de);
            if (ok) score++;
            input.classList.add(ok ? "ok" : "bad");
            const v = document.getElementById("listenVerdict");
            v.textContent = ok ? "✓ Correct!" : "✗ Not quite — compare above.";
            v.style.color = ok ? "var(--good)" : "var(--bad)";
          }
          back.hidden = false;
          document.getElementById("listenCheck").hidden = true;
          document.getElementById("listenReveal").hidden = true;
          document.getElementById("listenNext").hidden = false;
        }
      }

      function next() {
        idx++;
        if (idx >= pool.length) return finish();
        draw();
      }

      function finish() {
        const pct = answered ? Math.round((score / answered) * 100) : 0;
        area.innerHTML = `
          <div class="card" style="text-align:center">
            <div style="font-size:3rem">🎧</div>
            <h2 style="margin:6px 0">Done! ${score}/${answered} correct${answered ? ` (${pct}%)` : ""}</h2>
            <p style="color:var(--muted)">Great ear training. Repeat the set or switch level/source.</p>
            <button class="btn" id="listenAgain">Practice again</button>
          </div>`;
        document.getElementById("listenAgain").onclick = () => render("listening");
      }

      draw();
    },

    dialogues() {
      const diaArea = document.getElementById("diaArea");
      view.querySelectorAll("[data-dialevel]").forEach((b) =>
        b.addEventListener("click", () => { State.diaLevel = b.getAttribute("data-dialevel"); render("dialogues"); })
      );
      view.querySelectorAll("[data-dialogue]").forEach((b) =>
        b.addEventListener("click", () => openDialogue(DATA.dialogues.find((d) => d.id === b.getAttribute("data-dialogue"))))
      );

      function openDialogue(d) {
        if (!d) return;
        const lines = d.lines
          .map((ln, i) => `
            <div class="dia-line" data-line="${i}">
              <div class="dia-speaker">${ln.s}</div>
              <div class="grow">
                <div class="dia-de">${ln.de} ${spk(ln.de)}</div>
                <div class="dia-en">${ln.en}</div>
              </div>
            </div>`)
          .join("");
        const questions = d.questions
          .map((q, qi) => `
            <div class="dia-q" data-q="${qi}">
              <div class="quiz-q" style="font-size:1.05rem">${qi + 1}. ${q.q}</div>
              <div class="quiz-options">
                ${q.options.map((o) => `<button class="quiz-opt" data-opt="${escapeAttr(o)}">${o}</button>`).join("")}
              </div>
            </div>`)
          .join("");
        diaArea.innerHTML = `
          <button class="btn ghost small" id="diaBack">← All dialogues</button>
          <div class="card" style="margin-top:12px">
            <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
              <span class="lv-chip" style="background:${levelColor(d.level)};margin:0">${d.level}</span>
              <h2 style="margin:0">${d.title}</h2>
            </div>
            <div class="drill-actions" style="margin:12px 0">
              <button class="btn" id="diaPlay">▶ Play conversation</button>
              <button class="btn ghost" id="diaTrans">Show translation</button>
            </div>
            <div id="diaLines" class="dia-lines">${lines}</div>
          </div>
          <div class="card" style="margin-top:16px">
            <h3 style="margin-top:0">Comprehension</h3>
            ${questions}
            <div id="diaScore" class="drill-score" style="margin-top:6px"></div>
          </div>`;
        document.getElementById("diaBack").onclick = () => render("dialogues");

        const linesWrap = document.getElementById("diaLines");
        document.getElementById("diaTrans").onclick = (e) => {
          linesWrap.classList.toggle("show-en");
          e.target.textContent = linesWrap.classList.contains("show-en") ? "Hide translation" : "Show translation";
        };

        document.getElementById("diaPlay").onclick = () => {
          if (!("speechSynthesis" in window)) return;
          speechSynthesis.cancel();
          const els = Array.from(linesWrap.querySelectorAll(".dia-line"));
          d.lines.forEach((ln, i) => {
            const u = new SpeechSynthesisUtterance(ln.de);
            u.lang = "de-DE";
            if (Speech.voice) u.voice = Speech.voice;
            u.rate = 0.9;
            u.onstart = () => { els.forEach((e) => e.classList.remove("speaking")); if (els[i]) els[i].classList.add("speaking"); };
            u.onend = () => { if (els[i]) els[i].classList.remove("speaking"); };
            speechSynthesis.speak(u);
          });
        };

        // comprehension questions
        let answered = 0, correct = 0;
        diaArea.querySelectorAll(".dia-q").forEach((qEl, qi) => {
          const q = d.questions[qi];
          qEl.querySelectorAll(".quiz-opt").forEach((btn) =>
            (btn.onclick = () => {
              if (qEl.dataset.done) return;
              qEl.dataset.done = "1";
              answered++;
              const chosen = btn.getAttribute("data-opt");
              qEl.querySelectorAll(".quiz-opt").forEach((b) => {
                b.disabled = true;
                if (b.getAttribute("data-opt") === q.answer) b.classList.add("correct");
                if (b.getAttribute("data-opt") === chosen && chosen !== q.answer) b.classList.add("wrong");
              });
              if (chosen === q.answer) correct++;
              const sc = document.getElementById("diaScore");
              sc.textContent = `${correct} / ${d.questions.length} correct`;
              if (answered === d.questions.length) sc.textContent += correct === d.questions.length ? " — perfect! 🎉" : " — well done!";
            })
          );
        });
      }
    },

    writing() {
      const area = document.getElementById("writeArea");
      const level = State.writeLevel || "All";
      const src = State.writeSrc || "sentences";
      view.querySelectorAll("[data-wlevel]").forEach((b) =>
        b.addEventListener("click", () => { State.writeLevel = b.getAttribute("data-wlevel"); render("writing"); })
      );
      view.querySelectorAll("[data-wsrc]").forEach((b) =>
        b.addEventListener("click", () => { State.writeSrc = b.getAttribute("data-wsrc"); render("writing"); })
      );
      let pool = shuffle(sentencePool(level, src));
      if (!pool.length) {
        area.innerHTML = `<div class="card" style="text-align:center"><p style="margin:0;color:var(--muted)">No prompts at this level. Try another level or source.</p></div>`;
        return;
      }
      let idx = 0, score = 0, answered = 0;

      function draw() {
        const item = pool[idx];
        area.innerHTML = `
          <div class="quiz-bar"><span style="width:${(answered / pool.length) * 100}%"></span></div>
          <div class="srs-meta">Item ${idx + 1} of ${pool.length} · Score: ${score}/${answered}</div>
          <div class="card">
            <div class="srs-hint">Translate into German:</div>
            <div class="write-prompt">${item.en}</div>
            <textarea id="writeInput" class="drill-input" style="width:100%;min-height:70px;margin-top:6px" placeholder="Write the German here…" autocapitalize="off" spellcheck="false"></textarea>
            <div id="writeBack" hidden>
              <hr class="srs-sep"/>
              <div class="srs-hint">Model answer:</div>
              <div class="srs-answer" style="font-size:1.25rem">${item.de} ${spk(item.de)}</div>
              <div id="writeVerdict" class="drill-score" style="margin-top:8px"></div>
            </div>
            <div class="drill-actions">
              <button class="btn" id="writeCheck">Check</button>
              <button class="btn ghost" id="writeReveal">Show model</button>
              <button class="btn ghost" id="writeNext" hidden>Next →</button>
            </div>
          </div>`;
        const input = document.getElementById("writeInput");
        input.focus();
        document.getElementById("writeCheck").onclick = () => finishItem(true);
        document.getElementById("writeReveal").onclick = () => finishItem(false);
        document.getElementById("writeNext").onclick = next;

        function finishItem(grade) {
          const back = document.getElementById("writeBack");
          if (!back.hidden) return;
          input.disabled = true;
          if (grade) {
            answered++;
            const ok = normDE(input.value) === normDE(item.de);
            if (ok) score++;
            const v = document.getElementById("writeVerdict");
            v.textContent = ok ? "✓ Exact match — well done!" : "Compare yours with the model above.";
            v.style.color = ok ? "var(--good)" : "var(--muted)";
          }
          back.hidden = false;
          document.getElementById("writeCheck").hidden = true;
          document.getElementById("writeReveal").hidden = true;
          document.getElementById("writeNext").hidden = false;
        }
      }
      function next() { idx++; if (idx >= pool.length) return finish(); draw(); }
      function finish() {
        const pct = answered ? Math.round((score / answered) * 100) : 0;
        area.innerHTML = `
          <div class="card" style="text-align:center">
            <div style="font-size:3rem">📝</div>
            <h2 style="margin:6px 0">Set complete!${answered ? ` ${score}/${answered} exact (${pct}%)` : ""}</h2>
            <p style="color:var(--muted)">Translation is hard — comparing to the model is where the learning happens.</p>
            <button class="btn" id="writeAgain">Practice again</button>
          </div>`;
        document.getElementById("writeAgain").onclick = () => render("writing");
      }
      draw();
    },

    speaking() {
      const area = document.getElementById("speakArea");
      const level = State.speakLevel || "All";
      const src = State.speakSrc || "sentences";
      view.querySelectorAll("[data-slevel]").forEach((b) =>
        b.addEventListener("click", () => { State.speakLevel = b.getAttribute("data-slevel"); render("speaking"); })
      );
      view.querySelectorAll("[data-ssrc]").forEach((b) =>
        b.addEventListener("click", () => { State.speakSrc = b.getAttribute("data-ssrc"); render("speaking"); })
      );
      const canRecord = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
      let pool = shuffle(sentencePool(level, src));
      if (!pool.length) {
        area.innerHTML = `<div class="card" style="text-align:center"><p style="margin:0;color:var(--muted)">No prompts at this level. Try another level or source.</p></div>`;
        return;
      }
      let idx = 0;
      let rec = null, chunks = [], myURL = null, stream = null;

      function stopStream() { if (stream) { stream.getTracks().forEach((t) => t.stop()); stream = null; } }

      function draw() {
        if (myURL) { URL.revokeObjectURL(myURL); myURL = null; }
        const item = pool[idx];
        area.innerHTML = `
          <div class="srs-meta">Item ${idx + 1} of ${pool.length}</div>
          <div class="card" style="text-align:center">
            <div class="srs-hint">Listen, then say it aloud:</div>
            <div class="speak-de">${item.de}</div>
            <div class="srs-info" style="margin-bottom:14px">${item.en}</div>
            <div class="drill-actions" style="justify-content:center">
              <button class="btn" data-say="${escapeAttr(item.de)}">🔊 Hear model</button>
              ${canRecord ? `
                <button class="btn ghost" id="recBtn">🎤 Record</button>
                <button class="btn ghost" id="playMine" disabled>▶ Play mine</button>` : ""}
              <button class="btn ghost" id="speakNext">Next →</button>
            </div>
            ${canRecord
              ? `<div id="recStatus" class="srs-hint" style="margin-top:12px">Tip: play the model, repeat it, then record yourself and compare.</div>`
              : `<div class="srs-hint" style="margin-top:12px">🎙️ Recording isn't available in this browser — use the model audio to shadow: listen and repeat aloud.</div>`}
          </div>`;
        document.getElementById("speakNext").onclick = () => { if (rec && rec.state === "recording") rec.stop(); stopStream(); next(); };

        if (canRecord) {
          const recBtn = document.getElementById("recBtn");
          const playMine = document.getElementById("playMine");
          const status = document.getElementById("recStatus");
          recBtn.onclick = async () => {
            if (rec && rec.state === "recording") { rec.stop(); return; }
            try {
              stream = await navigator.mediaDevices.getUserMedia({ audio: true });
              rec = new MediaRecorder(stream);
              chunks = [];
              rec.ondataavailable = (e) => chunks.push(e.data);
              rec.onstop = () => {
                const blob = new Blob(chunks, { type: rec.mimeType || "audio/webm" });
                if (myURL) URL.revokeObjectURL(myURL);
                myURL = URL.createObjectURL(blob);
                playMine.disabled = false;
                recBtn.textContent = "🎤 Record";
                recBtn.classList.remove("recording");
                status.textContent = "✓ Recorded — play it back and compare with the model.";
                stopStream();
              };
              rec.start();
              recBtn.textContent = "⏹ Stop";
              recBtn.classList.add("recording");
              status.textContent = "● Recording… speak now, then press Stop.";
            } catch (err) {
              status.textContent = "Couldn't access the microphone (permission denied). You can still shadow using the model audio.";
            }
          };
          playMine.onclick = () => { if (myURL) new Audio(myURL).play(); };
        }
      }
      function next() { idx++; if (idx >= pool.length) idx = 0; draw(); }
      draw();
    },

    quiz() {
      view.querySelectorAll("[data-qlevel]").forEach((b) =>
        b.addEventListener("click", () => {
          State.quizLevel = b.getAttribute("data-qlevel");
          render("quiz");
        })
      );
      const area = document.getElementById("quizArea");
      const pool = wordsForLevel(State.quizLevel || "All");
      const numQ = Math.min(10, pool.length);
      let questions = [];
      let qIdx = 0;
      let score = 0;

      function start() {
        questions = shuffle(pool).slice(0, numQ).map((w) => {
          const askGerman = Math.random() < 0.5; // ask meaning of german OR german for english
          const wrong = shuffle(pool.filter((x) => x.de !== w.de))
            .slice(0, 3)
            .map((x) => (askGerman ? x.en : x.de));
          const correct = askGerman ? w.en : w.de;
          const options = shuffle([correct, ...wrong]);
          return {
            prompt: askGerman ? `What does “${w.de}” mean?` : `How do you say “${w.en}” in German?`,
            correct, options, speak: w.de,
          };
        });
        qIdx = 0; score = 0; drawQ();
      }

      function drawQ() {
        if (qIdx >= questions.length) return finish();
        const q = questions[qIdx];
        const pct = (qIdx / questions.length) * 100;
        area.innerHTML = `
          <div class="quiz-bar"><span style="width:${pct}%"></span></div>
          <div class="card">
            <div style="color:var(--muted);font-size:.9rem">Question ${qIdx + 1} of ${questions.length} · Score: ${score}</div>
            <div class="quiz-q">${q.prompt} ${spk(q.speak)}</div>
            <div class="quiz-options">
              ${q.options.map((o) => `<button class="quiz-opt">${o}</button>`).join("")}
            </div>
            <div class="quiz-feedback" id="qFb"></div>
          </div>
        `;
        area.querySelectorAll(".quiz-opt").forEach((btn) =>
          btn.addEventListener("click", () => {
            const chosen = btn.textContent;
            area.querySelectorAll(".quiz-opt").forEach((b) => {
              b.disabled = true;
              if (b.textContent === q.correct) b.classList.add("correct");
              if (b.textContent === chosen && chosen !== q.correct) b.classList.add("wrong");
            });
            const fb = document.getElementById("qFb");
            if (chosen === q.correct) { score++; fb.textContent = "✓ Correct!"; fb.style.color = "var(--good)"; }
            else { fb.textContent = `✗ Correct answer: ${q.correct}`; fb.style.color = "var(--bad)"; }
            const next = document.createElement("button");
            next.className = "btn"; next.style.marginTop = "12px";
            next.textContent = qIdx + 1 >= questions.length ? "See results →" : "Next question →";
            next.onclick = () => { qIdx++; drawQ(); };
            fb.appendChild(document.createElement("br"));
            fb.appendChild(next);
          })
        );
      }

      function finish() {
        Progress.recordQuiz(score, questions.length);
        const pct = Math.round((score / questions.length) * 100);
        const msg = pct >= 90 ? "Ausgezeichnet! Outstanding! 🎉" : pct >= 70 ? "Sehr gut! Nicely done. 👏" : pct >= 50 ? "Nicht schlecht — keep practicing!" : "Weiter üben! Review and try again. 💪";
        area.innerHTML = `
          <div class="card" style="text-align:center">
            <div style="font-size:3rem">${pct >= 70 ? "🏆" : "📚"}</div>
            <h2 style="margin:6px 0">${score} / ${questions.length} correct (${pct}%)</h2>
            <p style="color:var(--muted)">${msg}</p>
            <button class="btn" id="quizAgain">Play again</button>
            <a class="btn ghost" href="#/flashcards" style="margin-left:8px">Review with flashcards</a>
          </div>
        `;
        document.getElementById("quizAgain").onclick = start;
      }
      start();
    },

    progress() {
      const btn = document.getElementById("resetProgress");
      if (btn)
        btn.addEventListener("click", () => {
          if (confirm("Reset all learning progress? This cannot be undone.")) {
            Progress.data = { learned: {}, quizzes: 0, quizBest: 0, flashSeen: 0, streakDays: [], drills: { done: 0, best: 0 }, plan: {}, srs: {}, srsNew: {}, srsReviews: {}, srsSettings: { category: "All", direction: "both", level: "All" } };
            Progress.save();
            Progress.touchDay();
            render("progress");
          }
        });

      const msg = document.getElementById("ioMsg");
      const showMsg = (t, ok) => { if (msg) { msg.textContent = t; msg.style.color = ok ? "var(--good)" : "var(--bad)"; } };
      const exportJSON = () => JSON.stringify(Progress.data, null, 2);

      const exp = document.getElementById("exportProg");
      if (exp) exp.onclick = () => {
        const blob = new Blob([exportJSON()], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "germanboost-progress-" + new Date().toISOString().slice(0, 10) + ".json";
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
        showMsg("✓ Exported to a downloaded file.", true);
      };

      const copy = document.getElementById("copyProg");
      if (copy) copy.onclick = async () => {
        try { await navigator.clipboard.writeText(exportJSON()); showMsg("✓ Progress JSON copied to clipboard.", true); }
        catch (_) { showMsg("Couldn't access clipboard — use Export to file instead.", false); }
      };

      function applyImport(text) {
        let obj;
        try { obj = JSON.parse(text); }
        catch (_) { showMsg("✗ That isn't valid JSON.", false); return; }
        if (!obj || typeof obj !== "object" || !("learned" in obj)) {
          showMsg("✗ This doesn't look like a GermanBoost backup.", false); return;
        }
        if (!confirm("Import will replace your current progress. Continue?")) return;
        Progress.data = Object.assign({ learned: {}, quizzes: 0, quizBest: 0, flashSeen: 0, streakDays: [], drills: { done: 0, best: 0 }, srs: {}, srsNew: {}, srsReviews: {} }, obj);
        Progress.save();
        Progress.touchDay();
        render("progress");
        showMsg("✓ Progress imported successfully.", true);
      }

      const file = document.getElementById("importFile");
      if (file) file.onchange = () => {
        const f = file.files[0];
        if (!f) return;
        const reader = new FileReader();
        reader.onload = () => applyImport(String(reader.result));
        reader.onerror = () => showMsg("✗ Couldn't read that file.", false);
        reader.readAsText(f);
      };

      const importTextBtn = document.getElementById("importTextBtn");
      if (importTextBtn) importTextBtn.onclick = () => {
        const t = (document.getElementById("importText") || {}).value || "";
        if (!t.trim()) { showMsg("Paste your exported JSON first.", false); return; }
        applyImport(t);
      };
    },
  };

  /* ============================================================
     Router
     ============================================================ */
  const routes = {
    home: Views.home, today: Views.today, levels: Views.levels, alphabet: Views.alphabet, pronunciation: Views.pronunciation,
    numbers: Views.numbers, vocab: Views.vocab, phrases: Views.phrases,
    grammar: Views.grammar, conjugator: Views.conjugator, flashcards: Views.flashcards,
    review: Views.review, drills: Views.drills, listening: Views.listening,
    dialogues: Views.dialogues, writing: Views.writing, speaking: Views.speaking,
    quiz: Views.quiz, progress: Views.progress,
  };

  function currentRoute() {
    const h = location.hash.replace(/^#\//, "").trim();
    return routes[h] ? h : "home";
  }

  function render(routeName) {
    const name = routeName || currentRoute();
    view.innerHTML = routes[name]();
    view.scrollTop = 0;
    window.scrollTo(0, 0);
    // highlight nav
    document.querySelectorAll(".sidebar a").forEach((a) =>
      a.classList.toggle("active", a.getAttribute("data-route") === name)
    );
    // run controller
    if (Controllers[name]) Controllers[name]();
    Progress.touchDay();
    updateSidebarBadge();
    closeSidebar();
  }

  function updateSidebarBadge() {
    const link = document.querySelector('.sidebar a[data-route="review"]');
    if (!link) return;
    let badge = link.querySelector(".nav-badge");
    const due = SRS.dueList().length;
    if (due > 0) {
      if (!badge) {
        badge = document.createElement("span");
        badge.className = "nav-badge";
        link.appendChild(badge);
      }
      badge.textContent = due;
    } else if (badge) {
      badge.remove();
    }
  }

  window.addEventListener("hashchange", () => render());

  /* ============================================================
     Global search
     ============================================================ */
  const searchInput = document.getElementById("globalSearch");
  const searchResults = document.getElementById("searchResults");
  const searchIndex = allWords();

  searchInput.addEventListener("input", () => {
    const q = searchInput.value.trim().toLowerCase();
    if (!q) { searchResults.hidden = true; return; }
    const hits = searchIndex
      .filter((w) => w.de.toLowerCase().includes(q) || w.en.toLowerCase().includes(q))
      .slice(0, 12);
    if (!hits.length) {
      searchResults.innerHTML = `<div class="empty">No matches for “${escapeAttr(q)}”.</div>`;
    } else {
      searchResults.innerHTML = hits
        .map(
          (w) => `
        <div class="sr" data-say="${escapeAttr(w.de)}">
          <span><span class="de">${w.de}</span> <span class="en">${w.en}</span></span>
          <span class="en">${w.cat}</span>
        </div>`
        )
        .join("");
    }
    searchResults.hidden = false;
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-wrap")) searchResults.hidden = true;
  });

  /* ============================================================
     Theme + sidebar
     ============================================================ */
  const themeToggle = document.getElementById("themeToggle");
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    themeToggle.textContent = t === "dark" ? "☀️" : "🌙";
    try { localStorage.setItem("dl_theme", t); } catch (_) {}
  }
  applyTheme(
    (function () {
      try { return localStorage.getItem("dl_theme"); } catch (_) { return null; }
    })() || (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );
  themeToggle.addEventListener("click", () =>
    applyTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark")
  );

  const menuToggle = document.getElementById("menuToggle");
  function openSidebar() { sidebar.classList.add("open"); backdrop.hidden = false; }
  function closeSidebar() { sidebar.classList.remove("open"); backdrop.hidden = true; }
  menuToggle.addEventListener("click", () =>
    sidebar.classList.contains("open") ? closeSidebar() : openSidebar()
  );
  backdrop.addEventListener("click", closeSidebar);

  /* ---------------- Boot ---------------- */
  render();
})();
