# Changelog

All notable changes to this project are documented here. The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and this project adheres
to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed
- Renamed the "Incident Emergency Response" case study to **IERApps — Integrated
  Engineering Resource Applications** (matches the CV project name; "emergency
  response" was only a domain, not a project). Slug `ierapps`. Reframed copy to the
  mobile-app reliability/responsiveness work. Updated skills evidence, blueprint
  content-model, prototype, and the PROMPT spec accordingly.
- Tightened tech groups to the CV: added Sequelize, Prisma ORM (label), Microservices,
  Unit & API testing.
- Aligned content to the updated CV (source of truth): AHI tech is
  NestJS/Prisma ORM/PostgreSQL/Elasticsearch (no React); added CV-sourced metrics
  (100% critical BSSN findings resolved, ~40% less document-handling, ~35% less
  manual processing, 100% manual logbook eliminated, 6+ systems, ~3 years); added
  phone to profile/contact. Honesty rule now permits CV-sourced metrics only.

### Added
- Initial portfolio scaffold: Vite + React + TypeScript + Tailwind.
- 7-phase SDLC documentation under `docs/` and root governance files.
- Content model with 4-variant `RichText` (EN/ID × Plain/Tech) and `resolve()`.
- Home single-page sections: Hero, Impact Highlights, Capability Radar, Selected
  Case Studies, How I Think, Technical Focus, Personal Exploration, About, Contact.
- Case Study Detail route with SPA fallback for GitHub Pages.
- Theme, language, and depth toggles (persisted).
- Unit tests for `resolve()` and data integrity; CI and Pages deploy workflows.

## [0.1.0] — 2026-06-26
- Project initialized.
