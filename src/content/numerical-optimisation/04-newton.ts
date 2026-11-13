import type { Section } from '../types'

export const newtonSection: Section = {
  id: 'newton',
  title: 'Newton steps, damping and linear solves',
  scene: 'newton',
  focus: 'damping',
  narration:
    "Can a method use curvature to take better steps? Newton's method does. At each point it builds the second order Taylor model and jumps to that model's minimum, which means solving a linear system: the Hessian times the step equals minus the gradient. On a quadratic the model is exact, so one step finishes the job, and near a well behaved minimum the number of correct digits roughly doubles each step. But the model is only local. Take the square root of one plus x squared, a smooth bowl with its minimum at zero. Its Newton step sends x to minus x cubed. From one and a half, the full step lands at minus three point three seven five, the pink jump on the left, then thirty eight, then minus fifty six thousand: divergence. Far from zero, the curvature is tiny, so the model is nearly flat and its minimum is far away. Damping fixes it. Backtracking halves the first step, to minus zero point nine four, and from then on full steps are accepted, reaching three times ten to the minus eight in six iterations. Away from a minimum, also check the Newton step is a descent direction. Next, why curvature matters.",
}
