# Contributing

Thanks for your interest. This is a personal portfolio, but the workflow is kept
professional.

## Workflow

1. Branch from `main` using a conventional prefix: `feat/`, `fix/`, `docs/`,
   `chore/`.
2. Keep PRs small and focused.
3. Ensure CI passes: `npm run lint && npm run typecheck && npm run test && npm run build`.
4. Use [Conventional Commits](https://www.conventionalcommits.org/).

## Content changes

- Narrative copy uses 4-variant `RichText` (EN/ID × Plain/Tech). Fill all four;
  the test suite enforces it. See
  [content-writing playbook](docs/guides/content-writing-playbook.md).
- No fabricated metrics — qualitative impact only.

## Decisions

Significant technical decisions get an ADR in `docs/adr/`.
