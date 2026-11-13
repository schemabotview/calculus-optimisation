import type { Section } from '../types'

export const sensitivitySection: Section = {
  id: 'sensitivity',
  title: 'Sensitivity, certificate checks and constrained-method boundaries',
  scene: 'sensitivity',
  focus: 'predicted',
  narration:
    "Once a constrained problem is solved, what else do the multipliers tell you? They are sensitivities. Each multiplier is the rate at which the optimal value changes as its constraint is relaxed: a shadow price. At eighteen, eight, the machine multiplier is fifteen, so one more machine hour should save about fifteen pounds. The output multiplier is thirty, so one more chair should cost about thirty pounds. The table checks these. Relax the machine cap by a tenth of an hour and the cost falls by one pound forty four, close to the predicted one fifty. Require twenty five chairs and the cost rises by thirty pounds sixty three, close to thirty. But these are first order predictions. On the left, the optimal cost curves as the cap grows. A whole extra hour saves ten pounds, not fifteen. And beyond nine point eight hours the cap stops binding at all: the multiplier drops to zero and extra machine time is worth nothing. Large changes need the problem solved again. That completes the chapter. Next, nonsmooth or sampled objectives need further adaptations of the update reasoning.",
}
