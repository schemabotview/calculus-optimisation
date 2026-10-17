import type { Section } from '../types'

export const testsSection: Section = {
  id: 'tests',
  title: 'Geometric, p-series, comparison and ratio tests',
  scene: 'tests',
  focus: 'which',
  slide: `## Convergence tests

A **test** decides convergence without computing the sum. Each needs its hypotheses checked first.

### Geometric and p-series
- Σ rᵏ converges exactly when |r| < 1, to r/(1 − r) from k = 1
- Σ 1/kᵖ converges exactly when p > 1
- Both are yardsticks for other series

### Comparison and ratio
- Comparison: 0 ≤ aₖ ≤ bₖ and Σ bₖ converges → Σ aₖ does
- 1/(k² + 1) ≤ 1/k², so Σ 1/(k² + 1) converges (to 1.0767)
- Ratio: |aₖ₊₁/aₖ| → ρ < 1 → converges; ρ > 1 → diverges
- For k/2ᵏ the ratio tends to ½; the sum is 2

### Watch out
A ratio limit of exactly 1 says nothing: both Σ 1/k and Σ 1/k² give 1. A test only answers whether a sum exists; the value still needs computing.`,
  narration:
    "Watching partial sums cannot settle convergence, so we need tests that can. Two families of series serve as yardsticks. A geometric series, a sum of powers of r, converges exactly when the size of r is less than one. A p series, one over k to the p, converges exactly when p is bigger than one. Most other tests compare with these. The comparison test says that a non negative series below a convergent one converges too. One over k squared plus one is below one over k squared, so its series converges; its sum turns out to be about one point zero seven seven. The ratio test looks at how each term compares with the one before. If that ratio tends to a limit below one, the series behaves like a geometric series and converges. For k over two to the k, the ratio tends to a half, and the sum is two. On the left, all three partial sums level off at their limits. One caution: a ratio limit of exactly one decides nothing, since the harmonic series and one over k squared both give it. Next, series whose signs alternate.",
}
