import type { Scene } from '@graphlearning/flow'
import { secants } from './secants'
import { differentiability } from './differentiability'
import { rules } from './rules'
import { chainRule } from './chain-rule'
import { transcendental } from './transcendental'
import { implicit } from './implicit'
import { higherRelated } from './higher-related'
import { linearisation } from './linearisation'

// Chapter 2 — one scene per section.
export const derivativesScenes: Scene[] = [secants, differentiability, rules, chainRule, transcendental, implicit, higherRelated, linearisation]
