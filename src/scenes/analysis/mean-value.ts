import { board, fact, facts } from '../frame'
import { sample } from '../plot-kit'

// §3.1 — mean value theorem for f(x) = x³ − 3x on [0, 2]: average slope (f(2) − f(0))/2 = 1, and
// f′(c) = 3c² − 3 = 1 at c = 2/√3 ≈ 1.155 (solved exactly). The tangent there is parallel to the secant.
const f = (x: number) => x ** 3 - 3 * x
const c = 2 / Math.sqrt(3)
export const meanValue = board({
  id: 'mean-value',
  figure: 'The mean value theorem',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'parallel',
      title: 'f(x) = x³ − 3x on [0, 2]',
      x: { min: -0.25, max: 2.25, step: 0.5 },
      y: { min: -2.5, max: 2.5, step: 1 },
      series: [
        {
          kind: 'line',
          points: sample(-0.1, 2.1, 100, f),
          label: 'f(x)',
          labelAt: [1.85, 0.4],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: [[0, 0], [2, 2]],
          dashed: true,
          label: 'secant: slope 1',
          labelAt: [0.25, 0.75],
          tone: 'neutral'
        },
        {
          kind: 'line',
          points: sample(c - 1, c + 1, 2, (x) => f(c) + (x - c)),
          label: 'tangent at c: slope 1',
          labelAt: [1.3, -2.25],
          tone: 'store'
        },
        {
          kind: 'scatter',
          points: [[c, f(c)]],
          label: 'c = 2/√3 ≈ 1.155',
          labelAt: [0.25, -1.75],
          tone: 'serve'
        },
      ]
    },
    {
      type: 'table',
      id: 'hypotheses',
      title: 'The theorems, and the hypotheses doing the work',
      columns: ['theorem', 'needs', 'gives'],
      rows: [
        ['Rolle', 'MVT’s, and f(a) = f(b)', 'some f′(c) = 0'],
        ['mean value', 'continuous; differentiable inside', 'f′(c) = secant slope'],
        ['|x| on [−1, 1]', 'no f′(0)', 'equal ends, f′ never 0'],
        ['consequence', 'f′ = 0 on an interval', 'f constant'],
      ]
    },
  ],
  idea: 'Rolle’s and the mean value theorems',
  board: [
    fact('b-rule', 'Mean value theorem: f′(c) = (f(b) − f(a))/(b − a)', 'f continuous on [a, b], differentiable inside'),
    facts('b-1', 'Picture it', ['average slope: the secant', 'a tangent parallel to it', 'x³ − 3x on [0, 2]: slope 1', 'c = 2/√3 ≈ 1.155']),
    facts('b-2', 'Rolle’s theorem', ['f(a) = f(b): some f′(c) = 0', '|x| on [−1, 1] fails it', 'no f′(0)']),
    fact('b-3', 'Why it matters', 'the bridge from slopes to values: f′ = 0 means constant; f′ > 0 means increasing'),
  ]
})
