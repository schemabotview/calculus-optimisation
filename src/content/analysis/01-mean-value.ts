import type { Section } from '../types'

export const meanValueSection: Section = {
  id: 'mean-value',
  title: "Rolle's and the mean value theorems",
  scene: 'mean-value',
  focus: 'parallel',
  narration:
    "Derivatives describe a function point by point. This chapter uses them to analyse whole functions, and to tell candidate answers apart from justified optima. The mean value theorem is the bridge. If a function is continuous on a closed interval and differentiable inside it, then somewhere inside, the instantaneous slope equals the average slope over the interval. On the left, x cubed minus three x rises from zero to two between x equals zero and x equals two, an average slope of one. And at c equals two over root three, about one point one five, the tangent line is exactly parallel to that secant. Rolle's theorem is the special case where the endpoint values are equal, so somewhere the slope is zero. Every hypothesis matters. The absolute value function has equal values at minus one and one, but its corner at zero breaks differentiability, and its slope is never zero. The payoff is practical: a zero derivative on an interval means constant, and a positive one means increasing. Next, using derivative signs.",
}
