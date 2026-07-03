# Texas NeuroTrauma Institute — Website

A single-page React application for the Texas NeuroTrauma Institute marketing site, built with Vite, React, TypeScript, and React Router.

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build for production
npm run preview  # preview the production build locally
```

## Architecture

This site was originally exported from Design Canvas `.dc.html` bundles and is now
**fully converted to native React**. Each original page is a dedicated route component
with its content extracted into typed data files and JSX:

| Route | Component | Content data |
|-------|-----------|--------------|
| `/` | `src/pages/Home.tsx` | `src/data/home.ts` |
| `/conditions` | `src/pages/Conditions.tsx` | `src/data/conditions.ts` |
| `/qeeg-service` | `src/pages/QeegService.tsx` | `src/data/qeegService.ts` |
| `/for-attorneys` | `src/pages/ForAttorneys.tsx` | `src/data/forAttorneys.ts` |
| `/contact` | `src/pages/Contact.tsx` | (form state in component) |

Shared chrome lives in `src/components/Layout.tsx` (nav + footer shell),
`Nav.tsx`, and `Footer.tsx`. Routing is configured in `src/main.tsx` using
React Router's data router API (`createBrowserRouter`).

There is **no** dc-runtime, HTML fragment loader, or template interpreter left in
the app.

## Navigation notes

- **Home**, **Conditions**, **For Attorneys**, and **Contact** are separate pages.
- **Services** links to the services section on the home page (`/#services`), matching
  the original design. The qEEG detail page lives at `/qeeg-service` (linked from the
  qEEG service card on home).
- Scroll position resets to the top on every page change; hash links (e.g. Services,
  in-page anchors) smooth-scroll after the target page renders.

## Content updates

Copy and repeated list content (services, conditions, FAQs, etc.) live in
`src/data/*.ts` as plain typed arrays — edit those files rather than the JSX to
update text without touching layout code.
