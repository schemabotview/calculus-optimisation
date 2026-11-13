import type { Section } from '../types'

export const lagrangeSection: Section = {
  id: 'lagrange',
  title: 'Equality constraints and Lagrange multipliers',
  scene: 'lagrange',
  focus: 'multiplier',
  narration:
    "How do you minimise a function along a curve? At the best point, moving a little along the curve should not change the objective to first order. Moving along the curve means moving perpendicular to the constraint's gradient. So the objective's gradient can have no component along the curve: it must be parallel to the constraint's gradient. That is the Lagrange condition: the gradient of f equals lambda times the gradient of h. Take the chapter nine problem exactly: make precisely twenty four chairs. The constraint's gradient is root M over L, root L over M. Setting twenty equal to lambda times the first and thirty equal to lambda times the second, the ratio gives M over L equals two thirds. With L times M equal to a hundred and forty four, that is fourteen point seven labour hours and nine point eight machine hours, costing five hundred and eighty eight pounds. On the left, the cost line touches the output curve there, and the two gradients point the same way. Both equations give lambda equal to twenty four point four nine. It means something: one more chair would raise the minimum cost by about that many pounds. Next, inequalities and their sign rules.",
}
