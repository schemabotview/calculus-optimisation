import { board, caution, fact, facts } from '../frame'
import type { P } from '../plot-kit'
import { sample } from '../plot-kit'

// §12.5 — at w = 5 the eight hourly gradients 2(5 − yᵢ) are 6, 6, 4, 4, 4, 4, 2, 2: mean 4 = f′(5), variance 2.
// A batch of b hours drawn uniformly with replacement has mean 4 and RMS error √(2/b). Empirical RMS from
// 10 000 draws per b (numpy, seed 0): 1.423, 0.995, 0.706, 0.494, 0.353, 0.250 for b = 1 … 32.
const EMP: P[] = [1, 2, 4, 8, 16, 32].map((b, i) => [b, [1.423, 0.995, 0.706, 0.494, 0.353, 0.25][i]])
export const variance = board({
  id: 'variance',
  figure: 'Sampling, unbiasedness and variance',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'batch',
      title: 'Error of a batch-mean gradient at w = 5, against batch size b',
      x: { min: 0, max: 33, step: 4, label: 'b, hours sampled per step' },
      y: { min: 0, max: 1.6, step: 0.2, label: 'RMS error of the gradient' },
      series: [
        {
          kind: 'line',
          points: sample(1, 32, 120, (b) => Math.sqrt(2 / b)),
          label: 'theory √(2/b)',
          labelAt: [6, 0.82],
          tone: 'ingest'
        },
        {
          kind: 'scatter',
          points: EMP,
          label: '10 000 draws each',
          labelAt: [9.5, 0.36],
          tone: 'infra'
        },
      ]
    },
    {
      type: 'table',
      id: 'samplers',
      title: 'Unbiased means right on average, not right each time',
      columns: ['sampler', 'mean gradient', 'bias', 'RMS error'],
      rows: [
        ['one hour, uniform', '4', '0', '1.41'],
        ['4 hours, uniform', '4', '0', '0.71'],
        ['32 hours, uniform', '4', '0', '0.25'],
        ['morning hours only', '5', '+1', 'never goes away'],
      ]
    },
  ],
  idea: 'Sampling assumptions, unbiasedness and variance',
  board: [
    fact('b-rule', 'Unbiased: E[g] = ∇f(w)', 'it depends on how you sample'),
    facts('b-1', 'At w = 5', ['gradients 6, 6, 4, 4, 4, 4, 2, 2', 'uniform: mean 4 = f′(5)', 'variance 2: off by ~1.41']),
    facts('b-2', 'Batches', ['batch b: variance 2/b', 'RMS 0.71 (4), 0.25 (32)', 'simulation matches', '×2 b halves variance only']),
    caution('b-watch', 'Sampling only morning hours gives mean gradient 5, not 4: a bias no batch size removes. Unbiasedness is an assumption about the sampler.'),
  ]
})
