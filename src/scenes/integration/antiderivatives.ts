import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §4.4 — antiderivatives of 2x form a family x² + C: vertical shifts with identical slopes. Any member
// gives the same definite integral, because C cancels in F(b) − F(a).
export const antiderivatives: Scene = {
  id: 'antiderivatives',
  title: 'Antiderivatives and the constant',
  flow: 'TB',
  nodes: [
    {
      id: 'family',
      kind: 'plot',
      label: 'Every antiderivative of 2x: x² + C',
      sub: 'same slope at every x, shifted vertically; C = −1, 0, 1, 2',
      plot: {
        x: { min: -2, max: 2, step: 0.5 },
        y: { min: -1.5, max: 6, step: 1 },
        series: [-1, 0, 1, 2].map((C, i) => ({
          kind: 'line' as const,
          points: sample(-2, 2, 80, (x) => x * x + C),
          label: `C = ${C === -1 ? '−1' : C}`,
          labelAt: [2.0 - 0.02, 4 + C - 0.3] as [number, number],
          color: ['#9ca3af', '#60a5fa', '#34d399', '#f59e0b'][i],
        })),
      },
    },
    {
      id: 'table',
      kind: 'table',
      label: 'Antiderivatives to recognise',
      sub: 'check any of them by differentiating',
      headers: ['f(x)', 'antiderivative F(x)', 'condition'],
      values: [
        ['xⁿ', 'xⁿ⁺¹/(n + 1) + C', 'n ≠ −1'],
        ['1/x', 'ln |x| + C', 'x ≠ 0, on one side of 0'],
        ['eᵏˣ', 'eᵏˣ/k + C', 'k ≠ 0'],
        ['sin x, cos x', '−cos x + C, sin x + C', 'radians'],
        ['∫₀² 2x dx', '(4 + C) − (0 + C) = 4', 'C cancels'],
      ],
    },
  ],
  edges: [],
}
