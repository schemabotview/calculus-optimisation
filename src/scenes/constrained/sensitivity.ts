import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §11.8 — optimal cost as a function of the machine cap m: C(m) = 2880/m + 30m while the cap binds
// (m < √96 = 9.80), else £587.88. C′(8) = −15 = −λ₂. Requiring 25 chairs instead of 24 costs 630.63
// (λ₁ predicts +30). All values from the closed form, checked with SLSQP at m = 8.
const C = (m: number) => (m < Math.sqrt(96) ? 2880 / m + 30 * m : 2 * Math.sqrt(20 * 30 * 144))

export const sensitivity: Scene = {
  id: 'sensitivity',
  title: 'Sensitivity and certificate checks',
  flow: 'TB',
  nodes: [
    {
      id: 'shadow',
      kind: 'plot',
      label: 'Cheapest cost of 24 chairs against the machine-hour cap m',
      sub: 'at m = 8 the slope is −15 = −λ₂: each extra machine hour saves about £15',
      plot: {
        x: { min: 5, max: 12, step: 0.5, label: 'm, machine hours available' },
        y: { min: 580, max: 740, step: 20, label: '£' },
        series: [
          { kind: 'line', points: sample(5.2, 12, 120, C), label: 'optimal cost C(m)', labelAt: [5.4, 728], color: '#60a5fa' },
          { kind: 'line', points: [[6, 630], [9.3, 580.5]], label: 'slope −λ₂ = −15', labelAt: [6.1, 645], color: '#f59e0b' },
          { kind: 'marker', at: [8, 600], label: 'm = 8: £600', labelAt: [8.2, 606], color: '#f472b6' },
          { kind: 'marker', at: [Math.sqrt(96), C(Math.sqrt(96))], label: 'cap stops binding at 9.80', labelAt: [9.5, 596], color: '#34d399' },
        ],
      },
    },
    {
      id: 'predicted',
      kind: 'table',
      label: 'Multipliers predict the first-order effect of a change',
      sub: 'shadow prices: λ₁ = £30 per chair, λ₂ = £15 per machine hour',
      headers: ['change', 'predicted', 'actual', 'why they differ'],
      values: [
        ['cap 8 → 8.1', '−£1.50', '−£1.44', 'curvature, small'],
        ['cap 8 → 9', '−£15', '−£10', 'C(m) is convex'],
        ['cap 8 → 11', '−£45', '−£12.12', 'cap stops binding at 9.80'],
        ['24 → 25 chairs', '+£30', '+£30.63', 'curvature, small'],
      ],
    },
  ],
  edges: [],
}
