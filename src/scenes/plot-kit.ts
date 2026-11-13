import type { PlotSeries, Table, Tone } from '@graphlearning/graphl-flow'

// Small builders for the plot series every chapter repeats. Everything here computes DATA (points in
// the axes' own units) — never a position on the canvas, which stays the engine's.
//
// Colour is identity, and it is a graphl-flow TONE, never a hex (a theme owns the shade: hex has no
// light-theme value). The ramp gives an untoned series blue, orange, violet, green in order; a vector
// that recurs — v, v moved head to tail, a copy of v — names its tone so every copy matches.
export type P = [number, number]
export type M2 = [[number, number], [number, number]]
/** The old engine's name for a data point, kept so ported scene files read the same. */
export type PlotPoint = P

/** The identities this repo's plots reuse. `consume` (red) is the engine's warning hue: residuals. */
export const TONE = { u: 'ingest', v: 'infra', w: 'serve', sum: 'store', residual: 'consume', point: 'neutral' } as const satisfies Record<string, Tone>

/** M · p for a 2×2 matrix. */
export const apply = (m: M2, p: P): P => [m[0][0] * p[0] + m[0][1] * p[1], m[1][0] * p[0] + m[1][1] * p[1]]

/** A solid vector with an arrowhead — the only way this repo draws a vector. */
export function arrow(to: P, label?: string, tone?: Tone, from: P = [0, 0], labelAt?: P): PlotSeries {
  return { kind: 'segment', from, to, arrow: true, dashed: false, ...(label && { label }), ...(tone && { tone }), ...(labelAt && { labelAt }) }
}

/** A dashed construction line (muted unless toned): a residual, a drop to an axis, a guide. */
export function guide(from: P, to: P, label?: string, labelAt?: P, tone?: Tone): PlotSeries {
  return { kind: 'segment', from, to, ...(label && { label }), ...(labelAt && { labelAt }), ...(tone && { tone }) }
}

/** One marked point (the old engine's `marker`): a single scatter dot with its label. */
export function point(at: P, label?: string, labelAt?: P, tone: Tone = TONE.point): PlotSeries {
  return { kind: 'scatter', points: [at], tone, ...(label && { label }), ...(labelAt && { labelAt }) }
}

/** The unit square, closed, as a polyline. */
export const UNIT_SQUARE: P[] = [[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]]

/** The image of a closed polyline under M. */
export const image = (m: M2, pts: P[]): P[] => pts.map((p) => apply(m, p))

/** A circle of radius r about c, sampled closed. */
export const circle = (r = 1, c: P = [0, 0], n = 72): P[] =>
  Array.from({ length: n + 1 }, (_, i) => {
    const a = (2 * Math.PI * i) / n
    return [c[0] + r * Math.cos(a), c[1] + r * Math.sin(a)]
  })

/** n+1 evenly spaced samples of f over [a, b]. */
export const sample = (a: number, b: number, n: number, f: (x: number) => number): P[] =>
  Array.from({ length: n + 1 }, (_, i) => {
    const x = a + ((b - a) * i) / n
    return [x, f(x)]
  })

/** The arc of radius r between two directions, for marking an angle. */
export const arc = (from: P, to: P, r: number, n = 24): P[] => {
  const a0 = Math.atan2(from[1], from[0]), a1 = Math.atan2(to[1], to[0])
  return Array.from({ length: n }, (_, i) => {
    const a = a0 + ((a1 - a0) * i) / (n - 1)
    return [r * Math.cos(a), r * Math.sin(a)]
  })
}

/** A number for a cell: a true minus sign, and no −0. */
export const num = (v: number | string) => (typeof v === 'number' ? String(Object.is(v, -0) ? 0 : v).replace('-', '−') : v)

/** Format a 2×2 or m×n matrix compactly for a table cell: [a b; c d]. */
export const fmt = (m: number[][]): string => '[' + m.map((r) => r.map(num).join(' ')).join('; ') + ']'

/**
 * An augmented matrix [A | b] as a table node. `rows` are full rows including the right-hand side;
 * `vars` names the unknowns. Row labels default to R1, R2, ….
 */
export function augmented(id: string, label: string, sub: string, rows: (number | string)[][], vars = ['x₁', 'x₂', 'x₃'], names?: string[]): Table {
  return {
    type: 'table',
    id,
    title: sub ? `${label}: ${sub}` : label,
    columns: ['row', ...vars.slice(0, rows[0].length - 1), '| b'],
    rows: rows.map((r, i) => ({ id: names?.[i] ?? `R${i + 1}`, cells: [names?.[i] ?? `R${i + 1}`, ...r.map(num)] })),
  }
}

/** The points of the line a·x + b·y = c across x ∈ [x0, x1] (b ≠ 0), or the vertical line x = c/a. */
export function lineEq(a: number, b: number, c: number, x0: number, x1: number, y0 = -100, y1 = 100): P[] {
  if (b === 0) return [[c / a, y0], [c / a, y1]]
  return [[x0, (c - a * x0) / b], [x1, (c - a * x1) / b]]
}

/** A plain matrix as a table node: one column per matrix column, rows labelled R1, R2, … */
export function matrixTable(id: string, label: string, sub: string, rows: (number | string)[][], cols?: string[]): Table {
  const n = rows[0].length
  return {
    type: 'table',
    id,
    title: sub ? `${label}: ${sub}` : label,
    columns: ['row', ...(cols ?? Array.from({ length: n }, (_, j) => `c${j + 1}`))],
    rows: rows.map((r, i) => ({ id: `R${i + 1}`, cells: [`R${i + 1}`, ...r.map(num)] })),
  }
}

/** A muted grey series: a reference curve or a ghost of the shape before the map. */
export const GREY = 'neutral' as const
