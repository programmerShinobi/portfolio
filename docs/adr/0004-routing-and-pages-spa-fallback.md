# ADR 0004 — Routing & GitHub Pages SPA fallback

**Status:** Accepted

## Context

GitHub Pages has no server rewrite, so a deep link / refresh to a client-side
route returns 404. The Home page relies on `#section` anchor navigation.

## Decision

- **Home is a single long page** with anchor sections; the **only separate route
  is `/case-studies/:slug`**. About & Contact are Home sections.
- Use **BrowserRouter** (so native `#anchor` links keep working for Home) with
  `basename={import.meta.env.BASE_URL}`.
- Provide SPA fallback by copying `dist/index.html` → `dist/404.html` at build
  time (`postbuild`). Pages serves `404.html` for unknown paths; the app boots and
  React Router reads the real URL.

## Consequences

- Anchor navigation on Home works natively.
- Minimal moving parts; no hash-router/anchor conflict.
- Deep links return a soft 404 status but render correctly (acceptable for a
  portfolio). If SEO of deep links matters more, revisit with prerendering.
