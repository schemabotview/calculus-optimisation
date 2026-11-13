import type { Edge, Group, SceneModel, SceneNode } from '@graphlearning/graphl-flow'

// The BOARD frame: every section of this repo, on graphl-flow's shared grid (1344 × 756 at a 1%
// margin, ≈ 2.8× at 4K — the same box python-expense-tracker's IDE frame and
// data-science-house-prices' notebook frame use, so cutting between frames never zooms):
//
//   figure (FIG_W × FRAME_H) | board (SIDE_W, fixed, `spread`)
//
// The figure is the old scene: the plot, and the table it is read with, stacked. The board is what
// the old slide said, as a few short blocks (an idea, the facts, a caution) — shell 1.x draws the
// scene alone, so a slide's facts live here now. The narration was recorded against the old
// layout (scene left, slide right) and says "on the left" for the picture; this frame keeps that
// true, so the 88 wavs stand.
//
// Both panes are fixed: check-render asserts every section is on ONE fit with each pane at the same
// pixels, so content that outgrows its pane fails the check instead of zooming the frame.
export const GAP = 10
export const FULL_W = 1344
export const FRAME_H = Math.round(FULL_W / (16 / 9))
export const SIDE_W = 434
export const FIG_W = FULL_W - SIDE_W - GAP
/** A plot as wide as the figure pane less its borders and padding. */
export const FIG_PLOT_W = FIG_W - 34
/** Half the figure, for two plots side by side (compact). */
export const HALF_PLOT_W = Math.floor((FIG_W - 34 - GAP) / 2)

export interface Board {
  /** The scene id sections name (global: src/scenes/index.ts throws on a duplicate). */
  id: string
  /** The figure pane's title: what the picture shows. */
  figure: string
  /** The plot, then the table it is read with (top to bottom), or a row of two compact plots. */
  diagram: SceneNode[]
  /** Edges between figure nodes (a derivation chain, A × q = b). Never into the board. */
  edges?: Edge[]
  /** The board pane's title: the section's idea in a few words. */
  idea: string
  /** What the slide said: two to four short blocks (see `fact`, `facts`, `caution`). */
  board: SceneNode[]
}

/** A scene as the registry holds it: the model, plus the id sections name it by. */
export type BoardScene = SceneModel & { id: string }

export function board({ id, figure, diagram, edges, idea, board }: Board): BoardScene {
  // A plot or table directly in the figure spans it, so the two read as one picture.
  const wide = diagram.map((n) => ((n.type === 'table' || n.type === 'plot') && n.w === undefined ? { ...n, w: FIG_PLOT_W } : n))
  const fig: Group = { type: 'group', id: 'figure', title: figure, tone: 'ingest', spread: true, w: FIG_W, minH: FRAME_H, children: wide }
  const side: Group = { type: 'group', id: 'board', title: idea, tone: 'store', spread: true, w: SIDE_W, minH: FRAME_H, children: board }
  return { id, dir: 'row', padding: 0.01, nodes: [fig, side], ...(edges?.length && { edges }) }
}

/** One statement: a definition or the section's rule, with an optional line under it. */
export const fact = (id: string, title: string, sub?: string): SceneNode => ({ type: 'item', id, title, ...(sub && { sub }) })

/** A heading and its short bullets (≤ 4, each ONE line: ~32 characters at graphl-flow's 15em item measure). */
export const facts = (id: string, title: string, bullets: string[]): SceneNode => ({ type: 'item', id, title, bullets })

/** The slide's "Watch out": a dashed callout in the warning tone. */
export const caution = (id: string, text: string): SceneNode => ({ type: 'note', id, text, tone: 'consume' })

/** Two compact plots side by side in the figure. */
export const pair = (id: string, a: SceneNode, b: SceneNode): SceneNode => ({ type: 'group', id, bare: true, dir: 'row', children: [a, b] })
