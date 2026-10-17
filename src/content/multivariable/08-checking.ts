import type { Section } from '../types'

export const checkingSection: Section = {
  id: 'checking',
  title: 'Numerical, symbolic and automatic differentiation',
  scene: 'checking',
  focus: 'code',
  slide: `## Computing derivatives

Three methods, three roles. **Symbolic** gives formulas; **automatic** differentiation gives exact derivatives of code; **finite differences** give cheap, approximate checks.

### Finite differences
- Forward difference: error ≈ h, plus rounding ε/h
- Central difference: error ≈ h², plus ε/h
- Large h truncates; tiny h cancels digits
- Best h ≈ 10⁻⁷ forward, 10⁻⁴ to 10⁻⁵ central

### A gradient check
- Compare the formula with central differences
- Least squares at (2, 2): agree to 1.4 × 10⁻⁹
- A missing factor 2 shows up at once: (−2, −9.5)

### Chapter outcome
You can interpret partials and tangent planes, explain why partials alone do not give differentiability, propagate sensitivities through Jacobians, and check a gradient numerically.`,
  narration:
    "How do you know a gradient is right? There are three ways to compute derivatives, with different roles. Symbolic differentiation produces formulas. Automatic differentiation, used by machine learning libraries, applies the chain rule to the operations in a program and gives exact derivatives of the code. Finite differences evaluate the function at nearby points; they are approximate, but need nothing except the function, which makes them the standard check. Step size matters. On the left, the error of estimating zero point seven five, the labour partial, shrinks as the step shrinks, until rounding takes over, because subtracting two nearly equal numbers loses digits. The forward difference does best near ten to the minus seven, the central one near ten to the minus four. The code compares the least squares gradient with central differences: they agree to about ten to the minus nine. Drop the factor two and the check catches it at once. That completes the chapter. You can interpret partials and tangent planes, propagate sensitivities through Jacobians, and check a derivative. Next, Jacobians also explain how coordinate changes affect accumulated quantities.",
}
