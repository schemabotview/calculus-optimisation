import type { Scene } from '@graphlearning/flow'
import type { PlotPoint } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §4.5 — u = x² turns ∫₀¹ 2x e^(x²) dx into ∫₀¹ eᵘ du = e − 1 ≈ 1.718 (both quadratures computed). The
// two integrands look different but enclose the same area over their own intervals.
const closed = (f: (x: number) => number): PlotPoint[] => [...sample(0, 1, 60, f), [1, 0], [0, 0]]

export const substitution: Scene = {
  id: 'substitution',
  title: 'Substitution and transformed limits',
  flow: 'TB',
  nodes: [
    {
      id: 'equal-areas',
      kind: 'plot',
      label: 'Two integrands, one area: e − 1 ≈ 1.718',
      sub: '2x e^(x²) over x in [0, 1], and eᵘ over u in [0, 1]',
      plot: {
        x: { min: 0, max: 1.25, step: 0.25, label: 'x, or u' },
        y: { min: 0, max: 6, step: 1 },
        series: [
          { kind: 'line', points: closed((x) => 2 * x * Math.exp(x * x)), label: '2x e^(x²)', labelAt: [0.55, 3.4], color: '#60a5fa' },
          { kind: 'line', points: closed(Math.exp), label: 'eᵘ', labelAt: [1.02, 2.6], color: '#f59e0b' },
        ],
      },
    },
    {
      id: 'steps',
      kind: 'table',
      label: 'Change the variable, and change the limits with it',
      sub: 'u = g(x), du = g′(x) dx',
      headers: ['step', 'example 1', 'example 2'],
      values: [
        ['integral', '∫₀¹ 2x e^(x²) dx', '∫₀^(π/2) sin x cos x dx'],
        ['substitute', 'u = x², du = 2x dx', 'u = sin x, du = cos x dx'],
        ['new limits', 'x = 0 → u = 0; x = 1 → u = 1', 'u from 0 to 1'],
        ['result', '∫₀¹ eᵘ du = e − 1 ≈ 1.718', '∫₀¹ u du = 1/2'],
      ],
    },
  ],
  edges: [],
}
