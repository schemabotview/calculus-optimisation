import { board, caution, fact, facts } from '../frame'

// §7.7 — f(w) = ‖Xw − y‖² for 4 workshop observations: chairs finished y by hour t of a shift.
// ∇f = 2Xᵀ(Xw − y). At w = (2, 2): r = (0.8, 0.1, −1.1, −1.8), ∇f = (−4, −19). The minimiser
// w* = (0.25, 2.9) (numpy lstsq) has ∇f = 0 and f = 0.05.
const T = [1, 2, 3, 4]
const Y = [3.2, 5.9, 9.1, 11.8]
export const leastSquares = board({
  id: 'least-squares',
  figure: 'Gradients of linear, quadratic and least-squares functions',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'fit',
      title: 'Chairs made by hour t: two candidate lines y = w₀ + w₁t',
      x: { min: 0, max: 4.6, step: 0.5, label: 't, hours' },
      y: { min: 0, max: 14, step: 2, label: 'chairs' },
      series: [
        {
          kind: 'line',
          points: [[0, 2], [4.6, 11.2]],
          label: 'guess w = (2, 2): f = 5.10',
          labelAt: [3.1, 6.4],
          tone: 'serve' as const
        },
        {
          kind: 'line',
          points: [[0, 0.25], [4.6, 0.25 + 2.9 * 4.6]],
          label: 'w* = (0.25, 2.9): f = 0.05',
          labelAt: [0.3, 5.6],
          tone: 'ingest' as const
        },
        ...T.map((t, i) => ({ kind: 'segment' as const, from: [t, Y[i]] as [
            number,
            number
          ], to: [t, 2 + 2 * t] as [
            number,
            number
          ], tone: 'serve' as const })),
        {
          kind: 'scatter',
          points: T.map((t, i): [
            number,
            number
          ] => [t, Y[i]]),
          label: 'observed',
          labelAt: [4.1, 12.6],
          tone: 'infra' as const
        },
      ]
    },
    {
      type: 'table',
      id: 'derive',
      title: '∇‖Xw − y‖² = 2Xᵀ(Xw − y), with every shape checked',
      columns: ['quantity', 'shape', 'at w = (2, 2)'],
      rows: [
        ['X: rows [1, t]', '4 × 2', 't = 1, 2, 3, 4'],
        ['r = Xw − y', '4 × 1', '(0.8, 0.1, −1.1, −1.8)'],
        ['f = rᵀr', '1 × 1', '5.10'],
        ['∇f = 2Xᵀr', '(2 × 4)(4 × 1) = 2 × 1', '(−4, −19)'],
        ['at w* = (0.25, 2.9)', '2 × 1', '(0, 0): the minimum'],
      ]
    },
  ],
  idea: 'Linear, quadratic and least-squares gradient derivations',
  board: [
    fact('b-rule', 'Three rules cover most models', '∇(aᵀw) = a; ∇(wᵀAw) = (A + Aᵀ)w; the chain rule'),
    facts('b-1', 'Least squares', ['f(w) = ‖Xw − y‖²', '∇f = 2Xᵀ(Xw − y)', 'X 4 × 2, r 4 × 1', 'Xᵀr is 2 × 1, like w']),
    facts('b-2', 'On the workshop data', ['3.2, 5.9, 9.1, 11.8 at t = 1–4', 'w = (2, 2): ∇f = (−4, −19)', 'w* = (0.25, 2.9): ∇f = 0']),
    caution('b-watch', '∇f = 0 gives XᵀXw = Xᵀy, the normal equations: one solution only when X’s columns are independent.'),
  ]
})
