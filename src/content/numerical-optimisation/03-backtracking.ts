import type { Section } from '../types'

export const backtrackingSection: Section = {
  id: 'backtracking',
  title: 'Backtracking and sufficient decrease',
  scene: 'backtracking',
  focus: 'line-search',
  narration:
    "If the right step depends on a curvature constant you may not know, can the method find a safe step itself? Yes, by backtracking. Try a step, and if it does not reduce f enough, halve it and try again. The phrase that matters is reduce enough. The Armijo condition asks that the new value lie below a line that starts at the current value and falls with a small fraction, typically ten to the minus four, of the predicted slope. On the left, the blue curve is f along the steepest descent line from three, one and a half, and the orange line is the Armijo bound. A full step of one would give nine hundred and eleven, far uphill. Half a step gives a hundred and eighty one, a quarter gives twenty eight: both rejected. One eighth gives four point one five, below the bound, and is accepted. Repeating this at every iteration reaches a gradient below ten to the minus six in sixty one iterations, with no Lipschitz constant supplied. Why demand sufficient decrease rather than any decrease? Because a sequence of ever tinier improvements can stall short of the minimum. Next, Newton's method.",
}
