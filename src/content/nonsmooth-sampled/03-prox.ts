import type { Section } from '../types'

export const proxSection: Section = {
  id: 'prox',
  title: 'Proximal maps and scalar soft thresholding',
  scene: 'prox',
  focus: 'derive',
  narration:
    "Is there a way to handle a kink exactly rather than bouncing around it? The proximal map does. It asks for the point closest to v that also keeps a nonsmooth term small: minimise one half x minus v squared plus lambda times g of x. For the absolute value, derive it by cases using the subgradient condition. If the answer is positive, the condition gives x equals v minus lambda, which is only consistent when v is bigger than lambda. If it is negative, x equals v plus lambda, consistent when v is less than minus lambda. Otherwise, the answer is zero, and that happens whenever v lies within lambda of zero. Put together: shrink v towards zero by lambda, and set it to exactly zero if it would cross. That is soft thresholding, the curves on the left. With lambda equal to one, one and a half becomes a half, zero point seven becomes zero, and minus two and a half becomes minus one and a half. For an objective that is smooth plus an absolute value, the proximal gradient method takes a gradient step on the smooth part and then applies this map. Next, objectives that are sums of many terms.",
}
