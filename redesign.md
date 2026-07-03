# Texas NeuroTrauma Institute — Homepage Redesign Plan

> Status: **DRAFT for approval.** Nothing here is built yet. This plan follows a
> full audit of the rendered site (browser walkthrough at mobile/tablet/desktop),
> the homepage code, and the two source documents:
> `texas-neurotrauma-site-spec.md` and `Texas_Neurotrauma_Institute_All_Services.md`.
>
> Priority per request: **the hero and the services section** — they must invite,
> sell, and wow. Copy is simplified throughout: patient-first, plain language.

---

## Part 1 — Critique of the current design

The current homepage is competent but forgettable. It reads like a template that
was filled in, not a design that sells. In order of impact:

1. **The hero sells nothing.** The H1 is the brand name — which already appears
   in the logo directly above it. A patient landing here with brain fog after a
   car accident gets no emotional hook, no promise, no reason to stay. The
   clinic's strongest selling point ("we find injuries that MRIs miss") is
   buried in a small floating badge that is *clipped off the right edge of the
   viewport*.

2. **The hero image is cold.** An AI-rendered computer monitor in an empty
   room. No people, no warmth, no story. For an organization whose pitch is
   "we listen when others dismiss you," leading with hardware is backwards.

3. **The services section is a beige wall.** Ten nearly identical sand-colored
   cards, no icons, no imagery, and only one of the ten links anywhere. The
   number chips collide with the category labels at some widths. The tab filter
   *hides* services instead of selling them. This should be the strongest
   conversion section on the page; it is currently the weakest.

4. **The placeholder phone number `(000) 000-0000` appears 5+ times.** It is
   the most prominent element in the hero and nav. To a visitor it reads as
   "this site is broken" — an instant trust killer for a medical practice.

5. **Beige monotony, flat rhythm.** Nine sections alternate cream/sand with an
   identical structure (eyebrow → heading → grid). Only one dark band breaks
   the pattern. Nothing surprises; nothing has depth or motion beyond two
   floating badges.

6. **Copy is written for lawyers, not patients.** "Structured, medically
   defensible clinical evaluations," "functional dysregulation within specific
   neural networks," "restore patient autonomy." ~90% of visitors are patients
   or their families. They want plain language: *what's wrong with me, can you
   find it, can you fix it.*

7. **Small polish failures.** The eyebrow chip wraps to two lines at tablet
   width; "For Attorneys" wraps in the nav; the `Services` nav item is an
   anchor to a homepage section; the two-path card images have oddly rounded
   inner corners.

---

## Part 2 — Design direction

**Concept: "The clinic that sees what others can't."** One narrative drives
the whole page: *invisible injury → made visible → treated.* Every section
either proves we can see it or shows how we treat it.

### Visual language

- **Palette kept** (navy `#07355e`, copper `#e16d22`, cream `#fcfaf7`, sand
  `#f5ede3`) — it matches the logo and is distinctive. But the balance is
  inverted: today the page is ~90% beige with one navy band. The new design
  opens **dark and immersive** (deep-navy hero with a living brainwave
  animation), then warms into cream — a "diagnostic → human" arc.
- **Type kept** (Fraunces display serif + Inter body). Contrast pushed harder:
  hero display up to `clamp(2.8rem, 6vw, 4.6rem)`, tighter uppercase eyebrows,
  more whitespace between sections (120–140px).
- **Signature motif: a live qEEG waveform.** Thin animated SVG lines in
  copper/soft-teal that appear in the hero, as section connectors, and inside
  the flagship service card. This is the "wow" element and it is brand-true —
  it is literally what the clinic measures. Pure SVG/CSS, no libraries,
  honors `prefers-reduced-motion`.
- **Scroll reveals everywhere.** The `.tni-reveal` CSS already exists but is
  unused — wire it up with one small IntersectionObserver hook.

### Page rhythm (background temperature by section)

```
dark navy   → HERO (immersive, animated)
cream       → WHO WE HELP (patients / attorneys paths)
sand        → SERVICES (pillars + bento grid)   ← centerpiece
dark navy   → OBJECTIVE BAND ("we measure what others estimate")
sand        → CONDITIONS ("does this sound like you?")
cream       → JOURNEY (4 steps)
navy card   → MEDICAL DIRECTOR quote
cream       → FINAL CTA
```

Alternating temperature instead of nine shades of beige.

---

## Part 3 — Homepage blueprint, section by section

### 3.1 Header (sticky, refined)

- Sticky glass bar, height 72px. Logo left (mark + wordmark, 44px tall).
- Center nav: `Services · Conditions · Diagnostics · For Attorneys`
  ("For Attorneys" sized to fit one line at 15px; "Home" dropped — the logo is
  home; "Contact" dropped from center — the CTA button covers it).
- Right: phone number **only rendered when a real number exists** (until then,
  nothing — never zeros) + copper pill **"Request Evaluation"**.
- Because the hero is dark, the header starts as a light-on-dark variant over
  the hero and transitions to cream glass after scrolling past it.

