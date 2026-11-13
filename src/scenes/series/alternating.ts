import { board, caution, fact, facts } from '../frame'
import type { P } from '../plot-kit'

// §6.4 — the alternating harmonic series 1 − ½ + ⅓ − … → ln 2 = 0.693147. Partial sums bracket the limit
// and |Sₙ − ln 2| ≤ 1/(n + 1) at every n (computed n = 1…20). Absolutely, Σ 1/k diverges: conditional.
const S: P[] = []
for (let n = 1, s = 0; n <= 20; n++)
  S.push([n, (s += (-1) ** (n + 1) / n)])
export const alternating = board({
  id: 'alternating',
  figure: 'Alternating series and error bounds',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'bracket',
      title: 'Partial sums of 1 − ½ + ⅓ − ¼ + …',
      x: { min: 0, max: 20, step: 2, label: 'n' },
      y: { min: 0.4, max: 1.05, step: 0.1, label: 'Sₙ' },
      series: [
        {
          kind: 'line',
          points: [[0, Math.LN2], [20, Math.LN2]],
          label: 'ln 2 = 0.6931',
          labelAt: [16.5, 0.71571],
          tone: 'neutral'
        },
        { kind: 'line', points: S, tone: 'ingest' },
        {
          kind: 'scatter',
          points: S,
          label: 'Sₙ',
          labelAt: [1.6, 0.98],
          tone: 'ingest'
        },
      ]
    },
    {
      type: 'table',
      id: 'bound',
      title: 'The alternating series bound: |error| ≤ next term',
      columns: ['n', 'Sₙ', '|Sₙ − ln 2|', 'bound 1/(n + 1)'],
      rows: [
        ['1', '1.0000', '0.3069', '0.5000'],
        ['2', '0.5000', '0.1931', '0.3333'],
        ['5', '0.7833', '0.0902', '0.1667'],
        ['10', '0.6456', '0.0475', '0.0909'],
        ['20', '0.6688', '0.0244', '0.0476'],
      ]
    },
  ],
  idea: 'Absolute and conditional convergence and alternating error bounds',
  board: [
    fact('b-rule', 'Absolute: Σ |aₖ| converges', 'conditional: Σ aₖ converges, Σ |aₖ| does not'),
    facts('b-1', 'The alternating series test', ['signs alternate, sizes fall', 'terms → 0: converges', '1 − ½ + ⅓ − … → ln 2', 'conditional: Σ 1/k diverges']),
    facts('b-2', 'A built-in error bound', ['sums straddle the limit', '|Sₙ − S| ≤ |aₙ₊₁|', 'S₁₀: error 0.0475 ≤ 0.0909', '4 decimals: n ≈ 10 000']),
    caution('b-watch', 'A conditionally convergent series can be rearranged to sum to any number: only absolute convergence makes the order irrelevant.'),
  ]
})
