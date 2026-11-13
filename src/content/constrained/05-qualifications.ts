import type { Section } from '../types'

export const qualificationsSection: Section = {
  id: 'qualifications',
  title: 'Constraint qualifications and convex sufficiency',
  scene: 'qualifications',
  focus: 'cusp',
  narration:
    "Is every minimiser a KKT point, and is every KKT point a minimiser? Neither, without conditions. Here is a minimiser with no multipliers. Minimise x over the region where y is between zero and x cubed. The region, on the left, comes to a sharp cusp at the origin, and the origin is the minimiser. But the two active constraint gradients there point straight up and straight down, parallel to each other, and no combination of them can cancel the objective's gradient, which points sideways. Stationarity has no solution. The geometry is too degenerate for the gradients to describe it. A constraint qualification rules this out. The linear independence qualification asks that active constraint gradients be independent. Slater's condition, for convex problems, asks for one point that satisfies every inequality strictly. The allocation problem satisfies both: thirty labour hours and six machine hours is strictly feasible. Under a qualification, KKT is necessary. For sufficiency, convexity is the standard tool: if the objective and constraints are convex, any KKT point is a global minimiser. The allocation is convex, so eighteen, eight is certified. Next, bounds from the other side.",
}
