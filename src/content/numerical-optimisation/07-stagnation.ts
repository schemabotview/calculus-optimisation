import type { Section } from '../types'

export const stagnationSection: Section = {
  id: 'stagnation',
  title: 'Optimality residuals versus stagnation and iteration limits',
  scene: 'stagnation',
  focus: 'evidence',
  narration:
    "When a solver says it converged, what has it actually shown? There are three ways a run can end. The optimality residual, here the gradient's size, can fall below a tolerance. Progress can stagnate: steps or changes in f become tiny. Or an iteration limit is reached. Only the first is evidence of a solution. On the left, gradient descent runs on the bowl with a step of one thousandth, far too small. Every step is short, so a rule that stops when the step falls below ten to the minus three stops at iteration eleven hundred. But look at the pink curve: the gradient's size is still about one, and the point is still about one unit from the minimiser. The steps are small because the step size is small, not because the solution is close. The green curve, with a sensible step, drives the gradient down to ten to the minus six in seventy seven iterations. So record which test ended the run, and check the residual yourself. A converged label after an iteration limit or a step test, with the gradient never checked, is a claim without evidence. Next, putting the diagnostics together.",
}
