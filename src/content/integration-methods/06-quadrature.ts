import type { Section } from '../types'

export const quadratureSection: Section = {
  id: 'quadrature',
  title: 'Trapezoidal and Simpson quadrature and conditional error bounds',
  scene: 'quadrature',
  focus: 'errors',
  slide: `## Quadrature

**Quadrature** replaces f on each panel by a simple shape and adds the areas: straight lines for the trapezoid rule, parabolas for Simpson's.

### Trapezoid and Simpson
- Trapezoid: h/2 · (f₀ + 2f₁ + … + 2fₙ₋₁ + fₙ)
- Simpson: h/3 · (f₀ + 4f₁ + 2f₂ + … + fₙ), n even
- On ∫₀^π sin x = 2 with n = 4: 1.896 and 2.0046
- Errors fall ×¼ and ×1/16 when n doubles

### Bounds with conditions
- Trapezoid error ≤ (b − a)h² max|f″| / 12
- Simpson error ≤ (b − a)h⁴ max|f⁗| / 180
- At n = 4 the bounds are 0.161 and 0.0066

### Watch out
Each bound **assumes** f″ or f⁗ exists and is bounded on [a, b]. With a kink, a jump or a spike, the guarantee says nothing.`,
  narration:
    "When there is no formula, approximate. Quadrature cuts the interval into panels, replaces the function on each by something easy, and adds. The trapezoid rule joins neighbouring points with straight lines. On the left, four trapezoids under sine x from zero to pi. The straight tops cut under the curve, so the sum is one point eight nine six instead of two. Simpson's rule fits parabolas through triples of points and, with the same four panels, gets two point zero zero four six. The table shows what doubling the number of panels does. The trapezoid error falls by a factor of four each time; Simpson's by sixteen. That is what the error bounds predict: trapezoid error proportional to h squared times the size of the second derivative, Simpson's to h to the fourth times the fourth derivative. At four panels the bounds are zero point one six and zero point zero zero six six, and the actual errors sit below them. But read the bounds as conditional. They assume those derivatives exist and are bounded. Next, what happens when they are not.",
}
