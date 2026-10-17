import type { Scene } from '@graphlearning/flow'
import type { PlotPoint } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §5.6 — trapezoid and Simpson on ∫₀^π sin x = 2 (scipy trapezoid / simpson). Errors fall ×4 and ×16 per
// doubling, as the h² and h⁴ error bounds predict. The plot shows the n = 4 trapezoids.
const n = 4
const h = Math.PI / n
const traps: PlotPoint[][] = Array.from({ length: n }, (_, i) => [
  [i * h, 0], [i * h, Math.sin(i * h)], [(i + 1) * h, Math.sin((i + 1) * h)], [(i + 1) * h, 0],
])

export const quadrature: Scene = {
  id: 'quadrature',
  title: 'Trapezoidal and Simpson quadrature',
  flow: 'TB',
  nodes: [
    {
      id: 'panels',
      kind: 'plot',
      label: 'Trapezoids under sin x, n = 4',
      sub: 'straight tops cut under the curve: the trapezoid sum is 1.896, not 2',
      plot: {
        x: { min: 0, max: 3.3, step: 0.5 },
        y: { min: 0, max: 1.15, step: 0.25 },
        series: [
          ...traps.map((p) => ({ kind: 'line' as const, points: p, color: '#f59e0b' })),
          { kind: 'line', points: sample(0, Math.PI, 100, Math.sin), label: 'sin x', labelAt: [1.35, 1.06], color: '#60a5fa' },
        ],
      },
    },
    {
      id: 'errors',
      kind: 'table',
      label: 'Errors for ∫₀^π sin x dx = 2, computed',
      sub: 'bounds: trapezoid (b − a)h² max|f″|/12; Simpson (b − a)h⁴ max|f⁗|/180',
      headers: ['n', 'trapezoid error', 'Simpson error'],
      values: [
        ['2', '0.429', '0.094'],
        ['4', '0.104 (bound 0.161)', '0.0046 (bound 0.0066)'],
        ['8', '0.026', '0.00027'],
        ['16', '0.0064', '0.000017'],
        ['per doubling', '× ¼', '× 1/16'],
      ],
    },
  ],
  edges: [],
}
