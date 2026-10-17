import type { Section } from '../types'

export const existenceTheoremsSection: Section = {
  id: 'existence-theorems',
  title: 'Intermediate and extreme value theorems',
  scene: 'existence',
  focus: 'theorems',
  slide: `## Existence theorems

Two theorems turn continuity into guarantees. They promise that a value **exists**, not where it is.

### Intermediate value theorem
- If f is continuous on [a, b], it takes every value between f(a) and f(b)
- g(x) = x³ − 3x + 1 has g(0) = 1 and g(1) = −1, so it is 0 somewhere in between: at x ≈ 0.347

### Extreme value theorem
- If f is continuous on a **closed, bounded** [a, b], it attains a maximum and a minimum
- On [0, 2]: minimum −1 at x = 1, maximum 3 at x = 2

### When a best value is not attained
- f(x) = x on the open interval (0, 1) gets ever closer to 0 but never reaches it
- Its **infimum** is 0, but it has **no minimum**

### Watch out
Optimisation later needs exactly these hypotheses. Without them, "the best" may not exist.`,
  narration:
    "What does continuity let us conclude? Two theorems answer, and both are about existence. The intermediate value theorem says that a continuous function on an interval takes every value between its endpoint values. On the left, the cubic g starts at one and has dropped to minus one at x equals one, so it must cross zero in between. The theorem does not say where. Computing it, the crossing is near zero point three five, and a second one is near one point five three. The extreme value theorem says that a continuous function on a closed, bounded interval reaches a largest and a smallest value. Here the minimum is minus one at x equals one, and the maximum is three at the right end. Each hypothesis matters. On the open interval from zero to one, the function x gets ever closer to zero but never reaches it. Its infimum is zero, yet it has no minimum. When we optimise later, these conditions decide whether a best answer even exists. Next, what a limit claim means precisely.",
}
