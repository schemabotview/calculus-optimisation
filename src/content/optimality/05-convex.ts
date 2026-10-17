import type { Section } from '../types'

export const convexSection: Section = {
  id: 'convex',
  title: 'Convex sets, convex functions and derivative characterisations',
  scene: 'convex',
  focus: 'support',
  slide: `## Convexity

A set is **convex** if it contains the segment between any two of its points. A function is **convex** if every chord lies on or above its graph.

### Derivative tests
- Tangents below: f(y) ≥ f(x) + ∇f(x)ᵀ(y − x)
- Twice differentiable f: ∇²f(x) ⪰ 0 at every x
- Cost per chair: c″(q) = 80/q³ > 0, convex on q > 0

### Why it matters
- For convex f on a convex set, a local minimum is global
- If ∇f(a) = 0 at an interior point, a is a global minimiser
- The tangent inequality is a certificate: no point can beat f(a)

### Watch out
Convexity is a property on a set. c(q) is convex on q > 0, not across q = 0. And Q(L, M) is concave, not convex: its Hessian's eigenvalues are −0.098 and 0, so maximising it is the well-behaved problem.`,
  narration:
    "Is there a kind of problem where a local answer is automatically global? Yes: convex problems. A set is convex if the straight segment between any two of its points stays inside. A function is convex if every chord lies on or above its graph, like the pink chord on the left. For differentiable functions, this is the same as saying every tangent lies below the graph, like the two green tangents. For twice differentiable functions, it is the same as a positive semidefinite Hessian everywhere. The cost per chair has second derivative eighty over q cubed, positive for every positive rate, so it is convex there. Why does this matter so much? The tangent inequality says the function is everywhere at least its tangent value. At a point where the gradient is zero, the tangent is flat, so no point anywhere can do better. A local minimum of a convex function on a convex set is a global one. Two cautions. Convexity holds on a set, here positive rates only. And the workshop output is concave, not convex: maximising it is the well behaved problem. Next, existence and uniqueness.",
}
