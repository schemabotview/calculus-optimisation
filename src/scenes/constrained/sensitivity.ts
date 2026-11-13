import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'

// §11.8 — optimal cost as a function of the machine cap m: C(m) = 2880/m + 30m while the cap binds
// (m < √96 = 9.80), else £587.88. C′(8) = −15 = −λ₂. Requiring 25 chairs instead of 24 costs 630.63
// (λ₁ predicts +30). All values from the closed form, checked with SLSQP at m = 8.
const C = (m: number) => (m < Math.sqrt(96) ? 2880 / m + 30 * m : 2 * Math.sqrt(20 * 30 * 144))
export const sensitivity = board({
  id: 'sensitivity',
  figure: 'Sensitivity and certificate checks',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'shadow',
      title: 'Cheapest cost of 24 chairs against the machine-hour cap m',
      x: { min: 5, max: 12, step: 0.5, label: 'm, machine hours available' },
      y: { min: 580, max: 740, step: 20, label: '£' },
      series: [
        {
          kind: 'line',
          points: sample(5.2, 12, 120, C),
          label: 'optimal cost C(m)',
          labelAt: [5.4, 724],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: [[6, 630], [9.3, 580.5]],
          label: 'slope −λ₂ = −15',
          labelAt: [6.1721, 645],
          tone: 'infra'
        },
        {
          kind: 'scatter',
          points: [[8, 600]],
          label: 'm = 8: £600',
          labelAt: [8.2, 606],
          tone: 'serve'
        },
        {
          kind: 'scatter',
          points: [[Math.sqrt(96), C(Math.sqrt(96))]],
          label: 'cap stops binding at 9.80',
          labelAt: [9.5, 596],
          tone: 'store'
        },
      ]
    },
    {
      type: 'table',
      id: 'predicted',
      title: 'Multipliers predict the first-order effect of a change',
      columns: ['change', 'predicted', 'actual', 'why they differ'],
      rows: [
        ['cap 8 → 8.1', '−£1.50', '−£1.44', 'curvature, small'],
        ['cap 8 → 9', '−£15', '−£10', 'C(m) is convex'],
        ['cap 8 → 11', '−£45', '−£12.12', 'cap stops binding at 9.80'],
        ['24 → 25 chairs', '+£30', '+£30.63', 'curvature, small'],
      ]
    },
  ],
  idea: 'Sensitivity, certificate checks and constrained-method boundaries',
  board: [
    fact('b-rule', 'At a KKT point, λᵢ is a shadow price', 'the optimal value’s rate as constraint i relaxes'),
    facts('b-1', 'Prices at (18, 8)', ['λ₂ = 15 per machine hour', 'λ₁ = 30 per chair', '8 → 8.1 saves £1.44', 'first-order: £1.50']),
    facts('b-2', 'Where it fails', ['8 → 9 saves £10, not £15', 'past 9.80 the cap is slack', 'big changes: re-solve']),
    caution('b-watch', 'Chapter outcome: you can explain constrained optimality and dual bounds, check a KKT certificate with g ≤ 0 and λ ≥ 0, and compare penalty, barrier and projection.'),
  ]
})
