import type { Section } from '../types'

export const improper2dSection: Section = {
  id: 'improper',
  title: 'Improper integration and absolute-integrability caveats',
  scene: 'improper-2d',
  focus: 'exhaust',
  narration:
    "What does it mean to integrate over the whole plane? As in one dimension, it is a limit, now over growing regions. And there is a new question: does the answer depend on the shape of the regions you grow? If the integral of the absolute value is finite, it does not. Take e to the minus x squared plus y squared. Over discs of radius R the integral is pi times one minus e to the minus R squared, the blue curve, which tends to pi. Over squares it is the square of the one dimensional integral, the pink curve, and it tends to pi too, because the integrand is positive. So the one dimensional integral of e to the minus x squared, which has no elementary antiderivative, is exactly root pi. Dimension changes convergence as well. One over r over the unit disc converges, to two pi, because the area factor r cancels the singularity, while one over x on zero to one diverges. And the order dependent example from section two fails because its absolute value is not integrable. That completes the chapter. Next, local models of change support multivariable optimality.",
}
