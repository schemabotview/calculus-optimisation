import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §6.7 — f(x) = e^(−1/x²) (f(0) = 0) is infinitely differentiable with every derivative 0 at 0, so its
// Taylor series about 0 is identically 0, yet f(0.5) = e⁻⁴ = 0.0183 and f(1) = e⁻¹ = 0.368. And
// 1/(1 + x²) is smooth on all of ℝ, but its series 1 − x² + x⁴ − … has radius 1 (complex poles at ±i).
const f = (x: number) => (x === 0 ? 0 : Math.exp(-1 / (x * x)))

export const smooth: Scene = {
  id: 'smooth',
  title: 'Smoothness is not equality to a Taylor series',
  flow: 'TB',
  nodes: [
    {
      id: 'flat',
      kind: 'plot',
      label: 'f(x) = e^(−1/x²), with f(0) = 0',
      sub: 'every derivative is 0 at x = 0, so the Taylor series there is the zero function',
      plot: {
        x: { min: -3, max: 3, step: 0.5 },
        y: { min: -0.1, max: 0.8, step: 0.1 },
        series: [
          { kind: 'line', points: sample(-3, 3, 240, f), label: 'f(x)', labelAt: [2.3, 0.55], color: '#60a5fa' },
          { kind: 'line', points: [[-3, 0], [3, 0]], label: 'Taylor series at 0: T(x) = 0', labelAt: [0.3, -0.06], color: '#f472b6' },
          { kind: 'marker', at: [1, Math.exp(-1)], label: 'f(1) = 0.368, T(1) = 0', labelAt: [1.1, 0.29], color: '#f59e0b' },
        ],
      },
    },
    {
      id: 'cases',
      kind: 'table',
      label: 'Three relationships between a function and its series',
      sub: 'a series must be shown to converge, and to converge to f',
      headers: ['function', 'smooth?', 'series converges?', 'equals f?'],
      values: [
        ['eˣ, sin x, cos x', 'yes', 'for all x', 'yes, everywhere'],
        ['ln(1 + x)', 'on x > −1', 'on −1 < x ≤ 1', 'only there'],
        ['1/(1 + x²)', 'on all of ℝ', 'only |x| < 1', 'only |x| < 1'],
        ['e^(−1/x²)', 'on all of ℝ', 'everywhere, to 0', 'only at x = 0'],
      ],
    },
  ],
  edges: [],
}
