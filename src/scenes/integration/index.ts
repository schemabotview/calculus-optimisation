import type { Scene } from '@graphlearning/flow'
import { riemann } from './riemann'
import { signedArea } from './signed-area'
import { ftc } from './ftc'
import { antiderivatives } from './antiderivatives'
import { substitution } from './substitution'
import { netTotal } from './net-total'
import { averageValue } from './average-value'

// Chapter 4 — one scene per section.
export const integrationScenes: Scene[] = [riemann, signedArea, ftc, antiderivatives, substitution, netTotal, averageValue]
