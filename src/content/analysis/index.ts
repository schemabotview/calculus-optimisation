import type { Course } from '../types'
import { meanValueSection } from './01-mean-value'
import { monotonicitySection } from './02-monotonicity'
import { concavitySection } from './03-concavity'
import { extremaSection } from './04-extrema'
import { boundedCostSection } from './05-bounded-cost'
import { lhopitalSection } from './06-lhopital'
import { rootFindingSection } from './07-root-finding'

// Chapter 3 — Single-Variable Analysis and Optimisation.
export const analysis: Course = {
  id: 'analysis',
  title: 'Single-variable analysis and optimisation',
  sections: [meanValueSection, monotonicitySection, concavitySection, extremaSection, boundedCostSection, lhopitalSection, rootFindingSection],
}
