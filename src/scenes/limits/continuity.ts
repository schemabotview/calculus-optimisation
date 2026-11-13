import { board, fact, facts } from '../frame'
import { sample } from '../plot-kit'

// §1.5 — the three kinds of discontinuity on one graph, left to right: a removable hole at x = 1, a
// jump at x = 3, and an infinite discontinuity at x = 5.
export const continuity = board({
  id: 'continuity',
  figure: 'Continuity and its failures',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'kinds',
      title: 'Three ways a function can fail to be continuous',
      x: { min: 0, max: 7, step: 1 },
      y: { min: 0, max: 6, step: 1 },
      series: [
        { kind: 'line', points: [[0, 1], [0.97, 1.97]], tone: 'ingest' },
        { kind: 'line', points: [[1.03, 2.03], [3, 4]], tone: 'ingest' },
        {
          kind: 'scatter',
          points: [[1, 2]],
          label: 'removable: hole',
          labelAt: [0.2, 3.0],
          tone: 'serve'
        },
        {
          kind: 'scatter',
          points: [[3, 4]],
          label: 'jump: 4 to 1.5',
          labelAt: [3.15, 4.3],
          tone: 'serve'
        },
        { kind: 'line', points: [[3.03, 1.5], [4.4, 1.5]], tone: 'ingest' },
        { kind: 'line', points: sample(4.4, 4.96, 40, (x) => 1.5 + 0.18 / (5 - x) - 0.3), tone: 'ingest' },
        { kind: 'line', points: sample(5.04, 7, 60, (x) => 0.2 / (x - 5)), tone: 'ingest' },
        {
          kind: 'line',
          points: [[5, 0], [5, 6]],
          dashed: true,
          label: 'infinite at x = 5',
          labelAt: [5.15, 5.4],
          tone: 'neutral'
        },
      ]
    },
    {
      type: 'table',
      id: 'definition',
      title: 'Continuous at a: three conditions',
      columns: ['kind', 'which condition fails', 'repairable?'],
      rows: [
        ['removable (hole)', 'f(a) undefined or wrong', 'yes: redefine f(a)'],
        ['jump', 'left and right limits differ', 'no'],
        ['infinite', 'values grow without bound', 'no'],
        ['domain edge', 'only a one-sided limit exists', 'one-sided continuity'],
      ]
    },
  ],
  idea: 'Continuity, discontinuities and domain boundaries',
  board: [
    fact('b-rule', 'Continuous at a: f(a) defined, the limit exists, they agree'),
    facts('b-1', 'Three kinds of failure', ['removable: a hole', 'jump: one-sided limits differ', 'infinite: an asymptote']),
    facts('b-2', 'What continuity buys', ['combinations stay continuous', 'polynomials, eˣ, sin, cos', 'ln x on x > 0']),
    fact('b-3', 'At the edge of a domain', 'only one side exists: q(t) = 3t is continuous on all of [0, 8]'),
  ]
})
