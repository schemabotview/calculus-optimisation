import type { Section } from '../types'

export const methodsSection: Section = {
  id: 'methods',
  title: 'Projection, penalties and barriers as method families',
  scene: 'methods',
  focus: 'compare',
  narration:
    "How does an algorithm respect a constraint? Three families answer differently, and the clearest way to see it is where their iterates end up. Take the one dimensional problem: minimise x minus three squared with x at most two. A penalty method adds a cost for violation, mu over two times the violation squared, and minimises freely. On the left, with mu equal to ten, the pink curve's minimum is at two point one six seven: past the boundary. Raising mu to a thousand brings it to two point zero zero two, but always from the infeasible side. A barrier method adds minus t times the log of the slack, which blows up at the boundary, so its minimiser is always strictly feasible: one point six three four with t equal to one, one point nine nine five with t equal to one hundredth. Projection takes a gradient step and then moves to the nearest feasible point; here it reaches exactly two in two steps. Each family has its cost. Penalties and barriers are exact only in a limit, and pushing mu up or t down makes the subproblems badly conditioned. Projection is only cheap when the feasible set is simple. Next, what multipliers tell you after solving.",
}
