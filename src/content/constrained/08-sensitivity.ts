import type { Section } from '../types'

export const sensitivitySection: Section = {
  id: 'sensitivity',
  title: 'Sensitivity, certificate checks and constrained-method boundaries',
  scene: 'sensitivity',
  focus: 'predicted',
  slide: `## Sensitivity and certificates

At a KKT point, **λᵢ is the rate at which the optimal value changes** as constraint i is relaxed: a shadow price.

### Shadow prices at (18, 8)
- λ₂ = 15: one more machine hour saves about £15
- λ₁ = 30: one more chair costs about £30
- Both are first-order: exact as the change shrinks
- Cap 8 → 8.1 saves £1.44, close to £1.50
- Units: £ per machine hour, £ per chair

### Where the prediction fails
- Cap 8 → 9 saves £10, not £15: C(m) curves
- Past m = 9.80 the cap stops binding and λ₂ drops to 0
- Large changes need re-solving, not extrapolating

### Chapter outcome
You can explain constrained optimality and dual bounds under stated assumptions, check a small KKT certificate with g ≤ 0 and λ ≥ 0, and compare how penalties, barriers and projection manage feasibility.`,
  narration:
    "Once a constrained problem is solved, what else do the multipliers tell you? They are sensitivities. Each multiplier is the rate at which the optimal value changes as its constraint is relaxed: a shadow price. At eighteen, eight, the machine multiplier is fifteen, so one more machine hour should save about fifteen pounds. The output multiplier is thirty, so one more chair should cost about thirty pounds. The table checks these. Relax the machine cap by a tenth of an hour and the cost falls by one pound forty four, close to the predicted one fifty. Require twenty five chairs and the cost rises by thirty pounds sixty three, close to thirty. But these are first order predictions. On the left, the optimal cost curves as the cap grows. A whole extra hour saves ten pounds, not fifteen. And beyond nine point eight hours the cap stops binding at all: the multiplier drops to zero and extra machine time is worth nothing. Large changes need the problem solved again. That completes the chapter. Next, nonsmooth or sampled objectives need further adaptations of the update reasoning.",
}
