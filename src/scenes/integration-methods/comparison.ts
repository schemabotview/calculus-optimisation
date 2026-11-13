import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'

// §5.5 — comparison: 0 ≤ e^(−x²) ≤ e^(−x) on [1, ∞), and ∫ e^(−x) converges (to e⁻¹), so ∫ e^(−x²)
// converges (quad: 0.1394). Misleading cutoffs: ∫₁ᴿ x^(−1.1) converges to 10, but R = 1000 gives only 4.99.
export const comparison = board({
  id: 'comparison',
  figure: 'Comparison and misleading cutoffs',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'bound',
      title: 'Bound an integrand you cannot integrate by one you can',
      x: { min: 1, max: 4, step: 0.5 },
      y: { min: 0, max: 0.42, step: 0.1 },
      series: [
        {
          kind: 'line',
          points: sample(1, 4, 100, (x) => Math.exp(-x)),
          label: 'e^(−x): area 0.368',
          labelAt: [1.9, 0.19],
          tone: 'infra'
        },
        {
          kind: 'line',
          points: sample(1, 4, 100, (x) => Math.exp(-x * x)),
          label: 'e^(−x²): area 0.139',
          labelAt: [1.0202, 0.024],
          tone: 'ingest'
        },
      ]
    },
    {
      type: 'table',
      id: 'cutoffs',
      title: 'A finite cutoff can mislead badly',
      columns: ['R', 'x^(−1.1): converges to 10', '1/x: diverges'],
      rows: [
        ['10', '2.06', '2.30'],
        ['100', '3.69', '4.61'],
        ['1000', '4.99', '6.91'],
        ['∞', '10', '∞'],
        ['lesson', 'half the area lies beyond R = 1000', 'the two look alike up close'],
      ]
    },
  ],
  idea: 'Comparison reasoning and divergent contrasts',
  board: [
    fact('b-rule', 'No antiderivative? Bound it by one that has one', '0 ≤ f ≤ g and ∫ g converges ⇒ ∫ f converges'),
    facts('b-1', 'A bound that settles it', ['on [1, ∞): e^(−x²) ≤ e^(−x)', '∫₁^∞ e^(−x) = 1/e ≈ 0.368', 'so it converges: 0.1394', 'f ≥ g, ∫ g diverges ⇒ diverges']),
    facts('b-2', 'A cutoff can mislead', ['∫ x^(−1.1) converges to 10', 'at R = 1000: only 4.99', '∫ 1/x diverges; reads 6.91']),
    caution('b-watch', 'A truncated integral cannot tell convergence from divergence. Decide by reasoning (comparison, p-test), then compute the value.'),
  ]
})
