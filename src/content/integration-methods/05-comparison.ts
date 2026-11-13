import type { Section } from '../types'

export const comparisonSection: Section = {
  id: 'comparison',
  title: 'Comparison reasoning and divergent contrasts',
  scene: 'comparison',
  focus: 'cutoffs',
  narration:
    "What do you do when you cannot find an antiderivative, but still need to know whether an improper integral converges? Compare. If a non negative function sits below one whose integral converges, its own integral must converge too. Take e to the minus x squared from one to infinity. For x at least one, x squared is at least x, so e to the minus x squared is below e to the minus x, the orange curve, whose integral is one over e. That settles convergence, and quadrature then gives zero point one three nine. Comparison works the other way as well: above a divergent integral means divergent. Now the warning in the table. The integral of x to the minus one point one converges, to ten. But stop at R equal to a thousand and you have only four point nine nine, half the answer. Meanwhile one over x, which diverges, reads six point nine one at the same cutoff. Up close, the convergent and divergent columns look alike. A finite cutoff cannot tell them apart; only the reasoning can. Next, computing integrals numerically, with error bounds.",
}
