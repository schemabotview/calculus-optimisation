import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §1.4 — f(x) = (2x + 1)/(x − 1): vertical asymptote x = 1, horizontal asymptote y = 2. The table's
// indeterminate-form limits were checked numerically (values at large/small x computed).
const f = (x: number) => (2 * x + 1) / (x - 1)

export const limitsInfinity: Scene = {
  id: 'limits-infinity',
  title: 'Limits at infinity and asymptotes',
  flow: 'TB',
  nodes: [
    {
      id: 'asymptotes',
      kind: 'plot',
      label: 'f(x) = (2x + 1)/(x − 1)',
      sub: 'dashed: the asymptotes x = 1 and y = 2',
      plot: {
        x: { min: -6, max: 8, step: 2 },
        y: { min: -8, max: 10, step: 2 },
        series: [
          { kind: 'line', points: [[1, -8], [1, 10]], dashed: true, label: 'x = 1', labelAt: [-0.6, 9], color: '#9ca3af' },
          { kind: 'line', points: [[-6, 2], [8, 2]], dashed: true, label: 'y = 2', labelAt: [-5.9, 2.5], color: '#9ca3af' },
          { kind: 'line', points: sample(-6, 0.73, 120, f), color: '#60a5fa' },
          { kind: 'line', points: sample(1.39, 8, 120, f), label: 'f(x)', labelAt: [3.2, 5.2], color: '#60a5fa' },
        ],
      },
    },
    {
      id: 'forms',
      kind: 'table',
      label: 'Indeterminate forms: the form alone does not decide the limit',
      sub: 'each needs rewriting before it can be evaluated',
      headers: ['limit', 'form', 'rewrite', 'value'],
      values: [
        ['(x² − 1)/(x − 1), x → 1', '0/0', 'cancel x − 1', '2'],
        ['(2x + 1)/(x − 1), x → ∞', '∞/∞', 'divide by x', '2'],
        ['√(x² + x) − x, x → ∞', '∞ − ∞', 'multiply by the conjugate', '1/2'],
        ['x ln x, x → 0⁺', '0 · ∞', 'compare growth rates', '0'],
      ],
    },
  ],
  edges: [],
}
