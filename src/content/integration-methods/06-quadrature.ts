import type { Section } from '../types'

export const quadratureSection: Section = {
  id: 'quadrature',
  title: 'Trapezoidal and Simpson quadrature and conditional error bounds',
  scene: 'quadrature',
  focus: 'errors',
  narration:
    "When there is no formula, approximate. Quadrature cuts the interval into panels, replaces the function on each by something easy, and adds. The trapezoid rule joins neighbouring points with straight lines. On the left, four trapezoids under sine x from zero to pi. The straight tops cut under the curve, so the sum is one point eight nine six instead of two. Simpson's rule fits parabolas through triples of points and, with the same four panels, gets two point zero zero four six. The table shows what doubling the number of panels does. The trapezoid error falls by a factor of four each time; Simpson's by sixteen. That is what the error bounds predict: trapezoid error proportional to h squared times the size of the second derivative, Simpson's to h to the fourth times the fourth derivative. At four panels the bounds are zero point one six and zero point zero zero six six, and the actual errors sit below them. But read the bounds as conditional. They assume those derivatives exist and are bounded. Next, what happens when they are not.",
}
