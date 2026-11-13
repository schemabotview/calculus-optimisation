import { board, fact, facts } from '../frame'
import { sample } from '../plot-kit'

// §8.4 — a tetrahedral offcut x, y, z ≥ 0, x + y + z ≤ 1 (metres), density ρ = 500(1 + z) kg/m³ (denser
// towards the top face). Slices at height z are triangles of area A(z) = (1 − z)²/2. tplquad: volume 1/6,
// mass 104.17 kg = 500·5/24, centre of mass height z̄ = 0.28 (0.25 if uniform).
export const triple = board({
  id: 'triple',
  figure: 'Triple integrals, mass and density',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'slices',
      title: 'A tetrahedron x + y + z ≤ 1, sliced at height z',
      x: { min: 0, max: 1, step: 0.1, label: 'z (m)' },
      y: { min: 0, max: 270, step: 25, label: 'kg per m of height' },
      series: [
        { kind: 'area', points: sample(0, 1, 60, (z) => (500 * (1 + z) * (1 - z) ** 2) / 2), tone: 'ingest' },
        {
          kind: 'line',
          points: sample(0, 1, 60, (z) => (500 * (1 + z) * (1 - z) ** 2) / 2),
          label: 'ρ(z) A(z): area under = mass 104.2 kg',
          labelAt: [0.32, 200],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: sample(0, 1, 60, (z) => (500 * (1 - z) ** 2) / 2),
          label: 'uniform: 83.3 kg',
          labelAt: [0.04, 95],
          tone: 'neutral'
        },
        {
          kind: 'segment',
          from: [0.28, 0],
          to: [0.28, 166],
          label: 'z̄ = 0.28',
          labelAt: [0.29, 20],
          tone: 'infra'
        },
      ]
    },
    {
      type: 'table',
      id: 'mass',
      title: 'Mass = ∫∫∫ ρ dV, here as ∫₀¹ ρ(z) A(z) dz',
      columns: ['quantity', 'integral', 'value'],
      rows: [
        ['volume', '∫∫∫ 1 dV', '1/6 m³'],
        ['mass', '∫∫∫ 500(1 + z) dV', '104.17 kg'],
        ['centre of mass height', '∫∫∫ z ρ dV / mass', '0.280 m'],
        ['same, if uniform', '∫∫∫ z dV / volume', '0.250 m'],
      ]
    },
  ],
  idea: 'Triple integrals, mass and density',
  board: [
    fact('b-rule', 'Mass of a solid: ∫∫∫ ρ dV', 'limits describe it, one variable inside another'),
    facts('b-1', 'A tetrahedral offcut', ['x, y, z ≥ 0, x + y + z ≤ 1', 'z up to 1 − x − y', 'volume 1/6 m³']),
    facts('b-2', 'Mass, sliced by height', ['ρ = 500(1 + z) kg/m³', 'slice area (1 − z)²/2', 'mass 104.17 kg', 'uniform: 83.3 kg']),
    fact('b-3', 'Centre of mass', 'z̄ = 0.280 m, above the uniform 0.250: the denser top pulls it up'),
  ]
})
