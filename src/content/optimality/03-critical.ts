import type { Section } from '../types'

export const criticalSection: Section = {
  id: 'critical',
  title: 'Interior first-order necessary conditions',
  scene: 'critical',
  focus: 'stationary',
  narration:
    "Where can a minimum be? If a smooth function has a local minimum at an interior point, the tangent plane there must be flat: the gradient is zero. Otherwise some direction would go downhill. Points where the gradient vanishes are called critical points, and they are the candidates. Take x cubed minus three x plus y squared. Setting the gradient to zero gives three x squared minus three equals zero and two y equals zero, so the candidates are one, zero and minus one, zero. On the left, the level sets show what they are. Around one, zero, at height minus two, the blue level set forms a closed loop: a local minimum. At minus one, zero, the orange level set at height two crosses itself: a saddle, uphill in one direction and downhill in another. And because x cubed is unbounded below, the function has no global minimum at all, even though it has a local one. So the first order condition is necessary but not sufficient. It also only applies in the interior: the cost per chair's boundary minimum had a nonzero slope. Next, how to classify the candidates.",
}
