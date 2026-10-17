import type { Scene } from '@graphlearning/flow'
import { output, SHIFT_L, SHIFT_M } from '../workshop'
import { sample } from '../plot-kit'

// §7.4 — the tangent plane of Q at (16, 9): Q ≈ 24 + 0.75 ΔL + (4/3) ΔM. Sliced along (ΔL, ΔM) = (h, −h)
// (one labour hour swapped for one machine hour) the plane is the line 24 − 7h/12. Errors computed: they
// fall about 4× per halving of h, so error/h² ≈ 0.09: first-order error is O(|h|²).
const slice = (h: number) => output(SHIFT_L + h, SHIFT_M - h)

export const tangentPlane: Scene = {
  id: 'tangent-plane',
  title: 'Tangent planes and first-order error',
  flow: 'TB',
  nodes: [
    {
      id: 'slice',
      kind: 'plot',
      label: 'Q and its tangent plane, along the swap (16 + h, 9 − h)',
      sub: 'trading machine hours for labour: the plane predicts 24 − 7h/12; Q bends below it',
      plot: {
        x: { min: -8, max: 8, step: 1, label: 'h, hours swapped' },
        y: { min: 8, max: 30, step: 2, label: 'chairs' },
        series: [
          { kind: 'line', points: [[-8, 24 + 56 / 12], [8, 24 - 56 / 12]], label: 'tangent plane: 24 − 7h/12', labelAt: [-7.6, 29.4], color: '#f59e0b' },
          { kind: 'line', points: sample(-8, 8, 120, slice), label: 'Q(16 + h, 9 − h)', labelAt: [5.4, 15.4], color: '#60a5fa' },
          { kind: 'marker', at: [0, 24], label: 'shift: 24 chairs', labelAt: [0.4, 25.6], color: '#f472b6' },
        ],
      },
    },
    {
      id: 'error',
      kind: 'table',
      label: 'First-order error shrinks like h²',
      sub: 'differentiable: error / |h| → 0, not merely partials existing',
      headers: ['h', 'Q exact', 'plane', 'error', 'error / h²'],
      values: [
        ['2', '22.450', '22.833', '0.383', '0.096'],
        ['1', '23.324', '23.417', '0.093', '0.093'],
        ['0.5', '23.685', '23.708', '0.023', '0.092'],
        ['0.25', '23.849', '23.854', '0.0057', '0.091'],
      ],
    },
  ],
  edges: [],
}
