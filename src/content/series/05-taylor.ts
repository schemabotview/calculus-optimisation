import type { Section } from '../types'

export const taylorSection: Section = {
  id: 'taylor',
  title: 'Taylor polynomials and remainder hypotheses',
  scene: 'taylor',
  focus: 'remainder',
  narration:
    "How well can a polynomial stand in for a function near a point? The Taylor polynomial of degree n matches the function's value and first n derivatives there. For e to the x about zero, every derivative is e to the x, which equals one at zero, so the Taylor polynomial is one plus x plus x squared over two factorial, and so on. On the left, T one is the tangent line, and each higher degree hugs the curve over a wider range. A polynomial approximation is only useful with an error bound, and Taylor's theorem gives one, under a hypothesis: the next derivative must exist on the interval. Then the remainder equals that derivative at some unknown point c, times x to the n plus one, over n plus one factorial. At x equal to one, e to the c is less than three, so the error is at most three over n plus one factorial. With n equal to six the polynomial gives two point seven one eight zero five six, and the actual error, two times ten to the minus four, sits under the guaranteed bound. Next, what happens when n goes to infinity.",
}
