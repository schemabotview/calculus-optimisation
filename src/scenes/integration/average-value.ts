import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'
import { power } from '../workshop'

// §4.7 — average power over the shift = (1/8)∫₀⁸ P = 4.273 kW; P equals its average at t ≈ 1.76 h and
// 6.24 h (brentq). Energy cost at £0.30 per kWh ≈ £10.26. All computed.
const avg = 4.2732
export const averageValue = board({
  id: 'average-value',
  figure: 'Average value and applications',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'average',
      title: 'Average power over the shift: 4.27 kW',
      x: { min: 0, max: 8.5, step: 1, label: 't (hours)' },
      y: { min: 0, max: 6, step: 1, label: 'P (kW)' },
      series: [
        {
          kind: 'line',
          points: [[0, 0], [0, avg], [8, avg], [8, 0]],
          dashed: true,
          label: 'average 4.27 kW',
          labelAt: [0.625, 3.0786],
          tone: 'infra'
        },
        {
          kind: 'line',
          points: sample(0, 8, 100, power),
          label: 'P(t)',
          labelAt: [3.6, 5.3],
          tone: 'ingest'
        },
        {
          kind: 'scatter',
          points: [[1.7573, avg]],
          label: 't ≈ 1.76',
          labelAt: [1.0, 4.65],
          tone: 'serve'
        },
        {
          kind: 'scatter',
          points: [[6.2427, avg]],
          label: 't ≈ 6.24',
          labelAt: [6.35, 4.65],
          tone: 'serve'
        },
      ]
    },
    {
      type: 'table',
      id: 'uses',
      title: 'Average value: (1/(b − a)) ∫ₐᵇ f',
      columns: ['quantity', 'working', 'value'],
      rows: [
        ['energy over the shift', '∫₀⁸ P dt', '34.19 kWh'],
        ['average power', '34.19 / 8', '4.27 kW'],
        ['energy cost at £0.30/kWh', '34.19 × 0.30', '£10.26'],
        ['§4.6: speed vs velocity', '4 m / 4 s vs (4/3 m) / 4 s', '1 m/s vs 1/3 m/s'],
      ]
    },
  ],
  idea: 'Average values and energy and distance applications',
  board: [
    fact('b-rule', 'Average of f on [a, b] = (1/(b − a)) ∫ₐᵇ f', 'the constant height with the same area'),
    facts('b-1', 'The shift’s average power', ['34.19 kWh / 8 h = 4.27 kW', 'a steady 4.27 kW: same energy', '£0.30/kWh: £10.26']),
    facts('b-2', 'The average is attained', ['continuous f: f(c) = average', 'P = 4.27 at 1.76 h, 6.24 h']),
    caution('b-watch', 'Chapter outcome: you can explain a definite integral, apply the fundamental theorem under its assumptions, and read accumulated change with units.'),
  ]
})
