# ADR 0005 — Hand-rolled UI primitives (no shadcn CLI)

**Status:** Accepted

## Context

The spec suggests shadcn/ui. shadcn is a CLI that copies components and needs path
aliases + `components.json`, and pulls Radix dependencies. For a small,
deterministic, offline-friendly build, that ceremony is unnecessary.

## Decision

Hand-roll a few small, accessible Tailwind primitives (`Container`, `Section`,
`Badge`, `Segmented`) and a couple of components. Keep them accessible
(keyboard + `aria-*`). Radix/shadcn can be adopted later if component needs grow.

## Consequences

- Fewer dependencies; deterministic build.
- We own the primitives (more control, slightly more code).
- If complex components are needed later, revisit and adopt shadcn/Radix.
