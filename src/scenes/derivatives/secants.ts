import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'

// §2.1 — secant slopes of f(x) = x² from x = 1, for shrinking h: (f(1 + h) − f(1))/h = 2 + h. They
// approach the tangent slope 2 (values computed).
const f = (x: number) => x * x
const secant = (h: number) => (x: number) => f(1) + ((f(1 + h) - f(1)) / h) * (x - 1)
export const secants = board({
  id: 'secants',
  figure: 'From average to instantaneous rate',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'approach',
      title: 'Secants of f(x) = x² through (1, 1), as h shrinks',
      x: { min: -0.5, max: 2.5, step: 0.5 },
      y: { min: -1, max: 4.5, step: 1 },
      series: [
        {
          kind: 'line',
          points: sample(-0.5, 2.1, 80, f),
          label: 'f(x) = x²',
          labelAt: [-0.45, 0.6],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: sample(0.2, 2.3, 2, secant(1)),
          dashed: true,
          label: 'h = 1: slope 3',
          labelAt: [1.35, 4.2],
          tone: 'neutral'
        },
        {
          kind: 'line',
          points: sample(0.2, 2.3, 2, secant(0.5)),
          dashed: true,
          label: 'h = 0.5: slope 2.5',
          labelAt: [2.0, 2.4],
          tone: 'infra'
        },
        {
          kind: 'line',
          points: sample(0.1, 2.3, 2, (x) => 1 + 2 * (x - 1)),
          label: 'tangent: slope 2',
          labelAt: [1.75, 1.2],
          tone: 'store'
        },
        {
          kind: 'scatter',
          points: [[1, 1]],
          label: '(1, 1)',
          labelAt: [0.55, 1.25],
          tone: 'serve'
        },
      ]
    },
    {
      type: 'table',
      id: 'quotients',
      title: 'Difference quotients at x = 1: f′(1) = lim (f(1 + h) − f(1))/h as h → 0',
      columns: ['h', '(f(1 + h) − f(1))/h', 'meaning'],
      rows: [
        ['1', '3', 'average rate over [1, 2]'],
        ['0.5', '2.5', 'average rate over [1, 1.5]'],
        ['0.1', '2.1', ''],
        ['0.01', '2.01', ''],
        ['h → 0', '2', 'instantaneous rate f′(1)'],
      ]
    },
  ],
  idea: 'Difference quotients and instantaneous rates',
  board: [
    fact('b-rule', 'Average rate over [a, a + h]: a secant’s slope', '(f(a + h) − f(a)) / h'),
    facts('b-1', 'Shrinking the interval', ['x² at 1: quotient 2 + h', 'h = 1, 0.5, 0.1: 3, 2.5, 2.1', 'limit 2: the tangent']),
    facts('b-2', 'The derivative', ['f′(a): the limit as h → 0', 'units: output per input', 'f′ is itself a function']),
    caution('b-watch', 'At h = 0 the quotient is 0/0. The derivative is a limit precisely because we cannot just set h = 0.'),
  ]
})
