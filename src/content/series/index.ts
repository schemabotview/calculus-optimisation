import type { Course } from '../types'
import { sequencesSection } from './01-sequences'
import { partialSumsSection } from './02-partial-sums'
import { testsSection } from './03-tests'
import { alternatingSection } from './04-alternating'
import { taylorSection } from './05-taylor'
import { powerSeriesSection } from './06-power-series'
import { smoothnessSection } from './07-smoothness'

// Chapter 6 — Convergence and Taylor Models.
export const series: Course = {
  id: 'series',
  title: 'Convergence and Taylor models',
  sections: [
    sequencesSection,
    partialSumsSection,
    testsSection,
    alternatingSection,
    taylorSection,
    powerSeriesSection,
    smoothnessSection,
  ],
}
