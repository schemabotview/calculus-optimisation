import type { Scene } from '@graphlearning/flow'

// §2.2 — |x| is continuous at 0 but has a corner: its one-sided difference quotients are −1 and +1
// (computed), so there is no single tangent. x² has slope 0 there from both sides.
export const differentiability: Scene = {
  id: 'differentiability',
  title: 'A corner: continuous but not differentiable',
  flow: 'TB',
  nodes: [
    {
      id: 'corner',
      kind: 'plot',
      label: '|x| has a corner at 0; x² has a tangent there',
      sub: 'both are continuous at 0; only x² is differentiable',
      plot: {
        equal: true,
        x: { min: -2, max: 2, step: 0.5 },
        y: { min: -0.5, max: 2, step: 0.5 },
        series: [
          { kind: 'line', points: [[-2, 2], [0, 0], [2, 2]], label: '|x|', labelAt: [-1.95, 1.65], color: '#f472b6' },
          { kind: 'line', points: Array.from({ length: 41 }, (_, i): [number, number] => { const x = -1.4 + (2.8 * i) / 40; return [x, x * x] }), label: 'x²', labelAt: [1.15, 1.5], color: '#60a5fa' },
          { kind: 'line', points: [[-1, 0], [1, 0]], label: 'tangent to x²: y = 0', labelAt: [0.25, -0.3], color: '#34d399' },
          { kind: 'marker', at: [0, 0], color: '#f59e0b' },
        ],
      },
    },
    {
      id: 'one-sided',
      kind: 'table',
      label: 'One-sided difference quotients at 0',
      sub: 'differentiable needs the two sides to agree',
      headers: ['h', '|x|: (|h| − 0)/h', 'x²: (h² − 0)/h'],
      values: [
        ['0.1', '1', '0.1'],
        ['0.01', '1', '0.01'],
        ['−0.01', '−1', '−0.01'],
        ['−0.1', '−1', '−0.1'],
        ['limit', 'right 1, left −1: none', '0 from both sides'],
      ],
    },
  ],
  edges: [],
}
