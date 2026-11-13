import type { Section } from '../types'

export const subgradientStepsSection: Section = {
  id: 'subgradient-steps',
  title: 'Subgradient steps and step-size caveats',
  scene: 'subgradient-steps',
  focus: 'caveats',
  narration:
    "Can you simply replace the gradient with a subgradient and run gradient descent? You can, but expect different behaviour. Minimise the absolute value of x, starting at one. Away from zero, the subgradient is the sign of x, so every step has length exactly alpha, however close you are. With a constant step of zero point three, the pink iterates go to zero point seven, zero point four, zero point one, then jump to minus zero point two and bounce between those two values forever. They can never land closer than the step allows. With a diminishing step, half over root k, the blue iterates close in on zero, but slowly, and not monotonically: sometimes the function goes up. Three habits from smooth optimisation break. The negative subgradient need not be a descent direction, so line searches can stall. The objective can rise, so you keep track of the best point seen. And the subgradient's size does not shrink near the minimiser, so it cannot serve as a stopping test. The guarantees need step sizes that shrink to zero but sum to infinity, and the rate is slow. Next, handling the kink exactly instead.",
}
