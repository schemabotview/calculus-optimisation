import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'

// §2.7 — position s(t) = t³ − 6t² + 9t with velocity s′ and acceleration s″ (values computed at
// integer t). The related-rates row: a spill's radius grows at 0.5 cm/s; at r = 4, dA/dt = 4π ≈ 12.57.
const s = (t: number) => t ** 3 - 6 * t * t + 9 * t
const v = (t: number) => 3 * t * t - 12 * t + 9
export const higherRelated = board({
  id: 'higher-related',
  figure: 'Higher derivatives and related rates',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'motion',
      title: 'Position s(t) = t³ − 6t² + 9t and velocity s′(t)',
      x: { min: 0, max: 4.2, step: 0.5, label: 't' },
      y: { min: -4, max: 10, step: 2 },
      series: [
        {
          kind: 'line',
          points: sample(0, 4.2, 100, s),
          label: 's(t)',
          labelAt: [1.9, 3.0],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: sample(0, 4.2, 100, v),
          label: 's′(t)',
          labelAt: [3.7825, 5.9],
          tone: 'infra'
        },
        {
          kind: 'scatter',
          points: [[1, 4]],
          label: 'stop at t = 1',
          labelAt: [0.55, 5.1],
          tone: 'serve'
        },
        {
          kind: 'scatter',
          points: [[3, 0]],
          label: 'stop at t = 3',
          labelAt: [3.05, -1.3],
          tone: 'serve'
        },
      ]
    },
    {
      type: 'table',
      id: 'table',
      title: 'Derivatives of derivatives, and a related rate',
      columns: ['t', 's', 's′ (velocity)', 's″ (acceleration)'],
      rows: [
        ['0', '0', '9', '−12'],
        ['1', '4', '0', '−6'],
        ['2', '2', '−3', '0'],
        ['3', '0', '0', '6'],
        ['spill: A = πr²', 'r = 4 cm', 'dr/dt = 0.5 cm/s', 'dA/dt = 2πr dr/dt ≈ 12.57 cm²/s'],
      ]
    },
  ],
  idea: 'Higher derivatives and related rates',
  board: [
    fact('b-rule', 'A derivative is a function', 'so it can be differentiated again'),
    facts('b-1', 'Position, velocity, acceleration', ['s = t³ − 6t² + 9t', 's′ = 0 at t = 1 and 3', 's″ = 6t − 12, sign at t = 2']),
    facts('b-2', 'Related rates', ['differentiate the relation in t', 'A = πr²: dA/dt = 2πr dr/dt', 'r = 4, dr/dt = 0.5: 12.57 cm²/s']),
    caution('b-watch', 'Substitute current values only after differentiating: fixing r = 4 first would make dA/dt look like 0.'),
  ]
})
