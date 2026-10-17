import type { Section } from '../types'

export const adaptiveSection: Section = {
  id: 'adaptive',
  title: 'Adaptive integration, tolerance and sampling failures',
  scene: 'adaptive',
  focus: 'runs',
  slide: `## Adaptive integration

An **adaptive** integrator estimates its own error panel by panel and refines only where the estimate exceeds a **tolerance**.

### How it decides
- Compare two rules on a panel, such as a coarse and a fine one
- Their difference estimates the error there
- Split panels that fail the tolerance; accept the rest

### Sampling failures
- A spike of width 0.004 at x = 0.37; area 0.003545
- 11 equal samples all read 0: the rule sees nothing
- Adaptive quad with no hint: **6 × 10⁻¹⁷**, error 10⁻¹⁶
- Told where to look, quad returns 0.003545

### Chapter outcome
You can choose and explain an integration method, decide whether an improper integral converges, and read a numerical accuracy claim as conditional on the samples seeing the function.`,
  narration:
    "Can you trust a number from an integrator that reports a tiny error estimate? Only conditionally. An adaptive integrator compares two rules on each panel, treats their difference as an error estimate, and splits the panels that fail the tolerance. That is efficient, but it only knows what its samples show it. On the left is a spike of width about four thousandths, centred at zero point three seven. Eleven equally spaced samples all land where the function is essentially zero, so Simpson's rule returns ten to the minus ninety nine. With a hundred panels, one sample happens to hit the peak and the answer is nearly four times too big. Adaptive quad, given no hint, returns six times ten to the minus seventeen and reports an error of ten to the minus sixteen: confident and wrong. Told where the spike is, it returns the right value. That completes the chapter. You can choose an integration method, diagnose convergence, and read accuracy claims as conditional. Next, approximating whole functions, which needs convergence and controlled remainders.",
}
