import type { SceneModel } from '@graphlearning/graphl-flow'
import type { BoardScene } from './frame'
import { limitsScenes } from './limits'
import { derivativesScenes } from './derivatives'
import { analysisScenes } from './analysis'
import { integrationScenes } from './integration'
import { integrationMethodsScenes } from './integration-methods'
import { seriesScenes } from './series'
import { multivariableScenes } from './multivariable'
import { multipleIntegralsScenes } from './multiple-integrals'
import { optimalityScenes } from './optimality'
import { numericalOptimisationScenes } from './numerical-optimisation'
import { constrainedScenes } from './constrained'
import { nonsmoothSampledScenes } from './nonsmooth-sampled'

// Scene registry. Sections reference scenes by id; scenes are grouped by course (one folder each,
// mirroring src/content). Ids are GLOBAL: merging two chapters that both define an id would let the
// later one silently replace the earlier (calculus-optimisation lost a chain-rule scene that way), so
// a duplicate throws.
const CHAPTERS: BoardScene[][] = [limitsScenes, derivativesScenes, analysisScenes, integrationScenes, integrationMethodsScenes, seriesScenes, multivariableScenes, multipleIntegralsScenes, optimalityScenes, numericalOptimisationScenes, constrainedScenes, nonsmoothSampledScenes]

export const SCENES: Record<string, SceneModel> = {}
for (const chapter of CHAPTERS)
  for (const scene of chapter) {
    if (SCENES[scene.id]) throw new Error(`scene id '${scene.id}' is defined twice`)
    SCENES[scene.id] = scene
  }

export function getScene(id: string): SceneModel | undefined {
  return SCENES[id]
}
