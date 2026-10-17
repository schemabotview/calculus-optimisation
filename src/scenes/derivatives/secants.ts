import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §2.1 — secant slopes of f(x) = x² from x = 1, for shrinking h: (f(1 + h) − f(1))/h = 2 + h. They
// approach the tangent slope 2 (values computed).
const f = (x: number) => x * x
const secant = (h: number) => (x: number) => f(1) + ((f(1 + h) - f(1)) / h) * (x - 1)

export const secants: Scene = {
  id: 'secants',
  title: 'From average to instantaneous rate',
  flow: 'TB',
  nodes: [
    {
      id: 'approach',
      kind: 'plot',
      label: 'Secants of f(x) = x² through (1, 1), as h shrinks',
      sub: 'secant slope (f(1 + h) − f(1))/h = 2 + h → 2',
      plot: {
        x: { min: -0.5, max: 2.5, step: 0.5 },
        y: { min: -1, max: 4.5, step: 1 },
        series: [
          { kind: 'line', points: sample(-0.5, 2.1, 80, f), label: 'f(x) = x²', labelAt: [-0.45, 0.6], color: '#60a5fa' },
          { kind: 'line', points: sample(0.2, 2.3, 2, secant(1)), dashed: true, label: 'h = 1: slope 3', labelAt: [1.35, 4.2], color: '#9ca3af' },
          { kind: 'line', points: sample(0.2, 2.3, 2, secant(0.5)), dashed: true, label: 'h = 0.5: slope 2.5', labelAt: [2.0, 2.4], color: '#f59e0b' },
          { kind: 'line', points: sample(0.1, 2.3, 2, (x) => 1 + 2 * (x - 1)), label: 'tangent: slope 2', labelAt: [1.75, 1.2], color: '#34d399' },
          { kind: 'marker', at: [1, 1], label: '(1, 1)', labelAt: [0.55, 1.25], color: '#f472b6' },
        ],
      },
    },
    {
      id: 'quotients',
      kind: 'table',
      label: 'Difference quotients at x = 1',
      sub: 'f′(1) = lim (f(1 + h) − f(1))/h as h → 0',
      headers: ['h', '(f(1 + h) − f(1))/h', 'meaning'],
      values: [
        ['1', '3', 'average rate over [1, 2]'],
        ['0.5', '2.5', 'average rate over [1, 1.5]'],
        ['0.1', '2.1', ''],
        ['0.01', '2.01', ''],
        ['h → 0', '2', 'instantaneous rate f′(1)'],
      ],
    },
  ],
  edges: [],
}