### 3.2 Hero — full-viewport, dark, alive (PRIORITY 1)

**Canvas.** Full-bleed section, min-height `92vh`. Background: radial gradient
`#041f3a → #07355e` with two layers:
(a) a faint topographic brain-map contour pattern (SVG, opacity 0.06)
drifting slowly; (b) 3–4 animated qEEG waveform lines flowing horizontally
across the lower third, copper/soft-teal, opacity 0.25.

**Grid.** 12 columns, 1200px container, split **7 / 5**.

**Left column (cols 1–7), vertically centered:**

1. Eyebrow chip: pulsing copper dot +
   `PHYSICIAN-DIRECTED · HOUSTON & SAN ANTONIO` (13px uppercase, sand @ 70%).
2. **H1** (Fraunces, cream, ~64px desktop, line-height 1.05):

   > Your scan says normal.
   > Your *symptoms* say otherwise.

   with "symptoms" in italic copper. This names the exact frustration of the
   target patient.
3. Subhead (20px, sand @ 85%, max 52ch):
   *"We map how your brain is actually working — finding the injuries CT and
   MRI miss — then build a clear plan to help you recover."*
4. CTA row: primary copper pill **"Request an Evaluation"** (large: 18px text,
   32px horizontal padding, copper glow shadow) + ghost secondary
   **"See how it works ↓"** (smooth-scrolls to the journey section).
   *No phone number here until a real one exists.*
5. 40px below the CTAs: a slim **proof strip inside the hero** (not a separate
   section) — 4 items separated by thin copper ticks:
   `Physician-led care · qEEG brain mapping · Response within 1 business day ·
   Houston & San Antonio`. 14px, sand @ 65%.

**Right column (cols 8–12):**

- A **"live monitor" glass card** (radius 24, `rgba(255,255,255,0.06)` glass,
  1px light border). Inside: the existing `BrainMapVisual` topographic head-map
  SVG recolored to glow against navy, a thin animated EEG trace running beneath
  it, and an honest status line: `qEEG · 19-channel functional map`. This
  replaces the AI monitor photo — crisper, instant-loading, on-brand.
- Two floating cards anchored *inside* the column (no more viewport clipping):
  - Top-right: **"Not visible on MRI?"** card (kept — best asset on the current
    page), ~200px wide, dark glass.
  - Bottom-left, overlapping the monitor card by 24px: copper-accent stat card:
    **"Objective data"** / *"Forensic-grade documentation for every
    evaluation."*
- Both float with the existing 6s ease animation, ±6px.

**Bottom edge:** soft cream curve/wave SVG divider so the transition into the
light page feels designed, not stacked.

**Mobile:** stack — eyebrow, H1 (~34px), subhead, full-width CTAs, monitor
card below at 100% width, floating cards become two inline chips under it.
Hero min-height auto; padding 96px top / 64px bottom.

### 3.3 "Who we help" — two paths (kept, moved up, tightened)

Keep the Patients / Attorneys split but move it **directly after the hero** so
both audiences route themselves within one scroll. Two cards, 50/50, image on
top (corner radii fixed), max 4 lines of copy, one CTA each. Patients card
light, attorneys card navy (as now). Copy rewritten (Part 4).

### 3.4 Services — the centerpiece rebuild (PRIORITY 2)

Replaces both the current tab-grid **and** the "authority statement" card grid
(they duplicate each other). Two layers:

**Layer 1 — "Three steps to answers" pillar row.**
Intro: eyebrow `WHAT WE DO`, heading *"Find it. Understand it. Treat it."*
Then three equal panels (32px gap), each with a large custom line icon in a
copper-tinted squircle, a verb-led title, one plain sentence, and its services
as small pill-links:

| # | Title | One-liner | Services (pills) |
|---|-------|-----------|------------------|
| 01 | **Find the injury** | Objective tests that show how your brain and nerves are really working. | qEEG Brain Mapping · EEG · NCV/EMG |
| 02 | **Understand the impact** | We measure what the injury has changed — memory, focus, mood, speed. | Neurocognitive Testing · Neuropsychology · Concussion Evaluation |
| 03 | **Treat and recover** | A personal plan to rebuild function and get your life back. | Memory & Cognitive Rehab · Headache Treatment · Counseling |

Panel styling: cream cards on the sand section, 28px radius, hover lifts 6px
with a copper border glow. A thin animated waveform line runs behind the three
panels, connecting them left-to-right (the "signal" motif).

**Layer 2 — flagship bento grid** directly below (12-col, 16px gaps):

- **qEEG Brain Mapping — hero card, spans 6 cols × 2 rows.** Dark navy card:
  small animated brain-map visual on its right half, headline *"Brain mapping:
  our signature diagnostic"*, one sentence, copper link "Explore qEEG →" (to
  the existing detail page). Gives the grid a focal point and promotes the
  service that differentiates the clinic.
