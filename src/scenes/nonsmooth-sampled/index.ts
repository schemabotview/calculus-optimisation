import type { Scene } from '@graphlearning/flow'
import { subgradients } from './subgradients'
import { subgradientSteps } from './subgradient-steps'
import { prox } from './prox'
import { sampled } from './sampled'
import { variance } from './variance'
import { schedules } from './schedules'
import { selection } from './selection'

// Chapter 12 — one scene per section.
export const nonsmoothSampledScenes: Scene[] = [subgradients, subgradientSteps, prox, sampled, variance, schedules, selection]
