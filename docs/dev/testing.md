# Testing and Release Checks

Use these commands from the repository root.

Install dependencies from the committed lockfile:

```text
npm ci
```

## Local Checks

```text
npm run typecheck
npm test
npm run validate
npm run build
npm run check
```

`npm run check` is the full release gate. It runs type checking, unit tests, e2e
tests, extension validation, and release ZIP generation.

## WSL Notes

In WSL, Playwright and Node tooling can inherit Windows temp paths. The e2e
test runner normalizes those temp paths to `/tmp` before invoking Playwright.

Playwright e2e tests bind a local `127.0.0.1` server. Sandboxed automation may
need explicit permission for that local listener.

The e2e runner writes Playwright output under `/tmp/tabpack-playwright-results`
by default. Set `PLAYWRIGHT_OUTPUT_DIR` to keep failure artifacts elsewhere.

## Generated Artifacts

These are expected local outputs and should not be committed:

- `node_modules/`
- `dist/*.zip`
- `test-results/`
- `playwright-report/`
- `blob-report/`

The committed `package-lock.json` is source metadata and should be updated when
dependency ranges change. `scripts/assets/iconMain.png` is the source artwork
for generated extension icons. `extension/types/` contains source-only type
declarations. Both are excluded from release ZIPs.

`npm run build:edge` writes `dist/tabpack-edge-<version>.zip`.
`npm run build:chrome` writes `dist/tabpack-chrome-<version>.zip`.
`npm run capture:store-assets` writes reproducible screenshots and promotional
images under `docs/store/`.

## Before Packaging

- Run `npm run check`.
- Run `npm run capture:store-assets` when UI or store text changes.
- Confirm `git status --short` contains only intentional source, docs, test, and
  package metadata changes.
- Do not use files under `dist/` as source documentation; they are release
  outputs.
