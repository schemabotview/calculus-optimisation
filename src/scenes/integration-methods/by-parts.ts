import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §5.1 — ∫ x eˣ dx = (x − 1)eˣ + C by parts (u = x, dv = eˣ dx). Verified two ways: differentiating
// (x − 1)eˣ gives x eˣ, and quad gives ∫₀¹ x eˣ dx = 1.0 = F(1) − F(0) = 0 − (−1).
const f = (x: number) => x * Math.exp(x)
const F = (x: number) => (x - 1) * Math.exp(x)

export const byParts: Scene = {
  id: 'by-parts',
  title: 'Integration by parts',
  flow: 'TB',
  nodes: [
    {
      id: 'check',
      kind: 'plot',
      label: 'f(x) = x eˣ and its antiderivative F(x) = (x − 1)eˣ',
      sub: 'F is lowest where f = 0 and steepest where f is largest: F′ = f',
      plot: {
        x: { min: -3, max: 1.5, step: 0.5 },
        y: { min: -1.5, max: 3.5, step: 0.5 },
        series: [
          { kind: 'line', points: sample(-3, 1.3, 120, f), label: 'f(x) = x eˣ', labelAt: [0.35, 2.7], color: '#60a5fa' },
          { kind: 'line', points: sample(-3, 1.3, 120, F), label: 'F(x) = (x − 1)eˣ', labelAt: [-2.9, -0.5], color: '#f59e0b' },
          { kind: 'marker', at: [0, -1], label: 'F has its minimum where f = 0', labelAt: [-1.6, -1.35], color: '#f472b6' },
        ],
      },
    },
    {
      id: 'parts',
      kind: 'table',
      label: '∫ u dv = u v − ∫ v du: the product rule, reversed',
      sub: 'choose u to get simpler when differentiated',
      headers: ['integral', 'u, dv', 'result', 'check'],
      values: [
        ['∫ x eˣ dx', 'u = x, dv = eˣ dx', '(x − 1)eˣ + C', 'd/dx gives x eˣ ✓'],
        ['∫ ln x dx', 'u = ln x, dv = dx', 'x ln x − x + C', 'd/dx gives ln x ✓'],
        ['∫₀¹ x eˣ dx', 'evaluate F', '0 − (−1) = 1', 'quadrature: 1.0 ✓'],
        ['∫ x² eˣ dx', 'apply parts twice', '(x² − 2x + 2)eˣ + C', 'd/dx gives x² eˣ ✓'],
      ],
    },
  ],
  edges: [],
}
