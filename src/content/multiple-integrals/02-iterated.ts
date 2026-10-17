import type { Section } from '../types'

export const iteratedSection: Section = {
  id: 'iterated',
  title: 'Iterated integrals and order-change conditions',
  scene: 'iterated',
  focus: 'fubini',
  slide: `## Iterated integrals

A double integral over a rectangle is computed as two single integrals: integrate in y with x held fixed, then integrate the result in x.

### The panel, both ways
- ∫₀¹ (4 + x²y) dy = 4 + x²/2, then ∫₀² gives 28/3
- ∫₀² (4 + x²y) dx = 8 + 8y/3, then ∫₀¹ gives 28/3
- Same answer: the order did not matter

### Fubini's theorem
- If ∫∫ |f| dA is finite, both orders give the double integral
- Continuous f on a bounded rectangle always qualifies
- Then pick whichever order is easier
- Positive f: Tonelli lets you swap freely too

### When the order matters
For f = (x² − y²)/(x² + y²)² on the unit square, integrating y first gives π/4, and x first gives −π/4. Quadrature confirms both. The function blows up at the origin so badly that ∫∫ |f| is infinite, and Fubini does not apply.`,
  narration:
    "How do you compute a double integral without summing millions of cells? Integrate one variable at a time. For the panel, hold x fixed and integrate the density in y from zero to one: that gives four plus x squared over two, the mass per unit length of a thin strip. Then integrate those strips in x from zero to two. The result is twenty eight thirds, as before. Do it in the other order, strips in x first, and you get the same twenty eight thirds. Fubini's theorem says when this is guaranteed: if the integral of the absolute value of f is finite. Continuous functions on bounded rectangles always qualify. Now a function that does not. On the unit square, take x squared minus y squared, over x squared plus y squared, squared. Integrating y first leaves one over one plus x squared, the blue curve, with area pi over four. Integrating x first leaves the pink curve, with area minus pi over four. Quadrature confirms both, so this is not an algebra slip. Near the origin the function is so large that its absolute value has infinite integral. Next, regions that are not rectangles.",
}
