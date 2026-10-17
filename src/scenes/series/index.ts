import type { Scene } from '@graphlearning/flow'
import { iteration } from './iteration'
import { partialSums } from './partial-sums'
import { tests } from './tests'
import { alternating } from './alternating'
import { taylor } from './taylor'
import { powerSeries } from './power-series'
import { smooth } from './smooth'

// Chapter 6 — one scene per section.
export const seriesScenes: Scene[] = [iteration, partialSums, tests, alternating, taylor, powerSeries, smooth]
