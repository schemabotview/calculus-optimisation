import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'
import { costPerChair } from '../workshop'

// §9.5 — c(q) = 40/q + 0.5q + 2 has c″(q) = 80/q³ > 0 on q > 0, so it is convex there. Tangents at q = 4
// (c = 14, slope −2) and q = 12 (c = 11.333, slope 0.2222) lie below the curve; the chord from q = 2 (23) to
// q = 14 (11.857) lies above it. Q's Hessian at (16, 9) has eigenvalues −0.0975 and 0: concave.
const tangent = (q0: number, m: number) => (q: number) => costPerChair(q0) + m * (q - q0)

export const convex: Scene = {
  id: 'convex',
  title: 'Convex sets and functions',
  flow: 'TB',
  nodes: [
    {
      id: 'support',
      kind: 'plot',
      label: 'A convex function: tangents below, chords above',
      sub: 'c(q) = 40/q + 0.5q + 2, with c″(q) = 80/q³ > 0 for every q > 0',
      plot: {
        x: { min: 0, max: 16, step: 1, label: 'q' },
        y: { min: 6, max: 26, step: 2, label: 'c(q)' },
        series: [
          { kind: 'line', points: sample(1.6, 16, 120, costPerChair), label: 'c(q)', labelAt: [1.9, 25], color: '#60a5fa' },
          { kind: 'line', points: sample(1.5, 8.5, 2, tangent(4, -2)), label: 'tangent at q = 4', labelAt: [6.4, 7.6], color: '#34d399' },
          { kind: 'line', points: sample(6, 16, 2, tangent(12, 2 / 9)), label: 'tangent at q = 12', labelAt: [12.3, 10.2], color: '#34d399' },
          { kind: 'segment', from: [2, costPerChair(2)], to: [14, costPerChair(14)], label: 'chord: above the curve', labelAt: [7.6, 18.6], color: '#f472b6' },
        ],
      },
    },
    {
      id: 'tests',
      kind: 'table',
      label: 'Three equivalent tests for a convex function',
      sub: 'on a convex set: one that contains the segment between any two of its points',
      headers: ['test', 'condition', 'c(q) on q > 0', 'Q(L, M)'],
      values: [
        ['chord', 'f(θx + (1 − θ)y) ≤ θf(x) + (1 − θ)f(y)', 'holds', 'reversed: concave'],
        ['tangent', 'f(y) ≥ f(x) + ∇f(x)ᵀ(y − x)', 'holds', 'reversed: concave'],
        ['Hessian', '∇²f ⪰ 0 everywhere', '80/q³ > 0', 'eigenvalues −0.098, 0'],
        ['convex set?', 'segment stays inside', 'q > 0: yes', '{Q ≥ 24}: yes'],
      ],
    },
  ],
  edges: [],
}
