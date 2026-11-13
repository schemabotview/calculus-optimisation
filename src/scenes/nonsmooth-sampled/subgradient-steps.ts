import { board, caution, fact, facts } from '../frame'
import type { P } from '../plot-kit'

// §12.2 — subgradient method on f(x) = |x| from x₀ = 1, using s = sign(x). Constant α = 0.3: 0.7, 0.4,
// 0.1, −0.2, then 0.1, −0.2 forever. Diminishing αₖ = 0.5/√k: |xₖ| shrinks slowly (best 0.0297 by k = 40),
// and f(xₖ) is not monotone. Computed here and checked in Python.
const run = (alpha: (k: number) => number, n: number): P[] => {
  const out: P[] = [[0, 1]]
  let x = 1
  for (let k = 1; k <= n; k++) {
    x -= alpha(k) * Math.sign(x)
    out.push([k, x])
  }
  return out
}
const CONST = run(() => 0.3, 24)
const DIMIN = run((k) => 0.5 / Math.sqrt(k), 24)
export const subgradientSteps = board({
  id: 'subgradient-steps',
  figure: 'Subgradient steps and step-size caveats',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'iterates',
      title: 'Subgradient method on |x| from x₀ = 1',
      x: { min: 0, max: 24, step: 2, label: 'k' },
      y: { min: -0.4, max: 1.05, step: 0.2, label: 'xₖ' },
      series: [
        { kind: 'line', points: [[0, 0], [24, 0]], tone: 'neutral' },
        { kind: 'line', points: CONST, tone: 'serve' },
        {
          kind: 'scatter',
          points: CONST,
          label: 'α = 0.3: stuck cycling 0.1, −0.2',
          labelAt: [9.5, -0.34],
          tone: 'serve'
        },
        { kind: 'line', points: DIMIN, tone: 'ingest' },
        {
          kind: 'scatter',
          points: DIMIN,
          label: 'αₖ = 0.5/√k: closes in on 0',
          labelAt: [9.5, 0.3],
          tone: 'ingest'
        },
      ]
    },
    {
      type: 'table',
      id: 'caveats',
      title: 'What a subgradient step can and cannot promise',
      columns: ['step rule', 'after 4 steps', 'long run', 'guarantee'],
      rows: [
        ['constant α = 0.3', '−0.2', 'cycles', 'best f within α/2'],
        ['αₖ = 0.5/√k', '0.108', '0.030 at k = 40', 'best f → minimum'],
        ['monotone?', 'no: rose at k = 5', '—', 'track the best point'],
        ['stopping on ‖s‖', 's = ±1 always', '—', 'useless'],
      ]
    },
  ],
  idea: 'Subgradient steps and step-size caveats',
  board: [
    fact('b-rule', 'Any subgradient for the gradient', 'xₖ₊₁ = xₖ − αₖ sₖ: looks like, but is not, gradient descent'),
    facts('b-1', 'On |x| from 1', ['every step has length α', 'α = 0.3: 0.7, 0.4, 0.1, −0.2…', 'cycles for ever', '0.5/√k: best 0.030 by 40']),
    facts('b-2', 'Why it differs', ['−s may not descend', 'keep the best point', '‖s‖ never shrinks', 'αₖ → 0, Σ αₖ = ∞']),
    caution('b-watch', 'Backtracking assumes a descent direction and can stall at a kink: use a step schedule, or a method that handles the kink exactly.'),
  ]
})
