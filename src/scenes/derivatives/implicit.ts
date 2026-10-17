import type { Scene } from '@graphlearning/flow'
import { circle } from '../plot-kit'

// §2.6 — the circle x² + y² = 25 is not a single function y(x), yet it has tangents. Implicitly:
// 2x + 2y y′ = 0, so y′ = −x/y = −3/4 at (3, 4). Parametrically (5 cos t, 5 sin t) gives the same.
export const implicit: Scene = {
  id: 'implicit',
  title: 'Implicit and parametric differentiation',
  flow: 'TB',
  nodes: [
    {
      id: 'tangent',
      kind: 'plot',
      label: 'x² + y² = 25 and its tangent at (3, 4)',
      sub: 'slope −x/y = −3/4: perpendicular to the radius (3, 4)',
      plot: {
        equal: true,
        x: { min: -6, max: 8, step: 2 },
        y: { min: -6, max: 7, step: 2 },
        series: [
          { kind: 'line', points: circle(5), label: 'x² + y² = 25', labelAt: [-5.6, 4.5], color: '#60a5fa' },
          { kind: 'line', points: [[0, 6.25], [7.5, 0.625]], label: 'tangent, slope −3/4', labelAt: [4.2, 5.6], color: '#34d399' },
          { kind: 'segment', from: [0, 0], to: [3, 4], label: 'radius', labelAt: [0.6, 2.2], color: '#9ca3af' },
          { kind: 'marker', at: [3, 4], label: '(3, 4)', labelAt: [3.25, 3.6], color: '#f472b6' },
        ],
      },
    },
    {
      id: 'two-ways',
      kind: 'table',
      label: 'Two routes to the same slope',
      sub: 'neither needs solving for y first',
      headers: ['method', 'working', 'at (3, 4)'],
      values: [
        ['implicit', 'differentiate both sides: 2x + 2y y′ = 0', 'y′ = −x/y = −3/4'],
        ['parametric', 'x = 5 cos t, y = 5 sin t: dy/dx = (dy/dt)/(dx/dt)', '5 cos t/(−5 sin t) = −3/4'],
        ['caution', 'y′ = −x/y fails where y = 0', 'vertical tangents at (±5, 0)'],
      ],
    },
  ],
  edges: [],
}
