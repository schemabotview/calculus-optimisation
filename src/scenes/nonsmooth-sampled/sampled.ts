import { board, fact, facts } from '../frame'
import { sample } from '../plot-kit'

// §12.4 — chairs made in each hour of a shift, y = (2, 2, 3, 3, 3, 3, 4, 4). Fit one rate w by
// f(w) = (1/8) Σ (w − yᵢ)², minimiser 3 (the mean), f(3) = 0.5. Two sampled updates from w = 5 with α = 0.1
// (hours 1 and 7) were run with the code shown; the full-gradient step would go to 4.6.
const Y = [2, 2, 3, 3, 3, 3, 4, 4]
const full = (w: number) => Y.reduce((s, y) => s + (w - y) ** 2, 0) / Y.length
export const sampled = board({
  id: 'sampled',
  figure: 'Finite sums and sampled gradients',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'terms',
      title: 'f(w) = average of eight hourly terms (w − yᵢ)²',
      x: { min: 1, max: 5.5, step: 0.5, label: 'w, chairs per hour' },
      y: { min: 0, max: 9, step: 1 },
      series: [
        {
          kind: 'line',
          points: sample(1, 5.5, 60, (w) => (w - 2) ** 2),
          label: 'hours with y = 2',
          labelAt: [4.0063, 8.1],
          tone: 'neutral'
        },
        {
          kind: 'line',
          points: sample(1, 5.5, 60, (w) => (w - 4) ** 2),
          label: 'y = 4',
          labelAt: [1.1, 8.1],
          tone: 'neutral'
        },
        {
          kind: 'line',
          points: sample(1, 5.5, 60, full),
          label: 'full f(w)',
          labelAt: [3.2374, 0.93571],
          tone: 'ingest'
        },
        {
          kind: 'scatter',
          points: [[5, full(5)]],
          label: 'w₀ = 5',
          labelAt: [5.08, 4.1],
          tone: 'infra'
        },
        {
          kind: 'scatter',
          points: [[4.4, full(4.4)]],
          label: 'w₁ = 4.4',
          labelAt: [4.2063, 3.1],
          tone: 'serve'
        },
        {
          kind: 'scatter',
          points: [[4.32, full(4.32)]],
          label: 'w₂ = 4.32',
          labelAt: [3.7, 1.75],
          tone: 'serve'
        },
      ]
    },
    {
      type: 'code',
      id: 'code',
      filename: 'sampled.py',
      code: `y = np.array([2., 2, 3, 3, 3, 3, 4, 4])  # chairs/hour
f = lambda w: np.mean((w - y)**2)       # full objective
g_i = lambda w, i: 2 * (w - y[i])       # one hour's gradient
w, alpha = 5.0, 0.1
for i in (0, 6):                        # hours 1 and 7
    g = g_i(w, i); w = w - alpha * g
    print(i + 1, g, w, f(w))
# 1  6.0  4.4   2.46
# 7  0.8  4.32  2.2424    full step: 5 - 0.1*4 = 4.6`
    },
  ],
  idea: 'Finite-sum objectives and sampled gradients',
  board: [
    fact('b-rule', 'f(w) = (1/n) Σ fᵢ(w): an average over observations', 'full gradient: n terms; sampled: one'),
    facts('b-1', 'The hourly rate', ['2, 2, 3, 3, 3, 3, 4, 4 chairs', 'minimised at the mean, 3', 'one hour: 2(w − yᵢ)', 'f(3) = 0.5']),
    facts('b-2', 'Two sampled steps', ['from 5, α = 0.1', 'hour 1: w = 4.4', 'hour 7: w = 4.32', 'full step: 4.6']),
    fact('b-3', 'Why bother', 'n in the millions: one term per step instead of n, at the price of noise'),
  ]
})
