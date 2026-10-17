import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §8.4 — a tetrahedral offcut x, y, z ≥ 0, x + y + z ≤ 1 (metres), density ρ = 500(1 + z) kg/m³ (denser
// towards the top face). Slices at height z are triangles of area A(z) = (1 − z)²/2. tplquad: volume 1/6,
// mass 104.17 kg = 500·5/24, centre of mass height z̄ = 0.28 (0.25 if uniform).
export const triple: Scene = {
  id: 'triple',
  title: 'Triple integrals, mass and density',
  flow: 'TB',
  nodes: [
    {
      id: 'slices',
      kind: 'plot',
      label: 'A tetrahedron x + y + z ≤ 1, sliced at height z',
      sub: 'each slice is a triangle of area (1 − z)²/2; mass per unit height is ρ(z) times that area',
      plot: {
        x: { min: 0, max: 1, step: 0.1, label: 'z (m)' },
        y: { min: 0, max: 270, step: 25, label: 'kg per m of height' },
        series: [
          { kind: 'area', points: sample(0, 1, 60, (z) => (500 * (1 + z) * (1 - z) ** 2) / 2), color: '#60a5fa' },
          { kind: 'line', points: sample(0, 1, 60, (z) => (500 * (1 + z) * (1 - z) ** 2) / 2), label: 'ρ(z) A(z): area under = mass 104.2 kg', labelAt: [0.32, 200], color: '#60a5fa' },
          { kind: 'line', points: sample(0, 1, 60, (z) => (500 * (1 - z) ** 2) / 2), label: 'uniform ρ = 500: mass 83.3 kg', labelAt: [0.04, 95], color: '#9ca3af' },
          { kind: 'segment', from: [0.28, 0], to: [0.28, 166], label: 'z̄ = 0.28', labelAt: [0.29, 20], color: '#f59e0b' },
        ],
      },
    },
    {
      id: 'mass',
      kind: 'table',
      label: 'Mass = ∫∫∫ ρ dV, here as ∫₀¹ ρ(z) A(z) dz',
      sub: 'computed with tplquad over 0 ≤ x ≤ 1, 0 ≤ y ≤ 1 − x, 0 ≤ z ≤ 1 − x − y',
      headers: ['quantity', 'integral', 'value'],
      values: [
        ['volume', '∫∫∫ 1 dV', '1/6 m³'],
        ['mass', '∫∫∫ 500(1 + z) dV', '104.17 kg'],
        ['centre of mass height', '∫∫∫ z ρ dV / mass', '0.280 m'],
        ['same, if uniform', '∫∫∫ z dV / volume', '0.250 m'],
      ],
    },
  ],
  edges: [],
}
