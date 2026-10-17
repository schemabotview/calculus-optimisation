import type { Section } from '../types'

export const smoothnessSection: Section = {
  id: 'smoothness',
  title: 'Smoothness versus equality to a Taylor series',
  scene: 'smooth',
  focus: 'flat',
  slide: `## Smooth is not the same as analytic

A function is **analytic** at a if its Taylor series converges to it near a. Being **smooth**, with derivatives of every order, does not guarantee it.

### A smooth function its series misses
- f(x) = e^(−1/x²), with f(0) = 0, has every derivative 0 at 0
- So its Taylor series about 0 is 0 + 0x + 0x² + … = 0
- The series converges everywhere, but to the wrong function
- f(1) = 0.368 while the series gives 0

### Smooth, with a small radius
- 1/(1 + x²) is smooth on all of ℝ
- Its series 1 − x² + x⁴ − … converges only for |x| < 1

### Chapter outcome
You can tell sequence convergence from series convergence, justify a finite Taylor approximation with its remainder, and say where an expansion is valid.`,
  narration:
    "If a function has derivatives of every order, must it equal its Taylor series? No, and this is the subtlest point of the chapter. Consider e to the minus one over x squared, set to zero at zero. It is perfectly smooth, but it is so flat at the origin that every derivative there is zero. So its Taylor series about zero is zero plus zero x plus zero x squared, the zero function. That series converges for every x, yet it agrees with the function only at the single point zero. On the left, the function climbs to zero point three seven at x equal to one, while the series says zero. A second example: one over one plus x squared is smooth on the whole real line, yet its series converges only for x between minus one and one. So a series must be shown to converge, and shown to converge to the function. That completes the chapter. You can distinguish sequence and series convergence, justify a finite Taylor approximation, and identify where an expansion is valid. Next, Taylor models extend from one input to several inputs changing at once.",
}
