import { board, fact, facts } from '../frame'
import { arrow } from '../plot-kit'

// §11.5 — min x subject to g₁ = y − x³ ≤ 0, g₂ = −y ≤ 0. Feasible: 0 ≤ y ≤ x³, so x ≥ 0 and the minimiser
// is (0, 0). There ∇g₁ = (0, 1) and ∇g₂ = (0, −1) are parallel, so (1, 0) + λ₁(0, 1) + λ₂(0, −1) = 0 has
// no solution: no KKT multipliers at the true minimiser. LICQ fails.
const cusp = Array.from({ length: 41 }, (_, i): [
  number,
  number
] => {
  const x = (1.15 * i) / 40
  return [x, x ** 3]
})
export const qualifications = board({
  id: 'qualifications',
  figure: 'Constraint qualifications and convex sufficiency',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'cusp',
      title: 'min x over 0 ≤ y ≤ x³: optimum (0, 0), no multipliers',
      equal: true,
      x: { min: -0.6, max: 1.3, step: 0.2 },
      y: { min: -0.6, max: 1.3, step: 0.2 },
      series: [
        {
          kind: 'line',
          points: [...cusp, [1.15, 0], [0, 0]],
          label: 'feasible: 0 ≤ y ≤ x³',
          labelAt: [1.1343, 0.62],
          tone: 'store'
        },
        arrow([0.5, 0], '∇f = (1, 0)', 'serve', [0, 0], [1.1514, 2.2204e-16]),
        arrow([0, 0.5], '∇g₁ = (0, 1)', 'ingest'),
        arrow([0, -0.5], '∇g₂ = (0, −1)', 'consume'),
        {
          kind: 'scatter',
          points: [[0, 0]],
          label: 'minimiser (0, 0)',
          labelAt: [-1.0929, -0.042857],
          tone: 'infra'
        },
      ]
    },
    {
      type: 'table',
      id: 'conditions',
      title: 'When KKT is necessary, and when it is sufficient',
      columns: ['condition', 'states', 'cusp problem', '(18, 8)'],
      rows: [
        ['LICQ', '∇gᵢ independent', 'fails', 'holds'],
        ['Slater', 'strictly feasible point', 'not convex', 'holds: (30, 6)'],
        ['KKT necessary?', 'with a qualification', 'no', 'yes'],
        ['KKT sufficient?', 'if convex', '—', 'yes: global'],
      ]
    },
  ],
  idea: 'Constraint qualifications and convex sufficiency',
  board: [
    fact('b-rule', 'KKT is necessary only under a qualification', 'and sufficient only with convexity'),
    facts('b-1', 'A qualification failing', ['min x: y ≤ x³, y ≥ 0', 'a cusp at (0, 0)', 'active gradients parallel', 'no multipliers exist']),
    facts('b-2', 'Two qualifications', ['LICQ: independent gradients', 'Slater: strictly feasible point', 'allocation: (30, 6) works']),
    fact('b-3', 'Convex sufficiency', 'convex f and gᵢ: every KKT point is global; (18, 8) is certified optimal'),
  ]
})
