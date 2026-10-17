import type { Scene } from '@graphlearning/flow'
import { arrow } from '../plot-kit'
import { outputLevel } from '../workshop'

// §11.2 — equality-constrained: minimise 20L + 30M subject to h = 2√(LM) − 24 = 0. At (14.70, 9.80),
// ∇f = (20, 30) and ∇h = (√(M/L), √(L/M)) = (0.8165, 1.2247), so ∇f = λ∇h with λ = 24.49 in both
// components (computed). Arrows drawn at ¼ of ∇f and 4× ∇h, from the optimum.
const P: [number, number] = [14.697, 9.798]

export const lagrange: Scene = {
  id: 'lagrange',
  title: 'Equality constraints and Lagrange multipliers',
  flow: 'TB',
  nodes: [
    {
      id: 'parallel',
      kind: 'plot',
      label: 'On the curve Q = 24, the cheapest point is where a cost line touches it',
      sub: 'there ∇f and ∇h are parallel: ∇f = λ∇h with λ = 24.49',
      plot: {
        equal: true,
        x: { min: 0, max: 36, step: 4, label: 'L' },
        y: { min: 0, max: 24, step: 4, label: 'M' },
        series: [
          { kind: 'line', points: outputLevel(24, 6, 36), label: 'h = 0: exactly 24 chairs', labelAt: [26, 3.2], color: '#34d399' },
          { kind: 'line', points: [[0, 587.88 / 30], [587.88 / 20, 0]], label: 'cost £587.88', labelAt: [2, 17.6], color: '#f59e0b' },
          { kind: 'line', points: [[0, 700 / 30], [35, 0]], label: '£700', labelAt: [30, 4.5], color: '#4b5563' },
          arrow([P[0] + 5, P[1] + 7.5], '∇f / 4 = (5, 7.5)', '#f472b6', P),
          { ...arrow([P[0] + 4 * 0.8165, P[1] + 4 * 1.2247], '4∇h', '#60a5fa', P), labelAt: [15.4, 14.2] },
          { kind: 'marker', at: P, label: '(14.70, 9.80)', labelAt: [15.6, 9.3], color: '#60a5fa' },
        ],
      },
    },
    {
      id: 'multiplier',
      kind: 'table',
      label: 'Solve ∇f = λ∇h together with h = 0',
      sub: '∇h = (√(M/L), √(L/M)); the blue arrow is 4∇h, parallel to ∇f',
      headers: ['equation', 'at (14.70, 9.80)', 'gives'],
      values: [
        ['20 = λ √(M/L)', '20 = λ × 0.8165', 'λ = 24.49'],
        ['30 = λ √(L/M)', '30 = λ × 1.2247', 'λ = 24.49'],
        ['so M/L = 20/30', 'and LM = 144', 'L = √216, M = √96'],
        ['cost', '20L + 30M', '£587.88'],
        ['λ means', '£ per extra chair required', '≈ £24.49'],
      ],
    },
  ],
  edges: [],
}
