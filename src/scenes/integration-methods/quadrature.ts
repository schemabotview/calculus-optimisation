import { board, caution, fact, facts } from '../frame'
import type { P } from '../plot-kit'
import { sample } from '../plot-kit'

// §5.6 — trapezoid and Simpson on ∫₀^π sin x = 2 (scipy trapezoid / simpson). Errors fall ×4 and ×16 per
// doubling, as the h² and h⁴ error bounds predict. The plot shows the n = 4 trapezoids.
const n = 4
const h = Math.PI / n
const traps: P[][] = Array.from({ length: n }, (_, i) => [
  [i * h, 0], [i * h, Math.sin(i * h)], [(i + 1) * h, Math.sin((i + 1) * h)], [(i + 1) * h, 0],
])
export const quadrature = board({
  id: 'quadrature',
  figure: 'Trapezoidal and Simpson quadrature',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'panels',
      title: 'Trapezoids under sin x, n = 4',
      x: { min: 0, max: 3.3, step: 0.5 },
      y: { min: 0, max: 1.15, step: 0.25 },
      series: [
        ...traps.map((p) => ({ kind: 'line' as const, points: p, tone: 'infra' as const })),
        {
          kind: 'line',
          points: sample(0, Math.PI, 100, Math.sin),
          label: 'sin x',
          labelAt: [1.35, 1.06],
          tone: 'ingest' as const
        },
      ]
    },
    {
      type: 'table',
      id: 'errors',
      title: 'Errors for ∫₀^π sin x dx = 2, computed',
      columns: ['n', 'trapezoid error', 'Simpson error'],
      rows: [
        ['2', '0.429', '0.094'],
        ['4', '0.104 (bound 0.161)', '0.0046 (bound 0.0066)'],
        ['8', '0.026', '0.00027'],
        ['16', '0.0064', '0.000017'],
        ['per doubling', '× ¼', '× 1/16'],
      ]
    },
  ],
  idea: 'Trapezoidal and Simpson quadrature and conditional error bounds',
  board: [
    fact('b-rule', 'Replace f on each panel by a simple shape', 'lines: trapezoid; parabolas: Simpson'),
    facts('b-1', 'Trapezoid and Simpson', ['∫₀^π sin x = 2, n = 4', 'trapezoid 1.896', 'Simpson 2.0046', 'error ×¼ and ×1/16 per doubling']),
    facts('b-2', 'Bounds with conditions', ['trap ≤ (b − a)h² max|f″|/12', 'Simpson: h⁴ max|f⁗|/180', 'at n = 4: 0.161 and 0.0066']),
    caution('b-watch', 'Each bound assumes f″ or f⁗ exists and is bounded on [a, b]. With a kink, a jump or a spike, the guarantee says nothing.'),
  ]
})
