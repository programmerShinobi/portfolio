# Phase 3 — Design Specification

**Status:** 🔬 In progress

## Visual direction — technical-premium

- Dark mode default + light toggle (Tailwind `darkMode: 'class'`).
- Accents: cyan / electric blue / steel blue. Generous whitespace, tidy grid,
  thin blueprint-like lines, light terminal/code aesthetic (restrained).
- Palette (dark default): near-black / deep navy background, cyan primary,
  muted slate borders, off-white text.

## Typography

- Headings: **Space Grotesk**.
- Body: **Inter**.
- Technical labels / metadata: **JetBrains Mono**.
- Self-hosted via `@fontsource/*`, `font-display: swap`.

## Layout

- Sticky header with logo/name + three toggles (theme, language, depth).
- Home: vertical sections with anchors; section max-width container.
- Case study detail: focused single-column reading layout + Before→After card.

## Tokens

Implemented as Tailwind utility classes (light = base, dark = `dark:` overrides),
`<html class="dark">` by default. Anti-FOUC inline script in `<head>` applies the
persisted theme + `lang` before the bundle loads.

## Motion

Framer Motion for subtle reveal/transition; disabled under
`prefers-reduced-motion`.
