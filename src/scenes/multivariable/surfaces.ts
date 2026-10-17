import type { Scene } from '@graphlearning/flow'
import { outputLevel } from '../workshop'

// §7.1 — the workshop's output Q(L, M) = 2√(LM) chairs per shift, from L labour hours and M machine hours.
// Level sets Q = c are the curves M = c²/(4L); the grid values are exact.
const LEVELS = [
  { c: 12, color: '#60a5fa', at: [5.2, 6.2] },
  { c: 18, color: '#34d399', at: [6.3, 14.6] },
  { c: 24, color: '#f59e0b', at: [10.3, 15.6] },
  { c: 30, color: '#f472b6', at: [16.2, 16.2] },
] as const

export const surfaces: Scene = {
  id: 'surfaces',
  title: 'Functions of two inputs and level sets',
  flow: 'TB',
  nodes: [
    {
      id: 'levels',
      kind: 'plot',
      label: 'Level sets of Q(L, M) = 2√(LM): every mix that makes the same output',
      sub: 'one curve per output; the standard shift (16, 9) lies on Q = 24',
      plot: {
        equal: true,
        x: { min: 0, max: 30, step: 2, label: 'L, labour hours' },
        y: { min: 0, max: 18, step: 2, label: 'M, machine hours' },
        series: [
          ...LEVELS.map(({ c, color, at }) => ({
            kind: 'line' as const,
            points: outputLevel(c, (c * c) / 72, 30),
            label: `Q = ${c}`,
            labelAt: [at[0], at[1]] as [number, number],
            color,
          })),
          { kind: 'marker', at: [16, 9], label: 'shift (16, 9): 24 chairs', labelAt: [17, 10.2], color: '#f59e0b' },
        ],
      },
    },
    {
      id: 'grid',
      kind: 'table',
      label: 'Q on a grid of inputs: a surface sampled',
      sub: 'rows L, columns M; Q is continuous, so nearby inputs give nearby outputs',
      headers: ['L \\ M', 'M = 4', 'M = 9', 'M = 16'],
      values: [
        ['L = 4', '8', '12', '16'],
        ['L = 9', '12', '18', '24'],
        ['L = 16', '16', '24', '32'],
        ['L = 25', '20', '30', '40'],
      ],
    },
  ],
  edges: [],
}
