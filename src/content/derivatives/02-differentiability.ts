import type { Section } from '../types'

export const differentiabilitySection: Section = {
  id: 'differentiability',
  title: 'Differentiability, tangent lines and continuity',
  scene: 'differentiability',
  focus: 'one-sided',
  narration:
    "Does every continuous function have a derivative? No, and the simplest counterexample is the absolute value function at zero. Its graph has a corner. Compute difference quotients there. From the right, every quotient equals one. From the left, every quotient equals minus one. The two one-sided limits disagree, so the derivative at zero does not exist, and there is no single tangent line. The function is still continuous at zero: the two pieces meet. Compare x squared, which also passes through the origin, but whose quotients shrink to zero from both sides, so its tangent there is the flat line y equals zero. The logical relationship runs one way. If a function is differentiable at a point, it must be continuous there, because a defined slope forces the values to join up. But continuity alone does not give a derivative. Models with switches, caps or absolute values produce exactly these corners, and the last chapter of the course handles them. Next, the rules that make derivatives quick to compute.",
}
