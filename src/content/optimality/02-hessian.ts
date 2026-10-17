import type { Section } from '../types'

export const hessianSection: Section = {
  id: 'hessian',
  title: 'Hessians and second-order Taylor models',
  scene: 'hessian',
  focus: 'models',
  slide: `## The Hessian

The **Hessian** ∇²f is the matrix of second partials. It gives the quadratic term of the Taylor model: **f(a + h) ≈ f(a) + ∇f(a)ᵀh + ½ hᵀ∇²f(a) h**.

### For the workshop output at (16, 9)
- Q_LL = −0.0234, Q_MM = −0.0741, Q_LM = Q_ML = 0.0417
- Symmetric, because the mixed partials are continuous
- Along the swap d = (1, −1): dᵀHd = −0.181

### The quadratic model
- Linear: 24 − 7h/12, error 0.093 at h = 1
- Quadratic: 24 − 7h/12 − 0.0904h², error 0.0024
- Halving h cuts the error 4× for linear, 8× for quadratic
- The −0.0904 matches chapter 7's error/h² of 0.09

### Watch out
The Hessian's eigenvalues here are −0.0975 and **0**: along the ray through (16, 9), scaling both inputs, Q is exactly linear. A zero eigenvalue is real structure, not a rounding error.`,
  narration:
    "A tangent plane captures slope. What captures curvature? The Hessian, the matrix of second partial derivatives. It supplies the quadratic term of the Taylor model: half of h transpose, times the Hessian, times h. For the workshop output at the standard shift, the Hessian has minus zero point zero two three and minus zero point zero seven four on the diagonal, and zero point zero four two off it, the same in both places because the mixed partials are continuous. Return to chapter seven's slice, swapping labour for machine hours. The orange line is the linear model. Adding the quadratic term, minus zero point zero nine times h squared, gives the pink curve, which follows the true output far more closely. The table measures it. At a step of one, the linear error is zero point zero nine three; the quadratic error is zero point zero zero two four. And that minus zero point zero nine is exactly the error over h squared we measured in chapter seven: the Hessian explains it. One eigenvalue of this Hessian is zero. Scaling both inputs together scales output exactly, so in that direction there is no curvature at all. Next, where to look for minima.",
}
