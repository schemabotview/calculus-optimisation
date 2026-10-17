import type { Section } from '../types'

export const limitsSection: Section = {
  id: 'limits',
  title: 'One-sided and two-sided limits and limit laws',
  scene: 'limits-laws',
  focus: 'approach',
  slide: `## Limits

The **limit** of f(x) as x → a is the value f(x) approaches as x gets close to a, **without using f(a) itself**.

### A function with a hole
- f(x) = (x² − 1)/(x − 1) is undefined at x = 1
- Everywhere else it equals x + 1, so its values approach 2
- So lim f(x) = 2 as x → 1, although f(1) does not exist

### One-sided limits
- Left limit: approach through x < a. Right limit: through x > a
- The two-sided limit exists only when both exist and agree
- Limit laws: limits of sums, products and quotients combine, if no denominator → 0

### Watch out
A table of nearby values suggests a limit; it does not prove one.`,
  narration:
    "What value does a function approach, even where it is not defined? That is the question a limit answers. Look at x squared minus one, over x minus one. At x equals one it is zero over zero, undefined. But everywhere else the factor x minus one cancels, and the function is simply x plus one. Its graph is a straight line with a single hole. The table approaches from both sides. From the left, the values are one point nine, one point nine nine, one point nine nine nine. From the right, two point one, two point zero one, two point zero zero one. Both sides head to two, so the limit is two, even though the function has no value at one. A limit ignores the point itself and looks only at what happens nearby. One-sided limits approach from one direction only, and the two-sided limit exists only when they agree. Limit laws let us combine limits of simpler pieces, as long as we never divide by a limit of zero. Next, limits far out.",
}
