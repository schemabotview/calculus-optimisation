import type { Section } from '../types'

export const epsilonDeltaSection: Section = {
  id: 'epsilon-delta',
  title: 'An epsilon–delta argument and sampled evidence',
  scene: 'epsilon-delta',
  focus: 'band',
  narration:
    "What exactly are we claiming when we say a limit exists? The precise version is a challenge and a response. Someone names a tolerance epsilon around the limit value. We must answer with a distance delta, so that every x within delta of the point, other than the point itself, gives f of x within epsilon of the limit. For two x plus one approaching seven as x approaches three, the gap is exactly twice the distance from three, so delta equal to half of epsilon always works. On the left, with epsilon equal to one, the strip of half-width one half keeps the graph inside the band. This matters for evidence. Sample sine of pi over x at one over n, and every value is zero. Sample it at a different sequence, and every value is one. Each set of samples suggests a limit, but the function oscillates forever near zero and has none. That completes the chapter. Next, limits make instantaneous change definable, and we derive and compute that change.",
}
