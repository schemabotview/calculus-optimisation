import type { Section } from '../types'

export const transcendentalSection: Section = {
  id: 'exp-log-trig',
  title: 'Exponential, logarithmic and trigonometric derivatives',
  scene: 'transcendental',
  focus: 'sin-cos',
  slide: `## Exponentials, logarithms and trigonometry

These derivatives appear in nearly every model, usually combined with the chain rule.

### The list
- (eˣ)′ = eˣ: the exponential is its own rate of change
- (ln x)′ = 1/x for x > 0
- (sin x)′ = cos x and (cos x)′ = −sin x, **in radians**

### Reading it off the graph
- Where sin x peaks or troughs, its slope is 0, and cos x crosses 0
- At x = 0, sin x has slope cos 0 = 1

### With inner functions
- (e^(kx))′ = k e^(kx): the warm-up's 30 e^(−t/2) came from this

### Watch out
With angles in degrees, every trigonometric derivative picks up a factor π/180.`,
  narration:
    "Which derivatives come up again and again? Those of the exponential, the logarithm, and the trigonometric functions. The exponential is remarkable: its rate of change equals its own value. The natural logarithm has derivative one over x, for positive x. And sine differentiates to cosine, while cosine differentiates to minus sine. The plot shows why. Wherever the sine curve reaches a peak or a trough, it is momentarily flat, and that is exactly where the cosine curve crosses zero. At the origin, sine rises with slope one, and cosine there is one. The derivative's graph is a record of the original's slopes. Combined with the chain rule, these cover most models. The exponential of k x has derivative k times itself, which is where the warm-up rate came from. The logarithm of a function gives its derivative divided by itself: a relative rate of change. One trap. These formulas assume radians. Measure angles in degrees, and every trigonometric derivative picks up a factor of pi over one hundred and eighty. Next, curves that are not functions of x.",
}
