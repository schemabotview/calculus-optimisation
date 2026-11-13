import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'

// §2.8 — the tangent line to √x at 4, L(x) = 2 + (x − 4)/4, as an approximation. Errors computed:
// tiny near 4, growing with distance — the approximation is local.
export const linearisation = board({
  id: 'linearisation',
  figure: 'Linearisation and its limits',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'tangent-model',
      title: '√x and its linearisation at x = 4: L(x) = √4 + (1/(2√4))(x − 4) = 2 + (x − 4)/4',
      x: { min: 0, max: 10, step: 1 },
      y: { min: 0, max: 3.6, step: 0.5 },
      series: [
        {
          kind: 'line',
          points: sample(0, 10, 120, Math.sqrt),
          label: '√x',
          labelAt: [7.3, 2.45],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: sample(0, 10, 2, (x) => 2 + (x - 4) / 4),
          label: 'L(x)',
          labelAt: [7.3, 3.2],
          tone: 'infra'
        },
        {
          kind: 'scatter',
          points: [[4, 2]],
          label: '(4, 2)',
          labelAt: [3.4, 2.25],
          tone: 'store'
        },
        {
          kind: 'segment',
          from: [9, 3],
          to: [9, 3.25],
          label: 'error 0.25 at x = 9',
          labelAt: [7.1, 3.45],
          tone: 'serve'
        },
      ]
    },
    {
      type: 'table',
      id: 'errors',
      title: 'Approximation error grows with distance: computed: L(x) − √x',
      columns: ['x', '√x', 'L(x)', 'error'],
      rows: [
        ['4.1', '2.02485', '2.025', '0.00015'],
        ['4.5', '2.12132', '2.125', '0.0037'],
        ['5', '2.23607', '2.25', '0.014'],
        ['9', '3', '3.25', '0.25'],
      ]
    },
  ],
  idea: 'Linearisation, differentials and approximation limits',
  board: [
    fact('b-rule', 'Near a, f is close to its tangent line', 'L(x) = f(a) + f′(a)(x − a)'),
    facts('b-1', 'Approximating √x near 4', ['L(x) = 2 + (x − 4)/4', 'error 0.00015 at 4.1', '0.014 at 5; 0.25 at 9', 'dy = 0.125 vs 0.121 at 4.5']),
    fact('b-2', 'Why the error grows', 'the tangent ignores curvature: error ~ (x − a)² near a (chapter 6)'),
    caution('b-watch', 'Chapter outcome: you can differentiate from first principles, apply the rules, read units, and judge where a linear approximation holds.'),
  ]
})
