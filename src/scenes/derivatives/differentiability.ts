import { board, caution, fact, facts } from '../frame'

// §2.2 — |x| is continuous at 0 but has a corner: its one-sided difference quotients are −1 and +1
// (computed), so there is no single tangent. x² has slope 0 there from both sides.
export const differentiability = board({
  id: 'differentiability',
  figure: 'A corner: continuous but not differentiable',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'corner',
      title: '|x| has a corner at 0; x² has a tangent there',
      equal: true,
      x: { min: -2, max: 2, step: 0.5 },
      y: { min: -0.5, max: 2, step: 0.5 },
      series: [
        {
          kind: 'line',
          points: [[-2, 2], [0, 0], [2, 2]],
          label: '|x|',
          labelAt: [-2.0929, 1.5964],
          tone: 'serve'
        },
        {
          kind: 'line',
          points: Array.from({ length: 41 }, (_, i): [
            number,
            number
          ] => { const x = -1.4 + (2.8 * i) / 40; return [x, x * x]; }),
          label: 'x²',
          labelAt: [1.2929, 1.5],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: [[-1, 0], [1, 0]],
          label: 'tangent to x²: y = 0',
          labelAt: [0.25, -0.46071],
          tone: 'store'
        },
        { kind: 'scatter', points: [[0, 0]], tone: 'infra' },
      ]
    },
    {
      type: 'table',
      id: 'one-sided',
      title: 'One-sided difference quotients at 0: differentiable needs the two sides to agree',
      columns: ['h', '|x|: (|h| − 0)/h', 'x²: (h² − 0)/h'],
      rows: [
        ['0.1', '1', '0.1'],
        ['0.01', '1', '0.01'],
        ['−0.01', '−1', '−0.01'],
        ['−0.1', '−1', '−0.1'],
        ['limit', 'right 1, left −1: none', '0 from both sides'],
      ]
    },
  ],
  idea: 'Differentiability, tangent lines and continuity',
  board: [
    fact('b-rule', 'Differentiable at a: f′(a) exists', 'tangent line y = f(a) + f′(a)(x − a)'),
    facts('b-1', 'A corner', ['|x| at 0: +1 right, −1 left', 'no single slope: no f′(0)']),
    facts('b-2', 'Continuity is weaker', ['differentiable ⇒ continuous', 'not conversely: |x| at 0', 'x² at 0: slope 0 both sides']),
    caution('b-watch', 'Switches, caps and absolute values make corners. Chapter 12 replaces the single slope with a set of slopes.'),
  ]
})
