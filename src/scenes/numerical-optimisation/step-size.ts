import type { Scene } from '@graphlearning/flow'
import { AXES, descent, levels } from './bowl'

// §10.2 — fixed-step gradient descent on f = ½(x² + 10y²): each step multiplies x by 1 − α and y by
// 1 − 10α. Stable iff α < 2/L = 0.2 (L = 10). Iteration counts to ‖∇f‖ < 10⁻⁶ from (3, 1.5) were run in
// numpy: α = 0.05: 291; 0.1: 142; 0.18: 77; 0.21: diverges (|y| grows 1.1× per step).
export const stepSize: Scene = {
  id: 'step-size',
  title: 'Gradient descent and the step size',
  flow: 'TB',
  nodes: [
    {
      id: 'paths',
      kind: 'plot',
      label: 'Gradient descent from (3, 1.5) with three fixed step sizes',
      sub: 'L = 10 is the largest curvature; steps must satisfy α < 2/L = 0.2',
      plot: {
        ...AXES,
        series: [
          ...levels([1, 4, 9, 15.75]),
          { kind: 'line', points: descent(0.05, 40), label: 'α = 0.05: smooth, slow', labelAt: [-2.2, 0.75], color: '#60a5fa' },
          { kind: 'line', points: descent(0.18, 40), label: 'α = 0.18: zigzags, converges', labelAt: [-3.9, -1.25], color: '#34d399' },
          { kind: 'line', points: descent(0.21, 4), label: 'α = 0.21: diverges', labelAt: [-2.4, 2.25], color: '#f472b6' },
        ],
      },
    },
    {
      id: 'factors',
      kind: 'table',
      label: 'Each step multiplies the error by 1 − α × curvature',
      sub: 'iterations to ‖∇f‖ < 10⁻⁶, run in numpy',
      headers: ['α', 'x factor 1 − α', 'y factor 1 − 10α', 'iterations'],
      values: [
        ['0.05', '0.95', '0.5', '291'],
        ['0.1 = 1/L', '0.9', '0', '142'],
        ['0.18', '0.82', '−0.8', '77'],
        ['0.21', '0.79', '−1.1', 'diverges'],
      ],
    },
  ],
  edges: [],
}
