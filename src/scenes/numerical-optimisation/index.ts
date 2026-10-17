import type { Scene } from '@graphlearning/flow'
import { descentScene } from './descent'
import { stepSize } from './step-size'
import { backtracking } from './backtracking'
import { newton } from './newton'
import { conditioning } from './conditioning'
import { floating } from './floating'
import { stagnation } from './stagnation'
import { trace } from './trace'

// Chapter 10 — one scene per section. bowl.ts is the shared test problem, not a scene.
export const numericalOptimisationScenes: Scene[] = [descentScene, stepSize, backtracking, newton, conditioning, floating, stagnation, trace]
