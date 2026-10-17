import type { Scene } from '@graphlearning/flow'
import type { PlotPoint } from '@graphlearning/flow'
import { outputLevel } from '../workshop'

// §9.7 — minimise labour at £20/h plus machine time at £30/h, subject to making 24 chairs: Q(L, M) ≥ 24,
// i.e. LM ≥ 144. Optimum L = √216 = 14.70, M = 9.80, cost 2√(20·30·144) = £587.88 (closed form; the cost
// line is tangent there). The equality Q = 24 alone is a curve, not a convex set.
const cost = (c: number): PlotPoint[] => [[0, c / 30], [c / 20, 0]]
const REGION: PlotPoint[] = [...outputLevel(24, 4.8, 40), [40, 30], [4.8, 30]]

export const formulation: Scene = {
  id: 'formulation',
  title: 'Convex formulations',
  flow: 'TB',
  nodes: [
    {
      id: 'region',
      kind: 'plot',
      label: 'Cheapest 24 chairs: £20 per labour hour, £30 per machine hour',
      sub: 'feasible set LM ≥ 144 (inside the green boundary) is convex; cost lines 20L + 30M = c are straight',
      plot: {
        equal: true,
        x: { min: 0, max: 40, step: 5, label: 'L' },
        y: { min: 0, max: 30, step: 5, label: 'M' },
        series: [
          { kind: 'line', points: REGION, label: 'feasible: Q ≥ 24', labelAt: [27, 25], color: '#34d399' },
          { kind: 'line', points: cost(450), label: '£450: infeasible', labelAt: [1, 13.2], color: '#9ca3af' },
          { kind: 'line', points: cost(587.88), label: '£587.88: optimal', labelAt: [21, 6.9], color: '#f59e0b' },
          { kind: 'line', points: cost(750), label: '£750', labelAt: [33, 2.6], color: '#9ca3af' },
          { kind: 'marker', at: [14.7, 9.8], label: '(14.7, 9.8)', labelAt: [15.3, 11.1], color: '#f472b6' },
        ],
      },
    },
    {
      id: 'standard',
      kind: 'table',
      label: 'A convex problem: convex objective, convex inequalities gᵢ ≤ 0, affine equalities',
      sub: 'then every local minimum is global',
      headers: ['ingredient', 'here', 'convex?'],
      values: [
        ['objective', '20L + 30M', 'yes: linear'],
        ['inequality', '24 − 2√(LM) ≤ 0', 'yes: −√(LM) is convex'],
        ['equality, as asked', '2√(LM) = 24', 'no: a curve'],
        ['relaxed to ≥', 'same optimum: cost rises with L, M', 'yes, and justified'],
        ['affine equality', 'L + M = 25', 'yes: a line'],
      ],
    },
  ],
  edges: [],
}
