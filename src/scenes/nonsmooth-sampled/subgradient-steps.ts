import type { Scene } from '@graphlearning/flow'
import type { PlotPoint } from '@graphlearning/flow'

// §12.2 — subgradient method on f(x) = |x| from x₀ = 1, using s = sign(x). Constant α = 0.3: 0.7, 0.4,
// 0.1, −0.2, then 0.1, −0.2 forever. Diminishing αₖ = 0.5/√k: |xₖ| shrinks slowly (best 0.0297 by k = 40),
// and f(xₖ) is not monotone. Computed here and checked in Python.
const run = (alpha: (k: number) => number, n: number): PlotPoint[] => {
  const out: PlotPoint[] = [[0, 1]]
  let x = 1
  for (let k = 1; k <= n; k++) {
    x -= alpha(k) * Math.sign(x)
    out.push([k, x])
  }
  return out
}
const CONST = run(() => 0.3, 24)
const DIMIN = run((k) => 0.5 / Math.sqrt(k), 24)

export const subgradientSteps: Scene = {
  id: 'subgradient-steps',
  title: 'Subgradient steps and step-size caveats',
  flow: 'TB',
  nodes: [
    {
      id: 'iterates',
      kind: 'plot',
      label: 'Subgradient method on |x| from x₀ = 1',
      sub: 'a constant step cycles forever; a diminishing step closes in, slowly and not monotonically',
      plot: {
        x: { min: 0, max: 24, step: 2, label: 'k' },
        y: { min: -0.4, max: 1.05, step: 0.2, label: 'xₖ' },
        series: [
          { kind: 'line', points: [[0, 0], [24, 0]], color: '#4b5563' },
          { kind: 'line', points: CONST, color: '#f472b6' },
          { kind: 'scatter', points: CONST, label: 'α = 0.3: stuck cycling 0.1, −0.2', labelAt: [9.5, -0.34], color: '#f472b6' },
          { kind: 'line', points: DIMIN, color: '#60a5fa' },
          { kind: 'scatter', points: DIMIN, label: 'αₖ = 0.5/√k: closes in on 0', labelAt: [9.5, 0.3], color: '#60a5fa' },
        ],
      },
    },
    {
      id: 'caveats',
      kind: 'table',
      label: 'What a subgradient step can and cannot promise',
      sub: 'traces computed for f(x) = |x|, x₀ = 1',
      headers: ['step rule', 'after 4 steps', 'long run', 'guarantee'],
      values: [
        ['constant α = 0.3', '−0.2', 'cycles 0.1, −0.2', 'best f within α/2 of optimum'],
        ['αₖ = 0.5/√k', '0.108', 'best |x| 0.030 at k = 40', 'best f → minimum'],
        ['monotone?', 'no: |x| rose at k = 5', '—', 'track the best point'],
        ['stopping on ‖s‖', 's = ±1 always', '—', 'useless: no small s'],
      ],
    },
  ],
  edges: [],
}
