import type { Section } from '../types'

export const rulesSection: Section = {
  id: 'rules',
  title: 'Power, sum, product and quotient rules',
  scene: 'rules',
  focus: 'worked',
  slide: `## Rules for derivatives

Each rule follows from the limit definition once, and then saves work every time after.

### The four rules
- **Power**: (xⁿ)′ = n xⁿ⁻¹
- **Sum and constant multiple**: differentiate term by term
- **Product**: (f g)′ = f′ g + f g′, not f′ g′
- **Quotient**: (f/g)′ = (f′ g − f g′)/g², where g ≠ 0
- Roots too: (√x)′ = (x^(1/2))′ = 1/(2√x)

### Checking a result
- f(x) = x/(x² + 1) gives f′(x) = (1 − x²)/(x² + 1)²
- f′ = 0 at x = ±1, exactly where the graph turns: a peak of 0.5 and a trough of −0.5
- Each rule is proved once from the limit definition

### Watch out
The product rule is the most common slip: the derivative of a product is not the product of the derivatives.`,
  narration:
    "Computing every derivative from the limit definition would be slow. A handful of rules, each proved once, do the work. The power rule says the derivative of x to the n is n times x to the n minus one. Sums and constant multiples are differentiated term by term, so three x to the fourth minus two x plus five has derivative twelve x cubed minus two. Products need care. The derivative of f times g is f prime g plus f g prime: each factor takes its turn being differentiated. Quotients follow a similar pattern, divided by the square of the denominator, wherever that denominator is not zero. A good habit is to check a result against a graph. The quotient rule gives the derivative of x over x squared plus one as one minus x squared, over x squared plus one squared. That is zero at plus and minus one, and on the left those are exactly where the function peaks at one half and bottoms out at minus one half. Next, functions inside functions.",
}
