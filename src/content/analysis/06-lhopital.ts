import type { Section } from '../types'

export const lhopitalSection: Section = {
  id: 'lhopital',
  title: "L'Hôpital's rule and its applicability",
  scene: 'lhopital',
  focus: 'cases',
  slide: `## L'Hôpital's rule

For a 0/0 or ∞/∞ form, **lim f/g = lim f′/g′**, provided the right-hand limit exists.

### Where it works
- sin x / x as x → 0: cos x / 1 → **1**
- (eˣ − 1 − x)/x² is 0/0 twice: apply the rule twice to get eˣ/2 → **1/2**
- Computed checks: 0.99998 at x = 0.01, and 0.50017 at x = 0.001
- Each use needs a fresh 0/0 or ∞/∞ check

### Where it does not
- (x + 1)/(x + 2) at 0 is not 0/0: the rule would give 1, but the limit is 1/2
- (x + sin x)/x as x → ∞: the derivative ratio 1 + cos x has no limit, yet the true limit is 1

### Watch out
Check the form **before** applying the rule. When f′/g′ has no limit, the rule tells you nothing at all.`,
  narration:
    "Some limits resist simple algebra. L'Hôpital's rule handles many of them. If a limit has the form zero over zero, or infinity over infinity, you may replace the top and bottom by their derivatives, as long as the new limit exists. Sine x over x near zero becomes cos x over one, which tends to one. The graph on the left shows that limit: the function is undefined at zero, but its values head straight to one. Some limits need the rule twice. E to the x minus one minus x, all over x squared, gives one half after two applications, and computing it at a thousandth gives zero point five zero zero two. Now the misuses. Applied to a limit that is not an indeterminate form, the rule gives wrong answers: x plus one over x plus two at zero is one half by substitution, but the rule would say one. And sometimes the derivative ratio has no limit, while the original does. Then the rule is simply silent. Always check the form first. Next, solving the equations that optimisation produces.",
}
