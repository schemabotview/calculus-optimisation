import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §12.3 — prox of λ|·|: argmin_x ½(x − v)² + λ|x| = sign(v) max(|v| − λ, 0), soft thresholding. Values for
// λ = 1 computed: v = −2.5 → −1.5, −0.4 → 0, 0.7 → 0, 1.5 → 0.5, 3 → 2.
const soft = (lam: number) => (v: number) => Math.sign(v) * Math.max(Math.abs(v) - lam, 0)

export const prox: Scene = {
  id: 'prox',
  title: 'Proximal maps and soft thresholding',
  flow: 'TB',
  nodes: [
    {
      id: 'threshold',
      kind: 'plot',
      label: 'Soft thresholding: prox of λ|x| for λ = 1 and λ = 0.5',
      sub: 'inputs within λ of 0 become exactly 0; larger ones shrink towards 0 by λ',
      plot: {
        equal: true,
        x: { min: -3, max: 3, step: 0.5, label: 'v' },
        y: { min: -2.5, max: 2.5, step: 0.5, label: 'prox(v)' },
        series: [
          { kind: 'line', points: [[-2.5, -2.5], [2.5, 2.5]], label: 'identity', labelAt: [1.6, 2.35], color: '#4b5563' },
          { kind: 'line', points: sample(-3, 3, 240, soft(0.5)), label: 'λ = 0.5', labelAt: [2.55, 1.75], color: '#60a5fa' },
          { kind: 'line', points: sample(-3, 3, 240, soft(1)), label: 'λ = 1', labelAt: [2.55, 1.15], color: '#f472b6' },
          { kind: 'marker', at: [1.5, 0.5], label: 'v = 1.5 → 0.5', labelAt: [0.55, 0.85], color: '#f59e0b' },
        ],
      },
    },
    {
      id: 'derive',
      kind: 'table',
      label: 'Derivation: minimise ½(x − v)² + λ|x| by cases',
      sub: 'optimality: 0 ∈ (x − v) + λ ∂|x|',
      headers: ['case', 'condition', 'requires', 'result'],
      values: [
        ['x > 0', 'x − v + λ = 0', 'v > λ', 'x = v − λ'],
        ['x < 0', 'x − v − λ = 0', 'v < −λ', 'x = v + λ'],
        ['x = 0', '0 ∈ −v + λ[−1, 1]', '|v| ≤ λ', 'x = 0'],
        ['together', '—', '—', 'sign(v) max(|v| − λ, 0)'],
      ],
    },
  ],
  edges: [],
}
