import type { Section } from '../types'

export const monotonicitySection: Section = {
  id: 'monotonicity',
  title: 'Monotonicity and critical points',
  scene: 'monotonicity',
  focus: 'sign-chart',
  slide: `## Derivative signs

On an interval, **f′ > 0 means f increases** and **f′ < 0 means f decreases**. Both follow from the mean value theorem.

### Critical points
- **Critical point**: f′ = 0 or f′ does not exist
- **Stationary point**: a critical point with f′ = 0
- Corners count too: |x| has one at 0
- x³ − 3x: f′ = 3(x − 1)(x + 1), zero at x = ±1

### The sign chart
- f′ > 0 for x < −1: rising
- f′ < 0 between −1 and 1: falling
- f′ > 0 for x > 1: rising again
- Test points: f′(−2) = 9, f′(0) = −3, f′(2) = 9
- So −1 is a local max and 1 a local min

### Watch out
A critical point is a **candidate**, not a conclusion: f′ can vanish where f neither peaks nor dips, as x³ does at 0.`,
  narration:
    "Where is a function rising, and where is it falling? The sign of the derivative answers, and the mean value theorem proves it: if the slope is positive everywhere on an interval, then every average slope there is positive too. Points where the derivative is zero, or fails to exist, are called critical points. They are the only places a smooth function can switch between rising and falling. For x cubed minus three x, the derivative factors as three times x minus one times x plus one, so the critical points are minus one and one. A sign chart tracks the derivative between them. Positive to the left of minus one, so the function rises. Negative between minus one and one, so it falls. Positive again beyond one. Reading the switches, minus one is a local maximum and one is a local minimum, exactly where the orange derivative curve crosses zero on the left. But a critical point is only a candidate. A zero derivative alone does not make a peak or a dip. Next, curvature and the tests that use it.",
}
