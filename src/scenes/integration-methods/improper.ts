import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §5.4 — improper integrals as limits. ∫₁ᴿ 1/x² = 1 − 1/R → 1; ∫₁ᴿ 1/x = ln R → ∞. Truncated values
// computed for R = 10, 100, 1000.
export const improper: Scene = {
  id: 'improper',
  title: 'Improper integrals',
  flow: 'TB',
  nodes: [
    {
      id: 'tails',
      kind: 'plot',
      label: '1/x and 1/x² on [1, ∞): similar shapes, different fates',
      sub: '∫₁^∞ 1/x² = 1 converges; ∫₁^∞ 1/x diverges',
      plot: {
        x: { min: 0, max: 10, step: 1 },
        y: { min: 0, max: 1.2, step: 0.2 },
        series: [
          { kind: 'line', points: sample(1, 10, 100, (x) => 1 / x), label: '1/x: area grows without bound', labelAt: [3.2, 0.42], color: '#f472b6' },
          { kind: 'line', points: sample(1, 10, 100, (x) => 1 / (x * x)), label: '1/x²: total area 1', labelAt: [3.6, 0.15], color: '#60a5fa' },
        ],
      },
    },
    {
      id: 'truncated',
      kind: 'table',
      label: 'An improper integral is a limit of proper ones',
      sub: '∫₁^∞ f = lim ∫₁ᴿ f as R → ∞, when the limit exists',
      headers: ['R', '∫₁ᴿ 1/x² = 1 − 1/R', '∫₁ᴿ 1/x = ln R'],
      values: [
        ['10', '0.9', '2.30'],
        ['100', '0.99', '4.61'],
        ['1000', '0.999', '6.91'],
        ['∞', '1: converges', 'diverges'],
        ['also improper', '∫₀¹ 1/√x = 2: converges', '∫₀¹ 1/x: diverges'],
      ],
    },
  ],
  edges: [],
}
