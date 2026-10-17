import type { Course } from '../types'
import { byPartsSection } from './01-by-parts'
import { partialFractionsSection } from './02-partial-fractions'
import { trigSubSection } from './03-trig-sub'
import { improperSection } from './04-improper'
import { comparisonSection } from './05-comparison'
import { quadratureSection } from './06-quadrature'
import { adaptiveSection } from './07-adaptive'

// Chapter 5 — Integration Methods and Numerical Accuracy.
export const integrationMethods: Course = {
  id: 'integration-methods',
  title: 'Integration methods and numerical accuracy',
  sections: [
    byPartsSection,
    partialFractionsSection,
    trigSubSection,
    improperSection,
    comparisonSection,
    quadratureSection,
    adaptiveSection,
  ],
}
