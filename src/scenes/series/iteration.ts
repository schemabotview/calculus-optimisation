import type { Scene } from '@graphlearning/flow'
import type { PlotPoint } from '@graphlearning/flow'

// §6.1 — the fixed-point iteration xₙ₊₁ = cos xₙ from x₀ = 1 converges to r = 0.7390851…; each error is
// about sin r ≈ 0.674 times the last (measured ratio 0.676 at n = 10). Newton for √2 (xₙ₊₁ = ½(xₙ + 2/xₙ))
// squares its error instead. Both runs computed in Python, double precision.
const R = 0.7390851332151607
const COS: PlotPoint[] = []
for (let n = 0, x = 1; n <= 20; n++, x = Math.cos(x)) COS.push([n, x])

export const iteration: Scene = {
  id: 'iteration',
  title: 'Sequences and iterative convergence',
  flow: 'TB',
  nodes: [
    {
      id: 'iterates',
      kind: 'plot',
      label: 'The sequence xₙ₊₁ = cos xₙ, starting at x₀ = 1',
      sub: 'it overshoots, undershoots and settles on r = 0.739085, where cos r = r',
      plot: {
        x: { min: 0, max: 20, step: 2, label: 'n' },
        y: { min: 0.5, max: 1.05, step: 0.1, label: 'xₙ' },
        series: [
          { kind: 'line', points: [[0, R], [20, R]], label: 'limit r = 0.739085', labelAt: [13, 0.765], color: '#9ca3af' },
          { kind: 'line', points: COS, color: '#60a5fa' },
          { kind: 'scatter', points: COS, label: 'xₙ', labelAt: [1.3, 0.53], color: '#60a5fa' },
        ],
      },
    },
    {
      id: 'rates',
      kind: 'table',
      label: 'Two iterations, two rates of convergence',
      sub: 'errors |xₙ − limit|, computed',
      headers: ['n', 'cos iteration', 'Newton for √2'],
      values: [
        ['1', '0.199', '0.086'],
        ['2', '0.118', '0.0025'],
        ['3', '0.085', '2.1 × 10⁻⁶'],
        ['4', '0.054', '1.6 × 10⁻¹²'],
        ['10', '0.0052', 'machine precision'],
        ['per step', 'error × 0.67 (linear)', 'error squared (quadratic)'],
      ],
    },
  ],
  edges: [],
}
