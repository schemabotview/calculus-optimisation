import type { Section } from '../types'

export const substitutionSection: Section = {
  id: 'substitution',
  title: 'Substitution and transformed limits',
  scene: 'substitution',
  focus: 'steps',
  slide: `## Substitution

Substitution is the chain rule run backwards: **∫ f(g(x)) g′(x) dx = ∫ f(u) du** with u = g(x).

### A worked case
- ∫₀¹ 2x e^(x²) dx: the 2x is the derivative of the inner x²
- Let u = x², so du = 2x dx
- The limits move with the variable: x = 0 gives u = 0, x = 1 gives u = 1
- Result: ∫₀¹ eᵘ du = **e − 1 ≈ 1.718**

### Why the areas match
- On the left, 2x e^(x²) and eᵘ look different on [0, 1]
- Numerical integration of each gives the same 1.718
- The substitution stretches the axis and rescales the height to compensate

### Watch out
Change the limits, or substitute back before evaluating. Mixing u-limits with an x-expression gives wrong answers.`,
  narration:
    "Some integrals are chain rules in disguise. Substitution undoes them. Look at the integral of two x times e to the x squared, from zero to one. The two x is exactly the derivative of the inner x squared. So set u equal to x squared. Then d u is two x d x, and the integrand becomes simply e to the u. The limits must move too. When x is zero, u is zero, and when x is one, u is one. The integral becomes e to the u from zero to one, which is e minus one, about one point seven one eight. The plot shows what happened. The two integrands look nothing alike, one starting flat and rising steeply, the other gently curving. Yet numerical integration of each gives the same one point seven one eight. The substitution stretches the horizontal axis and rescales the height to compensate exactly. The common mistake is to change the integrand to u but keep the old x limits. Either change the limits, or substitute back before evaluating. Next, the difference between net and total.",
}
