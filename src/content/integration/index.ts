import type { Course } from '../types'
import { riemannSumsSection } from './01-riemann-sums'
import { definiteIntegralsSection } from './02-definite-integrals'
import { fundamentalTheoremSection } from './03-fundamental-theorem'
import { antiderivativesSection } from './04-antiderivatives'
import { substitutionSection } from './05-substitution'
import { netTotalSection } from './06-net-total'
import { averageValueSection } from './07-average-value'

// Chapter 4 — Integration and Accumulation.
export const integration: Course = {
  id: 'integration',
  title: 'Integration and accumulation',
  sections: [
    riemannSumsSection,
    definiteIntegralsSection,
    fundamentalTheoremSection,
    antiderivativesSection,
    substitutionSection,
    netTotalSection,
    averageValueSection,
  ],
}
