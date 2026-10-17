# Authoring plan — Calculus and Optimisation

How `CALCULUS-AND-OPTIMISATION-COURSE-PLAN.md` becomes 88 recorded sections, and how each frame is
checked for density as well as overflow. The course ids and scene vocabulary are in `CLAUDE.md`.
The method is the one that produced `linear-algebra`'s 80 sections.

## Mapping

- **Concept** = Calculus and Optimisation. **Course** = chapter (12). **Section** = plan section (88).
- The plan's per-chapter **Worked illustrations** become scenes. The **Objective** goes into the first
  section's narration; the **Outcome** and **Bridge** into the last.
- Each section compresses the plan's teaching method into one frame: question and assumptions
  (narration opening) → definition (slide lead) → worked calculation or trace (scene) → failure or
  counterexample (a `### Watch out` block) → bridge (narration close).
- Section id = a short kebab form of the section title. Ids are permanent once wavs exist.

## The unit of work: one chapter

1. **Compute first.** Every value that will appear on screen is computed (numpy/scipy, or the scene
   file's own TypeScript), then rounded for display.
2. **Scenes**, using the vocabulary in `CLAUDE.md`.
3. **Slides**: H2, a lead, three `###` blocks. Author to a modelled height of about 930–995px.
4. **Narration**: 130–170 words per section (linear-algebra ran 160–190; aim tighter here).
5. **Guards**: `npm run build && npx tsc --noEmit && npm run check && npm run density`.
6. **Look at every frame** on the chapter contact sheet, fix collisions, re-run.
7. **Commit and push per chapter.** Audio after review, one Colab pass per chapter.

**Chapter 1 (`limits`, 7 sections) is the pilot**, reviewed before chapters 2–12.

## Density check

Unchanged from `linear-algebra`: `npm run density` renders every route and reports slide fill
(measured, target 0.80–0.95), scene binding axis (≥ 0.85), scene area (≥ 0.55) and eyebrow overlap,
with a screenshot per route in `density/`. Targets, not thresholds; only eyebrow overlap fails.

## The workshop thread

`src/scenes/workshop.ts` holds the recurring model so it reads the same in every chapter:

- production: about 3 chairs per hour over an 8-hour shift (count versus continuous approximation)
- machine warm-up temperature and power draw over the shift (chapters 1, 2, 4)
- energy as accumulated power (chapter 4), measured cost (chapters 3, 10), and
  material/capacity-limited allocation (chapters 9, 11)

## Open decisions

- **Brand**: `--brand #7c3aed` (violet), `--accent-2 #fbbf24` (amber); linear-algebra uses blue.
- **Code cards**: the plan allows illustrative code with output. Planned for chapters 7 (finite-
  difference gradient check), 10 (optimiser trace) and 12 (sampled gradients); tables elsewhere.
