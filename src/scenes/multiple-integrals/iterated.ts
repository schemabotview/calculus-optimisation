import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §8.2 — f = (x² − y²)/(x² + y²)² on [0, 1]². Inner integrals in closed form: ∫₀¹ f dy = 1/(1 + x²) and
// ∫₀¹ f dx = −1/(1 + y²), so the two orders give π/4 and −π/4 (quad: ±0.785398). f is not absolutely
// integrable near the origin, so Fubini does not apply. The panel's 28/3 is the same in both orders.
export const iterated: Scene = {
  id: 'iterated',
  title: 'Iterated integrals and order of integration',
  flow: 'TB',
  nodes: [
    {
      id: 'inner',
      kind: 'plot',
      label: 'Inner integrals of f = (x² − y²)/(x² + y²)² on the unit square',
      sub: 'integrate y first: 1/(1 + x²), area π/4; integrate x first: −1/(1 + y²), area −π/4',
      plot: {
        x: { min: 0, max: 1, step: 0.1, label: 'outer variable (x or y)' },
        y: { min: -1.1, max: 1.1, step: 0.25 },
        series: [
          { kind: 'area', points: sample(0, 1, 60, (x) => 1 / (1 + x * x)), color: '#60a5fa' },
          { kind: 'line', points: sample(0, 1, 60, (x) => 1 / (1 + x * x)), label: '∫₀¹ f dy = 1/(1 + x²)', labelAt: [0.55, 0.92], color: '#60a5fa' },
          { kind: 'area', points: sample(0, 1, 60, (y) => -1 / (1 + y * y)), color: '#f472b6' },
          { kind: 'line', points: sample(0, 1, 60, (y) => -1 / (1 + y * y)), label: '∫₀¹ f dx = −1/(1 + y²)', labelAt: [0.55, -0.95], color: '#f472b6' },
        ],
      },
    },
    {
      id: 'fubini',
      kind: 'table',
      label: 'When may the order be swapped?',
      sub: 'Fubini: if ∫∫ |f| dA is finite, both orders agree',
      headers: ['integrand, region', 'dy dx', 'dx dy', 'why'],
      values: [
        ['4 + x²y, [0, 2] × [0, 1]', '28/3', '28/3', 'continuous, bounded region'],
        ['(x² − y²)/(x² + y²)², [0, 1]²', 'π/4', '−π/4', '∫∫ |f| = ∞ near (0, 0)'],
        ['quadrature check', '0.7854', '−0.7854', 'the disagreement is real'],
      ],
    },
  ],
  edges: [],
}
