import type { Section } from '../types'

export const quadraticSection: Section = {
  id: 'quadratic',
  title: 'Quadratic and least-squares models and simple epigraph reformulation',
  scene: 'quadratic',
  focus: 'epigraph',
  slide: `## Quadratic models and epigraphs

A **convex quadratic** f(w) = ½ wᵀAw − bᵀw + c with A ≻ 0 has a unique minimiser, where Aw = b. Least squares is the standard example.

### Least squares as a convex quadratic
- f(w) = ‖Xw − y‖², with Hessian 2XᵀX
- Eigenvalues 1.20 and 66.8: positive definite
- Unique minimiser w* = (0.25, 2.9), f = 0.05
- Level sets are ellipses, long where flat

### The epigraph trick
- min max |rᵢ| has corners: not differentiable
- Add a variable t: min t subject to −t ≤ rᵢ ≤ t
- Now it is a linear program: w = (0.125, 2.95), max |r| 0.125

### Chapter outcome
You can use first- and second-order conditions, recognise inconclusive cases, separate existence from classification, and formulate a convex problem whose global claims you can justify.`,
  narration:
    "What do the best behaved problems look like? Convex quadratics: a positive definite matrix, a linear term, and a constant. They have exactly one minimiser, found by solving a linear system. Least squares is the main example. Its Hessian is two X transpose X, which here has eigenvalues one point two and sixty six point eight, both positive, so the workshop fit from chapter seven has a unique minimiser, intercept zero point two five and slope two point nine. On the left, its level sets are nested ellipses, long and thin because the curvature differs so much between directions. Chapter ten will show why that matters for solvers. Not every useful objective is smooth. Suppose you want the line whose worst residual is smallest. A maximum has corners. The epigraph trick removes them: add a variable t, minimise t, and require every residual to lie between minus t and t. That is a linear program. Its answer, the purple point, differs from least squares: a smaller worst residual, a larger total. That completes the chapter. Next, optimality conditions define what numerical solvers seek, and what their diagnostics mean.",
}
