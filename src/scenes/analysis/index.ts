import type { BoardScene } from '../frame'
import { meanValue } from './mean-value'
import { monotonicity } from './monotonicity'
import { concavity } from './concavity'
import { extrema } from './extrema'
import { boundedCost } from './bounded-cost'
import { lhopital } from './lhopital'
import { rootFinding } from './root-finding'

// Chapter 3 — one scene per section.
export const analysisScenes: BoardScene[] = [meanValue, monotonicity, concavity, extrema, boundedCost, lhopital, rootFinding]
