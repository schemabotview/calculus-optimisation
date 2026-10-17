import type { Section } from '../types'

export const tangentPlaneSection: Section = {
  id: 'tangent-plane',
  title: 'Total differentiability, tangent planes and first-order error',
  scene: 'tangent-plane',
  focus: 'error',
  slide: `## Total differentiability

f is **differentiable** at a if one linear map approximates it in every direction at once: f(a + h) = f(a) + ∇f(a)·h + error, with error/|h| → 0.

### The tangent plane at the shift
- Q ≈ 24 + 0.75 ΔL + 1.333 ΔM near (16, 9)
- Swap h labour for machine hours: (16 + h, 9 − h)
- Plane: 24 − 7h/12; the true Q bends below it
- Error 0.383 at h = 2, 0.0057 at h = 0.25
- The error falls like h², faster than h

### Partials are not enough
- Partials existing does not make f differentiable
- xy/(x² + y²) has partials at 0, but no limit
- Sufficient: partials continuous near a

### First-order error
Within the region where the error is small, ΔQ ≈ 0.75 ΔL + 1.333 ΔM is a usable sensitivity model; far away, it is not.`,
  narration:
    "What does it take for a function of two inputs to be differentiable? Not just partial derivatives. It needs a single linear approximation, the tangent plane, that works in every direction at once, with an error that shrinks faster than the step. At the standard shift, the tangent plane says output changes by zero point seven five times the change in labour hours, plus one point three three times the change in machine hours. On the left, slice the surface along a swap: add h labour hours and remove h machine hours. The plane predicts a straight line, twenty four minus seven twelfths of h. The true output bends below it. The table measures the gap. Halve the step and the error falls by about four, so error over h squared stays near zero point zero nine. That is what differentiability guarantees. Partial derivatives alone do not: the previous example had both partials at the origin and was not even continuous there. A useful sufficient condition is that the partials exist and are continuous nearby. Next, rates of change in directions other than the axes.",
}
