import type { Scene } from '@graphlearning/flow'
import type { PlotPoint } from '@graphlearning/flow'
import { arrow } from '../plot-kit'
import { outputLevel } from '../workshop'

// §7.6 — overtime path g(t) = (16 + 2t, 9 + t): t hours of overtime add 2 labour hours (two people) and one
// machine hour per hour. (Q ∘ g)′(0) = ∇Q · g′(0) = [0.75 1.333][2; 1] = 2.833 chairs per overtime hour;
// a forward difference with Δt = 0.01 gives 2.8333. Q along the path: 24, 26.83, 29.66, 32.50, 35.33.
const PATH: PlotPoint[] = [0, 1, 2, 3, 4].map((t) => [16 + 2 * t, 9 + t])

export const chainRule: Scene = {
  id: 'jacobian-chain',
  title: 'Jacobians and the multivariable chain rule',
  flow: 'TB',
  nodes: [
    {
      id: 'overtime',
      kind: 'plot',
      label: 'Overtime moves the inputs along a path: (L, M) = (16 + 2t, 9 + t)',
      sub: 'dots at t = 0 … 4 make 24, 26.8, 29.7, 32.5, 35.3 chairs: about 2.83 more per hour',
      plot: {
        equal: true,
        x: { min: 12, max: 26, step: 2, label: 'L' },
        y: { min: 6, max: 15, step: 1, label: 'M' },
        series: [
          { kind: 'line', points: outputLevel(24, 12, 26), label: 'Q = 24', labelAt: [24.6, 6.3], color: '#9ca3af' },
          { kind: 'line', points: outputLevel(30, 15, 26), label: 'Q = 30', labelAt: [24.6, 9.3], color: '#9ca3af' },
          { kind: 'line', points: outputLevel(36, 21.6, 26), label: 'Q = 36', labelAt: [24.6, 13.2], color: '#9ca3af' },
          { kind: 'scatter', points: PATH, label: 'path g(t)', labelAt: [21.2, 13.6], color: '#60a5fa' },
          { ...arrow([17.5, 9 + 2 * 1.3333], '∇Q (×2)', '#f472b6', [16, 9]), labelAt: [17.7, 11.9] },
          { ...arrow([18, 10], 'g′(0) = (2, 1)', '#f59e0b', [16, 9]), labelAt: [17.2, 8.5] },
        ],
      },
    },
    {
      id: 'shapes',
      kind: 'table',
      label: 'The chain rule multiplies Jacobians; their shapes must match',
      sub: 'a map from ℝⁿ to ℝᵐ has an m × n Jacobian',
      headers: ['object', 'map', 'Jacobian', 'value'],
      values: [
        ['∇Q at (16, 9)', 'ℝ² → ℝ', '1 × 2', '[0.75  1.333]'],
        ['g′(0), the path', 'ℝ → ℝ²', '2 × 1', '[2; 1]'],
        ['(Q ∘ g)′(0)', 'ℝ → ℝ', '(1 × 2)(2 × 1)', '2.833'],
        ['finite difference', 'Δt = 0.01', 'check', '2.8333'],
        ['polar (r, θ) → (x, y)', 'ℝ² → ℝ²', '2 × 2', 'det = r (chapter 8)'],
      ],
    },
  ],
  edges: [],
}
