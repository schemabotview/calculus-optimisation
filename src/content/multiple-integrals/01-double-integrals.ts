import type { Section } from '../types'

export const doubleIntegralsSection: Section = {
  id: 'double-integrals',
  title: 'Double integrals and rectangular sums',
  scene: 'double-sums',
  focus: 'midpoint',
  narration:
    "This chapter extends accumulation from intervals to regions, and asks how a change of coordinates changes the arithmetic. Start with a panel two metres by one metre, whose density is not constant: four plus x squared y kilograms per square metre, heavier towards one corner. What is its mass? Do what we did in one dimension. Cut the panel into cells, take the density at each cell's midpoint as if it were constant there, multiply by the cell's area, and add. On the left, eight cells, with the orange dots where the density is sampled and coloured curves where it equals five, six and seven. Eight cells give nine point three one kilograms. As the grid is refined the sums close in on twenty eight thirds, about nine point three three, and each doubling of the grid in both directions cuts the error about four times. The limit is the double integral. Every term is a density times an area, so the answer is in kilograms. And integrating the constant one gives the area of the region itself. Next, how to actually compute a double integral, one variable at a time.",
}
