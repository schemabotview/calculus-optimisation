import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §12.1 — f(x) = max(−2x, x): convex, kink at 0 with one-sided slopes −2 and 1, so ∂f(0) = [−2, 1]. Each
// line through the origin with slope s ∈ [−2, 1] stays below f: a subgradient. 0 ∈ ∂f(0), so 0 minimises f.
export const subgradients: Scene = {
  id: 'subgradients',
  title: 'Subgradients and subdifferentials',
  flow: 'TB',
  nodes: [
    {
      id: 'supports',
      kind: 'plot',
      label: 'Every slope from −2 to 1 supports max(−2x, x) at 0',
      sub: 'a subgradient s at x gives a line f(x) + s(y − x) that never rises above f',
      plot: {
        equal: true,
        x: { min: -2.2, max: 3.6, step: 0.5 },
        y: { min: -1.2, max: 4.2, step: 0.5 },
        series: [
          { kind: 'line', points: sample(-2.2, 2.4, 2, (x) => -0.5 * x), label: 's = −0.5', labelAt: [2.45, -1.15], color: '#60a5fa' },
          { kind: 'line', points: sample(-2.2, 3.6, 2, () => 0), label: 's = 0: flat, so 0 is the minimiser', labelAt: [0.25, 0.15], color: '#34d399' },
          { kind: 'line', points: sample(-0.6, 3.6, 2, (x) => 0.5 * x), label: 's = 0.5', labelAt: [3.0, 1.15], color: '#a78bfa' },
          { kind: 'line', points: [[-2.1, 4.2], [0, 0], [3.6, 3.6]], label: 'f(x) = max(−2x, x)', labelAt: [-1.85, 3.3], color: '#f59e0b' },
        ],
      },
    },
    {
      id: 'subdifferential',
      kind: 'table',
      label: 'The subdifferential ∂f(x): the set of all subgradients',
      sub: 'for convex f; where f is differentiable it is just {∇f(x)}',
      headers: ['function, point', '∂f', 'minimiser there?'],
      values: [
        ['max(−2x, x) at x = 0', '[−2, 1]', 'yes: 0 ∈ [−2, 1]'],
        ['max(−2x, x) at x = 1', '{1}', 'no'],
        ['|x| at x = 0', '[−1, 1]', 'yes'],
        ['|x − 3| + |x − 5| at x = 4', '{0}', 'yes: every x in [3, 5]'],
        ['optimality rule', '0 ∈ ∂f(x*)', 'replaces ∇f(x*) = 0'],
      ],
    },
  ],
  edges: [],
}
