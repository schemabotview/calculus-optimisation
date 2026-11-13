import { board, fact, facts } from '../frame'
import { arrow } from '../plot-kit'
import { AXES, costLine, regionSeries } from './region'

// §11.1 — minimise 20L + 30M with g₁ = 24 − 2√(LM) ≤ 0 and g₂ = M − 8 ≤ 0. The ch. 9 optimum (14.70, 9.80)
// breaks g₂; the new optimum is the corner (18, 8), £600 (SLSQP: 18.000, 8.000, 600.00). Constraint values
// at each point computed.
export const active = board({
  id: 'active',
  figure: 'Feasibility and active constraints',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'corner',
      title: 'Add machine availability M ≤ 8 to the cheapest-24-chairs problem',
      ...AXES,
      series: [
        ...regionSeries([29.06, 10.93]),
        {
          kind: 'line',
          points: costLine(600),
          label: '£600',
          labelAt: [25.5, 2.6],
          tone: 'infra'
        },
        {
          kind: 'scatter',
          points: [[14.7, 9.8]],
          label: 'ch. 9 optimum (14.7, 9.8): M > 8',
          labelAt: [15.5, 13],
          tone: 'serve'
        },
        {
          kind: 'scatter',
          points: [[18, 8]],
          label: '(18, 8): £600',
          labelAt: [18.6, 11.143],
          tone: 'ingest'
        },
        { ...arrow([23, 8], 'feasible: along M = 8', 'ingest', [18, 8]), labelAt: [23.5, 8.9] },
        { ...arrow([22, 6.55], 'into the region', 'ingest', [18, 8]), labelAt: [22.5, 5.7143] },
      ]
    },
    {
      type: 'table',
      id: 'status',
      title: 'Constraint values, written g(x) ≤ 0',
      columns: ['point', 'g₁ = 24 − 2√(LM)', 'g₂ = M − 8', 'status'],
      rows: [
        ['(14.7, 9.8)', '0', '+1.8', 'infeasible'],
        ['(18, 8)', '0', '0', 'both active: the optimum'],
        ['(30, 6)', '−2.83', '−2', 'interior: both inactive'],
        ['(10, 8)', '+6.11', '0', 'infeasible: too few chairs'],
      ]
    },
  ],
  idea: 'Feasibility, active boundaries and tangent directions',
  board: [
    fact('b-rule', 'Write every constraint as g(x) ≤ 0', 'active: g = 0; inactive: g < 0; violated: g > 0'),
    facts('b-1', 'The allocation, extended', ['minimise 20L + 30M, ≥ 24 chairs', 'new cap: M ≤ 8', '(14.7, 9.8) now breaks it', '(18, 8), £600: both active']),
    facts('b-2', 'Feasible directions', ['interior: every direction', 'at (18, 8): keep M ≤ 8, Q ≥ 24', 'a cone, not a plane']),
    fact('b-3', 'Why ∇f need not vanish', 'at a boundary optimum, every feasible direction is uphill; only inactive constraints can be ignored'),
  ]
})
