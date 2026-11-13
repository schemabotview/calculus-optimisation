import { board, caution, fact, facts } from '../frame'
import type { P } from '../plot-kit'

// §7.8 — errors of finite-difference estimates of ∂Q/∂L = 0.75 at (16, 9), h = 10⁻¹ … 10⁻¹⁴, run in numpy
// (log₁₀ |error| below). Truncation falls with h; rounding grows like ε/h; the best h is near 10⁻⁷ (forward)
// and 10⁻⁴ (central). The code card's printed values come from running exactly that code.
const FWD = [-2.93, -3.93, -4.93, -5.93, -6.93, -7.9, -8.05, -6.62, -6.08, -4.65, -4.65, -3.42, -2.41, -1.4]
const CEN = [-5.44, -7.44, -9.43, -11.15, -9.93, -9.93, -8.05, -6.62, -6.08, -5.36, -4.65, -3.42, -2.41, -1.4]
const pts = (v: number[]): P[] => v.map((e, i) => [-(i + 1), e])
export const checking = board({
  id: 'checking',
  figure: 'Finite-difference gradient checks',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'sweep',
      title: 'Finite-difference error against step size h',
      x: { min: -14.5, max: 0, step: 1, label: 'log₁₀ h' },
      y: { min: -12, max: -1, step: 1, label: 'log₁₀ error' },
      series: [
        { kind: 'line', points: pts(FWD), tone: 'infra' },
        {
          kind: 'scatter',
          points: pts(FWD),
          label: 'forward: (f(x + h) − f(x))/h',
          labelAt: [-6.2, -3.3],
          tone: 'infra'
        },
        { kind: 'line', points: pts(CEN), tone: 'ingest' },
        {
          kind: 'scatter',
          points: pts(CEN),
          label: 'central: best near h = 10⁻⁴',
          labelAt: [-3.6, -11.6],
          tone: 'ingest'
        },
      ]
    },
    {
      type: 'code',
      id: 'code',
      filename: 'gradcheck.py',
      code: `f = lambda w: np.sum((X @ w - y)**2)
grad = lambda w: 2 * X.T @ (X @ w - y)
w, h, e = np.array([2., 2.]), 1e-6, np.eye(2)
fd = [(f(w + h*e[i]) - f(w - h*e[i])) / (2*h)
      for i in range(2)]
grad(w)        # [ -4. -19.]
fd             # [ -4. -19.]   max diff 1.4e-09
X.T @ (X @ w - y)   # forgot the 2: [-2. -9.5]  caught`
    },
  ],
  idea: 'Numerical, symbolic and automatic differentiation',
  board: [
    fact('b-rule', 'Symbolic, automatic, finite differences', 'formulas, exact derivatives of code, cheap checks'),
    facts('b-1', 'Finite differences', ['forward: error ≈ h + ε/h', 'central: h² + ε/h', 'big h truncates, tiny h cancels', 'best h: 10⁻⁷ / 10⁻⁵']),
    facts('b-2', 'A gradient check', ['formula vs central difference', 'agree to 1.4 × 10⁻⁹', 'a missing 2: (−2, −9.5)']),
    caution('b-watch', 'Chapter outcome: you can read partials and tangent planes, explain why partials alone are not enough, chain Jacobians, and check a gradient.'),
  ]
})
