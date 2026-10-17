import type { Section } from '../types'

export const limitsAtInfinitySection: Section = {
  id: 'limits-at-infinity',
  title: 'Limits at infinity, asymptotes and indeterminate forms',
  scene: 'limits-infinity',
  focus: 'forms',
  slide: `## Limits at infinity and asymptotes

As x grows without bound, f(x) may settle towards a number: a **horizontal asymptote**. Near a point, it may grow without bound: a **vertical asymptote**.

### For f(x) = (2x + 1)/(x − 1)
- Divide top and bottom by x: (2 + 1/x)/(1 − 1/x) → 2, so y = 2 is a horizontal asymptote
- Near x = 1 the denominator → 0 and the numerator → 3, so x = 1 is a vertical asymptote

### Indeterminate forms
- 0/0, ∞/∞, ∞ − ∞ and 0 · ∞ do **not** have fixed values
- (x² − 1)/(x − 1) → 2, while (x² − 1)/(x − 1)² has no limit at 1: both are 0/0
- Each needs algebra first: cancel, divide through, or use a conjugate

### Watch out
"Tends to infinity" means the limit does not exist as a number. It is a description of how it fails.`,
  narration:
    "What does a function do far away, or right next to a point where it blows up? Take two x plus one, over x minus one. For large x, divide top and bottom by x. The small pieces one over x vanish, and the ratio settles towards two. That is a horizontal asymptote, the dashed line y equals two. Near x equals one, the denominator shrinks to zero while the numerator stays near three, so the function grows without bound: a vertical asymptote. Some limits look like zero over zero or infinity over infinity. These are indeterminate forms, because the form alone does not decide the answer. Two functions can both look like zero over zero and have completely different limits. The table shows four forms and the rewriting that settles each one: cancelling a factor, dividing through, multiplying by a conjugate, or comparing growth rates. And when we say a limit is infinite, we mean it does not exist as a number; infinity describes how it fails. Next, what it means for a function to have no breaks.",
}
