import { board, caution, fact, facts } from '../frame'
import { circle } from '../plot-kit'

// §2.6 — the circle x² + y² = 25 is not a single function y(x), yet it has tangents. Implicitly:
// 2x + 2y y′ = 0, so y′ = −x/y = −3/4 at (3, 4). Parametrically (5 cos t, 5 sin t) gives the same.
export const implicit = board({
  id: 'implicit',
  figure: 'Implicit and parametric differentiation',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'tangent',
      title: 'x² + y² = 25 and its tangent at (3, 4)',
      equal: true,
      x: { min: -6, max: 8, step: 2 },
      y: { min: -6, max: 7, step: 2 },
      series: [
        {
          kind: 'line',
          points: circle(5),
          label: 'x² + y² = 25',
          labelAt: [-5.6, 4.5],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: [[0, 6.25], [7.5, 0.625]],
          label: 'tangent, slope −3/4',
          labelAt: [4.2, 5.6],
          tone: 'store'
        },
        {
          kind: 'segment',
          from: [0, 0],
          to: [3, 4],
          label: 'radius',
          labelAt: [0.6, 2.2],
          tone: 'neutral'
        },
        {
          kind: 'scatter',
          points: [[3, 4]],
          label: '(3, 4)',
          labelAt: [3.25, 3.6],
          tone: 'serve'
        },
      ]
    },
    {
      type: 'table',
      id: 'two-ways',
      title: 'Two routes to the same slope: neither needs solving for y first',
      columns: ['method', 'working', 'at (3, 4)'],
      rows: [
        ['implicit', 'differentiate both sides: 2x + 2y y′ = 0', 'y′ = −x/y = −3/4'],
        ['parametric', 'x = 5 cos t, y = 5 sin t: dy/dx = (dy/dt)/(dx/dt)', '5 cos t/(−5 sin t) = −3/4'],
        ['caution', 'y′ = −x/y fails where y = 0', 'vertical tangents at (±5, 0)'],
      ]
    },
  ],
  idea: 'Implicit and parametric differentiation',
  board: [
    fact('b-rule', 'Curves that are not graphs y(x)', 'still have tangent slopes'),
    facts('b-1', 'Implicit differentiation', ['x² + y² = 25, y = y(x)', '2x + 2y y′ = 0', 'y′ = −x/y; −3/4 at (3, 4)']),
    facts('b-2', 'Parametric', ['(5 cos t, 5 sin t)', 'dy/dx = (dy/dt)/(dx/dt)', 'again −3/4 at (3, 4)']),
    caution('b-watch', 'Both formulas divide by something that can be zero: at (±5, 0) the tangent is vertical and dy/dx does not exist.'),
  ]
})
