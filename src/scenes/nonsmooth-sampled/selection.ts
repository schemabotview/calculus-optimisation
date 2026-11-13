import { board, caution, fact, facts } from '../frame'

// §12.7 — choosing the reasoning for a problem, with the course's own workshop problems as the rows. Each
// method and result is the one computed in the chapter named.
export const selection = board({
  id: 'selection',
  figure: 'Choosing smooth, constrained or nonsmooth reasoning',
  diagram: [
    {
      type: 'group',
      id: 'choose',
      title: 'Read the structure first, then pick the tool',
      dir: 'grid',
      cols: 2,
      children: [
        { type: 'item', id: 'smooth', title: 'Smooth, unconstrained', sub: '∇f = 0, Hessian test; Newton or BFGS', icon: 'gauge', tone: 'ingest' },
        { type: 'item', id: 'constrained', title: 'Constraints', sub: 'KKT with g ≤ 0, λ ≥ 0; dual bound', icon: 'lock', tone: 'ingest' },
        { type: 'item', id: 'nonsmooth', title: 'Kinks: |x|, max', sub: '0 ∈ ∂f; subgradient or prox steps', tone: 'store' },
        { type: 'item', id: 'finite-sum', title: 'Large finite sum', sub: 'sampled gradients; decaying steps', tone: 'store' },
        { type: 'item', id: 'convex', title: 'Convex?', sub: 'then local is global; check uniqueness', tone: 'serve' },
        { type: 'item', id: 'evidence', title: 'Evidence', sub: 'residual, feasibility, model perturbation', tone: 'serve' },
      ]
    },
    {
      type: 'table',
      id: 'workshop',
      title: 'The workshop problems of this course, and how each was settled',
      columns: ['problem', 'structure', 'method', 'chapter'],
      rows: [
        ['best rate q', 'smooth, 1-D, convex', 'damped Newton: 8.944', '10'],
        ['24 chairs, M ≤ 8', 'convex, constrained', 'KKT, λ = (30, 15): £600', '11'],
        ['fit chairs by hour', 'convex quadratic', 'normal equations: (0.25, 2.9)', '9'],
        ['worst-case fit', 'max: nonsmooth', 'epigraph LP: (0.125, 2.95)', '9'],
        ['hourly rate, many hours', 'finite sum', 'SGD, decaying step: 3.10', '12'],
      ]
    },
  ],
  idea: 'Integrated selection of smooth, constrained or nonsmooth reasoning',
  board: [
    fact('b-rule', 'Read the structure before choosing', 'smoothness, constraints, convexity, sums over data'),
    facts('b-1', 'Questions to ask first', ['kinks, or differentiable?', 'constraints: which active?', 'convex: local is global?', 'an average over many terms?']),
    facts('b-2', 'What it decides', ['smooth: Newton, BFGS', 'constrained: KKT, prices', 'kinks: subgradients, prox', 'sums: sampled, decaying step']),
    caution('b-watch', 'Chapter outcome: you can explain why nonsmooth and sampled objectives need different reasoning, take a proximal step, and name a stochastic claim’s assumptions.'),
  ]
})
