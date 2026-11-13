import { board, caution, fact, facts } from '../frame'
import type { P } from '../plot-kit'
import { grad, START } from './bowl'

// §10.7 — gradient descent with a far too small step, α = 0.001, on f = ½(x² + 10y²). Computed here:
// step length and ‖∇f‖ per iteration. A "step < 10⁻³" rule stops at iteration 1100 with ‖∇f‖ = 0.998 and
// distance 0.998 from the minimiser (numpy run agrees). For contrast, α = 0.18 reaches 10⁻⁶ in 77 steps.
const run = (alpha: number, n: number) => {
  const g: P[] = []
  const s: P[] = []
  let p = START
  for (let k = 1; k <= n; k++) {
    const d = grad(p)
    const q: P = [p[0] - alpha * d[0], p[1] - alpha * d[1]]
    s.push([k, Math.log10(Math.hypot(q[0] - p[0], q[1] - p[1]))])
    p = q
    g.push([k, Math.log10(Math.hypot(...grad(p)))])
  }
  return { g: g.filter((_, i) => i % 10 === 9), s: s.filter((_, i) => i % 10 === 9) }
}
const SLOW = run(0.001, 1500)
const GOOD = run(0.18, 80)
export const stagnation = board({
  id: 'stagnation',
  figure: 'Optimality residuals versus stagnation',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'residuals',
      title: 'A tiny step size: steps look converged, the gradient says otherwise',
      x: { min: 0, max: 1500, step: 100, label: 'iteration' },
      y: { min: -7, max: 1.5, step: 1, label: 'log₁₀' },
      series: [
        {
          kind: 'line',
          points: SLOW.g,
          label: 'α = 0.001: ‖∇f‖ still ≈ 1 at 1100',
          labelAt: [620, 0.75],
          tone: 'serve'
        },
        {
          kind: 'line',
          points: SLOW.s,
          label: 'α = 0.001: step length, below 10⁻³',
          labelAt: [620, -2.55],
          tone: 'infra'
        },
        {
          kind: 'segment',
          from: [1100, -7],
          to: [1100, 1.5],
          label: 'step rule stops',
          labelAt: [1120, -4],
          tone: 'neutral'
        },
        {
          kind: 'line',
          points: GOOD.g,
          label: 'α = 0.18: ‖∇f‖ < 10⁻⁶ in 77',
          labelAt: [95, -6.3],
          tone: 'store'
        },
      ]
    },
    {
      type: 'table',
      id: 'evidence',
      title: 'What each stopping signal actually shows',
      columns: ['signal', 'value', 'evidence of optimality?'],
      rows: [
        ['step length', '< 10⁻³', 'no: the step is just small'],
        ['change in f', '≈ 10⁻³ per step', 'no: f is still falling'],
        ['‖∇f‖, the residual', '0.998', 'yes, and it says: not optimal'],
        ['distance to minimiser', '0.998', 'unknown in practice'],
        ['iteration limit', 'reached or not', 'never evidence'],
      ]
    },
  ],
  idea: 'Optimality residuals versus stagnation and iteration limits',
  board: [
    fact('b-rule', 'Three reasons to stop: small residual, stagnation, a limit', 'only the first is evidence of a solution'),
    facts('b-1', 'A step far too small', ['α = 0.001 on the bowl', 'step < 10⁻³ at 1100', 'yet ‖∇f‖ = 0.998']),
    facts('b-2', 'Reading the signals', ['small steps: maybe tiny α', 'small f changes: flat region', '‖∇f‖: stationarity itself', 'α = 0.18: 77 steps']),
    caution('b-watch', 'Report which test stopped the run: "converged" after a limit or a step test, gradient unchecked, is a claim with no evidence.'),
  ]
})
