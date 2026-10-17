import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §6.6 — ln(1 + x) = x − x²/2 + x³/3 − …, radius 1. Partial sums S_N computed at x = 0.5, 1, 1.5, −0.9:
// fast convergence inside, slow at the endpoint x = 1, divergence beyond (S₄₀(1.5) ≈ −1.6 × 10⁵).
const S = (N: number) => (x: number) => {
  let s = 0
  for (let k = 1; k <= N; k++) s += ((-1) ** (k + 1) * x ** k) / k
  return s
}

export const powerSeries: Scene = {
  id: 'power-series',
  title: 'Power series and their domains',
  flow: 'TB',
  nodes: [
    {
      id: 'domain',
      kind: 'plot',
      label: 'ln(1 + x) and partial sums of its series',
      sub: 'inside −1 < x < 1 they converge; past x = 1 they swing apart',
      plot: {
        x: { min: -1, max: 2, step: 0.25 },
        y: { min: -2.5, max: 2, step: 0.5 },
        series: [
          { kind: 'line', points: sample(-0.92, 2, 100, Math.log1p), label: 'ln(1 + x)', labelAt: [1.7, 1.15], color: '#60a5fa' },
          { kind: 'line', points: sample(-1, 1.55, 100, S(5)), label: 'S₅', labelAt: [1.6, 1.85], color: '#f59e0b' },
          { kind: 'line', points: sample(-1, 1.45, 100, S(10)), label: 'S₁₀', labelAt: [1.48, -2.3], color: '#f472b6' },
          { kind: 'segment', from: [1, -2.5], to: [1, 2], label: 'radius 1', labelAt: [0.72, -2.3], color: '#9ca3af' },
        ],
      },
    },
    {
      id: 'endpoints',
      kind: 'table',
      label: 'Partial sums S_N at four points, computed',
      sub: 'the series equals ln(1 + x) exactly on −1 < x ≤ 1',
      headers: ['x', 'S₁₀', 'S₄₀', 'ln(1 + x)', 'verdict'],
      values: [
        ['0.5', '0.4054', '0.4055', '0.4055', 'inside: fast'],
        ['1', '0.6456', '0.6808', '0.6931', 'endpoint: slow, converges'],
        ['−0.9', '−2.1187', '−2.2998', '−2.3026', 'inside, near −1: slow'],
        ['1.5', '−2.40', '−1.6 × 10⁵', '0.9163', 'outside: diverges'],
        ['−1', '—', '—', 'undefined', 'harmonic: diverges'],
      ],
    },
  ],
  edges: [],
}
