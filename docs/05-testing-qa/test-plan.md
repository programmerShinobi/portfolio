# Phase 5 — Test Plan

**Status:** 🔬 In progress

## Unit (Vitest + React Testing Library)

- `resolve()` returns the right variant and falls back correctly
  (tech → plain, id → en, empty strings treated as missing).
- **Every `RichText` in the data layer has all four variants filled**
  (`en.plain`, `en.tech`, `id.plain`, `id.tech`).
- `caseStudies` slugs are unique; spotlight count is exactly one.
- `skills` levels are within 0–100 and not all equal to 100.

## E2E (Playwright) — `e2e/`

- Home renders all sections; navigating to a case study detail works.
- Deep-link / refresh of `/case-studies/ahi` does not 404 (SPA fallback).
- All three toggles change state and persist across reload.

> Running E2E requires `npx playwright install` (downloads browsers); it is not
> run in the default CI job to keep CI lightweight.

## Accessibility (axe)

- No critical violations in dark and light themes.
- Radar has a text-table equivalent.

## Manual

- 4 toggle combinations (EN/ID × Plain/Tech) all render filled, readable text.
- One non-technical and one engineer reader confirm "what's the result?" lands.
