import { board, caution, fact, facts } from '../frame'
import type { P } from '../plot-kit'
import { arrow } from '../plot-kit'
import { outputLevel } from '../workshop'

// §7.6 — overtime path g(t) = (16 + 2t, 9 + t): t hours of overtime add 2 labour hours (two people) and one
// machine hour per hour. (Q ∘ g)′(0) = ∇Q · g′(0) = [0.75 1.333][2; 1] = 2.833 chairs per overtime hour
// a forward difference with Δt = 0.01 gives 2.8333. Q along the path: 24, 26.83, 29.66, 32.50, 35.33.
const PATH: P[] = [0, 1, 2, 3, 4].map((t) => [16 + 2 * t, 9 + t])
export const chainRule = board({
  id: 'jacobian-chain',
  figure: 'Jacobians and the multivariable chain rule',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'overtime',
      title: 'Overtime moves the inputs along a path: (L, M) = (16 + 2t, 9 + t)',
      equal: true,
      x: { min: 12, max: 26, step: 2, label: 'L' },
      y: { min: 6, max: 15, step: 1, label: 'M' },
      series: [
        {
          kind: 'line',
          points: outputLevel(24, 12, 26),
          label: 'Q = 24',
          labelAt: [24.6, 6.3],
          tone: 'neutral'
        },
        {
          kind: 'line',
          points: outputLevel(30, 15, 26),
          label: 'Q = 30',
          labelAt: [24.6, 9.3],
          tone: 'neutral'
        },
        {
          kind: 'line',
          points: outputLevel(36, 21.6, 26),
          label: 'Q = 36',
          labelAt: [24.6, 13.2],
          tone: 'neutral'
        },
        {
          kind: 'scatter',
          points: PATH,
          label: 'path g(t)',
          labelAt: [20.429, 13.214],
          tone: 'ingest'
        },
        { ...arrow([17.5, 9 + 2 * 1.3333], '∇Q (×2)', 'serve', [16, 9]), labelAt: [18.214, 12.093] },
        { ...arrow([18, 10], 'g′(0) = (2, 1)', 'infra', [16, 9]), labelAt: [17.2, 8.5] },
      ]
    },
    {
      type: 'table',
      id: 'shapes',
      title: 'The chain rule multiplies Jacobians; their shapes must match',
      columns: ['object', 'map', 'Jacobian', 'value'],
      rows: [
        ['∇Q at (16, 9)', 'ℝ² → ℝ', '1 × 2', '[0.75  1.333]'],
        ['g′(0), the path', 'ℝ → ℝ²', '2 × 1', '[2; 1]'],
        ['(Q ∘ g)′(0)', 'ℝ → ℝ', '(1 × 2)(2 × 1)', '2.833'],
        ['finite difference', 'Δt = 0.01', 'check', '2.8333'],
        ['polar (r, θ) → (x, y)', 'ℝ² → ℝ²', '2 × 2', 'det = r (chapter 8)'],
      ]
    },
  ],
  idea: 'Jacobians, shapes and the multivariable chain rule',
  board: [
    fact('b-rule', 'The Jacobian: the m × n matrix of ∂gᵢ/∂xⱼ', 'the best linear approximation of g'),
    facts('b-1', 'The chain rule', ['(f ∘ g)′ = f′(g(x)) g′(x)', 'shapes chain: (m × k)(k × n)', 'sensitivities flow through']),
    facts('b-2', 'Overtime', ['(L, M) = (16 + 2t, 9 + t)', 'g′(0) = [2; 1]', 'dQ/dt = 1.5 + 1.333 = 2.833', 'finite difference: 2.8333']),
    caution('b-watch', 'Write each factor’s shape before multiplying: a transposed gradient still multiplies, but gives a 2 × 2 matrix instead of a number.'),
  ]
})
