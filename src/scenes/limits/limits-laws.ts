import { board, caution, fact, facts } from '../frame'

// §1.3 — f(x) = (x² − 1)/(x − 1) is undefined at 1 but its values approach 2 from both sides; the
// approach table was computed in double precision (python). A jump would give different one-sided limits.
export const limitsLaws = board({
  id: 'limits-laws',
  figure: 'Limits from both sides',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'hole',
      title: 'f(x) = (x² − 1)/(x − 1): undefined at x = 1',
      x: { min: -1, max: 3, step: 0.5 },
      y: { min: 0, max: 4, step: 0.5 },
      series: [
        {
          kind: 'line',
          points: [[-1, 0], [0.92, 1.92]],
          label: 'f(x)',
          labelAt: [-0.4, 1.1],
          tone: 'ingest'
        },
        { kind: 'line', points: [[1.08, 2.08], [3, 4]], tone: 'ingest' },
        {
          kind: 'scatter',
          points: [[1, 2]],
          label: 'hole at (1, 2): no value',
          labelAt: [1.2, 1.6],
          tone: 'serve'
        },
      ]
    },
    {
      type: 'table',
      id: 'approach',
      title: 'Approach x = 1 from each side',
      columns: ['from the left', 'f(x)', 'from the right', 'f(x)'],
      rows: [
        ['x = 0.9', '1.9', 'x = 1.1', '2.1'],
        ['x = 0.99', '1.99', 'x = 1.01', '2.01'],
        ['x = 0.999', '1.999', 'x = 1.001', '2.001'],
        ['left limit', '2', 'right limit', '2'],
      ]
    },
  ],
  idea: 'One-sided and two-sided limits and limit laws',
  board: [
    fact('b-rule', 'lim f(x) as x → a: the value f approaches near a', 'without using f(a) itself'),
    facts('b-1', 'A function with a hole', ['(x² − 1)/(x − 1): no value at 1', 'elsewhere it is x + 1', 'so the limit at 1 is 2']),
    facts('b-2', 'One-sided limits', ['left: x < a; right: x > a', 'two-sided: both, and equal', 'laws: sums, products, quotients']),
    caution('b-watch', 'A table of nearby values suggests a limit; it does not prove one.'),
  ]
})
