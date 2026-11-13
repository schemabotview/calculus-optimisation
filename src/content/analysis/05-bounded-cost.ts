import type { Section } from '../types'

export const boundedCostSection: Section = {
  id: 'bounded-production-cost',
  title: 'Constrained one-variable modelling and existence',
  scene: 'bounded-cost',
  focus: 'model',
  narration:
    "Here is a real decision. At what rate should the workshop make chairs to keep the cost per chair as low as possible? Overhead of forty pounds an hour is shared among the chairs made, so faster production spreads it thinner. But running the machine faster wears it more, half a pound per chair for each extra chair per hour. Add two pounds of material, and the cost per chair is forty over q, plus half q, plus two. The machine can make between two and eight chairs an hour. Setting the derivative to zero gives q equal to root eighty, about eight point nine. That is outside the capacity, so it is not a valid answer. Comparing the feasible candidates, the endpoints, gives twenty three pounds at the slowest rate and eleven pounds at the fastest. So the optimum is to run at capacity. Notice how the domain decides whether an answer exists at all. If the limit were strictly below eight, the cost would approach eleven pounds without ever reaching it, and there would be no optimum. Next, a tool for awkward limits.",
}
