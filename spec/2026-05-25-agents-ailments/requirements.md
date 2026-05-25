# Requirements — Agents & Ailments

**Phase:** 1  
**Branch:** `phase-1-agents-ailments`  
**Refs:** [mission.md](../mission.md), [tech-stack.md](../tech-stack.md)

---

## Scope

This phase delivers the core data model and the read/write UI for agents and their ailments. Nothing else — no therapies, no appointments, no authentication.

### In scope
- Prisma schema for `Agent` and `Ailment`
- Seed data (sample agents with ailments)
- Agent list page (dashboard)
- Agent detail page (profile + ailment list)
- Add, edit, and remove an ailment for an agent
- Basic Tailwind layout: nav, sidebar, content area

### Out of scope
- Therapies, appointments, booking flows
- Auth / roles / login
- Pagination, search, or filtering
- Any API consumed outside the Next.js app

---

## Data model

### Agent

| Field | Type | Notes |
|---|---|---|
| `id` | `String` (cuid) | Primary key |
| `name` | `String` | Display name, e.g. "Claude-3 Sonnet" |
| `model` | `String` | Underlying model, e.g. "claude-3-sonnet", "gpt-4o" |

### Ailment

| Field | Type | Notes |
|---|---|---|
| `id` | `String` (cuid) | Primary key |
| `name` | `String` | Short label, e.g. "Prompt Fatigue", "Context Overflow" |
| `severity` | `Enum` | `mild`, `moderate`, `severe` |
| `agentId` | `String` | FK → `Agent.id` |

Relation: one Agent has many Ailments. Deleting an agent cascades to its ailments.

---

## Decisions

- **Minimal schema by design.** Additional fields (status, description, timestamps) are deferred until a real need surfaces. They can be added as migrations without breaking this phase.
- **No API route layer for Phase 1.** Mutations use Next.js Server Actions directly from the form components — the Route Handler pattern (`app/api/`) is reserved for when an external consumer exists.
- **Prisma cuid() for IDs.** Consistent with Prisma conventions; avoids auto-increment integers leaking record counts in URLs.
- **Severity as a Prisma enum, not a free-text field.** Enforces valid values at the DB and TypeScript layers simultaneously.

---

## Context

AgentClinic's mission is a care platform for AI agents. Phase 1 establishes the two foundational entities: the agents who are patients, and the ailments they present with. This is the minimum slice needed to make the clinic feel real to a demo audience and to give course students a working example of spec → schema → UI.
