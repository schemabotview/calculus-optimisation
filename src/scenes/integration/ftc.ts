import type { Scene } from '@graphlearning/flow'
import { sample } from '../plot-kit'
import { energy, power } from '../workshop'

// §4.3 — the accumulation function E(t) = ∫₀ᵗ P(s) ds is the energy used so far; the fundamental theorem
// says E′(t) = P(t). E computed in closed form and checked against numerical quadrature (scipy).
export const ftc: Scene = {
  id: 'ftc',
  title: 'The fundamental theorem of calculus',
  flow: 'TB',
  nodes: [
    {
      id: 'accumulate',
      kind: 'plot',
      label: 'Energy used so far, E(t), and power P(t)',
      sub: 'E rises fastest where P is largest: E′(t) = P(t)',
      plot: {
        x: { min: 0, max: 8.5, step: 1, label: 't (hours)' },
        y: { min: 0, max: 36, step: 5 },
        series: [
          { kind: 'line', points: sample(0, 8, 100, energy), label: 'E(t), kWh', labelAt: [5.3, 18.5], color: '#34d399' },
          { kind: 'line', points: sample(0, 8, 100, power), label: 'P(t), kW', labelAt: [3.6, 7.5], color: '#60a5fa' },
          { kind: 'marker', at: [8, energy(8)], label: 'E(8) ≈ 34.19 kWh', labelAt: [5.6, 34.8], color: '#f472b6' },
        ],
      },
    },
    {
      id: 'theorem',
      kind: 'table',
      label: 'Two halves of the fundamental theorem',
      sub: 'f continuous on [a, b]',
      headers: ['part', 'statement', 'here'],
      values: [
        ['1: accumulation', 'A(x) = ∫ₐˣ f has A′(x) = f(x)', 'E′(t) = P(t)'],
        ['2: evaluation', '∫ₐᵇ f = F(b) − F(a), any F′ = f', 'E(8) − E(0) = 34.19'],
        ['check', 'E(2), E(4), E(6)', '7.49, 17.09, 26.69 kWh'],
        ['needs', 'f continuous where A is differentiated', 'P is continuous'],
      ],
    },
  ],
  edges: [],
}
