import type { Scene } from '@graphlearning/flow'
import type { PlotPoint } from '@graphlearning/flow'

// §8.1 — a 2 m × 1 m panel with areal density ρ(x, y) = 4 + x²y kg/m². Mass = ∫₀²∫₀¹ ρ dy dx = 8 + 4/3
// = 9.3333 kg (dblquad agrees). Midpoint sums on n × m grids computed: error falls 4× per refinement.
const N = 4
const M = 2
const cells: PlotPoint[][] = []
for (let i = 0; i < N; i++)
  for (let j = 0; j < M; j++) {
    const [x0, x1, y0, y1] = [(i * 2) / N, ((i + 1) * 2) / N, j / M, (j + 1) / M]
    cells.push([[x0, y0], [x1, y0], [x1, y1], [x0, y1], [x0, y0]])
  }
const mids: PlotPoint[] = cells.map((c) => [(c[0][0] + c[1][0]) / 2, (c[0][1] + c[2][1]) / 2])
const level = (c: number): PlotPoint[] =>
  Array.from({ length: 41 }, (_, k): PlotPoint => {
    const x = Math.sqrt(c - 4) + ((2 - Math.sqrt(c - 4)) * k) / 40
    return [x, (c - 4) / (x * x)]
  })

export const doubleSums: Scene = {
  id: 'double-sums',
  title: 'Double integrals as sums over cells',
  flow: 'TB',
  nodes: [
    {
      id: 'cells',
      kind: 'plot',
      label: 'A 2 m × 1 m panel, density ρ = 4 + x²y kg/m², cut into 4 × 2 cells',
      sub: 'grey: the cells; dots: midpoints where ρ is sampled; curves: where ρ = 5, 6, 7',
      plot: {
        equal: true,
        x: { min: -0.1, max: 2.1, step: 0.25, label: 'x (m)' },
        y: { min: -0.1, max: 1.2, step: 0.25, label: 'y (m)' },
        series: [
          ...cells.map((p) => ({ kind: 'line' as const, points: p, color: '#9ca3af' })),
          { kind: 'line', points: level(5), label: 'ρ = 5', labelAt: [0.72, 1.1], color: '#60a5fa' },
          { kind: 'line', points: level(6), label: 'ρ = 6', labelAt: [1.2, 1.1], color: '#34d399' },
          { kind: 'line', points: level(7), label: 'ρ = 7', labelAt: [1.62, 1.1], color: '#f472b6' },
          { kind: 'scatter', points: mids, label: 'midpoints', labelAt: [0.08, 0.32], color: '#f59e0b' },
        ],
      },
    },
    {
      id: 'midpoint',
      kind: 'table',
      label: 'Mass ≈ Σ ρ(midpoint) × cell area',
      sub: 'exact: ∫₀² ∫₀¹ (4 + x²y) dy dx = 28/3 ≈ 9.3333 kg',
      headers: ['grid', 'cells', 'midpoint sum (kg)', 'error'],
      values: [
        ['2 × 1', '2', '9.2500', '0.083'],
        ['4 × 2', '8', '9.3125', '0.021'],
        ['8 × 4', '32', '9.3281', '0.0052'],
        ['16 × 8', '128', '9.3320', '0.0013'],
        ['limit', '∞', '9.3333', '0'],
      ],
    },
  ],
  edges: [],
}
