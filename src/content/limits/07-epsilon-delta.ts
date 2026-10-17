import type { Section } from '../types'

export const epsilonDeltaSection: Section = {
  id: 'epsilon-delta',
  title: 'An epsilon–delta argument and sampled evidence',
  scene: 'epsilon-delta',
  focus: 'band',
  slide: `## What a limit claim says

**lim f(x) = L as x → a** means: for every tolerance ε > 0 there is a δ > 0 such that 0 < |x − a| < δ forces |f(x) − L| < ε. Every ε, however small, must get its δ.

### A complete small argument
- Claim: 2x + 1 → 7 as x → 3
- |(2x + 1) − 7| = 2 |x − 3|, so choose δ = ε/2
- On the left, ε = 1 and δ = 0.5: the graph stays inside the band

### Samples are not a proof
- sin(π/x) at x = 1/n is 0 for every n; at x = 2/(4n + 1) it is 1
- Each sample set "shows" a limit; in fact there is none
- A limit concerns **every** x near a, not a chosen sequence

### Chapter outcome
You can state a model's domain, units and assumptions, explain limits and continuity, and apply the existence theorems.`,
  narration:
    "What exactly are we claiming when we say a limit exists? The precise version is a challenge and a response. Someone names a tolerance epsilon around the limit value. We must answer with a distance delta, so that every x within delta of the point, other than the point itself, gives f of x within epsilon of the limit. For two x plus one approaching seven as x approaches three, the gap is exactly twice the distance from three, so delta equal to half of epsilon always works. On the left, with epsilon equal to one, the strip of half-width one half keeps the graph inside the band. This matters for evidence. Sample sine of pi over x at one over n, and every value is zero. Sample it at a different sequence, and every value is one. Each set of samples suggests a limit, but the function oscillates forever near zero and has none. That completes the chapter. Next, limits make instantaneous change definable, and we derive and compute that change.",
}
