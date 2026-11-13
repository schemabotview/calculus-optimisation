import type { Section } from '../types'

export const gradientSection: Section = {
  id: 'gradient',
  title: 'Directional derivatives and gradients',
  scene: 'gradient',
  focus: 'arrows',
  narration:
    "Which way should you change the inputs to raise output fastest? The gradient answers it. Collect the partial derivatives into a vector: at the shift, that is zero point seven five and one point three three. For a differentiable function, the rate of change in any unit direction is the dot product of the gradient with that direction. Adding labour and machine time equally gives one point four seven chairs per hour of change. On the left, three unit directions are drawn from the shift. The blue arrow adds labour only, at rate zero point seven five. The green arrow runs along the level curve, where output does not change, so its rate is zero. The pink arrow points along the gradient itself, and gives the largest rate, the gradient's length, one point five three. Because the rate equals the gradient's length times the cosine of the angle, the gradient points straight uphill, and it is perpendicular to the level set. Its negative points downhill, which is the idea behind gradient descent in chapter ten. All of this assumes differentiability. Next, derivatives of vector valued maps.",
}
