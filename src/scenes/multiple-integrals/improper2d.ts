import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'

// §8.6 — e^(−(x² + y²)) over growing discs, π(1 − e^(−R²)), and growing squares, (√π erf R)²: both tend to
// π, which gives ∫ e^(−x²) dx = √π = 1.7725. Integrable because the integrand is positive (absolutely
// integrable). Values computed with math.erf.
const erf = (x: number) => {
  // Abramowitz–Stegun 7.1.26, |error| < 1.5 × 10⁻⁷: enough for a plotted curve
  const t = 1 / (1 + 0.3275911 * x)
  return 1 - (((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t) * Math.exp(-x * x)
}
export const improper2d = board({
  id: 'improper-2d',
  figure: 'Improper multiple integrals',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'exhaust',
      title: '∫∫ e^(−(x² + y²)) over growing discs and growing squares',
      x: { min: 0, max: 3, step: 0.25, label: 'R: disc radius, or square half-width' },
      y: { min: 0, max: 3.5, step: 0.5 },
      series: [
        {
          kind: 'line',
          points: [[0, Math.PI], [3, Math.PI]],
          label: 'π',
          labelAt: [2.85, 3.15],
          tone: 'neutral'
        },
        {
          kind: 'line',
          points: sample(0, 3, 80, (R) => (Math.sqrt(Math.PI) * erf(R)) ** 2),
          label: 'square [−R, R]²: (√π erf R)²',
          labelAt: [0.95, 3.125],
          tone: 'serve'
        },
        {
          kind: 'line',
          points: sample(0, 3, 80, (R) => Math.PI * (1 - Math.exp(-R * R))),
          label: 'disc r ≤ R: π(1 − e^(−R²))',
          labelAt: [1.25, 1.75],
          tone: 'ingest'
        },
      ]
    },
    {
      type: 'table',
      id: 'caveats',
      title: 'Improper integrals in the plane: absolute integrability first',
      columns: ['integral', 'value', 'reason'],
      rows: [
        ['∫∫_ℝ² e^(−(x² + y²)) dA', 'π', 'positive: any exhaustion'],
        ['so ∫ e^(−x²) dx over ℝ', '√π ≈ 1.7725', 'square = (1-D integral)²'],
        ['∫∫_(r ≤ 1) 1/r dA', '2π: converges', '∫ (1/r) r dr: the r helps'],
        ['∫∫_(r ≤ 1) 1/r² dA', 'diverges', '∫ 1/r dr'],
        ['(x² − y²)/(x² + y²)² on [0, 1]²', 'order-dependent', 'not absolutely integrable'],
      ]
    },
  ],
  idea: 'Improper integration and absolute-integrability caveats',
  board: [
    fact('b-rule', 'Unbounded region or singular point: a limit', '∫∫ |f| finite ⇒ every way of growing agrees'),
    facts('b-1', 'The Gaussian integral', ['discs: π(1 − e^(−R²)) → π', 'squares: → π as well', '∫ e^(−x²) over ℝ = √π']),
    facts('b-2', 'Dimension matters', ['∫∫ 1/r dA (r ≤ 1) = 2π', '∫₀¹ 1/x diverges', 'the r softens it', '∫∫ 1/r² still diverges']),
    caution('b-watch', 'Chapter outcome: you can set up multiple integrals, explain the Jacobian factor, and see when order or region changes need absolute integrability.'),
  ]
})
