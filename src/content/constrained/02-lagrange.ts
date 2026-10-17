import type { Section } from '../types'

export const lagrangeSection: Section = {
  id: 'lagrange',
  title: 'Equality constraints and Lagrange multipliers',
  scene: 'lagrange',
  focus: 'multiplier',
  slide: `## Lagrange multipliers

To minimise f subject to h(x) = 0, look for points where **∇f = λ∇h**: the objective's gradient is parallel to the constraint's.

### Why parallel
- Moving along h = 0 means moving perpendicular to ∇h
- At a minimum, f cannot change to first order along it
- So ∇f has no component along the curve: ∇f ∥ ∇h
- A cost line just touches the curve there

### Exactly 24 chairs
- h(L, M) = 2√(LM) − 24, ∇h = (√(M/L), √(L/M))
- 20 = λ√(M/L) and 30 = λ√(L/M), so M/L = 2/3
- With LM = 144: L = 14.70, M = 9.80, cost £587.88
- λ = 24.49 in both equations

### What λ means
λ is the rate of change of the optimal cost with the constraint level: one more chair costs about £24.49. It is a price, not just an auxiliary unknown, and section 8 checks such prices against re-solving.`,
  narration:
    "How do you minimise a function along a curve? At the best point, moving a little along the curve should not change the objective to first order. Moving along the curve means moving perpendicular to the constraint's gradient. So the objective's gradient can have no component along the curve: it must be parallel to the constraint's gradient. That is the Lagrange condition: the gradient of f equals lambda times the gradient of h. Take the chapter nine problem exactly: make precisely twenty four chairs. The constraint's gradient is root M over L, root L over M. Setting twenty equal to lambda times the first and thirty equal to lambda times the second, the ratio gives M over L equals two thirds. With L times M equal to a hundred and forty four, that is fourteen point seven labour hours and nine point eight machine hours, costing five hundred and eighty eight pounds. On the left, the cost line touches the output curve there, and the two gradients point the same way. Both equations give lambda equal to twenty four point four nine. It means something: one more chair would raise the minimum cost by about that many pounds. Next, inequalities and their sign rules.",
}
