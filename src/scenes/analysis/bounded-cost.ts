import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'
import { CAPACITY, costPerChair } from '../workshop'

// §3.5 — the workshop's cost per chair c(q) = 40/q + 0.5q + 2 (q chairs/hour). Unconstrained optimum
// q = √80 ≈ 8.94 (c ≈ 10.94); with capacity q ≤ 8 the optimum moves to the boundary q = 8, c = 11.
// Values computed.
export const boundedCost = board({
  id: 'bounded-cost',
  figure: 'A bounded production-cost problem',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'cost',
      title: 'Cost per chair c(q) = 40/q + 0.5q + 2, with capacity q ≤ 8',
      x: { min: 0, max: 14, step: 2, label: 'q (chairs per hour)' },
      y: { min: 8, max: 26, step: 2, label: '£ per chair' },
      series: [
        {
          kind: 'line',
          points: sample(1.6, 14, 120, costPerChair),
          label: 'c(q)',
          labelAt: [2.6, 20.5],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: [[CAPACITY, 8], [CAPACITY, 26]],
          dashed: true,
          label: 'capacity q = 8',
          labelAt: [8.2, 24.5],
          tone: 'serve'
        },
        {
          kind: 'scatter',
          points: [[Math.sqrt(80), costPerChair(Math.sqrt(80))]],
          label: '√80: infeasible',
          labelAt: [9.3, 9.3],
          tone: 'neutral'
        },
        {
          kind: 'scatter',
          points: [[CAPACITY, costPerChair(CAPACITY)]],
          label: 'q = 8: £11, the optimum',
          labelAt: [3.4, 10.3],
          tone: 'store'
        },
        {
          kind: 'scatter',
          points: [[2, costPerChair(2)]],
          label: 'q = 2: £23',
          labelAt: [2.3, 23.6],
          tone: 'infra'
        },
      ]
    },
    {
      type: 'table',
      id: 'model',
      title: 'Formulate, then compare every feasible candidate',
      columns: ['candidate', 'reason', 'c(q)'],
      rows: [
        ['q = 2', 'lower endpoint', '£23.00'],
        ['q = 8', 'upper endpoint: capacity', '£11.00: best'],
        ['q = √80 ≈ 8.94', "c′ = 0, but outside 2 ≤ q ≤ 8", '£10.94: not allowed'],
        ['open domain 2 ≤ q < 8', 'boundary excluded', 'infimum £11, never attained'],
      ]
    },
  ],
  idea: 'Constrained one-variable modelling and existence',
  board: [
    fact('b-rule', 'Choose a rate q to minimise cost per chair'),
    facts('b-1', 'The model', ['overhead £40/h: 40/q', 'wear 0.5q; material £2', 'c(q) = 40/q + 0.5q + 2', 'capacity 2 ≤ q ≤ 8']),
    facts('b-2', 'Solving it', ['c′ = 0 at √80 ≈ 8.94: outside', 'c(2) = £23, c(8) = £11', 'run at capacity: £11']),
    caution('b-watch', 'If the capacity were q < 8 (open), the cost would approach £11 but never reach it: no optimum would exist.'),
  ]
})
