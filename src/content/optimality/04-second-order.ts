import type { Section } from '../types'

export const secondOrderSection: Section = {
  id: 'second-order',
  title: 'Second-order necessary and sufficient tests and degenerate cases',
  scene: 'second-order',
  focus: 'tests',
  narration:
    "Once you have a critical point, how do you tell a minimum from a saddle? Look at the Hessian's eigenvalues, which describe the shape of the quadratic model. All positive means a bowl: a strict local minimum. All negative means a dome: a local maximum. Mixed signs mean a saddle. For the previous example, the Hessian at one, zero is diagonal with six and two, a minimum; at minus one, zero it has minus six and two, a saddle. There is also a necessary condition: at any local minimum, the Hessian must be positive semidefinite, so a single negative eigenvalue rules a minimum out. The hard case is a zero eigenvalue. Then the quadratic model is flat in some direction, and it cannot see what happens there. On the left are slices that all have zero curvature at the origin except x squared. x to the fourth is still a minimum; minus x to the fourth is a maximum; x cubed is neither. So x to the fourth plus y squared and minus x to the fourth plus y squared share the same Hessian, and only one has a minimum. Next, a structure that makes local answers global.",
}
