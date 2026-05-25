# Plan — Agents & Ailments

Each group is a self-contained checkpoint. Complete them in order; each group builds on the previous.

---

## 1. Schema

Define the Prisma data model and get it into the database.

- [ ] Add `Agent` and `Ailment` models to `prisma/schema.prisma`
- [ ] Add `Severity` enum (`mild`, `moderate`, `severe`) to the schema
- [ ] Configure the cascade delete on `Ailment` → `Agent`
- [ ] Run `prisma migrate dev --name init-agents-ailments`
- [ ] Verify `prisma validate` passes

---

## 2. Seed

Populate the database with enough data to develop and demo against.

- [ ] Write `prisma/seed.ts` with at least 5 agents, each with 1–3 ailments
- [ ] Use realistic agent names (model names + personas) and ailment names that fit the clinic fiction
- [ ] Add `prisma db seed` script to `package.json`
- [ ] Confirm seed runs without errors and rows appear in the DB

---

## 3. Pages

Build the read-only UI — list and detail views.

- [ ] Create basic Tailwind shell: top nav, sidebar, main content area (shared layout in `app/layout.tsx`)
- [ ] `app/agents/page.tsx` — agent list: table of all agents showing name and model
- [ ] `app/agents/[id]/page.tsx` — agent detail: name, model, and list of ailments with severity badges
- [ ] Wire pages to Prisma queries (server components, no client fetch)

---

## 4. CRUD actions

Add write capability: create, update, delete ailments.

- [ ] Server Action: add an ailment to an agent (name + severity)
- [ ] Server Action: edit an existing ailment (name and/or severity)
- [ ] Server Action: remove an ailment from an agent
- [ ] Form UI on the agent detail page for each action
- [ ] Revalidate the detail page after each mutation (`revalidatePath`)
