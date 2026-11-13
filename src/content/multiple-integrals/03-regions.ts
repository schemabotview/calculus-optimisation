import type { Section } from '../types'

export const regionsSection: Section = {
  id: 'regions',
  title: 'Nonrectangular domains and region descriptions',
  scene: 'regions',
  focus: 'orders',
  narration:
    "What changes when the region is not a rectangle? The inner limits are no longer constants; they depend on where the outer variable is. Take the triangle where x runs from zero up to y, and y up to one. Slice it with vertical strips: for each x, y runs from the diagonal up to one. Or slice it with horizontal strips: for each y, x runs from zero to the diagonal. Both descriptions cover the triangle exactly once, and both give its area, a half. Now integrate e to the y squared over this triangle. With vertical strips, the inner integral is the integral of e to the y squared in y, which has no elementary antiderivative. With horizontal strips, the inner integral is in x, where e to the y squared is a constant: it gives y times e to the y squared. That integrates by substitution to e minus one over two, about zero point eight five nine, and numerical integration in the first order agrees. The lesson is practical: draw the region, then choose the order. Swapping the order means redescribing the region, never just swapping the limits. Next, three dimensions.",
}
