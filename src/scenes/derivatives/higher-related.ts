import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §2.7 — position s(t) = t³ − 6t² + 9t with velocity s′ and acceleration s″ (values computed at
// integer t). The related-rates row: a spill's radius grows at 0.5 cm/s; at r = 4, dA/dt = 4π ≈ 12.57.
const s = (t: number) => t ** 3 - 6 * t * t + 9 * t
const v = (t: number) => 3 * t * t - 12 * t + 9

export const higherRelated: Scene = {
  id: 'higher-related',
  title: 'Higher derivatives and related rates',
  flow: 'TB',
  nodes: [
    {
      id: 'motion',
      kind: 'plot',
      label: 'Position s(t) = t³ − 6t² + 9t and velocity s′(t)',
      sub: 's′ = 0 at t = 1 and t = 3: the object stops and turns',
      plot: {
        x: { min: 0, max: 4.2, step: 0.5, label: 't' },
        y: { min: -4, max: 10, step: 2 },
        series: [
          { kind: 'line', points: sample(0, 4.2, 100, s), label: 's(t)', labelAt: [1.9, 3.0], color: '#60a5fa' },
          { kind: 'line', points: sample(0, 4.2, 100, v), label: 's′(t)', labelAt: [3.7, 6.2], color: '#f59e0b' },
          { kind: 'marker', at: [1, 4], label: 'stop at t = 1', labelAt: [0.55, 5.1], color: '#f472b6' },
          { kind: 'marker', at: [3, 0], label: 'stop at t = 3', labelAt: [3.05, -1.0], color: '#f472b6' },
        ],
      },
    },
    {
      id: 'table',
      kind: 'table',
      label: 'Derivatives of derivatives, and a related rate',
      sub: 's″ is acceleration; related rates use the chain rule in time',
      headers: ['t', 's', 's′ (velocity)', 's″ (acceleration)'],
      values: [
        ['0', '0', '9', '−12'],
        ['1', '4', '0', '−6'],
        ['2', '2', '−3', '0'],
        ['3', '0', '0', '6'],
        ['spill: A = πr²', 'r = 4 cm', 'dr/dt = 0.5 cm/s', 'dA/dt = 2πr dr/dt ≈ 12.57 cm²/s'],
      ],
    },
  ],
  edges: [],
}
