import type { Scene } from '@graphlearning/flow'
import type { PlotPoint } from '@graphlearning/flow'

// §12.6 — SGD on the hourly-rate objective from w = 5, one uniformly sampled hour per step (numpy, seed 1),
// 200 steps; every 4th iterate below. Constant α = 0.1 keeps wandering (2.64 to 3.68 over the last 100
// steps); αₖ = 1/(2(k + 1)) makes wₖ the running mean of the samples, ending at 3.10. The sampled loss
// (w − yᵢ)² ranged 0 to 2.81 over the last 100 constant-step iterations while the full f stayed between 0.50 and 0.96.
const C = [5.0, 4.179, 3.613, 3.308, 3.254, 2.744, 3.286, 3.419, 2.909, 2.937, 2.949, 2.845, 2.976, 2.958, 3.143, 3.131, 2.853, 3.14, 3.417, 3.043, 2.92, 3.327, 3.192, 3.207, 3.445, 3.152, 3.32, 3.305, 2.797, 3.143, 3.289, 3.078, 3.135, 3.343, 3.013, 3.595, 3.058, 3.312, 3.088, 3.236, 3.527, 2.913, 3.053, 3.052, 3.052, 3.079, 2.73, 2.689, 2.873, 2.82, 2.869]
const D = [5.0, 3.5, 3.25, 3.167, 3.188, 3.05, 3.167, 3.214, 3.125, 3.111, 3.1, 3.068, 3.062, 3.058, 3.071, 3.067, 3.047, 3.059, 3.083, 3.066, 3.062, 3.083, 3.079, 3.087, 3.104, 3.09, 3.096, 3.102, 3.08, 3.086, 3.1, 3.097, 3.102, 3.114, 3.103, 3.129, 3.118, 3.128, 3.125, 3.128, 3.144, 3.128, 3.131, 3.134, 3.136, 3.133, 3.12, 3.112, 3.109, 3.102, 3.1]
const pts = (v: number[]): PlotPoint[] => v.map((w, i) => [4 * i, w])

export const schedules: Scene = {
  id: 'schedules',
  title: 'Stochastic step schedules and noisy stopping',
  flow: 'TB',
  nodes: [
    {
      id: 'paths',
      kind: 'plot',
      label: 'SGD on the hourly rate from w = 5, one sampled hour per step',
      sub: 'a constant step settles into a noise band; a decaying step averages the noise away',
      plot: {
        x: { min: 0, max: 200, step: 20, label: 'k' },
        y: { min: 2.5, max: 5.1, step: 0.25, label: 'wₖ' },
        series: [
          { kind: 'line', points: [[0, 3], [200, 3]], label: 'minimiser w = 3', labelAt: [168, 2.92], color: '#4b5563' },
          { kind: 'line', points: pts(C), label: 'α = 0.1: wanders 2.64 to 3.68', labelAt: [60, 3.92], color: '#f472b6' },
          { kind: 'line', points: pts(D), label: 'αₖ = 1/(2(k + 1)): running mean, 3.10', labelAt: [70, 2.6], color: '#60a5fa' },
        ],
      },
    },
    {
      id: 'evidence',
      kind: 'table',
      label: 'Noisy evidence: what the run can and cannot show',
      sub: 'from the same runs, last 100 steps',
      headers: ['signal', 'value', 'reads as'],
      values: [
        ['sampled loss (w − yᵢ)²', '0 to 2.81', 'pure noise: one hour'],
        ['full f(wₖ), constant α', '0.50 to 0.96', 'near 0.5, not settling'],
        ['sampled gradient at w = 3', '−2, 0 or 2', 'never 0 at the minimiser'],
        ['decaying α, final w', '3.10', 'error ≈ 0.71/√200 = 0.05'],
      ],
    },
  ],
  edges: [],
}
