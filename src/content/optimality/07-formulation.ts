import type { Section } from '../types'

export const formulationSection: Section = {
  id: 'formulation',
  title: 'Convex formulation with affine equalities and convex inequalities',
  scene: 'formulation',
  focus: 'standard',
  narration:
    "How do you write a problem so that a solver can guarantee a global answer? Make it convex: a convex objective, inequality constraints written as convex functions less than or equal to zero, and equality constraints that are affine, meaning linear plus a constant. Here is a workshop problem. Labour costs twenty pounds an hour and machine time thirty. What is the cheapest way to make twenty four chairs? Stated literally, output must equal twenty four, which is a curve in the input plane, and a curve is not a convex set. But if we ask for at least twenty four chairs, the feasible set is everything on or above that curve, shown on the left, and that set is convex. The cost lines are straight. Slide them down until one just touches the feasible set: at about fourteen point seven labour hours and nine point eight machine hours, costing five hundred and eighty eight pounds. Was relaxing the equality legitimate? Yes, because cost rises with both inputs, so no cheapest plan would make more than it needs. That argument has to be made, not assumed. Next, quadratic models and a reformulation trick.",
}
