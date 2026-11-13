import { board, caution, fact, facts } from '../frame'
import type { P } from '../plot-kit'

// §6.2 — partial sums against log₁₀ n. Hₙ = Σ 1/k grows like ln n (2.929, 5.187, 7.485, 9.788 at n = 10,
// 100, 1000, 10⁴; 14.39 at 10⁶) while Σ 1/k² settles at π²/6 = 1.6449. Computed by direct summation.
const ns = Array.from({ length: 81 }, (_, i) => Math.round(10 ** (i / 20)))
const H: P[] = []
const S2: P[] = []
let h = 0
let s = 0
for (let k = 1, j = 0; k <= 10000; k++) {
  h += 1 / k
  s += 1 / (k * k)
  while (j < ns.length && ns[j] === k) {
    H.push([Math.log10(k), h])
    S2.push([Math.log10(k), s])
    j++
  }
}
export const partialSums = board({
  id: 'partial-sums',
  figure: 'Series and partial sums',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'sums',
      title: 'Partial sums Sₙ against log₁₀ n',
      x: { min: 0, max: 4, step: 0.5, label: 'log₁₀ n' },
      y: { min: 0, max: 10.5, step: 1, label: 'Sₙ' },
      series: [
        {
          kind: 'line',
          points: H,
          label: 'Σ 1/k: grows like ln n, without bound',
          labelAt: [1.7382, 8.3],
          tone: 'serve'
        },
        {
          kind: 'line',
          points: [[0, Math.PI ** 2 / 6], [4, Math.PI ** 2 / 6]],
          label: 'π²/6 ≈ 1.645',
          labelAt: [3.2, 2.3],
          tone: 'neutral'
        },
        {
          kind: 'line',
          points: S2,
          label: 'Σ 1/k²: settles at π²/6',
          labelAt: [1.2, 0.575],
          tone: 'ingest'
        },
      ]
    },
    {
      type: 'table',
      id: 'harmonic',
      title: 'Terms tending to 0 is necessary, not sufficient: computed by direct summation',
      columns: ['n', 'last term 1/n', 'Σ 1/k (harmonic)', 'Σ 1/k²'],
      rows: [
        ['10', '0.1', '2.929', '1.5498'],
        ['100', '0.01', '5.187', '1.6350'],
        ['1000', '0.001', '7.485', '1.6439'],
        ['10⁶', '10⁻⁶', '14.39', '1.6449'],
        ['n → ∞', '→ 0', 'diverges', 'π²/6'],
      ]
    },
  ],
  idea: 'Series, partial sums and necessary convergence conditions',
  board: [
    fact('b-rule', 'A series sums only as a limit', 'of the partial sums Sₙ = a₁ + … + aₙ'),
    facts('b-1', 'The necessary condition', ['converges ⇒ aₖ → 0', 'terms not → 0: diverges', 'Σ (−1)ᵏ, Σ k/(k + 1) fail']),
    facts('b-2', 'Necessary, not sufficient', ['harmonic: aₖ → 0', 'Sₙ ~ ln n: 7.49, 14.4', 'diverges anyway', 'Σ 1/k² → π²/6']),
    caution('b-watch', 'Slow growth looks like convergence on a computer: the harmonic sum gains under 2.4 per tenfold n. Decide divergence by reasoning.'),
  ]
})
