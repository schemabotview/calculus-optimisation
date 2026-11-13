import type { Section } from '../types'

export const rulesSection: Section = {
  id: 'rules',
  title: 'Power, sum, product and quotient rules',
  scene: 'rules',
  focus: 'worked',
  narration:
    "Computing every derivative from the limit definition would be slow. A handful of rules, each proved once, do the work. The power rule says the derivative of x to the n is n times x to the n minus one. Sums and constant multiples are differentiated term by term, so three x to the fourth minus two x plus five has derivative twelve x cubed minus two. Products need care. The derivative of f times g is f prime g plus f g prime: each factor takes its turn being differentiated. Quotients follow a similar pattern, divided by the square of the denominator, wherever that denominator is not zero. A good habit is to check a result against a graph. The quotient rule gives the derivative of x over x squared plus one as one minus x squared, over x squared plus one squared. That is zero at plus and minus one, and on the left those are exactly where the function peaks at one half and bottoms out at minus one half. Next, functions inside functions.",
}
