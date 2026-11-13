import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'

// §5.7 — a narrow spike f(x) = exp(−((x − 0.37)/0.002)²) on [0, 1]; true integral 0.002√π ≈ 0.003545.
// Everything in the table was RUN (scipy): uniform samples miss it or hit it by luck, and adaptive quad
// with no hint reports 6 × 10⁻¹⁷ with an error estimate of 10⁻¹⁶ — confidently wrong.
const f = (x: number) => Math.exp(-(((x - 0.37) / 0.002) ** 2))
const SAMPLES = Array.from({ length: 11 }, (_, i): [
  number,
  number
] => [i / 10, f(i / 10)])
export const adaptive = board({
  id: 'adaptive',
  figure: 'Adaptive integration and sampling failures',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'spike',
      title: 'A narrow spike at x = 0.37, width about 0.004',
      x: { min: 0, max: 1, step: 0.1 },
      y: { min: -0.05, max: 1.1, step: 0.25 },
      series: [
        {
          kind: 'line',
          points: [...sample(0, 0.36, 2, f), ...sample(0.36, 0.38, 80, f), ...sample(0.38, 1, 2, f)],
          label: 'f(x)',
          labelAt: [0.39, 0.95],
          tone: 'ingest'
        },
        {
          kind: 'scatter',
          points: SAMPLES,
          label: 'samples: all 0',
          labelAt: [0.62, 0.12],
          tone: 'serve'
        },
      ]
    },
    {
      type: 'table',
      id: 'runs',
      title: 'Five ways to integrate it, all run in scipy: true value 0.002√π ≈ 0.003545',
      columns: ['method', 'result', 'verdict'],
      rows: [
        ['Simpson, n = 10', '1.3 × 10⁻⁹⁹', 'missed the spike'],
        ['Simpson, n = 100', '0.0133', 'hit the peak: 3.8× high'],
        ['Simpson, n = 1000', '0.003545', 'resolved'],
        ['quad, no hint', '6 × 10⁻¹⁷ (est. 10⁻¹⁶)', 'confidently wrong'],
        ['quad, points = [0.37]', '0.003545', 'correct once told'],
      ]
    },
  ],
  idea: 'Adaptive integration, tolerance and sampling failures',
  board: [
    fact('b-rule', 'An adaptive integrator estimates its own error', 'refining only panels that miss the tolerance'),
    facts('b-1', 'How it decides', ['two rules on a panel', 'difference ≈ error', 'split failures; keep the rest']),
    facts('b-2', 'Sampling failures', ['spike 0.004 wide: 0.003545', '11 equal samples read 0', 'quad, no hint: ~10⁻¹⁶', 'told where: 0.003545']),
    caution('b-watch', 'Chapter outcome: you can choose an integration method, decide convergence, and read an accuracy claim as conditional on the samples seeing the function.'),
  ]
})
