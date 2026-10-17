import type { PlotPoint, PlotSeries } from '@graphlearning/flow'
import { MACHINE_CAP, outputLevel } from '../workshop'

// The chapter's feasible set, shared by §11.1 and §11.4: Q ≥ 24 (LM ≥ 144) and M ≤ 8, drawn as its
// boundary inside the window L ≤ 40. Not a scene.
export const REGION: PlotPoint[] = [...outputLevel(24, 18, 40), [40, MACHINE_CAP], [18, MACHINE_CAP]]
export const costLine = (c: number): PlotPoint[] => [[0, c / 30], [c / 20, 0]]

export const regionSeries: PlotSeries[] = [
  { kind: 'line', points: outputLevel(24, 4.8, 40), color: '#4b5563' },
  { kind: 'line', points: [[0, MACHINE_CAP], [40, MACHINE_CAP]], color: '#4b5563' },
  { kind: 'line', points: REGION, label: 'feasible: Q ≥ 24 and M ≤ 8', labelAt: [27, 6.3], color: '#34d399' },
]

export const AXES = {
  equal: true,
  x: { min: 0, max: 40, step: 5, label: 'L, labour hours' },
  y: { min: 0, max: 24, step: 4, label: 'M, machine hours' },
}
