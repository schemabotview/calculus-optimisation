import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'

// §2.3 — the rules applied, and one result checked on a graph: f(x) = x/(x² + 1) has
// f′(x) = (1 − x²)/(x² + 1)², which is zero exactly where f peaks (x = ±1, f = ±0.5).
const f = (x: number) => x / (x * x + 1)
const df = (x: number) => (1 - x * x) / (x * x + 1) ** 2
export const rules = board({
  id: 'rules',
  figure: 'Rules for differentiation',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'quotient-check',
      title: 'f(x) = x/(x² + 1) and its derivative, by the quotient rule',
      x: { min: -4, max: 4, step: 1 },
      y: { min: -1, max: 1.2, step: 0.5 },
      series: [
        {
          kind: 'line',
          points: sample(-4, 4, 120, f),
          label: 'f(x)',
          labelAt: [1.7, 0.55],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: sample(-4, 4, 120, df),
          label: 'f′(x)',
          labelAt: [0.25, 1.05],
          tone: 'infra'
        },
        {
          kind: 'scatter',
          points: [[1, 0.5]],
          label: 'peak (1, 0.5)',
          labelAt: [1.1, 0.75],
          tone: 'store'
        },
        {
          kind: 'scatter',
          points: [[-1, -0.5]],
          label: 'trough (−1, −0.5)',
          labelAt: [-3.3, -0.75],
          tone: 'store'
        },
      ]
    },
    {
      type: 'table',
      id: 'worked',
      title: 'Each rule, once: f, g differentiable; c a constant',
      columns: ['rule', 'statement', 'example'],
      rows: [
        ['power', '(xⁿ)′ = n xⁿ⁻¹', '(3x⁴ − 2x + 5)′ = 12x³ − 2'],
        ['sum, constant', '(c f + g)′ = c f′ + g′', 'term by term, as above'],
        ['product', '(f g)′ = f′ g + f g′', '(x² sin x)′ = 2x sin x + x² cos x'],
        ['quotient', '(f/g)′ = (f′ g − f g′)/g²', '(x/(x² + 1))′ = (1 − x²)/(x² + 1)²'],
      ]
    },
  ],
  idea: 'Power, sum, product and quotient rules',
  board: [
    fact('b-rule', 'Each rule is proved once from the definition', 'then saves work every time after'),
    facts('b-1', 'The four rules', ['power: n xⁿ⁻¹', 'sums: term by term', 'product: f′ g + f g′', 'quotient: (f′ g − f g′)/g²']),
    facts('b-2', 'Checking a result', ['x/(x² + 1)', 'f′ = (1 − x²)/(x² + 1)²', 'f′ = 0 at ±1: peak, trough']),
    caution('b-watch', 'The product rule is the commonest slip: the derivative of a product is not the product of the derivatives.'),
  ]
})
