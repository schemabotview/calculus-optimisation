import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'

// §6.7 — f(x) = e^(−1/x²) (f(0) = 0) is infinitely differentiable with every derivative 0 at 0, so its
// Taylor series about 0 is identically 0, yet f(0.5) = e⁻⁴ = 0.0183 and f(1) = e⁻¹ = 0.368. And
// 1/(1 + x²) is smooth on all of ℝ, but its series 1 − x² + x⁴ − … has radius 1 (complex poles at ±i).
const f = (x: number) => (x === 0 ? 0 : Math.exp(-1 / (x * x)))
export const smooth = board({
  id: 'smooth',
  figure: 'Smoothness is not equality to a Taylor series',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'flat',
      title: 'f(x) = e^(−1/x²), with f(0) = 0',
      x: { min: -3, max: 3, step: 0.5 },
      y: { min: -0.1, max: 0.8, step: 0.1 },
      series: [
        {
          kind: 'line',
          points: sample(-3, 3, 240, f),
          label: 'f(x)',
          labelAt: [2.3, 0.55],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: [[-3, 0], [3, 0]],
          label: 'Taylor series at 0: T(x) = 0',
          labelAt: [0.3, -0.06],
          tone: 'serve'
        },
        {
          kind: 'scatter',
          points: [[1, Math.exp(-1)]],
          label: 'f(1) = 0.368, T(1) = 0',
          labelAt: [1.1, 0.29],
          tone: 'infra'
        },
      ]
    },
    {
      type: 'table',
      id: 'cases',
      title: 'Three relationships between a function and its series',
      columns: ['function', 'smooth?', 'series converges?', 'equals f?'],
      rows: [
        ['eˣ, sin x, cos x', 'yes', 'for all x', 'yes, everywhere'],
        ['ln(1 + x)', 'on x > −1', 'on −1 < x ≤ 1', 'only there'],
        ['1/(1 + x²)', 'on all of ℝ', 'only |x| < 1', 'only |x| < 1'],
        ['e^(−1/x²)', 'on all of ℝ', 'everywhere, to 0', 'only at x = 0'],
      ]
    },
  ],
  idea: 'Smoothness versus equality to a Taylor series',
  board: [
    fact('b-rule', 'Analytic: its Taylor series converges to it', 'smooth (all derivatives) does not guarantee it'),
    facts('b-1', 'A series that misses', ['e^(−1/x²), f(0) = 0', 'every derivative 0 at 0', 'series: 0 everywhere', 'f(1) = 0.368, series 0']),
    facts('b-2', 'Smooth, small radius', ['1/(1 + x²): smooth on ℝ', 'series converges only |x| < 1']),
    caution('b-watch', 'Chapter outcome: you can tell sequence from series convergence, justify a Taylor approximation with its remainder, and say where an expansion holds.'),
  ]
})
