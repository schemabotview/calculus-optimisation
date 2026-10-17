import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §3.3 — three functions with f′(0) = 0 AND f″(0) = 0, and three different behaviours at 0: x³ has an
// inflection, x⁴ a minimum, −x⁴ a maximum. The second-derivative test is silent on all three.
export const concavity: Scene = {
  id: 'concavity',
  title: 'Concavity and the derivative tests',
  flow: 'TB',
  nodes: [
    {
      id: 'flat',
      kind: 'plot',
      label: 'x³, x⁴ and −x⁴: all flat at 0 to second order',
      sub: 'f′(0) = f″(0) = 0 for each, yet the behaviour at 0 differs',
      plot: {
        x: { min: -1.4, max: 1.4, step: 0.5 },
        y: { min: -1.6, max: 1.6, step: 0.5 },
        series: [
          { kind: 'line', points: sample(-1.15, 1.15, 100, (x) => x ** 3), label: 'x³: inflection', labelAt: [0.55, -0.85], color: '#60a5fa' },
          { kind: 'line', points: sample(-1.12, 1.12, 100, (x) => x ** 4), label: 'x⁴: minimum', labelAt: [-1.35, 1.25], color: '#34d399' },
          { kind: 'line', points: sample(-1.12, 1.12, 100, (x) => -(x ** 4)), label: '−x⁴: maximum', labelAt: [-1.35, -1.35], color: '#f472b6' },
          { kind: 'marker', at: [0, 0], color: '#f59e0b' },
        ],
      },
    },
    {
      id: 'tests',
      kind: 'table',
      label: 'What each test can conclude at a critical point c',
      sub: 'f″ > 0: concave up (holds water); f″ < 0: concave down',
      headers: ['test', 'conclusion', 'silent when'],
      values: [
        ['first derivative', 'f′ changes − to +: min; + to −: max', 'f′ does not change sign: neither'],
        ['second derivative', 'f″(c) > 0: min; f″(c) < 0: max', 'f″(c) = 0: no conclusion'],
        ['x³, x⁴, −x⁴ at 0', 'f″(0) = 0 for all three', 'first test decides: none, min, max'],
        ['inflection', 'concavity changes sign', 'x³ at 0'],
      ],
    },
  ],
  edges: [],
}
