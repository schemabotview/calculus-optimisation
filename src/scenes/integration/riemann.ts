import type { Scene } from '@graphlearning/flow'
import type { PlotPoint } from '@graphlearning/flow'
import { sample } from '../plot-kit'
import { power } from '../workshop'

// §4.1 — energy over the shift approximated by rectangles under the power curve P(t) = 3 + 2 sin(πt/8).
// Sums computed (python): left = right here because P(0) = P(8); exact ∫₀⁸ P = 24 + 32/π ≈ 34.186 kWh.
const n = 4
const h = 8 / n
const rects: PlotPoint[][] = Array.from({ length: n }, (_, i) => {
  const t0 = i * h
  const y = power(t0 + h / 2)
  return [[t0, 0], [t0, y], [t0 + h, y], [t0 + h, 0]]
})

export const riemann: Scene = {
  id: 'riemann',
  title: 'Riemann sums',
  flow: 'TB',
  nodes: [
    {
      id: 'rectangles',
      kind: 'plot',
      label: 'Energy ≈ sum of power × time, midpoint rule, n = 4',
      sub: 'P(t) = 3 + 2 sin(πt/8) kW; left and right sums agree only because P(0) = P(8)',
      plot: {
        x: { min: 0, max: 8.5, step: 1, label: 't (hours)' },
        y: { min: 0, max: 6, step: 1, label: 'P (kW)' },
        series: [
          ...rects.map((r) => ({ kind: 'line' as const, points: [...r], color: '#f59e0b' })),
          { kind: 'line', points: sample(0, 8, 100, power), label: 'P(t)', labelAt: [3.6, 5.3], color: '#60a5fa' },
        ],
      },
    },
    {
      id: 'sums',
      kind: 'table',
      label: 'Riemann sums converge to the integral',
      sub: 'exact ∫₀⁸ P(t) dt = 24 + 32/π ≈ 34.186 kWh',
      headers: ['n', 'left = right', 'midpoint', 'midpoint error'],
      values: [
        ['4', '33.657', '34.453', '0.267'],
        ['8', '34.055', '34.252', '0.066'],
        ['16', '34.153', '34.202', '0.016'],
        ['64', '34.184', '34.187', '0.001'],
      ],
    },
  ],
  edges: [],
}
