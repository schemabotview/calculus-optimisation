import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §1.6 — g(x) = x³ − 3x + 1 on [0, 2]: continuous on a closed interval, so it attains a minimum (−1 at
// x = 1) and a maximum (3 at x = 2) and crosses 0 twice (roots ≈ 0.347, 1.532 by brentq). The table's
// failure cases each break one hypothesis.
const g = (x: number) => x ** 3 - 3 * x + 1

export const existence: Scene = {
  id: 'existence',
  title: 'Intermediate and extreme values',
  flow: 'TB',
  nodes: [
    {
      id: 'attained',
      kind: 'plot',
      label: 'g(x) = x³ − 3x + 1 on the closed interval [0, 2]',
      sub: 'continuous, closed, bounded: extremes are attained and 0 is crossed',
      plot: {
        x: { min: -0.25, max: 2.25, step: 0.5 },
        y: { min: -1.5, max: 3.5, step: 1 },
        series: [
          { kind: 'line', points: sample(0, 2, 100, g), label: 'g(x)', labelAt: [1.5, 1.6], color: '#60a5fa' },
          { kind: 'marker', at: [1, -1], label: 'minimum −1 at x = 1', labelAt: [0.55, -1.35], color: '#34d399' },
          { kind: 'marker', at: [2, 3], label: 'maximum 3 at x = 2', labelAt: [1.05, 3.2], color: '#34d399' },
          { kind: 'marker', at: [0.3473, 0], label: 'root ≈ 0.347', labelAt: [-0.2, -0.45], color: '#f59e0b' },
          { kind: 'marker', at: [1.5321, 0], label: 'root ≈ 1.532', labelAt: [1.6, -0.45], color: '#f59e0b' },
        ],
      },
    },
    {
      id: 'theorems',
      kind: 'table',
      label: 'Two existence theorems, and what breaks them',
      sub: 'they say a value exists, not where or how to find it',
      headers: ['theorem', 'needs', 'fails for'],
      values: [
        ['intermediate value', 'f continuous on [a, b]', 'a jump can skip over 0'],
        ['extreme value', 'f continuous on closed, bounded [a, b]', 'x on (0, 1): no minimum, infimum 0'],
        ['', '', '1/x on [1, ∞): no minimum, infimum 0'],
      ],
    },
  ],
  edges: [],
}
