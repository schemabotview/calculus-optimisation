import { board, caution, fact, facts } from '../frame'
import type { P } from '../plot-kit'

// §8.5 — polar cells r ∈ [r₀, r₀ + 0.4], θ ∈ [0.5, 0.9] have area ≈ r dr dθ, so the outer cell is bigger.
// ∫∫_{r ≤ R} e^(−(x² + y²)) dA = π(1 − e^(−R²)); dropping r gives 2π·(√π/2)erf(R). Both computed, and the
// Cartesian dblquad matches the version with r (R = 0.5, 1, 2, 3).
const cell = (r0: number): P[] => {
  const arc = (r: number, a: number, b: number) => Array.from({ length: 13 }, (_, i): P => {
    const t = a + ((b - a) * i) / 12
    return [r * Math.cos(t), r * Math.sin(t)]
  })
  return [...arc(r0, 0.5, 0.9), ...arc(r0 + 0.4, 0.9, 0.5), [r0 * Math.cos(0.5), r0 * Math.sin(0.5)]]
}
const quarter = (r: number): P[] => Array.from({ length: 41 }, (_, i): P => [r * Math.cos((Math.PI * i) / 80), r * Math.sin((Math.PI * i) / 80)])
export const polar = board({
  id: 'polar',
  figure: 'Polar coordinates and the Jacobian factor',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'grid',
      title: 'Polar cells: same dr and dθ, different areas',
      equal: true,
      x: { min: -0.2, max: 2.2, step: 0.4 },
      y: { min: -0.2, max: 2.2, step: 0.4 },
      series: [
        ...[0.4, 0.8, 1.2, 1.6, 2].map((r) => ({ kind: 'line' as const, points: quarter(r), tone: 'neutral' as const })),
        ...[0, 0.5, 0.9, 1.3, Math.PI / 2].map((t) => ({ kind: 'segment' as const, from: [0, 0] as P, to: [2 * Math.cos(t), 2 * Math.sin(t)] as P, tone: 'neutral' as const })),
        {
          kind: 'line',
          points: cell(0.4),
          label: 'r ≈ 0.6: area 0.096',
          labelAt: [0.95, 0.2],
          tone: 'ingest' as const
        },
        {
          kind: 'line',
          points: cell(1.6),
          label: 'r ≈ 1.8: area 0.288',
          labelAt: [1.75, 1.75],
          tone: 'serve' as const
        },
      ]
    },
    {
      type: 'table',
      id: 'factor',
      title: '∫∫ over the disc r ≤ R of e^(−(x² + y²)) dA',
      columns: ['R', 'with r: π(1 − e^(−R²))', 'Cartesian dblquad', 'forgetting r'],
      rows: [
        ['0.5', '0.6949', '0.6949', '2.8983'],
        ['1', '1.9859', '1.9859', '4.6924'],
        ['2', '3.0841', '3.0841', '5.5423'],
        ['3', '3.1412', '3.1412', '5.5682'],
      ]
    },
  ],
  idea: 'Coordinate changes, polar coordinates and Jacobian factors',
  board: [
    fact('b-rule', 'A change of variables scales cells by |det J|', 'dA = |det J| du dv'),
    facts('b-1', 'Polar coordinates', ['x = r cos θ, y = r sin θ', 'det J = r: dA = r dr dθ', 'outer cells are bigger', '0.096 at 0.6; 0.288 at 1.8']),
    facts('b-2', 'A disc made easy', ['∫∫ e^(−(x² + y²)), r ≤ 1', '= π(1 − e⁻¹) ≈ 1.9859', 'Cartesian: 1.9859']),
    caution('b-watch', 'Forgetting the r gives 4.6924, more than double. Other maps carry their own factor: spherical coordinates give ρ² sin φ.'),
  ]
})
