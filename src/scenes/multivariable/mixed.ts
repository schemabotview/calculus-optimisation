import { board, fact, facts } from '../frame'

// §7.3 — g = x³y² + sin(xy): g_xy = g_yx = 6x²y + cos(xy) − xy sin(xy) = 9.7653 at (1, 2) (FD: 9.76526).
// Counterexample f = xy(x² − y²)/(x² + y²): f_x(0, y) = −y and f_y(x, 0) = x, so f_xy(0, 0) = −1 and
// f_yx(0, 0) = +1 (nested central differences: ∓0.9998).
export const mixed = board({
  id: 'mixed',
  figure: 'Mixed partials',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'slices',
      title: 'For f = xy(x² − y²)/(x² + y²): two first partials, sliced',
      equal: true,
      x: { min: -1.2, max: 1.2, step: 0.4, label: 'y, or x' },
      y: { min: -1.2, max: 1.2, step: 0.4 },
      series: [
        {
          kind: 'line',
          points: [[-1, 1], [1, -1]],
          label: 'f_x(0, y) = −y: slope −1',
          labelAt: [-2.3157, 0.96],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: [[-1, -1], [1, 1]],
          label: 'f_y(x, 0) = x: slope +1',
          labelAt: [0.2, 0.96],
          tone: 'serve'
        },
      ]
    },
    {
      type: 'table',
      id: 'clairaut',
      title: 'Order of differentiation: when it matters',
      columns: ['function, point', 'f_xy', 'f_yx', 'why'],
      rows: [
        ['x³y² + sin(xy), (1, 2)', '9.7653', '9.7653', 'smooth: Clairaut applies'],
        ['finite-difference check', '9.7653', '9.7653', 'agrees to 5 digits'],
        ['xy(x² − y²)/(x² + y²), (0, 0)', '−1', '+1', 'mixed partials discontinuous'],
        ['finite-difference check', '−0.9998', '+0.9998', 'the asymmetry is real'],
      ]
    },
  ],
  idea: 'Mixed partials and their interchange conditions',
  board: [
    fact('b-rule', 'Mixed partials: f_xy and f_yx', 'differentiate in different inputs, in either order'),
    facts('b-1', 'Usually equal', ['g = x³y² + sin(xy)', 'at (1, 2): both 9.7653', 'Q_LM = Q_ML = 1/24']),
    facts('b-2', 'Clairaut’s theorem', ['both continuous near a point', 'then they are equal', 'polynomials, exp, sin qualify']),
    fact('b-3', 'A counterexample', 'xy(x² − y²)/(x² + y²): f_xy(0, 0) = −1, f_yx = +1; not continuous there'),
  ]
})
