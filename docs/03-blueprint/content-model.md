# Phase 3 — Content Model

**Status:** 🔬 In progress

Two independent dimensions: **language** (`en | id`) and **depth**
(`plain | tech`). Sale-driving narrative therefore has **4 variants**.

```ts
type Lang  = 'en' | 'id';
type Depth = 'plain' | 'tech';

interface RichText { en: { plain: string; tech: string }; id: { plain: string; tech: string } }
interface I18nText { en: string; id: string }   // short UI labels, no depth

function resolve(t: RichText, lang: Lang, depth: Depth): string {
  const block = t[lang] ?? t.en;            // language fallback id → en
  return block[depth] || block.plain        // depth fallback tech → plain
      || t.en[depth] || t.en.plain;         // last resort: en
}
```

## Data files (`src/data/`)

| File | Shape | Notes |
|---|---|---|
| `profile.ts` | profile fields | name, role, links, email, education |
| `caseStudies.ts` | `CaseStudy[]` | `impact` + `detail.*` are `RichText`; `angle/summary/before/action` are `I18nText` |
| `skills.ts` | `SkillAxis[]` | `axis: I18nText`, `level: number`, `label: RichText`, `evidence: string[]` |
| `principles.ts` | `Principle[]` | "How I Think" — `title: I18nText`, `body: RichText` |
| `techStack.ts` | grouped tech | Technical Focus groups |
| `uiStrings.ts` | `I18nText` map | header, CTAs, section titles |

## Per-project tech stack (source of truth: the CV)

Project tech attributions in `caseStudies.ts` must match the CV
(`public/cv-faqih-pratama-muhti.pdf`). Notably, **AHI is a backend/data project and
does not use React.**

| Case study | Tech (per CV) |
|---|---|
| AHI — Aircraft Health Index | NestJS, Prisma ORM, PostgreSQL (+ Elasticsearch as analytical store; + BSSN security hardening) |
| E-Techpub | Spring Boot, PostgreSQL (Java) |
| Cross-Database Integration (FDW) | PostgreSQL Foreign Data Wrapper, MSSQL, MySQL |
| IERApps — Integrated Engineering Resource Applications | GraphQL, Node.js, PostgreSQL |
| XOPS — Excellent Operations | NestJS, PostgreSQL |
| OLAPS & Electronic Logbook | web app + Electronic Logbook (no specific frontend framework stated in CV → kept to Node.js, PostgreSQL) |

> React.js / Next.js / Angular are real frontend skills on the CV, but they are
> attributed to frontend projects (e.g. **XPREAM** is the Angular one) — never to AHI.
> The portfolio website itself is built with React; that is unrelated to AHI's stack.

## Honesty rules

- **Metrics must come from the CV** (source of truth) — e.g. "100% of critical
  BSSN findings resolved", "~40% less manual document-handling", "~35% less manual
  processing time", "100% of manual logbook entries eliminated", "6+ systems",
  "~3 years". **Never invent numbers** beyond what the CV states.
- Radar `level` is **self-assessed**; not all axes at 100%.
- `architecture-advisor` framed at concept/direction level (WIP).
- Project tech badges must match the CV; do not attribute React to AHI.
