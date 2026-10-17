import type { Section } from '../types'

export const byPartsSection: Section = {
  id: 'by-parts',
  title: 'Integration by parts',
  scene: 'by-parts',
  focus: 'parts',
  slide: `## Integration by parts

The product rule, read backwards: **∫ u dv = u v − ∫ v du**. It trades one integral for another that should be easier.

### Choosing u and dv
- Let u be the factor that simplifies when differentiated
- Let dv be a factor you can integrate
- For x eˣ: u = x, dv = eˣ dx, so du = dx, v = eˣ
- ∫ x eˣ dx = x eˣ − ∫ eˣ dx = (x − 1)eˣ + C

### Verify by differentiating
- d/dx (x − 1)eˣ = eˣ + (x − 1)eˣ = x eˣ ✓
- ∫₀¹ x eˣ dx = F(1) − F(0) = 0 − (−1) = **1**
- Quadrature agrees: 1.0 to 15 digits

### Watch out
A poor choice makes the new integral harder: u = eˣ, dv = x dx gives ∫ ½x² eˣ dx. Some integrals need parts twice, such as x² eˣ, whose answer (x² − 2x + 2)eˣ is again checked by differentiating it back.`,
  narration:
    "This chapter is about choosing how to integrate, and then asking whether the answer is defined and whether a number from a computer can be trusted. The first tool is integration by parts. The product rule says the derivative of u times v is u prime v plus u v prime. Integrate both sides and rearrange, and you get: the integral of u d v equals u v minus the integral of v d u. It does not finish the job; it swaps one integral for another. The art is picking u as the factor that gets simpler when differentiated. For x times e to the x, take u equal to x. Then d u is just d x, v is e to the x, and the answer is x minus one, times e to the x. Never trust an antiderivative you have not checked. Differentiate it: the product rule gives back x e to the x exactly. On the left, the orange curve is lowest exactly where the blue one crosses zero, as it must be. And the definite integral from zero to one is one, which quadrature confirms. Next, rational functions.",
}
