import { board, caution, fact, facts } from '../frame'
import type { P } from '../plot-kit'
import { sample } from '../plot-kit'

// §4.6 — velocity v(t) = t² − 4t + 3 on [0, 4]. Net change ∫v = 4/3; total distance ∫|v| = 4, from three
// pieces of 4/3 each (computed with quad, split at the sign changes t = 1, 3).
const v = (t: number) => t * t - 4 * t + 3
const piece = (a: number, b: number): P[] => [...sample(a, b, 40, v), [b, 0], [a, 0]]
export const netTotal = board({
  id: 'net-total',
  figure: 'Net change versus total accumulation',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'velocity',
      title: 'Velocity v(t) = t² − 4t + 3 m/s for 4 seconds',
      x: { min: 0, max: 4.25, step: 0.5, label: 't (s)' },
      y: { min: -1.5, max: 3.5, step: 0.5, label: 'v (m/s)' },
      series: [
        {
          kind: 'line',
          points: piece(0, 1),
          label: '+4/3',
          labelAt: [0.15, 0.6],
          tone: 'store'
        },
        {
          kind: 'line',
          points: piece(1, 3),
          label: '−4/3',
          labelAt: [1.75, -0.55],
          tone: 'serve'
        },
        {
          kind: 'line',
          points: piece(3, 4),
          label: '+4/3',
          labelAt: [3.45, 0.6],
          tone: 'store'
        },
        {
          kind: 'line',
          points: sample(0, 4.2, 100, v),
          label: 'v(t)',
          labelAt: [3.85, 3.2],
          tone: 'ingest'
        },
      ]
    },
    {
      type: 'table',
      id: 'compare',
      title: 'Two different questions, two different integrals',
      columns: ['question', 'integral', 'value'],
      rows: [
        ['displacement: where?', '∫₀⁴ v(t) dt', '4/3 m'],
        ['distance: how far?', '∫₀⁴ |v(t)| dt', '4 m'],
        ['pieces of |v|', '4/3 + 4/3 + 4/3', 'v < 0 on (1, 3)'],
        ['workshop', 'net vs drawn energy', 'differ if power flows back'],
      ]
    },
  ],
  idea: 'Net change versus total accumulated magnitude',
  board: [
    fact('b-rule', '∫ rate: net change; ∫ |rate|: total amount'),
    facts('b-1', 'v(t) = t² − 4t + 3', ['forward, back, forward', 'displacement: 4/3 m', 'distance: 4 m', 'sign changes at t = 1, 3']),
    facts('b-2', 'Computing a total', ['find the sign changes', 'integrate each piece', 'add the absolute values']),
    caution('b-watch', 'Net and total energy agree only if power never flows back. Average velocity 1/3 m/s; average speed 1 m/s.'),
  ]
})
