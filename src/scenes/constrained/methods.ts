import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'

// §11.7 — min (x − 3)² s.t. x ≤ 2 by three families. Quadratic penalty (x − 3)² + (μ/2)max(0, x − 2)²:
// minimiser (6 + 2μ)/(2 + μ) = 2.667, 2.167, 2.0196, 2.0020 for μ = 1, 10, 100, 1000. Log barrier
// (x − 3)² − t ln(2 − x): minimiser (5 − √(1 + 2t))/2 = 1.634, 1.952, 1.995 for t = 1, 0.1, 0.01.
// Projected gradient (α = 0.25 from 0): 1.5, then 2 exactly. Closed forms, checked numerically.
const f = (x: number) => (x - 3) ** 2
const pen = (mu: number) => (x: number) => f(x) + (mu / 2) * Math.max(0, x - 2) ** 2
const bar = (t: number) => (x: number) => f(x) - t * Math.log(2 - x)
export const methods = board({
  id: 'methods',
  figure: 'Projection, penalties and barriers',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'families',
      title: 'min (x − 3)² subject to x ≤ 2, three ways',
      x: { min: 0.5, max: 3.5, step: 0.25, label: 'x' },
      y: { min: 0, max: 6, step: 1 },
      series: [
        {
          kind: 'line',
          points: sample(0.5, 3.5, 100, f),
          label: 'f = (x − 3)²',
          labelAt: [0.55, 5.6],
          tone: 'neutral'
        },
        {
          kind: 'line',
          points: sample(0.5, 3.5, 150, pen(10)),
          label: 'penalty μ = 10: min at 2.167',
          labelAt: [0.6, 0.6],
          tone: 'serve'
        },
        {
          kind: 'line',
          points: sample(0.5, 1.995, 150, bar(1)),
          label: 'barrier t = 1: min at 1.634',
          labelAt: [0.55, 2.2],
          tone: 'ingest'
        },
        {
          kind: 'segment',
          from: [2, 0],
          to: [2, 6],
          label: 'x = 2',
          labelAt: [1.85, 0.25],
          tone: 'store'
        },
      ]
    },
    {
      type: 'table',
      id: 'compare',
      title: 'How each family handles feasibility',
      columns: ['method', 'parameter', 'x found', 'feasible?'],
      rows: [
        ['quadratic penalty', 'μ = 10 / 100 / 1000', '2.167 / 2.020 / 2.002', 'no: always slightly over'],
        ['log barrier', 't = 1 / 0.1 / 0.01', '1.634 / 1.952 / 1.995', 'yes: always strictly inside'],
        ['projected gradient', 'α = 0.25, from 0', '1.5, then 2 exactly', 'yes, every iterate'],
        ['cost of exactness', 'μ → ∞ or t → 0', '—', 'ill-conditioned subproblems'],
      ]
    },
  ],
  idea: 'Projection, penalties and barriers as method families',
  board: [
    fact('b-rule', 'Three method families', 'iterates outside, inside, or exactly on the feasible set'),
    facts('b-1', 'Penalties and barriers', ['penalty (μ/2) max(0, g)²', 'μ = 10: 2.167; 1000: 2.002', 'barrier −t ln(−g)', 't = 1: 1.634; 0.01: 1.995']),
    facts('b-2', 'Projection', ['step, then nearest feasible', 'x ≤ 2 from 0: 1.5, then 2', 'easy for boxes and balls']),
    caution('b-watch', 'Penalties end slightly infeasible, barriers strictly inside; large μ or small t make the subproblems ill-conditioned.'),
  ]
})
