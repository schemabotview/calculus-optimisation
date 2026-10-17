import type { Scene } from '@graphlearning/flow'

// §1.7 — an ε–δ argument made visible for lim (2x + 1) = 7 as x → 3: with ε = 1, δ = ε/2 = 0.5 keeps
// the graph inside the band. The sampling table is computed: sin(π/x) at x = 1/n is ≈ 0 (rounding
// leaves ~10⁻¹⁵), at x = 2/(4n + 1) it is 1, so samples can "show" a limit that does not exist.
export const epsilonDelta: Scene = {
  id: 'epsilon-delta',
  title: 'What a limit claim really says',
  flow: 'TB',
  nodes: [
    {
      id: 'band',
      kind: 'plot',
      label: 'lim (2x + 1) = 7 as x → 3, with ε = 1',
      sub: 'choose δ = ε/2 = 0.5: inside the δ-strip, the graph stays inside the ε-band',
      plot: {
        x: { min: 1.5, max: 4.5, step: 0.5 },
        y: { min: 4, max: 10, step: 1 },
        series: [
          { kind: 'line', points: [[1.5, 6], [4.5, 6]], dashed: true, label: '7 − ε', labelAt: [1.55, 5.65], color: '#f472b6' },
          { kind: 'line', points: [[1.5, 8], [4.5, 8]], dashed: true, label: '7 + ε', labelAt: [1.55, 8.15], color: '#f472b6' },
          { kind: 'line', points: [[2.5, 4], [2.5, 10]], dashed: true, label: '3 − δ', labelAt: [2.05, 9.6], color: '#f59e0b' },
          { kind: 'line', points: [[3.5, 4], [3.5, 10]], dashed: true, label: '3 + δ', labelAt: [3.6, 9.6], color: '#f59e0b' },
          { kind: 'line', points: [[1.5, 4], [4.5, 10]], label: 'y = 2x + 1', labelAt: [3.85, 7.7], color: '#60a5fa' },
          { kind: 'marker', at: [3, 7], label: '(3, 7)', labelAt: [3.1, 6.6], color: '#34d399' },
        ],
      },
    },
    {
      id: 'sampling',
      kind: 'table',
      label: 'Samples can mislead: sin(π/x) as x → 0',
      sub: 'computed in double precision',
      headers: ['samples', 'x values', 'sin(π/x)', 'suggests'],
      values: [
        ['x = 1/n', '1, 0.1, 0.01', '≈ 0 (about 10⁻¹⁵)', 'limit 0'],
        ['x = 2/(4n + 1)', '0.4, 0.049, 0.005', '1, 1, 1', 'limit 1'],
        ['truth', 'every interval around 0', 'takes every value in [−1, 1]', 'no limit'],
      ],
    },
  ],
  edges: [],
}
