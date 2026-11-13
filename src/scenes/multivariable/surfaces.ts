import { board, fact, facts } from '../frame'
import { outputLevel } from '../workshop'

// §7.1 — the workshop's output Q(L, M) = 2√(LM) chairs per shift, from L labour hours and M machine hours.
// Level sets Q = c are the curves M = c²/(4L); the grid values are exact.
const LEVELS = [
  { c: 12, color: 'ingest', at: [5.2, 6.2] },
  { c: 18, color: 'store', at: [5.79, 13.06] },
  { c: 24, color: 'infra', at: [9.27, 15.21] },
  { c: 30, color: 'serve', at: [16.2, 16.2] },
] as const
export const surfaces = board({
  id: 'surfaces',
  figure: 'Functions of two inputs and level sets',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'levels',
      title: 'Level sets of Q(L, M) = 2√(LM): every mix that makes the same output',
      equal: true,
      x: { min: 0, max: 30, step: 2, label: 'L, labour hours' },
      y: { min: 0, max: 18, step: 2, label: 'M, machine hours' },
      series: [
        ...LEVELS.map(({ c, color, at }) => ({
          kind: 'line' as const,
          points: outputLevel(c, (c * c) / 72, 30),
          label: `Q = ${c}`,
          labelAt: [at[0], at[1]] as [
            number,
            number
          ],
          tone: color
        })),
        {
          kind: 'scatter',
          points: [[16, 9]],
          label: 'shift (16, 9): 24 chairs',
          labelAt: [18.029, 11.743],
          tone: 'infra'
        },
      ]
    },
    {
      type: 'table',
      id: 'grid',
      title: 'Q on a grid of inputs: a surface sampled',
      columns: ['L \\ M', 'M = 4', 'M = 9', 'M = 16'],
      rows: [
        ['L = 4', '8', '12', '16'],
        ['L = 9', '12', '18', '24'],
        ['L = 16', '16', '24', '32'],
        ['L = 25', '20', '30', '40'],
      ]
    },
  ],
  idea: 'Vector inputs, surfaces, level sets and continuity',
  board: [
    fact('b-rule', 'f: ℝ² → ℝ takes a vector input (x, y)', 'graph: a surface; level sets f = c: curves'),
    facts('b-1', 'The workshop’s output', ['L labour, M machine hours', 'Q(L, M) = 2√(LM) chairs', '(16, 9) makes 24', 'Q = 24: every LM = 144']),
    facts('b-2', 'Reading level sets', ['along one: output unchanged', 'close curves: steep surface', '(36, 4) also makes 24']),
    fact('b-3', 'Continuity', 'f(x, y) → f(a, b) along every approach: infinitely many directions, not two'),
  ]
})
