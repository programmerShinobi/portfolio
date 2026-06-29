# ADR 0002 — Content model: RichText (4 variants)

**Status:** Accepted

## Context

The site serves two audiences (non-technical / expert) and two languages
(EN / ID), via two independent toggles. Sale-driving narrative must exist in all
combinations.

## Decision

Model narrative as `RichText { en:{plain;tech}; id:{plain;tech} }` (4 variants),
resolved by `resolve(text, lang, depth)` with layered fallback (depth tech→plain,
then language id→en). Short UI labels use `I18nText { en; id }` only.

## Consequences

- Rich, audience-aware content; communication skill is demonstrated.
- Higher content cost (~24 strings per case study) — mitigated by fallback and a
  content-writing playbook.
- A unit test enforces that every `RichText` has all four variants filled.
