import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'

// §11.3 — min (x − 3)² subject to x ≤ 2, written g = x − 2 ≤ 0. Lagrangian L(x, λ) = (x − 3)² + λ(x − 2).
// At x = 2: 2(x − 3) + λ = 0 gives λ = 2 ≥ 0, and L(·, 2) = (x − 3)² + 2(x − 2) is minimised at x = 2.
export const lagrangian = board({
  id: 'lagrangian',
  figure: 'Inequality sign conventions and the Lagrangian',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'tilt',
      title: 'min (x − 3)² subject to x ≤ 2: the multiplier tilts the objective',
      x: { min: 0, max: 4.5, step: 0.5, label: 'x' },
      y: { min: -2.5, max: 9, step: 1 },
      series: [
        { kind: 'area', points: [[0, 9], [2, 9]], tone: 'store' },
        {
          kind: 'line',
          points: sample(0, 4.5, 80, (x) => (x - 3) ** 2),
          label: 'f(x) = (x − 3)²',
          labelAt: [3.05, 3.6],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: sample(0, 4.5, 80, (x) => (x - 3) ** 2 + 2 * (x - 2)),
          label: 'L(x, 2) = f + 2(x − 2)',
          labelAt: [3.5, 0.6],
          tone: 'serve'
        },
        {
          kind: 'scatter',
          points: [[2, 1]],
          label: 'x* = 2: f = 1, and L minimised here',
          labelAt: [0.2, -1.9],
          tone: 'infra'
        },
        {
          kind: 'scatter',
          points: [[3, 0]],
          label: 'unconstrained x = 3',
          labelAt: [3.15, -0.6],
          tone: 'neutral'
        },
      ]
    },
    {
      type: 'table',
      id: 'conventions',
      title: 'One convention: g(x) ≤ 0 and λ ≥ 0, so L = f + Σ λᵢ gᵢ',
      columns: ['as stated', 'as g ≤ 0', 'multiplier'],
      rows: [
        ['x at most 2', 'x − 2 ≤ 0', 'λ = 2 here'],
        ['at least 24 chairs', '24 − 2√(LM) ≤ 0', 'λ₁ ≥ 0'],
        ['machine hours ≤ 8', 'M − 8 ≤ 0', 'λ₂ ≥ 0'],
        ['L ≥ 0', '−L ≤ 0', 'λ₃ ≥ 0'],
        ['wrong: x ≤ 2 as 2 − x ≤ 0', 'means x ≥ 2', 'a different problem'],
      ]
    },
  ],
  idea: 'Inequality sign conventions and the Lagrangian',
  board: [
    fact('b-rule', 'For gᵢ(x) ≤ 0: L(x, λ) = f(x) + Σ λᵢ gᵢ(x)', 'every multiplier λᵢ ≥ 0'),
    facts('b-1', 'A one-dimensional example', ['(x − 3)², x ≤ 2: g = x − 2', 'x = 3 is infeasible', 'at x = 2: λ = 2 ≥ 0', 'L(x, 2) is least at 2']),
    facts('b-2', 'Why λ ≥ 0', ['λg: a cost for pushing', 'negative would reward violation', 'negative λ: sign error']),
    caution('b-watch', 'Convert every constraint to g ≤ 0 first: "x at most 2" is x − 2 ≤ 0; writing 2 − x ≤ 0 states x ≥ 2, a different problem.'),
  ]
})
