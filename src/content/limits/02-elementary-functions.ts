import type { Section } from '../types'

export const elementaryFunctionsSection: Section = {
  id: 'elementary-functions',
  title: 'Elementary functions, composition and notation',
  scene: 'elementary',
  focus: 'warm-up',
  slide: `## Elementary functions and composition

A small family of functions covers most models: powers, **exponentials**, **logarithms**, and **trigonometric** functions.

### A quick refresher
- eˣ grows by a fixed factor per unit step; e ≈ 2.718
- ln x undoes it: ln(eˣ) = x, defined only for x > 0
- sin and cos take angles in **radians**: π radians = 180°

### Composition
- f(g(x)) feeds the output of g into f
- The machine's warm-up T(t) = 20 + 60(1 − e^(−t/2)) composes an exponential with linear maps
- It starts at 20 °C and approaches 80 °C; after 2 hours it is about 57.9 °C

### Watch out
Composition can shrink the domain: ln(x − 1) needs x > 1, and √(4 − x²) needs −2 ≤ x ≤ 2.`,
  narration:
    "Which functions do we need? A short list covers most models: powers, exponentials, logarithms and the trigonometric functions. The exponential e to the x multiplies by the same factor for every unit step, so it describes steady growth or decay. The natural logarithm undoes it, and it is defined only for positive inputs. Sine and cosine take angles in radians, where pi radians is a half turn. Real models combine these by composition: the output of one function becomes the input of another. On the left, the machine's temperature during warm-up is twenty plus sixty times one minus e to the minus t over two. It starts at twenty degrees, climbs quickly, and levels off towards eighty. After two hours it reads about fifty eight degrees. Composition has a cost. The inner function's output must lie in the outer function's domain, so the logarithm of x minus one needs x above one, and a square root needs a nonnegative input. Next, what happens near a point where a function is undefined.",
}
