import type { Section } from '../types'

export const checkingSection: Section = {
  id: 'checking',
  title: 'Numerical, symbolic and automatic differentiation',
  scene: 'checking',
  focus: 'code',
  narration:
    "How do you know a gradient is right? There are three ways to compute derivatives, with different roles. Symbolic differentiation produces formulas. Automatic differentiation, used by machine learning libraries, applies the chain rule to the operations in a program and gives exact derivatives of the code. Finite differences evaluate the function at nearby points; they are approximate, but need nothing except the function, which makes them the standard check. Step size matters. On the left, the error of estimating zero point seven five, the labour partial, shrinks as the step shrinks, until rounding takes over, because subtracting two nearly equal numbers loses digits. The forward difference does best near ten to the minus seven, the central one near ten to the minus four. The code compares the least squares gradient with central differences: they agree to about ten to the minus nine. Drop the factor two and the check catches it at once. That completes the chapter. You can interpret partials and tangent planes, propagate sensitivities through Jacobians, and check a derivative. Next, Jacobians also explain how coordinate changes affect accumulated quantities.",
}
