import type { Section } from '../types'

export const existenceSection: Section = {
  id: 'existence',
  title: 'Strict and strong convexity and existence and uniqueness limits',
  scene: 'convex-existence',
  focus: 'claims',
  slide: `## Strict and strong convexity

Convexity makes local minima global. It does **not** promise that a minimiser exists, or that only one does.

### Three strengths
- **Convex**: chords on or above the graph; flat pieces allowed
- **Strictly convex**: chords strictly above; no flat pieces
- **Strongly convex**: f″ ≥ m > 0, curvature bounded away from 0

### What each guarantees
- Strict: at most one minimiser, but maybe none
- eˣ is strictly convex with infimum 0, never attained
- Strong on ℝⁿ: exactly one minimiser exists
- x² is strongly convex (m = 2): unique minimiser 0

### Watch out
max(0, |x| − 1)² is convex but flat on [−1, 1], so every point there is a minimiser. A solver may return any of them; reporting "the" solution claims a uniqueness the problem does not have.`,
  narration:
    "Convexity tells you a local minimum is global. Does it tell you a minimum exists, and that there is only one? No, and the gap matters in practice. There are three strengths. Convex allows flat pieces. Strictly convex forbids them: every chord lies strictly above the graph. Strongly convex goes further and bounds the curvature away from zero. Each says something different. On the left, e to the x, in pink, is strictly convex, but it decreases forever toward zero without reaching it, so there is no minimiser at all. Strict convexity only promises at most one. x squared, in blue, is strongly convex, with curvature at least two everywhere, and strong convexity guarantees that exactly one minimiser exists. The green function is convex but flat on the whole interval from minus one to one: every point there is a minimiser. A solver asked to minimise it will return one of them, and which one depends on where it started. So before reporting a solution as the answer, check what the problem's convexity actually guarantees: existence, uniqueness, both, or neither. Next, writing problems in convex form.",
}
