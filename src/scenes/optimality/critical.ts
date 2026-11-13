import type { Tone } from '@graphlearning/graphl-flow'
import { board, caution, fact, facts } from '../frame'
import type { P } from '../plot-kit'

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
    if (inside(m) === inside(lo))
      lo = m
    else
      hi = m
  }
  return inside(lo) ? lo : hi
}
function level(c: number): P[][] {
  const n = 520
  const xs = Array.from({ length: n + 1 }, (_, i) => X0 + ((X1 - X0) * i) / n)
  const out: P[][] = []
  let start: number | null = null
  for (let i = 0; i <= n; i++) {
    const ok = c - g(xs[i]) >= 0
    if (ok && start === null)
      start = i === 0 ? X0 : edge(c, xs[i - 1], xs[i])
    if (start !== null && (!ok || i === n)) {
      const end = ok ? X1 : edge(c, xs[i - 1], xs[i])
      const seg = Array.from({ length: 121 }, (_, k) => start! + ((end - start!) * k) / 120)
      const up = seg.map((x): P => [x, Math.sqrt(Math.max(0, c - g(x)))])
      const down = [...seg].reverse().map((x): P => [x, -Math.sqrt(Math.max(0, c - g(x)))])
      out.push([...up, ...down, ...(start > X0 && end < X1 ? [up[0]] : [])])
      start = null
    }
  }
  return out
}
const LEVELS = [
  { c: -1.5, color: 'ingest' },
  { c: 0, color: 'store' },
  { c: 2, color: 'infra' },
  { c: 4, color: 'serve' },
]
export const critical = board({
  id: 'critical',
  figure: 'Interior first-order conditions',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'levels',
      title: 'Level sets of x³ − 3x + y², with two critical points',
      equal: true,
      x: { min: -2.6, max: 2.6, step: 0.5 },
      y: { min: -2.5, max: 2.5, step: 0.5 },
      series: [
        ...LEVELS.flatMap(({ c, color }) => level(c).map((points) => ({ kind: 'line' as const, points, tone: color as Tone }))),
        {
          kind: 'scatter',
          points: [[1, 0]],
          label: '(1, 0): f = −2, a minimum',
          labelAt: [2.1214, -0.10571],
          tone: 'ingest' as const
        },
        {
          kind: 'scatter',
          points: [[-1, 0]],
          label: 'saddle (−1, 0)',
          labelAt: [-4.5357, 0.3],
          tone: 'infra' as const
        },
      ]
    },
    {
      type: 'table',
      id: 'stationary',
      title: 'Fermat: an interior local minimum of a differentiable f has ∇f = 0',
      columns: ['point', '∇f = (3x² − 3, 2y)', 'f', 'what it is'],
      rows: [
        ['(1, 0)', '(0, 0)', '−2', 'local minimum (§9.4)'],
        ['(−1, 0)', '(0, 0)', '2', 'saddle: neither'],
        ['(0, 0)', '(−3, 0)', '0', 'not a candidate'],
        ['q = 8 in §9.1', 'c′ = −0.125', '11', 'boundary: ∇f ≠ 0 allowed'],
      ]
    },
  ],
  idea: 'Interior first-order necessary conditions',
  board: [
    fact('b-rule', 'Interior local minimum of a differentiable f ⇒ ∇f = 0', 'such points are critical points'),
    facts('b-1', 'Finding the candidates', ['f = x³ − 3x + y²', '∇f = 0 at (±1, 0)', 'f(1, 0) = −2: closed curves', 'f(−1, 0) = 2: curves cross']),
    facts('b-2', 'Necessary, not sufficient', ['every interior min is critical', '(−1, 0) is a saddle', 'no global min: x³ → −∞']),
    caution('b-watch', 'The condition is for interior points: at a boundary minimum like q = 8 the derivative need not vanish (chapter 11 gives that version).'),
  ]
})
