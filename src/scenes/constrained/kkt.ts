import { board, fact, facts } from '../frame'
import { arrow } from '../plot-kit'
import { AXES, costLine, regionSeries } from './region'

// §11.4 — KKT certificate at (18, 8) for min 20L + 30M, g₁ = 24 − 2√(LM) ≤ 0, g₂ = M − 8 ≤ 0.
// ∇g₁ = (−√(M/L), −√(L/M)) = (−2/3, −3/2), ∇g₂ = (0, 1). Stationarity 20 − (2/3)λ₁ = 0, 30 − (3/2)λ₁ + λ₂ = 0
// gives λ = (30, 15) (computed). Arrows: ∇f and its two parts −λᵢ∇gᵢ, all drawn at 1/10 scale from (18, 8).
const P: [
  number,
  number
] = [18, 8]
const at = (d: [
  number,
  number
]): [
  number,
  number
] => [P[0] + d[0] / 10, P[1] + d[1] / 10]
export const kkt = board({
  id: 'kkt',
  figure: 'The KKT conditions',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'balance',
      title: 'At (18, 8) the cost gradient is balanced by the two active constraints',
      ...AXES,
      series: [
        ...regionSeries([27, 5.79]),
        {
          kind: 'line',
          points: costLine(600),
          label: '£600',
          labelAt: [25.5, 2.6],
          tone: 'infra'
        },
        arrow(at([20, 30]), '∇f = (20, 30)', 'serve', P),
        { ...arrow(at([20, 45]), '−λ₁∇g₁ = (20, 45)', 'ingest', P), labelAt: [20.6, 13.2] },
        { ...arrow(at([0, -15]), '−λ₂∇g₂ = (0, −15)', 'consume', P), labelAt: [4.8143, 5.5714] },
      ]
    },
    {
      type: 'table',
      id: 'certificate',
      title: 'The full KKT certificate, checked',
      columns: ['condition', 'requirement', 'at (18, 8), λ = (30, 15)', 'holds?'],
      rows: [
        ['primal feasibility', 'g₁ ≤ 0, g₂ ≤ 0', 'g₁ = 0, g₂ = 0', 'yes'],
        ['dual feasibility', 'λ₁ ≥ 0, λ₂ ≥ 0', '30, 15', 'yes'],
        ['stationarity', '∇f + λ₁∇g₁ + λ₂∇g₂ = 0', '(20 − 20, 30 − 45 + 15)', 'yes: (0, 0)'],
        ['complementary slackness', 'λᵢ gᵢ = 0', '30 × 0, 15 × 0', 'yes'],
      ]
    },
  ],
  idea: 'KKT stationarity, feasibility and complementary slackness',
  board: [
    fact('b-rule', 'Karush–Kuhn–Tucker: four checks', 'x with multipliers λ passing all four is a KKT point'),
    facts('b-1', 'The four conditions', ['primal: gᵢ(x) ≤ 0', 'dual: λᵢ ≥ 0', 'stationarity: ∇f + Σ λᵢ∇gᵢ = 0', 'slackness: λᵢ gᵢ(x) = 0']),
    facts('b-2', 'The allocation at (18, 8)', ['∇f = (20, 30)', 'λ₁ = 30, λ₂ = 15', 'both active, both ≥ 0', 'every condition holds']),
    fact('b-3', 'Complementary slackness', 'a slack constraint exerts no force: λ = 0; active with λ = 0 is possible, inactive with λ > 0 is not'),
  ]
})
