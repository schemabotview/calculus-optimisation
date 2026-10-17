import type { Scene } from '@graphlearning/flow'
import type { PlotPoint } from '@graphlearning/flow'
import { sample } from '../plot-kit'

// §10.4 — minimise F(x) = √(1 + x²). The Newton step −F′/F″ = −x(1 + x²) sends x to −x³: from x₀ = 1.5
// it diverges (−3.375, 38.4, −5.7 × 10⁴). With Armijo backtracking the first step is halved (α = 0.5) and
// the rest are full steps: −0.9375, 0.8240, −0.5594, 0.1751, −0.0054, 3 × 10⁻⁸ (|F′| 1.6 × 10⁻⁷). Run in Python.
const F = (x: number) => Math.sqrt(1 + x * x)
const DAMPED = [1.5, -0.9375, 0.823975, -0.559425, 0.175075, -0.005366]
const at = (x: number): PlotPoint => [x, F(x)]

export const newton: Scene = {
  id: 'newton',
  title: 'Newton steps and damping',
  flow: 'TB',
  nodes: [
    {
      id: 'iterates',
      kind: 'plot',
      label: 'Newton on F(x) = √(1 + x²), started at x₀ = 1.5',
      sub: 'the full step lands at −3.375 and then 38.4; the damped steps close in on 0',
      plot: {
        x: { min: -4, max: 4, step: 0.5 },
        y: { min: 0.8, max: 4.2, step: 0.5, label: 'F(x)' },
        series: [
          { kind: 'line', points: sample(-4, 4, 120, F), label: 'F(x) = √(1 + x²)', labelAt: [2.1, 3.6], color: '#60a5fa' },
          { kind: 'segment', from: at(1.5), to: at(-3.375), label: 'full step: 1.5 → −3.375', labelAt: [-3.2, 3.95], color: '#f472b6' },
          { kind: 'line', points: DAMPED.map(at), color: '#34d399' },
          { kind: 'scatter', points: DAMPED.map(at), label: 'damped: 1.5, −0.94, 0.82, −0.56, 0.18, −0.005', labelAt: [-2.3, 0.95], color: '#34d399' },
        ],
      },
    },
    {
      id: 'damping',
      kind: 'table',
      label: 'Newton step: solve ∇²f p = −∇f, then backtrack on α',
      sub: 'here p = −x(1 + x²): far from 0 the curvature is tiny and the step huge',
      headers: ['k', 'undamped xₖ', 'damped xₖ', 'α used'],
      values: [
        ['1', '−3.375', '−0.9375', '0.5'],
        ['2', '38.44', '0.8240', '1'],
        ['3', '−56 815', '−0.5594', '1'],
        ['5', 'overflow soon', '−0.0054', '1'],
        ['6', '—', '3 × 10⁻⁸ (|F′| 1.6 × 10⁻⁷)', '1'],
      ],
    },
  ],
  edges: [],
}
