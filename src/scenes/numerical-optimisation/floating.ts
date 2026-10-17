import type { Scene } from '@graphlearning/flow'
import type { PlotPoint } from '@graphlearning/flow'

// §10.6 — f(x) = (x − 1)² + 1 near its minimiser 1, in double precision (Python floats): the computed
// f(1 + δ) − f(1) matches δ² down to δ = 10⁻⁷ and is exactly 0 from δ = 10⁻⁸, since δ² < ε·f ≈ 2.2 × 10⁻¹⁶.
// The derivative 2δ stays resolvable far below that.
const COMPUTED = [0.010000000000000009, 9.999999999998899e-5, 9.999999999177334e-7, 9.99999993922529e-9, 1.000000082740371e-10, 1.000088900582341e-12, 9.992007221626409e-15]
const exact = (k: number): PlotPoint => [-k, -2 * k]

export const floating: Scene = {
  id: 'floating',
  title: 'Floating-point limits near a minimum',
  flow: 'TB',
  nodes: [
    {
      id: 'flat',
      kind: 'plot',
      label: 'How much f rises a distance δ from the minimiser of (x − 1)² + 1',
      sub: 'below δ ≈ 10⁻⁸ the rise δ² is smaller than the spacing of floating-point numbers near f = 1',
      plot: {
        x: { min: -10.5, max: 0, step: 1, label: 'log₁₀ δ' },
        y: { min: -21, max: 0, step: 2, label: 'log₁₀ rise' },
        series: [
          { kind: 'line', points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(exact), label: 'exact rise δ²', labelAt: [-9.8, -16.6], color: '#60a5fa' },
          { kind: 'scatter', points: COMPUTED.map((v, i): PlotPoint => [-(i + 1), Math.log10(v)]), label: 'computed f(1 + δ) − f(1)', labelAt: [-6.2, -9.6], color: '#f59e0b' },
          { kind: 'line', points: [[-10.5, Math.log10(2.2e-16)], [0, Math.log10(2.2e-16)]], label: 'ε ≈ 2.2 × 10⁻¹⁶: computed rise is 0 below δ = 10⁻⁸', labelAt: [-10.3, -15], color: '#f472b6' },
        ],
      },
    },
    {
      id: 'limits',
      kind: 'table',
      label: 'Function values locate a minimiser only to about √ε',
      sub: 'computed in double precision',
      headers: ['δ', 'computed f(1 + δ) − f(1)', 'exact δ²', "f′(1 + δ) = 2δ"],
      values: [
        ['10⁻²', '1.0 × 10⁻⁴', '10⁻⁴', '2 × 10⁻²'],
        ['10⁻⁵', '1.0000001 × 10⁻¹⁰', '10⁻¹⁰', '2 × 10⁻⁵'],
        ['10⁻⁷', '0.9992 × 10⁻¹⁴', '10⁻¹⁴', '2 × 10⁻⁷'],
        ['10⁻⁸', '0', '10⁻¹⁶', '2 × 10⁻⁸: still visible'],
      ],
    },
  ],
  edges: [],
}
