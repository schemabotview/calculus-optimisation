import type { Scene } from '@graphlearning/flow'
import type { PlotPoint } from '@graphlearning/flow'

// §7.8 — errors of finite-difference estimates of ∂Q/∂L = 0.75 at (16, 9), h = 10⁻¹ … 10⁻¹⁴, run in numpy
// (log₁₀ |error| below). Truncation falls with h; rounding grows like ε/h; the best h is near 10⁻⁷ (forward)
// and 10⁻⁴ (central). The code card's printed values come from running exactly that code.
const FWD = [-2.93, -3.93, -4.93, -5.93, -6.93, -7.9, -8.05, -6.62, -6.08, -4.65, -4.65, -3.42, -2.41, -1.4]
const CEN = [-5.44, -7.44, -9.43, -11.15, -9.93, -9.93, -8.05, -6.62, -6.08, -5.36, -4.65, -3.42, -2.41, -1.4]
const pts = (v: number[]): PlotPoint[] => v.map((e, i) => [-(i + 1), e])

export const checking: Scene = {
  id: 'checking',
  title: 'Finite-difference gradient checks',
  flow: 'TB',
  nodes: [
    {
      id: 'sweep',
      kind: 'plot',
      label: 'Finite-difference error against step size h',
      sub: 'log₁₀ |estimate − 0.75| for ∂Q/∂L at (16, 9): too large a step truncates, too small a step rounds',
      plot: {
        x: { min: -14.5, max: 0, step: 1, label: 'log₁₀ h' },
        y: { min: -12, max: -1, step: 1, label: 'log₁₀ error' },
        series: [
          { kind: 'line', points: pts(FWD), color: '#f59e0b' },
          { kind: 'scatter', points: pts(FWD), label: 'forward: (f(x + h) − f(x))/h', labelAt: [-6.2, -3.3], color: '#f59e0b' },
          { kind: 'line', points: pts(CEN), color: '#60a5fa' },
          { kind: 'scatter', points: pts(CEN), label: 'central: best near h = 10⁻⁴', labelAt: [-3.6, -11.6], color: '#60a5fa' },
        ],
      },
    },
    {
      id: 'code',
      kind: 'code',
      filename: 'gradcheck.py',
      label: `f = lambda w: np.sum((X @ w - y)**2)
grad = lambda w: 2 * X.T @ (X @ w - y)
w, h, e = np.array([2., 2.]), 1e-6, np.eye(2)
fd = [(f(w + h*e[i]) - f(w - h*e[i])) / (2*h)
      for i in range(2)]
grad(w)        # [ -4. -19.]
fd             # [ -4. -19.]   max diff 1.4e-09
X.T @ (X @ w - y)   # forgot the 2: [-2. -9.5]  caught`,
    },
  ],
  edges: [],
}
