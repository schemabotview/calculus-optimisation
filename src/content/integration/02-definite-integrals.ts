import type { Section } from '../types'

export const definiteIntegralsSection: Section = {
  id: 'definite-integrals',
  title: 'Definite integrals, signed area and units',
  scene: 'signed-area',
  focus: 'regions',
  slide: `## The definite integral

**∫ₐᵇ f(x) dx** is the limit of Riemann sums. Geometrically it is **signed** area: above the axis counts plus, below counts minus.

### Signed, not total
- ∫₀^2π sin x dx = 0: the +2 above and the −2 below cancel
- The area between the curve and the axis is 4
- Which one you want depends on the question

### Units
- Units of the integral = units of f × units of x
- kW over hours gives kWh; m/s over seconds gives m
- A constant: ∫ₐᵇ c dx = c (b − a), a rectangle
- The dx is not decoration: it carries the units of the pieces

### Watch out
Reversing the limits flips the sign: ∫ᵇₐ f = −∫ₐᵇ f. And ∫ₐᵃ f = 0.`,
  narration:
    "What exactly does a definite integral measure? It is the limit of Riemann sums, and geometrically it is a signed area. Where the function is above the axis, the area counts as positive. Where it is below, it counts as negative. On the left, sine from zero to two pi has a hump of area two above the axis and a matching hump of area two below. The integral adds them with their signs, and gets zero. The total area between the curve and the axis is four. Neither number is wrong; they answer different questions, and the next sections return to that difference. Units come along automatically. The integral's units are the function's units times the input's units. Power in kilowatts, integrated over hours, gives kilowatt hours of energy. Velocity in metres per second, integrated over seconds, gives metres. The d x in the notation is not decoration: it is the width of each piece, and it carries the units. And swapping the limits flips the sign. Next, the theorem that makes integrals computable.",
}
