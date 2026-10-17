import type { Section } from '../types'

export const meanValueSection: Section = {
  id: 'mean-value',
  title: "Rolle's and the mean value theorems",
  scene: 'mean-value',
  focus: 'parallel',
  slide: `## The mean value theorem

If f is continuous on [a, b] and differentiable inside, then at some c between a and b, **f′(c) = (f(b) − f(a))/(b − a)**.

### Picture it
- The average slope is the secant's slope
- Somewhere inside, the tangent is parallel to that secant
- For x³ − 3x on [0, 2]: the average slope is 1, matched at c = 2/√3 ≈ 1.155
- Solve f′(c) = 3c² − 3 = 1 for c
- The theorem gives no formula for c

### Rolle's theorem
- The special case f(a) = f(b): somewhere f′(c) = 0
- |x| on [−1, 1] has equal ends but no zero slope, because it fails differentiability at 0

### Why it matters
It is the bridge from derivatives to values: if f′ = 0 everywhere on an interval, f is constant; if f′ > 0, f increases.`,
  narration:
    "Derivatives describe a function point by point. This chapter uses them to analyse whole functions, and to tell candidate answers apart from justified optima. The mean value theorem is the bridge. If a function is continuous on a closed interval and differentiable inside it, then somewhere inside, the instantaneous slope equals the average slope over the interval. On the left, x cubed minus three x rises from zero to two between x equals zero and x equals two, an average slope of one. And at c equals two over root three, about one point one five, the tangent line is exactly parallel to that secant. Rolle's theorem is the special case where the endpoint values are equal, so somewhere the slope is zero. Every hypothesis matters. The absolute value function has equal values at minus one and one, but its corner at zero breaks differentiability, and its slope is never zero. The payoff is practical: a zero derivative on an interval means constant, and a positive one means increasing. Next, using derivative signs.",
}
