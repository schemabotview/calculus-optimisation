import { board, caution, fact, facts } from '../frame'
import type { P } from '../plot-kit'

// §8.1 — a 2 m × 1 m panel with areal density ρ(x, y) = 4 + x²y kg/m². Mass = ∫₀²∫₀¹ ρ dy dx = 8 + 4/3
// = 9.3333 kg (dblquad agrees). Midpoint sums on n × m grids computed: error falls 4× per refinement.
const N = 4
const M = 2
const cells: P[][] = []
for (let i = 0; i < N; i++)
  for (let j = 0; j < M; j++) {
    const [x0, x1, y0, y1] = [(i * 2) / N, ((i + 1) * 2) / N, j / M, (j + 1) / M]
    cells.push([[x0, y0], [x1, y0], [x1, y1], [x0, y1], [x0, y0]])
  }
const mids: P[] = cells.map((c) => [(c[0][0] + c[1][0]) / 2, (c[0][1] + c[2][1]) / 2])
const level = (c: number): P[] => Array.from({ length: 41 }, (_, k): P => {
  const x = Math.sqrt(c - 4) + ((2 - Math.sqrt(c - 4)) * k) / 40
  return [x, (c - 4) / (x * x)]
})
export const doubleSums = board({
  id: 'double-sums',
  figure: 'Double integrals as sums over cells',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'cells',
      title: 'A 2 m × 1 m panel, density ρ = 4 + x²y kg/m², cut into 4 × 2 cells',
      equal: true,
      x: { min: -0.1, max: 2.1, step: 0.25, label: 'x (m)' },
      y: { min: -0.1, max: 1.2, step: 0.25, label: 'y (m)' },
      series: [
        ...cells.map((p) => ({ kind: 'line' as const, points: p, tone: 'neutral' as const })),
        {
          kind: 'line',
          points: level(5),
          label: 'ρ = 5',
          labelAt: [0.72, 1.1],
          tone: 'ingest' as const
        },
        {
          kind: 'line',
          points: level(6),
          label: 'ρ = 6',
          labelAt: [1.2, 1.1],
          tone: 'store' as const
        },
        {
          kind: 'line',
          points: level(7),
          label: 'ρ = 7',
          labelAt: [1.62, 1.1],
          tone: 'serve' as const
        },
        {
          kind: 'scatter',
          points: mids,
          label: 'midpoints',
          labelAt: [0.08, 0.32],
          tone: 'infra' as const
        },
      ]
    },
    {
      type: 'table',
      id: 'midpoint',
      title: 'Mass ≈ Σ ρ(midpoint) × cell area',
      columns: ['grid', 'cells', 'midpoint sum (kg)', 'error'],
      rows: [
        ['2 × 1', '2', '9.2500', '0.083'],
        ['4 × 2', '8', '9.3125', '0.021'],
        ['8 × 4', '32', '9.3281', '0.0052'],
        ['16 × 8', '128', '9.3320', '0.0013'],
        ['limit', '∞', '9.3333', '0'],
      ]
    },
  ],
  idea: 'Double integrals and rectangular sums',
  board: [
    fact('b-rule', 'Cut a region into cells, treat as constant, add', '∫∫_R f dA = lim Σ f ΔA'),
    facts('b-1', 'Mass of a panel', ['2 m × 1 m, ρ = 4 + x²y', 'heaviest at (2, 1): 8 kg/m²', '4 × 2 midpoint: 9.3125 kg', 'exact 28/3 ≈ 9.3333 kg']),
    facts('b-2', 'As in one dimension', ['density × area: kg', 'double the grid: error ÷4', 'continuous: integrable']),
    caution('b-watch', '∫∫ 1 dA is R’s area. A density integrates to a total; the average density is total ÷ area: 9.3333/2 = 4.67 kg/m².'),
  ]
})
