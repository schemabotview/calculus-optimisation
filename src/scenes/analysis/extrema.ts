import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'

// §3.4 — global extrema on a closed interval: compare ALL candidates. g(x) = x³ − 3x on [−2, 2.5]:
// stationary points ±1 and endpoints −2, 2.5 (values computed). The global max is an endpoint; the
// global min (−2) is attained twice, at x = −2 and x = 1.
const g = (x: number) => x ** 3 - 3 * x
export const extrema = board({
  id: 'extrema',
  figure: 'Local and global extrema',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'candidates',
      title: 'g(x) = x³ − 3x on the closed interval [−2, 2.5]',
      x: { min: -2.25, max: 2.75, step: 0.5 },
      y: { min: -3, max: 9, step: 1 },
      series: [
        {
          kind: 'line',
          points: sample(-2, 2.5, 120, g),
          label: 'g(x)',
          labelAt: [1.6518, 1.1571],
          tone: 'ingest'
        },
        {
          kind: 'scatter',
          points: [[-2, -2]],
          label: 'endpoint −2',
          labelAt: [-2.0037, -2.75],
          tone: 'infra'
        },
        {
          kind: 'scatter',
          points: [[-1, 2]],
          label: 'local max 2',
          labelAt: [-1.45, 2.8],
          tone: 'serve'
        },
        {
          kind: 'scatter',
          points: [[1, -2]],
          label: 'local min −2',
          labelAt: [0.25552, -3.0071],
          tone: 'serve'
        },
        {
          kind: 'scatter',
          points: [[2.5, 8.125]],
          label: 'global max 8.125',
          labelAt: [1.2, 7.8],
          tone: 'store'
        },
      ]
    },
    {
      type: 'table',
      id: 'compare',
      title: 'The closed-interval method: evaluate every candidate',
      columns: ['candidate', 'why', 'g', 'verdict'],
      rows: [
        ['x = −2', 'endpoint', '−2', 'global min (tied)'],
        ['x = −1', 'g′ = 0', '2', 'local max only'],
        ['x = 1', 'g′ = 0', '−2', 'global min (tied)'],
        ['x = 2.5', 'endpoint', '8.125', 'global max'],
        ['corners', 'g′ undefined', 'none here', 'must be listed when present'],
      ]
    },
  ],
  idea: 'Local and global extrema, endpoints and nonsmooth candidates',
  board: [
    fact('b-rule', 'Local: beats its neighbours', 'global: beats every point of the domain'),
    facts('b-1', 'The closed-interval method', ['continuous on [a, b]: both exist', 'f′ = 0, f′ undefined, endpoints', 'evaluate all, compare']),
    facts('b-2', 'x³ − 3x on [−2, 2.5]', ['−2, −1, 1, 2.5 → −2, 2, −2, 8.125', 'max 8.125: an endpoint', 'min −2, attained twice']),
    caution('b-watch', 'Setting f′ = 0 alone misses endpoints and corners, and can return a local max when you wanted the min.'),
  ]
})
