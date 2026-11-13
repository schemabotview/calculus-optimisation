import { board, caution, fact, facts } from '../frame'

// §8.3 — the triangle T = {0 ≤ x ≤ y ≤ 1}. ∫∫_T e^(y²) dA: as dy dx the inner integral has no elementary
// antiderivative; as dx dy it is ∫₀¹ y e^(y²) dy = (e − 1)/2 = 0.85914 (dblquad: 0.85914). Area check 1/2.
export const regions = board({
  id: 'regions',
  figure: 'Regions that are not rectangles',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'triangle',
      title: 'The triangle 0 ≤ x ≤ y ≤ 1, sliced two ways',
      equal: true,
      x: { min: -0.1, max: 1.2, step: 0.1, label: 'x' },
      y: { min: -0.1, max: 1.1, step: 0.1, label: 'y' },
      series: [
        { kind: 'area', points: [[0, 0], [1, 1], [0, 1], [0, 0]], tone: 'ingest' },
        {
          kind: 'line',
          points: [[0, 0], [1, 1], [0, 1], [0, 0]],
          label: 'T',
          labelAt: [0.2, 0.55],
          tone: 'ingest'
        },
        {
          kind: 'segment',
          from: [0.35, 0.35],
          to: [0.35, 1],
          dashed: false,
          label: 'x fixed: y from x to 1',
          labelAt: [0.37, 0.25],
          tone: 'infra'
        },
        {
          kind: 'segment',
          from: [0, 0.75],
          to: [0.75, 0.75],
          dashed: false,
          label: 'y fixed: x from 0 to y',
          labelAt: [0.04, 0.98],
          tone: 'serve'
        },
        {
          kind: 'line',
          points: [[0, 0], [1.1, 1.1]],
          label: 'y = x',
          labelAt: [0.95, 0.85],
          tone: 'neutral'
        },
      ]
    },
    {
      type: 'table',
      id: 'orders',
      title: '∫∫_T e^(y²) dA: the order decides whether it can be done by hand',
      columns: ['order', 'limits', 'inner integral', 'result'],
      rows: [
        ['dy dx', '0 ≤ x ≤ 1, x ≤ y ≤ 1', '∫ₓ¹ e^(y²) dy: no formula', 'numerical only'],
        ['dx dy', '0 ≤ y ≤ 1, 0 ≤ x ≤ y', '∫₀ʸ e^(y²) dx = y e^(y²)', '(e − 1)/2'],
        ['check', 'dblquad, dy dx', '—', '0.85914'],
        ['area of T', '∫₀¹ ∫₀ʸ dx dy', 'y', '1/2'],
      ]
    },
  ],
  idea: 'Nonrectangular domains and region descriptions',
  board: [
    fact('b-rule', 'Inner limits depend on the outer variable', 'describe the region by inequalities, in a workable order'),
    facts('b-1', 'One triangle, two ways', ['T: 0 ≤ x ≤ y ≤ 1', 'x outer: x ≤ y ≤ 1', 'y outer: 0 ≤ x ≤ y', 'both: area ½']),
    facts('b-2', 'Order decides feasibility', ['∫ₓ¹ e^(y²) dy: no formula', 'x inside: y e^(y²)', '→ (e − 1)/2 ≈ 0.8591']),
    caution('b-watch', 'Swapping the order means redrawing the region, not swapping limits: ∫₀¹ ∫ₓ¹ becomes ∫₀¹ ∫₀ʸ.'),
  ]
})
