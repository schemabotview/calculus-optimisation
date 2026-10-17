import type { Scene } from '@graphlearning/flow'
import { arrow } from '../plot-kit'
import { AXES, levels, START } from './bowl'

// §10.1 — at (3, 1.5), ∇f = (3, 15). ∇fᵀd for each direction computed: −∇f: −234; (−1, 0): −3;
// (0, 1): +15; Newton −H⁻¹∇f = (−3, −1.5): −31.5. Arrows are unit directions drawn 2 long.
const unit = (d: [number, number], s = 2): [number, number] => {
  const n = Math.hypot(d[0], d[1])
  return [START[0] + (s * d[0]) / n, START[1] + (s * d[1]) / n]
}

export const descentScene: Scene = {
  id: 'descent',
  title: 'Descent directions',
  flow: 'TB',
  nodes: [
    {
      id: 'directions',
      kind: 'plot',
      label: 'Directions from (3, 1.5) on the bowl f = ½(x² + 10y²)',
      sub: 'a direction d is a descent direction when ∇fᵀd < 0: it makes an obtuse angle with ∇f',
      plot: {
        ...AXES,
        series: [
          ...levels([1, 4, 9, 15.75]),
          arrow(unit([-3, -15]), '−∇f: steepest', '#f472b6', START),
          { ...arrow(unit([-3, -1.5]), 'Newton: towards the centre', '#34d399', START), labelAt: [-1.5, 0.75] },
          { ...arrow(unit([-1, 0]), '(−1, 0)', '#60a5fa', START), labelAt: [0.55, 1.7] },
          { ...arrow(unit([0, 1], 0.8), '(0, 1): uphill', '#f59e0b', START), labelAt: [3.1, 2.1] },
        ],
      },
    },
    {
      id: 'test',
      kind: 'table',
      label: 'The descent test: ∇fᵀd < 0, with ∇f(3, 1.5) = (3, 15)',
      sub: 'for small enough steps along a descent direction, f decreases',
      headers: ['direction d', '∇fᵀd', 'descent?'],
      values: [
        ['−∇f = (−3, −15)', '−234', 'yes: steepest'],
        ['Newton (−3, −1.5)', '−31.5', 'yes'],
        ['(−1, 0)', '−3', 'yes, barely'],
        ['(0, 1)', '+15', 'no: uphill'],
      ],
    },
  ],
  edges: [],
}
