import type { Course } from '../types'
import { activeSection } from './01-active'
import { lagrangeSection } from './02-lagrange'
import { lagrangianSection } from './03-lagrangian'
import { kktSection } from './04-kkt'
import { qualificationsSection } from './05-qualifications'
import { dualitySection } from './06-duality'
import { methodsSection } from './07-methods'
import { sensitivitySection } from './08-sensitivity'

// Chapter 11 — Constrained Optimisation and Duality.
export const constrained: Course = {
  id: 'constrained',
  title: 'Constrained optimisation and duality',
  sections: [
    activeSection,
    lagrangeSection,
    lagrangianSection,
    kktSection,
    qualificationsSection,
    dualitySection,
    methodsSection,
    sensitivitySection,
  ],
}
