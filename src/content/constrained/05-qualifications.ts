import type { Section } from '../types'

export const qualificationsSection: Section = {
  id: 'qualifications',
  title: 'Constraint qualifications and convex sufficiency',
  scene: 'qualifications',
  focus: 'cusp',
  slide: `## When KKT can be trusted

KKT conditions are **necessary** only under a **constraint qualification**, and **sufficient** only with extra structure, typically convexity.

### A qualification failing
- Minimise x subject to y ≤ x³ and y ≥ 0
- A cusp at the minimiser (0, 0)
- Active gradients (0, 1), (0, −1): parallel
- No λ makes (1, 0) + λ₁(0, 1) + λ₂(0, −1) = 0

### Two common qualifications
- **LICQ**: active gradients linearly independent
- **Slater**: convex, with a strictly feasible point
- The allocation satisfies both: (30, 6) works

### Convex sufficiency
If f and every gᵢ are convex, any KKT point is a **global** minimiser. The allocation is convex (linear cost, convex g₁, affine g₂), so (18, 8) is certified globally optimal.`,
  narration:
    "Is every minimiser a KKT point, and is every KKT point a minimiser? Neither, without conditions. Here is a minimiser with no multipliers. Minimise x over the region where y is between zero and x cubed. The region, on the left, comes to a sharp cusp at the origin, and the origin is the minimiser. But the two active constraint gradients there point straight up and straight down, parallel to each other, and no combination of them can cancel the objective's gradient, which points sideways. Stationarity has no solution. The geometry is too degenerate for the gradients to describe it. A constraint qualification rules this out. The linear independence qualification asks that active constraint gradients be independent. Slater's condition, for convex problems, asks for one point that satisfies every inequality strictly. The allocation problem satisfies both: thirty labour hours and six machine hours is strictly feasible. Under a qualification, KKT is necessary. For sufficiency, convexity is the standard tool: if the objective and constraints are convex, any KKT point is a global minimiser. The allocation is convex, so eighteen, eight is certified. Next, bounds from the other side.",
}
