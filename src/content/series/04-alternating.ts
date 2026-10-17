import type { Section } from '../types'

export const alternatingSection: Section = {
  id: 'alternating',
  title: 'Absolute and conditional convergence and alternating error bounds',
  scene: 'alternating',
  focus: 'bound',
  slide: `## Alternating series

A series converges **absolutely** if Σ |aₖ| converges, and **conditionally** if Σ aₖ converges but Σ |aₖ| does not.

### The alternating series test
- Signs alternate, sizes decrease, and terms tend to 0
- Then the series converges
- 1 − ½ + ⅓ − ¼ + … converges, to ln 2 ≈ 0.6931
- But Σ 1/k diverges: the convergence is conditional

### A built-in error bound
- Partial sums alternate above and below the limit
- So |Sₙ − S| ≤ |aₙ₊₁|, the first omitted term
- S₁₀ = 0.6456, error 0.0475, bound 0.0909
- For 4 decimal places you need n ≈ 10,000

### Watch out
A conditionally convergent series can be rearranged to sum to any number. Only absolute convergence makes the order of the terms irrelevant.`,
  narration:
    "What changes when the terms of a series alternate in sign? Cancellation can make a series converge that would diverge otherwise. A series converges absolutely if the sizes of its terms have a finite sum, and conditionally if it converges only thanks to the signs. The alternating series test gives conditions: the signs alternate, the sizes decrease, and the terms tend to zero. The alternating harmonic series, one minus a half plus a third and so on, meets them, and its sum is the natural log of two. Since the plain harmonic series diverges, this convergence is conditional. On the left, the partial sums zigzag above and below the limit, each step shorter than the last. That zigzag gives a free error bound: the error is at most the first term you left out. The table checks it. After ten terms the error is zero point zero four eight, under the bound of zero point zero nine one. But the bound also shows the cost: four decimal places would take about ten thousand terms. Next, approximating functions by polynomials.",
}
