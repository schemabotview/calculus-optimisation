import type { Section } from '../types'

export const hessianSection: Section = {
  id: 'hessian',
  title: 'Hessians and second-order Taylor models',
  scene: 'hessian',
  focus: 'models',
  narration:
    "A tangent plane captures slope. What captures curvature? The Hessian, the matrix of second partial derivatives. It supplies the quadratic term of the Taylor model: half of h transpose, times the Hessian, times h. For the workshop output at the standard shift, the Hessian has minus zero point zero two three and minus zero point zero seven four on the diagonal, and zero point zero four two off it, the same in both places because the mixed partials are continuous. Return to chapter seven's slice, swapping labour for machine hours. The orange line is the linear model. Adding the quadratic term, minus zero point zero nine times h squared, gives the pink curve, which follows the true output far more closely. The table measures it. At a step of one, the linear error is zero point zero nine three; the quadratic error is zero point zero zero two four. And that minus zero point zero nine is exactly the error over h squared we measured in chapter seven: the Hessian explains it. One eigenvalue of this Hessian is zero. Scaling both inputs together scales output exactly, so in that direction there is no curvature at all. Next, where to look for minima.",
}
