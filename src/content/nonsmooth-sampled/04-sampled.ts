import type { Section } from '../types'

export const sampledSection: Section = {
  id: 'sampled',
  title: 'Finite-sum objectives and sampled gradients',
  scene: 'sampled',
  focus: 'code',
  slide: `## Finite sums

Many objectives are averages, **f(w) = (1/n) Σ fᵢ(w)**, one term per observation. A full gradient costs n term gradients; a **sampled gradient** uses one.

### The workshop's hourly rate
- Chairs per hour over a shift: 2, 2, 3, 3, 3, 3, 4, 4
- f(w) = (1/8) Σ (w − yᵢ)², minimised at the mean w = 3
- One hour's gradient: 2(w − yᵢ)
- f(3) = 0.5: the hours really do differ

### Two sampled updates from w = 5, α = 0.1
- Hour 1 (y = 2): gradient 6, so w = 4.4
- Hour 7 (y = 4): gradient 0.8, so w = 4.32
- The full step would go to 4.6: same direction, different size

### Why bother
For n in the millions, a sampled step costs one term instead of n. The price is noise: each step points towards one observation's minimum, not the average's.`,
  narration:
    "What if the objective is an average over thousands or millions of observations? Computing its gradient means touching every one of them. Sampled gradients touch one. Take a small version from the workshop: the chairs made in each hour of a shift, two, two, three, three, three, three, four, four. To fit a single hourly rate, minimise the average squared difference, whose minimiser is the mean, three. On the left, the blue curve is that average, and the grey curves are single terms: each one has its minimum at its own hour's count, not at three. One hour's gradient is just two times w minus that hour's count. The code traces two sampled updates from five with a step of a tenth. Sampling hour one, whose count is two, gives a gradient of six and moves w to four point four. Sampling hour seven, with count four, gives a gradient of zero point eight and moves it to four point three two. A full gradient step would have gone to four point six. Each sampled step costs one term instead of eight, or one instead of millions. The price is noise. Next, when that noise is harmless.",
}
