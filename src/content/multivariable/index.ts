import type { Course } from '../types'
import { surfacesSection } from './01-surfaces'
import { pathsSection } from './02-paths'
import { mixedSection } from './03-mixed'
import { tangentPlaneSection } from './04-tangent-plane'
import { gradientSection } from './05-gradient'
import { chainRuleSection } from './06-chain-rule'
import { leastSquaresSection } from './07-least-squares'
import { checkingSection } from './08-checking'

// Chapter 7 — Multivariable Differentiation.
export const multivariable: Course = {
  id: 'multivariable',
  title: 'Multivariable differentiation',
  sections: [
    surfacesSection,
    pathsSection,
    mixedSection,
    tangentPlaneSection,
    gradientSection,
    chainRuleSection,
    leastSquaresSection,
    checkingSection,
  ],
}
