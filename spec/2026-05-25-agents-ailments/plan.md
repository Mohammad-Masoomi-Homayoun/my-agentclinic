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

## 3. Home page & layout

Establish the shared site shell and a minimal entry point.

- [ ] Create Tailwind shell in `app/layout.tsx`: top nav with clinic name, sidebar, main content area
- [ ] `app/page.tsx` — home page: clinic name, one-line tagline, and a "View agents" link to `/agents`

---

## 4. Agent pages

Build the read-only UI — list and detail views.

- [ ] `app/agents/page.tsx` — agent list: table of all agents showing name and model
- [ ] `app/agents/[id]/page.tsx` — agent detail: name, model, and list of ailments with severity badges
- [ ] Wire pages to Prisma queries (server components, no client fetch)

---

## 5. CRUD actions

Add write capability: create, update, delete ailments.

- [ ] Server Action: add an ailment to an agent (name + severity)
- [ ] Server Action: edit an existing ailment (name and/or severity)
- [ ] Server Action: remove an ailment from an agent
- [ ] Form UI on the agent detail page for each action
- [ ] Revalidate the detail page after each mutation (`revalidatePath`)

---

## 6. Layout component extraction

Extract the shell layout into composable subcomponents backed by a dedicated CSS file.

- [ ] Create `app/components/layout/layout.css` with all layout-specific styles (header, footer, sidebar, main, body shell)
- [ ] Create `app/components/layout/SiteHeader.tsx` — top nav bar subcomponent
- [ ] Create `app/components/layout/SiteMain.tsx` — sidebar + content area subcomponent
- [ ] Create `app/components/layout/SiteFooter.tsx` — footer subcomponent
- [ ] Refactor `app/layout.tsx` to import `layout.css` and compose the three subcomponents
- [ ] Confirm `pnpm build` exits 0 with no type errors
