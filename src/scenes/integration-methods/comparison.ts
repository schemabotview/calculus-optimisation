import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §5.5 — comparison: 0 ≤ e^(−x²) ≤ e^(−x) on [1, ∞), and ∫ e^(−x) converges (to e⁻¹), so ∫ e^(−x²)
// converges (quad: 0.1394). Misleading cutoffs: ∫₁ᴿ x^(−1.1) converges to 10, but R = 1000 gives only 4.99.
export const comparison: Scene = {
  id: 'comparison',
  title: 'Comparison and misleading cutoffs',
  flow: 'TB',
  nodes: [
    {
      id: 'bound',
      kind: 'plot',
      label: 'Bound an integrand you cannot integrate by one you can',
      sub: 'e^(−x²) ≤ e^(−x) for x ≥ 1, and ∫₁^∞ e^(−x) = 1/e',
      plot: {
        x: { min: 1, max: 4, step: 0.5 },
        y: { min: 0, max: 0.42, step: 0.1 },
        series: [
          { kind: 'line', points: sample(1, 4, 100, (x) => Math.exp(-x)), label: 'e^(−x): area 0.368', labelAt: [1.9, 0.19], color: '#f59e0b' },
          { kind: 'line', points: sample(1, 4, 100, (x) => Math.exp(-x * x)), label: 'e^(−x²): area 0.139', labelAt: [1.05, 0.06], color: '#60a5fa' },
        ],
      },
    },
    {
      id: 'cutoffs',
      kind: 'table',
      label: 'A finite cutoff can mislead badly',
      sub: 'computed: ∫₁ᴿ x^(−1.1) dx = 10(1 − R^(−0.1)) and ∫₁ᴿ 1/x dx = ln R',
      headers: ['R', 'x^(−1.1): converges to 10', '1/x: diverges'],
      values: [
        ['10', '2.06', '2.30'],
        ['100', '3.69', '4.61'],
        ['1000', '4.99', '6.91'],
        ['∞', '10', '∞'],
        ['lesson', 'half the area lies beyond R = 1000', 'the two look alike up close'],
      ],
    },
  ],
  edges: [],
}
