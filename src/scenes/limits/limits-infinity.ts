import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'

// §1.4 — f(x) = (2x + 1)/(x − 1): vertical asymptote x = 1, horizontal asymptote y = 2. The table's
// indeterminate-form limits were checked numerically (values at large/small x computed).
const f = (x: number) => (2 * x + 1) / (x - 1)
export const limitsInfinity = board({
  id: 'limits-infinity',
  figure: 'Limits at infinity and asymptotes',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'asymptotes',
      title: 'f(x) = (2x + 1)/(x − 1): dashed: the asymptotes x = 1 and y = 2',
      x: { min: -6, max: 8, step: 2 },
      y: { min: -8, max: 10, step: 2 },
      series: [
        {
          kind: 'line',
          points: [[1, -8], [1, 10]],
          dashed: true,
          label: 'x = 1',
          labelAt: [-0.6, 9],
          tone: 'neutral'
        },
        {
          kind: 'line',
          points: [[-6, 2], [8, 2]],
          dashed: true,
          label: 'y = 2',
          labelAt: [-5.9, 2.5],
          tone: 'neutral'
        },
        { kind: 'line', points: sample(-6, 0.73, 120, f), tone: 'ingest' },
        {
          kind: 'line',
          points: sample(1.39, 8, 120, f),
          label: 'f(x)',
          labelAt: [3.2, 5.2],
          tone: 'ingest'
        },
      ]
    },
    {
      type: 'table',
      id: 'forms',
      title: 'Indeterminate forms: the form alone does not decide the limit',
      columns: ['limit', 'form', 'rewrite', 'value'],
      rows: [
        ['(x² − 1)/(x − 1), x → 1', '0/0', 'cancel x − 1', '2'],
        ['(2x + 1)/(x − 1), x → ∞', '∞/∞', 'divide by x', '2'],
        ['√(x² + x) − x, x → ∞', '∞ − ∞', 'multiply by the conjugate', '1/2'],
        ['x ln x, x → 0⁺', '0 · ∞', 'compare growth rates', '0'],
      ]
    },
  ],
  idea: 'Limits at infinity, asymptotes and indeterminate forms',
  board: [
    fact('b-rule', 'Horizontal asymptote: f settles as x grows', 'vertical asymptote: f grows without bound near a point'),
    facts('b-1', 'For (2x + 1)/(x − 1)', ['÷ x: (2 + 1/x)/(1 − 1/x) → 2', 'horizontal: y = 2', 'vertical: x = 1 (3 / 0)']),
    facts('b-2', 'Indeterminate forms', ['0/0, ∞/∞, ∞ − ∞, 0 · ∞', 'both 0/0: one → 2, one none', 'cancel, divide, conjugate']),
    caution('b-watch', '"Tends to infinity" means the limit does not exist as a number: it describes how it fails.'),
  ]
})
