import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'

// §3.6 — L'Hôpital's rule where it applies (sin x / x → 1, (eˣ − 1 − x)/x² → 1/2; both checked by
// computing values near 0) and where it does not.
export const lhopital = board({
  id: 'lhopital',
  figure: "L'Hôpital's rule and its limits",
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'sinc',
      title: 'sin x / x near 0: a 0/0 form whose limit is 1',
      x: { min: -10, max: 10, step: 2 },
      y: { min: -0.4, max: 1.2, step: 0.2 },
      series: [
        { kind: 'line', points: sample(-10, -0.05, 120, (x) => Math.sin(x) / x), tone: 'ingest' },
        {
          kind: 'line',
          points: sample(0.05, 10, 120, (x) => Math.sin(x) / x),
          label: 'sin x / x',
          labelAt: [2.2, 0.75],
          tone: 'ingest'
        },
        {
          kind: 'scatter',
          points: [[0, 1]],
          label: 'limit 1, though undefined at 0',
          labelAt: [0.6, 1.08],
          tone: 'serve'
        },
      ]
    },
    {
      type: 'table',
      id: 'cases',
      title: 'When the rule applies, and when it does not: it needs 0/0 or ∞/∞, and the derivative ratio must have a limit',
      columns: ['limit', 'form', 'rule gives', 'truth'],
      rows: [
        ['sin x / x, x → 0', '0/0', 'cos 0 / 1 = 1', '1 (0.99998 at x = 0.01)'],
        ['(eˣ − 1 − x)/x², x → 0', '0/0, twice', 'eˣ/2 → 1/2', '1/2 (0.50017 at 0.001)'],
        ['(x + 1)/(x + 2), x → 0', 'not 0/0', '1/1 = 1: wrong', '1/2 by substitution'],
        ['(x + sin x)/x, x → ∞', '∞/∞', '1 + cos x: no limit', '1: rule is silent'],
      ]
    },
  ],
  idea: 'L’Hôpital’s rule and its applicability',
  board: [
    fact('b-rule', '0/0 or ∞/∞: lim f/g = lim f′/g′', 'provided the right-hand limit exists'),
    facts('b-1', 'Where it works', ['sin x / x → cos 0 = 1', '(eˣ − 1 − x)/x²: twice → 1/2', 'checks: 0.99998, 0.50017', 're-check the form each time']),
    facts('b-2', 'Where it does not', ['(x + 1)/(x + 2) at 0: not 0/0', 'rule says 1; truth 1/2', '(x + sin x)/x: 1 + cos x', 'no limit, yet the truth is 1']),
    caution('b-watch', 'Check the form first. When f′/g′ has no limit, the rule tells you nothing at all.'),
  ]
})
