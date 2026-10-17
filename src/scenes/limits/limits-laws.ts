import type { Scene } from '@graphlearning/flow'

// §1.3 — f(x) = (x² − 1)/(x − 1) is undefined at 1 but its values approach 2 from both sides; the
// approach table was computed in double precision (python). A jump would give different one-sided limits.

export const limitsLaws: Scene = {
  id: 'limits-laws',
  title: 'Limits from both sides',
  flow: 'TB',
  nodes: [
    {
      id: 'hole',
      kind: 'plot',
      label: 'f(x) = (x² − 1)/(x − 1): undefined at x = 1',
      sub: 'equal to x + 1 everywhere else, so the graph is a line with a hole',
      plot: {
        x: { min: -1, max: 3, step: 0.5 },
        y: { min: 0, max: 4, step: 0.5 },
        series: [
          { kind: 'line', points: [[-1, 0], [0.92, 1.92]], label: 'f(x)', labelAt: [-0.4, 1.1], color: '#60a5fa' },
          { kind: 'line', points: [[1.08, 2.08], [3, 4]], color: '#60a5fa' },
          { kind: 'marker', at: [1, 2], label: 'hole at (1, 2): no value', labelAt: [1.2, 1.6], size: 5, color: '#f472b6' },
        ],
      },
    },
    {
      id: 'approach',
      kind: 'table',
      label: 'Approach x = 1 from each side',
      sub: 'computed; the limit is 2 though f(1) does not exist',
      headers: ['from the left', 'f(x)', 'from the right', 'f(x)'],
      values: [
        ['x = 0.9', '1.9', 'x = 1.1', '2.1'],
        ['x = 0.99', '1.99', 'x = 1.01', '2.01'],
        ['x = 0.999', '1.999', 'x = 1.001', '2.001'],
        ['left limit', '2', 'right limit', '2'],
      ],
    },
  ],
  edges: [],
}
