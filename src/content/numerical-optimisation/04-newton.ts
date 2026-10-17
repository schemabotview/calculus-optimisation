import type { Section } from '../types'

export const newtonSection: Section = {
  id: 'newton',
  title: 'Newton steps, damping and linear solves',
  scene: 'newton',
  focus: 'damping',
  slide: `## Newton's method

**Newton's method** minimises the second-order Taylor model at each step: solve **∇²f(x) p = −∇f(x)**, then move to x + αp.

### Why it is fast
- On a quadratic: one step to the minimum
- Near a minimiser with ∇²f ≻ 0: quadratic
- Each step is a linear solve, not a matrix inverse

### When it fails
- F(x) = √(1 + x²) has its minimum at 0
- The Newton step sends x to −x³: from 1.5, to −3.375, then 38.4
- Far from 0: tiny curvature, huge step

### Damping
Backtracking on α rescues it: the first step is halved, to −0.9375, then full steps reach 3 × 10⁻⁸ in six iterations. Away from a minimum, also check that p is a descent direction; if ∇²f is not positive definite, it may not be.`,
  narration:
    "Can a method use curvature to take better steps? Newton's method does. At each point it builds the second order Taylor model and jumps to that model's minimum, which means solving a linear system: the Hessian times the step equals minus the gradient. On a quadratic the model is exact, so one step finishes the job, and near a well behaved minimum the number of correct digits roughly doubles each step. But the model is only local. Take the square root of one plus x squared, a smooth bowl with its minimum at zero. Its Newton step sends x to minus x cubed. From one and a half, the full step lands at minus three point three seven five, the pink jump on the left, then thirty eight, then minus fifty six thousand: divergence. Far from zero, the curvature is tiny, so the model is nearly flat and its minimum is far away. Damping fixes it. Backtracking halves the first step, to minus zero point nine four, and from then on full steps are accepted, reaching three times ten to the minus eight in six iterations. Away from a minimum, also check the Newton step is a descent direction. Next, why curvature matters.",
}
