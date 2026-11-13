import { board, caution, fact, facts } from '../frame'
import type { P } from '../plot-kit'

// §9.8 — the chapter 7 data (t = 1…4, y = 3.2, 5.9, 9.1, 11.8). Least squares f(w) = ‖Xw − y‖² is a convex
// quadratic with Hessian 2XᵀX (eigenvalues 1.20, 66.8 > 0): unique minimiser w* = (0.25, 2.9), f = 0.05.
// Level sets f = 0.05 + c are ellipses (w − w*)ᵀXᵀX(w − w*) = c, traced from the eigen-decomposition.
// Minimax fit via the epigraph LP (scipy linprog): w = (0.125, 2.95), max residual 0.125 (LS: 0.15).
const LAM = [0.59878053, 33.40121947]
const V = [[-0.94673755, 0.32200622], [0.32200622, 0.94673755]]
const ellipse = (c: number): P[] => Array.from({ length: 121 }, (_, i) => {
  const t = (2 * Math.PI * i) / 120
  const a = Math.sqrt(c / LAM[0]) * Math.cos(t)
  const b = Math.sqrt(c / LAM[1]) * Math.sin(t)
  return [0.25 + a * V[0][0] + b * V[0][1], 2.9 + a * V[1][0] + b * V[1][1]]
})
export const quadratic = board({
  id: 'quadratic',
  figure: 'Quadratic models and epigraph reformulation',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'bowl',
      title: 'Level sets of the least-squares objective f(w₀, w₁)',
      x: { min: -2.4, max: 2.9, step: 0.5, label: 'w₀, intercept' },
      y: { min: 2.15, max: 3.65, step: 0.25, label: 'w₁, slope' },
      series: [
        {
          kind: 'line',
          points: ellipse(0.25),
          label: 'f = 0.30',
          labelAt: [0.60485, 3.0121],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: ellipse(1),
          label: 'f = 1.05',
          labelAt: [1.25, 2.86],
          tone: 'store'
        },
        {
          kind: 'line',
          points: ellipse(2.5),
          label: 'f = 2.55',
          labelAt: [1.85, 2.7],
          tone: 'infra'
        },
        {
          kind: 'scatter',
          points: [[0.25, 2.9]],
          label: 'least squares (0.25, 2.9)',
          labelAt: [-1.8194, 2.6557],
          tone: 'serve'
        },
        {
          kind: 'scatter',
          points: [[0.125, 2.95]],
          label: 'minimax (0.125, 2.95)',
          labelAt: [-0.91119, 3.4736],
          tone: 'consume'
        },
      ]
    },
    {
      type: 'table',
      id: 'epigraph',
      title: 'Two convex fits of the same data',
      columns: ['fit', 'problem', 'solution', 'sum r²', 'max |r|'],
      rows: [
        ['least squares', 'min ‖Xw − y‖²', '(0.25, 2.9)', '0.050', '0.150'],
        ['minimax', 'min t, −t ≤ Xw − y ≤ t', '(0.125, 2.95)', '0.0625', '0.125'],
        ['why convex', 'Hessian 2XᵀX ≻ 0', 'eigenvalues 1.20, 66.8', '—', '—'],
      ]
    },
  ],
  idea: 'Quadratic and least-squares models and simple epigraph reformulation',
  board: [
    fact('b-rule', '½ wᵀAw − bᵀw + c with A ≻ 0', 'a unique minimiser, where Aw = b'),
    facts('b-1', 'Least squares', ['Hessian 2XᵀX', 'eigenvalues 1.20 and 66.8', 'w* = (0.25, 2.9), f = 0.05', 'ellipses, long where flat']),
    facts('b-2', 'The epigraph trick', ['min max |rᵢ| has corners', 'add t: −t ≤ rᵢ ≤ t', 'an LP: max |r| = 0.125']),
    caution('b-watch', 'Chapter outcome: you can use first- and second-order conditions, separate existence from classification, and formulate a convex problem you can justify.'),
  ]
})
