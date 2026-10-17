import type { Section } from '../types'

export const partialSumsSection: Section = {
  id: 'partial-sums',
  title: 'Series, partial sums and necessary convergence conditions',
  scene: 'partial-sums',
  focus: 'harmonic',
  slide: `## Series and partial sums

A **series** Σ aₖ has a sum only as a limit: the sequence of **partial sums** Sₙ = a₁ + … + aₙ must converge.

### The necessary condition
- If Σ aₖ converges, then aₖ → 0
- So terms that do not shrink to 0 mean divergence
- Σ (−1)ᵏ and Σ k/(k + 1) both fail it

### Necessary, not sufficient
- The harmonic series Σ 1/k has terms tending to 0
- Yet Sₙ grows like ln n: 7.49 at a thousand, 14.4 at a million
- It passes every finite bound, so it diverges
- Σ 1/k² has terms tending to 0 and settles at π²/6

### Watch out
Slow growth looks like convergence on a computer: the harmonic sum gains under 2.4 for each tenfold increase in n. Decide divergence by reasoning, not by watching partial sums.`,
  narration:
    "What does it mean to add infinitely many numbers? Only one thing: form the partial sums, the total of the first n terms, and ask whether that sequence converges. If it does, its limit is the sum of the series. There is one quick necessary condition. If a series converges, its terms must tend to zero. So a series whose terms do not shrink, like minus one to the k, cannot converge. But the condition is not sufficient, and the harmonic series is the standard warning. Its terms, one over k, go to zero. Yet on the left, its partial sums keep climbing: about seven and a half after a thousand terms, about fourteen after a million. They grow like the natural log of n, slowly but without bound, so the series diverges. Compare the sum of one over k squared. Its terms also go to zero, and its partial sums level off at pi squared over six, about one point six four five. The difference is how fast the terms shrink. And the harmonic sum's slow growth is exactly what fools a computer. Next, tests that decide.",
}
