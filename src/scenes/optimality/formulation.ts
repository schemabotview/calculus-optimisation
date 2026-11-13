import { board, caution, fact, facts } from '../frame'
import type { P } from '../plot-kit'
import { outputLevel } from '../workshop'

// §9.7 — minimise labour at £20/h plus machine time at £30/h, subject to making 24 chairs: Q(L, M) ≥ 24,
// i.e. LM ≥ 144. Optimum L = √216 = 14.70, M = 9.80, cost 2√(20·30·144) = £587.88 (closed form; the cost
// line is tangent there). The equality Q = 24 alone is a curve, not a convex set.
const cost = (c: number): P[] => [[0, c / 30], [c / 20, 0]]
const REGION: P[] = [...outputLevel(24, 4.8, 40), [40, 30], [4.8, 30]]
export const formulation = board({
  id: 'formulation',
  figure: 'Convex formulations',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'region',
      title: 'Cheapest 24 chairs: £20 per labour hour, £30 per machine hour',
      equal: true,
      x: { min: 0, max: 40, step: 5, label: 'L' },
      y: { min: 0, max: 30, step: 5, label: 'M' },
      series: [
        {
          kind: 'line',
          points: REGION,
          label: 'feasible: Q ≥ 24',
          labelAt: [27, 25],
          tone: 'store'
        },
        {
          kind: 'line',
          points: cost(450),
          label: '£450: infeasible',
          labelAt: [1, 13.2],
          tone: 'neutral'
        },
        {
          kind: 'line',
          points: cost(587.88),
          label: '£587.88: optimal',
          labelAt: [21, 6.9],
          tone: 'infra'
        },
        {
          kind: 'line',
          points: cost(750),
          label: '£750',
          labelAt: [33, 2.6],
          tone: 'neutral'
        },
        {
          kind: 'scatter',
          points: [[14.7, 9.8]],
          label: '(14.7, 9.8)',
          labelAt: [15.3, 11.1],
          tone: 'serve'
        },
      ]
    },
    {
      type: 'table',
      id: 'standard',
      title: 'A convex problem: convex objective, convex inequalities gᵢ ≤ 0, affine equalities',
      columns: ['ingredient', 'here', 'convex?'],
      rows: [
        ['objective', '20L + 30M', 'yes: linear'],
        ['inequality', '24 − 2√(LM) ≤ 0', 'yes: −√(LM) is convex'],
        ['equality, as asked', '2√(LM) = 24', 'no: a curve'],
        ['relaxed to ≥', 'same optimum: cost rises with L, M', 'yes, and justified'],
        ['affine equality', 'L + M = 25', 'yes: a line'],
      ]
    },
  ],
  idea: 'Convex formulation with affine equalities and convex inequalities',
  board: [
    fact('b-rule', 'Convex problem: convex f, convex gᵢ ≤ 0, affine Ax = b'),
    facts('b-1', 'Cheapest 24 chairs', ['minimise 20L + 30M', '2√(LM) = 24: not convex', 'relaxed ≥ 24: convex', '(14.70, 9.80), £587.88']),
    facts('b-2', 'Relaxing safely', ['cost rises with L and M', 'so no optimum overshoots', 'argued, not assumed']),
    caution('b-watch', 'A nonlinear equality is almost never convex: relax it only when you can show the optimum lands on the boundary, or you solved another problem.'),
  ]
})
