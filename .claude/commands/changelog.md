Maintain the project's CHANGELOG.md in the repository root.

## Step 1 — Detect changelog state

Check whether `CHANGELOG.md` exists at the repository root. Read it if it does.

---

## Step 2a — First run (no CHANGELOG.md)

1. Run: `git log --pretty=format:"%ad|%H|%s" --date=short`
2. Group entries by date (most recent date first).
3. For each date group, write a `## YYYY-MM-DD` heading followed by one bullet per commit.
4. Write `CHANGELOG.md` with the structure below.
5. Report how many dates and entries were written.

---

## Step 2b — Update run (CHANGELOG.md already exists)

1. Find the most recent date heading in the file (`## YYYY-MM-DD`). Call it `LAST_DATE`.
2. Run: `git log --pretty=format:"%ad|%H|%s" --date=short --after="<day before LAST_DATE>"`
   - "Day before LAST_DATE" means subtract one calendar day, e.g. if LAST_DATE is `2026-05-25` use `--after="2026-05-24"`.
   - This captures new commits on LAST_DATE itself (missed by a prior run) as well as any later dates.
3. Filter out commits whose message already appears verbatim in the existing CHANGELOG.md.
4. If no new commits remain after filtering, print "Changelog is already up to date." and stop.
5. Group remaining commits by date, most recent first.
6. For each new date that is **newer than** LAST_DATE: insert a fresh `## YYYY-MM-DD` section.
7. For commits on LAST_DATE itself: append bullets to the existing `## LAST_DATE` section.
8. Report which dates were added or extended.

---

## Output format

```markdown
# Changelog

## YYYY-MM-DD

- Bullet describing what changed
- Another bullet

## YYYY-MM-DD

- ...
```

---

## Formatting rules for commit messages

- Strip conventional-commit prefixes: remove leading `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `style:`, `test:`, `build:`, `ci:` and the space after the colon.
- Capitalise the first word of the resulting message.
- Strip trailing periods.
- Skip commits whose subject starts with `Merge`, `WIP`, or is a bare version tag like `v1.2.3`.
- Do not add hashes or metadata to the bullets — plain prose only.
