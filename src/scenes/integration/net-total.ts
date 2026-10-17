import type { Scene } from '@graphlearning/flow'
import type { PlotPoint } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §4.6 — velocity v(t) = t² − 4t + 3 on [0, 4]. Net change ∫v = 4/3; total distance ∫|v| = 4, from three
// pieces of 4/3 each (computed with quad, split at the sign changes t = 1, 3).
const v = (t: number) => t * t - 4 * t + 3
const piece = (a: number, b: number): PlotPoint[] => [...sample(a, b, 40, v), [b, 0], [a, 0]]

export const netTotal: Scene = {
  id: 'net-total',
  title: 'Net change versus total accumulation',
  flow: 'TB',
  nodes: [
    {
      id: 'velocity',
      kind: 'plot',
      label: 'Velocity v(t) = t² − 4t + 3 m/s for 4 seconds',
      sub: 'forward on [0, 1] and [3, 4]; backward on [1, 3]',
      plot: {
        x: { min: 0, max: 4.25, step: 0.5, label: 't (s)' },
        y: { min: -1.5, max: 3.5, step: 0.5, label: 'v (m/s)' },
        series: [
          { kind: 'line', points: piece(0, 1), label: '+4/3', labelAt: [0.15, 0.6], color: '#34d399' },
          { kind: 'line', points: piece(1, 3), label: '−4/3', labelAt: [1.75, -0.55], color: '#f472b6' },
          { kind: 'line', points: piece(3, 4), label: '+4/3', labelAt: [3.45, 0.6], color: '#34d399' },
          { kind: 'line', points: sample(0, 4.2, 100, v), label: 'v(t)', labelAt: [3.85, 3.2], color: '#60a5fa' },
        ],
      },
    },
    {
      id: 'compare',
      kind: 'table',
      label: 'Two different questions, two different integrals',
      sub: 'computed; split |v| where v changes sign',
      headers: ['question', 'integral', 'value'],
      values: [
        ['where did it end up? (displacement)', '∫₀⁴ v(t) dt', '4/3 m'],
        ['how far did it travel? (distance)', '∫₀⁴ |v(t)| dt', '4 m'],
        ['pieces of |v|', '4/3 + 4/3 + 4/3', 'v < 0 on (1, 3)'],
        ['workshop', 'net energy vs energy drawn', 'differ if power can flow back'],
      ],
    },
  ],
  edges: [],
}
