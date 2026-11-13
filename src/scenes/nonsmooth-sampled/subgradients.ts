import { board, caution, fact, facts } from '../frame'
import { sample } from '../plot-kit'

// §12.1 — f(x) = max(−2x, x): convex, kink at 0 with one-sided slopes −2 and 1, so ∂f(0) = [−2, 1]. Each
// line through the origin with slope s ∈ [−2, 1] stays below f: a subgradient. 0 ∈ ∂f(0), so 0 minimises f.
export const subgradients = board({
  id: 'subgradients',
  figure: 'Subgradients and subdifferentials',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'supports',
      title: 'Every slope from −2 to 1 supports max(−2x, x) at 0',
      equal: true,
      x: { min: -2.2, max: 3.6, step: 0.5 },
      y: { min: -1.2, max: 4.2, step: 0.5 },
      series: [
        {
          kind: 'line',
          points: sample(-2.2, 2.4, 2, (x) => -0.5 * x),
          label: 's = −0.5',
          labelAt: [2.45, -1.15],
          tone: 'ingest'
        },
        {
          kind: 'line',
          points: sample(-2.2, 3.6, 2, () => 0),
          label: 's = 0: flat, so 0 is the minimiser',
          labelAt: [0.55857, -0.081429],
          tone: 'store'
        },
        {
          kind: 'line',
          points: sample(-0.6, 3.6, 2, (x) => 0.5 * x),
          label: 's = 0.5',
          labelAt: [3.0, 1.15],
          tone: 'serve'
        },
        {
          kind: 'line',
          points: [[-2.1, 4.2], [0, 0], [3.6, 3.6]],
          label: 'f(x) = max(−2x, x)',
          labelAt: [-0.15286, 3.3],
          tone: 'infra'
        },
      ]
    },
    {
      type: 'table',
      id: 'subdifferential',
      title: 'The subdifferential ∂f(x): the set of all subgradients',
      columns: ['function, point', '∂f', 'minimiser there?'],
      rows: [
        ['max(−2x, x) at x = 0', '[−2, 1]', 'yes: 0 ∈ [−2, 1]'],
        ['max(−2x, x) at x = 1', '{1}', 'no'],
        ['|x| at x = 0', '[−1, 1]', 'yes'],
        ['|x − 3| + |x − 5| at x = 4', '{0}', 'yes: every x in [3, 5]'],
        ['optimality rule', '0 ∈ ∂f(x*)', 'replaces ∇f(x*) = 0'],
      ]
    },
  ],
  idea: 'Convex subgradients and subdifferentials',
  board: [
    fact('b-rule', 'Subgradient s: f(y) ≥ f(x) + s(y − x) for all y', 'a supporting line’s slope (f convex)'),
    facts('b-1', 'At a kink', ['max(−2x, x): slopes −2 and 1', 'every s in between supports', '∂f(0) = [−2, 1]', 'smooth: ∂f = {∇f}']),
    facts('b-2', 'The optimality rule', ['minimum ⇔ 0 ∈ ∂f(x)', '0 ∈ [−2, 1]: x* = 0', '|x − 3| + |x − 5|: all of (3, 5)']),
    caution('b-watch', 'Absolute values, maxima and hinge losses have kinks, often at the solution: "set the derivative to zero" fails there; "0 ∈ ∂f" does not.'),
  ]
})
