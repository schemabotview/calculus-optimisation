import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'

// §2.5 — sin and its derivative cos on one plot: wherever sin peaks or troughs, cos crosses zero
// where sin is steepest, cos is ±1. Tangent at x = 0 has slope cos 0 = 1.
export const transcendental = board({
  id: 'transcendental',
  figure: 'Exponential, logarithmic and trigonometric derivatives',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'sin-cos',
      title: 'sin x and its derivative cos x (x in radians)',
      equal: true,
      x: { min: -3.5, max: 7, step: 1 },
      y: { min: -1.5, max: 1.75, step: 0.5 },
      series: [
        {
          kind: 'line',
          points: sample(-3.5, 7, 160, Math.sin),
          label: 'sin x',
          labelAt: [1.2, 1.15],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: sample(-3.5, 7, 160, Math.cos),
          label: 'cos x = (sin x)′',
          labelAt: [4.9, 1.2],
          tone: 'infra'
        },
        {
          kind: 'line',
          points: [[-1, -1], [1, 1]],
          label: 'slope 1 at 0',
          labelAt: [-2.9, -1.3],
          tone: 'store'
        },
        { kind: 'scatter', points: [[Math.PI / 2, 1]], tone: 'serve' },
        {
          kind: 'scatter',
          points: [[Math.PI / 2, 0]],
          label: 'peak of sin, zero of cos',
          labelAt: [2.0, -1.4],
          tone: 'serve'
        },
      ]
    },
    {
      type: 'table',
      id: 'derivatives',
      title: 'The derivatives to know',
      columns: ['f(x)', 'f′(x)', 'with an inner g'],
      rows: [
        ['eˣ', 'eˣ', '(e^g)′ = e^g g′'],
        ['ln x, x > 0', '1/x', '(ln g)′ = g′/g'],
        ['sin x', 'cos x', '(sin g)′ = cos g · g′'],
        ['cos x', '−sin x', '(cos g)′ = −sin g · g′'],
        ['aˣ, a > 0', 'aˣ ln a', 'degrees would add π/180'],
      ]
    },
  ],
  idea: 'Exponential, logarithmic and trigonometric derivatives',
  board: [
    fact('b-rule', 'In nearly every model', 'usually with the chain rule'),
    facts('b-1', 'The list', ['(eˣ)′ = eˣ', '(ln x)′ = 1/x, x > 0', '(sin)′ = cos, (cos)′ = −sin']),
    facts('b-2', 'Off the graph', ['sin peaks: slope 0', 'there cos crosses 0', '(e^(kx))′ = k e^(kx)']),
    caution('b-watch', 'With angles in degrees, every trigonometric derivative picks up a factor π/180.'),
  ]
})
