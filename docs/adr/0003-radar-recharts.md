# ADR 0003 — Capability Radar uses Recharts

**Status:** Accepted

## Context

The radar is a signature section. It must be lightweight, React-friendly, and
accessible.

## Decision

Use Recharts `RadarChart`. Wrap in a fixed-height container (Recharts
`ResponsiveContainer` collapses without an explicit parent height). Lazy-load the
radar. Provide a text-table equivalent for accessibility.

## Consequences

- Quick to implement with React.
- Adds to bundle size — mitigated by lazy-loading.
- Chart is not screen-reader friendly on its own → text table is mandatory.
