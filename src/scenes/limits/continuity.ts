import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §1.5 — the three kinds of discontinuity on one graph, left to right: a removable hole at x = 1, a
// jump at x = 3, and an infinite discontinuity at x = 5.
export const continuity: Scene = {
  id: 'continuity',
  title: 'Continuity and its failures',
  flow: 'TB',
  nodes: [
    {
      id: 'kinds',
      kind: 'plot',
      label: 'Three ways a function can fail to be continuous',
      sub: 'hole at x = 1, jump at x = 3, vertical asymptote at x = 5',
      plot: {
        x: { min: 0, max: 7, step: 1 },
        y: { min: 0, max: 6, step: 1 },
        series: [
          { kind: 'line', points: [[0, 1], [0.97, 1.97]], color: '#60a5fa' },
          { kind: 'line', points: [[1.03, 2.03], [3, 4]], color: '#60a5fa' },
          { kind: 'marker', at: [1, 2], label: 'removable: hole', labelAt: [0.2, 3.0], color: '#f472b6' },
          { kind: 'marker', at: [3, 4], label: 'jump: 4 to 1.5', labelAt: [3.15, 4.3], color: '#f472b6' },
          { kind: 'line', points: [[3.03, 1.5], [4.4, 1.5]], color: '#60a5fa' },
          { kind: 'line', points: sample(4.4, 4.96, 40, (x) => 1.5 + 0.18 / (5 - x) - 0.3), color: '#60a5fa' },
          { kind: 'line', points: sample(5.04, 7, 60, (x) => 0.2 / (x - 5)), color: '#60a5fa' },
          { kind: 'line', points: [[5, 0], [5, 6]], dashed: true, label: 'infinite at x = 5', labelAt: [5.15, 5.4], color: '#9ca3af' },
        ],
      },
    },
    {
      id: 'definition',
      kind: 'table',
      label: 'Continuous at a: three conditions',
      sub: 'f(a) defined, the limit exists, and they are equal',
      headers: ['kind', 'which condition fails', 'repairable?'],
      values: [
        ['removable (hole)', 'f(a) undefined or wrong', 'yes: redefine f(a)'],
        ['jump', 'left and right limits differ', 'no'],
        ['infinite', 'values grow without bound', 'no'],
        ['domain edge', 'only a one-sided limit exists', 'one-sided continuity'],
      ],
    },
  ],
  edges: [],
}
