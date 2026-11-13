# calculus-optimisation

The GraphL concept app for **Calculus and Optimisation — from change and accumulation to justified
decisions**: 12 courses (one per chapter), 88 sections, each section one `(scene, narration)`
chapter of a single film. Scenes render with `@graphlearning/graphl-flow`; the app shell is `@graphlearning/shell`.

Scaffolded from [`content-repo-template`](https://github.com/schemabotview/content-repo-template),
with the plot builders developed on
[`linear-algebra`](https://github.com/schemabotview/linear-algebra).

- `CALCULUS-AND-OPTIMISATION-COURSE-PLAN.md` — the syllabus.
- `AUTHORING-PLAN.md` — how the syllabus becomes sections, and in what order.
- `CLAUDE.md` — route contract, course ids, the board frame, scene vocabulary and invariants.

## Running it

```sh
npm ci
npm run dev          # http://localhost:5173
```

Routes are `#/<course>-<section>`, e.g. `#/limits-continuity`. `#/` is the catalog.

## Verifying a change

```sh
npm run build && npx tsc --noEmit && npm run check
```

Then `npm run shots -- <course>` and look at `out/shots/`: the checks are a floor, the rendered
frame is the real bar.

## The film

```sh
npm run record:all   # every course → scripts/segments/
npm run film         # one MP4 with chapters → scripts/out/
```
