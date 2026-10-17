import type { Section } from '../types'

export const powerSeriesSection: Section = {
  id: 'power-series',
  title: 'Power series, convergence domains and endpoints',
  scene: 'power-series',
  focus: 'endpoints',
  slide: `## Power series

A **power series** Σ cₖ(x − a)ᵏ converges on an interval centred at a with a **radius** R: absolutely for |x − a| < R, and divergently beyond.

### The series for ln(1 + x)
- ln(1 + x) = x − x²/2 + x³/3 − x⁴/4 + …
- Ratio test: |x|, so the radius is R = 1
- Inside, at x = 0.5: S₁₀ is already 0.4054
- Outside, at x = 1.5: S₄₀ is about −1.6 × 10⁵

### Endpoints need their own test
- At x = 1: alternating harmonic, converges to ln 2
- At x = −1: −(harmonic), diverges
- So the domain is −1 < x ≤ 1, not the whole of x > −1

### Watch out
ln(1 + x) is defined for every x > −1, but its series is not. A formula valid near 0 does not stay valid wherever the function exists.`,
  narration:
    "If a Taylor polynomial is good, is the infinite series even better? Only where it converges. A power series converges on an interval centred at its base point, with a radius set by the coefficients. Inside the radius it converges absolutely; outside it diverges; and the two endpoints must be checked separately. Take the series for the natural log of one plus x: x minus x squared over two plus x cubed over three, and so on. The ratio test gives the size of x, so the radius is one. On the left, the partial sums follow the log curve closely inside that radius, and swing wildly apart just past x equals one. The table makes it concrete. At a half, ten terms already give four correct digits. At one and a half, forty terms give minus a hundred and sixty thousand. At the endpoints, x equal to one gives the alternating harmonic series, which converges to log two, and x equal to minus one gives the negative harmonic series, which diverges. The function exists for all x above minus one; its series does not. Next, a deeper gap.",
}
