import type { Section } from '../types'

export const formulationSection: Section = {
  id: 'formulation',
  title: 'Convex formulation with affine equalities and convex inequalities',
  scene: 'formulation',
  focus: 'standard',
  slide: `## Convex formulations

A problem is **convex** when it minimises a convex function subject to convex inequalities gᵢ(x) ≤ 0 and **affine** equalities Ax = b.

### The cheapest way to make 24 chairs
- Minimise cost 20L + 30M (£20, £30 per hour)
- As asked, 2√(LM) = 24: a curve, **not** convex
- Relaxed: 2√(LM) ≥ 24, which is convex
- Optimum (14.70, 9.80), cost **£587.88**

### Relaxing without changing the meaning
- Cost rises with L and M, so no optimum overshoots
- So the relaxed optimum satisfies the equality anyway
- Justified by an argument, not assumed

### Watch out
A nonlinear equality is almost never convex. Replace it with an inequality only when you can show the optimum lands on the boundary; otherwise you have silently solved a different problem.`,
  narration:
    "How do you write a problem so that a solver can guarantee a global answer? Make it convex: a convex objective, inequality constraints written as convex functions less than or equal to zero, and equality constraints that are affine, meaning linear plus a constant. Here is a workshop problem. Labour costs twenty pounds an hour and machine time thirty. What is the cheapest way to make twenty four chairs? Stated literally, output must equal twenty four, which is a curve in the input plane, and a curve is not a convex set. But if we ask for at least twenty four chairs, the feasible set is everything on or above that curve, shown on the left, and that set is convex. The cost lines are straight. Slide them down until one just touches the feasible set: at about fourteen point seven labour hours and nine point eight machine hours, costing five hundred and eighty eight pounds. Was relaxing the equality legitimate? Yes, because cost rises with both inputs, so no cheapest plan would make more than it needs. That argument has to be made, not assumed. Next, quadratic models and a reformulation trick.",
}
