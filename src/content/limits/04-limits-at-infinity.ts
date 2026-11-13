import type { Section } from '../types'

export const limitsAtInfinitySection: Section = {
  id: 'limits-at-infinity',
  title: 'Limits at infinity, asymptotes and indeterminate forms',
  scene: 'limits-infinity',
  focus: 'forms',
  narration:
    "What does a function do far away, or right next to a point where it blows up? Take two x plus one, over x minus one. For large x, divide top and bottom by x. The small pieces one over x vanish, and the ratio settles towards two. That is a horizontal asymptote, the dashed line y equals two. Near x equals one, the denominator shrinks to zero while the numerator stays near three, so the function grows without bound: a vertical asymptote. Some limits look like zero over zero or infinity over infinity. These are indeterminate forms, because the form alone does not decide the answer. Two functions can both look like zero over zero and have completely different limits. The table shows four forms and the rewriting that settles each one: cancelling a factor, dividing through, multiplying by a conjugate, or comparing growth rates. And when we say a limit is infinite, we mean it does not exist as a number; infinity describes how it fails. Next, what it means for a function to have no breaks.",
}
