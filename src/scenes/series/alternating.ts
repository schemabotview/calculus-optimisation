import type { Scene } from '@graphlearning/flow'
import type { PlotPoint } from '@graphlearning/flow'

// §6.4 — the alternating harmonic series 1 − ½ + ⅓ − … → ln 2 = 0.693147. Partial sums bracket the limit
// and |Sₙ − ln 2| ≤ 1/(n + 1) at every n (computed n = 1…20). Absolutely, Σ 1/k diverges: conditional.
const S: PlotPoint[] = []
for (let n = 1, s = 0; n <= 20; n++) S.push([n, (s += (-1) ** (n + 1) / n)])

export const alternating: Scene = {
  id: 'alternating',
  title: 'Alternating series and error bounds',
  flow: 'TB',
  nodes: [
    {
      id: 'bracket',
      kind: 'plot',
      label: 'Partial sums of 1 − ½ + ⅓ − ¼ + …',
      sub: 'they alternate above and below ln 2, closing in by the size of the next term',
      plot: {
        x: { min: 0, max: 20, step: 2, label: 'n' },
        y: { min: 0.4, max: 1.05, step: 0.1, label: 'Sₙ' },
        series: [
          { kind: 'line', points: [[0, Math.LN2], [20, Math.LN2]], label: 'ln 2 = 0.6931', labelAt: [16.5, 0.66], color: '#9ca3af' },
          { kind: 'line', points: S, color: '#60a5fa' },
          { kind: 'scatter', points: S, label: 'Sₙ', labelAt: [1.6, 0.98], color: '#60a5fa' },
        ],
      },
    },
    {
      id: 'bound',
      kind: 'table',
      label: 'The alternating series bound: |error| ≤ next term',
      sub: 'holds when terms alternate in sign, shrink in size, and tend to 0',
      headers: ['n', 'Sₙ', '|Sₙ − ln 2|', 'bound 1/(n + 1)'],
      values: [
        ['1', '1.0000', '0.3069', '0.5000'],
        ['2', '0.5000', '0.1931', '0.3333'],
        ['5', '0.7833', '0.0902', '0.1667'],
        ['10', '0.6456', '0.0475', '0.0909'],
        ['20', '0.6688', '0.0244', '0.0476'],
      ],
    },
  ],
  edges: [],
}
