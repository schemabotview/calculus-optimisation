import type { Section } from '../types'

export const floatingSection: Section = {
  id: 'floating',
  title: 'Finite-difference verification and floating-point effects',
  scene: 'floating',
  focus: 'flat',
  narration:
    "How precisely can a computer find a minimum? Less precisely than you might think, if it looks only at function values. Double precision numbers carry a relative error of about two times ten to the minus sixteen. Near a minimum the function is flat: one plus x minus one squared rises by only delta squared a distance delta from the minimiser. On the left, the computed rise, the orange points, follows the exact delta squared down to delta of ten to the minus seven. At ten to the minus eight, delta squared is ten to the minus sixteen, smaller than the spacing between floating point numbers near one, and the computed rise is exactly zero. So comparing function values cannot pin the minimiser down better than about the square root of epsilon, ten to the minus eight. The derivative does better: it is two delta, which is still clearly nonzero at that distance. That is one reason serious stopping tests use the gradient, not changes in f. And it is a reason to verify a coded gradient against central differences before trusting a solver. A wrong gradient leads to a confident stop at a point that is not stationary. Next, what stopping really proves.",
}
