import type { Section } from '../types'

export const tangentPlaneSection: Section = {
  id: 'tangent-plane',
  title: 'Total differentiability, tangent planes and first-order error',
  scene: 'tangent-plane',
  focus: 'error',
  narration:
    "What does it take for a function of two inputs to be differentiable? Not just partial derivatives. It needs a single linear approximation, the tangent plane, that works in every direction at once, with an error that shrinks faster than the step. At the standard shift, the tangent plane says output changes by zero point seven five times the change in labour hours, plus one point three three times the change in machine hours. On the left, slice the surface along a swap: add h labour hours and remove h machine hours. The plane predicts a straight line, twenty four minus seven twelfths of h. The true output bends below it. The table measures the gap. Halve the step and the error falls by about four, so error over h squared stays near zero point zero nine. That is what differentiability guarantees. Partial derivatives alone do not: the previous example had both partials at the origin and was not even continuous there. A useful sufficient condition is that the partials exist and are continuous nearby. Next, rates of change in directions other than the axes.",
}
