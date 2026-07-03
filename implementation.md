# Texas NeuroTrauma Institute — Redesign & Implementation Plan

> Status: **DRAFT for review.** Nothing in here is built yet. This document
> audits the current site against the two source docs
> (`texas-neurotrauma-site-spec.md`, `Texas_Neurotrauma_Institute_All_Services.md`)
> and the supplied brand logo, then proposes a phased redesign — with the
> homepage as the priority.

> ### Progress
> - **Phase 0 — DONE.** Real logo rendered to optimized PNGs (full 85 KB +
>   square favicon/mark) and wired into Nav, Footer, favicon/OG; off-brand hero
>   & antique brain-map images replaced with a self-contained qEEG brain-map
>   SVG; dashed placeholders replaced with polished branded panels; phone /
>   click-to-call added to nav, footer, contact page, and a sticky mobile bar.
> - **Phase 1 — DONE.** Shared UI primitives added; homepage rebuilt (brand H1/H2
>   hero + proof strip + authority statement + two-paths + objective band +
>   services + conditions + journey + care-team + final CTA); responsive mobile
>   nav drawer + sticky call bar. Typecheck + production build pass.
> - **Next:** awaiting your review before Phase 2 (multi-page build-out).

> ### Decisions locked (from review)
> 1. **Scope:** Full multi-page site — Phases 0–4.
> 2. **Hero headline:** Use the spec brand-name H1 — *"Texas NeuroTrauma
>    Institute"* with the tagline beneath.
> 3. **Imagery:** I source/propose licensed stock and build polished
>    placeholders in the meantime (no dashed boxes).
> 4. **Contact:** Keep phone/email placeholders this pass; wire click-to-call
>    structure so real details drop in later.

---

## 1. What exists today

**Stack:** Vite 6 + React 19 + react-router-dom 7, TypeScript. Fonts (Fraunces
display serif, Inter body) self-hosted in `/public/fonts`. All styling is
inline `style={{...}}` objects plus a shared `global.css` of `.tni-*` hover
utilities. CSS design tokens live in `:root` (`--tni-navy #07355e`,
`--tni-cream #fcfaf7`, `--tni-sand #f5ede3`, `--tni-accent #e16d22`).

**Routes wired (`main.tsx`):** `/`, `/conditions`, `/qeeg-service`,
`/for-attorneys`, `/contact`. That's **5 pages** against a spec that defines
~10 top-level pages plus condition/diagnostic subpages.

**Homepage sections (top → bottom):** Hero → trust strip → "two paths"
(Patients / Attorneys) → conditions → 10-service grid → dark "objective"
band → 4-step journey → care-team quote → final CTA.

---

## 2. Design flaws & gaps (prioritised)

### P0 — Brand & imagery (the reasons it looks "not impressive")

1. **Logo not used.** `Nav.tsx` and `Footer.tsx` import
   `assets/images/logo.png`, which is just a flat navy **Texas silhouette**.
   The real brand logo — *Texas silhouette with neural-network brain +
   "TEXAS NEUROTRAUMA INSTITUTE" wordmark and copper underline* — is sitting
   unused at the repo root as an SVG. It already matches the site palette
   (navy + copper `#e16d22`).
   - Replace the logo everywhere; drop the duplicated text wordmark next to it
     in the nav (the SVG already contains the wordmark). Provide a compact
     mark-only variant for the mobile nav and favicon.

2. **Hero image is off-brand.** `hero-patient.jpg` is an empty, AI-rendered
   wood-panelled room that reads dental-office/spa, with no people — directly
   under a headline about *compassionate, human* care. This is the single
   biggest "unimpressive" factor.
   - Replace with a warm, human, credible image: physician-with-patient, a
     real qEEG cap session, or a clinician reviewing a brain map with a
     patient. See §5 image brief.

3. **Conditions image lacks credibility.** `brain-mapping.jpg` is an antique
   anatomical print with garbled text ("OEEIG ITAP"). Wrong century, wrong
   modality for a qEEG practice.
   - Replace with a real qEEG topographic brain-map / clean modern
     neurodiagnostic visual.

4. **Placeholder boxes would ship.** Two `ImageSlot` dashed placeholders are
   live on the homepage ("Real photo: patient & family…", care-team
   portrait). These must be filled with real photography before launch.

### P1 — Homepage impact & conversion

