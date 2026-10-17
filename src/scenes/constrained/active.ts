import type { Scene } from '@graphlearning/flow'
import { arrow } from '../plot-kit'
import { AXES, costLine, regionSeries } from './region'

// §11.1 — minimise 20L + 30M with g₁ = 24 − 2√(LM) ≤ 0 and g₂ = M − 8 ≤ 0. The ch. 9 optimum (14.70, 9.80)
// breaks g₂; the new optimum is the corner (18, 8), £600 (SLSQP: 18.000, 8.000, 600.00). Constraint values
// at each point computed.
export const active: Scene = {
  id: 'active',
  title: 'Feasibility and active constraints',
  flow: 'TB',
  nodes: [
    {
      id: 'corner',
      kind: 'plot',
      label: 'Add machine availability M ≤ 8 to the cheapest-24-chairs problem',
      sub: 'the old optimum is now infeasible; the new one sits where both constraints are active',
      plot: {
        ...AXES,
        series: [
          ...regionSeries,
          { kind: 'line', points: costLine(600), label: '£600', labelAt: [25.5, 2.6], color: '#f59e0b' },
          { kind: 'marker', at: [14.7, 9.8], label: 'ch. 9 optimum (14.7, 9.8): M > 8', labelAt: [15.5, 13], color: '#f472b6' },
          { kind: 'marker', at: [18, 8], label: '(18, 8): £600', labelAt: [18.6, 9.6], color: '#60a5fa' },
          { ...arrow([23, 8], 'feasible: along M = 8', '#60a5fa', [18, 8]), labelAt: [23.5, 8.9] },
          { ...arrow([22, 6.55], 'into the region', '#60a5fa', [18, 8]), labelAt: [22.5, 5.2] },
        ],
      },
    },
    {
      id: 'status',
      kind: 'table',
      label: 'Constraint values, written g(x) ≤ 0',
      sub: 'active: g = 0; inactive: g < 0; violated: g > 0',
      headers: ['point', 'g₁ = 24 − 2√(LM)', 'g₂ = M − 8', 'status'],
      values: [
        ['(14.7, 9.8)', '0', '+1.8', 'infeasible'],
        ['(18, 8)', '0', '0', 'both active: the optimum'],
        ['(30, 6)', '−2.83', '−2', 'interior: both inactive'],
        ['(10, 8)', '+6.11', '0', 'infeasible: too few chairs'],
      ],
    },
  ],
  edges: [],
}
