import type { Section } from '../types'

export const dualitySection: Section = {
  id: 'duality',
  title: 'Dual lower bounds, weak and strong duality and Slater conditions',
  scene: 'duality',
  focus: 'bound',
  slide: `## Duality

The **dual function** q(λ) = min over x of L(x, λ) is a lower bound on the optimal value for every λ ≥ 0. The **dual problem** maximises that bound.

### Weak duality
- For feasible x and λ ≥ 0: λᵢgᵢ(x) ≤ 0, so L(x, λ) ≤ f(x)
- Hence q(λ) ≤ f(x) for every feasible x
- Any λ gives a guarantee: no plan costs less than q(λ)
- It needs no convexity at all

### The allocation's dual
- q(λ) = 24λ₁ − 8λ₂ when λ₁² ≤ 20(30 + λ₂), else −∞
- λ = (24.49, 0) proves cost ≥ £587.88
- λ = (30, 15) proves cost ≥ **£600**: the gap is 0

### Strong duality
For convex problems satisfying Slater's condition, the best bound equals the optimum. A feasible x and a λ with f(x) = q(λ) certify each other: neither can be improved.`,
  narration:
    "Can you prove that no cheaper plan exists, without searching all of them? Duality gives a way. For any non negative multipliers, minimise the Lagrangian over all x, including infeasible ones. That number is the dual function, and it is always a lower bound on the true optimum. The reason is short: at any feasible point, each constraint is non positive, so adding non negative multiples of them can only lower the objective. That is weak duality, and it needs no convexity. For the allocation problem the dual function has a closed form: twenty four lambda one minus eight lambda two, as long as lambda one squared is at most twenty times thirty plus lambda two. Any such pair gives a guarantee. Multipliers twenty four point five and zero prove that no plan costs less than five hundred and eighty eight pounds. Multipliers thirty and fifteen prove no plan costs less than six hundred, and since a six hundred pound plan exists, the gap is zero. On the left, the best bound rises to meet the optimum at lambda two equal to fifteen. For convex problems satisfying Slater's condition, the gap always closes. Next, how algorithms handle constraints.",
}
