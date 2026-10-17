import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §11.3 — min (x − 3)² subject to x ≤ 2, written g = x − 2 ≤ 0. Lagrangian L(x, λ) = (x − 3)² + λ(x − 2).
// At x = 2: 2(x − 3) + λ = 0 gives λ = 2 ≥ 0, and L(·, 2) = (x − 3)² + 2(x − 2) is minimised at x = 2.
export const lagrangian: Scene = {
  id: 'lagrangian',
  title: 'Inequality sign conventions and the Lagrangian',
  flow: 'TB',
  nodes: [
    {
      id: 'tilt',
      kind: 'plot',
      label: 'min (x − 3)² subject to x ≤ 2: the multiplier tilts the objective',
      sub: 'L(x, λ) = f + λ g with g = x − 2 ≤ 0; with λ = 2 the minimum of L moves to the boundary x = 2',
      plot: {
        x: { min: 0, max: 4.5, step: 0.5, label: 'x' },
        y: { min: -2.5, max: 9, step: 1 },
        series: [
          { kind: 'area', points: [[0, 9], [2, 9]], color: '#34d399' },
          { kind: 'line', points: sample(0, 4.5, 80, (x) => (x - 3) ** 2), label: 'f(x) = (x − 3)²', labelAt: [3.05, 3.6], color: '#60a5fa' },
          { kind: 'line', points: sample(0, 4.5, 80, (x) => (x - 3) ** 2 + 2 * (x - 2)), label: 'L(x, 2) = f + 2(x − 2)', labelAt: [3.5, 0.6], color: '#f472b6' },
          { kind: 'marker', at: [2, 1], label: 'x* = 2: f = 1, and L minimised here', labelAt: [0.2, -1.9], color: '#f59e0b' },
          { kind: 'marker', at: [3, 0], label: 'unconstrained x = 3', labelAt: [3.15, -0.6], color: '#9ca3af' },
        ],
      },
    },
    {
      id: 'conventions',
      kind: 'table',
      label: 'One convention: g(x) ≤ 0 and λ ≥ 0, so L = f + Σ λᵢ gᵢ',
      sub: 'rewrite every constraint into this form before writing conditions',
      headers: ['as stated', 'as g ≤ 0', 'multiplier'],
      values: [
        ['x at most 2', 'x − 2 ≤ 0', 'λ = 2 here'],
        ['at least 24 chairs', '24 − 2√(LM) ≤ 0', 'λ₁ ≥ 0'],
        ['machine hours ≤ 8', 'M − 8 ≤ 0', 'λ₂ ≥ 0'],
        ['L ≥ 0', '−L ≤ 0', 'λ₃ ≥ 0'],
        ['wrong: x ≤ 2 as 2 − x ≤ 0', 'means x ≥ 2', 'a different problem'],
      ],
    },
  ],
  edges: [],
}
