// Content guard — silent failures that build green and break only on screen or in the recording.
// It reads the REAL registries (scripts/registry.mjs bundles src/content and src/scenes), so it sees
// exactly what renders:
//
//   1. A section is scene-only and narrated, and its scene exists (shell 1.x has no slide panel: a
//      `slide` left on a section is text no viewer will ever see).
//   2. Node ids are unique within a scene (graphl-flow resolves focus by id).
//   3. Every scene is a BOARD frame (src/scenes/frame.ts): a figure pane and a board pane, nothing
//      else at the top level — check-render holds them to one fit and one layout.
//   4. The board says what the slide said, SHORT: 2–4 blocks; an item's bullets ≤ MAX_BULLETS (each
//      must fit ONE line, which check-render measures); a caution ≤ NOTE_CHARS. The narration
//      carries the rest.
//   5. A plot has at most four untoned series: the engine's ramp has four hues and then repeats, so
//      a fifth silently matches the first (colour is identity here).
//   6. Once a course has narration audio, every section of it has its wav — a missing or renamed one
//      plays silence and records a silent segment, with no error anywhere.
//
// What renders is checked by scripts/check-render.mjs: focus landing, overflow, fit, panes, plot text.
//
// Run: npm run check
import { existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { loadRegistry, nodesOf } from './registry.mjs'

const { COURSES, SCENES } = await loadRegistry()
const problems = []
const MAX_BLOCKS = 4, MIN_BLOCKS = 2, MAX_BULLETS = 4, NOTE_CHARS = 200

for (const course of Object.values(COURSES))
  for (const section of course.sections) {
    const at = `${course.id}-${section.id}`
    if ('slide' in section) problems.push(`${at}  has a slide — move its facts into the scene's board`)
    if (!section.narration?.trim()) problems.push(`${at}  has no narration`)
    if (!SCENES[section.scene]) problems.push(`${at}  scene '${section.scene}' is not registered`)
  }

for (const [id, scene] of Object.entries(SCENES)) {
  const all = nodesOf(scene)
  const seen = new Set()
  for (const { node } of all) {
    if (seen.has(node.id)) problems.push(`scene ${id}  node id '${node.id}' is used twice`)
    seen.add(node.id)
  }
  const top = scene.nodes.map((n) => n.id).join(',')
  if (top !== 'figure,board') { problems.push(`scene ${id}  is not a board frame (top level: ${top}) — build it with frame.ts board()`); continue }
  const blocks = scene.nodes[1].children
  if (blocks.length < MIN_BLOCKS || blocks.length > MAX_BLOCKS) problems.push(`scene ${id}  the board has ${blocks.length} blocks (${MIN_BLOCKS}–${MAX_BLOCKS})`)
  for (const b of blocks) {
    if (b.bullets?.length > MAX_BULLETS) problems.push(`scene ${id}  '${b.id}' has ${b.bullets.length} bullets (≤ ${MAX_BULLETS})`)
    if (b.type === 'note' && b.text.length > NOTE_CHARS) problems.push(`scene ${id}  '${b.id}' caution is ${b.text.length} chars (≤ ${NOTE_CHARS})`)
  }
  for (const { node } of all.filter(({ node }) => node.type === 'plot')) {
    const ramp = node.series.filter((s) => !s.tone && !(s.kind === 'segment' && !s.arrow))
    if (ramp.length > 4) problems.push(`scene ${id}  plot '${node.id}' has ${ramp.length} untoned series — the ramp repeats after four: give them tones`)
  }
}

for (const course of Object.values(COURSES)) {
  const dir = join('public', 'audio', course.id)
  if (!existsSync(dir) || !readdirSync(dir).some((f) => f.endsWith('.wav'))) continue
  for (const s of course.sections)
    if (!existsSync(join(dir, `${s.id}.wav`))) problems.push(`${course.id}-${s.id}  has no ${dir}/${s.id}.wav`)
}

if (problems.length) {
  console.error(`✗ ${problems.length} content problem(s):`)
  for (const p of problems) console.error('  ' + p)
  process.exit(1)
}
const n = Object.values(COURSES).reduce((k, c) => k + c.sections.length, 0)
console.log(`✓ ${n} sections, ${Object.keys(SCENES).length} scenes: scene-only, board frames, narrated`)
