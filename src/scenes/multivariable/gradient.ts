import type { Scene } from '@graphlearning/flow'
import { arrow } from '../plot-kit'
import { outputLevel } from '../workshop'

// §7.5 — ∇Q(16, 9) = (0.75, 4/3), |∇Q| = 1.530, unit direction (0.490, 0.872). D_u Q = ∇Q · u computed
// for each listed u. Arrows drawn at 4× the unit vector (the plot is equal-aspect, so right angles show).
const S = 4
export const gradient: Scene = {
  id: 'gradient',
  title: 'Directional derivatives and gradients',
  flow: 'TB',
  nodes: [
    {
      id: 'arrows',
      kind: 'plot',
      label: 'At the shift (16, 9): the gradient is perpendicular to the level set',
      sub: 'arrows are unit directions, drawn 4× long',
      plot: {
        equal: true,
        x: { min: 8, max: 26, step: 2, label: 'L' },
        y: { min: 3, max: 16, step: 2, label: 'M' },
        series: [
          { kind: 'line', points: outputLevel(24, 9.2, 26), label: 'Q = 24', labelAt: [23.5, 6.6], color: '#9ca3af' },
          { kind: 'line', points: outputLevel(30, 14.1, 26), label: 'Q = 30', labelAt: [23.5, 9.9], color: '#9ca3af' },
          arrow([16 + S * 0.49, 9 + S * 0.8716], '∇Q direction: rate 1.53', '#f472b6', [16, 9]),
          { ...arrow([16 + S * 0.8716, 9 - S * 0.49], 'along Q = 24: rate 0', '#34d399', [16, 9]), labelAt: [16.6, 5.6] },
          arrow([16 + S, 9], 'L only: rate 0.75', '#60a5fa', [16, 9]),
        ],
      },
    },
    {
      id: 'rates',
      kind: 'table',
      label: 'D_u Q = ∇Q · u, with ∇Q = (0.75, 1.333)',
      sub: 'chairs per extra hour of input, moving in unit direction u',
      headers: ['direction u', 'D_u Q', 'meaning'],
      values: [
        ['(1, 0)', '0.75', '∂Q/∂L: one more labour hour'],
        ['(0, 1)', '1.333', '∂Q/∂M: one more machine hour'],
        ['(0.707, 0.707)', '1.473', 'both, equally'],
        ['(0.490, 0.872)', '1.530 = |∇Q|', 'steepest: along ∇Q'],
        ['(0.872, −0.490)', '0', 'along the level set'],
      ],
    },
  ],
  edges: [],
}
