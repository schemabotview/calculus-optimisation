import type { Section } from '../types'

export const riemannSumsSection: Section = {
  id: 'riemann-sums',
  title: 'Riemann sums, partitions and integrability',
  scene: 'riemann',
  focus: 'sums',
  narration:
    "Integration answers the question that derivatives leave open: how much has accumulated? This chapter connects accumulation, signed area and antiderivatives, under explicit conditions. Start with the workshop's machine. Its power draw rises and falls over the shift, from three kilowatts up to five and back. If power were constant, energy would just be power times time. It is not, so cut the shift into short pieces, treat the power as constant on each, and add up power times duration. Each rectangle on the left is one such piece. With four pieces and midpoint heights, the total is about thirty four point four five kilowatt hours. With sixty four pieces it is thirty four point one eight seven. The sums close in on a single number, twenty four plus thirty two over pi, about thirty four point one nine. When every refinement gives the same limit, the function is integrable, and continuous functions on a closed interval always are. Next, what that limit means, and its units.",
}
