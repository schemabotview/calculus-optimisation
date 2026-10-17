import type { Section } from '../types'

export const descentSection: Section = {
  id: 'descent',
  title: 'Descent directions, steps and stopping criteria',
  scene: 'descent',
  focus: 'test',
  slide: `## Iterative descent

Most solvers repeat one update: **xₖ₊₁ = xₖ + αₖ dₖ**, a direction dₖ and a step length αₖ, until a stopping test passes.

### Descent directions
- d is a **descent direction** at x if ∇f(x)ᵀd < 0
- Then f(x + αd) < f(x) for all small enough α > 0
- −∇f is the steepest: the most negative ∇fᵀd per unit length
- Any d at an obtuse angle to ∇f also descends

### The test bowl
- f = ½(x² + 10y²), minimiser (0, 0), started at (3, 1.5)
- ∇f(3, 1.5) = (3, 15): far steeper in y than in x
- So −∇f points mostly down in y, not at the centre

### Stopping criteria
Stop on a small **gradient** ‖∇f‖ ≤ tolerance, the evidence of a stationary point. Small steps, small changes in f, or an iteration limit are signs of slowing down, and say nothing on their own.`,
  narration:
    "This chapter is about how iterative methods use derivatives and curvature, and how to judge the answer they return. Almost every optimiser repeats one update: from the current point, choose a direction and a step length, and move. A direction is a descent direction if it makes an obtuse angle with the gradient, that is, if the gradient dotted with it is negative. Then a small enough step along it is guaranteed to reduce f. The chapter's test problem is a bowl, one half of x squared plus ten y squared, with its minimum at the origin, starting from three, one and a half. The gradient there is three, fifteen: the bowl is ten times steeper in y. On the left, the pink arrow is minus the gradient, the steepest descent direction. Notice it points mostly downward, not at the centre. The green arrow is Newton's direction, which does point at the centre. Moving left is descent, but only barely; moving up is uphill. When should the iteration stop? The honest test is a small gradient. Small steps alone only show the method is slowing down. Next, how big a step can be.",
}
