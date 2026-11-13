import type { Section } from '../types'

export const stepSizeSection: Section = {
  id: 'step-size',
  title: 'Gradient descent, smoothness and step-size assumptions',
  scene: 'step-size',
  focus: 'factors',
  narration:
    "Gradient descent takes the steepest direction with a fixed step length. How large may that step be? It depends on curvature. The standard assumption is that the gradient is Lipschitz with constant L: curvature never exceeds L. For a quadratic, L is the largest eigenvalue of the Hessian; for the bowl, it is ten, the curvature across the narrow direction. On the bowl, each step multiplies the x error by one minus alpha, and the y error by one minus ten alpha. For the method to converge, both factors must be less than one in size, which requires alpha below two over L, zero point two. On the left, three runs from the same start. With alpha zero point zero five, the path is smooth but slow: two hundred and ninety one iterations. With zero point one eight it zigzags across the valley, because the y factor is minus zero point eight, but converges in seventy seven. With zero point two one, the y factor is minus one point one, and each zigzag is wider than the last: divergence. The deeper problem is the gap between curvatures. Any step safe in the steep direction crawls in the flat one. Next, choosing the step automatically.",
}
