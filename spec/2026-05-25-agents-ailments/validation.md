# Validation — Agents & Ailments

## Merge gate

This phase is ready to merge when **`pnpm build` passes with zero TypeScript errors and zero ESLint errors.**

```bash
pnpm build
# expected: exit code 0, no type errors, no lint warnings
```

That single command is the hard gate. Nothing merges while it is red.

---

## Supporting checks

Run these before opening the PR:

| Check | Command | Pass condition |
|---|---|---|
| TypeScript | `pnpm build` | Exit 0, no errors |
| Lint | `pnpm lint` | Exit 0, no warnings |
| Prisma schema | `pnpm prisma validate` | Schema is valid |
| Seed | `pnpm prisma db seed` | Exits 0, no runtime errors |

---

## What is explicitly not required

- Browser / manual walkthrough — deferred to a later phase when auth and multi-role views make a full walkthrough meaningful.
- Automated UI tests (Playwright, Cypress) — out of scope for Phase 1.
- Screenshot review or visual regression — not required until the design is more settled.

---

## Definition of done checklist

- [ ] `pnpm build` exits 0
- [ ] `pnpm lint` exits 0  
- [ ] `pnpm prisma validate` exits 0
- [ ] `pnpm prisma db seed` exits 0
- [ ] No `// @ts-ignore` or `any` casts introduced
- [ ] All plan.md tasks checked off
