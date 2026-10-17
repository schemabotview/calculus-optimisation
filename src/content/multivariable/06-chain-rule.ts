import type { Section } from '../types'

export const chainRuleSection: Section = {
  id: 'chain-rule',
  title: 'Jacobians, shapes and the multivariable chain rule',
  scene: 'jacobian-chain',
  focus: 'shapes',
  slide: `## Jacobians and the chain rule

The **Jacobian** of g: ℝⁿ → ℝᵐ is the m × n matrix of partials ∂gᵢ/∂xⱼ. It is the best linear approximation to g, the way ∇f is for a scalar f.

### The chain rule
- (f ∘ g)′ = f′(g(x)) · g′(x): multiply the Jacobians
- The shapes must chain: (m × k)(k × n) gives m × n
- Sensitivities flow through each stage of a composition

### Overtime at the workshop
- t hours of overtime: (L, M) = (16 + 2t, 9 + t)
- g′(0) = [2; 1], a 2 × 1 Jacobian
- dQ/dt = [0.75  1.333][2; 1] = 1.5 + 1.333 = **2.833**
- A finite difference with Δt = 0.01 gives 2.8333

### Watch out
Write the shape of every factor before multiplying. A transposed gradient still multiplies, but gives a 2 × 2 matrix instead of a number.`,
  narration:
    "How does a change in one quantity ripple through a chain of models? For maps between several variables, the derivative is the Jacobian: the matrix of every output's partial derivative with respect to every input. A map from n inputs to m outputs has an m by n Jacobian. The chain rule then says: to differentiate a composition, multiply the Jacobians, in order. The shapes must chain, and checking them catches most mistakes. Take overtime at the workshop. Each overtime hour adds two labour hours, two people, and one machine hour. That path has a two by one Jacobian, two over one. The output's gradient is one by two. Multiply them: zero point seven five times two, plus one point three three times one, gives two point eight three chairs per overtime hour. On the left, the orange velocity arrow and the pink gradient arrow are the two factors, and the dots cross the level curves at about that rate. A finite difference agrees to four digits. The last row of the table previews chapter eight: the polar coordinate map has a two by two Jacobian whose determinant is r. Next, gradients of common formulas.",
}
