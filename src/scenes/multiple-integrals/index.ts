import type { Scene } from '@graphlearning/flow'
import { doubleSums } from './double-sums'
import { iterated } from './iterated'
import { regions } from './regions'
import { triple } from './triple'
import { polar } from './polar'
import { improper2d } from './improper2d'

// Chapter 8 — one scene per section.
export const multipleIntegralsScenes: Scene[] = [doubleSums, iterated, regions, triple, polar, improper2d]
