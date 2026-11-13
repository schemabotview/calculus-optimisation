import type { Section } from '../types'

export const descentSection: Section = {
  id: 'descent',
  title: 'Descent directions, steps and stopping criteria',
  scene: 'descent',
  focus: 'test',
  narration:
    "This chapter is about how iterative methods use derivatives and curvature, and how to judge the answer they return. Almost every optimiser repeats one update: from the current point, choose a direction and a step length, and move. A direction is a descent direction if it makes an obtuse angle with the gradient, that is, if the gradient dotted with it is negative. Then a small enough step along it is guaranteed to reduce f. The chapter's test problem is a bowl, one half of x squared plus ten y squared, with its minimum at the origin, starting from three, one and a half. The gradient there is three, fifteen: the bowl is ten times steeper in y. On the left, the pink arrow is minus the gradient, the steepest descent direction. Notice it points mostly downward, not at the centre. The green arrow is Newton's direction, which does point at the centre. Moving left is descent, but only barely; moving up is uphill. When should the iteration stop? The honest test is a small gradient. Small steps alone only show the method is slowing down. Next, how big a step can be.",
}
