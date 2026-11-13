import { board, caution, fact, facts } from '../frame'
import type { P } from '../plot-kit'
import { sample } from '../plot-kit'

// §4.2 — the definite integral counts area below the axis as negative. ∫₀^2π sin x dx = 0 (computed:
// 2.2 × 10⁻¹⁶), while the area between curve and axis is 4. Regions outlined as closed polygons.
const hump = (a: number, b: number): P[] => [...sample(a, b, 60, Math.sin), [b, 0], [a, 0]]
export const signedArea = board({
  id: 'signed-area',
  figure: 'Definite integrals and signed area',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'regions',
      title: '∫ sin x dx from 0 to 2π: +2 above, −2 below',
      equal: true,
      x: { min: -0.3, max: 6.6, step: 1 },
      y: { min: -1.4, max: 1.4, step: 0.5 },
      series: [
        {
          kind: 'line',
          points: hump(0, Math.PI),
          label: '+2',
          labelAt: [1.4, 0.4],
          tone: 'store'
        },
        {
          kind: 'line',
          points: hump(Math.PI, 2 * Math.PI),
          label: '−2',
          labelAt: [4.5, -0.45],
          tone: 'serve'
        },
        {
          kind: 'line',
          points: sample(0, 2 * Math.PI, 120, Math.sin),
          label: 'sin x',
          labelAt: [5.6, 0.25],
          tone: 'ingest'
        },
      ]
    },
    {
      type: 'table',
      id: 'meaning',
      title: 'What ∫ₐᵇ f(x) dx measures: the limit of Riemann sums, when it exists',
      columns: ['situation', 'integral', 'units'],
      rows: [
        ['sin x on [0, 2π]', '0 (area 4)', 'signed'],
        ['power P(t) kW over [0, 8] h', '34.19', 'kW × h = kWh'],
        ['velocity m/s over seconds', 'displacement', 'm'],
        ['f continuous on [a, b]', 'always integrable', 'units of f × units of x'],
      ]
    },
  ],
  idea: 'Definite integrals, signed area and units',
  board: [
    fact('b-rule', '∫ₐᵇ f dx: the limit of Riemann sums', 'signed area: above counts plus, below minus'),
    facts('b-1', 'Signed, not total', ['∫₀^2π sin x dx = 0', '+2 above, −2 below', 'area between: 4']),
    facts('b-2', 'Units', ['units of f × units of x', 'kW × h = kWh', '∫ₐᵇ c dx = c (b − a)']),
    caution('b-watch', 'Reversing the limits flips the sign: ∫ᵇₐ f = −∫ₐᵇ f. And ∫ₐᵃ f = 0.'),
  ]
})
