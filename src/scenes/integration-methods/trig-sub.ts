import type { Scene } from '@graphlearning/flow'
import type { PlotPoint } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §5.3 — ∫₀¹ √(1 − x²) dx = π/4 by x = sin θ, and it is literally a quarter of the unit circle's area
// (quad: 0.785398…). The table is a method-selection guide.
const quarter: PlotPoint[] = [...sample(0, 1, 80, (x) => Math.sqrt(1 - x * x)), [0, 0], [0, 1]]

export const trigSub: Scene = {
  id: 'trig-sub',
  title: 'Trigonometric substitution and choosing a method',
  flow: 'TB',
  nodes: [
    {
      id: 'quarter',
      kind: 'plot',
      label: '∫₀¹ √(1 − x²) dx is a quarter of the unit disc',
      sub: 'x = sin θ turns it into ∫₀^(π/2) cos² θ dθ = π/4 ≈ 0.7854',
      plot: {
        equal: true,
        x: { min: -0.25, max: 1.5, step: 0.25 },
        y: { min: -0.25, max: 1.25, step: 0.25 },
        series: [
          { kind: 'line', points: quarter, label: 'area π/4', labelAt: [0.25, 0.4], color: '#60a5fa' },
          { kind: 'segment', from: [0, 0], to: [Math.sin(0.9), Math.cos(0.9)], label: 'x = sin θ', labelAt: [0.95, 1.05], color: '#f59e0b' },
        ],
      },
    },
    {
      id: 'choose',
      kind: 'table',
      label: 'Which method? Read the shape of the integrand',
      sub: 'then verify the antiderivative by differentiating',
      headers: ['you see', 'try', 'example'],
      values: [
        ['f(g(x)) g′(x)', 'substitution u = g(x)', '2x e^(x²)'],
        ['product of unlike types', 'parts', 'x eˣ, ln x'],
        ['rational function', 'partial fractions', '1/(x² − 1)'],
        ['√(a² − x²)', 'x = a sin θ', '√(1 − x²)'],
        ['none of these', 'numerical quadrature (§5.6)', 'e^(−x²)'],
      ],
    },
  ],
  edges: [],
}
