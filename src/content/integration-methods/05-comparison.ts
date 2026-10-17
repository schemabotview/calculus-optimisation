import type { Section } from '../types'

export const comparisonSection: Section = {
  id: 'comparison',
  title: 'Comparison reasoning and divergent contrasts',
  scene: 'comparison',
  focus: 'cutoffs',
  slide: `## Comparison

When an integrand has no antiderivative, **bound it** by one that does. If 0 ≤ f ≤ g and ∫ g converges, so does ∫ f.

### A bound that settles it
- On [1, ∞), x² ≥ x, so e^(−x²) ≤ e^(−x)
- ∫₁^∞ e^(−x) dx = 1/e ≈ 0.368, finite
- So ∫₁^∞ e^(−x²) converges; quadrature: 0.1394
- The other way: f ≥ g ≥ 0 and ∫ g diverges → ∫ f diverges

### A cutoff can mislead
- ∫₁^∞ x^(−1.1) converges, to **10**
- Out to R = 1000 it has reached only 4.99
- ∫₁ᴿ 1/x diverges, yet at R = 1000 it reads 6.91

### Watch out
A truncated integral cannot tell convergence from divergence: the numbers look alike. Decide convergence by reasoning, with a comparison or the p-test, and only then compute the value numerically.`,
  narration:
    "What do you do when you cannot find an antiderivative, but still need to know whether an improper integral converges? Compare. If a non negative function sits below one whose integral converges, its own integral must converge too. Take e to the minus x squared from one to infinity. For x at least one, x squared is at least x, so e to the minus x squared is below e to the minus x, the orange curve, whose integral is one over e. That settles convergence, and quadrature then gives zero point one three nine. Comparison works the other way as well: above a divergent integral means divergent. Now the warning in the table. The integral of x to the minus one point one converges, to ten. But stop at R equal to a thousand and you have only four point nine nine, half the answer. Meanwhile one over x, which diverges, reads six point nine one at the same cutoff. Up close, the convergent and divergent columns look alike. A finite cutoff cannot tell them apart; only the reasoning can. Next, computing integrals numerically, with error bounds.",
}
