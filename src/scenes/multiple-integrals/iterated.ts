import { board, fact, facts } from '../frame'
import { sample } from '../plot-kit'

// §8.2 — f = (x² − y²)/(x² + y²)² on [0, 1]². Inner integrals in closed form: ∫₀¹ f dy = 1/(1 + x²) and
// ∫₀¹ f dx = −1/(1 + y²), so the two orders give π/4 and −π/4 (quad: ±0.785398). f is not absolutely
// integrable near the origin, so Fubini does not apply. The panel's 28/3 is the same in both orders.
export const iterated = board({
  id: 'iterated',
  figure: 'Iterated integrals and order of integration',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'inner',
      title: 'Inner integrals of f = (x² − y²)/(x² + y²)² on the unit square',
      x: { min: 0, max: 1, step: 0.1, label: 'outer variable (x or y)' },
      y: { min: -1.1, max: 1.1, step: 0.25 },
      series: [
        { kind: 'area', points: sample(0, 1, 60, (x) => 1 / (1 + x * x)), tone: 'ingest' },
        {
          kind: 'line',
          points: sample(0, 1, 60, (x) => 1 / (1 + x * x)),
          label: '∫₀¹ f dy = 1/(1 + x²)',
          labelAt: [0.55, 0.92],
          tone: 'ingest'
        },
        { kind: 'area', points: sample(0, 1, 60, (y) => -1 / (1 + y * y)), tone: 'serve' },
        {
          kind: 'line',
          points: sample(0, 1, 60, (y) => -1 / (1 + y * y)),
          label: '∫₀¹ f dx = −1/(1 + y²)',
          labelAt: [0.55, -0.95],
          tone: 'serve'
        },
      ]
    },
    {
      type: 'table',
      id: 'fubini',
      title: 'When may the order be swapped?',
      columns: ['integrand, region', 'dy dx', 'dx dy', 'why'],
      rows: [
        ['4 + x²y, [0, 2] × [0, 1]', '28/3', '28/3', 'continuous, bounded region'],
        ['(x² − y²)/(x² + y²)², [0, 1]²', 'π/4', '−π/4', '∫∫ |f| = ∞ near (0, 0)'],
        ['quadrature check', '0.7854', '−0.7854', 'the disagreement is real'],
      ]
    },
  ],
  idea: 'Iterated integrals and order-change conditions',
  board: [
    fact('b-rule', 'Over a rectangle: two single integrals', 'in y with x fixed, then in x'),
    facts('b-1', 'The panel, both ways', ['y first: 4 + x²/2 → 28/3', 'x first: 8 + 8y/3 → 28/3', 'order did not matter']),
    facts('b-2', 'Fubini’s theorem', ['∫∫ |f| finite: either order', 'continuous, bounded: yes', 'choose the easier order']),
    fact('b-3', 'When the order matters', '(x² − y²)/(x² + y²)²: π/4 one way, −π/4 the other; ∫∫ |f| = ∞'),
  ]
})