5. **Hero lacks a "wow" + proof.** Current hero is a competent 50/50
   text/image split but flat. Missing: quantified trust signals (e.g.
   response-time, locations, physician-led), a clear single primary CTA, and
   any sense of depth/motion.

6. **CTA hierarchy is muddy.** The hero shows "Request an Evaluation" and
   "For Attorneys →" as near-equal siblings. For ~90% of visitors (patients)
   the attorney path is noise up top. Make patient CTA unmistakably primary;
   demote attorney entry to the dual-path section (which already exists) + nav.

7. **Communication is hard.** No phone number anywhere, no click-to-call, no
   email. Contact page shows "Phone number — to be added". A neurotrauma
   patient in distress needs a visible, tappable phone in the nav and a
   sticky mobile call bar.

8. **No mobile navigation.** `Nav.tsx` renders all links + button in a
   `flex-wrap` row with no hamburger/drawer. On phones this wraps into a
   cramped, ugly stack. Needs a proper responsive menu.

### P2 — Structure / content gaps vs spec

9. **Missing pages** defined as `ready`/`draft` in the spec but not built:
   - `/about` (mission copy is *ready* in spec)
   - `/diagnostics` hub (*ready*) + subpages qeeg / neurocognitive / functional-impairment
   - `/treatment/*` (neurotrauma-management, neurofeedback, headache, injections)
   - `/clinical-standards`
   - `/locations` (Houston, San Antonio)
   - `/resources` blog (*ready*, 2 articles/month)
   - `/schedule`
   - `/conditions/*` five condition subpages
   - Route `/qeeg-service` should live under the diagnostics hub
     (`/diagnostics/qeeg-brain-mapping`) per the spec URL scheme.

10. **Service coverage.** `data/home.ts` lists 10 services; the services doc
    describes them in depth (NCV-EMG, EEG, Brain Mapping, qEEG, Concussion,
    Neurocognitive, Neuropsychology, Headache, Counseling, Memory Training).
    Good raw material exists to build real service pages — currently only qEEG
    has a detail page.
    - Note: the Headache section in the services doc references *"Elevate Brain
      Injury and Mental Health"* — wrong brand name; must be scrubbed to Texas
      NeuroTrauma Institute before any copy is reused.

11. **Footer links are dead.** Footer lists Diagnostics/Treatment items and
    "Patient FAQ", "Privacy", "Clinical Terms", "Accessibility" as plain text
    / `href="#"`. Wire to real routes as pages get built.

### P3 — Technical / SEO / a11y / maintainability

12. **SEO thin.** Only `document.title` is set per route. Spec requires
    `MedicalOrganization` + `Physician` schema markup, meta descriptions,
    clean kebab-case URLs, `<2.5s` load. No meta description, OG tags, canonical,
    sitemap, or JSON-LD today.

13. **Accessibility.** Contact uses emoji as icons (☎ ✉ 📍) — inconsistent
    across platforms, poor for screen readers. No visible focus rings defined.
    Verify colour-contrast on copper-on-cream text. Add ADA pass (spec
    requires ADA compliant).

14. **Maintainability.** ~100–500-line inline-style blobs per page make design
    changes slow and inconsistent (e.g. the same section-eyebrow style is
    hand-repeated ~8×). Recommend extracting a small set of shared primitives
    (`Section`, `Eyebrow`, `Button`, `Container`, `SectionHeading`) and/or
    moving repeated styles into CSS classes. This is invisible to users but is
    what will make the redesign fast and consistent.

15. **Positioning guardrails.** Spec bans terms ("trauma center", "emergency
    trauma services", "guaranteed results", "maximize settlement",
    "attorney-friendly"). Current copy is clean — keep a checklist so new copy
    stays compliant, and keep the outpatient (non-ER) positioning.

---

## 3. Homepage redesign (the priority)

Goal: an **amazing, trustworthy, patient-first** homepage with one obvious
action and effortless contact. Proposed section order:

1. **Sticky header** — new brand logo (mark + wordmark), streamlined nav,
   **visible phone number** + primary "Request Evaluation" button. Mobile:
   hamburger drawer + persistent call button.

