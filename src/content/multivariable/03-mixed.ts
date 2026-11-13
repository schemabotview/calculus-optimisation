import type { Section } from '../types'

export const mixedSection: Section = {
  id: 'mixed',
  title: 'Mixed partials and their interchange conditions',
  scene: 'mixed',
  focus: 'clairaut',
  narration:
    "Does the order in which you take partial derivatives matter? Differentiate in x then y, or in y then x: these are the mixed partials. For almost every formula you will meet, they agree. Take x cubed y squared plus sine of x y. Working through both orders gives the same expression, and at the point one, two both equal nine point seven six five three, which a finite difference confirms. For the workshop, both mixed partials of Q equal one over twenty four at the standard shift: an extra machine hour makes labour hours slightly more productive, and the other way round, by the same amount. Clairaut's theorem says why: if the mixed partials are continuous near a point, they are equal there. The condition matters. For x y times x squared minus y squared, over x squared plus y squared, the slice f x along the y axis is minus y, with slope minus one, and the slice f y along the x axis is x, with slope plus one. So the two orders give minus one and plus one. The mixed partials exist, but are not continuous at the origin. Next, what differentiability means in two dimensions.",
}
