import type { Section } from '../types'

export const lhopitalSection: Section = {
  id: 'lhopital',
  title: "L'Hôpital's rule and its applicability",
  scene: 'lhopital',
  focus: 'cases',
  narration:
    "Some limits resist simple algebra. L'Hôpital's rule handles many of them. If a limit has the form zero over zero, or infinity over infinity, you may replace the top and bottom by their derivatives, as long as the new limit exists. Sine x over x near zero becomes cos x over one, which tends to one. The graph on the left shows that limit: the function is undefined at zero, but its values head straight to one. Some limits need the rule twice. E to the x minus one minus x, all over x squared, gives one half after two applications, and computing it at a thousandth gives zero point five zero zero two. Now the misuses. Applied to a limit that is not an indeterminate form, the rule gives wrong answers: x plus one over x plus two at zero is one half by substitution, but the rule would say one. And sometimes the derivative ratio has no limit, while the original does. Then the rule is simply silent. Always check the form first. Next, solving the equations that optimisation produces.",
}
