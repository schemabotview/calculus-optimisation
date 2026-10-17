import type { Course } from '../types'
import { subgradientsSection } from './01-subgradients'
import { subgradientStepsSection } from './02-subgradient-steps'
import { proxSection } from './03-prox'
import { sampledSection } from './04-sampled'
import { varianceSection } from './05-variance'
import { schedulesSection } from './06-schedules'
import { selectionSection } from './07-selection'

// Chapter 12 — Nonsmooth and Sampled Objectives.
export const nonsmoothSampled: Course = {
  id: 'nonsmooth-sampled',
  title: 'Nonsmooth and sampled objectives',
  sections: [
    subgradientsSection,
    subgradientStepsSection,
    proxSection,
    sampledSection,
    varianceSection,
    schedulesSection,
    selectionSection,
  ],
}
