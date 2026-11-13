import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'

// §4.4 — antiderivatives of 2x form a family x² + C: vertical shifts with identical slopes. Any member
// gives the same definite integral, because C cancels in F(b) − F(a).
export const antiderivatives = board({
  id: 'antiderivatives',
  figure: 'Antiderivatives and the constant',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'family',
      title: 'Every antiderivative of 2x: x² + C',
      x: { min: -2, max: 2, step: 0.5 },
      y: { min: -1.5, max: 6, step: 1 },
      series: [-1, 0, 1, 2].map((C, i) => ({
        kind: 'line' as const,
        points: sample(-2, 2, 80, (x) => x * x + C),
        label: `C = ${C === -1 ? '−1' : C}`,
        labelAt: [2.0 - 0.02, 4 + C - 0.3] as [
          number,
          number
        ],
        tone: (['neutral', 'ingest', 'store', 'infra'] as const)[i]
      }))
    },
    {
      type: 'table',
      id: 'table',
      title: 'Antiderivatives to recognise: check any of them by differentiating',
      columns: ['f(x)', 'antiderivative F(x)', 'condition'],
      rows: [
        ['xⁿ', 'xⁿ⁺¹/(n + 1) + C', 'n ≠ −1'],
        ['1/x', 'ln |x| + C', 'x ≠ 0, on one side of 0'],
        ['eᵏˣ', 'eᵏˣ/k + C', 'k ≠ 0'],
        ['sin x, cos x', '−cos x + C, sin x + C', 'radians'],
        ['∫₀² 2x dx', '(4 + C) − (0 + C) = 4', 'C cancels'],
      ]
    },
  ],
  idea: 'Antiderivatives, constants and evaluation',
  board: [
    fact('b-rule', 'F′ = f: F is an antiderivative', '∫ f(x) dx = F(x) + C'),
    facts('b-1', 'Why the + C', ['(F + C)′ = f for any C', 'on an interval: all of them', 'x² + C: same slopes']),
    facts('b-2', 'Evaluation and checks', ['∫₀² 2x dx: C cancels → 4', 'differentiate to verify', '(ln |x|)′ = 1/x']),
    caution('b-watch', 'xⁿ⁺¹/(n + 1) fails at n = −1: that case is ln |x|.'),
  ]
})
