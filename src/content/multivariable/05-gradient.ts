import type { Section } from '../types'

export const gradientSection: Section = {
  id: 'gradient',
  title: 'Directional derivatives and gradients',
  scene: 'gradient',
  focus: 'arrows',
  slide: `## Gradients

The **gradient** ∇f = (∂f/∂x, ∂f/∂y) collects the partials. For a differentiable f, the rate in any unit direction u is the **directional derivative** D_u f = ∇f · u.

### At the shift
- ∇Q(16, 9) = (0.75, 1.333), with length 1.530
- Equal extra labour and machine time: D_u Q = 1.473
- Along the level set Q = 24 the rate is 0

### What the gradient means
- D_u f = |∇f| cos θ, largest when u points along ∇f
- So ∇f points uphill, with slope |∇f|
- −∇f points downhill: the basis of gradient descent
- ∇f is perpendicular to the level set through the point

### Watch out
The formula ∇f · u needs differentiability. For xy/(x² + y²) at 0 the "gradient" is (0, 0), but the rates along other directions do not even exist.`,
  narration:
    "Which way should you change the inputs to raise output fastest? The gradient answers it. Collect the partial derivatives into a vector: at the shift, that is zero point seven five and one point three three. For a differentiable function, the rate of change in any unit direction is the dot product of the gradient with that direction. Adding labour and machine time equally gives one point four seven chairs per hour of change. On the left, three unit directions are drawn from the shift. The blue arrow adds labour only, at rate zero point seven five. The green arrow runs along the level curve, where output does not change, so its rate is zero. The pink arrow points along the gradient itself, and gives the largest rate, the gradient's length, one point five three. Because the rate equals the gradient's length times the cosine of the angle, the gradient points straight uphill, and it is perpendicular to the level set. Its negative points downhill, which is the idea behind gradient descent in chapter ten. All of this assumes differentiability. Next, derivatives of vector valued maps.",
}
