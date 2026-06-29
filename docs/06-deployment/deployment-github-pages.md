# Phase 6 — Deployment (GitHub Pages)

**Status:** ✅ Ready

## Configuration

1. `vite.config.ts` → `base: '/<REPO-NAME>/'`. This repo defaults to
   `/portfolio/`; change it to match the actual GitHub repository name.
2. Router uses `basename={import.meta.env.BASE_URL}` so paths line up with `base`.
3. SPA deep-link fallback: the build copies `dist/index.html` → `dist/404.html`
   (`postbuild` script). GitHub Pages serves `404.html` for unknown paths, which
   loads the same app; React Router then reads the real URL. This prevents the
   deep-link/refresh 404.

## CI/CD

- `.github/workflows/ci.yml` — lint + test + build on push/PR.
- `.github/workflows/deploy.yml` — build and deploy to GitHub Pages via
  `actions/deploy-pages` on push to `main`.
- **Settings → Pages → Source: GitHub Actions.**

## Assets to provide

- `public/cv-faqih-pratama-muhti.pdf` (currently a placeholder).
- `public/og-image.png` (1200×630).
- `public/favicon.svg`.

OG image URL must be absolute for link previews to render.
