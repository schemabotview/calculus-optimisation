import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'

// §9.6 — three convex functions: eˣ (strictly convex, f″ = eˣ → 0, no minimiser), x² (strongly convex with
// m = 2, unique minimiser), max(0, |x| − 1)² (convex, flat on [−1, 1]: every point there is a minimiser).
const flat = (x: number) => Math.max(0, Math.abs(x) - 1) ** 2
export const existence = board({
  id: 'convex-existence',
  figure: 'Strict and strong convexity, existence and uniqueness',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'three',
      title: 'Three convex functions, three different answers',
      x: { min: -3.2, max: 3.2, step: 0.5 },
      y: { min: -0.4, max: 5, step: 0.5 },
      series: [
        {
          kind: 'line',
          points: sample(-3.2, 1.6, 100, Math.exp),
          label: 'eˣ: no minimiser',
          labelAt: [0.25, 4.46],
          tone: 'serve'
        },
        {
          kind: 'line',
          points: sample(-2.2, 2.2, 100, (x) => x * x),
          label: 'x²: unique minimiser 0',
          labelAt: [-2.1377, 4.46],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: sample(-3.2, 3.2, 160, flat),
          label: 'flat on [−1, 1]',
          labelAt: [-2.9569, 0.047143],
          tone: 'store'
        },
      ]
    },
    {
      type: 'table',
      id: 'claims',
      title: 'What each strength of convexity guarantees',
      columns: ['function', 'convexity', 'minimiser exists?', 'unique?'],
      rows: [
        ['x²', 'strong, m = 2', 'yes: x = 0', 'yes'],
        ['eˣ', 'strict, not strong', 'no: inf 0 not reached', '—'],
        ['max(0, |x| − 1)²', 'convex, not strict', 'yes', 'no: all of [−1, 1]'],
        ['strict + minimiser exists', '—', '—', 'then unique'],
        ['convex on a compact set', '—', 'yes (Weierstrass)', 'not necessarily'],
      ]
    },
  ],
  idea: 'Strict and strong convexity and existence and uniqueness limits',
  board: [
    fact('b-rule', 'Convexity makes local minima global', 'it does not promise one exists, or only one'),
    facts('b-1', 'Three strengths', ['convex: flat pieces allowed', 'strictly: none', 'strongly: f″ ≥ m > 0']),
    facts('b-2', 'What each guarantees', ['strict: at most one', 'eˣ: strict, none attained', 'strong: exactly one', 'x² (m = 2): unique 0']),
    caution('b-watch', 'max(0, |x| − 1)² is convex but flat on [−1, 1]: every point there is a minimiser, and reporting "the" solution claims a uniqueness there is not.'),
  ]
})
