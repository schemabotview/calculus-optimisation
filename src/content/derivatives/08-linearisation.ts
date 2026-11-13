import type { Section } from '../types'

export const linearisationSection: Section = {
  id: 'linearisation',
  title: 'Linearisation, differentials and approximation limits',
  scene: 'linearisation',
  focus: 'errors',
  narration:
    "Why does the derivative matter beyond slopes? Because near a point, a smooth function looks like its tangent line, and lines are easy. The linearisation of f at a is f of a plus f prime of a times x minus a. For the square root near four, the value is two and the slope is one quarter, so the linearisation is two plus x minus four, over four. The table measures how good it is. At four point one, the error is a tenth of a thousandth. At five, about one hundredth. At nine, a quarter. The approximation is local. The tangent ignores the curve's bending, so the error grows roughly with the square of the distance, and chapter six will make that exact. The differential captures the same idea for small changes: the change in output is about the derivative times the change in input. That completes the chapter. You can compute derivatives, explain their units, and judge where linear approximation holds. Next, derivatives become tools for finding and justifying optimal choices.",
}
