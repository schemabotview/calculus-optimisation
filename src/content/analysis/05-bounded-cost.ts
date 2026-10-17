import type { Section } from '../types'

export const boundedCostSection: Section = {
  id: 'bounded-production-cost',
  title: 'Constrained one-variable modelling and existence',
  scene: 'bounded-cost',
  focus: 'model',
  slide: `## A bounded production-cost problem

Choose a production rate q, in chairs per hour, to make the **cost per chair** as low as possible.

### The model
- Overhead £40 per hour spread over q chairs: 40/q
- Machine wear grows with speed: 0.5q; material: £2
- **c(q) = 40/q + 0.5q + 2**, with capacity **2 ≤ q ≤ 8**

### Solving it
- c′(q) = −40/q² + 0.5 = 0 at q = √80 ≈ 8.94, which is **outside** the capacity
- So compare the feasible candidates: c(2) = £23 and c(8) = £11
- The optimum is the boundary: run at capacity, **q = 8**, £11 per chair

### Existence depends on the domain
If the capacity were q < 8 (open), the cost would approach £11 but never reach it: no optimum exists.`,
  narration:
    "Here is a real decision. At what rate should the workshop make chairs to keep the cost per chair as low as possible? Overhead of forty pounds an hour is shared among the chairs made, so faster production spreads it thinner. But running the machine faster wears it more, half a pound per chair for each extra chair per hour. Add two pounds of material, and the cost per chair is forty over q, plus half q, plus two. The machine can make between two and eight chairs an hour. Setting the derivative to zero gives q equal to root eighty, about eight point nine. That is outside the capacity, so it is not a valid answer. Comparing the feasible candidates, the endpoints, gives twenty three pounds at the slowest rate and eleven pounds at the fastest. So the optimum is to run at capacity. Notice how the domain decides whether an answer exists at all. If the limit were strictly below eight, the cost would approach eleven pounds without ever reaching it, and there would be no optimum. Next, a tool for awkward limits.",
}
