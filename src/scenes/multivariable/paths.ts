import type { Scene } from '@graphlearning/flow'

// §7.2 — f(x, y) = xy/(x² + y²), f(0, 0) = 0. Along y = mx it is constant at m/(1 + m²) (checked
// numerically at x = 10⁻⁶), so the limit at the origin depends on the path. f(x, 0) = f(0, y) = 0, so both
// partial derivatives at the origin exist and are 0.
const RAYS = [
  { m: 0, color: '#9ca3af', label: 'y = 0: f = 0', at: [0.62, 0.07] },
  { m: 1, color: '#f59e0b', label: 'y = x: f = 0.5', at: [0.62, 0.98] },
  { m: -1, color: '#60a5fa', label: 'y = −x: f = −0.5', at: [0.45, -0.9] },
  { m: 2, color: '#f472b6', label: 'y = 2x: f = 0.4', at: [-0.35, -1.05] },
] as const

export const paths: Scene = {
  id: 'paths',
  title: 'Path-dependent limits and partial derivatives',
  flow: 'TB',
  nodes: [
    {
      id: 'rays',
      kind: 'plot',
      label: 'xy/(x² + y²) is constant on each line through 0',
      sub: 'so approaching the origin along different lines gives different values',
      plot: {
        equal: true,
        x: { min: -1.2, max: 1.2, step: 0.4 },
        y: { min: -1.2, max: 1.2, step: 0.4 },
        series: RAYS.map(({ m, color, label, at }) => {
          const x = Math.min(1.1, 1.1 / Math.abs(m || 1))
          return { kind: 'segment' as const, from: [-x, -m * x] as [number, number], to: [x, m * x] as [number, number], dashed: false, label, labelAt: [at[0], at[1]] as [number, number], color }
        }),
      },
    },
    {
      id: 'limits',
      kind: 'table',
      label: 'The value depends on the path, so there is no limit',
      sub: 'along y = mx, f = m/(1 + m²) for every x ≠ 0',
      headers: ['approach to (0, 0)', 'value of f', 'conclusion'],
      values: [
        ['along y = 0', '0', '∂f/∂x(0, 0) = 0'],
        ['along x = 0', '0', '∂f/∂y(0, 0) = 0'],
        ['along y = x', '0.5', 'disagrees with 0'],
        ['along y = −x', '−0.5', 'no limit at (0, 0)'],
        ['so', 'both partials exist', 'f is not even continuous'],
      ],
    },
  ],
  edges: [],
}
