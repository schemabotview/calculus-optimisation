import type { Section } from '../types'

export const alternatingSection: Section = {
  id: 'alternating',
  title: 'Absolute and conditional convergence and alternating error bounds',
  scene: 'alternating',
  focus: 'bound',
  narration:
    "What changes when the terms of a series alternate in sign? Cancellation can make a series converge that would diverge otherwise. A series converges absolutely if the sizes of its terms have a finite sum, and conditionally if it converges only thanks to the signs. The alternating series test gives conditions: the signs alternate, the sizes decrease, and the terms tend to zero. The alternating harmonic series, one minus a half plus a third and so on, meets them, and its sum is the natural log of two. Since the plain harmonic series diverges, this convergence is conditional. On the left, the partial sums zigzag above and below the limit, each step shorter than the last. That zigzag gives a free error bound: the error is at most the first term you left out. The table checks it. After ten terms the error is zero point zero four eight, under the bound of zero point zero nine one. But the bound also shows the cost: four decimal places would take about ten thousand terms. Next, approximating functions by polynomials.",
}
