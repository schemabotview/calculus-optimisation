import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'

// §3.2 — the sign of f′ decides where f rises or falls. f(x) = x³ − 3x has f′ = 3x² − 3, zero at ±1
// the sign chart reads off the rise–fall–rise pattern.
const f = (x: number) => x ** 3 - 3 * x
const df = (x: number) => 3 * x * x - 3
export const monotonicity = board({
  id: 'monotonicity',
  figure: 'Increasing, decreasing and critical points',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'signs',
      title: 'f(x) = x³ − 3x and f′(x) = 3x² − 3: f rises where f′ > 0 and falls where f′ < 0',
      x: { min: -2.2, max: 2.2, step: 0.5 },
      y: { min: -3.5, max: 6, step: 1 },
      series: [
        {
          kind: 'line',
          points: sample(-2.2, 2.2, 120, f),
          label: 'f(x)',
          labelAt: [1.8364, 0.2],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: sample(-2.2, 2.2, 120, df),
          label: 'f′(x)',
          labelAt: [1.5932, 4.2],
          tone: 'infra'
        },
        {
          kind: 'scatter',
          points: [[-1, 2]],
          label: 'f′(−1) = 0',
          labelAt: [-2.15, 2.9],
          tone: 'serve'
        },
        {
          kind: 'scatter',
          points: [[1, -2]],
          label: 'f′(1) = 0',
          labelAt: [0.55, -2.9036],
          tone: 'serve'
        },
      ]
    },
    {
      type: 'table',
      id: 'sign-chart',
      title: 'Sign chart for f′(x) = 3(x − 1)(x + 1)',
      columns: ['interval', 'sign of f′', 'f is'],
      rows: [
        ['x < −1', '+', 'increasing'],
        ['−1 < x < 1', '−', 'decreasing'],
        ['x > 1', '+', 'increasing'],
        ['x = ±1', '0', 'critical: candidates, not yet conclusions'],
      ]
    },
  ],
  idea: 'Monotonicity and critical points',
  board: [
    fact('b-rule', 'f′ > 0: increasing; f′ < 0: decreasing', 'on an interval, by the mean value theorem'),
    facts('b-1', 'Critical points', ['f′ = 0 or f′ undefined', 'corners count: |x| at 0', 'x³ − 3x: f′ = 3(x − 1)(x + 1)', 'zero at x = ±1']),
    facts('b-2', 'The sign chart', ['x < −1: rising', '−1 to 1: falling', 'x > 1: rising again', '−1 local max; 1 local min']),
    caution('b-watch', 'A critical point is a candidate, not a conclusion: f′ can vanish where f neither peaks nor dips, as x³ does at 0.'),
  ]
})
