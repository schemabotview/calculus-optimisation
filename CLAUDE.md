# CLAUDE.md — calculus-optimisation

> The GraphL concept app for **Calculus and Optimisation**. Scaffolded from `content-repo-template`;
> the invariants below are inherited from it and hold here unchanged. The tooling (density report,
> shared slide model, check fixes, plot builders) was proven on `linear-algebra` and copied over.
> The syllabus is `CALCULUS-AND-OPTIMISATION-COURSE-PLAN.md`; the authoring order and density method
> are `AUTHORING-PLAN.md`.

## What this repo is

A GraphL concept app: one concept, N courses, each course a list of sections. A **section** is
`(scene, slide, narration)` and is one segment of the course video. One section = one slide.

The render engine is `@graphlearning/flow`; the app shell is `@graphlearning/shell`. Both are
**published packages pinned by version** (`flow@^1.4.0`, `shell@^0.8.0`). This repo's own surface is
`src/content/`, `src/scenes/`, `src/main.tsx` and `src/theme.css` — nothing else.

## Route contract and course arc

One concept (Calculus and Optimisation), **12 courses = the 12 chapters**, **88 sections = the 88
plan sections**. Routes are `#/<courseId>-<sectionId>`; audio is `public/audio/<courseId>/<sectionId>.wav`.

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

## Scene vocabulary for this subject

- **Graphs of functions** → `kind: 'plot'`. Axes usually carry different units (time and power,
  quantity and cost), so leave `equal` **off**. Turn it on only where geometry is the content: a
  tangent's angle, a circle, a polar region, a contour plot in two lengths.
- **Secants, tangents, guides** → a two-point `line` (solid) or a `segment` (dashed by default).
  Vectors (gradients, steps, normals) are `segment`s with `arrow: true, dashed: false` (flow ≥ 1.4.0).
- **Holes, jumps, endpoints** → `marker`s on the curve, with the curve split into separate `line`
  series around the gap. Say "open" or "closed" in the label: there is no hollow marker.
- **Riemann sums and quadrature** → each rectangle or trapezoid is a closed `line` polygon. Use the
  same colour for every panel of one rule.
- **Iterations** (bisection, Newton, gradient descent, stochastic steps) → a `scatter` of iterates
  joined by `segment`s, plus a table of the trace. The table is the evidence, the plot is the picture.
- **Contour plots** (chapters 7, 9–12) → level sets as sampled closed `line`s, computed in the scene
  file from a parametrisation (ellipses for quadratics) or a numeric root-find along rays; never
  hand-placed points.
- **Colour is identity on a plot.** The default series ramp has four hues and then repeats, so a
  fifth series silently matches the first. Set `color` explicitly beyond four series; a function and
  its derivative keep distinct, consistent hues across a chapter.
- **Stack plot over table (`TB`)** and widen the plot with real content until the stack matches the
  pane. Side-by-side (`LR`) shrinks everything, table text included.
- **Magnitudes that differ by orders** (errors, tolerances) → log₁₀ values on the axis, or a
  zero-based stem plot. Not `kind: 'evolution'`: it enforces a minimum column height.
- **Taxonomies and method choices** → a `group` container with `cols: 2`.
- **The workshop model** is one shared module, `src/scenes/workshop.ts`: production rate, power,
  energy and cost functions reused across chapters so the recurring example stays consistent. Plot and
  table builders shared by every chapter are in `src/scenes/plot-kit.ts`; `check` sees node ids passed
  to `augmented()`, `resourceTable()` and `matrixTable()`.
