import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'

// §5.2 — 1/(x² − 1) = ½·1/(x − 1) − ½·1/(x + 1). On [2, 3] the integral is ½ ln(3/2) ≈ 0.2027 (matches
// quad to 16 digits). The plot shows the function as the difference of the two simple pieces.
const f = (x: number) => 1 / (x * x - 1)
const a = (x: number) => 0.5 / (x - 1)
const b = (x: number) => 0.5 / (x + 1)
export const partialFractions = board({
  id: 'partial-fractions',
  figure: 'Partial fractions',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'split',
      title: '1/(x² − 1) as a difference of simple fractions, for x > 1',
      x: { min: 1, max: 5, step: 0.5 },
      y: { min: 0, max: 2.5, step: 0.5 },
      series: [
        {
          kind: 'line',
          points: sample(1.2, 5, 100, a),
          label: '½/(x − 1)',
          labelAt: [1.35, 2.2],
          tone: 'infra'
        },
        {
          kind: 'line',
          points: sample(1.2, 5, 100, f),
          label: '1/(x² − 1)',
          labelAt: [1.65, 1.05],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: sample(1.2, 5, 100, b),
          label: '½/(x + 1)',
          labelAt: [3.9, 0.22],
          tone: 'store'
        },
      ]
    },
    {
      type: 'table',
      id: 'steps',
      title: 'Factor, split, integrate each piece',
      columns: ['step', 'working'],
      rows: [
        ['factor', 'x² − 1 = (x − 1)(x + 1)'],
        ['split', '1/((x − 1)(x + 1)) = A/(x − 1) + B/(x + 1), A = ½, B = −½'],
        ['integrate', '½ ln |x − 1| − ½ ln |x + 1| + C'],
        ['evaluate on [2, 3]', '½ ln(3/2) ≈ 0.2027, matching quadrature'],
        ['if degree top ≥ bottom', 'divide polynomials first'],
      ]
    },
  ],
  idea: 'Partial fractions and rational integrals',
  board: [
    fact('b-rule', 'A rational function with a factoring denominator', 'splits into simple fractions: logs or powers'),
    facts('b-1', 'The method', ['x² − 1 = (x − 1)(x + 1)', 'A/(x − 1) + B/(x + 1)', '1 = A(x + 1) + B(x − 1)', 'A = ½, B = −½']),
    facts('b-2', 'Integrate the pieces', ['½ ln |x − 1| − ½ ln |x + 1|', 'on [2, 3]: ½ ln(3/2) ≈ 0.2027', 'quadrature agrees']),
    caution('b-watch', 'Top degree must be below the bottom’s (else divide first); a repeated factor needs two terms; and the interval must avoid the roots ±1.'),
  ]
})
