import type { Section } from '../types'

export const methodsSection: Section = {
  id: 'methods',
  title: 'Projection, penalties and barriers as method families',
  scene: 'methods',
  focus: 'compare',
  slide: `## Constrained methods

Three families handle constraints differently. The difference shows in **where the iterates lie**: outside, inside, or exactly on the feasible set.

### Penalties
- Add (μ/2) max(0, g)² to f and minimise freely
- Minimiser 2.167 at μ = 10, 2.002 at μ = 1000
- Always slightly infeasible; exact only as μ → ∞

### Barriers
- Add −t ln(−g), which blows up at the boundary
- Minimiser 1.634 at t = 1, 1.995 at t = 0.01
- Always strictly feasible; exact only as t → 0

### Projection
After each gradient step, move to the nearest feasible point. For x ≤ 2, from 0 with α = 0.25: 1.5, then exactly 2. Cheap when projecting is easy (boxes, balls), hard otherwise. Large μ or small t make the subproblems ill-conditioned.`,
  narration:
    "How does an algorithm respect a constraint? Three families answer differently, and the clearest way to see it is where their iterates end up. Take the one dimensional problem: minimise x minus three squared with x at most two. A penalty method adds a cost for violation, mu over two times the violation squared, and minimises freely. On the left, with mu equal to ten, the pink curve's minimum is at two point one six seven: past the boundary. Raising mu to a thousand brings it to two point zero zero two, but always from the infeasible side. A barrier method adds minus t times the log of the slack, which blows up at the boundary, so its minimiser is always strictly feasible: one point six three four with t equal to one, one point nine nine five with t equal to one hundredth. Projection takes a gradient step and then moves to the nearest feasible point; here it reaches exactly two in two steps. Each family has its cost. Penalties and barriers are exact only in a limit, and pushing mu up or t down makes the subproblems badly conditioned. Projection is only cheap when the feasible set is simple. Next, what multipliers tell you after solving.",
}
