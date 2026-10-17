import type { Section } from '../types'

export const implicitParametric: Section = {
  id: 'implicit-parametric',
  title: 'Implicit and parametric differentiation',
  scene: 'implicit',
  focus: 'two-ways',
  slide: `## Implicit and parametric curves

Some curves are not graphs of a single function y(x). They still have tangent slopes.

### Implicit differentiation
- Differentiate x² + y² = 25 term by term, treating y as a function of x
- 2x + 2y y′ = 0, so **y′ = −x/y**
- At (3, 4): y′ = −3/4, perpendicular to the radius, as geometry demands
- The same move works on any equation F(x, y) = c

### Parametric differentiation
- Trace the curve as (5 cos t, 5 sin t)
- dy/dx = (dy/dt)/(dx/dt) = 5 cos t/(−5 sin t), which is again −3/4 at (3, 4)

### Watch out
Both formulas divide by something that can be zero. At (±5, 0) the tangent is vertical and the slope dy/dx does not exist.`,
  narration:
    "What is the slope of a circle? A circle is not the graph of a single function, because most x values have two points above and below. But each point still has a tangent. Implicit differentiation finds it without solving for y. Differentiate both sides of x squared plus y squared equals twenty five, remembering that y depends on x, so the chain rule turns y squared into two y times y prime. Rearranging gives y prime equals minus x over y. At the point three, four, the slope is minus three quarters. On the left, that tangent is exactly perpendicular to the radius, as geometry says it must be. A second route traces the circle with a parameter: x is five cos t and y is five sin t. The slope is the rate of change of y divided by the rate of change of x, and at the same point it again gives minus three quarters. Both formulas divide by something that can vanish. Where y is zero, the tangent is vertical and has no slope. Next, derivatives of derivatives.",
}
