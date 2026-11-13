import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'

// §5.1 — ∫ x eˣ dx = (x − 1)eˣ + C by parts (u = x, dv = eˣ dx). Verified two ways: differentiating
// (x − 1)eˣ gives x eˣ, and quad gives ∫₀¹ x eˣ dx = 1.0 = F(1) − F(0) = 0 − (−1).
const f = (x: number) => x * Math.exp(x)
const F = (x: number) => (x - 1) * Math.exp(x)
export const byParts = board({
  id: 'by-parts',
  figure: 'Integration by parts',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'check',
      title: 'f(x) = x eˣ and its antiderivative F(x) = (x − 1)eˣ',
      x: { min: -3, max: 1.5, step: 0.5 },
      y: { min: -1.5, max: 3.5, step: 0.5 },
      series: [
        {
          kind: 'line',
          points: sample(-3, 1.3, 120, f),
          label: 'f(x) = x eˣ',
          labelAt: [0.35, 2.7],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: sample(-3, 1.3, 120, F),
          label: 'F(x) = (x − 1)eˣ',
          labelAt: [-2.9, -0.071429],
          tone: 'infra'
        },
        {
          kind: 'scatter',
          points: [[0, -1]],
          label: 'F has its minimum where f = 0',
          labelAt: [-1.8258, -1.4571],
          tone: 'serve'
        },
      ]
    },
    {
      type: 'table',
      id: 'parts',
      title: '∫ u dv = u v − ∫ v du: the product rule, reversed',
      columns: ['integral', 'u, dv', 'result', 'check'],
      rows: [
        ['∫ x eˣ dx', 'u = x, dv = eˣ dx', '(x − 1)eˣ + C', 'd/dx gives x eˣ ✓'],
        ['∫ ln x dx', 'u = ln x, dv = dx', 'x ln x − x + C', 'd/dx gives ln x ✓'],
        ['∫₀¹ x eˣ dx', 'evaluate F', '0 − (−1) = 1', 'quadrature: 1.0 ✓'],
        ['∫ x² eˣ dx', 'apply parts twice', '(x² − 2x + 2)eˣ + C', 'd/dx gives x² eˣ ✓'],
      ]
    },
  ],
  idea: 'Integration by parts',
  board: [
    fact('b-rule', 'The product rule backwards: ∫ u dv = u v − ∫ v du', 'trade one integral for an easier one'),
    facts('b-1', 'Choosing u and dv', ['u: simpler once differentiated', 'dv: something you can integrate', 'x eˣ: u = x, dv = eˣ dx', '→ (x − 1)eˣ + C']),
    facts('b-2', 'Verify by differentiating', ['((x − 1)eˣ)′ = x eˣ ✓', '∫₀¹ x eˣ dx = 1', 'quadrature: 1.0 to 15 digits']),
    caution('b-watch', 'A poor choice makes it harder: u = eˣ, dv = x dx gives ∫ ½x² eˣ dx. Some integrals need parts twice; check each answer by differentiating it back.'),
  ]
})
