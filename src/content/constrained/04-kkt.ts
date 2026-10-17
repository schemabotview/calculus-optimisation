import type { Section } from '../types'

export const kktSection: Section = {
  id: 'kkt',
  title: 'KKT stationarity, feasibility and complementary slackness',
  scene: 'kkt',
  focus: 'certificate',
  slide: `## The KKT conditions

The **Karush–Kuhn–Tucker** conditions combine four checks. A point x with multipliers λ that passes all four is a KKT point.

### The four conditions
- **Primal feasibility**: gᵢ(x) ≤ 0 for every i
- **Dual feasibility**: λᵢ ≥ 0 for every i
- **Stationarity**: ∇f(x) + Σ λᵢ ∇gᵢ(x) = 0
- **Complementary slackness**: λᵢ gᵢ(x) = 0 for every i

### The allocation at (18, 8)
- ∇f = (20, 30); ∇g₁ = (−2/3, −3/2); ∇g₂ = (0, 1)
- 20 − (2/3)λ₁ = 0 gives λ₁ = 30
- 30 − (3/2)(30) + λ₂ = 0 gives λ₂ = 15
- Both active, both λ ≥ 0: every condition holds

### Complementary slackness
An inactive constraint must have λᵢ = 0: slack in a constraint means it exerts no force. A constraint can be active with λᵢ = 0, but never inactive with λᵢ > 0.`,
  narration:
    "What exactly must hold at a constrained optimum? The Karush Kuhn Tucker conditions, four checks together. Primal feasibility: every constraint is satisfied. Dual feasibility: every multiplier is non negative. Stationarity: the gradient of the objective plus the multipliers times the constraint gradients sums to zero. And complementary slackness: each multiplier times its constraint value is zero, so a constraint with slack carries no multiplier. Check them for the allocation problem at eighteen, eight. The cost gradient is twenty, thirty. The output constraint's gradient there is minus two thirds, minus three halves, and the machine constraint's gradient is zero, one. The first component of stationarity gives twenty minus two thirds lambda one equals zero, so lambda one is thirty. The second gives thirty minus forty five plus lambda two equals zero, so lambda two is fifteen. Both constraints are active, both multipliers are positive, and every condition holds. On the left, the cost gradient, in pink, is exactly balanced by the two constraint forces, scaled by their multipliers. That is a certificate, under conditions the next section makes precise.",
}
