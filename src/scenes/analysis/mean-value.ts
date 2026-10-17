import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §3.1 — mean value theorem for f(x) = x³ − 3x on [0, 2]: average slope (f(2) − f(0))/2 = 1, and
// f′(c) = 3c² − 3 = 1 at c = 2/√3 ≈ 1.155 (solved exactly). The tangent there is parallel to the secant.
const f = (x: number) => x ** 3 - 3 * x
const c = 2 / Math.sqrt(3)

export const meanValue: Scene = {
  id: 'mean-value',
  title: 'The mean value theorem',
  flow: 'TB',
  nodes: [
    {
      id: 'parallel',
      kind: 'plot',
      label: 'f(x) = x³ − 3x on [0, 2]',
      sub: 'somewhere inside, the instantaneous slope equals the average slope 1',
      plot: {
        x: { min: -0.25, max: 2.25, step: 0.5 },
        y: { min: -2.5, max: 2.5, step: 1 },
        series: [
          { kind: 'line', points: sample(-0.1, 2.1, 100, f), label: 'f(x)', labelAt: [1.85, 0.4], color: '#60a5fa' },
          { kind: 'line', points: [[0, 0], [2, 2]], dashed: true, label: 'secant: slope 1', labelAt: [0.25, 0.75], color: '#9ca3af' },
          { kind: 'line', points: sample(c - 1, c + 1, 2, (x) => f(c) + (x - c)), label: 'tangent at c: slope 1', labelAt: [1.3, -2.25], color: '#34d399' },
          { kind: 'marker', at: [c, f(c)], label: 'c = 2/√3 ≈ 1.155', labelAt: [0.25, -1.75], color: '#f472b6' },
        ],
      },
    },
    {
      id: 'hypotheses',
      kind: 'table',
      label: 'The theorems, and the hypotheses doing the work',
      sub: 'they guarantee a point c exists; they do not find it',
      headers: ['theorem', 'needs', 'gives'],
      values: [
        ['Rolle', 'continuous on [a, b], differentiable inside, f(a) = f(b)', "some c with f′(c) = 0"],
        ['mean value', 'continuous on [a, b], differentiable inside', 'f′(c) = (f(b) − f(a))/(b − a)'],
        ['fails: |x| on [−1, 1]', 'not differentiable at 0', 'f(−1) = f(1), yet f′ is never 0'],
        ['consequence', 'f′ = 0 on an interval', 'f is constant there'],
      ],
    },
  ],
  edges: [],
}
