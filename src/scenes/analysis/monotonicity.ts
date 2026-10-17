import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §3.2 — the sign of f′ decides where f rises or falls. f(x) = x³ − 3x has f′ = 3x² − 3, zero at ±1;
// the sign chart reads off the rise–fall–rise pattern.
const f = (x: number) => x ** 3 - 3 * x
const df = (x: number) => 3 * x * x - 3

export const monotonicity: Scene = {
  id: 'monotonicity',
  title: 'Increasing, decreasing and critical points',
  flow: 'TB',
  nodes: [
    {
      id: 'signs',
      kind: 'plot',
      label: 'f(x) = x³ − 3x and f′(x) = 3x² − 3',
      sub: 'f rises where f′ > 0 and falls where f′ < 0',
      plot: {
        x: { min: -2.2, max: 2.2, step: 0.5 },
        y: { min: -3.5, max: 6, step: 1 },
        series: [
          { kind: 'line', points: sample(-2.2, 2.2, 120, f), label: 'f(x)', labelAt: [1.75, 0.2], color: '#60a5fa' },
          { kind: 'line', points: sample(-2.2, 2.2, 120, df), label: 'f′(x)', labelAt: [1.55, 4.2], color: '#f59e0b' },
          { kind: 'marker', at: [-1, 2], label: 'f′(−1) = 0', labelAt: [-2.15, 2.9], color: '#f472b6' },
          { kind: 'marker', at: [1, -2], label: 'f′(1) = 0', labelAt: [0.55, -2.7], color: '#f472b6' },
        ],
      },
    },
    {
      id: 'sign-chart',
      kind: 'table',
      label: 'Sign chart for f′(x) = 3(x − 1)(x + 1)',
      sub: 'critical points: where f′ = 0 or f′ does not exist',
      headers: ['interval', 'sign of f′', 'f is'],
      values: [
        ['x < −1', '+', 'increasing'],
        ['−1 < x < 1', '−', 'decreasing'],
        ['x > 1', '+', 'increasing'],
        ['x = ±1', '0', 'critical: candidates, not yet conclusions'],
      ],
    },
  ],
  edges: [],
}
