import { board, caution, fact, facts } from '../frame'
import type { P } from '../plot-kit'

// §10.6 — f(x) = (x − 1)² + 1 near its minimiser 1, in double precision (Python floats): the computed
// f(1 + δ) − f(1) matches δ² down to δ = 10⁻⁷ and is exactly 0 from δ = 10⁻⁸, since δ² < ε·f ≈ 2.2 × 10⁻¹⁶.
// The derivative 2δ stays resolvable far below that.
const COMPUTED = [0.010000000000000009, 9.999999999998899e-5, 9.999999999177334e-7, 9.99999993922529e-9, 1.000000082740371e-10, 1.000088900582341e-12, 9.992007221626409e-15]
const exact = (k: number): P => [-k, -2 * k]
export const floating = board({
  id: 'floating',
  figure: 'Floating-point limits near a minimum',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'flat',
      title: 'How much f rises a distance δ from the minimiser of (x − 1)² + 1',
      x: { min: -10.5, max: 0, step: 1, label: 'log₁₀ δ' },
      y: { min: -21, max: 0, step: 2, label: 'log₁₀ rise' },
      series: [
        {
          kind: 'line',
          points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(exact),
          label: 'exact rise δ²',
          labelAt: [-9.8, -16.6],
          tone: 'ingest'
        },
        {
          kind: 'scatter',
          points: COMPUTED.map((v, i): P => [-(i + 1), Math.log10(v)]),
          label: 'computed f(1 + δ) − f(1)',
          labelAt: [-6.2, -9.6],
          tone: 'infra'
        },
        {
          kind: 'line',
          points: [[-10.5, Math.log10(2.2e-16)], [0, Math.log10(2.2e-16)]],
          label: 'ε ≈ 2.2 × 10⁻¹⁶: computed rise is 0 below δ = 10⁻⁸',
          labelAt: [-10.3, -15],
          tone: 'serve'
        },
      ]
    },
    {
      type: 'table',
      id: 'limits',
      title: 'Function values locate a minimiser only to about √ε',
      columns: ['δ', 'computed f(1 + δ) − f(1)', 'exact δ²', "f′(1 + δ) = 2δ"],
      rows: [
        ['10⁻²', '1.0 × 10⁻⁴', '10⁻⁴', '2 × 10⁻²'],
        ['10⁻⁵', '1.0000001 × 10⁻¹⁰', '10⁻¹⁰', '2 × 10⁻⁵'],
        ['10⁻⁷', '0.9992 × 10⁻¹⁴', '10⁻¹⁴', '2 × 10⁻⁷'],
        ['10⁻⁸', '0', '10⁻¹⁶', '2 × 10⁻⁸: still visible'],
      ]
    },
  ],
  idea: 'Finite-difference verification and floating-point effects',
  board: [
    fact('b-rule', 'Every computed value carries ε ≈ 2.2 × 10⁻¹⁶', 'near a flat minimum, that decides what can be seen'),
    facts('b-1', 'f is blind near x*', ['(x − 1)² + 1 rises by δ²', 'δ = 10⁻⁸: δ² below ε f', 'f locates x* only to √ε']),
    facts('b-2', 'Gradients see further', ['f′ = 2δ: still 2 × 10⁻⁸', 'test ‖∇f‖, not f changes', 'scale to the initial ‖∇f‖']),
    caution('b-watch', 'Check a coded gradient against central differences before running a solver: a wrong gradient makes it stop confidently at a non-stationary point.'),
  ]
})
