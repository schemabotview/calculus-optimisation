import type { Scene } from '@graphlearning/flow'
import type { PlotPoint } from '@graphlearning/flow'
import { grad, START } from './bowl'

// §10.7 — gradient descent with a far too small step, α = 0.001, on f = ½(x² + 10y²). Computed here:
// step length and ‖∇f‖ per iteration. A "step < 10⁻³" rule stops at iteration 1100 with ‖∇f‖ = 0.998 and
// distance 0.998 from the minimiser (numpy run agrees). For contrast, α = 0.18 reaches 10⁻⁶ in 77 steps.
const run = (alpha: number, n: number) => {
  const g: PlotPoint[] = []
  const s: PlotPoint[] = []
  let p = START
  for (let k = 1; k <= n; k++) {
    const d = grad(p)
    const q: PlotPoint = [p[0] - alpha * d[0], p[1] - alpha * d[1]]
    s.push([k, Math.log10(Math.hypot(q[0] - p[0], q[1] - p[1]))])
    p = q
    g.push([k, Math.log10(Math.hypot(...grad(p)))])
  }
  return { g: g.filter((_, i) => i % 10 === 9), s: s.filter((_, i) => i % 10 === 9) }
}
const SLOW = run(0.001, 1500)
const GOOD = run(0.18, 80)

export const stagnation: Scene = {
  id: 'stagnation',
  title: 'Optimality residuals versus stagnation',
  flow: 'TB',
  nodes: [
    {
      id: 'residuals',
      kind: 'plot',
      label: 'A tiny step size: steps look converged, the gradient says otherwise',
      sub: 'f = ½(x² + 10y²) from (3, 1.5); log₁₀ of the step length and of ‖∇f‖ per iteration',
      plot: {
        x: { min: 0, max: 1500, step: 100, label: 'iteration' },
        y: { min: -7, max: 1.5, step: 1, label: 'log₁₀' },
        series: [
          { kind: 'line', points: SLOW.g, label: 'α = 0.001: ‖∇f‖ still ≈ 1 at 1100', labelAt: [620, 0.75], color: '#f472b6' },
          { kind: 'line', points: SLOW.s, label: 'α = 0.001: step length, below 10⁻³', labelAt: [620, -2.55], color: '#f59e0b' },
          { kind: 'segment', from: [1100, -7], to: [1100, 1.5], label: 'step rule stops', labelAt: [1120, -4], color: '#9ca3af' },
          { kind: 'line', points: GOOD.g, label: 'α = 0.18: ‖∇f‖ < 10⁻⁶ in 77', labelAt: [95, -6.3], color: '#34d399' },
        ],
      },
    },
    {
      id: 'evidence',
      kind: 'table',
      label: 'What each stopping signal actually shows',
      sub: 'at the stop of the α = 0.001 run, iteration 1100',
      headers: ['signal', 'value', 'evidence of optimality?'],
      values: [
        ['step length', '< 10⁻³', 'no: the step is just small'],
        ['change in f', '≈ 10⁻³ per step', 'no: f is still falling'],
        ['‖∇f‖, the residual', '0.998', 'yes, and it says: not optimal'],
        ['distance to minimiser', '0.998', 'unknown in practice'],
        ['iteration limit', 'reached or not', 'never evidence'],
      ],
    },
  ],
  edges: [],
}
