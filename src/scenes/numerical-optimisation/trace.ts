import type { Scene } from '@graphlearning/flow'
import type { PlotPoint } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §10.8 — damped Newton on the workshop's cost per chair c(q) = F/q + 0.5q + 2 (overhead F = £40), from
// q₀ = 3 with a new machine's capacity of 12. The code card is the script that was run; its printed
// lines are copied from the run. Perturbing F by ±10% moves q* = √(2F) to 8.485 / 9.381.
const c = (F: number) => (q: number) => F / q + 0.5 * q + 2
const ITER = [3, 4.33125, 5.989043, 7.640947, 8.673236, 8.932077, 8.944247, 8.944272]

export const trace: Scene = {
  id: 'trace',
  title: 'An integrated diagnostic trace',
  flow: 'TB',
  nodes: [
    {
      id: 'model',
      kind: 'plot',
      label: 'Cost per chair: Newton iterates, and the model with overhead ±10%',
      sub: 'the optimum moves from 8.94 to 8.49 or 9.38 chairs per hour; the cost there barely changes',
      plot: {
        x: { min: 2, max: 14, step: 1, label: 'q, chairs per hour' },
        y: { min: 9.5, max: 18, step: 1, label: '£ per chair' },
        series: [
          { kind: 'line', points: sample(2.5, 14, 100, c(36)), label: 'overhead £36', labelAt: [12.4, 10.8], color: '#9ca3af' },
          { kind: 'line', points: sample(2.5, 14, 100, c(44)), label: 'overhead £44', labelAt: [12.4, 12.65], color: '#9ca3af' },
          { kind: 'line', points: sample(2.5, 14, 100, c(40)), label: 'c(q), overhead £40', labelAt: [3.1, 17.6], color: '#60a5fa' },
          { kind: 'scatter', points: ITER.map((q): PlotPoint => [q, c(40)(q)]), label: 'Newton iterates from q = 3', labelAt: [5.3, 13.9], color: '#f59e0b' },
        ],
      },
    },
    {
      id: 'code',
      kind: 'code',
      filename: 'trace.py',
      label: `for k in range(7):
    step = -dc(q) / d2c(q)            # Newton step
    a = 1.0
    while c(q + a*step) > c(q) + 1e-4*a*dc(q)*step:
        a /= 2                        # backtrack
    q += a*step
    print(k+1, q, c(q), abs(dc(q)), a, q <= cap)
# 1  4.33125   13.400834  1.6e+00  1.0  True
# 4  8.673236  10.948507  3.2e-02  1.0  True
# 6  8.944247  10.944272  2.8e-06  1.0  True
# 7  8.944272  10.944272  1.2e-11  1.0  True`,
    },
  ],
  edges: [],
}
