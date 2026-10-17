import type { Scene } from '@graphlearning/flow'

// §8.3 — the triangle T = {0 ≤ x ≤ y ≤ 1}. ∫∫_T e^(y²) dA: as dy dx the inner integral has no elementary
// antiderivative; as dx dy it is ∫₀¹ y e^(y²) dy = (e − 1)/2 = 0.85914 (dblquad: 0.85914). Area check 1/2.
export const regions: Scene = {
  id: 'regions',
  title: 'Regions that are not rectangles',
  flow: 'TB',
  nodes: [
    {
      id: 'triangle',
      kind: 'plot',
      label: 'The triangle 0 ≤ x ≤ y ≤ 1, sliced two ways',
      sub: 'a vertical strip runs from y = x to y = 1; a horizontal strip from x = 0 to x = y',
      plot: {
        equal: true,
        x: { min: -0.1, max: 1.2, step: 0.1, label: 'x' },
        y: { min: -0.1, max: 1.1, step: 0.1, label: 'y' },
        series: [
          { kind: 'area', points: [[0, 0], [1, 1], [0, 1], [0, 0]], color: '#60a5fa' },
          { kind: 'line', points: [[0, 0], [1, 1], [0, 1], [0, 0]], label: 'T', labelAt: [0.2, 0.55], color: '#60a5fa' },
          { kind: 'segment', from: [0.35, 0.35], to: [0.35, 1], dashed: false, size: 9, label: 'x fixed: y from x to 1', labelAt: [0.37, 0.25], color: '#f59e0b' },
          { kind: 'segment', from: [0, 0.75], to: [0.75, 0.75], dashed: false, size: 9, label: 'y fixed: x from 0 to y', labelAt: [0.04, 0.8], color: '#f472b6' },
          { kind: 'line', points: [[0, 0], [1.1, 1.1]], label: 'y = x', labelAt: [0.95, 0.85], color: '#9ca3af' },
        ],
      },
    },
    {
      id: 'orders',
      kind: 'table',
      label: '∫∫_T e^(y²) dA: the order decides whether it can be done by hand',
      sub: 'both descriptions cover T exactly once',
      headers: ['order', 'limits', 'inner integral', 'result'],
      values: [
        ['dy dx', '0 ≤ x ≤ 1, x ≤ y ≤ 1', '∫ₓ¹ e^(y²) dy: no formula', 'numerical only'],
        ['dx dy', '0 ≤ y ≤ 1, 0 ≤ x ≤ y', '∫₀ʸ e^(y²) dx = y e^(y²)', '(e − 1)/2'],
        ['check', 'dblquad, dy dx', '—', '0.85914'],
        ['area of T', '∫₀¹ ∫₀ʸ dx dy', 'y', '1/2'],
      ],
    },
  ],
  edges: [],
}
