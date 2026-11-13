import type { Section } from '../types'

export const lagrangianSection: Section = {
  id: 'lagrangian',
  title: 'Inequality sign conventions and the Lagrangian',
  scene: 'lagrangian',
  focus: 'conventions',
  narration:
    "How do inequalities enter the picture? Through the Lagrangian, with a careful sign convention. Write every constraint as g of x less than or equal to zero, and add each one to the objective multiplied by a non negative number lambda. Take the simplest case: minimise x minus three squared, but x may be at most two. The constraint is x minus two less than or equal to zero. The unconstrained minimum, three, is not allowed, so the answer is the boundary point two. At x equal to two, the derivative of the Lagrangian is two times x minus three plus lambda, which vanishes when lambda is two. That is positive, as it must be. On the left, the pink curve is the Lagrangian with lambda equal to two: the objective tilted by the multiplier, and its minimum has moved exactly to the boundary. Why must lambda be non negative? The term lambda times g charges for pressing against the constraint. A negative lambda would reward violating it. So in practice, a negative multiplier means the constraint is not really binding, or it was written with the wrong sign. Next, the full set of conditions.",
}
