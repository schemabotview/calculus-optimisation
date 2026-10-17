import type { Scene } from '@graphlearning/flow'
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

// Scene registry. Sections reference scenes by id; scenes are grouped by course (one folder each,
// mirroring src/content). Ids are globally unique across courses, so the flat lookup below is
// unambiguous. Courses are added here as each is authored.
const ALL: Scene[] = [...limitsScenes, ...derivativesScenes, ...analysisScenes, ...integrationScenes, ...integrationMethodsScenes, ...seriesScenes, ...multivariableScenes, ...multipleIntegralsScenes, ...optimalityScenes, ...numericalOptimisationScenes, ...constrainedScenes]

export const SCENES: Record<string, Scene> = Object.fromEntries(ALL.map((s) => [s.id, s]))

export function getScene(id: string): Scene | undefined {
  return SCENES[id]
}
