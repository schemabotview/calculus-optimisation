import type { Scene } from '@graphlearning/flow'
import { functionsUnits } from './functions-units'
import { elementary } from './elementary'
import { limitsLaws } from './limits-laws'
import { limitsInfinity } from './limits-infinity'
import { continuity } from './continuity'
import { existence } from './existence'
import { epsilonDelta } from './epsilon-delta'

// Chapter 1 — one scene per section.
export const limitsScenes: Scene[] = [functionsUnits, elementary, limitsLaws, limitsInfinity, continuity, existence, epsilonDelta]
