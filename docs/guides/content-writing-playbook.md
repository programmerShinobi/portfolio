# Content-Writing Playbook

How to write portfolio copy that stays impact-first and audience-aware.

## The rule

Every block answers **"so what was the result?"** Follow
**Problem → Action → Impact (Before → After)**. Lead with the result; the tech
stack is supporting detail, not the headline.

- ❌ "Built app using NestJS, Prisma, PostgreSQL."
- ✅ "Unified scattered fleet-health data into one place, ready for analysis."

## The 4 variants

Each `RichText` field needs four entries:

| | Plain | Tech |
|---|---|---|
| **EN** | analogy, business outcome, minimal jargon | precise terms, patterns, trade-offs |
| **ID** | same as EN-plain, in Indonesian | same as EN-tech, in Indonesian |

Tips:
- Write `en.plain` first (the spine), then `en.tech`, then translate to `id.*`.
- The `resolve()` fallback covers any temporarily-missing variant, but tests
  require all four before a field is "done".
- Use metrics **only when they appear in the CV** (source of truth) — e.g. 100%
  of critical BSSN findings resolved, ~40% less manual document-handling. Never
  invent numbers beyond the CV; otherwise use honest qualitative impact.

## Tone

Calm, confident, technical-but-understandable. Avoid "passionate developer",
"love coding". Prefer "focused on complex systems", "built for clarity,
reliability, and maintainability".
