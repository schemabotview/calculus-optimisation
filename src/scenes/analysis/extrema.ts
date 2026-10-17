import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §3.4 — global extrema on a closed interval: compare ALL candidates. g(x) = x³ − 3x on [−2, 2.5]:
// stationary points ±1 and endpoints −2, 2.5 (values computed). The global max is an endpoint; the
// global min (−2) is attained twice, at x = −2 and x = 1.
const g = (x: number) => x ** 3 - 3 * x

export const extrema: Scene = {
  id: 'extrema',
  title: 'Local and global extrema',
  flow: 'TB',
  nodes: [
    {
      id: 'candidates',
      kind: 'plot',
      label: 'g(x) = x³ − 3x on the closed interval [−2, 2.5]',
      sub: 'every candidate marked: stationary points and both endpoints',
      plot: {
        x: { min: -2.25, max: 2.75, step: 0.5 },
        y: { min: -3, max: 9, step: 1 },
        series: [
          { kind: 'line', points: sample(-2, 2.5, 120, g), label: 'g(x)', labelAt: [1.75, 0.9], color: '#60a5fa' },
          { kind: 'marker', at: [-2, -2], label: 'endpoint −2', labelAt: [-2.2, -2.75], color: '#f59e0b' },
          { kind: 'marker', at: [-1, 2], label: 'local max 2', labelAt: [-1.45, 2.8], color: '#f472b6' },
          { kind: 'marker', at: [1, -2], label: 'local min −2', labelAt: [0.55, -2.75], color: '#f472b6' },
          { kind: 'marker', at: [2.5, 8.125], label: 'global max 8.125', labelAt: [1.2, 8.4], color: '#34d399' },
        ],
      },
    },
    {
      id: 'compare',
      kind: 'table',
      label: 'The closed-interval method: evaluate every candidate',
      sub: 'stationary points, nonsmooth points, and endpoints',
      headers: ['candidate', 'why', 'g', 'verdict'],
      values: [
        ['x = −2', 'endpoint', '−2', 'global min (tied)'],
        ['x = −1', 'g′ = 0', '2', 'local max only'],
        ['x = 1', 'g′ = 0', '−2', 'global min (tied)'],
        ['x = 2.5', 'endpoint', '8.125', 'global max'],
        ['corners', 'g′ undefined', 'none here', 'must be listed when present'],
      ],
    },
  ],
  edges: [],
}
