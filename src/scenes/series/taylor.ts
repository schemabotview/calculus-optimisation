import { board, caution, fact, facts } from '../frame'
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
export const taylor = board({
  id: 'taylor',
  figure: 'Taylor polynomials and remainders',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'polys',
      title: 'eˣ and its Taylor polynomials T₁, T₂, T₃ about 0',
      x: { min: -3, max: 2.2, step: 0.5 },
      y: { min: -1.5, max: 8, step: 1 },
      series: [
        {
          kind: 'line',
          points: sample(-3, 2.1, 100, Math.exp),
          label: 'eˣ',
          labelAt: [1.55, 7.4],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: sample(-2.5, 2.1, 40, T(1)),
          label: 'T₁ = 1 + x',
          labelAt: [1.25, 2.1],
          tone: 'serve'
        },
        {
          kind: 'line',
          points: sample(-3, 2.1, 80, T(2)),
          label: 'T₂',
          labelAt: [-2.9, 3.1],
          tone: 'infra'
        },
        {
          kind: 'line',
          points: sample(-3, 2.1, 80, T(3)),
          label: 'T₃',
          labelAt: [-2.4, -1.2],
          tone: 'store'
        },
      ]
    },
    {
      type: 'table',
      id: 'remainder',
      title: 'e ≈ Tₙ(1), with a guaranteed error bound',
      columns: ['n', 'Tₙ(1)', 'actual error', 'bound 3/(n + 1)!'],
      rows: [
        ['1', '2.000000', '0.718', '1.5'],
        ['2', '2.500000', '0.218', '0.5'],
        ['3', '2.666667', '0.052', '0.125'],
        ['4', '2.708333', '0.0099', '0.025'],
        ['6', '2.718056', '0.00023', '0.00060'],
      ]
    },
  ],
  idea: 'Taylor polynomials and remainder hypotheses',
  board: [
    fact('b-rule', 'Tₙ matches f and n derivatives at a', 'Tₙ(x) = Σ f⁽ᵏ⁾(a)(x − a)ᵏ/k!'),
    facts('b-1', 'For eˣ about 0', ['every derivative: 1 at 0', 'Tₙ = 1 + x + … + xⁿ/n!', 'T₁ is the tangent line']),
    facts('b-2', 'The remainder', ['needs f⁽ⁿ⁺¹⁾ on the interval', 'Rₙ = f⁽ⁿ⁺¹⁾(c) xⁿ⁺¹/(n + 1)!', 'at 1: |R| ≤ 3/(n + 1)!', 'n = 6: 0.00023 ≤ 0.0006']),
    caution('b-watch', 'The bound is only as good as its derivative bound. Far from a, the same polynomial can be badly wrong: T₃(−3) = −2 while e⁻³ = 0.05.'),
  ]
})
