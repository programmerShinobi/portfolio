# Build Spec (cross-phase technical reference)

A single page that ties the phases together for someone building or auditing it.

## Stack

Vite · React 18 · TypeScript (strict) · Tailwind (dark default) · React Router
(BrowserRouter) · Recharts (radar) · Framer Motion · lucide-react ·
`@fontsource/*` fonts · Vitest + RTL · Playwright (E2E) · axe (a11y).

## Source map

```
src/
  main.tsx, App.tsx, index.css
  lib/        richText.ts, paths.ts, utils.ts
  context/    theme, lang, depth providers
  hooks/      useTheme, useLang, useDepth
  data/       profile, caseStudies, skills, principles, techStack, uiStrings
  components/  layout/, ui/, sections/, skills/, caseStudies/, RichTextView
  routes/     Home, CaseStudyDetail
  test/       richText.test.ts, data.test.ts
```

## Key invariants

- All `RichText` fields have 4 filled variants (enforced by test).
- Asset paths go through `lib/paths.ts` (`asset()` → `BASE_URL`).
- `base` (vite) == router `basename`.
- `postbuild` copies `index.html` → `404.html`.

## Build commands

`npm run dev` · `npm run build` · `npm run preview` · `npm run test` ·
`npm run lint` · `npm run typecheck`.
