import type { Scene } from '@graphlearning/flow'
import { arrow } from '../plot-kit'
import { AXES, costLine, regionSeries } from './region'

// §11.4 — KKT certificate at (18, 8) for min 20L + 30M, g₁ = 24 − 2√(LM) ≤ 0, g₂ = M − 8 ≤ 0.
// ∇g₁ = (−√(M/L), −√(L/M)) = (−2/3, −3/2), ∇g₂ = (0, 1). Stationarity 20 − (2/3)λ₁ = 0, 30 − (3/2)λ₁ + λ₂ = 0
// gives λ = (30, 15) (computed). Arrows: ∇f and its two parts −λᵢ∇gᵢ, all drawn at 1/10 scale from (18, 8).
const P: [number, number] = [18, 8]
const at = (d: [number, number]): [number, number] => [P[0] + d[0] / 10, P[1] + d[1] / 10]

export const kkt: Scene = {
  id: 'kkt',
  title: 'The KKT conditions',
  flow: 'TB',
  nodes: [
    {
      id: 'balance',
      kind: 'plot',
      label: 'At (18, 8) the cost gradient is balanced by the two active constraints',
      sub: '∇f = −λ₁∇g₁ − λ₂∇g₂ with λ₁ = 30, λ₂ = 15; arrows at 1/10 scale',
      plot: {
        ...AXES,
        series: [
          ...regionSeries,
          { kind: 'line', points: costLine(600), label: '£600', labelAt: [25.5, 2.6], color: '#f59e0b' },
          arrow(at([20, 30]), '∇f = (20, 30)', '#f472b6', P),
          { ...arrow(at([20, 45]), '−λ₁∇g₁ = (20, 45)', '#60a5fa', P), labelAt: [20.6, 13.2] },
          { ...arrow(at([0, -15]), '−λ₂∇g₂ = (0, −15)', '#a78bfa', P), labelAt: [5.5, 6.6] },
        ],
      },
    },
    {
      id: 'certificate',
      kind: 'table',
      label: 'The full KKT certificate, checked',
      sub: 'all four must hold; any failure voids the certificate',
      headers: ['condition', 'requirement', 'at (18, 8), λ = (30, 15)', 'holds?'],
      values: [
        ['primal feasibility', 'g₁ ≤ 0, g₂ ≤ 0', 'g₁ = 0, g₂ = 0', 'yes'],
        ['dual feasibility', 'λ₁ ≥ 0, λ₂ ≥ 0', '30, 15', 'yes'],
        ['stationarity', '∇f + λ₁∇g₁ + λ₂∇g₂ = 0', '(20 − 20, 30 − 45 + 15)', 'yes: (0, 0)'],
        ['complementary slackness', 'λᵢ gᵢ = 0', '30 × 0, 15 × 0', 'yes'],
      ],
    },
  ],
  edges: [],
}
