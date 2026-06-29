# Verity Demo

A tiny shop + Playwright suite to try **Verity** two ways: in the **cloud** (get the feel) and in **CI** (the real thing).

## What's here

```
public/index.html        a 3-step flow: add to cart → checkout → confirmation
tests/checkout.spec.ts   the full flow
tests/smoke.spec.ts      a home-page smoke test
.github/workflows/       Quick check (PR) + Full regression (merge) via qashift/verity-action
```

## A — Try it in the cloud (30 seconds, no setup)

1. Go to the Verity homepage and paste a flow, e.g.
   _"add the product to the cart and place the order"_.
2. You get a runnable Playwright spec back. Sign in to save it to a project.

Cloud is capped on purpose — it's the demo. The product lives in your CI.

## B — Run it in your CI (the real thing)

1. Push this folder to a GitHub repo.
2. Install the **Verity** GitHub App on that repo.
3. In Verity, create a project linked to the repo and copy its **ingest token**.
4. Add it as a repo secret named `VERITY_INGEST_TOKEN`.
5. Open a PR → the **Quick check** runs the diff-aware subset and comments on the PR.
   Merge to `main` → **Full regression** runs the whole suite.

Locally:

```bash
npm install
npx playwright install --with-deps chromium

# Quick check (diff-aware) — needs a git diff vs origin/main
VERITY_INGEST_TOKEN=xxx npm run verity:fast

# Full regression — the entire suite
VERITY_INGEST_TOKEN=xxx npm run verity:full
```

## C — Let an FDE own it

On the Managed (FDE) plan, a forward-deployed engineer converts these specs into a maintained Page Object Model, keeps them green as the app changes, and triages every failure. AI writes, the engineer verifies.

<!-- verity ci validation 2026-06-29T11:17:52Z -->
