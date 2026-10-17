import type { Section } from '../types'

export const trigSubSection: Section = {
  id: 'trig-sub',
  title: 'Trigonometric substitutions and method selection',
  scene: 'trig-sub',
  focus: 'choose',
  slide: `## Trigonometric substitution

A root like **√(a² − x²)** simplifies when x = a sin θ, because 1 − sin² θ = cos² θ.

### A quarter circle
- ∫₀¹ √(1 − x²) dx with x = sin θ, dx = cos θ dθ
- Limits: x = 0 → θ = 0; x = 1 → θ = π/2
- ∫₀^(π/2) cos² θ dθ = π/4 ≈ **0.7854**
- Geometry agrees: a quarter of a disc of radius 1

### Choosing a method
- Read the integrand's shape before computing
- f(g(x)) g′(x) → substitution; products → parts
- Rational → partial fractions; roots → trig
- No closed form → numerical quadrature

### Watch out
Not every integrand has an elementary antiderivative: e^(−x²) does not. Then the right method is a numerical one, with its error reported.`,
  narration:
    "Some integrals contain a square root of a squared constant minus x squared. The trick is to let x be a sine. Then one minus x squared becomes one minus sine squared, which is cosine squared, and the root disappears. Take the integral of the square root of one minus x squared from zero to one. With x equal to sine theta, d x is cosine theta d theta, the limits become zero and pi over two, and the integral becomes the integral of cosine squared, which is pi over four. The picture explains why. The curve is the upper unit circle, so the area is a quarter of a disc of radius one: pi over four, about zero point seven eight five. With four techniques in hand, the practical skill is choosing. The table reads the shape of the integrand: a function of g times g prime calls for substitution, a product of unlike types for parts, a rational function for partial fractions, a root for trig. And some integrands, like e to the minus x squared, have no elementary antiderivative at all. Next, integrals over unbounded intervals.",
}
