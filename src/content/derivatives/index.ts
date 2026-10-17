import type { Course } from '../types'
import { differenceQuotients } from './01-difference-quotients'
import { differentiabilitySection } from './02-differentiability'
import { rulesSection } from './03-rules'
import { chainRuleSection } from './04-chain-rule'
import { transcendentalSection } from './05-transcendental'
import { implicitParametric } from './06-implicit-parametric'
import { higherRelatedSection } from './07-higher-related'
import { linearisationSection } from './08-linearisation'

// Chapter 2 — Derivatives and Differentiation.
export const derivatives: Course = {
  id: 'derivatives',
  title: 'Derivatives and differentiation',
  sections: [
    differenceQuotients,
    differentiabilitySection,
    rulesSection,
    chainRuleSection,
    transcendentalSection,
    implicitParametric,
    higherRelatedSection,
    linearisationSection,
  ],
}
