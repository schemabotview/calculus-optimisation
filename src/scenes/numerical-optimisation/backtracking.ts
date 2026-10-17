import type { Scene } from '@graphlearning/flow'
import type { PlotPoint } from '@graphlearning/flow'
import { sample } from '../plot-kit'
import { f, grad, START } from './bowl'

// §10.3 — Armijo backtracking at (3, 1.5) along d = −∇f = (−3, −15), c = 10⁻⁴, halving from α = 1.
// φ(α) = f(x + αd); trial values computed: φ(1) = 911.25, φ(0.5) = 181.1, φ(0.25) = 27.84, φ(0.125) =
// 4.148 ≤ 15.747: accepted. Gradient descent with this rule reaches ‖∇f‖ < 10⁻⁶ in 61 iterations.
const [gx, gy] = grad(START)
const phi = (a: number) => f([START[0] - a * gx, START[1] - a * gy])
const trial = (a: number): PlotPoint => [a, phi(a)]

export const backtracking: Scene = {
  id: 'backtracking',
  title: 'Backtracking and sufficient decrease',
  flow: 'TB',
  nodes: [
    {
      id: 'line-search',
      kind: 'plot',
      label: 'f along the search line: φ(α) = f(x − α∇f) from (3, 1.5)',
      sub: 'accept the first α (halving from 1) whose value lies below the sufficient-decrease line',
      plot: {
        x: { min: 0, max: 0.55, step: 0.05, label: 'α, step length' },
        y: { min: 0, max: 200, step: 20, label: 'f' },
        series: [
          { kind: 'line', points: sample(0, 0.53, 120, phi), label: 'φ(α)', labelAt: [0.44, 150], color: '#60a5fa' },
          { kind: 'line', points: [[0, 15.75], [0.55, 15.75 - 1e-4 * 0.55 * 234]], label: 'Armijo: f(x) + 10⁻⁴ α ∇fᵀd', labelAt: [0.28, 24], color: '#f59e0b' },
          { kind: 'marker', at: trial(0.5), label: 'α = 0.5: rejected', labelAt: [0.36, 186], color: '#f472b6' },
          { kind: 'marker', at: trial(0.25), label: 'α = 0.25: rejected', labelAt: [0.26, 42], color: '#f472b6' },
          { kind: 'marker', at: trial(0.125), label: 'α = 0.125: accepted', labelAt: [0.04, 40], color: '#34d399' },
        ],
      },
    },
    {
      id: 'armijo',
      kind: 'table',
      label: 'Halve α until f(x + αd) ≤ f(x) + c α ∇fᵀd',
      sub: 'f(x) = 15.75, ∇fᵀd = −234, c = 10⁻⁴',
      headers: ['α', 'f(x + αd)', 'bound', 'accept?'],
      values: [
        ['1', '911.25', '15.727', 'no'],
        ['0.5', '181.13', '15.738', 'no'],
        ['0.25', '27.84', '15.744', 'no'],
        ['0.125', '4.148', '15.747', 'yes'],
        ['whole run', '61 iterations to ‖∇f‖ < 10⁻⁶', 'no L needed', '—'],
      ],
    },
  ],
  edges: [],
}
