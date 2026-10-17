import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'
import { CAPACITY, costPerChair } from '../workshop'

// §3.5 — the workshop's cost per chair c(q) = 40/q + 0.5q + 2 (q chairs/hour). Unconstrained optimum
// q = √80 ≈ 8.94 (c ≈ 10.94); with capacity q ≤ 8 the optimum moves to the boundary q = 8, c = 11.
// Values computed.
export const boundedCost: Scene = {
  id: 'bounded-cost',
  title: 'A bounded production-cost problem',
  flow: 'TB',
  nodes: [
    {
      id: 'cost',
      kind: 'plot',
      label: 'Cost per chair c(q) = 40/q + 0.5q + 2, with capacity q ≤ 8',
      sub: 'overhead falls with speed, wear rises; feasible q: 2 ≤ q ≤ 8',
      plot: {
        x: { min: 0, max: 14, step: 2, label: 'q (chairs per hour)' },
        y: { min: 8, max: 26, step: 2, label: '£ per chair' },
        series: [
          { kind: 'line', points: sample(1.6, 14, 120, costPerChair), label: 'c(q)', labelAt: [2.6, 20.5], color: '#60a5fa' },
          { kind: 'line', points: [[CAPACITY, 8], [CAPACITY, 26]], dashed: true, label: 'capacity q = 8', labelAt: [8.2, 24.5], color: '#f472b6' },
          { kind: 'marker', at: [Math.sqrt(80), costPerChair(Math.sqrt(80))], label: '√80: infeasible', labelAt: [9.3, 9.3], color: '#9ca3af' },
          { kind: 'marker', at: [CAPACITY, costPerChair(CAPACITY)], label: 'q = 8: £11, the optimum', labelAt: [3.4, 10.3], color: '#34d399' },
          { kind: 'marker', at: [2, costPerChair(2)], label: 'q = 2: £23', labelAt: [2.3, 23.6], color: '#f59e0b' },
        ],
      },
    },
    {
      id: 'model',
      kind: 'table',
      label: 'Formulate, then compare every feasible candidate',
      sub: 'minimise c(q) subject to 2 ≤ q ≤ 8',
      headers: ['candidate', 'reason', 'c(q)'],
      values: [
        ['q = 2', 'lower endpoint', '£23.00'],
        ['q = 8', 'upper endpoint: capacity', '£11.00: best'],
        ['q = √80 ≈ 8.94', "c′ = 0, but outside 2 ≤ q ≤ 8", '£10.94: not allowed'],
        ['open domain 2 ≤ q < 8', 'boundary excluded', 'infimum £11, never attained'],
      ],
    },
  ],
  edges: [],
}
