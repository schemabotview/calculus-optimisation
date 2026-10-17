import type { Section } from '../types'

export const backtrackingSection: Section = {
  id: 'backtracking',
  title: 'Backtracking and sufficient decrease',
  scene: 'backtracking',
  focus: 'line-search',
  slide: `## Backtracking line search

Instead of guessing α from L, try a step and **shrink it until it works**. "Works" means sufficient decrease, not just any decrease.

### The Armijo condition
- Accept α if f(x + αd) ≤ f(x) + c α ∇f(x)ᵀd
- c is small, typically 10⁻⁴; ∇fᵀd < 0, so the bound falls with α
- Start at α = 1 and halve until the test passes

### At (3, 1.5) on the bowl
- f = 15.75 and ∇fᵀd = −234 along d = −∇f
- α = 1, 0.5, 0.25 overshoot: f = 911, 181, 27.8
- α = 0.125 gives f = 4.15, below 15.747: accepted
- The full run needs 61 iterations, and no value of L

### Watch out
Plain decrease is not enough: tiny decreases can add up to a finite total short of the minimum. Sufficient decrease ties each gain to the slope, which is what the convergence proofs need.`,
  narration:
    "If the right step depends on a curvature constant you may not know, can the method find a safe step itself? Yes, by backtracking. Try a step, and if it does not reduce f enough, halve it and try again. The phrase that matters is reduce enough. The Armijo condition asks that the new value lie below a line that starts at the current value and falls with a small fraction, typically ten to the minus four, of the predicted slope. On the left, the blue curve is f along the steepest descent line from three, one and a half, and the orange line is the Armijo bound. A full step of one would give nine hundred and eleven, far uphill. Half a step gives a hundred and eighty one, a quarter gives twenty eight: both rejected. One eighth gives four point one five, below the bound, and is accepted. Repeating this at every iteration reaches a gradient below ten to the minus six in sixty one iterations, with no Lipschitz constant supplied. Why demand sufficient decrease rather than any decrease? Because a sequence of ever tinier improvements can stall short of the minimum. Next, Newton's method.",
}