2. **Hero (redesigned)**
   - Left: eyebrow chip, **spec brand-name H1** (*"Texas NeuroTrauma
     Institute"*) with the H2 tagline (*"Advanced Neurotrauma Diagnostics &
     Functional Restoration"*) and the sub-tagline beneath, then **one primary
     CTA** ("Request an Evaluation") with a quiet secondary text-link ("or call
     (XXX) XXX-XXXX"). The former benefit line becomes supporting body copy.
   - Right: a **real human/clinical photo** (physician + patient or qEEG
     session), with the "Not on MRI? We find injury scans miss" accent card
     kept — it's a genuinely strong hook.
   - Add a thin **proof row** beneath (e.g. "Physician-directed · qEEG brain
     mapping · Response within 1 business day · Houston & San Antonio").

3. **Authority statement** — bring in the spec's *"Precision in Diagnosis.
   Integrity in Documentation."* block with the condition bullet list.

4. **Two paths** (keep) — Patients & Families / Attorneys. Fill the placeholder
   photo. This is where the attorney audience is served, keeping the hero
   patient-focused.

5. **"We measure what others estimate"** objective/qEEG band — keep the dark
   section (strong), swap the antique print for a real brain-map visual.

6. **Services overview** — keep the 10-card grid but link each card to its
   (new) service page as they're built; group by Diagnostics / Assessment /
   Rehabilitation.

7. **How it works** — keep the 4-step journey (clear, reassuring).

8. **Physician / care-team** — replace placeholder with a real portrait +
   short bio once the Medical Director details are supplied (spec `global_todos`).

9. **Final CTA + easy contact** — dual CTA plus phone/email/locations inline,
   so the page always ends with a way to reach someone.

10. **Sticky mobile "Call / Request" bar** — always-visible on small screens.

Design language: keep the palette and type; add more generous whitespace,
subtle scroll-in reveals, consistent card radii/shadows, and stronger visual
hierarchy on section headings.

---

## 4. Phased delivery

**Phase 0 — Brand + imagery quick win (highest impact, low effort)**
- Add logo SVG to `src/assets/`, replace in Nav + Footer, remove duplicate
  text wordmark, set favicon + OG image.
- Swap hero and conditions images for credible replacements; fill or
  temporarily hide the two placeholder slots.
- Add phone number to nav + a click-to-call.

**Phase 1 — Homepage redesign**
- Extract shared UI primitives (Section/Container/Eyebrow/Button/Heading).
- Rebuild hero, add authority + proof rows, refine CTA hierarchy, add mobile
  nav drawer + sticky call bar.

**Phase 2 — Core pages from `ready` copy**
- Build `/about`, `/diagnostics` hub, `/resources` blog scaffold, `/locations`
  using copy already marked `ready` in the spec. Restructure `/qeeg-service`
  under `/diagnostics/qeeg-brain-mapping`.

**Phase 3 — Service & condition detail pages**
- Generate service pages from `Texas_Neurotrauma_Institute_All_Services.md`
  (scrub the "Elevate…" brand error). Build the 5 condition subpages
  (flagged physician-review-required — medical claims).

**Phase 4 — SEO, a11y, performance polish**
- JSON-LD (`MedicalOrganization`, `Physician`), meta descriptions/OG per
  route, sitemap/robots, focus states, contrast audit, ADA pass, image
  optimisation for `<2.5s` loads.

---

## 5. Assets & info still needed from you (blocks certain phases)

From the spec's `global_todos` + what the redesign needs:
- **Real photography**: hero (physician/patient or qEEG session), a
  patient-&-family image, an attorney/legal image, and a physician/care-team
  portrait. (Or approval to license specific stock — I can propose options.)
- **Medical Director**: full name, credentials, headshot, bio.
- **Contact**: clinic phone, email, confirmed Houston / San Antonio addresses
  + hours.
- **CTA destinations**: booking/scheduling tool for `/schedule`, attorney
  case-review portal URL, Attorney Referral Packet PDF.
- **Entity language sign-off** before publishing PLLC/DBA wording publicly.
- **Physician review** for all condition/diagnostic clinical claims copy.

Where you can't supply an asset yet, I'll use a clearly-marked, tasteful
placeholder (not a dashed box) so the site still looks finished.

---

## 6. Resolved (see "Decisions locked" at top)

1. **Scope:** Full multi-page site (Phases 0–4). ✔
2. **Hero headline:** Spec brand-name H1. ✔
3. **Imagery:** Sourced/licensed stock + polished placeholders. ✔
4. **Phone/contact:** Placeholders this pass, click-to-call wired. ✔

Remaining input still needed from you is listed in §5 (photography, Medical
Director details, confirmed addresses/hours, booking tool + attorney portal
URLs, entity-language sign-off, physician review of clinical claims).
```
