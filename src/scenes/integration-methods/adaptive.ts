import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §5.7 — a narrow spike f(x) = exp(−((x − 0.37)/0.002)²) on [0, 1]; true integral 0.002√π ≈ 0.003545.
// Everything in the table was RUN (scipy): uniform samples miss it or hit it by luck, and adaptive quad
// with no hint reports 6 × 10⁻¹⁷ with an error estimate of 10⁻¹⁶ — confidently wrong.
const f = (x: number) => Math.exp(-(((x - 0.37) / 0.002) ** 2))
const SAMPLES = Array.from({ length: 11 }, (_, i): [number, number] => [i / 10, f(i / 10)])

export const adaptive: Scene = {
  id: 'adaptive',
  title: 'Adaptive integration and sampling failures',
  flow: 'TB',
  nodes: [
    {
      id: 'spike',
      kind: 'plot',
      label: 'A narrow spike at x = 0.37, width about 0.004',
      sub: 'dots: 11 equally spaced samples; every one reads 0',
      plot: {
        x: { min: 0, max: 1, step: 0.1 },
        y: { min: -0.05, max: 1.1, step: 0.25 },
        series: [
          { kind: 'line', points: [...sample(0, 0.36, 2, f), ...sample(0.36, 0.38, 80, f), ...sample(0.38, 1, 2, f)], label: 'f(x)', labelAt: [0.39, 0.95], color: '#60a5fa' },
          { kind: 'scatter', points: SAMPLES, label: 'samples: all 0', labelAt: [0.62, 0.12], color: '#f472b6' },
        ],
      },
    },
    {
      id: 'runs',
      kind: 'table',
      label: 'Five ways to integrate it, all run in scipy',
      sub: 'true value 0.002√π ≈ 0.003545',
      headers: ['method', 'result', 'verdict'],
      values: [
        ['Simpson, n = 10', '1.3 × 10⁻⁹⁹', 'missed the spike'],
        ['Simpson, n = 100', '0.0133', 'a sample hit the peak: 3.8× too big'],
        ['Simpson, n = 1000', '0.003545', 'resolved'],
        ['adaptive quad, no hint', '6 × 10⁻¹⁷ (error est. 10⁻¹⁶)', 'confidently wrong'],
        ['adaptive quad, points = [0.37]', '0.003545', 'correct once told'],
      ],
    },
  ],
  edges: [],
}
