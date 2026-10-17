import type { Scene } from '@graphlearning/flow'
import type { PlotPoint } from '@graphlearning/flow'

// §8.5 — polar cells r ∈ [r₀, r₀ + 0.4], θ ∈ [0.5, 0.9] have area ≈ r dr dθ, so the outer cell is bigger.
// ∫∫_{r ≤ R} e^(−(x² + y²)) dA = π(1 − e^(−R²)); dropping r gives 2π·(√π/2)erf(R). Both computed, and the
// Cartesian dblquad matches the version with r (R = 0.5, 1, 2, 3).
const cell = (r0: number): PlotPoint[] => {
  const arc = (r: number, a: number, b: number) =>
    Array.from({ length: 13 }, (_, i): PlotPoint => {
      const t = a + ((b - a) * i) / 12
      return [r * Math.cos(t), r * Math.sin(t)]
    })
  return [...arc(r0, 0.5, 0.9), ...arc(r0 + 0.4, 0.9, 0.5), [r0 * Math.cos(0.5), r0 * Math.sin(0.5)]]
}

const quarter = (r: number): PlotPoint[] =>
  Array.from({ length: 41 }, (_, i): PlotPoint => [r * Math.cos((Math.PI * i) / 80), r * Math.sin((Math.PI * i) / 80)])

export const polar: Scene = {
  id: 'polar',
  title: 'Polar coordinates and the Jacobian factor',
  flow: 'TB',
  nodes: [
    {
      id: 'grid',
      kind: 'plot',
      label: 'Polar cells: same dr and dθ, different areas',
      sub: 'a cell at radius r has area ≈ r dr dθ: |det J| = r for (r, θ) → (r cos θ, r sin θ)',
      plot: {
        equal: true,
        x: { min: -0.2, max: 2.2, step: 0.4 },
        y: { min: -0.2, max: 2.2, step: 0.4 },
        series: [
          ...[0.4, 0.8, 1.2, 1.6, 2].map((r) => ({ kind: 'line' as const, points: quarter(r), color: '#9ca3af' })),
          ...[0, 0.5, 0.9, 1.3, Math.PI / 2].map((t) => ({ kind: 'segment' as const, from: [0, 0] as PlotPoint, to: [2 * Math.cos(t), 2 * Math.sin(t)] as PlotPoint, color: '#9ca3af' })),
          { kind: 'line', points: cell(0.4), label: 'r ≈ 0.6: area 0.096', labelAt: [0.95, 0.2], color: '#60a5fa' },
          { kind: 'line', points: cell(1.6), label: 'r ≈ 1.8: area 0.288', labelAt: [1.75, 1.75], color: '#f472b6' },
        ],
      },
    },
    {
      id: 'factor',
      kind: 'table',
      label: '∫∫ over the disc r ≤ R of e^(−(x² + y²)) dA',
      sub: 'dA = r dr dθ, so the integral is ∫₀^(2π) ∫₀ᴿ e^(−r²) r dr dθ = π(1 − e^(−R²))',
      headers: ['R', 'with r: π(1 − e^(−R²))', 'Cartesian dblquad', 'forgetting r'],
      values: [
        ['0.5', '0.6949', '0.6949', '2.8983'],
        ['1', '1.9859', '1.9859', '4.6924'],
        ['2', '3.0841', '3.0841', '5.5423'],
        ['3', '3.1412', '3.1412', '5.5682'],
      ],
    },
  ],
  edges: [],
}
