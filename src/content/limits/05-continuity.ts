import type { Section } from '../types'

export const continuitySection: Section = {
  id: 'continuity',
  title: 'Continuity, discontinuities and domain boundaries',
  scene: 'continuity',
  focus: 'kinds',
  slide: `## Continuity

f is **continuous at a** when three things hold: f(a) is defined, lim f(x) as x → a exists, and the two are equal.

### Three kinds of failure
- **Removable**: a hole; redefining one value repairs it
- **Jump**: one-sided limits differ, like a tariff switching at a set hour
- **Infinite**: the values grow without bound near a vertical asymptote

### What continuity buys
- Sums, products, quotients and compositions of continuous functions are continuous, where defined
- Polynomials, eˣ, sin and cos are continuous everywhere; ln x on x > 0
- So most model functions are continuous wherever they are defined

### At the edge of a domain
Only one side exists, so continuity there is **one-sided**: q(t) = 3t is continuous on all of [0, 8].`,
  narration:
    "When can we trust a function to have no surprises? When it is continuous. Continuity at a point needs three things: the function has a value there, the limit exists there, and the two agree. The graph on the left breaks the rule in all three ways it can. At x equals one there is a hole. The limit exists, but the value is missing, so redefining a single point would repair it. At x equals three there is a jump: the left and right limits disagree, as when a workshop's electricity price switches at a fixed hour. No single value can fix that. And at x equals five the values shoot off to infinity, so no limit exists at all. The good news is that continuity is preserved by the usual operations. Sums, products, compositions and quotients of continuous functions are continuous wherever they are defined. At the edge of a domain only one side exists, so continuity there is one-sided, and the shift model is continuous on its whole closed interval. Next, what continuity guarantees.",
}
