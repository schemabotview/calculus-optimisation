import type { Section } from '../types'

export const partialFractionsSection: Section = {
  id: 'partial-fractions',
  title: 'Partial fractions and rational integrals',
  scene: 'partial-fractions',
  focus: 'steps',
  narration:
    "How do you integrate one over x squared minus one? No substitution makes it obvious, but algebra does. Factor the denominator into x minus one times x plus one, and look for constants A and B so that the fraction equals A over x minus one plus B over x plus one. Clear the denominators and set x equal to one, then minus one: A is a half, and B is minus a half. On the left you can see the split. The blue curve is the original function; it is the orange piece minus the green piece, and each piece integrates to a logarithm. So the antiderivative is a half log of x minus one, minus a half log of x plus one. Between two and three that gives a half log of one and a half, about zero point two zero two seven, the same number quadrature returns to sixteen digits. Two conditions matter. The degree on top must be lower than on the bottom, or you divide first. And the interval must stay away from the roots, where the integrand is not even defined. Next, substitutions with sines and cosines.",
}
