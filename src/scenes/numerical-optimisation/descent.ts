import { board, fact, facts } from '../frame'
import { arrow } from '../plot-kit'
import { AXES, levels, START } from './bowl'

// §10.1 — at (3, 1.5), ∇f = (3, 15). ∇fᵀd for each direction computed: −∇f: −234; (−1, 0): −3
// (0, 1): +15; Newton −H⁻¹∇f = (−3, −1.5): −31.5. Arrows are unit directions drawn 2 long.
const unit = (d: [
  number,
  number
], s = 2): [
  number,
  number
] => {
  const n = Math.hypot(d[0], d[1])
  return [START[0] + (s * d[0]) / n, START[1] + (s * d[1]) / n]
}
export const descentScene = board({
  id: 'descent',
  figure: 'Descent directions',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'directions',
      title: 'Directions from (3, 1.5) on the bowl f = ½(x² + 10y²)',
      ...AXES,
      series: [
        ...levels([1, 4, 9, 15.75]),
        arrow(unit([-3, -15]), '−∇f: steepest', 'serve', START),
        { ...arrow(unit([-3, -1.5]), 'Newton: towards the centre', 'store', START), labelAt: [-1.5, 0.75] },
        { ...arrow(unit([-1, 0]), '(−1, 0)', 'ingest', START), labelAt: [0.55, 1.7] },
        { ...arrow(unit([0, 1], 0.8), '(0, 1): uphill', 'infra', START), labelAt: [3.1, 2.1] },
      ]
    },
    {
      type: 'table',
      id: 'test',
      title: 'The descent test: ∇fᵀd < 0, with ∇f(3, 1.5) = (3, 15)',
      columns: ['direction d', '∇fᵀd', 'descent?'],
      rows: [
        ['−∇f = (−3, −15)', '−234', 'yes: steepest'],
        ['Newton (−3, −1.5)', '−31.5', 'yes'],
        ['(−1, 0)', '−3', 'yes, barely'],
        ['(0, 1)', '+15', 'no: uphill'],
      ]
    },
  ],
  idea: 'Descent directions, steps and stopping criteria',
  board: [
    fact('b-rule', 'Most solvers repeat xₖ₊₁ = xₖ + αₖ dₖ', 'a direction, a step, until a stopping test passes'),
    facts('b-1', 'Descent directions', ['∇f(x)ᵀd < 0', 'then small α decreases f', '−∇f: the steepest']),
    facts('b-2', 'The test bowl', ['f = ½(x² + 10y²)', 'start (3, 1.5): ∇f = (3, 15)', '−∇f points mostly down y']),
    fact('b-3', 'Stopping criteria', 'a small ‖∇f‖ is evidence; small steps or f changes, or an iteration limit, are not'),
  ]
})
