import type { Section } from '../types'

export const chainRuleSection: Section = {
  id: 'chain-rule',
  title: 'The chain rule and nested dependencies',
  scene: 'chain-rule',
  focus: 'trace',
  narration:
    "How fast is the machine heating up two hours into its warm-up? The temperature formula nests one function inside another, and the chain rule handles nesting. Follow the dependencies. Time t determines u, which is minus t over two. The value u determines w, which is e to the u. And w determines the temperature, twenty plus sixty times one minus w. Each link has its own local rate: minus one half, then e to the u, then minus sixty. The chain rule says the overall rate is their product. At two hours, u is minus one, so the middle factor is e to the minus one, about zero point three seven. Multiplying the three factors gives about eleven degrees per hour. Two checks make this trustworthy. The units multiply through to degrees per hour. And a finite difference, nudging time by a thousandth of an hour, gives eleven point zero three, agreeing to the precision we expect. The common error is evaluating an inner derivative at the wrong point. Next, the derivatives of exponentials, logarithms and trigonometric functions.",
}
