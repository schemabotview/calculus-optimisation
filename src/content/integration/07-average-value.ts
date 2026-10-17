import type { Section } from '../types'

export const averageValueSection: Section = {
  id: 'average-value',
  title: 'Average values and energy and distance applications',
  scene: 'average-value',
  focus: 'average',
  slide: `## Average value

The **average value** of f on [a, b] is **(1/(b − a)) ∫ₐᵇ f(x) dx**: the constant height with the same area.

### The shift's average power
- ∫₀⁸ P dt = 34.19 kWh, so the average is 34.19 / 8 = **4.27 kW**
- A machine drawing a steady 4.27 kW would use the same energy
- At £0.30 per kWh, the shift's energy costs £10.26
- Average of a rate = net change ÷ elapsed time

### The average is attained
- If f is continuous, f(c) equals its average for some c (mean value theorem for integrals)
- Here P(t) = 4.27 kW at t ≈ 1.76 h and t ≈ 6.24 h

### Chapter outcome
You can explain a definite integral, apply the fundamental theorem under its assumptions, and interpret accumulated change with correct units.`,
  narration:
    "What single number best summarises a quantity that varies? Its average value: the integral divided by the length of the interval. Geometrically, it is the height of the rectangle with the same area as the region under the curve. For the shift, the energy is thirty four point one nine kilowatt hours over eight hours, so the average power is about four point two seven kilowatts. A machine drawing a steady four point two seven would use exactly the same energy, and at thirty pence per kilowatt hour that energy costs about ten pounds twenty six. For a continuous function, the average is not just a summary; the function actually takes that value somewhere. On the left, the power curve crosses its average twice, at about one and three quarter hours and again at about six and a quarter. That completes the chapter. You can explain a definite integral, apply the fundamental theorem under its conditions, and interpret accumulation with correct units. Next, the fundamental theorem motivates a choice: integrate analytically, or numerically, and how to trust the result.",
}
