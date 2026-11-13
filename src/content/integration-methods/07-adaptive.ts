import type { Section } from '../types'

export const adaptiveSection: Section = {
  id: 'adaptive',
  title: 'Adaptive integration, tolerance and sampling failures',
  scene: 'adaptive',
  focus: 'runs',
  narration:
    "Can you trust a number from an integrator that reports a tiny error estimate? Only conditionally. An adaptive integrator compares two rules on each panel, treats their difference as an error estimate, and splits the panels that fail the tolerance. That is efficient, but it only knows what its samples show it. On the left is a spike of width about four thousandths, centred at zero point three seven. Eleven equally spaced samples all land where the function is essentially zero, so Simpson's rule returns ten to the minus ninety nine. With a hundred panels, one sample happens to hit the peak and the answer is nearly four times too big. Adaptive quad, given no hint, returns six times ten to the minus seventeen and reports an error of ten to the minus sixteen: confident and wrong. Told where the spike is, it returns the right value. That completes the chapter. You can choose an integration method, diagnose convergence, and read accuracy claims as conditional. Next, approximating whole functions, which needs convergence and controlled remainders.",
}
