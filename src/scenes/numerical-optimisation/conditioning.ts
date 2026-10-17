import type { Scene } from '@graphlearning/flow'
import type { PlotPoint } from '@graphlearning/flow'

// §10.5 — iterations to ‖∇f‖ < 10⁻⁶ on f = ½(x² + κy²) from (1, 1), run in numpy/scipy: gradient descent
// with its best fixed step 2/(1 + κ); scipy BFGS (gtol 10⁻⁶); Newton (one step on a quadratic).
const KAPPA = [1, 10, 100, 1000, 10000]
const GD = [1, 81, 922, 10362, 115130]
const BFGS = [2, 3, 3, 2, 2]
const pts = (v: number[]): PlotPoint[] => v.map((n, i) => [Math.log10(KAPPA[i]), Math.log10(n)])

export const conditioning: Scene = {
  id: 'conditioning',
  title: 'Conditioning, scaling and quasi-Newton methods',
  flow: 'TB',
  nodes: [
    {
      id: 'cost',
      kind: 'plot',
      label: 'Iterations to ‖∇f‖ < 10⁻⁶ as the condition number κ grows',
      sub: 'f = ½(x² + κy²): gradient descent pays about κ; curvature-aware methods do not',
      plot: {
        axes: 'corner',
        x: { min: -0.1, max: 4.2, step: 0.5, label: 'log₁₀ κ' },
        y: { min: -0.3, max: 5.5, step: 0.5, label: 'log₁₀ iterations' },
        series: [
          { kind: 'line', points: pts(GD), color: '#f472b6' },
          { kind: 'scatter', points: pts(GD), label: 'gradient descent, best fixed α', labelAt: [1.7, 3.6], color: '#f472b6' },
          { kind: 'line', points: pts(BFGS), color: '#60a5fa' },
          { kind: 'scatter', points: pts(BFGS), label: 'BFGS (quasi-Newton)', labelAt: [2.6, 0.75], color: '#60a5fa' },
          { kind: 'line', points: [[0, 0], [4, 0]], label: 'Newton: 1 step', labelAt: [3.0, 0.1], color: '#34d399' },
        ],
      },
    },
    {
      id: 'methods',
      kind: 'table',
      label: 'Condition number κ = largest / smallest Hessian eigenvalue',
      sub: 'iteration counts run in numpy and scipy.optimize',
      headers: ['κ', 'gradient descent', 'BFGS', 'Newton'],
      values: [
        ['1', '1', '2', '1'],
        ['10', '81', '3', '1'],
        ['100', '922', '3', '1'],
        ['1000', '10 362', '2', '1'],
        ['10 000', '115 130', '2', '1'],
      ],
    },
  ],
  edges: [],
}
