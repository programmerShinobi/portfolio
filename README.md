# Faqih Pratama Muhti — Software Engineering Portfolio

A premium, consulting-style software engineering portfolio built around
impact-driven case studies, a capability radar, and architectural thinking.

> *"I help complex systems become clearer, safer, more connected, and more ready
> to grow."*

**Positioning:** Software Engineer focused on backend systems, legacy
modernization, integration, and architectural clarity.

## Highlights

- **Impact-first** content — every case study reads Problem → Action → Impact.
- **Two independent toggles** — language (EN ⇄ ID) and depth (Plain ⇄ Deep Tech),
  plus a theme toggle. All persisted.
- **Capability Radar** — self-assessed, evidence-linked, with an accessible table.
- **Documented process** — a 7-phase SDLC lives in [`docs/`](docs/README.md).

## Tech stack

Vite · React 18 · TypeScript (strict) · Tailwind CSS · React Router · Recharts ·
Framer Motion · lucide-react · Vitest · Playwright.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173/portfolio/
npm run build      # production build (+ copies index.html -> 404.html)
npm run preview    # preview the build
npm run test       # unit tests (Vitest)
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
```

## Deploy (GitHub Pages)

Set `base` in `vite.config.ts` to `/<your-repo-name>/`, push to `main`, and enable
**Settings → Pages → Source: GitHub Actions**. See
[deployment guide](docs/06-deployment/deployment-github-pages.md).

## Documentation

The project follows a documented SDLC — start at [`docs/README.md`](docs/README.md).

## License

Code: [MIT](LICENSE). Documentation: [CC BY 4.0](LICENSE-docs.md).
