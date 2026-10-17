import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §9.6 — three convex functions: eˣ (strictly convex, f″ = eˣ → 0, no minimiser), x² (strongly convex with
// m = 2, unique minimiser), max(0, |x| − 1)² (convex, flat on [−1, 1]: every point there is a minimiser).
const flat = (x: number) => Math.max(0, Math.abs(x) - 1) ** 2

export const existence: Scene = {
  id: 'convex-existence',
  title: 'Strict and strong convexity, existence and uniqueness',
  flow: 'TB',
  nodes: [
    {
      id: 'three',
      kind: 'plot',
      label: 'Three convex functions, three different answers',
      sub: 'convexity makes every local minimum global; it does not promise one exists, or is unique',
      plot: {
        x: { min: -3.2, max: 3.2, step: 0.5 },
        y: { min: -0.4, max: 5, step: 0.5 },
        series: [
          { kind: 'line', points: sample(-3.2, 1.6, 100, Math.exp), label: 'eˣ: no minimiser', labelAt: [0.25, 4.6], color: '#f472b6' },
          { kind: 'line', points: sample(-2.2, 2.2, 100, (x) => x * x), label: 'x²: unique minimiser 0', labelAt: [-2.9, 4.6], color: '#60a5fa' },
          { kind: 'line', points: sample(-3.2, 3.2, 160, flat), label: 'max(0, |x| − 1)²: minimisers fill [−1, 1]', labelAt: [-1.75, -0.3], color: '#34d399' },
        ],
      },
    },
    {
      id: 'claims',
      kind: 'table',
      label: 'What each strength of convexity guarantees',
      sub: 'strong: f″ ≥ m > 0 everywhere; strict: chords strictly above, no flat pieces',
      headers: ['function', 'convexity', 'minimiser exists?', 'unique?'],
      values: [
        ['x²', 'strong, m = 2', 'yes: x = 0', 'yes'],
        ['eˣ', 'strict, not strong', 'no: inf 0 not reached', '—'],
        ['max(0, |x| − 1)²', 'convex, not strict', 'yes', 'no: all of [−1, 1]'],
        ['strict + minimiser exists', '—', '—', 'then unique'],
        ['convex on a compact set', '—', 'yes (Weierstrass)', 'not necessarily'],
      ],
    },
  ],
  edges: [],
}
