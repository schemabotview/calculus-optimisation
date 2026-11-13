import { board, fact, facts } from '../frame'
import { sample } from '../plot-kit'
import { CAPACITY, costPerChair } from '../workshop'

// §9.1 — cost per chair c(q) = 40/q + 0.5q + 2. On the feasible set 0 < q ≤ 8 the minimum is attained at
// the boundary q = 8, c = 11 (slope there −0.125 ≠ 0); without the capacity limit it is q = √80 = 8.944,
// c = 10.944. Other rows: standard facts, values exact.
export const feasible = board({
  id: 'feasible',
  figure: 'Objectives, feasible sets and attainment',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'capacity',
      title: 'Minimise cost per chair c(q) over the feasible rates 0 < q ≤ 8',
      x: { min: 0, max: 16, step: 1, label: 'q, chairs per hour' },
      y: { min: 8, max: 26, step: 2, label: '£ per chair' },
      series: [
        { kind: 'area', points: [[0, 26], [CAPACITY, 26]], tone: 'store' },
        {
          kind: 'line',
          points: sample(1.9, 16, 120, costPerChair),
          label: 'c(q) = 40/q + 0.5q + 2',
          labelAt: [2.6, 24.5],
          tone: 'ingest'
        },
        {
          kind: 'segment',
          from: [CAPACITY, 8],
          to: [CAPACITY, 26],
          label: 'capacity q = 8',
          labelAt: [5.6, 20],
          tone: 'neutral'
        },
        {
          kind: 'scatter',
          points: [[CAPACITY, costPerChair(CAPACITY)]],
          label: 'feasible minimum: q = 8, £11.00',
          labelAt: [2.2, 9.3],
          tone: 'store'
        },
        {
          kind: 'scatter',
          points: [[Math.sqrt(80), costPerChair(Math.sqrt(80))]],
          label: 'unconstrained: q = 8.94, £10.94',
          labelAt: [9.4, 9.3],
          tone: 'serve'
        },
      ]
    },
    {
      type: 'table',
      id: 'attain',
      title: 'Is the minimum attained? Ask before solving',
      columns: ['problem', 'infimum', 'attained?', 'why'],
      rows: [
        ['c(q) on 0 < q ≤ 8', '11', 'yes, at q = 8', 'boundary point, slope ≠ 0'],
        ['c(q) on q > 0', '10.944', 'yes, at q = √80', 'interior, slope 0'],
        ['eˣ on ℝ', '0', 'no', 'approached, never reached'],
        ['x on 0 < x ≤ 1', '0', 'no', 'set not closed'],
        ['x³ on ℝ', '−∞', 'no', 'unbounded below'],
      ]
    },
  ],
  idea: 'Objectives, feasible sets, boundedness and attainment',
  board: [
    fact('b-rule', 'An objective f and a feasible set S', 'before solving, ask whether a minimiser can exist'),
    facts('b-1', 'The workshop’s rate', ['minimise c(q) per chair', 'feasible 0 < q ≤ 8', 'q = 8.94 infeasible', 'best: q = 8, £11.00']),
    facts('b-2', 'Infimum versus minimum', ['infimum: greatest lower bound', 'minimum: some point reaches it', 'eˣ on ℝ: inf 0, never hit', 'x³: no infimum at all']),
    fact('b-3', 'Weierstrass', 'continuous f on a closed, bounded, nonempty set attains its minimum; drop one and it can fail'),
  ]
})
