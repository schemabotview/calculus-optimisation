import type { Section } from '../types'

export const feasibleSection: Section = {
  id: 'feasible',
  title: 'Objectives, feasible sets, boundedness and attainment',
  scene: 'feasible',
  focus: 'attain',
  narration:
    "This chapter asks how to recognise a minimum, how to tell a local answer from a global one, and how to write a problem so that it can be solved without changing what it means. Every optimisation problem has two parts: an objective to minimise and a feasible set of allowed choices. Return to the workshop's cost per chair. Without limits, the cheapest rate is about eight point nine four chairs an hour. But the machine can only make eight. On the feasible set, rates up to eight, the cost keeps falling all the way to the boundary, so the best feasible choice is exactly eight, at eleven pounds a chair. The slope there is not zero, and that is fine: the minimum is on the boundary. Before solving, ask whether a minimum exists. The infimum is the greatest lower bound; it is a minimum only if a feasible point reaches it. e to the x gets as close to zero as you like and never reaches it. x cubed has no lower bound at all. Weierstrass's theorem gives a guarantee: a continuous objective on a closed, bounded, nonempty set always attains its minimum. Next, local models of curvature.",
}
