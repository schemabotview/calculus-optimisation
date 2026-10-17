import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §8.6 — e^(−(x² + y²)) over growing discs, π(1 − e^(−R²)), and growing squares, (√π erf R)²: both tend to
// π, which gives ∫ e^(−x²) dx = √π = 1.7725. Integrable because the integrand is positive (absolutely
// integrable). Values computed with math.erf.
const erf = (x: number) => {
  // Abramowitz–Stegun 7.1.26, |error| < 1.5 × 10⁻⁷: enough for a plotted curve
  const t = 1 / (1 + 0.3275911 * x)
  return 1 - (((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t) * Math.exp(-x * x)
}

export const improper2d: Scene = {
  id: 'improper-2d',
  title: 'Improper multiple integrals',
  flow: 'TB',
  nodes: [
    {
      id: 'exhaust',
      kind: 'plot',
      label: '∫∫ e^(−(x² + y²)) over growing discs and growing squares',
      sub: 'for a positive integrand every exhausting family gives the same limit, π',
      plot: {
        x: { min: 0, max: 3, step: 0.25, label: 'R: disc radius, or square half-width' },
        y: { min: 0, max: 3.5, step: 0.5 },
        series: [
          { kind: 'line', points: [[0, Math.PI], [3, Math.PI]], label: 'π', labelAt: [2.85, 3.3], color: '#9ca3af' },
          { kind: 'line', points: sample(0, 3, 80, (R) => (Math.sqrt(Math.PI) * erf(R)) ** 2), label: 'square [−R, R]²: (√π erf R)²', labelAt: [0.95, 2.75], color: '#f472b6' },
          { kind: 'line', points: sample(0, 3, 80, (R) => Math.PI * (1 - Math.exp(-R * R))), label: 'disc r ≤ R: π(1 − e^(−R²))', labelAt: [1.25, 1.75], color: '#60a5fa' },
        ],
      },
    },
    {
      id: 'caveats',
      kind: 'table',
      label: 'Improper integrals in the plane: absolute integrability first',
      sub: 'if ∫∫ |f| is finite, the limit does not depend on how the region grows',
      headers: ['integral', 'value', 'reason'],
      values: [
        ['∫∫_ℝ² e^(−(x² + y²)) dA', 'π', 'positive: any exhaustion'],
        ['so ∫ e^(−x²) dx over ℝ', '√π ≈ 1.7725', 'square = (1-D integral)²'],
        ['∫∫_(r ≤ 1) 1/r dA', '2π: converges', '∫ (1/r) r dr: the r helps'],
        ['∫∫_(r ≤ 1) 1/r² dA', 'diverges', '∫ 1/r dr'],
        ['(x² − y²)/(x² + y²)² on [0, 1]²', 'order-dependent', 'not absolutely integrable'],
      ],
    },
  ],
  edges: [],
}
