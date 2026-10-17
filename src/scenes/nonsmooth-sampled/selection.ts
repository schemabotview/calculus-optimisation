import type { Scene } from '@graphlearning/flow'

// §12.7 — choosing the reasoning for a problem, with the course's own workshop problems as the rows. Each
// method and result is the one computed in the chapter named.
export const selection: Scene = {
  id: 'selection',
  title: 'Choosing smooth, constrained or nonsmooth reasoning',
  flow: 'TB',
  nodes: [
    {
      id: 'choose',
      label: 'Read the structure first, then pick the tool',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'smooth', label: 'Smooth, unconstrained', sub: '∇f = 0, Hessian test; Newton or BFGS', pattern: 'service', icon: 'gauge' },
        { id: 'constrained', label: 'Constraints', sub: 'KKT with g ≤ 0, λ ≥ 0; dual bound', pattern: 'service', icon: 'lock' },
        { id: 'nonsmooth', label: 'Kinks: |x|, max', sub: '0 ∈ ∂f; subgradient or prox steps', pattern: 'storage', icon: 'scissors' },
        { id: 'finite-sum', label: 'Large finite sum', sub: 'sampled gradients; decaying steps', pattern: 'storage', icon: 'repeat' },
        { id: 'convex', label: 'Convex?', sub: 'then local is global; check uniqueness', pattern: 'network', icon: 'scale' },
        { id: 'evidence', label: 'Evidence', sub: 'residual, feasibility, model perturbation', pattern: 'network', icon: 'circlecheck' },
      ],
    },
    {
      id: 'workshop',
      kind: 'table',
      label: 'The workshop problems of this course, and how each was settled',
      sub: 'the structure decided the method every time',
      headers: ['problem', 'structure', 'method', 'chapter'],
      values: [
        ['best rate q', 'smooth, 1-D, convex', 'damped Newton: 8.944', '10'],
        ['24 chairs, M ≤ 8', 'convex, constrained', 'KKT, λ = (30, 15): £600', '11'],
        ['fit chairs by hour', 'convex quadratic', 'normal equations: (0.25, 2.9)', '9'],
        ['worst-case fit', 'max: nonsmooth', 'epigraph LP: (0.125, 2.95)', '9'],
        ['hourly rate, many hours', 'finite sum', 'SGD, decaying step: 3.10', '12'],
      ],
    },
  ],
  edges: [],
}
