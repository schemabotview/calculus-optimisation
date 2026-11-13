import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'
import { warmUp } from '../workshop'

// §1.2 — the elementary functions the course relies on, through one workshop curve: machine warm-up
// T(t) = 20 + 60(1 − e^(−t/2)), an exponential composed with a linear map. Domains in the table.
export const elementary = board({
  id: 'elementary',
  figure: 'Elementary functions and composition',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'warm-up',
      title: 'Machine temperature during warm-up',
      x: { min: 0, max: 10, step: 1, label: 't (hours)' },
      y: { min: 0, max: 90, step: 20, label: 'T (°C)' },
      series: [
        {
          kind: 'line',
          points: [[0, 80], [10, 80]],
          dashed: true,
          label: 'limit 80 °C',
          labelAt: [7.6, 84],
          tone: 'neutral'
        },
        {
          kind: 'line',
          points: sample(0, 10, 100, warmUp),
          label: 'T(t)',
          labelAt: [4.5, 66],
          tone: 'ingest'
        },
        {
          kind: 'scatter',
          points: [[2, warmUp(2)]],
          label: 'T(2) ≈ 57.9 °C',
          labelAt: [2.3, 50],
          tone: 'infra'
        },
      ]
    },
    {
      type: 'table',
      id: 'refresher',
      title: 'Refresher: the functions and their domains',
      columns: ['function', 'domain', 'note'],
      rows: [
        ['eˣ', 'all x', 'always positive; e⁰ = 1'],
        ['ln x', 'x > 0', 'inverse of eˣ: ln(eˣ) = x'],
        ['sin x, cos x', 'all x, in radians', 'π radians = 180°'],
        ['ln(x − 1)', 'x > 1', 'composition shrinks the domain'],
        ['√(4 − x²)', '−2 ≤ x ≤ 2', 'square root needs 4 − x² ≥ 0'],
      ]
    },
  ],
  idea: 'Elementary functions, composition and notation',
  board: [
    fact('b-rule', 'A small family covers most models', 'powers, exponentials, logarithms, trigonometric functions'),
    facts('b-1', 'A quick refresher', ['eˣ: a fixed factor per step', 'ln undoes it; needs x > 0', 'radians: π = 180°']),
    facts('b-2', 'Composition', ['f(g(x)): g’s output into f', 'T(t) = 20 + 60(1 − e^(−t/2))', '20 °C → 80 °C; 57.9 at 2 h']),
    caution('b-watch', 'Composition can shrink the domain: ln(x − 1) needs x > 1, and √(4 − x²) needs −2 ≤ x ≤ 2.'),
  ]
})
