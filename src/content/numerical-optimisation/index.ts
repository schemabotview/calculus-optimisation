import type { Course } from '../types'
import { descentSection } from './01-descent'
import { stepSizeSection } from './02-step-size'
import { backtrackingSection } from './03-backtracking'
import { newtonSection } from './04-newton'
import { conditioningSection } from './05-conditioning'
import { floatingSection } from './06-floating'
import { stagnationSection } from './07-stagnation'
import { traceSection } from './08-trace'

// Chapter 10 — Numerical Optimisation and Reliability.
export const numericalOptimisation: Course = {
  id: 'numerical-optimisation',
  title: 'Numerical optimisation and reliability',
  sections: [
    descentSection,
    stepSizeSection,
    backtrackingSection,
    newtonSection,
    conditioningSection,
    floatingSection,
    stagnationSection,
    traceSection,
  ],
}
