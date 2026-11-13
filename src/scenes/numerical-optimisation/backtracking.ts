import { board, caution, fact, facts } from '../frame'
import type { P } from '../plot-kit'
import { sample } from '../plot-kit'
import { f, grad, START } from './bowl'

// §10.3 — Armijo backtracking at (3, 1.5) along d = −∇f = (−3, −15), c = 10⁻⁴, halving from α = 1.
// φ(α) = f(x + αd); trial values computed: φ(1) = 911.25, φ(0.5) = 181.1, φ(0.25) = 27.84, φ(0.125) =
// 4.148 ≤ 15.747: accepted. Gradient descent with this rule reaches ‖∇f‖ < 10⁻⁶ in 61 iterations.
const [gx, gy] = grad(START)
const phi = (a: number) => f([START[0] - a * gx, START[1] - a * gy])
const trial = (a: number): P => [a, phi(a)]
export const backtracking = board({
  id: 'backtracking',
  figure: 'Backtracking and sufficient decrease',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'line-search',
      title: 'f along the search line: φ(α) = f(x − α∇f) from (3, 1.5)',
      x: { min: 0, max: 0.55, step: 0.05, label: 'α, step length' },
      y: { min: 0, max: 200, step: 20, label: 'f' },
      series: [
        {
          kind: 'line',
          points: sample(0, 0.53, 120, phi),
          label: 'φ(α)',
          labelAt: [0.43434, 150],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: [[0, 15.75], [0.55, 15.75 - 1e-4 * 0.55 * 234]],
          label: 'Armijo: f(x) + 10⁻⁴ α ∇fᵀd',
          labelAt: [0.28, 24],
          tone: 'infra'
        },
        {
          kind: 'scatter',
          points: [trial(0.5)],
          label: 'α = 0.5: rejected',
          labelAt: [0.36, 180],
          tone: 'serve'
        },
        {
          kind: 'scatter',
          points: [trial(0.25)],
          label: 'α = 0.25: rejected',
          labelAt: [0.22036, 63.429],
          tone: 'serve'
        },
        {
          kind: 'scatter',
          points: [trial(0.125)],
          label: 'α = 0.125: accepted',
          labelAt: [0.04, 40],
          tone: 'store'
        },
      ]
    },
    {
      type: 'table',
      id: 'armijo',
      title: 'Halve α until f(x + αd) ≤ f(x) + c α ∇fᵀd: f(x) = 15.75, ∇fᵀd = −234, c = 10⁻⁴',
      columns: ['α', 'f(x + αd)', 'bound', 'accept?'],
      rows: [
        ['1', '911.25', '15.727', 'no'],
        ['0.5', '181.13', '15.738', 'no'],
        ['0.25', '27.84', '15.744', 'no'],
        ['0.125', '4.148', '15.747', 'yes'],
        ['whole run', '61 iterations to ‖∇f‖ < 10⁻⁶', 'no L needed', '—'],
      ]
    },
  ],
  idea: 'Backtracking and sufficient decrease',
  board: [
    fact('b-rule', 'Try a step; shrink until it works', '"works" means sufficient decrease, not any decrease'),
    facts('b-1', 'The Armijo condition', ['f(x + αd) ≤ f(x) + cα∇fᵀd', 'c ≈ 10⁻⁴', 'from α = 1, halve']),
    facts('b-2', 'At (3, 1.5)', ['f = 15.75, ∇fᵀd = −234', '1, 0.5, 0.25 overshoot', '0.125: f = 4.15, accepted', '61 iterations, no L needed']),
    caution('b-watch', 'Plain decrease is not enough: tiny gains can sum to a total short of the minimum. Sufficient decrease ties each gain to the slope.'),
  ]
})
