import type { Section } from '../types'

export const differenceQuotients: Section = {
  id: 'difference-quotients',
  title: 'Difference quotients and instantaneous rates',
  scene: 'secants',
  focus: 'quotients',
  slide: `## From average rate to derivative

The **average rate** of f over [a, a + h] is the difference quotient (f(a + h) − f(a))/h: the slope of a secant line.

### Shrinking the interval
- For f(x) = x² at a = 1, the quotient simplifies to 2 + h
- h = 1, 0.5, 0.1, 0.01 give slopes 3, 2.5, 2.1, 2.01
- The limit as h → 0 is **2**: the slope of the tangent
- On the left, the secants swing towards that tangent line

### The derivative
- **f′(a) = lim (f(a + h) − f(a))/h** as h → 0, when the limit exists
- Its units are output units per input unit: chairs per hour, °C per hour
- f′ is itself a function: one slope for each a

### Watch out
The quotient at h = 0 is 0/0. The derivative is a limit precisely because we cannot just set h = 0.`,
  narration:
    "Limits let us define instantaneous change. This chapter derives that change from first principles and then builds the rules for computing it. Start with an average rate: how much a function changes over an interval, divided by the interval's length. On a graph, that is the slope of a secant line. For x squared starting at one, the average rate over an interval of length h simplifies to two plus h. Shrink the interval. Lengths one, one half, one tenth and one hundredth give slopes three, two and a half, two point one, and two point zero one. On the left, the secants swing towards a single line that just touches the curve: the tangent, with slope exactly two. That limit is the derivative. It is the instantaneous rate of change, and its units are output units per input unit. One caution: we cannot simply set h to zero, because the quotient becomes zero over zero. That is exactly why the derivative is defined as a limit. Next, where that limit can fail.",
}
