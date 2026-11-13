import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'

// §3.3 — three functions with f′(0) = 0 AND f″(0) = 0, and three different behaviours at 0: x³ has an
// inflection, x⁴ a minimum, −x⁴ a maximum. The second-derivative test is silent on all three.
export const concavity = board({
  id: 'concavity',
  figure: 'Concavity and the derivative tests',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'flat',
      title: 'x³, x⁴ and −x⁴: all flat at 0 to second order',
      x: { min: -1.4, max: 1.4, step: 0.5 },
      y: { min: -1.6, max: 1.6, step: 0.5 },
      series: [
        {
          kind: 'line',
          points: sample(-1.15, 1.15, 100, (x) => x ** 3),
          label: 'x³: inflection',
          labelAt: [0.43758, -0.98714],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: sample(-1.12, 1.12, 100, (x) => x ** 4),
          label: 'x⁴: minimum',
          labelAt: [-1.4062, 0.83857],
          tone: 'store'
        },
        {
          kind: 'line',
          points: sample(-1.12, 1.12, 100, (x) => -(x ** 4)),
          label: '−x⁴: maximum',
          labelAt: [-1.4062, -1.0071],
          tone: 'serve'
        },
        { kind: 'scatter', points: [[0, 0]], tone: 'infra' },
      ]
    },
    {
      type: 'table',
      id: 'tests',
      title: 'What each test can conclude at a critical point c',
      columns: ['test', 'conclusion', 'silent when'],
      rows: [
        ['first derivative', 'f′ changes − to +: min; + to −: max', 'f′ does not change sign: neither'],
        ['second derivative', 'f″(c) > 0: min; f″(c) < 0: max', 'f″(c) = 0: no conclusion'],
        ['x³, x⁴, −x⁴ at 0', 'f″(0) = 0 for all three', 'first test decides: none, min, max'],
        ['inflection', 'concavity changes sign', 'x³ at 0'],
      ]
    },
  ],
  idea: 'Concavity, inflection and the derivative tests',
  board: [
    fact('b-rule', 'f″ > 0: concave up; f″ < 0: concave down', 'an inflection is where the bending changes sign'),
    facts('b-1', 'Tests at a critical point', ['f′ − to +: minimum', 'f″(c) > 0: minimum', 'f″(c) = 0: no verdict']),
    facts('b-2', 'Three functions, flat at 0', ['x³, x⁴, −x⁴: f′ = f″ = 0', 'inflection, min, max', 'only the first test tells']),
    caution('b-watch', '"f″(c) = 0 means inflection" is false: x⁴ has f″(0) = 0 and a minimum there.'),
  ]
})
