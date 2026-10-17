import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §3.6 — L'Hôpital's rule where it applies (sin x / x → 1, (eˣ − 1 − x)/x² → 1/2; both checked by
// computing values near 0) and where it does not.
export const lhopital: Scene = {
  id: 'lhopital',
  title: "L'Hôpital's rule and its limits",
  flow: 'TB',
  nodes: [
    {
      id: 'sinc',
      kind: 'plot',
      label: 'sin x / x near 0: a 0/0 form whose limit is 1',
      sub: "L'Hôpital: (sin x)′/(x)′ = cos x / 1 → 1",
      plot: {
        x: { min: -10, max: 10, step: 2 },
        y: { min: -0.4, max: 1.2, step: 0.2 },
        series: [
          { kind: 'line', points: sample(-10, -0.05, 120, (x) => Math.sin(x) / x), color: '#60a5fa' },
          { kind: 'line', points: sample(0.05, 10, 120, (x) => Math.sin(x) / x), label: 'sin x / x', labelAt: [2.2, 0.75], color: '#60a5fa' },
          { kind: 'marker', at: [0, 1], label: 'limit 1, though undefined at 0', labelAt: [0.6, 1.08], color: '#f472b6' },
        ],
      },
    },
    {
      id: 'cases',
      kind: 'table',
      label: "When the rule applies, and when it does not",
      sub: 'it needs 0/0 or ∞/∞, and the derivative ratio must have a limit',
      headers: ['limit', 'form', 'rule gives', 'truth'],
      values: [
        ['sin x / x, x → 0', '0/0', 'cos 0 / 1 = 1', '1 (0.99998 at x = 0.01)'],
        ['(eˣ − 1 − x)/x², x → 0', '0/0, twice', 'eˣ/2 → 1/2', '1/2 (0.50017 at 0.001)'],
        ['(x + 1)/(x + 2), x → 0', 'not 0/0', '1/1 = 1: wrong', '1/2 by substitution'],
        ['(x + sin x)/x, x → ∞', '∞/∞', '1 + cos x: no limit', '1: rule is silent'],
      ],
    },
  ],
  edges: [],
}
