import type { Scene } from '@graphlearning/flow'
import type { PlotPoint } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §4.2 — the definite integral counts area below the axis as negative. ∫₀^2π sin x dx = 0 (computed:
// 2.2 × 10⁻¹⁶), while the area between curve and axis is 4. Regions outlined as closed polygons.
const hump = (a: number, b: number): PlotPoint[] => [...sample(a, b, 60, Math.sin), [b, 0], [a, 0]]

export const signedArea: Scene = {
  id: 'signed-area',
  title: 'Definite integrals and signed area',
  flow: 'TB',
  nodes: [
    {
      id: 'regions',
      kind: 'plot',
      label: '∫ sin x dx from 0 to 2π: +2 above, −2 below',
      sub: 'the signed areas cancel: the integral is 0',
      plot: {
        equal: true,
        x: { min: -0.3, max: 6.6, step: 1 },
        y: { min: -1.4, max: 1.4, step: 0.5 },
        series: [
          { kind: 'line', points: hump(0, Math.PI), label: '+2', labelAt: [1.4, 0.4], color: '#34d399' },
          { kind: 'line', points: hump(Math.PI, 2 * Math.PI), label: '−2', labelAt: [4.5, -0.45], color: '#f472b6' },
          { kind: 'line', points: sample(0, 2 * Math.PI, 120, Math.sin), label: 'sin x', labelAt: [5.6, 0.25], color: '#60a5fa' },
        ],
      },
    },
    {
      id: 'meaning',
      kind: 'table',
      label: 'What ∫ₐᵇ f(x) dx measures',
      sub: 'the limit of Riemann sums, when it exists',
      headers: ['situation', 'integral', 'units'],
      values: [
        ['sin x on [0, 2π]', '0 (area 4)', 'signed'],
        ['power P(t) kW over [0, 8] h', '34.19', 'kW × h = kWh'],
        ['velocity m/s over seconds', 'displacement', 'm'],
        ['f continuous on [a, b]', 'always integrable', 'units of f × units of x'],
      ],
    },
  ],
  edges: [],
}
