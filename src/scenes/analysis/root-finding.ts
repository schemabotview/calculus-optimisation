import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'
import { costSlope } from '../workshop'

// §3.7 — minimising c(q) by solving c′(q) = 0. Bisection on [2, 12] and Newton from q = 5, both run
// (python, double precision); Newton from q = 20 jumps to −20 and then cycles ±20.
const NEWTON = [5, 6.71875, 8.18253, 8.849724, 8.942778, 8.944272]
export const rootFinding = board({
  id: 'root-finding',
  figure: 'Root finding versus minimisation',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'newton',
      title: 'Solve c′(q) = 0.5 − 40/q² = 0 by Newton’s method: iterates from q₀ = 5 approach √80 ≈ 8.944',
      x: { min: 2, max: 13, step: 1, label: 'q' },
      y: { min: -1.2, max: 0.5, step: 0.25, label: "c′(q)" },
      series: [
        { kind: 'line', points: [[2, 0], [13, 0]], dashed: true, tone: 'neutral' },
        {
          kind: 'line',
          points: sample(2.5, 13, 120, costSlope),
          label: "c′(q)",
          labelAt: [11.2, 0.32],
          tone: 'ingest'
        },
        {
          kind: 'scatter',
          points: NEWTON.map((q): [
            number,
            number
          ] => [q, costSlope(q)]),
          label: 'Newton iterates',
          labelAt: [5.0607, -1.1364],
          tone: 'infra'
        },
        {
          kind: 'scatter',
          points: [[Math.sqrt(80), 0]],
          label: 'root √80',
          labelAt: [9.1, 0.12],
          tone: 'store'
        },
      ]
    },
    {
      type: 'table',
      id: 'traces',
      title: 'Two methods on the same equation, computed',
      columns: ['step', 'bisection midpoint', 'Newton from 5', 'Newton from 20'],
      rows: [
        ['1', '7.0', '6.719', '−20 (left the domain)'],
        ['2', '9.5', '8.183', '20'],
        ['3', '8.25', '8.850', '−20'],
        ['4', '8.875', '8.9428', 'cycles for ever'],
        ['5', '9.1875', '8.944272', ''],
      ]
    },
  ],
  idea: 'Bisection and Newton root finding versus minimisation',
  board: [
    fact('b-rule', 'Minimising c often means solving c′(q) = 0', 'two classic numerical methods'),
    facts('b-1', 'Bisection and Newton', ['bisection: halve a bracket', 'Newton: q ← q − c′/c″', 'from 5: 8.944272 in 5 steps', 'from 20: −20, then cycles']),
    fact('b-2', 'Root is not minimum', 'c′ = 0 also finds maxima and flat points: check c″, the bounds and endpoints'),
    caution('b-watch', 'Chapter outcome: you can analyse a one-variable function, and justify an optimum or explain why none is attained.'),
  ]
})
