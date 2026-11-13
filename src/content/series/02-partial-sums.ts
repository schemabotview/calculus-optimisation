import type { Section } from '../types'

export const partialSumsSection: Section = {
  id: 'partial-sums',
  title: 'Series, partial sums and necessary convergence conditions',
  scene: 'partial-sums',
  focus: 'harmonic',
  narration:
    "What does it mean to add infinitely many numbers? Only one thing: form the partial sums, the total of the first n terms, and ask whether that sequence converges. If it does, its limit is the sum of the series. There is one quick necessary condition. If a series converges, its terms must tend to zero. So a series whose terms do not shrink, like minus one to the k, cannot converge. But the condition is not sufficient, and the harmonic series is the standard warning. Its terms, one over k, go to zero. Yet on the left, its partial sums keep climbing: about seven and a half after a thousand terms, about fourteen after a million. They grow like the natural log of n, slowly but without bound, so the series diverges. Compare the sum of one over k squared. Its terms also go to zero, and its partial sums level off at pi squared over six, about one point six four five. The difference is how fast the terms shrink. And the harmonic sum's slow growth is exactly what fools a computer. Next, tests that decide.",
}
