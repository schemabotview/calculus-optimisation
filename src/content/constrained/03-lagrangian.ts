import type { Section } from '../types'

export const lagrangianSection: Section = {
  id: 'lagrangian',
  title: 'Inequality sign conventions and the Lagrangian',
  scene: 'lagrangian',
  focus: 'conventions',
  slide: `## The Lagrangian

For constraints gᵢ(x) ≤ 0, the **Lagrangian** is L(x, λ) = f(x) + Σ λᵢ gᵢ(x), with every multiplier **λᵢ ≥ 0**.

### A one-dimensional example
- Minimise (x − 3)² subject to x ≤ 2, so g = x − 2 ≤ 0
- The unconstrained minimum x = 3 is infeasible
- At x = 2: 2(x − 3) + λ = 0 gives λ = 2 ≥ 0
- L(x, 2) = (x − 3)² + 2(x − 2) has its minimum at x = 2

### Why λ ≥ 0
- λg adds a cost for pushing against the constraint
- A negative λ would reward violating it
- So a negative multiplier means a constraint is not binding, or its sign is wrong

### Watch out
Convert every constraint to g ≤ 0 first. "x at most 2" is x − 2 ≤ 0; writing 2 − x ≤ 0 states x ≥ 2, a different problem with a different answer.`,
  narration:
    "How do inequalities enter the picture? Through the Lagrangian, with a careful sign convention. Write every constraint as g of x less than or equal to zero, and add each one to the objective multiplied by a non negative number lambda. Take the simplest case: minimise x minus three squared, but x may be at most two. The constraint is x minus two less than or equal to zero. The unconstrained minimum, three, is not allowed, so the answer is the boundary point two. At x equal to two, the derivative of the Lagrangian is two times x minus three plus lambda, which vanishes when lambda is two. That is positive, as it must be. On the left, the pink curve is the Lagrangian with lambda equal to two: the objective tilted by the multiplier, and its minimum has moved exactly to the boundary. Why must lambda be non negative? The term lambda times g charges for pressing against the constraint. A negative lambda would reward violating it. So in practice, a negative multiplier means the constraint is not really binding, or it was written with the wrong sign. Next, the full set of conditions.",
}
