import type { Section } from '../types'

export const testsSection: Section = {
  id: 'tests',
  title: 'Geometric, p-series, comparison and ratio tests',
  scene: 'tests',
  focus: 'which',
  narration:
    "Watching partial sums cannot settle convergence, so we need tests that can. Two families of series serve as yardsticks. A geometric series, a sum of powers of r, converges exactly when the size of r is less than one. A p series, one over k to the p, converges exactly when p is bigger than one. Most other tests compare with these. The comparison test says that a non negative series below a convergent one converges too. One over k squared plus one is below one over k squared, so its series converges; its sum turns out to be about one point zero seven seven. The ratio test looks at how each term compares with the one before. If that ratio tends to a limit below one, the series behaves like a geometric series and converges. For k over two to the k, the ratio tends to a half, and the sum is two. On the left, all three partial sums level off at their limits. One caution: a ratio limit of exactly one decides nothing, since the harmonic series and one over k squared both give it. Next, series whose signs alternate.",
}
