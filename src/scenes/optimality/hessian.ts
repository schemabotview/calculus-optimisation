import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'
import { output } from '../workshop'

// §9.2 — Hessian of Q = 2√(LM) at (16, 9): [[−0.0234, 0.0417], [0.0417, −0.0741]], eigenvalues −0.0975 and
// 0 (Q is homogeneous of degree 1). Along d = (1, −1): dᵀHd = −0.1808, so the quadratic model is
// 24 − 7h/12 − 0.0904h². Model errors computed in Python.
const slice = (h: number) => output(16 + h, 9 - h)

export const hessian: Scene = {
  id: 'hessian',
  title: 'Hessians and second-order Taylor models',
  flow: 'TB',
  nodes: [
    {
      id: 'models',
      kind: 'plot',
      label: 'Q along the swap (16 + h, 9 − h): first- and second-order models',
      sub: 'the quadratic term ½ dᵀH d h² = −0.0904 h² bends the model with the curve',
      plot: {
        x: { min: -8, max: 8, step: 1, label: 'h, hours swapped' },
        y: { min: 8, max: 30, step: 2, label: 'chairs' },
        series: [
          { kind: 'line', points: [[-8, 24 + 56 / 12], [8, 24 - 56 / 12]], label: 'linear: 24 − 7h/12', labelAt: [-7.6, 29.3], color: '#f59e0b' },
          { kind: 'line', points: sample(-8, 8, 80, (h) => 24 - (7 * h) / 12 - 0.0904 * h * h), label: 'quadratic: − 0.0904h² more', labelAt: [-0.2, 13.3], color: '#f472b6' },
          { kind: 'line', points: sample(-8, 8, 120, slice), label: 'Q(16 + h, 9 − h)', labelAt: [-7.6, 20.4], color: '#60a5fa' },
        ],
      },
    },
    {
      id: 'taylor2',
      kind: 'table',
      label: 'f(a + h) ≈ f(a) + ∇fᵀh + ½ hᵀH h',
      sub: 'H = [[−0.0234, 0.0417], [0.0417, −0.0741]] at (16, 9); errors computed',
      headers: ['h', 'Q exact', 'linear error', 'quadratic error'],
      values: [
        ['4', '20.000', '1.67', '0.22'],
        ['2', '22.450', '0.38', '0.022'],
        ['1', '23.324', '0.093', '0.0024'],
        ['0.5', '23.685', '0.023', '0.00029'],
        ['per halving', '—', '× ¼ (order h²)', '× ⅛ (order h³)'],
      ],
    },
  ],
  edges: [],
}
