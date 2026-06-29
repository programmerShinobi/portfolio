# Decisions (high-level)

A concise summary of the most important choices. Detailed records live in
[`docs/adr/`](docs/adr/README.md).

- **Concept:** consulting-style portfolio (impact-first case studies + capability
  mapping + architectural thinking). The interactive "engine" is *not* the
  centerpiece; it survives only as the secondary `architecture-advisor` personal
  exploration.
- **Stack:** Vite + React 18 + TypeScript (strict) + Tailwind — ADR 0001.
- **Content:** 4-variant `RichText` (EN/ID × Plain/Tech) with layered fallback —
  ADR 0002.
- **Radar:** Recharts, lazy-loaded, with an a11y text table — ADR 0003.
- **Routing:** Home single-page + one `/case-studies/:slug` route; BrowserRouter +
  `404.html` SPA fallback for GitHub Pages — ADR 0004.
- **UI:** hand-rolled accessible primitives instead of the shadcn CLI — ADR 0005.