- **Every number on screen is computed.** Limits, integrals, iterates, errors and certificates are
  produced by running the computation (numpy/scipy, or the scene file's own TypeScript) and rounded
  for display; the scene file's comment says what was run.

## Invariants — do not break

- **Never write `x` or `y`.** Scenes are declarative: nodes, edges, nesting. `computeLayout` is not
  exported, so there is no way around this, and that is the point — reproducible frames.
- **Do not reimplement the shell.** `SectionView`, `CourseIndex`, `SlidePanel` and the hooks are
  withheld on purpose. The route contract (`#/<courseId>-<sectionId>`, `?capture=1`,
  `window.__scene.plan()`) is what every recorder drives, and it holds only if every repo composes
  the pieces identically.
- **`SiteHeader` goes on the catalog page only** — never on a section. A section is a video frame.
- **Three stylesheets, in cascade order**, imported in `main.tsx`. The order is load-bearing:
  1. `@graphlearning/flow/styles.css` — react-flow plus the IBM Plex faces the engine is
     *calibrated* to. `codeMetrics` sizes code nodes from a measured 9.02px glyph advance, so a
     different monospace face mis-sizes every code card. Carries the `.tok-*` colours.
  2. `@graphlearning/shell/styles.css` — the shell paints the canvas (`--bg: #1a1d23`; SceneView
     draws its dots at `#2a2f38` assuming a dark surface).
  3. `./theme.css` — this repo's three brand tokens. **Last, or the brand loses to the defaults.**
- **`file:../ui-flow` / `file:../ui-shell` must never be committed.** Local engine work only; CI has
  no sibling checkout.
- **Narration is never hand-produced.** `.tts` → `.wav` via Colab + Chatterbox only.

## Layout rules the frames actually care about

`npm run check` (`scripts/check-content.mjs`) models four silent failures — each builds green and
breaks only on screen. Its comments carry the measured constants; the short version:

- **Leaf cards are a fixed 210×96** with a ~134px text column. Only containers grow to fit. Keep the
  `label` to 2 wrapped lines; 2 label lines + 2 sub lines fits. Watch unbreakable tokens — `_`, `.`
  and `/` are **not** break opportunities in CSS, so `snake_case` and paths overflow sideways in a
  way the height model cannot see.
- **Slides do not scale to fit.** Type size is fixed by the frame (`zoom = paneWidth / 806`,
  width-proportional only), so an over-long slide **clips at the bottom** with no error.
  `check` fails over 1000 modelled design px; the band below gives the floor too. Bullets cost far
  more than prose of the same length.
- **A `focus:` that names no node in its scene is a silent no-op** — nothing lights up.
- **`icon:` names are NOT guarded.** The engine's lucide registry is `Record<string, LucideIcon>`
  and does not enumerate its keys, so a wrong name type-checks, passes `check`, builds, and renders
  a card with no glyph. There are ~75 valid keys; copy one off an existing scene rather than
  guessing a lucide name (`volume`, `move`, `maximize` and `git` are all absent, for instance).
- **A section with no wav narrates silence** and records a silent segment. Audio resolves purely by
  convention: `public/audio/<course>/<section-id>.wav`.

What `check` does *not* model: an edge label landing on top of a card, or whether the frame is too
empty. Look at the route.

### Density targets — the frame must use the space it has

The guarded failure is a slide that overflows. The unguarded one is its opposite: a frame that
builds green, reads correctly, and leaves half its pane empty. Against the ~1080 design px pane:

| | target | why |
| --- | --- | --- |
| slide height | **80–95 %** of the pane (≈ 865–1025px; `SLIDE_H_MAX` caps the top at 1000) | below 80 % the right half looks empty; above ~95 % it risks clipping |
| scene, binding axis | ≥ 0.85 of the pane | the board should reach the edge it is limited by |
| scene, area | ≥ 0.55 of the pane (w × h) | a wide board that fills the width but a third of the height wastes the pane |
| eyebrow | no node under the top-left eyebrow label | boards that bind on height run up to y≈30 |

Levers: **add real content, not padding**; **restack** a board toward the pane's ~1:1 aspect; lower
scene `padding` to 0.04 for boards that float, **raise** it (0.12–0.17) for tall boards that touch
the eyebrow.

These are read off the rendered route by eye — `check` models no density at all. The two ratios come
from one repo's ~80 frames of diagram-and-code-card boards, so a deliberately sparse board can sit
under them. Targets, not thresholds.

## Guards before handing over

```sh
npm run build && npx tsc --noEmit && npm run check
CHROME_PATH=/opt/pw-browsers/chromium npm run density   # report + density/<slug>.png per route
```

**The slide band is narrow.** `check`'s model over-reserves bullets, so a slide must model ≤ 1000
while rendering ≥ 0.80 of the pane. Author to a model of about 930–995. To gain rendered height
cheaply, lengthen an existing paragraph by a line; to lose model height, turn bullets into prose.
**Bullets of about 52–62 characters are the trap**: they render on one line but the model counts two.
Keep bullets under ~50 characters, or let them genuinely run to two lines.

`npm run density` (`scripts/density.mjs`) measures the floor that `check` does not: slide fill,
scene fill and eyebrow overlap, on the rendered route. It judges slide fill on the rendered height,
because the shared slide model (`scripts/slide-model.mjs`) over-reserves by up to ~75px, which is
safe for the ceiling and misleading for the floor.

All three are a **floor, not proof** — they pass on frames that are visually wrong. The rendered
route is the real bar, and the owner reviews it.

## Working agreement

- **Author the whole unit, then hand over the route.** Scenes, slides and narration together.
- **No ASCII sketches of scenes.** A sketch cannot show what the layout engine will do, which is the
  only thing worth looking at.
- **No silent scaffolding**, no work outside the ask. Say plainly what was built, what was verified,
  and what was left out.
