import type { Section } from '../types'

export const monotonicitySection: Section = {
  id: 'monotonicity',
  title: 'Monotonicity and critical points',
  scene: 'monotonicity',
  focus: 'sign-chart',
  narration:
    "Where is a function rising, and where is it falling? The sign of the derivative answers, and the mean value theorem proves it: if the slope is positive everywhere on an interval, then every average slope there is positive too. Points where the derivative is zero, or fails to exist, are called critical points. They are the only places a smooth function can switch between rising and falling. For x cubed minus three x, the derivative factors as three times x minus one times x plus one, so the critical points are minus one and one. A sign chart tracks the derivative between them. Positive to the left of minus one, so the function rises. Negative between minus one and one, so it falls. Positive again beyond one. Reading the switches, minus one is a local maximum and one is a local minimum, exactly where the orange derivative curve crosses zero on the left. But a critical point is only a candidate. A zero derivative alone does not make a peak or a dip. Next, curvature and the tests that use it.",
}
