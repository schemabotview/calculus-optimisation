import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §12.4 — chairs made in each hour of a shift, y = (2, 2, 3, 3, 3, 3, 4, 4). Fit one rate w by
// f(w) = (1/8) Σ (w − yᵢ)², minimiser 3 (the mean), f(3) = 0.5. Two sampled updates from w = 5 with α = 0.1
// (hours 1 and 7) were run with the code shown; the full-gradient step would go to 4.6.
const Y = [2, 2, 3, 3, 3, 3, 4, 4]
const full = (w: number) => Y.reduce((s, y) => s + (w - y) ** 2, 0) / Y.length

export const sampled: Scene = {
  id: 'sampled',
  title: 'Finite sums and sampled gradients',
  flow: 'TB',
  nodes: [
    {
      id: 'terms',
      kind: 'plot',
      label: 'f(w) = average of eight hourly terms (w − yᵢ)²',
      sub: 'one sampled hour gives one term, and its gradient points to that hour, not to the average',
      plot: {
        x: { min: 1, max: 5.5, step: 0.5, label: 'w, chairs per hour' },
        y: { min: 0, max: 9, step: 1 },
        series: [
          { kind: 'line', points: sample(1, 5.5, 60, (w) => (w - 2) ** 2), label: 'hours with y = 2', labelAt: [4.05, 8.5], color: '#9ca3af' },
          { kind: 'line', points: sample(1, 5.5, 60, (w) => (w - 4) ** 2), label: 'y = 4', labelAt: [1.1, 8.5], color: '#9ca3af' },
          { kind: 'line', points: sample(1, 5.5, 60, full), label: 'full f(w): minimum 0.5 at w = 3', labelAt: [3.15, 0.55], color: '#60a5fa' },
          { kind: 'marker', at: [5, full(5)], label: 'w₀ = 5', labelAt: [5.08, 4.1], color: '#f59e0b' },
          { kind: 'marker', at: [4.4, full(4.4)], label: 'w₁ = 4.4', labelAt: [4.25, 3.1], color: '#f472b6' },
          { kind: 'marker', at: [4.32, full(4.32)], label: 'w₂ = 4.32', labelAt: [3.7, 1.75], color: '#f472b6' },
        ],
      },
    },
    {
      id: 'code',
      kind: 'code',
      filename: 'sampled.py',
      label: `y = np.array([2., 2, 3, 3, 3, 3, 4, 4])  # chairs/hour
f = lambda w: np.mean((w - y)**2)       # full objective
g_i = lambda w, i: 2 * (w - y[i])       # one hour's gradient
w, alpha = 5.0, 0.1
for i in (0, 6):                        # hours 1 and 7
    g = g_i(w, i); w = w - alpha * g
    print(i + 1, g, w, f(w))
# 1  6.0  4.4   2.46
# 7  0.8  4.32  2.2424    full step: 5 - 0.1*4 = 4.6`,
    },
  ],
  edges: [],
}
