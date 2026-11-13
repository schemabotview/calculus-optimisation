import { board, caution, fact, facts } from '../frame'
import type { P } from '../plot-kit'
import { sample } from '../plot-kit'

// §10.4 — minimise F(x) = √(1 + x²). The Newton step −F′/F″ = −x(1 + x²) sends x to −x³: from x₀ = 1.5
// it diverges (−3.375, 38.4, −5.7 × 10⁴). With Armijo backtracking the first step is halved (α = 0.5) and
// the rest are full steps: −0.9375, 0.8240, −0.5594, 0.1751, −0.0054, 3 × 10⁻⁸ (|F′| 1.6 × 10⁻⁷). Run in Python.
const F = (x: number) => Math.sqrt(1 + x * x)
const DAMPED = [1.5, -0.9375, 0.823975, -0.559425, 0.175075, -0.005366]
const at = (x: number): P => [x, F(x)]
export const newton = board({
  id: 'newton',
  figure: 'Newton steps and damping',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'iterates',
      title: 'Newton on F(x) = √(1 + x²), started at x₀ = 1.5',
      x: { min: -4, max: 4, step: 0.5 },
      y: { min: 0.8, max: 4.2, step: 0.5, label: 'F(x)' },
      series: [
        {
          kind: 'line',
          points: sample(-4, 4, 120, F),
          label: 'F(x) = √(1 + x²)',
          labelAt: [2.1, 3.6],
          tone: 'ingest'
        },
        {
          kind: 'segment',
          from: at(1.5),
          to: at(-3.375),
          label: 'full step: 1.5 → −3.375',
          labelAt: [-3.2, 3.95],
          tone: 'serve'
        },
        { kind: 'line', points: DAMPED.map(at), tone: 'store' },
        {
          kind: 'scatter',
          points: DAMPED.map(at),
          label: 'damped: 1.5, −0.94, 0.82, −0.56, 0.18, −0.005',
          labelAt: [-2.3, 0.95],
          tone: 'store'
        },
      ]
    },
    {
      type: 'table',
      id: 'damping',
      title: 'Newton step: solve ∇²f p = −∇f, then backtrack on α',
      columns: ['k', 'undamped xₖ', 'damped xₖ', 'α used'],
      rows: [
        ['1', '−3.375', '−0.9375', '0.5'],
        ['2', '38.44', '0.8240', '1'],
        ['3', '−56 815', '−0.5594', '1'],
        ['5', 'overflow soon', '−0.0054', '1'],
        ['6', '—', '3 × 10⁻⁸ (|F′| 1.6 × 10⁻⁷)', '1'],
      ]
    },
  ],
  idea: 'Newton steps, damping and linear solves',
  board: [
    fact('b-rule', 'Newton minimises the quadratic model', 'solve ∇²f p = −∇f, move to x + αp'),
    facts('b-1', 'Why it is fast', ['quadratic: one step', 'near a min: quadratic rate', 'a linear solve, not an inverse']),
    facts('b-2', 'When it fails', ['√(1 + x²), min at 0', 'step: x → −x³', '1.5 → −3.375 → 38.4']),
    caution('b-watch', 'Damping rescues it: halving the first step (−0.9375) reaches 3 × 10⁻⁸ in six iterations. If ∇²f is not positive definite, p may not even descend.'),
  ]
})
