import type { Scene } from '@graphlearning/flow'
import type { PlotPoint } from '@graphlearning/flow'

// §6.2 — partial sums against log₁₀ n. Hₙ = Σ 1/k grows like ln n (2.929, 5.187, 7.485, 9.788 at n = 10,
// 100, 1000, 10⁴; 14.39 at 10⁶) while Σ 1/k² settles at π²/6 = 1.6449. Computed by direct summation.
const ns = Array.from({ length: 81 }, (_, i) => Math.round(10 ** (i / 20)))
const H: PlotPoint[] = []
const S2: PlotPoint[] = []
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

export const partialSums: Scene = {
  id: 'partial-sums',
  title: 'Series and partial sums',
  flow: 'TB',
  nodes: [
    {
      id: 'sums',
      kind: 'plot',
      label: 'Partial sums Sₙ against log₁₀ n',
      sub: 'both series have terms that go to 0; only one has a finite sum',
      plot: {
        x: { min: 0, max: 4, step: 0.5, label: 'log₁₀ n' },
        y: { min: 0, max: 10.5, step: 1, label: 'Sₙ' },
        series: [
          { kind: 'line', points: H, label: 'Σ 1/k: grows like ln n, without bound', labelAt: [1.9, 7.4], color: '#f472b6' },
          { kind: 'line', points: [[0, Math.PI ** 2 / 6], [4, Math.PI ** 2 / 6]], label: 'π²/6 ≈ 1.645', labelAt: [3.2, 2.3], color: '#9ca3af' },
          { kind: 'line', points: S2, label: 'Σ 1/k²: settles at π²/6', labelAt: [1.2, 0.8], color: '#60a5fa' },
        ],
      },
    },
    {
      id: 'harmonic',
      kind: 'table',
      label: 'Terms tending to 0 is necessary, not sufficient',
      sub: 'computed by direct summation',
      headers: ['n', 'last term 1/n', 'Σ 1/k (harmonic)', 'Σ 1/k²'],
      values: [
        ['10', '0.1', '2.929', '1.5498'],
        ['100', '0.01', '5.187', '1.6350'],
        ['1000', '0.001', '7.485', '1.6439'],
        ['10⁶', '10⁻⁶', '14.39', '1.6449'],
        ['n → ∞', '→ 0', 'diverges', 'π²/6'],
      ],
    },
  ],
  edges: [],
}
