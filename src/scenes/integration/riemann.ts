import { board, fact, facts } from '../frame'
import type { P } from '../plot-kit'
import { sample } from '../plot-kit'
import { power } from '../workshop'

// §4.1 — energy over the shift approximated by rectangles under the power curve P(t) = 3 + 2 sin(πt/8).
// Sums computed (python): left = right here because P(0) = P(8); exact ∫₀⁸ P = 24 + 32/π ≈ 34.186 kWh.
const n = 4
const h = 8 / n
const rects: P[][] = Array.from({ length: n }, (_, i) => {
  const t0 = i * h
  const y = power(t0 + h / 2)
  return [[t0, 0], [t0, y], [t0 + h, y], [t0 + h, 0]]
})
export const riemann = board({
  id: 'riemann',
  figure: 'Riemann sums',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'rectangles',
      title: 'Energy ≈ sum of power × time, midpoint rule, n = 4',
      x: { min: 0, max: 8.5, step: 1, label: 't (hours)' },
      y: { min: 0, max: 6, step: 1, label: 'P (kW)' },
      series: [
        ...rects.map((r) => ({ kind: 'line' as const, points: [...r], tone: 'infra' as const })),
        {
          kind: 'line',
          points: sample(0, 8, 100, power),
          label: 'P(t)',
          labelAt: [3.6, 5.3],
          tone: 'ingest' as const
        },
      ]
    },
    {
      type: 'table',
      id: 'sums',
      title: 'Riemann sums converge to the integral',
      columns: ['n', 'left = right', 'midpoint', 'midpoint error'],
      rows: [
        ['4', '33.657', '34.453', '0.267'],
        ['8', '34.055', '34.252', '0.066'],
        ['16', '34.153', '34.202', '0.016'],
        ['64', '34.184', '34.187', '0.001'],
      ]
    },
  ],
  idea: 'Riemann sums, partitions and integrability',
  board: [
    fact('b-rule', 'To total a changing quantity, cut, treat as constant, add'),
    facts('b-1', 'Energy from power', ['P(t) = 3 + 2 sin(πt/8) kW', 'energy ≈ Σ P(tᵢ) Δt', 'one rectangle per piece']),
    facts('b-2', 'Partitions, sample points', ['left, right, midpoint differ', 'midpoint: 34.45 (4), 34.187 (64)', 'exact: 24 + 32/π ≈ 34.186', 'error ÷4 per doubling']),
    fact('b-3', 'Integrable', 'every refinement gives the same limit; continuous functions on [a, b] always do'),
  ]
})
