import type { Scene } from '@graphlearning/flow'
import type { PlotPoint } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §12.5 — at w = 5 the eight hourly gradients 2(5 − yᵢ) are 6, 6, 4, 4, 4, 4, 2, 2: mean 4 = f′(5), variance 2.
// A batch of b hours drawn uniformly with replacement has mean 4 and RMS error √(2/b). Empirical RMS from
// 10 000 draws per b (numpy, seed 0): 1.423, 0.995, 0.706, 0.494, 0.353, 0.250 for b = 1 … 32.
const EMP: PlotPoint[] = [1, 2, 4, 8, 16, 32].map((b, i) => [b, [1.423, 0.995, 0.706, 0.494, 0.353, 0.25][i]])

export const variance: Scene = {
  id: 'variance',
  title: 'Sampling, unbiasedness and variance',
  flow: 'TB',
  nodes: [
    {
      id: 'batch',
      kind: 'plot',
      label: 'Error of a batch-mean gradient at w = 5, against batch size b',
      sub: 'unbiased: the average over draws is exactly f′(5) = 4; the typical error falls like 1/√b',
      plot: {
        x: { min: 0, max: 33, step: 4, label: 'b, hours sampled per step' },
        y: { min: 0, max: 1.6, step: 0.2, label: 'RMS error of the gradient' },
        series: [
          { kind: 'line', points: sample(1, 32, 120, (b) => Math.sqrt(2 / b)), label: 'theory √(2/b)', labelAt: [6, 0.82], color: '#60a5fa' },
          { kind: 'scatter', points: EMP, label: '10 000 draws each', labelAt: [9.5, 0.36], color: '#f59e0b' },
        ],
      },
    },
    {
      id: 'samplers',
      kind: 'table',
      label: 'Unbiased means right on average, not right each time',
      sub: 'hourly gradients at w = 5: 6, 6, 4, 4, 4, 4, 2, 2; the full gradient is 4',
      headers: ['sampler', 'mean gradient', 'bias', 'RMS error'],
      values: [
        ['one hour, uniform', '4', '0', '1.41'],
        ['4 hours, uniform', '4', '0', '0.71'],
        ['32 hours, uniform', '4', '0', '0.25'],
        ['morning hours only', '5', '+1', 'never goes away'],
      ],
    },
  ],
  edges: [],
}
