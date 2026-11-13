import { board, caution, fact, facts } from '../frame'
import type { P } from '../plot-kit'
import { sample } from '../plot-kit'

// §5.3 — ∫₀¹ √(1 − x²) dx = π/4 by x = sin θ, and it is literally a quarter of the unit circle's area
// (quad: 0.785398…). The table is a method-selection guide.
const quarter: P[] = [...sample(0, 1, 80, (x) => Math.sqrt(1 - x * x)), [0, 0], [0, 1]]
export const trigSub = board({
  id: 'trig-sub',
  figure: 'Trigonometric substitution and choosing a method',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'quarter',
      title: '∫₀¹ √(1 − x²) dx is a quarter of the unit disc',
      equal: true,
      x: { min: -0.25, max: 1.5, step: 0.25 },
      y: { min: -0.25, max: 1.25, step: 0.25 },
      series: [
        {
          kind: 'line',
          points: quarter,
          label: 'area π/4',
          labelAt: [0.25, 0.4],
          tone: 'ingest'
        },
        {
          kind: 'segment',
          from: [0, 0],
          to: [Math.sin(0.9), Math.cos(0.9)],
          label: 'x = sin θ',
          labelAt: [0.95, 1.05],
          tone: 'infra'
        },
      ]
    },
    {
      type: 'table',
      id: 'choose',
      title: 'Which method? Read the shape of the integrand',
      columns: ['you see', 'try', 'example'],
      rows: [
        ['f(g(x)) g′(x)', 'substitution u = g(x)', '2x e^(x²)'],
        ['product of unlike types', 'parts', 'x eˣ, ln x'],
        ['rational function', 'partial fractions', '1/(x² − 1)'],
        ['√(a² − x²)', 'x = a sin θ', '√(1 − x²)'],
        ['none of these', 'numerical quadrature (§5.6)', 'e^(−x²)'],
      ]
    },
  ],
  idea: 'Trigonometric substitutions and method selection',
  board: [
    fact('b-rule', '√(a² − x²) simplifies with x = a sin θ', 'because 1 − sin² θ = cos² θ'),
    facts('b-1', 'A quarter circle', ['∫₀¹ √(1 − x²) dx, x = sin θ', 'limits 0 → 0, 1 → π/2', '∫ cos² θ dθ = π/4 ≈ 0.7854', 'a quarter of a unit disc']),
    facts('b-2', 'Choosing a method', ['f(g(x)) g′(x): substitution', 'products: parts', 'rational: partial fractions', 'no closed form: quadrature']),
    caution('b-watch', 'Not every integrand has an elementary antiderivative: e^(−x²) does not. Then the right method is numerical, with its error reported.'),
  ]
})