- The other 9 services as compact cards (3 cols each): custom line icon (not
  numbers), title, one rewritten plain-language line (Part 4), and **an arrow
  link on every card** (to detail pages as they're built; `/conditions` or
  `/contact` as interim targets). Category = tiny copper dot + label top-right,
  no collision with anything.
- **The tab filter is removed.** All ten services visible at once — scanning
  beats clicking for selling.

### 3.5 Objective band — "We measure what others estimate" (kept, upgraded)

Keep the dark band but make it earn its place: split layout instead of a lone
centered card.

- Left: the claim + a 3-item checklist:
  `Normal MRI ≠ no injury` · `qEEG shows function, not just structure` ·
  `Results explained in plain language`.
- Right: a before/after visual — two small topographic maps labeled
  **"Structural scan: normal"** vs **"Functional map: dysregulation
  detected"** — dramatizing the pitch in one glance.
- Background: neural image kept, opacity lowered to ~0.25 with a stronger
  vignette.

### 3.6 Conditions strip (kept, compressed, patient-voiced)

Keep the photo + two-column checklist + link to `/conditions`. Title becomes
patient-voiced: *"Does this sound like you?"* Symptoms phrased as experiences:
"Headaches that won't go away", "Foggy thinking since the accident",
"Dizziness or balance problems", etc.

### 3.7 Journey — 4 steps (kept, polished)

Keep the 4-step timeline. Fix the connecting line so it sits behind the
numbers; add a small pulse dot traveling the line on scroll-into-view
(waveform motif). Existing copy is good.

### 3.8 Medical director quote (kept as-is)

Works. Swap in the real portrait/bio when supplied.

### 3.9 Final CTA (kept, decluttered)

Keep the dual CTA. Remove the placeholder phone/email row until real contact
details exist; show locations + "response within 1 business day" instead.

---

## Part 4 — Copy rewrites (simplified, patient-first)

Rule: every sentence must be understandable to a stressed patient on first
read. Rewrites that will ship:

| Where | Current | Rewritten |
|-------|---------|-----------|
| Hero H1 | "Texas NeuroTrauma Institute" | "Your scan says normal. Your symptoms say otherwise." |
| Hero body | "We provide structured, medically defensible clinical evaluations and recovery strategies…" | "We map how your brain is actually working — finding injuries CT and MRI miss — then build a clear plan to help you recover." |
| Patients card | "Struggling with persistent symptoms like head pressure, brain fog, or memory changes following a concussion or impact? Our team provides an objective diagnosis and builds a clear roadmap…" | "Brain fog, headaches, or memory problems since your injury? We'll find out why — and build your plan to get better." |
| Attorneys card | "We deliver meticulous clinical evaluations, objective causation analysis, and clear functional impairment documentation…" | "Objective findings, clear causation analysis, and court-ready documentation. Clinical and forensic billing kept fully separate." |
| NCV/EMG service | "Testing of peripheral nerve and muscle function to identify nerve damage or neuromuscular disorders." | "Pinpoints the nerve or muscle damage behind numbness, tingling, and weakness." |
| Neurocognitive | "Objective evaluation of memory, attention, processing speed, and executive function." | "Measures exactly how injury has affected your memory, focus, and thinking speed." |
| Counseling | "Compassionate emotional support for patients and families navigating recovery and adjustment." | "Support for the anxiety, mood changes, and stress that follow a brain injury." |

Remaining service one-liners get the same treatment during the build.

**Compliance guardrails** (per site spec brand voice): no "guaranteed
results", no "maximize settlement", no "attorney-friendly", no ER /
"trauma center" implication; outpatient specialty positioning preserved in all
new copy.

**Known source-content catch:** the Headache section in
`Texas_Neurotrauma_Institute_All_Services.md` still says *"Elevate Brain
Injury and Mental Health"* — a leftover from another brand. That name must
never be copied into this site.

---

## Part 5 — Build order

1. **Hero rebuild** — dark immersive hero, waveform animation, new
   headline/copy, fixed floating cards, in-hero proof strip, wave divider,
   mobile stack. Remove placeholder phone from the UI (keep it wired in
   `site.ts` so the real number drops in later).
2. **Services rebuild** — three-pillar row + bento grid with flagship qEEG
   card, custom line-icon set (~10 icons), rewritten one-liners, links on
   every card, tab filter removed.
3. **Supporting sections** — reorder (paths directly after hero), upgraded
   objective band with before/after visual, patient-voiced conditions strip,
   journey polish, CTA declutter.
4. **Motion & polish pass** — scroll reveals via IntersectionObserver, header
   dark-to-light transition, nav refinements, section spacing, reduced-motion
   fallbacks, typecheck + production build + browser walkthrough at
   mobile / tablet / desktop widths.

**No new dependencies** — everything is SVG/CSS on the existing
Vite + React + react-router stack.

---

## The two big bets

1. A **dark, animated, patient-voiced hero** that leads with the "invisible
   injury" hook instead of the brand name.
2. A **services section with hierarchy** — three plain-language pillars plus a
   bento grid where qEEG is the visible flagship, rather than card #1 of 10
   identical beige boxes.
