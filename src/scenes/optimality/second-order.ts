import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §9.4 — slices through the origin of x² + y², x⁴ + y², −x⁴ + y², x³ + y² along the x-axis. All four have
// ∇f(0) = 0; only the first has a positive-definite Hessian. The others' Hessians are diag(0, 2): PSD,
// singular, so the test is silent and the slices decide.
export const secondOrder: Scene = {
  id: 'second-order',
  title: 'Second-order tests and degenerate cases',
  flow: 'TB',
  nodes: [
    {
      id: 'slices',
      kind: 'plot',
      label: 'Slices along the x-axis: x², x⁴, −x⁴ and x³',
      sub: 'all flat at 0; only x² has nonzero curvature there, the other three have f″(0) = 0',
      plot: {
        x: { min: -1.3, max: 1.3, step: 0.25 },
        y: { min: -1.3, max: 1.3, step: 0.25 },
        series: [
          { kind: 'line', points: sample(-1.14, 1.14, 80, (x) => x * x), label: 'x²: f″ = 2, minimum', labelAt: [-1.28, 1.2], color: '#60a5fa' },
          { kind: 'line', points: sample(-1.07, 1.07, 80, (x) => x ** 4), label: 'x⁴: f″ = 0, still a minimum', labelAt: [0.32, 1.2], color: '#34d399' },
          { kind: 'line', points: sample(-1.07, 1.07, 80, (x) => -(x ** 4)), label: '−x⁴: f″ = 0, a maximum', labelAt: [0.3, -1.2], color: '#f472b6' },
          { kind: 'line', points: sample(-1.09, 1.09, 80, (x) => x ** 3), label: 'x³: f″ = 0, neither', labelAt: [-1.28, -0.95], color: '#f59e0b' },
        ],
      },
    },
    {
      id: 'tests',
      kind: 'table',
      label: 'At a critical point, read the Hessian eigenvalues',
      sub: 'all > 0: strict local min; all < 0: max; mixed signs: saddle; a zero: inconclusive',
      headers: ['f(x, y)', 'Hessian at 0', 'eigenvalues', 'conclusion'],
      values: [
        ['x² + y²', 'diag(2, 2)', '2, 2', 'strict local minimum'],
        ['x² − y²', 'diag(2, −2)', '2, −2', 'saddle'],
        ['x⁴ + y²', 'diag(0, 2)', '0, 2', 'test silent: actually a min'],
        ['−x⁴ + y²', 'diag(0, 2)', '0, 2', 'test silent: not a min'],
        ['x³ − 3x + y² at (1, 0)', 'diag(6, 2)', '6, 2', 'strict local minimum'],
        ['x³ − 3x + y² at (−1, 0)', 'diag(−6, 2)', '−6, 2', 'saddle'],
      ],
    },
  ],
  edges: [],
}
