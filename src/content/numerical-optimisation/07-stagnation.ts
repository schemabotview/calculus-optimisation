import type { Section } from '../types'

export const stagnationSection: Section = {
  id: 'stagnation',
  title: 'Optimality residuals versus stagnation and iteration limits',
  scene: 'stagnation',
  focus: 'evidence',
  slide: `## Residuals versus stagnation

A solver stops for one of three reasons: the **optimality residual** is small, progress has **stagnated**, or it hit an **iteration limit**. Only the first is evidence of a solution.

### A step size far too small
- Gradient descent on the bowl with α = 0.001
- "Step < 10⁻³" passes at iteration 1100
- But ‖∇f‖ = 0.998 there, and x is 0.998 from the minimiser

### Reading the signals
- Small steps can mean a tiny α, not a nearby minimum
- Small f changes can mean a flat region
- ‖∇f‖ measures distance from stationarity directly
- With α = 0.18: ‖∇f‖ < 10⁻⁶ in 77 steps

### Watch out
Report which test stopped the run. "Converged" after an iteration limit or a step-size test, with the gradient never checked, is a claim with no evidence behind it.`,
  narration:
    "When a solver says it converged, what has it actually shown? There are three ways a run can end. The optimality residual, here the gradient's size, can fall below a tolerance. Progress can stagnate: steps or changes in f become tiny. Or an iteration limit is reached. Only the first is evidence of a solution. On the left, gradient descent runs on the bowl with a step of one thousandth, far too small. Every step is short, so a rule that stops when the step falls below ten to the minus three stops at iteration eleven hundred. But look at the pink curve: the gradient's size is still about one, and the point is still about one unit from the minimiser. The steps are small because the step size is small, not because the solution is close. The green curve, with a sensible step, drives the gradient down to ten to the minus six in seventy seven iterations. So record which test ended the run, and check the residual yourself. A converged label after an iteration limit or a step test, with the gradient never checked, is a claim without evidence. Next, putting the diagnostics together.",
}
