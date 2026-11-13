import type { Section } from '../types'

export const chainRuleSection: Section = {
  id: 'chain-rule',
  title: 'Jacobians, shapes and the multivariable chain rule',
  scene: 'jacobian-chain',
  focus: 'shapes',
  narration:
    "How does a change in one quantity ripple through a chain of models? For maps between several variables, the derivative is the Jacobian: the matrix of every output's partial derivative with respect to every input. A map from n inputs to m outputs has an m by n Jacobian. The chain rule then says: to differentiate a composition, multiply the Jacobians, in order. The shapes must chain, and checking them catches most mistakes. Take overtime at the workshop. Each overtime hour adds two labour hours, two people, and one machine hour. That path has a two by one Jacobian, two over one. The output's gradient is one by two. Multiply them: zero point seven five times two, plus one point three three times one, gives two point eight three chairs per overtime hour. On the left, the orange velocity arrow and the pink gradient arrow are the two factors, and the dots cross the level curves at about that rate. A finite difference agrees to four digits. The last row of the table previews chapter eight: the polar coordinate map has a two by two Jacobian whose determinant is r. Next, gradients of common formulas.",
}
