import type { Section } from '../types'

export const trigSubSection: Section = {
  id: 'trig-sub',
  title: 'Trigonometric substitutions and method selection',
  scene: 'trig-sub',
  focus: 'choose',
  narration:
    "Some integrals contain a square root of a squared constant minus x squared. The trick is to let x be a sine. Then one minus x squared becomes one minus sine squared, which is cosine squared, and the root disappears. Take the integral of the square root of one minus x squared from zero to one. With x equal to sine theta, d x is cosine theta d theta, the limits become zero and pi over two, and the integral becomes the integral of cosine squared, which is pi over four. The picture explains why. The curve is the upper unit circle, so the area is a quarter of a disc of radius one: pi over four, about zero point seven eight five. With four techniques in hand, the practical skill is choosing. The table reads the shape of the integrand: a function of g times g prime calls for substitution, a product of unlike types for parts, a rational function for partial fractions, a root for trig. And some integrands, like e to the minus x squared, have no elementary antiderivative at all. Next, integrals over unbounded intervals.",
}
