import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'

// §6.6 — ln(1 + x) = x − x²/2 + x³/3 − …, radius 1. Partial sums S_N computed at x = 0.5, 1, 1.5, −0.9:
// fast convergence inside, slow at the endpoint x = 1, divergence beyond (S₄₀(1.5) ≈ −1.6 × 10⁵).
const S = (N: number) => (x: number) => {
  let s = 0
  for (let k = 1; k <= N; k++)
    s += ((-1) ** (k + 1) * x ** k) / k
  return s
}
export const powerSeries = board({
  id: 'power-series',
  figure: 'Power series and their domains',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'domain',
      title: 'ln(1 + x) and partial sums of its series',
      x: { min: -1, max: 2, step: 0.25 },
      y: { min: -2.5, max: 2, step: 0.5 },
      series: [
        {
          kind: 'line',
          points: sample(-0.92, 2, 100, Math.log1p),
          label: 'ln(1 + x)',
          labelAt: [1.6389, 1.15],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: sample(-1, 1.55, 100, S(5)),
          label: 'S₅',
          labelAt: [1.6, 1.55],
          tone: 'infra'
        },
        {
          kind: 'line',
          points: sample(-1, 1.45, 100, S(10)),
          label: 'S₁₀',
          labelAt: [1.48, -2.3],
          tone: 'serve'
        },
        {
          kind: 'segment',
          from: [1, -2.5],
          to: [1, 2],
          label: 'radius 1',
          labelAt: [0.65885, -2.3],
          tone: 'neutral'
        },
      ]
    },
    {
      type: 'table',
      id: 'endpoints',
      title: 'Partial sums S_N at four points, computed',
      columns: ['x', 'S₁₀', 'S₄₀', 'ln(1 + x)', 'verdict'],
      rows: [
        ['0.5', '0.4054', '0.4055', '0.4055', 'fast'],
        ['1', '0.6456', '0.6808', '0.6931', 'edge: slow'],
        ['−0.9', '−2.1187', '−2.2998', '−2.3026', 'near −1: slow'],
        ['1.5', '−2.40', '−1.6 × 10⁵', '0.9163', 'diverges'],
        ['−1', '—', '—', 'undefined', 'diverges'],
      ]
    },
  ],
  idea: 'Power series, convergence domains and endpoints',
  board: [
    fact('b-rule', 'Σ cₖ(x − a)ᵏ converges within a radius R', 'absolutely inside, divergently outside'),
    facts('b-1', 'The series for ln(1 + x)', ['x − x²/2 + x³/3 − …', 'ratio |x|: R = 1', 'x = 0.5: S₁₀ = 0.4054', 'x = 1.5: S₄₀ ≈ −1.6 × 10⁵']),
    facts('b-2', 'Endpoints, separately', ['x = 1: converges to ln 2', 'x = −1: diverges', 'domain −1 < x ≤ 1']),
    caution('b-watch', 'ln(1 + x) is defined for every x > −1, but its series is not: a formula valid near 0 need not hold wherever the function exists.'),
  ]
})
