import { board, caution, fact, facts } from '../frame'
import { arrow } from '../plot-kit'
import { outputLevel } from '../workshop'

// §7.5 — ∇Q(16, 9) = (0.75, 4/3), |∇Q| = 1.530, unit direction (0.490, 0.872). D_u Q = ∇Q · u computed
// for each listed u. Arrows drawn at 4× the unit vector (the plot is equal-aspect, so right angles show).
const S = 4
export const gradient = board({
  id: 'gradient',
  figure: 'Directional derivatives and gradients',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'arrows',
      title: 'At the shift (16, 9): the gradient is perpendicular to the level set',
      equal: true,
      x: { min: 8, max: 26, step: 2, label: 'L' },
      y: { min: 3, max: 16, step: 2, label: 'M' },
      series: [
        {
          kind: 'line',
          points: outputLevel(24, 9.2, 26),
          label: 'Q = 24',
          labelAt: [23.5, 6.6],
          tone: 'neutral'
        },
        {
          kind: 'line',
          points: outputLevel(30, 14.1, 26),
          label: 'Q = 30',
          labelAt: [23.5, 9.9],
          tone: 'neutral'
        },
        arrow([16 + S * 0.49, 9 + S * 0.8716], '∇Q direction: rate 1.53', 'serve', [16, 9]),
        { ...arrow([16 + S * 0.8716, 9 - S * 0.49], 'along Q = 24: rate 0', 'store', [16, 9]), labelAt: [16.6, 5.6] },
        arrow([16 + S, 9], 'L only: rate 0.75', 'ingest', [16, 9]),
      ]
    },
    {
      type: 'table',
      id: 'rates',
      title: 'D_u Q = ∇Q · u, with ∇Q = (0.75, 1.333)',
      columns: ['direction u', 'D_u Q', 'meaning'],
      rows: [
        ['(1, 0)', '0.75', '∂Q/∂L: one more labour hour'],
        ['(0, 1)', '1.333', '∂Q/∂M: one more machine hour'],
        ['(0.707, 0.707)', '1.473', 'both, equally'],
        ['(0.490, 0.872)', '1.530 = |∇Q|', 'steepest: along ∇Q'],
        ['(0.872, −0.490)', '0', 'along the level set'],
      ]
    },
  ],
  idea: 'Directional derivatives and gradients',
  board: [
    fact('b-rule', '∇f collects the partials', 'the rate along a unit u: D_u f = ∇f · u (f differentiable)'),
    facts('b-1', 'At the shift', ['∇Q = (0.75, 1.333), |∇Q| 1.530', 'equal extra time: 1.473', 'along Q = 24: rate 0']),
    facts('b-2', 'What it means', ['largest along ∇f', '∇f uphill, slope |∇f|', '−∇f: gradient descent', '⟂ to the level set']),
    caution('b-watch', '∇f · u needs differentiability: for xy/(x² + y²) at 0 the "gradient" is (0, 0), yet other directional rates do not exist.'),
  ]
})
