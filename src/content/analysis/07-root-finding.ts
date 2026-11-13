import type { Section } from '../types'

export const rootFindingSection: Section = {
  id: 'root-finding',
  title: 'Bisection and Newton root finding versus minimisation',
  scene: 'root-finding',
  focus: 'traces',
  narration:
    "Optimisation often comes down to solving an equation: setting the derivative to zero. When that equation has no tidy solution, numerical methods take over. Bisection keeps an interval where the derivative changes sign, and halves it every step. It always converges, but slowly, gaining roughly one binary digit per step. Newton's method is faster. It follows the tangent of the derivative down to zero, using the second derivative as the slope. Starting from five chairs an hour, it reaches root eighty to six decimal places in five steps. But Newton's method needs a sensible start. From twenty, its very first step jumps to minus twenty, a meaningless production rate, and then it bounces between plus and minus twenty forever. And there is a deeper caution. Solving for a zero derivative finds every stationary point: minima, maxima and flat points alike. Its answer is a candidate that still needs the checks of this chapter. That completes the chapter. Next, integration answers the complementary question: how change accumulates.",
}
