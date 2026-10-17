import type { Section } from '../types'

export const mixedSection: Section = {
  id: 'mixed',
  title: 'Mixed partials and their interchange conditions',
  scene: 'mixed',
  focus: 'clairaut',
  slide: `## Mixed partials

Differentiating twice in different inputs gives **mixed partials**: f_xy = ∂/∂y(∂f/∂x) and f_yx = ∂/∂x(∂f/∂y).

### Usually equal
- For g = x³y² + sin(xy): g_xy = g_yx = 6x²y + cos(xy) − xy sin(xy)
- At (1, 2) both are 9.7653; a finite difference agrees
- For Q: Q_LM = Q_ML = 1/(2√(LM)) = 1/24 at the shift

### Clairaut's theorem
- If f_xy and f_yx exist and are **continuous** near a point, they are equal there
- Then the order of differentiation is free
- Smooth formulas built from polynomials, exp and sin satisfy it

### A counterexample
For f = xy(x² − y²)/(x² + y²): f_x(0, y) = −y and f_y(x, 0) = x, so f_xy(0, 0) = −1 but f_yx(0, 0) = +1. The mixed partials exist but are not continuous at the origin.`,
  narration:
    "Does the order in which you take partial derivatives matter? Differentiate in x then y, or in y then x: these are the mixed partials. For almost every formula you will meet, they agree. Take x cubed y squared plus sine of x y. Working through both orders gives the same expression, and at the point one, two both equal nine point seven six five three, which a finite difference confirms. For the workshop, both mixed partials of Q equal one over twenty four at the standard shift: an extra machine hour makes labour hours slightly more productive, and the other way round, by the same amount. Clairaut's theorem says why: if the mixed partials are continuous near a point, they are equal there. The condition matters. For x y times x squared minus y squared, over x squared plus y squared, the slice f x along the y axis is minus y, with slope minus one, and the slice f y along the x axis is x, with slope plus one. So the two orders give minus one and plus one. The mixed partials exist, but are not continuous at the origin. Next, what differentiability means in two dimensions.",
}
