import type { Section } from '../types'

export const riemannSumsSection: Section = {
  id: 'riemann-sums',
  title: 'Riemann sums, partitions and integrability',
  scene: 'riemann',
  focus: 'sums',
  slide: `## Riemann sums

To total a quantity that changes, cut the interval into pieces, treat each piece as constant, and add.

### Energy from power
- The machine draws P(t) = 3 + 2 sin(πt/8) kW over 8 hours
- Energy ≈ Σ P(tᵢ) Δt: power times time, piece by piece
- Each rectangle on the left is one piece of the sum

### Partitions and sample points
- Left, right or midpoint values give different sums
- With 4 pieces the midpoint sum is 34.45; with 64 it is 34.187
- The exact energy is 24 + 32/π ≈ **34.186 kWh**
- Midpoint error falls about 4× per doubling of n

### Integrable
f is **integrable** when every way of refining the pieces gives the same limit. Continuous functions on [a, b] always are.`,
  narration:
    "Integration answers the question that derivatives leave open: how much has accumulated? This chapter connects accumulation, signed area and antiderivatives, under explicit conditions. Start with the workshop's machine. Its power draw rises and falls over the shift, from three kilowatts up to five and back. If power were constant, energy would just be power times time. It is not, so cut the shift into short pieces, treat the power as constant on each, and add up power times duration. Each rectangle on the left is one such piece. With four pieces and midpoint heights, the total is about thirty four point four five kilowatt hours. With sixty four pieces it is thirty four point one eight seven. The sums close in on a single number, twenty four plus thirty two over pi, about thirty four point one nine. When every refinement gives the same limit, the function is integrable, and continuous functions on a closed interval always are. Next, what that limit means, and its units.",
}
