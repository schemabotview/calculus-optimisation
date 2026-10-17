import type { Scene } from '@graphlearning/flow'
import { surfaces } from './surfaces'
import { paths } from './paths'
import { mixed } from './mixed'
import { tangentPlane } from './tangent-plane'
import { gradient } from './gradient'
import { chainRule } from './chain-rule'
import { leastSquares } from './least-squares'
import { checking } from './checking'

// Chapter 7 — one scene per section.
export const multivariableScenes: Scene[] = [surfaces, paths, mixed, tangentPlane, gradient, chainRule, leastSquares, checking]
