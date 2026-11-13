import type { Section } from '../types'

export const differenceQuotients: Section = {
  id: 'difference-quotients',
  title: 'Difference quotients and instantaneous rates',
  scene: 'secants',
  focus: 'quotients',
  narration:
    "Limits let us define instantaneous change. This chapter derives that change from first principles and then builds the rules for computing it. Start with an average rate: how much a function changes over an interval, divided by the interval's length. On a graph, that is the slope of a secant line. For x squared starting at one, the average rate over an interval of length h simplifies to two plus h. Shrink the interval. Lengths one, one half, one tenth and one hundredth give slopes three, two and a half, two point one, and two point zero one. On the left, the secants swing towards a single line that just touches the curve: the tangent, with slope exactly two. That limit is the derivative. It is the instantaneous rate of change, and its units are output units per input unit. One caution: we cannot simply set h to zero, because the quotient becomes zero over zero. That is exactly why the derivative is defined as a limit. Next, where that limit can fail.",
}
