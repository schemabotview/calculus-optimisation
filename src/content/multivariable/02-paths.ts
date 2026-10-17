import type { Section } from '../types'

export const pathsSection: Section = {
  id: 'paths',
  title: 'Path-dependent limits and partial derivatives',
  scene: 'paths',
  focus: 'limits',
  slide: `## Paths and partial derivatives

A **partial derivative** varies one input and freezes the rest: ∂f/∂x at (a, b) is the derivative of x ↦ f(x, b) at a.

### Partials for the workshop
- At (16, 9), ∂Q/∂L = √(M/L) = 0.75 chairs per hour
- And ∂Q/∂M = √(L/M) = 1.333 chairs per hour
- Each is a slope along one grid line

### A limit that depends on the path
- f(x, y) = xy/(x² + y²), with f(0, 0) = 0
- Along y = mx, f = m/(1 + m²)
- So f = 0.5 on y = x, but −0.5 on y = −x
- No limit at 0, so f is not continuous there
- Yet both partials at 0 exist, and are 0

### Watch out
Partials see only two directions. A limit or a derivative in two dimensions must hold along every path, including curved ones.`,
  narration:
    "How fast does output change if you add one input and hold the other fixed? That is a partial derivative: freeze every input but one, and differentiate in the one that moves. For the workshop at the standard shift, one more labour hour adds about three quarters of a chair, and one more machine hour adds about one and a third. Each is a slope along a single grid line of the input plane. Now the warning. Take x y over x squared plus y squared, defined as zero at the origin. Along any straight line y equals m x, the function is constant: zero along the axes, a half along the diagonal, minus a half along the other diagonal. So approaching the origin along different lines gives different values, and the function has no limit there. It is not even continuous. Yet along both axes it is identically zero, so both partial derivatives at the origin exist and equal zero. Partial derivatives look in exactly two directions, and they can be perfectly well behaved while the function misbehaves in every other direction. Next, partial derivatives of partial derivatives.",
}
