import type { PlotSeries } from '@graphlearning/graphl-flow'
import type { P } from '../plot-kit'

// The chapter's test problem: f(x, y) = ½(x² + 10y²), condition number 10, minimiser (0, 0), started at
// (3, 1.5). Shared by §10.1–10.3 and §10.7 so the same bowl appears every time.
export const KAPPA = 10
export const START: P = [3, 1.5]
export const f = ([x, y]: P) => 0.5 * (x * x + KAPPA * y * y)
export const grad = ([x, y]: P): P => [x, KAPPA * y]
/** Gradient descent with a fixed step α, n steps from START. */
export const descent = (alpha: number, n: number): P[] => {
  const out: P[] = [START]
  for (let k = 0; k < n; k++) {
    const [x, y] = out[k]
    const [gx, gy] = grad([x, y])
    out.push([x - alpha * gx, y - alpha * gy])
  }
  return out
}
/** Level sets f = c, as grey ellipses. */
export const levels = (cs: number[]): PlotSeries[] => cs.map((c) => ({
  kind: 'line' as const,
  tone: 'neutral',
  points: Array.from({ length: 97 }, (_, i): P => {
    const t = (2 * Math.PI * i) / 96
    return [Math.sqrt(2 * c) * Math.cos(t), Math.sqrt((2 * c) / KAPPA) * Math.sin(t)]
  }),
}))
export const AXES = {
  equal: true,
  x: { min: -4, max: 4, step: 1 },
  y: { min: -2.4, max: 2.4, step: 0.5 },
}
