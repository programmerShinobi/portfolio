# ADR 0001 — Stack: Vite + React 18 + TypeScript

**Status:** Accepted

## Context

The portfolio must deploy as a static site to GitHub Pages (no server), be fast,
type-safe, and match the candidate's TypeScript-heavy profile.

## Decision

Use Vite (build/dev), React 18, and TypeScript in strict mode. Tailwind CSS for
styling. This mirrors the `architecture-advisor` reference stack.

## Consequences

- Fast dev server and simple `base` handling for Pages.
- Client-side rendering (see ADR 0004 for SEO/routing implications).
- Strict TS catches content-shape errors (e.g. missing `RichText` variants).
