import type { Section } from '../types'

export const rootFindingSection: Section = {
  id: 'root-finding',
  title: 'Bisection and Newton root finding versus minimisation',
  scene: 'root-finding',
  focus: 'traces',
  slide: `## Root finding versus minimisation

Minimising c(q) often means solving **c′(q) = 0**. Two classic methods solve equations numerically.

### Bisection
- Halve a sign-change bracket: slow but certain

### Newton's method
- Follow the tangent of c′ to zero: q ← q − c′(q)/c″(q)
- From q = 5: 6.72, 8.18, 8.85, 8.943, **8.944272** in five steps
- From q = 20: jumps to −20, outside the domain, then cycles for ever

### Root is not minimum
c′ = 0 also finds maxima and flat points: check c″, the bounds and the endpoints, as in §3.5.

### Chapter outcome
You can analyse a one-variable function, and justify an optimum or explain why none is attained.`,
  narration:
    "Optimisation often comes down to solving an equation: setting the derivative to zero. When that equation has no tidy solution, numerical methods take over. Bisection keeps an interval where the derivative changes sign, and halves it every step. It always converges, but slowly, gaining roughly one binary digit per step. Newton's method is faster. It follows the tangent of the derivative down to zero, using the second derivative as the slope. Starting from five chairs an hour, it reaches root eighty to six decimal places in five steps. But Newton's method needs a sensible start. From twenty, its very first step jumps to minus twenty, a meaningless production rate, and then it bounces between plus and minus twenty forever. And there is a deeper caution. Solving for a zero derivative finds every stationary point: minima, maxima and flat points alike. Its answer is a candidate that still needs the checks of this chapter. That completes the chapter. Next, integration answers the complementary question: how change accumulates.",
}
