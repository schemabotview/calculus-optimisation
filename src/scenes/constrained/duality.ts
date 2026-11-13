import { board, fact, facts } from '../frame'
import { sample } from '../plot-kit'

// §11.6 — dual of the allocation problem. For L, M > 0, inf of 20L + (30 + λ₂)M − 2λ₁√(LM) is 0 when
// λ₁² ≤ 20(30 + λ₂) and −∞ otherwise, so q(λ) = 24λ₁ − 8λ₂ on that set. Best λ₁ for each λ₂ gives
// q*(λ₂) = 24√(20(30 + λ₂)) − 8λ₂, maximised at λ₂ = 15: q = 600 = primal optimum (strong duality).
const qStar = (l2: number) => 24 * Math.sqrt(20 * (30 + l2)) - 8 * l2
export const duality = board({
  id: 'duality',
  figure: 'Dual bounds and strong duality',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'bound',
      title: 'Every dual value is a lower bound on the cheapest feasible cost',
      x: { min: 0, max: 40, step: 5, label: 'λ₂' },
      y: { min: 570, max: 610, step: 5, label: '£' },
      series: [
        {
          kind: 'line',
          points: [[0, 600], [40, 600]],
          label: 'primal optimum £600',
          labelAt: [27, 602.5],
          tone: 'infra'
        },
        {
          kind: 'line',
          points: sample(0, 40, 100, qStar),
          label: 'dual bound q*(λ₂)',
          labelAt: [29, 587.5],
          tone: 'ingest'
        },
        {
          kind: 'scatter',
          points: [[15, 600]],
          label: 'λ = (30, 15): gap 0',
          labelAt: [10.5, 596.5],
          tone: 'serve'
        },
        {
          kind: 'scatter',
          points: [[0, qStar(0)]],
          label: 'λ₂ = 0: £587.88',
          labelAt: [1.2, 585],
          tone: 'neutral'
        },
      ]
    },
    {
      type: 'table',
      id: 'weak-strong',
      title: 'q(λ) = min over x of L(x, λ): a lower bound for any λ ≥ 0',
      columns: ['λ₁', 'λ₂', 'q(λ)', 'gap to £600'],
      rows: [
        ['24.49', '0', '587.88', '12.12'],
        ['28.28', '10', '598.82', '1.18'],
        ['30', '15', '600.00', '0: certificate'],
        ['34.64', '30', '591.38', '8.62'],
        ['35', '0', '−∞', 'λ₁² > 20(30 + λ₂)'],
      ]
    },
  ],
  idea: 'Dual lower bounds, weak and strong duality and Slater conditions',
  board: [
    fact('b-rule', 'q(λ) = min over x of L(x, λ)', 'a lower bound on the optimum for every λ ≥ 0'),
    facts('b-1', 'Weak duality', ['λᵢgᵢ ≤ 0 when feasible', 'so q(λ) ≤ f(x)', 'any λ: a guarantee', 'needs no convexity']),
    facts('b-2', 'The allocation’s dual', ['q = 24λ₁ − 8λ₂ (if λ₁² ≤ …)', '(24.49, 0): ≥ £587.88', '(30, 15): ≥ £600, gap 0']),
    fact('b-3', 'Strong duality', 'convex plus Slater: best bound = optimum; f(x) = q(λ) certifies both'),
  ]
})
