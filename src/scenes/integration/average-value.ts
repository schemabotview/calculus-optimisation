import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'
import { power } from '../workshop'

// §4.7 — average power over the shift = (1/8)∫₀⁸ P = 4.273 kW; P equals its average at t ≈ 1.76 h and
// 6.24 h (brentq). Energy cost at £0.30 per kWh ≈ £10.26. All computed.
const avg = 4.2732

export const averageValue: Scene = {
  id: 'average-value',
  title: 'Average value and applications',
  flow: 'TB',
  nodes: [
    {
      id: 'average',
      kind: 'plot',
      label: 'Average power over the shift: 4.27 kW',
      sub: 'the rectangle of height 4.27 has the same area as under P(t)',
      plot: {
        x: { min: 0, max: 8.5, step: 1, label: 't (hours)' },
        y: { min: 0, max: 6, step: 1, label: 'P (kW)' },
        series: [
          { kind: 'line', points: [[0, 0], [0, avg], [8, avg], [8, 0]], dashed: true, label: 'average 4.27 kW', labelAt: [0.2, 3.85], color: '#f59e0b' },
          { kind: 'line', points: sample(0, 8, 100, power), label: 'P(t)', labelAt: [3.6, 5.3], color: '#60a5fa' },
          { kind: 'marker', at: [1.7573, avg], label: 't ≈ 1.76', labelAt: [1.0, 4.65], color: '#f472b6' },
          { kind: 'marker', at: [6.2427, avg], label: 't ≈ 6.24', labelAt: [6.35, 4.65], color: '#f472b6' },
        ],
      },
    },
    {
      id: 'uses',
      kind: 'table',
      label: 'Average value: (1/(b − a)) ∫ₐᵇ f',
      sub: 'continuous f attains its average somewhere (mean value theorem for integrals)',
      headers: ['quantity', 'working', 'value'],
      values: [
        ['energy over the shift', '∫₀⁸ P dt', '34.19 kWh'],
        ['average power', '34.19 / 8', '4.27 kW'],
        ['energy cost at £0.30/kWh', '34.19 × 0.30', '£10.26'],
        ['§4.6: speed vs velocity', '4 m / 4 s vs (4/3 m) / 4 s', '1 m/s vs 1/3 m/s'],
      ],
    },
  ],
  edges: [],
}
