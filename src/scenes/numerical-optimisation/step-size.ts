import { board, caution, fact, facts } from '../frame'
import { AXES, descent, levels } from './bowl'

// §10.2 — fixed-step gradient descent on f = ½(x² + 10y²): each step multiplies x by 1 − α and y by
// 1 − 10α. Stable iff α < 2/L = 0.2 (L = 10). Iteration counts to ‖∇f‖ < 10⁻⁶ from (3, 1.5) were run in
// numpy: α = 0.05: 291; 0.1: 142; 0.18: 77; 0.21: diverges (|y| grows 1.1× per step).
export const stepSize = board({
  id: 'step-size',
  figure: 'Gradient descent and the step size',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'paths',
      title: 'Gradient descent from (3, 1.5) with three fixed step sizes',
      ...AXES,
      series: [
        ...levels([1, 4, 9, 15.75]),
        {
          kind: 'line',
          points: descent(0.05, 40),
          label: 'α = 0.05: smooth, slow',
          labelAt: [-2.2, 0.75],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: descent(0.18, 40),
          label: 'α = 0.18: zigzags, converges',
          labelAt: [-3.9, -1.25],
          tone: 'store'
        },
        {
          kind: 'line',
          points: descent(0.21, 4),
          label: 'α = 0.21: diverges',
          labelAt: [-2.4, 2.25],
          tone: 'serve'
        },
      ]
    },
    {
      type: 'table',
      id: 'factors',
      title: 'Each step multiplies the error by 1 − α × curvature',
      columns: ['α', 'x factor 1 − α', 'y factor 1 − 10α', 'iterations'],
      rows: [
        ['0.05', '0.95', '0.5', '291'],
        ['0.1 = 1/L', '0.9', '0', '142'],
        ['0.18', '0.82', '−0.8', '77'],
        ['0.21', '0.79', '−1.1', 'diverges'],
      ]
    },
  ],
  idea: 'Gradient descent, smoothness and step-size assumptions',
  board: [
    fact('b-rule', 'Gradient descent: xₖ₊₁ = xₖ − α∇f(xₖ)', 'convergence depends on α and the curvature'),
    facts('b-1', 'The smoothness assumption', ['∇f L-Lipschitz', 'quadratic: L = top eigenvalue', 'the bowl: L = 10']),
    facts('b-2', 'Stable and unstable steps', ['y-error × (1 − 10α)', 'α < 2/L = 0.2: converges', '0.18: flips, shrinks', '0.21: × 1.1, diverges']),
    caution('b-watch', 'A step safe for the steepest direction is slow for the flattest: at α = 0.1, y is solved at once but x needs 142 iterations.'),
  ]
})
