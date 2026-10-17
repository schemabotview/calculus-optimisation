import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'
import { warmUp } from '../workshop'

// §1.2 — the elementary functions the course relies on, through one workshop curve: machine warm-up
// T(t) = 20 + 60(1 − e^(−t/2)), an exponential composed with a linear map. Domains in the table.
export const elementary: Scene = {
  id: 'elementary',
  title: 'Elementary functions and composition',
  flow: 'TB',
  nodes: [
    {
      id: 'warm-up',
      kind: 'plot',
      label: 'Machine temperature during warm-up',
      sub: 'T(t) = 20 + 60 (1 − e^(−t/2)), rising towards 80 °C',
      plot: {
        x: { min: 0, max: 10, step: 1, label: 't (hours)' },
        y: { min: 0, max: 90, step: 20, label: 'T (°C)' },
        series: [
          { kind: 'line', points: [[0, 80], [10, 80]], dashed: true, label: 'limit 80 °C', labelAt: [7.6, 84], color: '#9ca3af' },
          { kind: 'line', points: sample(0, 10, 100, warmUp), label: 'T(t)', labelAt: [4.5, 66], color: '#60a5fa' },
          { kind: 'marker', at: [2, warmUp(2)], label: 'T(2) ≈ 57.9 °C', labelAt: [2.3, 50], color: '#f59e0b' },
        ],
      },
    },
    {
      id: 'refresher',
      kind: 'table',
      label: 'Refresher: the functions and their domains',
      sub: 'a composition f(g(x)) needs g(x) inside the domain of f',
      headers: ['function', 'domain', 'note'],
      values: [
        ['eˣ', 'all x', 'always positive; e⁰ = 1'],
        ['ln x', 'x > 0', 'inverse of eˣ: ln(eˣ) = x'],
        ['sin x, cos x', 'all x, in radians', 'π radians = 180°'],
        ['ln(x − 1)', 'x > 1', 'composition shrinks the domain'],
        ['√(4 − x²)', '−2 ≤ x ≤ 2', 'square root needs 4 − x² ≥ 0'],
      ],
    },
  ],
  edges: [],
}
