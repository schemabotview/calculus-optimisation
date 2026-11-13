import type { Section } from '../types'

export const sampledSection: Section = {
  id: 'sampled',
  title: 'Finite-sum objectives and sampled gradients',
  scene: 'sampled',
  focus: 'code',
  narration:
    "What if the objective is an average over thousands or millions of observations? Computing its gradient means touching every one of them. Sampled gradients touch one. Take a small version from the workshop: the chairs made in each hour of a shift, two, two, three, three, three, three, four, four. To fit a single hourly rate, minimise the average squared difference, whose minimiser is the mean, three. On the left, the blue curve is that average, and the grey curves are single terms: each one has its minimum at its own hour's count, not at three. One hour's gradient is just two times w minus that hour's count. The code traces two sampled updates from five with a step of a tenth. Sampling hour one, whose count is two, gives a gradient of six and moves w to four point four. Sampling hour seven, with count four, gives a gradient of zero point eight and moves it to four point three two. A full gradient step would have gone to four point six. Each sampled step costs one term instead of eight, or one instead of millions. The price is noise. Next, when that noise is harmless.",
}
