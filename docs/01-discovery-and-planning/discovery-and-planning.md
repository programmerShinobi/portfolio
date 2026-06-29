# Phase 1 — Discovery & Planning (Project Charter)

**Status:** ✅ Complete

## 1. Vision

A premium, consulting-style software engineering portfolio for **Faqih Pratama
Muhti** that positions him as an engineer who can read complex systems, modernize
legacy, integrate data, and deliver real impact.

Core message: *"I help complex systems become clearer, safer, more connected, and
more ready to grow."*

Positioning: **Software Engineer focused on backend systems, legacy
modernization, integration, and architectural clarity.**

## 2. Target audiences

1. **Recruiters / non-technical managers** — need to grasp value in 1–2 minutes.
2. **CTOs / engineers** — want technical depth, trade-offs, design reasoning.
3. **Indonesian & English readers** — both must be first-class.

This drives two independent global toggles: **language (EN ⇄ ID)** and **depth
(Plain ⇄ Deep Tech)**.

## 3. Goals (measurable)

- Visitor understands positioning within the hero (5-second test).
- Each case study answers "so what was the result?" (impact-first).
- Capability is visible at a glance (Capability Radar).
- Works for both audiences and both languages.
- Accessible (WCAG AA), fast (Lighthouse ≥ 90), deployable on GitHub Pages.

## 4. Scope

**In scope:** static React site; Home single-page; Case Study Detail route;
capability radar; impact-first case studies; 4-variant content; three toggles
(theme, language, depth); GitHub Pages deploy.

**Non-goals:** no backend, no interactive "recommendation engine" as the
centerpiece (that idea now lives only as the secondary `architecture-advisor`
personal exploration); no CMS; no auth; no analytics dashboard.

## 5. Governance

- Conventional Commits + Semantic Versioning.
- Each important technical decision → one ADR (`docs/adr/`).
- PRs gated by CI (lint + test + build).
- Documents carry honest status markers.

## 6. Principles

1. **Impact-first, not a theory list** — Problem → Action → Impact (Before → After).
2. **Two audiences & two languages** — independent toggles, shared data.
3. **Honesty** — metrics only when stated in the CV (source of truth); never fabricate numbers; self-assessed radar.
