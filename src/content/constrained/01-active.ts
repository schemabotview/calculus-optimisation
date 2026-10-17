import type { Section } from '../types'

export const activeSection: Section = {
  id: 'active',
  title: 'Feasibility, active boundaries and tangent directions',
  scene: 'active',
  focus: 'status',
  slide: `## Constraints and active sets

Write every constraint as **g(x) ≤ 0**. At a point x, a constraint is **active** if g(x) = 0, **inactive** if g(x) < 0, and violated if g(x) > 0.

### The allocation problem, extended
- Minimise 20L + 30M for at least 24 chairs
- New: machine time is limited, M ≤ 8
- The old optimum (14.7, 9.8) now breaks M ≤ 8
- New optimum: (18, 8), £600, both constraints active

### Feasible directions
- From an interior point, every direction is feasible at first
- At (18, 8), moves must keep M ≤ 8 and stay above Q = 24
- So the feasible directions form a cone, not a plane

### Why the gradient need not vanish
At a boundary optimum, ∇f points into the infeasible side: every feasible direction is uphill even though some infeasible ones go down. Only inactive constraints can be ignored nearby.`,
  narration:
    "This chapter is about optima that sit on a boundary: how to recognise them, how to certify them, and how algorithms keep to the rules. Write every constraint in one form: some function g is less than or equal to zero. At a given point, a constraint is active if it holds with equality, inactive if it has slack, and violated if it fails. Return to the cheapest way to make twenty four chairs, and add a real limit: only eight machine hours are available. The old optimum used nine point eight machine hours, so it is now infeasible. The new optimum, on the left, is the corner at eighteen labour hours and eight machine hours, costing six hundred pounds, where both constraints are active. Why is the gradient not zero there? Because from a boundary point not every direction is allowed. At the corner, a move must stay on or below the machine line and on or above the output curve. Every allowed direction raises the cost, even though some forbidden directions would lower it. Inactive constraints, by contrast, can be ignored locally. Next, the simplest case: equality constraints.",
}
