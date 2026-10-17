import type { Scene } from '@graphlearning/flow'
import { arrow } from '../plot-kit'

// §11.5 — min x subject to g₁ = y − x³ ≤ 0, g₂ = −y ≤ 0. Feasible: 0 ≤ y ≤ x³, so x ≥ 0 and the minimiser
// is (0, 0). There ∇g₁ = (0, 1) and ∇g₂ = (0, −1) are parallel, so (1, 0) + λ₁(0, 1) + λ₂(0, −1) = 0 has
// no solution: no KKT multipliers at the true minimiser. LICQ fails.
const cusp = Array.from({ length: 41 }, (_, i): [number, number] => {
  const x = (1.15 * i) / 40
  return [x, x ** 3]
})

export const qualifications: Scene = {
  id: 'qualifications',
  title: 'Constraint qualifications and convex sufficiency',
  flow: 'TB',
  nodes: [
    {
      id: 'cusp',
      kind: 'plot',
      label: 'min x over 0 ≤ y ≤ x³: optimum (0, 0), no multipliers',
      sub: 'the active gradients there are (0, 1) and (0, −1): parallel, so no λ can balance ∇f = (1, 0)',
      plot: {
        equal: true,
        x: { min: -0.6, max: 1.3, step: 0.2 },
        y: { min: -0.6, max: 1.3, step: 0.2 },
        series: [
          { kind: 'line', points: [...cusp, [1.15, 0], [0, 0]], label: 'feasible: 0 ≤ y ≤ x³', labelAt: [0.7, 0.62], color: '#34d399' },
          arrow([0.5, 0], '∇f = (1, 0)', '#f472b6'),
          arrow([0, 0.5], '∇g₁ = (0, 1)', '#60a5fa'),
          arrow([0, -0.5], '∇g₂ = (0, −1)', '#a78bfa'),
          { kind: 'marker', at: [0, 0], label: 'minimiser (0, 0)', labelAt: [-0.55, 0.12], color: '#f59e0b' },
        ],
      },
    },
    {
      id: 'conditions',
      kind: 'table',
      label: 'When KKT is necessary, and when it is sufficient',
      sub: 'a qualification makes KKT necessary; convexity makes it sufficient',
      headers: ['condition', 'states', 'cusp problem', 'allocation (18, 8)'],
      values: [
        ['LICQ', 'active ∇gᵢ independent', 'fails: parallel', 'holds: (−⅔, −3/2), (0, 1)'],
        ['Slater', 'convex, a strictly feasible point', 'not convex', 'holds: (30, 6)'],
        ['KKT necessary?', 'if a qualification holds', 'no: none exist', 'yes'],
        ['KKT sufficient?', 'if the problem is convex', '—', 'yes: global optimum'],
      ],
    },
  ],
  edges: [],
}
