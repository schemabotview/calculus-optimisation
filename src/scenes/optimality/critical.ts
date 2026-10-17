import type { Scene } from '@graphlearning/flow'
import type { PlotPoint } from '@graphlearning/flow'

// §9.3 — f(x, y) = x³ − 3x + y². ∇f = (3x² − 3, 2y) = 0 at (1, 0) and (−1, 0): f = −2 and 2. Level sets
// f = c are y = ±√(c − x³ + 3x), traced here on the sub-intervals where the root is real (endpoints found
// by bisection), so every curve is computed, not placed.
const g = (x: number) => x * x * x - 3 * x
const X0 = -2.6
const X1 = 2.6
const edge = (c: number, a: number, b: number) => {
  let [lo, hi] = [a, b]
  const inside = (x: number) => c - g(x) >= 0
  for (let k = 0; k < 50; k++) {
    const m = (lo + hi) / 2
    if (inside(m) === inside(lo)) lo = m
    else hi = m
  }
  return inside(lo) ? lo : hi
}
function level(c: number): PlotPoint[][] {
  const n = 520
  const xs = Array.from({ length: n + 1 }, (_, i) => X0 + ((X1 - X0) * i) / n)
  const out: PlotPoint[][] = []
  let start: number | null = null
  for (let i = 0; i <= n; i++) {
    const ok = c - g(xs[i]) >= 0
    if (ok && start === null) start = i === 0 ? X0 : edge(c, xs[i - 1], xs[i])
    if (start !== null && (!ok || i === n)) {
      const end = ok ? X1 : edge(c, xs[i - 1], xs[i])
      const seg = Array.from({ length: 121 }, (_, k) => start! + ((end - start!) * k) / 120)
      const up = seg.map((x): PlotPoint => [x, Math.sqrt(Math.max(0, c - g(x)))])
      const down = [...seg].reverse().map((x): PlotPoint => [x, -Math.sqrt(Math.max(0, c - g(x)))])
      out.push([...up, ...down, ...(start > X0 && end < X1 ? [up[0]] : [])])
      start = null
    }
  }
  return out
}
const LEVELS = [
  { c: -1.5, color: '#60a5fa' },
  { c: 0, color: '#34d399' },
  { c: 2, color: '#f59e0b' },
  { c: 4, color: '#f472b6' },
]

export const critical: Scene = {
  id: 'critical',
  title: 'Interior first-order conditions',
  flow: 'TB',
  nodes: [
    {
      id: 'levels',
      kind: 'plot',
      label: 'Level sets of x³ − 3x + y², with two critical points',
      sub: 'f = −1.5 (blue), 0 (green), 2 (orange), 4 (pink); ∇f = 0 at both marked points',
      plot: {
        equal: true,
        x: { min: -2.6, max: 2.6, step: 0.5 },
        y: { min: -2.5, max: 2.5, step: 0.5 },
        series: [
          ...LEVELS.flatMap(({ c, color }) => level(c).map((points) => ({ kind: 'line' as const, points, color }))),
          { kind: 'marker', at: [1, 0], label: '(1, 0): f = −2, a minimum', labelAt: [0.55, -0.32], color: '#60a5fa' },
          { kind: 'marker', at: [-1, 0], label: '(−1, 0): f = 2, a saddle', labelAt: [-2.25, 0.3], color: '#f59e0b' },
        ],
      },
    },
    {
      id: 'stationary',
      kind: 'table',
      label: 'Fermat: an interior local minimum of a differentiable f has ∇f = 0',
      sub: 'necessary, not sufficient: ∇f = 0 gives candidates, not answers',
      headers: ['point', '∇f = (3x² − 3, 2y)', 'f', 'what it is'],
      values: [
        ['(1, 0)', '(0, 0)', '−2', 'local minimum (§9.4)'],
        ['(−1, 0)', '(0, 0)', '2', 'saddle: neither'],
        ['(0, 0)', '(−3, 0)', '0', 'not a candidate'],
        ['q = 8 in §9.1', 'c′ = −0.125', '11', 'boundary: ∇f ≠ 0 allowed'],
      ],
    },
  ],
  edges: [],
}
