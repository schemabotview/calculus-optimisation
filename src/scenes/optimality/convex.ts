import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'
import { costPerChair } from '../workshop'

// §9.5 — c(q) = 40/q + 0.5q + 2 has c″(q) = 80/q³ > 0 on q > 0, so it is convex there. Tangents at q = 4
// (c = 14, slope −2) and q = 12 (c = 11.333, slope 0.2222) lie below the curve; the chord from q = 2 (23) to
// q = 14 (11.857) lies above it. Q's Hessian at (16, 9) has eigenvalues −0.0975 and 0: concave.
const tangent = (q0: number, m: number) => (q: number) => costPerChair(q0) + m * (q - q0)
export const convex = board({
  id: 'convex',
  figure: 'Convex sets and functions',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'support',
      title: 'A convex function: tangents below, chords above',
      x: { min: 0, max: 16, step: 1, label: 'q' },
      y: { min: 6, max: 26, step: 2, label: 'c(q)' },
      series: [
        {
          kind: 'line',
          points: sample(1.6, 16, 120, costPerChair),
          label: 'c(q)',
          labelAt: [1.9, 25],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: sample(1.5, 8.5, 2, tangent(4, -2)),
          label: 'tangent at q = 4',
          labelAt: [6.4, 7.6],
          tone: 'store'
        },
        {
          kind: 'line',
          points: sample(6, 16, 2, tangent(12, 2 / 9)),
          label: 'tangent at q = 12',
          labelAt: [12.3, 10.2],
          tone: 'store'
        },
        {
          kind: 'segment',
          from: [2, costPerChair(2)],
          to: [14, costPerChair(14)],
          label: 'chord: above the curve',
          labelAt: [7.6, 18.6],
          tone: 'serve'
        },
      ]
    },
    {
      type: 'table',
      id: 'tests',
      title: 'Three equivalent tests for a convex function',
      columns: ['test', 'condition', 'c(q) on q > 0', 'Q(L, M)'],
      rows: [
        ['chord', 'f(θx + (1 − θ)y) ≤ θf(x) + (1 − θ)f(y)', 'holds', 'reversed: concave'],
        ['tangent', 'f(y) ≥ f(x) + ∇f(x)ᵀ(y − x)', 'holds', 'reversed: concave'],
        ['Hessian', '∇²f ⪰ 0 everywhere', '80/q³ > 0', 'eigenvalues −0.098, 0'],
        ['convex set?', 'segment stays inside', 'q > 0: yes', '{Q ≥ 24}: yes'],
      ]
    },
  ],
  idea: 'Convex sets, convex functions and derivative characterisations',
  board: [
    fact('b-rule', 'Convex set: contains every segment', 'convex function: chords on or above the graph'),
    facts('b-1', 'Derivative tests', ['tangents below the graph', 'or ∇²f ⪰ 0 everywhere', 'c″(q) = 80/q³ > 0']),
    facts('b-2', 'Why it matters', ['local minimum is global', '∇f = 0 inside: global min', 'tangents are a certificate']),
    caution('b-watch', 'Convexity is on a set: c(q) is convex on q > 0, not across 0. Q(L, M) is concave (eigenvalues −0.098, 0): maximising it is the easy problem.'),
  ]
})
