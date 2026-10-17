import type { Section } from '../types'

export const improperSection: Section = {
  id: 'improper',
  title: 'Improper integrals and convergence',
  scene: 'improper',
  focus: 'truncated',
  slide: `## Improper integrals

An integral over an infinite interval, or of an unbounded integrand, is **defined as a limit**: ∫₁^∞ f = lim ∫₁ᴿ f as R → ∞.

### Converges or diverges
- If the limit is a finite number, the integral **converges**
- ∫₁ᴿ 1/x² dx = 1 − 1/R → **1**: converges
- ∫₁ᴿ 1/x dx = ln R → ∞: **diverges**
- The curves look alike, but 1/x falls too slowly

### The p-test
- ∫₁^∞ 1/xᵖ converges exactly when p > 1
- ∫₀¹ 1/xᵖ converges exactly when p < 1
- So ∫₀¹ 1/√x = 2, while ∫₀¹ 1/x diverges

### Watch out
A divergent integral has no value. Writing ∫₁^∞ 1/x = ∞ records that it diverges; it is not a number you can compute with, and ∞ − ∞ from two divergent pieces has no meaning.`,
  narration:
    "Can an infinitely long region have finite area? Sometimes, and the definition decides when. An integral to infinity is not computed directly; it is the limit of ordinary integrals out to R, as R grows. If that limit is a finite number, the integral converges. Compare one over x squared and one over x on the left. They look similar: both start at one and sink toward zero. But the integral of one over x squared out to R is one minus one over R, which settles at one. The integral of one over x is the log of R, which keeps growing: two point three at ten, four point six at a hundred, six point nine at a thousand, and on without bound. One over x simply does not fall fast enough. The general rule is the p test: one over x to the p converges at infinity exactly when p is bigger than one, and near zero exactly when p is smaller than one. So one over root x has finite area two on zero to one. Next, how to decide convergence when there is no formula.",
}
