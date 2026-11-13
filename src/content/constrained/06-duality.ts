import type { Section } from '../types'

export const dualitySection: Section = {
  id: 'duality',
  title: 'Dual lower bounds, weak and strong duality and Slater conditions',
  scene: 'duality',
  focus: 'bound',
  narration:
    "Can you prove that no cheaper plan exists, without searching all of them? Duality gives a way. For any non negative multipliers, minimise the Lagrangian over all x, including infeasible ones. That number is the dual function, and it is always a lower bound on the true optimum. The reason is short: at any feasible point, each constraint is non positive, so adding non negative multiples of them can only lower the objective. That is weak duality, and it needs no convexity. For the allocation problem the dual function has a closed form: twenty four lambda one minus eight lambda two, as long as lambda one squared is at most twenty times thirty plus lambda two. Any such pair gives a guarantee. Multipliers twenty four point five and zero prove that no plan costs less than five hundred and eighty eight pounds. Multipliers thirty and fifteen prove no plan costs less than six hundred, and since a six hundred pound plan exists, the gap is zero. On the left, the best bound rises to meet the optimum at lambda two equal to fifteen. For convex problems satisfying Slater's condition, the gap always closes. Next, how algorithms handle constraints.",
}
