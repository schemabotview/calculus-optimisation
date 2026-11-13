import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'
import { output } from '../workshop'

// §9.2 — Hessian of Q = 2√(LM) at (16, 9): [[−0.0234, 0.0417], [0.0417, −0.0741]], eigenvalues −0.0975 and
// 0 (Q is homogeneous of degree 1). Along d = (1, −1): dᵀHd = −0.1808, so the quadratic model is
// 24 − 7h/12 − 0.0904h². Model errors computed in Python.
const slice = (h: number) => output(16 + h, 9 - h)
export const hessian = board({
  id: 'hessian',
  figure: 'Hessians and second-order Taylor models',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'models',
      title: 'Q along the swap (16 + h, 9 − h): first- and second-order models',
      x: { min: -8, max: 8, step: 1, label: 'h, hours swapped' },
      y: { min: 8, max: 30, step: 2, label: 'chairs' },
      series: [
        {
          kind: 'line',
          points: [[-8, 24 + 56 / 12], [8, 24 - 56 / 12]],
          label: 'linear: 24 − 7h/12',
          labelAt: [-7.6, 29.3],
          tone: 'infra'
        },
        {
          kind: 'line',
          points: sample(-8, 8, 80, (h) => 24 - (7 * h) / 12 - 0.0904 * h * h),
          label: 'quadratic: − 0.0904h² more',
          labelAt: [-0.2, 13.3],
          tone: 'serve'
        },
        {
          kind: 'line',
          points: sample(-8, 8, 120, slice),
          label: 'Q(16 + h, 9 − h)',
          labelAt: [-7.6, 20.4],
          tone: 'ingest'
        },
      ]
    },
    {
      type: 'table',
      id: 'taylor2',
      title: 'f(a + h) ≈ f(a) + ∇fᵀh + ½ hᵀH h',
      columns: ['h', 'Q exact', 'linear error', 'quadratic error'],
      rows: [
        ['4', '20.000', '1.67', '0.22'],
        ['2', '22.450', '0.38', '0.022'],
        ['1', '23.324', '0.093', '0.0024'],
        ['0.5', '23.685', '0.023', '0.00029'],
        ['per halving', '—', '× ¼ (order h²)', '× ⅛ (order h³)'],
      ]
    },
  ],
  idea: 'Hessians and second-order Taylor models',
  board: [
    fact('b-rule', 'The Hessian ∇²f: the matrix of second partials', 'f(a + h) ≈ f(a) + ∇fᵀh + ½ hᵀ∇²f h'),
    facts('b-1', 'Output at (16, 9)', ['Q_LL −0.0234, Q_MM −0.0741', 'Q_LM = Q_ML = 0.0417', 'swap d = (1, −1): −0.181']),
    facts('b-2', 'The quadratic model', ['linear: error 0.093 at h = 1', 'quadratic: 0.0024', 'halve h: ÷4 vs ÷8', '−0.0904 matches chapter 7']),
    caution('b-watch', 'Eigenvalues −0.0975 and 0: scaling both inputs, Q is exactly linear. A zero eigenvalue is real structure, not rounding error.'),
  ]
})
