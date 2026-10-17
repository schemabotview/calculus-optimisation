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

## Status

All 12 chapters (88 sections) are authored and pass `build`, `tsc`, `check` and `density`. Every
frame was inspected on its chapter's contact sheet at 1920 × 1080. No audio yet: it follows review, in
one Colab pass per chapter.

- **Density:** 85 of 88 meet every target. Three near-misses remain, all in the reviewed chapters 1
  and 2: slides at 0.78–0.79 (`limits-limits`, `limits-epsilon-delta`, `derivatives-differentiability`),
  held there by the 1000px model ceiling. No eyebrow overlaps.
- **Ranges:** slides measure 0.78–0.89 of the pane; scene area 0.55–0.80; binding axis 0.89 throughout.
- **Narration:** 166–208 words per section, 16,520 in total, about 110 minutes at 150 wpm. That is
  longer than the 130–170 planned (and longer than linear-algebra); trim in review if the pacing drags.
- **Workshop thread, as built:** `workshop.ts` gained `output(L, M) = 2√(LM)` (chapters 7, 9, 11) and
  the allocation prices (labour £20/h, machine £30/h, M ≤ 8). Chapter 10 uses a shared test bowl,
  `src/scenes/numerical-optimisation/bowl.ts`; chapter 11 a shared feasible region, `region.ts`.
- **Code cards:** chapters 7 (`gradcheck.py`), 10 (`trace.py`) and 12 (`sampled.py`), each printing
  output copied from a real run.

## Open decisions

- **Brand**: `--brand #7c3aed` (violet), `--accent-2 #fbbf24` (amber); linear-algebra uses blue.
- **Code cards**: used in chapters 7, 10 and 12 as planned (see Status); tables elsewhere. Add more
  if you want code on screen earlier.
