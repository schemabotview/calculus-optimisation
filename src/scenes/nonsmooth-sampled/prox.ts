import { board, fact, facts } from '../frame'
import { sample } from '../plot-kit'

// §12.3 — prox of λ|·|: argmin_x ½(x − v)² + λ|x| = sign(v) max(|v| − λ, 0), soft thresholding. Values for
// λ = 1 computed: v = −2.5 → −1.5, −0.4 → 0, 0.7 → 0, 1.5 → 0.5, 3 → 2.
const soft = (lam: number) => (v: number) => Math.sign(v) * Math.max(Math.abs(v) - lam, 0)
export const prox = board({
  id: 'prox',
  figure: 'Proximal maps and soft thresholding',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'threshold',
      title: 'Soft thresholding: prox of λ|x| for λ = 1 and λ = 0.5',
      equal: true,
      x: { min: -3, max: 3, step: 0.5, label: 'v' },
      y: { min: -2.5, max: 2.5, step: 0.5, label: 'prox(v)' },
      series: [
        {
          kind: 'line',
          points: [[-2.5, -2.5], [2.5, 2.5]],
          label: 'identity',
          labelAt: [1.6, 2.35],
          tone: 'neutral'
        },
        {
          kind: 'line',
          points: sample(-3, 3, 240, soft(0.5)),
          label: 'λ = 0.5',
          labelAt: [2.55, 1.75],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: sample(-3, 3, 240, soft(1)),
          label: 'λ = 1',
          labelAt: [2.55, 1.15],
          tone: 'serve'
        },
        {
          kind: 'scatter',
          points: [[1.5, 0.5]],
          label: 'v = 1.5 → 0.5',
          labelAt: [0.55, 0.85],
          tone: 'infra'
        },
      ]
    },
    {
      type: 'table',
      id: 'derive',
      title: 'Derivation: minimise ½(x − v)² + λ|x| by cases: optimality: 0 ∈ (x − v) + λ ∂|x|',
      columns: ['case', 'condition', 'requires', 'result'],
      rows: [
        ['x > 0', 'x − v + λ = 0', 'v > λ', 'x = v − λ'],
        ['x < 0', 'x − v − λ = 0', 'v < −λ', 'x = v + λ'],
        ['x = 0', '0 ∈ −v + λ[−1, 1]', '|v| ≤ λ', 'x = 0'],
        ['together', '—', '—', 'sign(v) max(|v| − λ, 0)'],
      ]
    },
  ],
  idea: 'Proximal maps and scalar soft thresholding',
  board: [
    fact('b-rule', 'prox(v) = argmin ½(x − v)² + λ g(x)', 'move v as little as possible while lowering g'),
    facts('b-1', 'Soft thresholding, derived', ['0 ∈ (x − v) + λ ∂|x|', 'x > 0: v − λ, if v > λ', 'x < 0: v + λ, if v < −λ', '|v| ≤ λ: exactly 0']),
    facts('b-2', 'The result', ['sign(v) max(|v| − λ, 0)', 'λ = 1: 1.5 → 0.5', '0.7 → 0; −2.5 → −1.5']),
    fact('b-3', 'Proximal gradient', 'a gradient step on the smooth part, then the prox: exact zeros, not hovering near them'),
  ]
})
