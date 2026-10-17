import type { Scene } from '@graphlearning/flow'
import { feasible } from './feasible'
import { hessian } from './hessian'
import { critical } from './critical'
import { secondOrder } from './second-order'
import { convex } from './convex'
import { existence } from './existence'
import { formulation } from './formulation'
import { quadratic } from './quadratic'

// Chapter 9 — one scene per section.
export const optimalityScenes: Scene[] = [feasible, hessian, critical, secondOrder, convex, existence, formulation, quadratic]
