import type { Section } from '../types'

export const elementaryFunctionsSection: Section = {
  id: 'elementary-functions',
  title: 'Elementary functions, composition and notation',
  scene: 'elementary',
  focus: 'warm-up',
  narration:
    "Which functions do we need? A short list covers most models: powers, exponentials, logarithms and the trigonometric functions. The exponential e to the x multiplies by the same factor for every unit step, so it describes steady growth or decay. The natural logarithm undoes it, and it is defined only for positive inputs. Sine and cosine take angles in radians, where pi radians is a half turn. Real models combine these by composition: the output of one function becomes the input of another. On the left, the machine's temperature during warm-up is twenty plus sixty times one minus e to the minus t over two. It starts at twenty degrees, climbs quickly, and levels off towards eighty. After two hours it reads about fifty eight degrees. Composition has a cost. The inner function's output must lie in the outer function's domain, so the logarithm of x minus one needs x above one, and a square root needs a nonnegative input. Next, what happens near a point where a function is undefined.",
}
