import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'

// §5.4 — improper integrals as limits. ∫₁ᴿ 1/x² = 1 − 1/R → 1; ∫₁ᴿ 1/x = ln R → ∞. Truncated values
// computed for R = 10, 100, 1000.
export const improper = board({
  id: 'improper',
  figure: 'Improper integrals',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'tails',
      title: '1/x and 1/x² on [1, ∞): similar shapes, different fates',
      x: { min: 0, max: 10, step: 1 },
      y: { min: 0, max: 1.2, step: 0.2 },
      series: [
        {
          kind: 'line',
          points: sample(1, 10, 100, (x) => 1 / x),
          label: '1/x: area grows without bound',
          labelAt: [3.2, 0.42],
          tone: 'serve'
        },
        {
          kind: 'line',
          points: sample(1, 10, 100, (x) => 1 / (x * x)),
          label: '1/x²: total area 1',
          labelAt: [3.6, 0.072857],
          tone: 'ingest'
        },
      ]
    },
    {
      type: 'table',
      id: 'truncated',
      title: 'An improper integral is a limit of proper ones',
      columns: ['R', '∫₁ᴿ 1/x² = 1 − 1/R', '∫₁ᴿ 1/x = ln R'],
      rows: [
        ['10', '0.9', '2.30'],
        ['100', '0.99', '4.61'],
        ['1000', '0.999', '6.91'],
        ['∞', '1: converges', 'diverges'],
        ['also improper', '∫₀¹ 1/√x = 2: converges', '∫₀¹ 1/x: diverges'],
      ]
    },
  ],
  idea: 'Improper integrals and convergence',
  board: [
    fact('b-rule', 'Infinite interval or unbounded integrand: a limit', '∫₁^∞ f = lim ∫₁ᴿ f as R → ∞'),
    facts('b-1', 'Converges or diverges', ['finite limit: converges', '∫₁ᴿ 1/x² = 1 − 1/R → 1', '∫₁ᴿ 1/x = ln R → ∞', 'alike, but 1/x falls too slowly']),
    facts('b-2', 'The p-test', ['∫₁^∞ 1/xᵖ: p > 1', '∫₀¹ 1/xᵖ: p < 1', '∫₀¹ 1/√x = 2; 1/x diverges']),
    caution('b-watch', 'A divergent integral has no value: "= ∞" records divergence, not a number, and ∞ − ∞ from two divergent pieces means nothing.'),
  ]
})
