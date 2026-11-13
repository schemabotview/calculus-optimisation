import type { Section } from '../types'

export const antiderivativesSection: Section = {
  id: 'antiderivatives',
  title: 'Antiderivatives, constants and evaluation',
  scene: 'antiderivatives',
  focus: 'table',
  narration:
    "Part two of the fundamental theorem needs an antiderivative: a function whose derivative is the integrand. If one exists, many do. Adding any constant does not change a derivative, so if x squared is an antiderivative of two x, so is x squared plus one, or minus one, or anything else. On the left are four of them: identical shapes, shifted up and down, with exactly the same slope at every x. On an interval, these are all of them, which is why indefinite integrals are written with plus C. In a definite integral the constant cancels. The integral of two x from zero to two is four plus C, minus zero plus C, which is four whatever C is. So any one antiderivative will do. The table lists the common ones, and every entry can be checked by differentiating. Notice the logarithm. The power rule's antiderivative divides by n plus one, which fails when n is minus one, and that is exactly the case the logarithm fills. Next, a method for integrals that are hidden chain rules.",
}
