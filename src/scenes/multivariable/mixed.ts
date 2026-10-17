import type { Scene } from '@graphlearning/flow'

// §7.3 — g = x³y² + sin(xy): g_xy = g_yx = 6x²y + cos(xy) − xy sin(xy) = 9.7653 at (1, 2) (FD: 9.76526).
// Counterexample f = xy(x² − y²)/(x² + y²): f_x(0, y) = −y and f_y(x, 0) = x, so f_xy(0, 0) = −1 and
// f_yx(0, 0) = +1 (nested central differences: ∓0.9998).
export const mixed: Scene = {
  id: 'mixed',
  title: 'Mixed partials',
  flow: 'TB',
  nodes: [
    {
      id: 'slices',
      kind: 'plot',
      label: 'For f = xy(x² − y²)/(x² + y²): two first partials, sliced',
      sub: 'f_xy(0, 0) is the slope of f_x(0, y); f_yx(0, 0) is the slope of f_y(x, 0)',
      plot: {
        equal: true,
        x: { min: -1.2, max: 1.2, step: 0.4, label: 'y, or x' },
        y: { min: -1.2, max: 1.2, step: 0.4 },
        series: [
          { kind: 'line', points: [[-1, 1], [1, -1]], label: 'f_x(0, y) = −y: slope −1', labelAt: [-1.15, 1.12], color: '#60a5fa' },
          { kind: 'line', points: [[-1, -1], [1, 1]], label: 'f_y(x, 0) = x: slope +1', labelAt: [0.2, 1.12], color: '#f472b6' },
        ],
      },
    },
    {
      id: 'clairaut',
      kind: 'table',
      label: 'Order of differentiation: when it matters',
      sub: 'Clairaut: if f_xy and f_yx are continuous near the point, they are equal there',
      headers: ['function, point', 'f_xy', 'f_yx', 'why'],
      values: [
        ['x³y² + sin(xy), (1, 2)', '9.7653', '9.7653', 'smooth: Clairaut applies'],
        ['finite-difference check', '9.7653', '9.7653', 'agrees to 5 digits'],
        ['xy(x² − y²)/(x² + y²), (0, 0)', '−1', '+1', 'mixed partials discontinuous'],
        ['finite-difference check', '−0.9998', '+0.9998', 'the asymmetry is real'],
      ],
    },
  ],
  edges: [],
}
