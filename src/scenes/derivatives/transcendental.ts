import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §2.5 — sin and its derivative cos on one plot: wherever sin peaks or troughs, cos crosses zero;
// where sin is steepest, cos is ±1. Tangent at x = 0 has slope cos 0 = 1.
export const transcendental: Scene = {
  id: 'transcendental',
  title: 'Exponential, logarithmic and trigonometric derivatives',
  flow: 'TB',
  nodes: [
    {
      id: 'sin-cos',
      kind: 'plot',
      label: 'sin x and its derivative cos x (x in radians)',
      sub: 'the slope of sin at each x is the height of cos there',
      plot: {
        equal: true,
        x: { min: -3.5, max: 7, step: 1 },
        y: { min: -1.5, max: 1.75, step: 0.5 },
        series: [
          { kind: 'line', points: sample(-3.5, 7, 160, Math.sin), label: 'sin x', labelAt: [1.2, 1.15], color: '#60a5fa' },
          { kind: 'line', points: sample(-3.5, 7, 160, Math.cos), label: 'cos x = (sin x)′', labelAt: [4.9, 1.2], color: '#f59e0b' },
          { kind: 'line', points: [[-1, -1], [1, 1]], label: 'slope 1 at 0', labelAt: [-2.9, -1.3], color: '#34d399' },
          { kind: 'marker', at: [Math.PI / 2, 1], color: '#f472b6' },
          { kind: 'marker', at: [Math.PI / 2, 0], label: 'peak of sin, zero of cos', labelAt: [2.0, -1.4], color: '#f472b6' },
        ],
      },
    },
    {
      id: 'derivatives',
      kind: 'table',
      label: 'The derivatives to know',
      sub: 'angles in radians; with the chain rule for inner functions',
      headers: ['f(x)', 'f′(x)', 'with an inner g'],
      values: [
        ['eˣ', 'eˣ', '(e^g)′ = e^g g′'],
        ['ln x, x > 0', '1/x', '(ln g)′ = g′/g'],
        ['sin x', 'cos x', '(sin g)′ = cos g · g′'],
        ['cos x', '−sin x', '(cos g)′ = −sin g · g′'],
        ['aˣ, a > 0', 'aˣ ln a', 'degrees would add π/180'],
      ],
    },
  ],
  edges: [],
}
