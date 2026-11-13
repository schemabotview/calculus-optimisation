import { board, fact, facts } from '../frame'
import { sample } from '../plot-kit'

// §9.4 — slices through the origin of x² + y², x⁴ + y², −x⁴ + y², x³ + y² along the x-axis. All four have
// ∇f(0) = 0; only the first has a positive-definite Hessian. The others' Hessians are diag(0, 2): PSD,
// singular, so the test is silent and the slices decide.
export const secondOrder = board({
  id: 'second-order',
  figure: 'Second-order tests and degenerate cases',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'slices',
      title: 'Slices along the x-axis: x², x⁴, −x⁴ and x³',
      x: { min: -1.3, max: 1.3, step: 0.25 },
      y: { min: -1.3, max: 1.3, step: 0.25 },
      series: [
        {
          kind: 'line',
          points: sample(-1.14, 1.14, 80, (x) => x * x),
          label: 'x²: f″ = 2, minimum',
          labelAt: [-1.0409, 1.04],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: sample(-1.07, 1.07, 80, (x) => x ** 4),
          label: 'x⁴: f″ = 0, still a minimum',
          labelAt: [0.18718, 1.04],
          tone: 'store'
        },
        {
          kind: 'line',
          points: sample(-1.07, 1.07, 80, (x) => -(x ** 4)),
          label: '−x⁴: f″ = 0, a maximum',
          labelAt: [0.3, -1.2],
          tone: 'serve'
        },
        {
          kind: 'line',
          points: sample(-1.09, 1.09, 80, (x) => x ** 3),
          label: 'x³: f″ = 0, neither',
          labelAt: [-1.0409, -1.2843],
          tone: 'infra'
        },
      ]
    },
    {
      type: 'table',
      id: 'tests',
      title: 'At a critical point, read the Hessian eigenvalues',
      columns: ['f(x, y)', 'Hessian at 0', 'eigenvalues', 'conclusion'],
      rows: [
        ['x² + y²', 'diag(2, 2)', '2, 2', 'strict local minimum'],
        ['x² − y²', 'diag(2, −2)', '2, −2', 'saddle'],
        ['x⁴ + y²', 'diag(0, 2)', '0, 2', 'test silent: actually a min'],
        ['−x⁴ + y²', 'diag(0, 2)', '0, 2', 'test silent: not a min'],
        ['x³ − 3x + y² at (1, 0)', 'diag(6, 2)', '6, 2', 'strict local minimum'],
        ['x³ − 3x + y² at (−1, 0)', 'diag(−6, 2)', '−6, 2', 'saddle'],
      ]
    },
  ],
  idea: 'Second-order necessary and sufficient tests and degenerate cases',
  board: [
    fact('b-rule', 'At a critical point, Hessian eigenvalues decide', 'a bowl, a dome or a saddle'),
    facts('b-1', 'Sufficient conditions', ['all > 0: strict local min', 'all < 0: strict local max', 'mixed: saddle', '(1, 0) min; (−1, 0) saddle']),
    facts('b-2', 'Necessary condition', ['local min ⇒ Hessian ⪰ 0', 'a negative eigenvalue: no min', '⪰ 0 alone proves nothing']),
    fact('b-3', 'Degenerate cases', 'x⁴ + y² and −x⁴ + y² share diag(0, 2) at 0; only higher terms decide'),
  ]
})
