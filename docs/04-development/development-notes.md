# Phase 4 — Development Notes

**Status:** 🔄 Ongoing

## Stack

Vite + React 18 + TypeScript (strict) + Tailwind CSS. React Router for the single
detail route. Recharts for the radar. Framer Motion for subtle motion.
lucide-react for icons. Self-hosted fonts via `@fontsource/*`.

UI primitives are hand-rolled (small, accessible, Tailwind-based) instead of the
shadcn CLI — see [ADR 0005](../adr/0005-handrolled-ui-primitives.md) — to keep the
build deterministic and offline-friendly.

## Component structure

- `components/layout/` — `Header`, `Footer`, `ThemeToggle`, `LangToggle`, `DepthToggle`.
- `components/ui/` — `Segmented`, `Badge`, `Container`, `Section`.
- `components/sections/` — one per Home section.
- `components/skills/` — `SkillsRadar`.
- `components/caseStudies/` — `CaseStudyCard`, `BeforeAfterCard`.
- `components/RichTextView.tsx` — resolves `RichText` against current lang+depth.
- `routes/` — `Home`, `CaseStudyDetail` (lazy-loaded).

## State

`context/` providers (theme, lang, depth) each persist to localStorage and expose
a hook. Anti-FOUC inline script in `index.html` applies theme + `lang` pre-mount.

## Conventions

- Conventional Commits; strict TS/ESLint; Prettier.
- Assets referenced via `lib/paths.ts` (`asset()` → `import.meta.env.BASE_URL`).
