import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §2.8 — the tangent line to √x at 4, L(x) = 2 + (x − 4)/4, as an approximation. Errors computed:
// tiny near 4, growing with distance — the approximation is local.
export const linearisation: Scene = {
  id: 'linearisation',
  title: 'Linearisation and its limits',
  flow: 'TB',
  nodes: [
    {
      id: 'tangent-model',
      kind: 'plot',
      label: '√x and its linearisation at x = 4',
      sub: 'L(x) = √4 + (1/(2√4))(x − 4) = 2 + (x − 4)/4',
      plot: {
        x: { min: 0, max: 10, step: 1 },
        y: { min: 0, max: 3.6, step: 0.5 },
        series: [
          { kind: 'line', points: sample(0, 10, 120, Math.sqrt), label: '√x', labelAt: [7.3, 2.45], color: '#60a5fa' },
          { kind: 'line', points: sample(0, 10, 2, (x) => 2 + (x - 4) / 4), label: 'L(x)', labelAt: [7.3, 3.2], color: '#f59e0b' },
          { kind: 'marker', at: [4, 2], label: '(4, 2)', labelAt: [3.4, 2.25], color: '#34d399' },
          { kind: 'segment', from: [9, 3], to: [9, 3.25], label: 'error 0.25 at x = 9', labelAt: [7.1, 3.45], color: '#f472b6' },
        ],
      },
    },
    {
      id: 'errors',
      kind: 'table',
      label: 'Approximation error grows with distance',
      sub: 'computed: L(x) − √x',
      headers: ['x', '√x', 'L(x)', 'error'],
      values: [
        ['4.1', '2.02485', '2.025', '0.00015'],
        ['4.5', '2.12132', '2.125', '0.0037'],
        ['5', '2.23607', '2.25', '0.014'],
        ['9', '3', '3.25', '0.25'],
      ],
    },
  ],
  edges: [],
}
