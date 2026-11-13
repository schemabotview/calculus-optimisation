import type { BoardScene } from '../frame'
import { byParts } from './by-parts'
import { partialFractions } from './partial-fractions'
import { trigSub } from './trig-sub'
import { improper } from './improper'
import { comparison } from './comparison'
import { quadrature } from './quadrature'
import { adaptive } from './adaptive'

// Chapter 5 — one scene per section.
export const integrationMethodsScenes: BoardScene[] = [byParts, partialFractions, trigSub, improper, comparison, quadrature, adaptive]
