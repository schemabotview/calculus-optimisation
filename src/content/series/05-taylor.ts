import type { Section } from '../types'

export const taylorSection: Section = {
  id: 'taylor',
  title: 'Taylor polynomials and remainder hypotheses',
  scene: 'taylor',
  focus: 'remainder',
  slide: `## Taylor polynomials

The **Taylor polynomial** of degree n about a matches f and its first n derivatives at a: Tₙ(x) = Σ f⁽ᵏ⁾(a)(x − a)ᵏ/k!.

### For eˣ about 0
- Every derivative of eˣ is eˣ, which is 1 at x = 0
- So Tₙ(x) = 1 + x + x²/2! + … + xⁿ/n!
- T₁ is the tangent line; each extra term widens the fit

### The remainder, with its hypothesis
- If f⁽ⁿ⁺¹⁾ exists on the interval, the remainder is
- Rₙ(x) = f⁽ⁿ⁺¹⁾(c) xⁿ⁺¹/(n + 1)! for some c between 0 and x
- At x = 1, e^c < 3, so |Rₙ(1)| ≤ 3/(n + 1)!
- n = 6: e ≈ 2.718056, error 0.00023 ≤ bound 0.0006

### Watch out
The bound is only as good as the derivative bound behind it. Far from a, (x − a)ⁿ⁺¹ grows, and the same polynomial can be badly wrong: T₃(−3) = −2 while e⁻³ = 0.05, as the plot shows on the left.`,
  narration:
    "How well can a polynomial stand in for a function near a point? The Taylor polynomial of degree n matches the function's value and first n derivatives there. For e to the x about zero, every derivative is e to the x, which equals one at zero, so the Taylor polynomial is one plus x plus x squared over two factorial, and so on. On the left, T one is the tangent line, and each higher degree hugs the curve over a wider range. A polynomial approximation is only useful with an error bound, and Taylor's theorem gives one, under a hypothesis: the next derivative must exist on the interval. Then the remainder equals that derivative at some unknown point c, times x to the n plus one, over n plus one factorial. At x equal to one, e to the c is less than three, so the error is at most three over n plus one factorial. With n equal to six the polynomial gives two point seven one eight zero five six, and the actual error, two times ten to the minus four, sits under the guaranteed bound. Next, what happens when n goes to infinity.",
}
