import type { Section } from '../types'

export const subgradientsSection: Section = {
  id: 'subgradients',
  title: 'Convex subgradients and subdifferentials',
  scene: 'subgradients',
  focus: 'subdifferential',
  slide: `## Subgradients

For convex f, a **subgradient** at x is any s with f(y) ≥ f(x) + s(y − x) for all y: the slope of a line that touches f at x and stays below it.

### At a kink
- f(x) = max(−2x, x) has slopes −2 and 1 meeting at 0
- Every s between −2 and 1 gives a supporting line there
- So the **subdifferential** is ∂f(0) = [−2, 1]
- Where f is differentiable, ∂f(x) = {∇f(x)}

### The optimality rule
- x* minimises a convex f exactly when **0 ∈ ∂f(x*)**
- For max(−2x, x): 0 ∈ [−2, 1], so x* = 0
- |x − 3| + |x − 5| has ∂f = {0} on all of (3, 5)

### Watch out
Absolute values, maxima and hinge losses have kinks, often exactly at the solution. "Set the derivative to zero" fails there; "0 ∈ ∂f" does not.`,
  narration:
    "This chapter extends the toolkit to objectives with corners and objectives known only through samples, and separates what is guaranteed from what is merely practical. Start with corners. A convex function with a kink has no derivative there, but it still has supporting lines: lines that touch the graph at the point and never rise above it. The slope of any such line is a subgradient. Take the maximum of minus two x and x. At zero the two pieces meet with slopes minus two and one. On the left, lines through the origin with slope minus a half, zero, or a half all stay below the graph, and so does every slope in between. The set of all subgradients, the subdifferential, is the interval from minus two to one. Where the function is smooth, the subdifferential is just the gradient. The optimality condition generalises neatly: a point minimises a convex function exactly when zero is one of its subgradients. Here zero is in the interval, so the origin is the minimiser. Kinks are common in practice, from absolute values and maxima, and they often sit exactly at the answer. Next, stepping with subgradients.",
}
