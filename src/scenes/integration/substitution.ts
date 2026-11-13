import { board, caution, fact, facts } from '../frame'
import type { P } from '../plot-kit'
import { sample } from '../plot-kit'

// §4.5 — u = x² turns ∫₀¹ 2x e^(x²) dx into ∫₀¹ eᵘ du = e − 1 ≈ 1.718 (both quadratures computed). The
// two integrands look different but enclose the same area over their own intervals.
const closed = (f: (x: number) => number): P[] => [...sample(0, 1, 60, f), [1, 0], [0, 0]]
export const substitution = board({
  id: 'substitution',
  figure: 'Substitution and transformed limits',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'equal-areas',
      title: 'Two integrands, one area: e − 1 ≈ 1.718',
      x: { min: 0, max: 1.25, step: 0.25, label: 'x, or u' },
      y: { min: 0, max: 6, step: 1 },
      series: [
        {
          kind: 'line',
          points: closed((x) => 2 * x * Math.exp(x * x)),
          label: '2x e^(x²)',
          labelAt: [0.55, 3.4],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: closed(Math.exp),
          label: 'eᵘ',
          labelAt: [1.02, 2.6],
          tone: 'infra'
        },
      ]
    },
    {
      type: 'table',
      id: 'steps',
      title: 'Change the variable, and change the limits with it: u = g(x), du = g′(x) dx',
      columns: ['step', 'example 1', 'example 2'],
      rows: [
        ['integral', '∫₀¹ 2x e^(x²) dx', '∫₀^(π/2) sin x cos x dx'],
        ['substitute', 'u = x², du = 2x dx', 'u = sin x, du = cos x dx'],
        ['new limits', 'x = 0 → u = 0; x = 1 → u = 1', 'u from 0 to 1'],
        ['result', '∫₀¹ eᵘ du = e − 1 ≈ 1.718', '∫₀¹ u du = 1/2'],
      ]
    },
  ],
  idea: 'Substitution and transformed limits',
  board: [
    fact('b-rule', 'The chain rule backwards', '∫ f(g(x)) g′(x) dx = ∫ f(u) du, u = g(x)'),
    facts('b-1', 'A worked case', ['∫₀¹ 2x e^(x²) dx', 'u = x², du = 2x dx', 'limits move: 0 → 0, 1 → 1', 'e − 1 ≈ 1.718']),
    facts('b-2', 'Why the areas match', ['different curves on [0, 1]', 'both integrate to 1.718', 'stretch and rescale']),
    caution('b-watch', 'Change the limits, or substitute back before evaluating: mixing u-limits with an x-expression gives wrong answers.'),
  ]
})
