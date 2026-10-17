import type { Course } from '../types'
import { functionsUnitsSection } from './01-functions-units'
import { elementaryFunctionsSection } from './02-elementary-functions'
import { limitsSection } from './03-limits'
import { limitsAtInfinitySection } from './04-limits-at-infinity'
import { continuitySection } from './05-continuity'
import { existenceTheoremsSection } from './06-existence-theorems'
import { epsilonDeltaSection } from './07-epsilon-delta'

// Chapter 1 — Functions, Limits, and Continuity.
export const limits: Course = {
  id: 'limits',
  title: 'Functions, limits and continuity',
  sections: [
    functionsUnitsSection,
    elementaryFunctionsSection,
    limitsSection,
    limitsAtInfinitySection,
    continuitySection,
    existenceTheoremsSection,
    epsilonDeltaSection,
  ],
}
