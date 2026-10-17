import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §6.5 — Taylor polynomials of eˣ about 0, and e¹ ≈ Tₙ(1) with the Lagrange bound |Rₙ(1)| ≤ e^c/(n + 1)!
// ≤ 3/(n + 1)! for some c in (0, 1). Errors and bounds computed in Python.
const T = (n: number) => (x: number) => {
  let s = 0
  let t = 1
  for (let k = 0; k <= n; k++) {
    s += t
    t *= x / (k + 1)
  }
  return s
}

export const taylor: Scene = {
  id: 'taylor',
  title: 'Taylor polynomials and remainders',
  flow: 'TB',
  nodes: [
    {
      id: 'polys',
      kind: 'plot',
      label: 'eˣ and its Taylor polynomials T₁, T₂, T₃ about 0',
      sub: 'each matches one more derivative at 0, and hugs the curve over a wider range',
      plot: {
        x: { min: -3, max: 2.2, step: 0.5 },
        y: { min: -1.5, max: 8, step: 1 },
        series: [
          { kind: 'line', points: sample(-3, 2.1, 100, Math.exp), label: 'eˣ', labelAt: [1.55, 7.4], color: '#60a5fa' },
          { kind: 'line', points: sample(-2.5, 2.1, 40, T(1)), label: 'T₁ = 1 + x', labelAt: [1.25, 2.1], color: '#f472b6' },
          { kind: 'line', points: sample(-3, 2.1, 80, T(2)), label: 'T₂', labelAt: [-2.9, 3.1], color: '#f59e0b' },
          { kind: 'line', points: sample(-3, 2.1, 80, T(3)), label: 'T₃', labelAt: [-2.4, -1.2], color: '#34d399' },
        ],
      },
    },
    {
      id: 'remainder',
      kind: 'table',
      label: 'e ≈ Tₙ(1), with a guaranteed error bound',
      sub: 'Lagrange: Rₙ(1) = e^c/(n + 1)! for some c in (0, 1), and e^c < 3',
      headers: ['n', 'Tₙ(1)', 'actual error', 'bound 3/(n + 1)!'],
      values: [
        ['1', '2.000000', '0.718', '1.5'],
        ['2', '2.500000', '0.218', '0.5'],
        ['3', '2.666667', '0.052', '0.125'],
        ['4', '2.708333', '0.0099', '0.025'],
        ['6', '2.718056', '0.00023', '0.00060'],
      ],
    },
  ],
  edges: [],
}
