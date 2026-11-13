import { board, caution, fact, facts } from '../frame'
import { output, SHIFT_L, SHIFT_M } from '../workshop'
import { sample } from '../plot-kit'

// §7.4 — the tangent plane of Q at (16, 9): Q ≈ 24 + 0.75 ΔL + (4/3) ΔM. Sliced along (ΔL, ΔM) = (h, −h)
// (one labour hour swapped for one machine hour) the plane is the line 24 − 7h/12. Errors computed: they
// fall about 4× per halving of h, so error/h² ≈ 0.09: first-order error is O(|h|²).
const slice = (h: number) => output(SHIFT_L + h, SHIFT_M - h)
export const tangentPlane = board({
  id: 'tangent-plane',
  figure: 'Tangent planes and first-order error',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'slice',
      title: 'Q and its tangent plane, along the swap (16 + h, 9 − h)',
      x: { min: -8, max: 8, step: 1, label: 'h, hours swapped' },
      y: { min: 8, max: 30, step: 2, label: 'chairs' },
      series: [
        {
          kind: 'line',
          points: [[-8, 24 + 56 / 12], [8, 24 - 56 / 12]],
          label: 'tangent plane: 24 − 7h/12',
          labelAt: [-7.4318, 27.8],
          tone: 'infra'
        },
        {
          kind: 'line',
          points: sample(-8, 8, 120, slice),
          label: 'Q(16 + h, 9 − h)',
          labelAt: [3.8862, 11.629],
          tone: 'ingest'
        },
        {
          kind: 'scatter',
          points: [[0, 24]],
          label: 'shift: 24 chairs',
          labelAt: [0.4, 25.6],
          tone: 'serve'
        },
      ]
    },
    {
      type: 'table',
      id: 'error',
      title: 'First-order error shrinks like h²',
      columns: ['h', 'Q exact', 'plane', 'error', 'error / h²'],
      rows: [
        ['2', '22.450', '22.833', '0.383', '0.096'],
        ['1', '23.324', '23.417', '0.093', '0.093'],
        ['0.5', '23.685', '23.708', '0.023', '0.092'],
        ['0.25', '23.849', '23.854', '0.0057', '0.091'],
      ]
    },
  ],
  idea: 'Total differentiability, tangent planes and first-order error',
  board: [
    fact('b-rule', 'Differentiable: one linear map fits every direction', 'f(a + h) ≈ f(a) + ∇f(a)·h, error/|h| → 0'),
    facts('b-1', 'The plane at the shift', ['Q ≈ 24 + 0.75 ΔL + 1.333 ΔM', 'along (16 + h, 9 − h)', 'error 0.383 at h = 2', '0.0057 at 0.25: ~h²']),
    facts('b-2', 'Partials are not enough', ['partials ⇏ differentiable', 'xy/(x² + y²) at 0', 'enough: continuous partials']),
    caution('b-watch', 'ΔQ ≈ 0.75 ΔL + 1.333 ΔM is a usable sensitivity model only where the error is small: far away, it is not.'),
  ]
})
