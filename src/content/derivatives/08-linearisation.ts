import type { Section } from '../types'

export const linearisationSection: Section = {
  id: 'linearisation',
  title: 'Linearisation, differentials and approximation limits',
  scene: 'linearisation',
  focus: 'errors',
  slide: `## Linearisation

Near a point a, a differentiable function is close to its tangent line: **L(x) = f(a) + f′(a)(x − a)**.

### Approximating √x near 4
- f(4) = 2 and f′(4) = 1/(2√4) = 1/4, so L(x) = 2 + (x − 4)/4
- At 4.1 the error is 0.00015; at 5 it is 0.014; at 9 it is 0.25
- The **differential** dy = f′(a) dx estimates the change for a small dx
- From 4 to 4.5: dy = 0.125, against a true change of 0.121

### Why the error grows
The tangent ignores curvature, and the error grows roughly like (x − a)² near a. Chapter 6 makes that precise.

### Chapter outcome
You can compute a derivative from first principles, apply the rules and the chain rule, interpret units, and judge where a linear approximation can be trusted.`,
  narration:
    "Why does the derivative matter beyond slopes? Because near a point, a smooth function looks like its tangent line, and lines are easy. The linearisation of f at a is f of a plus f prime of a times x minus a. For the square root near four, the value is two and the slope is one quarter, so the linearisation is two plus x minus four, over four. The table measures how good it is. At four point one, the error is a tenth of a thousandth. At five, about one hundredth. At nine, a quarter. The approximation is local. The tangent ignores the curve's bending, so the error grows roughly with the square of the distance, and chapter six will make that exact. The differential captures the same idea for small changes: the change in output is about the derivative times the change in input. That completes the chapter. You can compute derivatives, explain their units, and judge where linear approximation holds. Next, derivatives become tools for finding and justifying optimal choices.",
}
