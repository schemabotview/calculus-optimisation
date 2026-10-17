import type { Section } from '../types'

export const concavitySection: Section = {
  id: 'concavity-tests',
  title: 'Concavity, inflection and the derivative tests',
  scene: 'concavity',
  focus: 'flat',
  slide: `## Concavity and the derivative tests

The second derivative measures bending: **f″ > 0 is concave up**, **f″ < 0 is concave down**. An **inflection point** is where the bending changes sign.

### Two tests at a critical point c
- **First derivative test**: f′ changing from − to + gives a minimum; from + to − a maximum
- **Second derivative test**: f″(c) > 0 gives a minimum; f″(c) < 0 a maximum
- If f″(c) = 0, the second test says **nothing**

### Three functions, flat at 0
- x³, x⁴ and −x⁴ all have f′(0) = 0 and f″(0) = 0
- x³ has an inflection, x⁴ a minimum, −x⁴ a maximum
- Only the first derivative test, or a higher-order look, separates them

### Watch out
"f″(c) = 0 means inflection" is false: x⁴ has f″(0) = 0 and a minimum there.`,
  narration:
    "Once we have a critical point, how do we know what kind it is? The second derivative measures bending. Positive means the graph curves upward, like a cup. Negative means it curves downward, like a cap. Where the bending switches sign, the graph has an inflection point. Two tests use this. The first derivative test looks at the sign of the slope on either side: falling then rising means a minimum, rising then falling means a maximum. The second derivative test checks the bending at the point itself: cupped up means a minimum, capped down means a maximum. But when the second derivative is zero, the second test is silent. On the left are three functions that defeat it. X cubed, x to the fourth and minus x to the fourth all have zero first and second derivatives at the origin. Yet the first has an inflection, the second a minimum, and the third a maximum. Only the first derivative test, or looking at higher derivatives, tells them apart. Next, from local candidates to global answers.",
}
