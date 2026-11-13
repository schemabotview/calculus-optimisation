import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'
import { energy, power } from '../workshop'

// §4.3 — the accumulation function E(t) = ∫₀ᵗ P(s) ds is the energy used so far; the fundamental theorem
// says E′(t) = P(t). E computed in closed form and checked against numerical quadrature (scipy).
export const ftc = board({
  id: 'ftc',
  figure: 'The fundamental theorem of calculus',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'accumulate',
      title: 'Energy used so far, E(t), and power P(t)',
      x: { min: 0, max: 8.5, step: 1, label: 't (hours)' },
      y: { min: 0, max: 36, step: 5 },
      series: [
        {
          kind: 'line',
          points: sample(0, 8, 100, energy),
          label: 'E(t), kWh',
          labelAt: [5.3, 18.5],
          tone: 'store'
        },
        {
          kind: 'line',
          points: sample(0, 8, 100, power),
          label: 'P(t), kW',
          labelAt: [3.6, 7.5],
          tone: 'ingest'
        },
        {
          kind: 'scatter',
          points: [[8, energy(8)]],
          label: 'E(8) ≈ 34.19 kWh',
          labelAt: [5.6, 34.8],
          tone: 'serve'
        },
      ]
    },
    {
      type: 'table',
      id: 'theorem',
      title: 'Two halves of the fundamental theorem: f continuous on [a, b]',
      columns: ['part', 'statement', 'here'],
      rows: [
        ['1: accumulation', 'A(x) = ∫ₐˣ f has A′(x) = f(x)', 'E′(t) = P(t)'],
        ['2: evaluation', '∫ₐᵇ f = F(b) − F(a), any F′ = f', 'E(8) − E(0) = 34.19'],
        ['check', 'E(2), E(4), E(6)', '7.49, 17.09, 26.69 kWh'],
        ['needs', 'f continuous where A is differentiated', 'P is continuous'],
      ]
    },
  ],
  idea: 'Accumulation functions and the fundamental theorem',
  board: [
    fact('b-rule', 'A(x) = ∫ₐˣ f(t) dt: the amount so far', 'let the upper limit vary'),
    facts('b-1', 'Part 1: A′(x) = f(x)', ['f continuous at x', 'energy so far E′(t) = P(t)', 'E climbs fastest mid-shift']),
    facts('b-2', 'Part 2: F(b) − F(a)', ['any F with F′ = f', 'E(8) − E(0) = 34.19 kWh', 'quadrature: 7.49, 17.09, 26.69']),
    caution('b-watch', 'Part 1 needs f continuous at x: where f jumps, A has a corner and no derivative there.'),
  ]
})
