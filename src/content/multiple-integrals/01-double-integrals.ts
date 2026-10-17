import type { Section } from '../types'

export const doubleIntegralsSection: Section = {
  id: 'double-integrals',
  title: 'Double integrals and rectangular sums',
  scene: 'double-sums',
  focus: 'midpoint',
  slide: `## Double integrals

To total a quantity spread over a region, cut the region into small cells, treat the density as constant on each, and add: **∫∫_R f dA = lim Σ f(xᵢ, yⱼ) ΔA**.

### Mass of a panel
- A 2 m × 1 m panel with density ρ = 4 + x²y kg/m²
- It is heavier towards the corner (2, 1), where ρ = 8
- With 4 × 2 cells, the midpoint sum is 9.3125 kg
- The exact mass is 28/3 ≈ **9.3333 kg**

### Same idea as one dimension
- Each term is density × area, so the units are kg
- Doubling the grid both ways cuts the error about 4×
- Continuous f on a closed rectangle is always integrable

### Watch out
The integral of f = 1 is the area of R. For a density, the double integral is a total, like mass; the average density is that total divided by the area: 9.3333/2 = 4.67 kg/m².`,
  narration:
    "This chapter extends accumulation from intervals to regions, and asks how a change of coordinates changes the arithmetic. Start with a panel two metres by one metre, whose density is not constant: four plus x squared y kilograms per square metre, heavier towards one corner. What is its mass? Do what we did in one dimension. Cut the panel into cells, take the density at each cell's midpoint as if it were constant there, multiply by the cell's area, and add. On the left, eight cells, with the orange dots where the density is sampled and coloured curves where it equals five, six and seven. Eight cells give nine point three one kilograms. As the grid is refined the sums close in on twenty eight thirds, about nine point three three, and each doubling of the grid in both directions cuts the error about four times. The limit is the double integral. Every term is a density times an area, so the answer is in kilograms. And integrating the constant one gives the area of the region itself. Next, how to actually compute a double integral, one variable at a time.",
}
