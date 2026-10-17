import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §2.3 — the rules applied, and one result checked on a graph: f(x) = x/(x² + 1) has
// f′(x) = (1 − x²)/(x² + 1)², which is zero exactly where f peaks (x = ±1, f = ±0.5).
const f = (x: number) => x / (x * x + 1)
const df = (x: number) => (1 - x * x) / (x * x + 1) ** 2

export const rules: Scene = {
  id: 'rules',
  title: 'Rules for differentiation',
  flow: 'TB',
  nodes: [
    {
      id: 'quotient-check',
      kind: 'plot',
      label: 'f(x) = x/(x² + 1) and its derivative, by the quotient rule',
      sub: 'f′ = 0 at x = ±1, where f has its peak and trough',
      plot: {
        x: { min: -4, max: 4, step: 1 },
        y: { min: -1, max: 1.2, step: 0.5 },
        series: [
          { kind: 'line', points: sample(-4, 4, 120, f), label: 'f(x)', labelAt: [1.7, 0.55], color: '#60a5fa' },
          { kind: 'line', points: sample(-4, 4, 120, df), label: 'f′(x)', labelAt: [0.25, 1.05], color: '#f59e0b' },
          { kind: 'marker', at: [1, 0.5], label: 'peak (1, 0.5)', labelAt: [1.1, 0.75], color: '#34d399' },
          { kind: 'marker', at: [-1, -0.5], label: 'trough (−1, −0.5)', labelAt: [-3.3, -0.75], color: '#34d399' },
        ],
      },
    },
    {
      id: 'worked',
      kind: 'table',
      label: 'Each rule, once',
      sub: 'f, g differentiable; c a constant',
      headers: ['rule', 'statement', 'example'],
      values: [
        ['power', '(xⁿ)′ = n xⁿ⁻¹', '(3x⁴ − 2x + 5)′ = 12x³ − 2'],
        ['sum, constant', '(c f + g)′ = c f′ + g′', 'term by term, as above'],
        ['product', '(f g)′ = f′ g + f g′', '(x² sin x)′ = 2x sin x + x² cos x'],
        ['quotient', '(f/g)′ = (f′ g − f g′)/g²', '(x/(x² + 1))′ = (1 − x²)/(x² + 1)²'],
      ],
    },
  ],
  edges: [],
}
