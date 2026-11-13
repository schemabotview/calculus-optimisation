import type { Section } from '../types'

export const smoothnessSection: Section = {
  id: 'smoothness',
  title: 'Smoothness versus equality to a Taylor series',
  scene: 'smooth',
  focus: 'flat',
  narration:
    "If a function has derivatives of every order, must it equal its Taylor series? No, and this is the subtlest point of the chapter. Consider e to the minus one over x squared, set to zero at zero. It is perfectly smooth, but it is so flat at the origin that every derivative there is zero. So its Taylor series about zero is zero plus zero x plus zero x squared, the zero function. That series converges for every x, yet it agrees with the function only at the single point zero. On the left, the function climbs to zero point three seven at x equal to one, while the series says zero. A second example: one over one plus x squared is smooth on the whole real line, yet its series converges only for x between minus one and one. So a series must be shown to converge, and shown to converge to the function. That completes the chapter. You can distinguish sequence and series convergence, justify a finite Taylor approximation, and identify where an expansion is valid. Next, Taylor models extend from one input to several inputs changing at once.",
}
