import type { Tone } from '@graphlearning/graphl-flow'
import { board, caution, fact, facts } from '../frame'

// §7.2 — f(x, y) = xy/(x² + y²), f(0, 0) = 0. Along y = mx it is constant at m/(1 + m²) (checked
// numerically at x = 10⁻⁶), so the limit at the origin depends on the path. f(x, 0) = f(0, y) = 0, so both
// partial derivatives at the origin exist and are 0.
const RAYS = [
  { m: 0, color: 'neutral', label: 'y = 0: f = 0', at: [0.62, 0.07] },
  { m: 1, color: 'infra', label: 'y = x: f = 0.5', at: [0.96286, 0.82571] },
  { m: -1, color: 'ingest', label: 'y = −x: f = −0.5', at: [0.72429, -0.79714] },
  { m: 2, color: 'serve', label: 'y = 2x: f = 0.4', at: [-0.35, -1.1014] },
] as const
export const paths = board({
  id: 'paths',
  figure: 'Path-dependent limits and partial derivatives',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'rays',
      title: 'xy/(x² + y²) is constant on each line through 0',
      equal: true,
      x: { min: -1.2, max: 1.2, step: 0.4 },
      y: { min: -1.2, max: 1.2, step: 0.4 },
      series: RAYS.map(({ m, color, label, at }) => {
        const x = Math.min(1.1, 1.1 / Math.abs(m || 1))
        return { kind: 'segment' as const, from: [-x, -m * x] as [
            number,
            number
          ], to: [x, m * x] as [
            number,
            number
          ], dashed: false, label, labelAt: [at[0], at[1]] as [
            number,
            number
          ], tone: color as Tone }
      })
    },
    {
      type: 'table',
      id: 'limits',
      title: 'The value depends on the path, so there is no limit',
      columns: ['approach to (0, 0)', 'value of f', 'conclusion'],
      rows: [
        ['along y = 0', '0', '∂f/∂x(0, 0) = 0'],
        ['along x = 0', '0', '∂f/∂y(0, 0) = 0'],
        ['along y = x', '0.5', 'disagrees with 0'],
        ['along y = −x', '−0.5', 'no limit at (0, 0)'],
        ['so', 'both partials exist', 'f is not even continuous'],
      ]
    },
  ],
  idea: 'Path-dependent limits and partial derivatives',
  board: [
    fact('b-rule', '∂f/∂x varies one input and freezes the rest'),
    facts('b-1', 'Partials for the workshop', ['∂Q/∂L = √(M/L) = 0.75', '∂Q/∂M = √(L/M) = 1.333', 'each: a grid-line slope']),
    facts('b-2', 'A path-dependent limit', ['xy/(x² + y²), f(0, 0) = 0', 'on y = mx: m/(1 + m²)', '0.5 on y = x, −0.5 on y = −x', 'no limit; partials exist']),
    caution('b-watch', 'Partials see only two directions. A limit or derivative in two dimensions must hold along every path, curved ones included.'),
  ]
})
