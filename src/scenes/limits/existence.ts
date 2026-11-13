import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'

// §1.6 — g(x) = x³ − 3x + 1 on [0, 2]: continuous on a closed interval, so it attains a minimum (−1 at
// x = 1) and a maximum (3 at x = 2) and crosses 0 twice (roots ≈ 0.347, 1.532 by brentq). The table's
// failure cases each break one hypothesis.
const g = (x: number) => x ** 3 - 3 * x + 1
export const existence = board({
  id: 'existence',
  figure: 'Intermediate and extreme values',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'attained',
      title: 'g(x) = x³ − 3x + 1 on the closed interval [0, 2]',
      x: { min: -0.25, max: 2.25, step: 0.5 },
      y: { min: -1.5, max: 3.5, step: 1 },
      series: [
        {
          kind: 'line',
          points: sample(0, 2, 100, g),
          label: 'g(x)',
          labelAt: [1.5, 1.6],
          tone: 'ingest'
        },
        {
          kind: 'scatter',
          points: [[1, -1]],
          label: 'minimum −1 at x = 1',
          labelAt: [0.55, -1.35],
          tone: 'store'
        },
        {
          kind: 'scatter',
          points: [[2, 3]],
          label: 'maximum 3 at x = 2',
          labelAt: [1.05, 3.2],
          tone: 'store'
        },
        {
          kind: 'scatter',
          points: [[0.3473, 0]],
          label: 'root ≈ 0.347',
          labelAt: [-0.2, -0.45],
          tone: 'infra'
        },
        {
          kind: 'scatter',
          points: [[1.5321, 0]],
          label: 'root ≈ 1.532',
          labelAt: [1.6, -0.45],
          tone: 'infra'
        },
      ]
    },
    {
      type: 'table',
      id: 'theorems',
      title: 'Two existence theorems, and what breaks them',
      columns: ['theorem', 'needs', 'fails for'],
      rows: [
        ['intermediate value', 'continuous on [a, b]', 'a jump can skip over 0'],
        ['extreme value', 'continuous, closed, bounded', 'x on (0, 1): inf 0, no min'],
        ['', '', '1/x on [1, ∞): inf 0, no min'],
      ]
    },
  ],
  idea: 'Intermediate and extreme value theorems',
  board: [
    fact('b-rule', 'Two theorems turn continuity into guarantees', 'they promise a value exists, not where'),
    facts('b-1', 'Intermediate values', ['continuous: hits all between', 'g(0) = 1, g(1) = −1', 'so g = 0 at x ≈ 0.347']),
    facts('b-2', 'Extreme values', ['closed, bounded [a, b]', 'max and min are attained', '[0, 2]: min −1, max 3']),
    caution('b-watch', 'Hypotheses matter: x on the open interval (0, 1) approaches 0 but never reaches it, so "the best" need not exist.'),
  ]
})
