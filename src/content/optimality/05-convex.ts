import type { Section } from '../types'

export const convexSection: Section = {
  id: 'convex',
  title: 'Convex sets, convex functions and derivative characterisations',
  scene: 'convex',
  focus: 'support',
  narration:
    "Is there a kind of problem where a local answer is automatically global? Yes: convex problems. A set is convex if the straight segment between any two of its points stays inside. A function is convex if every chord lies on or above its graph, like the pink chord on the left. For differentiable functions, this is the same as saying every tangent lies below the graph, like the two green tangents. For twice differentiable functions, it is the same as a positive semidefinite Hessian everywhere. The cost per chair has second derivative eighty over q cubed, positive for every positive rate, so it is convex there. Why does this matter so much? The tangent inequality says the function is everywhere at least its tangent value. At a point where the gradient is zero, the tangent is flat, so no point anywhere can do better. A local minimum of a convex function on a convex set is a global one. Two cautions. Convexity holds on a set, here positive rates only. And the workshop output is concave, not convex: maximising it is the well behaved problem. Next, existence and uniqueness.",
}
