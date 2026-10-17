import type { Scene } from '@graphlearning/flow'
import { active } from './active'
import { lagrange } from './lagrange'
import { lagrangian } from './lagrangian'
import { kkt } from './kkt'
import { qualifications } from './qualifications'
import { duality } from './duality'
import { methods } from './methods'
import { sensitivity } from './sensitivity'

// Chapter 11 — one scene per section. region.ts is the shared feasible set, not a scene.
export const constrainedScenes: Scene[] = [active, lagrange, lagrangian, kkt, qualifications, duality, methods, sensitivity]
