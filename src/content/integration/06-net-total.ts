import type { Section } from '../types'

export const netTotalSection: Section = {
  id: 'net-versus-total',
  title: 'Net change versus total accumulated magnitude',
  scene: 'net-total',
  focus: 'compare',
  slide: `## Net change versus total

The integral of a rate gives the **net change**. The integral of its absolute value gives the **total** amount, regardless of direction.

### A moving object, v(t) = t² − 4t + 3
- It moves forward on [0, 1], backward on [1, 3], forward again on [3, 4]
- **Displacement** ∫₀⁴ v dt = 4/3 m: where it ends up
- **Distance** ∫₀⁴ |v| dt = 4/3 + 4/3 + 4/3 = **4 m**: how far it travelled

### Computing a total
- Find where the rate changes sign: here t = 1 and t = 3
- Integrate each piece separately and add the absolute values

### In the workshop
Net and total energy agree only if power never flows back. With regenerative braking, they differ.

### Watch out
Average velocity is 1/3 m/s; average speed is 1 m/s.`,
  narration:
    "Does an integral tell you how far something went, or where it ended up? Those are different questions. Take an object moving along a line with velocity t squared minus four t plus three. It moves forward for the first second, backward for the next two, then forward again. Integrating the velocity adds the forward pieces and subtracts the backward one. The result, four thirds of a metre, is the displacement: where the object finishes, relative to where it started. Integrating the absolute value of the velocity counts every piece as positive. The three pieces are each four thirds, so the distance travelled is four metres. To compute a total, find where the rate changes sign, integrate each piece separately, and add the sizes. In the workshop the same distinction appears with energy. If power can flow back into the supply, net energy and total energy drawn are different numbers, and a bill depends on which one is meant. Averages split the same way: an average velocity of one third, against an average speed of one. Next, averages in general.",
}
