import type { Section } from '../types'

export const leastSquaresSection: Section = {
  id: 'least-squares',
  title: 'Linear, quadratic and least-squares gradient derivations',
  scene: 'least-squares',
  focus: 'derive',
  narration:
    "Most gradients in practice come from three rules. The gradient of a linear function a transpose w is just a. The gradient of a quadratic form w transpose A w is A plus A transpose, times w, or two A w when A is symmetric. And the chain rule handles the rest. The most important case is least squares: the sum of squared residuals between a model's predictions X w and data y. Expanding the square and applying the first two rules gives the gradient: two X transpose times the residual. Check the shapes. With four observations and two parameters, X is four by two and the residual is four by one, so X transpose times the residual is two by one, the same shape as w, as a gradient must be. On the left are the workshop's chairs by hour. The guess intercept two, slope two, shown in pink, has a squared error of five point one, and its gradient is minus four, minus nineteen, which says to increase the slope. At intercept zero point two five and slope two point nine the gradient is zero, and the error is zero point zero five. Next, checking a gradient numerically.",
}
