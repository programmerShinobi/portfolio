# Phase 2 — Software Requirements Specification (SRS)

**Status:** ✅ Draft

## Functional requirements

| ID | Requirement |
|---|---|
| FR-1 | Home renders as a single long page with anchored sections in this order: Hero → Impact Highlights → Capability Radar → Selected Case Studies → How I Think → Technical Focus → Personal Exploration → About → Contact CTA. |
| FR-2 | A single separate route `/case-studies/:slug` renders a case study detail page (Overview → Challenge → Contribution → Approach → Outcome → Reflections). |
| FR-3 | Three global toggles in the header — theme (dark/light), language (EN/ID), depth (Plain/Deep Tech) — independent, persisted to localStorage. |
| FR-4 | All sale-driving narrative text is `RichText` (4 variants: EN/ID × Plain/Tech) resolved via `resolve(text, lang, depth)` with fallback. |
| FR-5 | Capability Radar renders 6–8 axes from data; each axis shows a dual-language/dual-depth tooltip + evidence; an accessible text table mirrors the chart. |
| FR-6 | Each case study is presented Problem → Action → Impact with a Before → After card; AHI is the spotlight. |
| FR-7 | Personal Exploration shows `architecture-advisor` with an "In Progress" badge and links. |
| FR-8 | Contact section exposes Email, LinkedIn, GitHub, Download CV. |
| FR-9 | Per-project tech badges must match the CV (`public/cv-faqih-pratama-muhti.pdf`) as the single source of truth. **AHI is backend/data and must not list React.** Frontend frameworks (Angular/React/Next) are attributed only to frontend projects (e.g. XPREAM = Angular), never to AHI. See [content model](../03-blueprint/content-model.md#per-project-tech-stack-source-of-truth-the-cv). |
| FR-10 | Quantitative impact may be shown **only when stated in the CV** (e.g. 100% of critical BSSN findings resolved, ~40% less manual document-handling, ~35% less manual processing time, 100% of manual logbook entries eliminated, 6+ systems, ~3 years). No numbers may be invented beyond the CV. |

## Non-functional requirements

| ID | Requirement |
|---|---|
| NFR-1 (a11y) | WCAG AA: sufficient contrast in both themes, keyboard navigable, correct `aria-*`, radar has text equivalent, respects `prefers-reduced-motion`. |
| NFR-2 (perf) | Lighthouse performance ≥ 90; lazy-load radar; code-split the detail route. |
| NFR-3 (SEO) | Static OG/Twitter meta in `index.html`; `<html lang>` updates with language toggle; sitemap + favicon. |
| NFR-4 (responsive) | Mobile-first; works from 320px up. |
| NFR-5 (i18n) | EN default; `navigator.language` may seed initial language; manual choice wins and persists. |
| NFR-6 (deploy) | Static build deployable to GitHub Pages; deep-link refresh must not 404. |
| NFR-7 (quality) | TypeScript strict, ESLint strict, Prettier; unit tests assert all `RichText` have 4 filled variants. |
