import type { Scene } from '@graphlearning/flow'

// §7.7 — f(w) = ‖Xw − y‖² for 4 workshop observations: chairs finished y by hour t of a shift.
// ∇f = 2Xᵀ(Xw − y). At w = (2, 2): r = (0.8, 0.1, −1.1, −1.8), ∇f = (−4, −19). The minimiser
// w* = (0.25, 2.9) (numpy lstsq) has ∇f = 0 and f = 0.05.
const T = [1, 2, 3, 4]
const Y = [3.2, 5.9, 9.1, 11.8]

export const leastSquares: Scene = {
  id: 'least-squares',
  title: 'Gradients of linear, quadratic and least-squares functions',
  flow: 'TB',
  nodes: [
    {
      id: 'fit',
      kind: 'plot',
      label: 'Chairs made by hour t: two candidate lines y = w₀ + w₁t',
      sub: 'dashed: residuals of the guess w = (2, 2); f(w) adds their squares',
      plot: {
        x: { min: 0, max: 4.6, step: 0.5, label: 't, hours' },
        y: { min: 0, max: 14, step: 2, label: 'chairs' },
        series: [
          { kind: 'line', points: [[0, 2], [4.6, 11.2]], label: 'guess w = (2, 2): f = 5.10', labelAt: [3.1, 6.4], color: '#f472b6' },
          { kind: 'line', points: [[0, 0.25], [4.6, 0.25 + 2.9 * 4.6]], label: 'w* = (0.25, 2.9): f = 0.05', labelAt: [0.3, 5.6], color: '#60a5fa' },
          ...T.map((t, i) => ({ kind: 'segment' as const, from: [t, Y[i]] as [number, number], to: [t, 2 + 2 * t] as [number, number], color: '#f472b6' })),
          { kind: 'scatter', points: T.map((t, i): [number, number] => [t, Y[i]]), label: 'observed', labelAt: [4.1, 12.6], color: '#f59e0b' },
        ],
      },
    },
    {
      id: 'derive',
      kind: 'table',
      label: '∇‖Xw − y‖² = 2Xᵀ(Xw − y), with every shape checked',
      sub: 'from ∇(aᵀw) = a and ∇(wᵀAw) = (A + Aᵀ)w',
      headers: ['quantity', 'shape', 'at w = (2, 2)'],
      values: [
        ['X: rows [1, t]', '4 × 2', 't = 1, 2, 3, 4'],
        ['r = Xw − y', '4 × 1', '(0.8, 0.1, −1.1, −1.8)'],
        ['f = rᵀr', '1 × 1', '5.10'],
        ['∇f = 2Xᵀr', '(2 × 4)(4 × 1) = 2 × 1', '(−4, −19)'],
        ['at w* = (0.25, 2.9)', '2 × 1', '(0, 0): the minimum'],
      ],
    },
  ],
  edges: [],
}
