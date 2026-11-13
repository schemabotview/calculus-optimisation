import type { Section } from '../types'

export const conditioningSection: Section = {
  id: 'conditioning',
  title: 'Conditioning, scaling, quasi-Newton and trust-region orientation',
  scene: 'conditioning',
  focus: 'cost',
  narration:
    "Why did gradient descent struggle on the bowl? Because its level sets are elongated, and the condition number measures by how much: the largest curvature divided by the smallest. On the left, as the condition number grows from one to ten thousand, gradient descent with its best fixed step needs about that many times more iterations, from one to over a hundred thousand. Newton's method needs one step on any quadratic, because it uses the curvature directly. There are three standard remedies. Scaling changes units so the curvatures match: stretch y by root ten and the bowl becomes round. Quasi Newton methods such as BFGS build an approximate Hessian from the gradients they have already seen, without computing second derivatives; here they need two or three iterations at every condition number. Trust region methods take a different safeguard from line searches: they trust the quadratic model only within a radius, and grow or shrink that radius depending on how well the model predicted the actual decrease. A warning: units alone can change the condition number. Hours against seconds changes a curvature by a factor of thirteen million. Next, floating point limits.",
}
