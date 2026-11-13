import { board, caution, fact, facts } from '../frame'

// §1.7 — an ε–δ argument made visible for lim (2x + 1) = 7 as x → 3: with ε = 1, δ = ε/2 = 0.5 keeps
// the graph inside the band. The sampling table is computed: sin(π/x) at x = 1/n is ≈ 0 (rounding
// leaves ~10⁻¹⁵), at x = 2/(4n + 1) it is 1, so samples can "show" a limit that does not exist.
export const epsilonDelta = board({
  id: 'epsilon-delta',
  figure: 'What a limit claim really says',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'band',
      title: 'lim (2x + 1) = 7 as x → 3, with ε = 1',
      x: { min: 1.5, max: 4.5, step: 0.5 },
      y: { min: 4, max: 10, step: 1 },
      series: [
        {
          kind: 'line',
          points: [[1.5, 6], [4.5, 6]],
          dashed: true,
          label: '7 − ε',
          labelAt: [1.55, 5.9071],
          tone: 'serve'
        },
        {
          kind: 'line',
          points: [[1.5, 8], [4.5, 8]],
          dashed: true,
          label: '7 + ε',
          labelAt: [1.55, 8.15],
          tone: 'serve'
        },
        {
          kind: 'line',
          points: [[2.5, 4], [2.5, 10]],
          dashed: true,
          label: '3 − δ',
          labelAt: [2.05, 9.4],
          tone: 'infra'
        },
        {
          kind: 'line',
          points: [[3.5, 4], [3.5, 10]],
          dashed: true,
          label: '3 + δ',
          labelAt: [3.6, 9.4],
          tone: 'infra'
        },
        {
          kind: 'line',
          points: [[1.5, 4], [4.5, 10]],
          label: 'y = 2x + 1',
          labelAt: [3.85, 7.9571],
          tone: 'ingest'
        },
        {
          kind: 'scatter',
          points: [[3, 7]],
          label: '(3, 7)',
          labelAt: [3.1, 6.6],
          tone: 'store'
        },
      ]
    },
    {
      type: 'table',
      id: 'sampling',
      title: 'Samples can mislead: sin(π/x) as x → 0: computed in double precision',
      columns: ['samples', 'x values', 'sin(π/x)', 'suggests'],
      rows: [
        ['x = 1/n', '1, 0.1, 0.01', '≈ 0 (about 10⁻¹⁵)', 'limit 0'],
        ['x = 2/(4n + 1)', '0.4, 0.049, 0.005', '1, 1, 1', 'limit 1'],
        ['truth', 'every interval around 0', 'takes every value in [−1, 1]', 'no limit'],
      ]
    },
  ],
  idea: 'An epsilon–delta argument and sampled evidence',
  board: [
    fact('b-rule', 'For every ε > 0 there is a δ > 0', '0 < |x − a| < δ forces |f(x) − L| < ε'),
    facts('b-1', 'A complete small argument', ['claim: 2x + 1 → 7 at 3', '|error| = 2 |x − 3|: δ = ε/2', 'ε = 1, δ = 0.5 on the left']),
    facts('b-2', 'Samples are not a proof', ['sin(π/x) at 1/n: always 0', 'at 2/(4n + 1): always 1', 'no limit at all']),
    caution('b-watch', 'Chapter outcome: you can state a model’s domain, units and assumptions, explain limits and continuity, and apply the existence theorems.'),
  ]
})
