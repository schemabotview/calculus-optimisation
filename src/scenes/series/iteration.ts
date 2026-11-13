import { board, caution, fact, facts } from '../frame'
import type { P } from '../plot-kit'

// §6.1 — the fixed-point iteration xₙ₊₁ = cos xₙ from x₀ = 1 converges to r = 0.7390851…; each error is
// about sin r ≈ 0.674 times the last (measured ratio 0.676 at n = 10). Newton for √2 (xₙ₊₁ = ½(xₙ + 2/xₙ))
// squares its error instead. Both runs computed in Python, double precision.
const R = 0.7390851332151607
const COS: P[] = []
for (let n = 0, x = 1; n <= 20; n++, x = Math.cos(x))
  COS.push([n, x])
export const iteration = board({
  id: 'iteration',
  figure: 'Sequences and iterative convergence',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'iterates',
      title: 'The sequence xₙ₊₁ = cos xₙ, starting at x₀ = 1',
      x: { min: 0, max: 20, step: 2, label: 'n' },
      y: { min: 0.5, max: 1.05, step: 0.1, label: 'xₙ' },
      series: [
        {
          kind: 'line',
          points: [[0, R], [20, R]],
          label: 'limit r = 0.739085',
          labelAt: [13, 0.765],
          tone: 'neutral'
        },
        { kind: 'line', points: COS, tone: 'ingest' },
        {
          kind: 'scatter',
          points: COS,
          label: 'xₙ',
          labelAt: [1.3, 0.53],
          tone: 'ingest'
        },
      ]
    },
    {
      type: 'table',
      id: 'rates',
      title: 'Two iterations, two rates of convergence: errors |xₙ − limit|, computed',
      columns: ['n', 'cos iteration', 'Newton for √2'],
      rows: [
        ['1', '0.199', '0.086'],
        ['2', '0.118', '0.0025'],
        ['3', '0.085', '2.1 × 10⁻⁶'],
        ['4', '0.054', '1.6 × 10⁻¹²'],
        ['10', '0.0052', 'machine precision'],
        ['per step', 'error × 0.67 (linear)', 'error squared (quadratic)'],
      ]
    },
  ],
  idea: 'Sequences, limits and iterative convergence',
  board: [
    fact('b-rule', 'xₙ → L: |xₙ − L| as small as you like', 'for all large enough n'),
    facts('b-1', 'Iterations are sequences', ['repeat xₙ₊₁ = g(xₙ)', 'cos iteration → 0.739085', 'fixed point: cos r = r', 'error ×0.67 per step']),
    facts('b-2', 'Rates of convergence', ['linear: a fixed factor', 'quadratic: digits double', 'Newton √2: 5 steps', 'cos: ~30 steps for 6 digits']),
    caution('b-watch', 'A sequence can settle and still be wrong if the rule is wrong; small steps show slowing down, not a limit.'),
  ]
})
