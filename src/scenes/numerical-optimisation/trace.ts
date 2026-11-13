import { board, caution, fact, facts } from '../frame'
import type { P } from '../plot-kit'
import { sample } from '../plot-kit'

// §10.8 — damped Newton on the workshop's cost per chair c(q) = F/q + 0.5q + 2 (overhead F = £40), from
// q₀ = 3 with a new machine's capacity of 12. The code card is the script that was run; its printed
// lines are copied from the run. Perturbing F by ±10% moves q* = √(2F) to 8.485 / 9.381.
const c = (F: number) => (q: number) => F / q + 0.5 * q + 2
const ITER = [3, 4.33125, 5.989043, 7.640947, 8.673236, 8.932077, 8.944247, 8.944272]
export const trace = board({
  id: 'trace',
  figure: 'An integrated diagnostic trace',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'model',
      title: 'Cost per chair: Newton iterates, and the model with overhead ±10%',
      x: { min: 2, max: 14, step: 1, label: 'q, chairs per hour' },
      y: { min: 9.5, max: 18, step: 1, label: '£ per chair' },
      series: [
        {
          kind: 'line',
          points: sample(2.5, 14, 100, c(36)),
          label: 'overhead £36',
          labelAt: [12.153, 10.254],
          tone: 'neutral'
        },
        {
          kind: 'line',
          points: sample(2.5, 14, 100, c(44)),
          label: 'overhead £44',
          labelAt: [12.153, 12.65],
          tone: 'neutral'
        },
        {
          kind: 'line',
          points: sample(2.5, 14, 100, c(40)),
          label: 'c(q), overhead £40',
          labelAt: [3.1, 17.15],
          tone: 'ingest'
        },
        {
          kind: 'scatter',
          points: ITER.map((q): P => [q, c(40)(q)]),
          label: 'Newton iterates from q = 3',
          labelAt: [5.3, 13.9],
          tone: 'infra'
        },
      ]
    },
    {
      type: 'code',
      id: 'code',
      filename: 'trace.py',
      code: `for k in range(7):
    step = -dc(q) / d2c(q)            # Newton step
    a = 1.0
    while c(q + a*step) > c(q) + 1e-4*a*dc(q)*step:
        a /= 2                        # backtrack
    q += a*step
    print(k+1, q, c(q), abs(dc(q)), a, q <= cap)
# 1  4.33125   13.400834  1.6e+00  1.0  True
# 6  8.944247  10.944272  2.8e-06  1.0  True
# 7  8.944272  10.944272  1.2e-11  1.0  True`
    },
  ],
  idea: 'Integrated objective, gradient and feasibility diagnostic trace',
  board: [
    fact('b-rule', 'Report objective, gradient and feasibility per iteration', 'then ask how the answer depends on the model'),
    facts('b-1', 'Newton on cost per chair', ['from q = 3, capacity 12', '|c′|: 10⁻², 10⁻³, 10⁻⁶, 10⁻¹¹', 'q* = 8.9443, £10.944']),
    facts('b-2', 'Modelling evidence', ['overhead ±10%: 8.49 to 9.38', 'F = £44: £11.39 vs £11.38', 'robust decision, fragile digits']),
    caution('b-watch', 'Chapter outcome: you can explain update rules and safeguards, read convergence claims under their hypotheses, and back an answer with evidence.'),
  ]
})
