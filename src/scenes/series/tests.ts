import type { Scene } from '@graphlearning/flow'
import type { PlotPoint } from '@graphlearning/flow'

// §6.3 — three convergent series and the test that settles each, with partial sums computed:
// Σ (½)ᵏ → 1 (geometric), Σ k/2ᵏ → 2 (ratio test, ratio → ½), Σ 1/(k² + 1) → 1.0767 (compare with 1/k²).
const partial = (f: (k: number) => number, n = 20): PlotPoint[] => {
  const out: PlotPoint[] = []
  let s = 0
  for (let k = 1; k <= n; k++) out.push([k, (s += f(k))])
  return out
}

export const tests: Scene = {
  id: 'tests',
  title: 'Convergence tests',
  flow: 'TB',
  nodes: [
    {
      id: 'three',
      kind: 'plot',
      label: 'Partial sums of three convergent series',
      sub: 'each limit is known in advance because a test guaranteed it exists',
      plot: {
        x: { min: 0, max: 20, step: 2, label: 'n' },
        y: { min: 0, max: 2.2, step: 0.25, label: 'Sₙ' },
        series: [
          { kind: 'scatter', points: partial((k) => k / 2 ** k), label: 'Σ k/2ᵏ → 2', labelAt: [14, 1.88], color: '#f59e0b' },
          { kind: 'scatter', points: partial((k) => 1 / (k * k + 1)), label: 'Σ 1/(k² + 1) → 1.077', labelAt: [12.5, 1.17], color: '#34d399' },
          { kind: 'scatter', points: partial((k) => 0.5 ** k), label: 'Σ (½)ᵏ → 1', labelAt: [14, 0.8], color: '#60a5fa' },
        ],
      },
    },
    {
      id: 'which',
      kind: 'table',
      label: 'Which test settles which series',
      sub: 'a test guarantees convergence; the sum still has to be computed',
      headers: ['test', 'condition', 'example', 'verdict'],
      values: [
        ['geometric', 'Σ rᵏ converges iff |r| < 1', 'Σ (½)ᵏ', 'converges to 1'],
        ['p-series', 'Σ 1/kᵖ converges iff p > 1', 'Σ 1/k, Σ 1/k²', 'diverges; converges'],
        ['comparison', '0 ≤ aₖ ≤ bₖ, Σ bₖ converges', '1/(k² + 1) ≤ 1/k²', 'converges'],
        ['ratio', 'lim |aₖ₊₁/aₖ| < 1', 'k/2ᵏ: ratio → ½', 'converges to 2'],
        ['ratio, limit 1', 'no conclusion', '1/k and 1/k² both give 1', 'use another test'],
      ],
    },
  ],
  edges: [],
}
