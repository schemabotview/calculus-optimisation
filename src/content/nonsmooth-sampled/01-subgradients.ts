import type { Section } from '../types'

export const subgradientsSection: Section = {
  id: 'subgradients',
  title: 'Convex subgradients and subdifferentials',
  scene: 'subgradients',
  focus: 'subdifferential',
  narration:
    "This chapter extends the toolkit to objectives with corners and objectives known only through samples, and separates what is guaranteed from what is merely practical. Start with corners. A convex function with a kink has no derivative there, but it still has supporting lines: lines that touch the graph at the point and never rise above it. The slope of any such line is a subgradient. Take the maximum of minus two x and x. At zero the two pieces meet with slopes minus two and one. On the left, lines through the origin with slope minus a half, zero, or a half all stay below the graph, and so does every slope in between. The set of all subgradients, the subdifferential, is the interval from minus two to one. Where the function is smooth, the subdifferential is just the gradient. The optimality condition generalises neatly: a point minimises a convex function exactly when zero is one of its subgradients. Here zero is in the interval, so the origin is the minimiser. Kinks are common in practice, from absolute values and maxima, and they often sit exactly at the answer. Next, stepping with subgradients.",
}
