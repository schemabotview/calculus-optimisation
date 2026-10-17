import type { Course } from '../types'
import { doubleIntegralsSection } from './01-double-integrals'
import { iteratedSection } from './02-iterated'
import { regionsSection } from './03-regions'
import { tripleSection } from './04-triple'
import { polarSection } from './05-polar'
import { improper2dSection } from './06-improper'

// Chapter 8 — Multiple Integration and Coordinate Changes.
export const multipleIntegrals: Course = {
  id: 'multiple-integrals',
  title: 'Multiple integration and coordinate changes',
  sections: [doubleIntegralsSection, iteratedSection, regionsSection, tripleSection, polarSection, improper2dSection],
}
