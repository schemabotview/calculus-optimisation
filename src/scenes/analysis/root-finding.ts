import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'
import { costSlope } from '../workshop'

// §3.7 — minimising c(q) by solving c′(q) = 0. Bisection on [2, 12] and Newton from q = 5, both run
// (python, double precision); Newton from q = 20 jumps to −20 and then cycles ±20.
const NEWTON = [5, 6.71875, 8.18253, 8.849724, 8.942778, 8.944272]

export const rootFinding: Scene = {
  id: 'root-finding',
  title: 'Root finding versus minimisation',
  flow: 'TB',
  nodes: [
    {
      id: 'newton',
      kind: 'plot',
      label: "Solve c′(q) = 0.5 − 40/q² = 0 by Newton's method",
      sub: 'iterates from q₀ = 5 approach √80 ≈ 8.944',
      plot: {
        x: { min: 2, max: 13, step: 1, label: 'q' },
        y: { min: -1.2, max: 0.5, step: 0.25, label: "c′(q)" },
        series: [
          { kind: 'line', points: [[2, 0], [13, 0]], dashed: true, color: '#9ca3af' },
          { kind: 'line', points: sample(2.5, 13, 120, costSlope), label: "c′(q)", labelAt: [11.2, 0.32], color: '#60a5fa' },
          { kind: 'scatter', points: NEWTON.map((q): [number, number] => [q, costSlope(q)]), label: 'Newton iterates', labelAt: [4.6, -1.1], color: '#f59e0b' },
          { kind: 'marker', at: [Math.sqrt(80), 0], label: 'root √80', labelAt: [9.1, 0.12], color: '#34d399' },
        ],
      },
    },
    {
      id: 'traces',
      kind: 'table',
      label: 'Two methods on the same equation, computed',
      sub: 'bisection halves a bracket; Newton follows the tangent of c′',
      headers: ['step', 'bisection midpoint', 'Newton from 5', 'Newton from 20'],
      values: [
        ['1', '7.0', '6.719', '−20 (left the domain)'],
        ['2', '9.5', '8.183', '20'],
        ['3', '8.25', '8.850', '−20'],
        ['4', '8.875', '8.9428', 'cycles for ever'],
        ['5', '9.1875', '8.944272', ''],
      ],
    },
  ],
  edges: [],
}
