import { board, caution, fact, facts } from '../frame'
import type { P } from '../plot-kit'

// §10.5 — iterations to ‖∇f‖ < 10⁻⁶ on f = ½(x² + κy²) from (1, 1), run in numpy/scipy: gradient descent
// with its best fixed step 2/(1 + κ); scipy BFGS (gtol 10⁻⁶); Newton (one step on a quadratic).
const KAPPA = [1, 10, 100, 1000, 10000]
const GD = [1, 81, 922, 10362, 115130]
const BFGS = [2, 3, 3, 2, 2]
const pts = (v: number[]): P[] => v.map((n, i) => [Math.log10(KAPPA[i]), Math.log10(n)])
export const conditioning = board({
  id: 'conditioning',
  figure: 'Conditioning, scaling and quasi-Newton methods',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'cost',
      title: 'Iterations to ‖∇f‖ < 10⁻⁶ as the condition number κ grows',
      axes: 'corner',
      x: { min: -0.1, max: 4.2, step: 0.5, label: 'log₁₀ κ' },
      y: { min: -0.3, max: 5.5, step: 0.5, label: 'log₁₀ iterations' },
      series: [
        { kind: 'line', points: pts(GD), tone: 'serve' },
        {
          kind: 'scatter',
          points: pts(GD),
          label: 'gradient descent, best fixed α',
          labelAt: [1.7, 3.6],
          tone: 'serve'
        },
        { kind: 'line', points: pts(BFGS), tone: 'ingest' },
        {
          kind: 'scatter',
          points: pts(BFGS),
          label: 'BFGS (quasi-Newton)',
          labelAt: [2.6, 0.75],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: [[0, 0], [4, 0]],
          label: 'Newton: 1 step',
          labelAt: [3.0, 0.1],
          tone: 'store'
        },
      ]
    },
    {
      type: 'table',
      id: 'methods',
      title: 'Condition number κ = largest / smallest Hessian eigenvalue',
      columns: ['κ', 'gradient descent', 'BFGS', 'Newton'],
      rows: [
        ['1', '1', '2', '1'],
        ['10', '81', '3', '1'],
        ['100', '922', '3', '1'],
        ['1000', '10 362', '2', '1'],
        ['10 000', '115 130', '2', '1'],
      ]
    },
  ],
  idea: 'Conditioning, scaling, quasi-Newton and trust-region orientation',
  board: [
    fact('b-rule', 'κ: largest over smallest Hessian eigenvalue', 'elongated level sets; gradient descent pays for it'),
    facts('b-1', 'The cost of κ', ['~κ ln(1/tol) steps', 'κ = 10: 81 iterations', 'κ = 10⁴: 115 130', 'Newton: one step, any κ']),
    facts('b-2', 'Remedies', ['rescale: y′ = √10 y is round', 'BFGS: 2–3 steps', 'trust regions grow on success']),
    caution('b-watch', 'κ comes from units as much as the problem: hours against seconds multiplies a curvature by 3600² and makes a small problem look ill-conditioned.'),
  ]
})
