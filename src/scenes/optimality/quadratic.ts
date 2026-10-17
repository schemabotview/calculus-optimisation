import type { Scene } from '@graphlearning/flow'
import type { PlotPoint } from '@graphlearning/flow'

// §9.8 — the chapter 7 data (t = 1…4, y = 3.2, 5.9, 9.1, 11.8). Least squares f(w) = ‖Xw − y‖² is a convex
// quadratic with Hessian 2XᵀX (eigenvalues 1.20, 66.8 > 0): unique minimiser w* = (0.25, 2.9), f = 0.05.
// Level sets f = 0.05 + c are ellipses (w − w*)ᵀXᵀX(w − w*) = c, traced from the eigen-decomposition.
// Minimax fit via the epigraph LP (scipy linprog): w = (0.125, 2.95), max residual 0.125 (LS: 0.15).
const LAM = [0.59878053, 33.40121947]
const V = [[-0.94673755, 0.32200622], [0.32200622, 0.94673755]]
const ellipse = (c: number): PlotPoint[] =>
  Array.from({ length: 121 }, (_, i) => {
    const t = (2 * Math.PI * i) / 120
    const a = Math.sqrt(c / LAM[0]) * Math.cos(t)
    const b = Math.sqrt(c / LAM[1]) * Math.sin(t)
    return [0.25 + a * V[0][0] + b * V[0][1], 2.9 + a * V[1][0] + b * V[1][1]]
  })

export const quadratic: Scene = {
  id: 'quadratic',
  title: 'Quadratic models and epigraph reformulation',
  flow: 'TB',
  nodes: [
    {
      id: 'bowl',
      kind: 'plot',
      label: 'Level sets of the least-squares objective f(w₀, w₁)',
      sub: 'a convex quadratic: nested ellipses around one minimiser',
      plot: {
        x: { min: -2.4, max: 2.9, step: 0.5, label: 'w₀, intercept' },
        y: { min: 2.15, max: 3.65, step: 0.25, label: 'w₁, slope' },
        series: [
          { kind: 'line', points: ellipse(0.25), label: 'f = 0.30', labelAt: [0.55, 2.98], color: '#60a5fa' },
          { kind: 'line', points: ellipse(1), label: 'f = 1.05', labelAt: [1.25, 2.86], color: '#34d399' },
          { kind: 'line', points: ellipse(2.5), label: 'f = 2.55', labelAt: [1.85, 2.7], color: '#f59e0b' },
          { kind: 'marker', at: [0.25, 2.9], label: 'least squares (0.25, 2.9)', labelAt: [-1.6, 2.72], color: '#f472b6' },
          { kind: 'marker', at: [0.125, 2.95], label: 'minimax (0.125, 2.95)', labelAt: [-1.35, 3.12], color: '#a78bfa' },
        ],
      },
    },
    {
      id: 'epigraph',
      kind: 'table',
      label: 'Two convex fits of the same data',
      sub: 'epigraph trick: minimise t subject to −t ≤ rᵢ ≤ t turns a max into a linear program',
      headers: ['fit', 'problem', 'solution', 'sum r²', 'max |r|'],
      values: [
        ['least squares', 'min ‖Xw − y‖²', '(0.25, 2.9)', '0.050', '0.150'],
        ['minimax', 'min t, −t ≤ Xw − y ≤ t', '(0.125, 2.95)', '0.0625', '0.125'],
        ['why convex', 'Hessian 2XᵀX ≻ 0', 'eigenvalues 1.20, 66.8', '—', '—'],
      ],
    },
  ],
  edges: [],
}
