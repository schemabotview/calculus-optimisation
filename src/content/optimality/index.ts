import type { Course } from '../types'
import { feasibleSection } from './01-feasible'
import { hessianSection } from './02-hessian'
import { criticalSection } from './03-critical'
import { secondOrderSection } from './04-second-order'
import { convexSection } from './05-convex'
import { existenceSection } from './06-existence'
import { formulationSection } from './07-formulation'
import { quadraticSection } from './08-quadratic'

// Chapter 9 — Curvature, Convexity, and Optimality.
export const optimality: Course = {
  id: 'optimality',
  title: 'Curvature, convexity and optimality',
  sections: [
    feasibleSection,
    hessianSection,
    criticalSection,
    secondOrderSection,
    convexSection,
    existenceSection,
    formulationSection,
    quadraticSection,
  ],
}
