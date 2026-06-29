# Documentation Map

This repository follows a documented, 7-phase SDLC — adapted from the
[`architecture-advisor`](https://github.com/programmerShinobi/architecture-advisor)
reference. The intent is to make the project **professional and serious from the
first commit**: decide the charter, requirements, and blueprint *before* writing
code, record decisions as ADRs along the way, and keep it healthy after release.

Status legend: ✅ complete · 🔬 in progress · 🔄 ongoing

| Phase | Folder | Key output | Status |
|---|---|---|---|
| 1. Discovery & Planning | [`01-discovery-and-planning/`](01-discovery-and-planning/discovery-and-planning.md) | Project charter | ✅ |
| 2. Requirement Analysis | [`02-requirement-analysis/`](02-requirement-analysis/software-requirements-specification.md) | SRS (functional + non-functional) | ✅ draft |
| 3. Blueprint (Design) | [`03-blueprint/`](03-blueprint/design-specification.md) | Design spec, content model, prototype | 🔬 |
| 4. Development | [`04-development/`](04-development/development-notes.md) | Implementation notes | 🔄 |
| 5. Testing / QA | [`05-testing-qa/`](05-testing-qa/test-plan.md) | Test plan | 🔬 |
| 6. Deployment / Release | [`06-deployment/`](06-deployment/deployment-github-pages.md) | Deploy guide | ✅ |
| 7. Maintenance & Iteration | [`07-maintenance/`](07-maintenance/maintenance-notes.md) | Iteration log | 🔄 |

## Cross-cutting

| Folder | Document | Purpose |
|---|---|---|
| [`adr/`](adr/README.md) | Architecture Decision Records | Log of important technical decisions |
| [`guides/`](guides/content-writing-playbook.md) | Execution playbooks | How-to guidance across phases |
| [`specs/`](specs/build-spec.md) | Build spec | Cross-phase technical reference |

## Reading paths

- **Overview** → Phase 1 charter.
- **Build the app** → `specs/build-spec.md` → `03-blueprint/content-model.md` → `04-development/development-notes.md`.
- **Contribute** → root `CONTRIBUTING.md` + charter §Governance.
