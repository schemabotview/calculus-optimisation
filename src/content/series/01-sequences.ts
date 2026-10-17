import type { Section } from '../types'

export const sequencesSection: Section = {
  id: 'sequences',
  title: 'Sequences, limits and iterative convergence',
  scene: 'iteration',
  focus: 'rates',
  slide: `## Sequences and iterative convergence

A **sequence** x₀, x₁, x₂, … converges to L when |xₙ − L| can be made as small as you like by taking n large enough.

### Iterations are sequences
- Many algorithms repeat xₙ₊₁ = g(xₙ) until it settles
- xₙ₊₁ = cos xₙ from x₀ = 1 converges to 0.739085
- At the limit, cos r = r: a **fixed point**
- Each error is about 0.67 times the last

### Rates of convergence
- **Linear**: error shrinks by a fixed factor per step
- **Quadratic**: error is squared, so digits double
- Newton for √2 reaches machine precision in 5 steps
- The cos iteration needs about 30 steps for 6 digits

### Watch out
A sequence can settle and still be wrong, if the rule is wrong. And stopping when steps get small is a test of slowing down, not proof of a limit.`,
  narration:
    "This chapter is about convergence: when does an infinite process have a definite answer, and when can a finite piece of an expansion be trusted? Start with sequences. A sequence converges to L if its terms get, and stay, as close to L as you like. Iterative algorithms produce sequences. Press cosine repeatedly on a calculator, starting from one, and the values overshoot, undershoot, and settle at zero point seven three nine. That number is a fixed point: its cosine is itself. The table compares two iterations. The cosine iteration multiplies its error by about zero point six seven each step, which is linear convergence, so it needs around thirty steps for six digits. Newton's method for the square root of two squares its error each step, which is quadratic convergence: the number of correct digits roughly doubles, and five steps reach machine precision. One warning. Small steps mean the sequence is slowing down; they do not by themselves prove it has a limit, or that the limit is the one you wanted. Next, adding up infinitely many terms.",
}
