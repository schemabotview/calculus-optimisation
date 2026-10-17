import type { Section } from '../types'

export const differentiabilitySection: Section = {
  id: 'differentiability',
  title: 'Differentiability, tangent lines and continuity',
  scene: 'differentiability',
  focus: 'one-sided',
  slide: `## Differentiability

f is **differentiable at a** when f′(a) exists. Then the graph has a tangent line there: y = f(a) + f′(a)(x − a).

### A corner
- |x| at 0: the quotient is +1 from the right and −1 from the left
- The one-sided limits disagree, so f′(0) does not exist

### Continuity is weaker
- **Differentiable ⇒ continuous**: a defined slope forces the values to join up
- **Continuous does not imply differentiable**: |x| is continuous at 0
- x², also continuous at 0, has slope 0 from both sides

### Watch out
Model functions with switches, caps or absolute values often have corners. Chapter 12 deals with them directly, replacing the single slope with a set of slopes.`,
  narration:
    "Does every continuous function have a derivative? No, and the simplest counterexample is the absolute value function at zero. Its graph has a corner. Compute difference quotients there. From the right, every quotient equals one. From the left, every quotient equals minus one. The two one-sided limits disagree, so the derivative at zero does not exist, and there is no single tangent line. The function is still continuous at zero: the two pieces meet. Compare x squared, which also passes through the origin, but whose quotients shrink to zero from both sides, so its tangent there is the flat line y equals zero. The logical relationship runs one way. If a function is differentiable at a point, it must be continuous there, because a defined slope forces the values to join up. But continuity alone does not give a derivative. Models with switches, caps or absolute values produce exactly these corners, and the last chapter of the course handles them. Next, the rules that make derivatives quick to compute.",
}
