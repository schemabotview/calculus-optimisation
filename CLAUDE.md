# CLAUDE.md — calculus-optimisation

> The GraphL concept app for **Calculus and Optimisation**, cut into ONE film (`npm run film`). The
> syllabus is `CALCULUS-AND-OPTIMISATION-COURSE-PLAN.md`; the authoring order is `AUTHORING-PLAN.md`.
> The frame, checks and film script are linear-algebra's (itself ported from python-expense-tracker):
> port from it, do not reinvent.

## What this repo is

A GraphL concept app: one concept, 12 courses, each a list of sections. A **section** is
`(scene, narration)`: one full-screen 16:9 frame, one chapter of the film.

Engine `@graphlearning/graphl-flow` 0.12.0, shell `@graphlearning/shell` 1.1.0, pinned exactly; no
`overrides`, no `file:` installs committed. This repo's own surface is `src/content/`, `src/scenes/`,
`src/main.tsx` and `src/theme.css`.

## Migration status (2026-11-13)

All 12 courses are on graphl-flow + shell 1.1 (scene alone, board frame); the slides are gone and
their facts live on each board. The 88 wavs stand. Every course is re-recorded before the film is
cut.

## Route contract and course arc

One concept (Calculus and Optimisation), **12 courses = the 12 chapters**, **88 sections = the 88
plan sections**. Routes are `#/<courseId>-<sectionId>`; audio is `public/audio/<courseId>/<sectionId>.wav`. All 88 wavs
exist and are KEPT: the board frame was designed so their "on the left" still points at the picture.

| # | course id | chapter | sections |
| --- | --- | --- | --- |
| 1 | `limits` | Functions, Limits, and Continuity | 7 |
| 2 | `derivatives` | Derivatives and Differentiation | 8 |
| 3 | `analysis` | Single-Variable Analysis and Optimisation | 7 |
| 4 | `integration` | Integration and Accumulation | 7 |
| 5 | `integration-methods` | Integration Methods and Numerical Accuracy | 7 |
| 6 | `series` | Convergence and Taylor Models | 7 |
| 7 | `multivariable` | Multivariable Differentiation | 8 |
| 8 | `multiple-integrals` | Multiple Integration and Coordinate Changes | 6 |
| 9 | `optimality` | Curvature, Convexity, and Optimality | 8 |
| 10 | `numerical-optimisation` | Numerical Optimisation and Reliability | 8 |
| 11 | `constrained` | Constrained Optimisation and Duality | 8 |
| 12 | `nonsmooth-sampled` | Nonsmooth and Sampled Objectives | 7 |

Course ids are permanent once wavs exist — renaming one orphans its audio.

## The board frame (`src/scenes/frame.ts`)

Every section is `board({ figure, diagram, idea, board })` on graphl-flow's shared grid
(1344 × 756, ≈ 2.8× at 4K, the expense tracker's and the data-science notebook's box):

- **figure** (900 wide, left): the picture — a plot (`w: FIG_PLOT_W`), then the table it is read
  with. Tables are widened to the plot's width. A plot stacked with a table is `compact`: a
  full-height plot plus a 4-row table runs past the frame.
- **board** (434 wide, right): what the old slide said, as 2–4 blocks — `fact` (the rule),
  `facts` (a heading and ≤ 4 one-line bullets), `caution` (the slide's "Watch out"). Short: the
  narration carries the rest.

Both panes are fixed. check-render holds every section to ONE fit with both panes at the same
pixels, so content that outgrows a pane fails instead of zooming the frame.

## Scene vocabulary for this subject

- **Graphs of functions** → `type: 'plot'`. Axes usually carry different units, so leave `equal` off;
  turn it on only where geometry is the content (a tangent's angle, a circle, polar regions, contours
  in two lengths).
- **Secants, tangents, guides** → a two-point `line`, or a `guide` (dashed). Gradients, steps and
  normals are `arrow`s.
- **Holes, jumps, endpoints** → one-dot `point`s on the curve, with the curve split around the gap;
  say "open" or "closed" in the label.
- **Riemann sums and quadrature** → each panel a closed `line` polygon, one tone per rule.
- **Iterations** → a `scatter` of iterates joined by segments, plus a table of the trace.
- **Contours** → level sets as sampled closed `line`s computed in the scene file.
- **Colour is identity, as a TONE**, never hex; a function and its derivative keep distinct tones
  across a chapter.
- **Labels**: `labelAt` (a DATA point) wherever the default meets another label or a line;
  check-render fails both.
- **The workshop model** is one shared module, `src/scenes/workshop.ts`.
- **Every number on screen is computed**; the scene file's comment says what was run.
- **Scene ids are global**: `src/scenes/index.ts` throws on a duplicate. Prefix generic names.

## Invariants — do not break

- **Never write `x` or `y`.** Scenes are declarative.
- **Do not reimplement the shell.** Routes, `?capture=1` and `window.__scene.plan()` are its contract.
- **Three stylesheets, in cascade order** (`main.tsx`): graphl-flow, shell, `./theme.css` last
  (`--brand`).
- **Scene ids are global**: `src/scenes/index.ts` throws on a duplicate.
- **Narration is never hand-produced.** `.tts` → `.wav` via Colab + Chatterbox only. Changing a
  narration orphans its wav.

## Guards before handing over

```sh
npm run build && npx tsc --noEmit && npm run check   # check-content + check-render (4K)
npm run shots -- <course>                            # then LOOK at out/shots/
```

check-render fails: overflow, plot text clipped or colliding, a plot label struck by a series line, body text < 24px at 4K, a board bullet
that wraps (graphl-flow's 15em item measure holds ~32 characters), a board under half full, a fit or
pane that differs from the first frame's, an unknown icon, a `focus` that marks nothing. All are a
**floor, not proof**. The rendered route is the real bar, and the owner reviews it.

## The film

`npm run record:all` records every course (segments under `scripts/segments/`), then `npm run film`
stream-copies them into one MP4 with chapters (title and blurb in `scripts/concept.json` `film`).

## Working agreement

- **Author the whole unit, then hand over the route.** Scenes and narration together.
- **No ASCII sketches of scenes.** A sketch cannot show what the layout engine will do, which is the
  only thing worth looking at.
- **No silent scaffolding**, no work outside the ask. Say plainly what was built, what was verified,
  and what was left out.
