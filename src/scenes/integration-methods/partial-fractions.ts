import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §5.2 — 1/(x² − 1) = ½·1/(x − 1) − ½·1/(x + 1). On [2, 3] the integral is ½ ln(3/2) ≈ 0.2027 (matches
// quad to 16 digits). The plot shows the function as the difference of the two simple pieces.
const f = (x: number) => 1 / (x * x - 1)
const a = (x: number) => 0.5 / (x - 1)
const b = (x: number) => 0.5 / (x + 1)

export const partialFractions: Scene = {
  id: 'partial-fractions',
  title: 'Partial fractions',
  flow: 'TB',
  nodes: [
    {
      id: 'split',
      kind: 'plot',
      label: '1/(x² − 1) as a difference of simple fractions, for x > 1',
      sub: '½/(x − 1) minus ½/(x + 1): each has a logarithm as antiderivative',
      plot: {
        x: { min: 1, max: 5, step: 0.5 },
        y: { min: 0, max: 2.5, step: 0.5 },
        series: [
          { kind: 'line', points: sample(1.2, 5, 100, a), label: '½/(x − 1)', labelAt: [1.35, 2.2], color: '#f59e0b' },
          { kind: 'line', points: sample(1.2, 5, 100, f), label: '1/(x² − 1)', labelAt: [1.65, 1.05], color: '#60a5fa' },
          { kind: 'line', points: sample(1.2, 5, 100, b), label: '½/(x + 1)', labelAt: [3.9, 0.22], color: '#34d399' },
        ],
      },
    },
    {
      id: 'steps',
      kind: 'table',
      label: 'Factor, split, integrate each piece',
      sub: 'for a rational function with degree of top < degree of bottom',
      headers: ['step', 'working'],
      values: [
        ['factor', 'x² − 1 = (x − 1)(x + 1)'],
        ['split', '1/((x − 1)(x + 1)) = A/(x − 1) + B/(x + 1), A = ½, B = −½'],
        ['integrate', '½ ln |x − 1| − ½ ln |x + 1| + C'],
        ['evaluate on [2, 3]', '½ ln(3/2) ≈ 0.2027, matching quadrature'],
        ['if degree top ≥ bottom', 'divide polynomials first'],
      ],
    },
  ],
  edges: [],
}
