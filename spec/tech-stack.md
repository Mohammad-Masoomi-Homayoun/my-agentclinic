# Tech Stack

AgentClinic is a TypeScript-first web application. Every layer uses TypeScript; no exceptions, no JavaScript files.

## Frontend

| Concern | Choice |
|---|---|
| Framework | **Next.js** (App Router) |
| Styling | **Tailwind CSS** |
| Components | React Server Components by default; client components only where interactivity requires it |

Next.js gives us full-stack TypeScript in a single repo, file-based routing, and first-class support for server-rendered dashboards — exactly what the clinic's staff view needs.

## Backend

| Concern | Choice |
|---|---|
| API layer | Next.js Route Handlers (`app/api/`) |
| ORM | **Prisma** |
| Database | **PostgreSQL** |

Prisma provides a type-safe query layer that stays in sync with the schema; the generated client eliminates entire categories of runtime errors.

## Deployment

| Concern | Choice |
|---|---|
| Hosting | **Vercel** |
| Database | Vercel Postgres (dev) / any managed Postgres (prod) |

## Testing

| Concern | Choice |
|---|---|
| Test runner | **Vitest** |
| Scope | Validation tests that assert spec requirements are met |

Vitest runs phase validation scripts that confirm database state, API responses, and UI structure match the spec before a phase is considered complete. Run with `pnpm test`.

## Development tooling

- **pnpm** — package manager
- **ESLint + Prettier** — enforced via pre-commit hook
- **TypeScript strict mode** — enabled

## What we are not using

- Class components
- ORMs other than Prisma
- CSS-in-JS (Tailwind handles everything)
- Any UI framework that would override Tailwind (no MUI, no Chakra)
