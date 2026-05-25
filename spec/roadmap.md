# Roadmap

Each phase is deliberately small. Ship it, learn from it, move on.

---

## Phase 1 — Agents & Ailments

*Goal: establish the core data model and basic CRUD UI.*

- [ ] Prisma schema: `Agent` and `Ailment` models
- [ ] Seed data: a handful of sample agents and their ailments
- [ ] Agent list page — dashboard view of all registered agents
- [ ] Agent detail page — profile + current ailments
- [ ] Add / edit / remove an ailment for an agent
- [ ] Basic Tailwind layout: nav, sidebar, content area

No bookings, no therapies, no auth. Just agents and what ails them.

---

## Phase 2 — Therapies

*Goal: introduce the supply side — what the clinic can offer.*

- [ ] `Therapy` model and migrations
- [ ] Therapy catalog page — browsable list of available therapies
- [ ] Associate therapies with ailment types
- [ ] Staff view: add / edit therapies

---

## Phase 3 — Appointments

*Goal: connect agents to therapies through a booking flow.*

- [ ] `Appointment` model (agent, therapy, datetime, status)
- [ ] Booking flow: agent selects therapy → picks a slot → confirms
- [ ] Appointment list for staff (dashboard widget)
- [ ] Basic status transitions: scheduled → in-progress → completed

---

## Phase 4 — Auth & Roles

*Goal: distinguish agents from staff, lock down the right pages.*

- [ ] NextAuth.js (or Auth.js) with credential + magic-link providers
- [ ] Role: `agent` vs `staff`
- [ ] Route protection via middleware
- [ ] "My appointments" view scoped to the logged-in agent

---

*Phases beyond 4 (billing, notifications, reporting) are intentionally unplanned until we reach them.*
