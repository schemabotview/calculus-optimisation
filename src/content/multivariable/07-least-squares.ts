import type { Section } from '../types'

export const leastSquaresSection: Section = {
  id: 'least-squares',
  title: 'Linear, quadratic and least-squares gradient derivations',
  scene: 'least-squares',
  focus: 'derive',
  slide: `## Gradients of standard forms

Three rules cover most models: **∇(aᵀw) = a**, **∇(wᵀAw) = (A + Aᵀ)w**, which is 2Aw when A is symmetric, and the chain rule.

### Least squares
- f(w) = ‖Xw − y‖² = rᵀr, with residual r = Xw − y
- Expand: wᵀXᵀXw − 2yᵀXw + yᵀy
- So ∇f = 2XᵀXw − 2Xᵀy = **2Xᵀ(Xw − y)**
- Shapes: X is 4 × 2 and r is 4 × 1, so Xᵀr is 2 × 1, like w

### On the workshop data
- Chairs by hour t: 3.2, 5.9, 9.1, 11.8 at t = 1, 2, 3, 4
- Guess w = (2, 2): f = 5.10, ∇f = (−4, −19)
- At w* = (0.25, 2.9) the gradient is 0 and f = 0.05

### Watch out
Setting ∇f = 0 gives XᵀXw = Xᵀy, the normal equations. They have one solution only when the columns of X are independent.`,
  narration:
    "Most gradients in practice come from three rules. The gradient of a linear function a transpose w is just a. The gradient of a quadratic form w transpose A w is A plus A transpose, times w, or two A w when A is symmetric. And the chain rule handles the rest. The most important case is least squares: the sum of squared residuals between a model's predictions X w and data y. Expanding the square and applying the first two rules gives the gradient: two X transpose times the residual. Check the shapes. With four observations and two parameters, X is four by two and the residual is four by one, so X transpose times the residual is two by one, the same shape as w, as a gradient must be. On the left are the workshop's chairs by hour. The guess intercept two, slope two, shown in pink, has a squared error of five point one, and its gradient is minus four, minus nineteen, which says to increase the slope. At intercept zero point two five and slope two point nine the gradient is zero, and the error is zero point zero five. Next, checking a gradient numerically.",
}
