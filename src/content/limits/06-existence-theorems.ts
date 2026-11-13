import type { Section } from '../types'

export const existenceTheoremsSection: Section = {
  id: 'existence-theorems',
  title: 'Intermediate and extreme value theorems',
  scene: 'existence',
  focus: 'theorems',
  narration:
    "What does continuity let us conclude? Two theorems answer, and both are about existence. The intermediate value theorem says that a continuous function on an interval takes every value between its endpoint values. On the left, the cubic g starts at one and has dropped to minus one at x equals one, so it must cross zero in between. The theorem does not say where. Computing it, the crossing is near zero point three five, and a second one is near one point five three. The extreme value theorem says that a continuous function on a closed, bounded interval reaches a largest and a smallest value. Here the minimum is minus one at x equals one, and the maximum is three at the right end. Each hypothesis matters. On the open interval from zero to one, the function x gets ever closer to zero but never reaches it. Its infimum is zero, yet it has no minimum. When we optimise later, these conditions decide whether a best answer even exists. Next, what a limit claim means precisely.",
}
