import { board, caution, fact, facts } from '../frame'
import type { P } from '../plot-kit'

// §6.3 — three convergent series and the test that settles each, with partial sums computed:
// Σ (½)ᵏ → 1 (geometric), Σ k/2ᵏ → 2 (ratio test, ratio → ½), Σ 1/(k² + 1) → 1.0767 (compare with 1/k²).
const partial = (f: (k: number) => number, n = 20): P[] => {
  const out: P[] = []
  let s = 0
  for (let k = 1; k <= n; k++)
    out.push([k, (s += f(k))])
  return out
}
export const tests = board({
  id: 'tests',
  figure: 'Convergence tests',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'three',
      title: 'Partial sums of three convergent series',
      x: { min: 0, max: 20, step: 2, label: 'n' },
      y: { min: 0, max: 2.2, step: 0.25, label: 'Sₙ' },
      series: [
        {
          kind: 'scatter',
          points: partial((k) => k / 2 ** k),
          label: 'Σ k/2ᵏ → 2',
          labelAt: [14, 1.88],
          tone: 'infra'
        },
        {
          kind: 'scatter',
          points: partial((k) => 1 / (k * k + 1)),
          label: 'Σ 1/(k² + 1) → 1.077',
          labelAt: [12.5, 1.17],
          tone: 'store'
        },
        {
          kind: 'scatter',
          points: partial((k) => 0.5 ** k),
          label: 'Σ (½)ᵏ → 1',
          labelAt: [14, 0.8],
          tone: 'ingest'
        },
      ]
    },
    {
      type: 'table',
      id: 'which',
      title: 'Which test settles which series',
      columns: ['test', 'condition', 'example', 'verdict'],
      rows: [
        ['geometric', 'Σ rᵏ converges iff |r| < 1', 'Σ (½)ᵏ', 'converges to 1'],
        ['p-series', 'Σ 1/kᵖ converges iff p > 1', 'Σ 1/k, Σ 1/k²', 'diverges; converges'],
        ['comparison', '0 ≤ aₖ ≤ bₖ, Σ bₖ converges', '1/(k² + 1) ≤ 1/k²', 'converges'],
        ['ratio', 'lim |aₖ₊₁/aₖ| < 1', 'k/2ᵏ: ratio → ½', 'converges to 2'],
        ['ratio, limit 1', 'no conclusion', '1/k and 1/k² both give 1', 'use another test'],
      ]
    },
  ],
  idea: 'Geometric, p-series, comparison and ratio tests',
  board: [
    fact('b-rule', 'A test decides convergence without the sum', 'check its hypotheses first'),
    facts('b-1', 'Geometric and p-series', ['Σ rᵏ: |r| < 1', 'sum r/(1 − r) from k = 1', 'Σ 1/kᵖ: p > 1']),
    facts('b-2', 'Comparison and ratio', ['0 ≤ aₖ ≤ bₖ, Σ bₖ converges', 'Σ 1/(k² + 1) → 1.0767', 'ratio ρ < 1 converges', 'k/2ᵏ: ρ = ½, sum 2']),
    caution('b-watch', 'A ratio limit of exactly 1 says nothing: Σ 1/k and Σ 1/k² both give 1. A test says whether a sum exists; the value still needs computing.'),
  ]
})
