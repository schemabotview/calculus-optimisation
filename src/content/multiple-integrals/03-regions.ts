import type { Section } from '../types'

export const regionsSection: Section = {
  id: 'regions',
  title: 'Nonrectangular domains and region descriptions',
  scene: 'regions',
  focus: 'orders',
  slide: `## Nonrectangular regions

Over a general region, the inner limits depend on the outer variable. Describe the region **as a set of inequalities**, in whichever order makes the integral possible.

### One triangle, two descriptions
- T: 0 ≤ x ≤ y ≤ 1, below y = 1 and above y = x
- Vertical strips: 0 ≤ x ≤ 1, then x ≤ y ≤ 1
- Horizontal strips: 0 ≤ y ≤ 1, then 0 ≤ x ≤ y
- Check: both give area ∫∫ 1 dA = ½

### Order decides feasibility
- ∫∫_T e^(y²) dA with y inside: ∫ₓ¹ e^(y²) dy has no formula
- With x inside: ∫₀ʸ e^(y²) dx = y e^(y²)
- Then ∫₀¹ y e^(y²) dy = (e − 1)/2 ≈ **0.8591**
- Numerical integration in the other order agrees

### Watch out
Swapping the order means redrawing the region, not swapping the limits. ∫₀¹ ∫ₓ¹ becomes ∫₀¹ ∫₀ʸ, not ∫ₓ¹ ∫₀¹.`,
  narration:
    "What changes when the region is not a rectangle? The inner limits are no longer constants; they depend on where the outer variable is. Take the triangle where x runs from zero up to y, and y up to one. Slice it with vertical strips: for each x, y runs from the diagonal up to one. Or slice it with horizontal strips: for each y, x runs from zero to the diagonal. Both descriptions cover the triangle exactly once, and both give its area, a half. Now integrate e to the y squared over this triangle. With vertical strips, the inner integral is the integral of e to the y squared in y, which has no elementary antiderivative. With horizontal strips, the inner integral is in x, where e to the y squared is a constant: it gives y times e to the y squared. That integrates by substitution to e minus one over two, about zero point eight five nine, and numerical integration in the first order agrees. The lesson is practical: draw the region, then choose the order. Swapping the order means redescribing the region, never just swapping the limits. Next, three dimensions.",
}
