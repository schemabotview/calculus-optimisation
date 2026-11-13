// Render guard: opens every section the way the recorder does — a 3840×2160 viewport at
// deviceScaleFactor 1, `?capture=1#/<slug>`, waiting for graphl-flow's `data-fit="ready"` — and
// measures the real frame. Ported from python-expense-tracker's (itself a port of graphl-flow's own
// check), with its IDE rules replaced by this repo's board frame:
//
//   page        any console error or page error; a fit that moves after ready; content outside the frame
//   text        text leaving its node; anything overflowing; plot text clipped or COLLIDING (two vector
//               labels at one tip, ticks with no gap) or struck by a series line; body text under BODY_MIN_PX or an item icon
//               under ICON_MIN_PX in the 4K frame
//   edges       the same edge rules as the expense tracker's (few scenes here draw edges)
//   icons       an `icon` key that drew nothing (graphl-flow skips an unknown key silently)
//   focus       a section's `focus` that marked nothing
//   board       every section on the SAME fit and both panes at the same pixels (src/scenes/frame.ts
//               exists so a viewer's eye never looks for them); the board FILLED — its blocks span
//               ≥ BOARD_FILL of the pane's height (the slide's facts, not three lines at the top)
//
// A floor, not proof: a frame can pass every assertion and read badly. Capture and look.
//
// Run: npm run check (after check-content). Boots its own vite on :5189.
import { chromium } from 'playwright'
import { createServer } from 'vite'
import { loadRegistry, nodesOf } from './registry.mjs'

const PORT = 5189
const BODY_MIN_PX = +(process.env.BODY_MIN_PX ?? 24)
const ICON_MIN_PX = +(process.env.ICON_MIN_PX ?? 32)
const BOARD_FILL = +(process.env.BOARD_FILL ?? 1 / 2)

const { COURSES, SCENES } = await loadRegistry()
const sections = Object.values(COURSES).flatMap((c) => c.sections.map((s) => ({ slug: `${c.id}-${s.id}`, section: s, scene: SCENES[s.scene] })))
  // `node scripts/check-render.mjs vectors` checks only slugs starting with the given prefixes.
  .filter(({ slug }) => process.argv.length < 3 || process.argv.slice(2).some((p) => slug.startsWith(p)))

const problems = []
const frames = []
const server = await createServer({ server: { host: '127.0.0.1', port: PORT, strictPort: true }, logLevel: 'silent' })
await server.listen()
const browser = await chromium.launch()
try {
  let page
  for (const { slug, section, scene } of sections) {
    // A FRESH page per section. Hash navigation keeps the shell's one <Scene> instance alive
    // (ui-shell 1.0 renders it without a key), so the new scene is measured under the previous one's
    // fit and its data-fit can read "ready" before it has settled — a check must not inherit that.
    // A new TAB, not just a reload: one tab navigated ~80 times exhausted Chromium's per-page
    // resources (net::ERR_INSUFFICIENT_RESOURCES, then no data-fit) on whichever section came next.
    await page?.close()
    page = await browser.newPage({ viewport: { width: 3840, height: 2160 }, deviceScaleFactor: 1 })
    page.on('pageerror', (e) => problems.push(`${slug}  page error: ${e.message}`))
    page.on('console', (m) => m.type() === 'error' && problems.push(`${slug}  console error: ${m.text()}`))
    await page.goto(`http://127.0.0.1:${PORT}/?capture=1#/${slug}`)
    try {
      await page.waitForSelector('.gf-scene[data-fit="ready"]', { timeout: 20000 })
    } catch {
      problems.push(`${slug}  never reached data-fit="ready"`)
      continue
    }
    const before = await page.$eval('.gf-content', (c) => c.style.transform)
    await page.waitForTimeout(300)
    // Icons the scene asks for: an item draws its icon as a direct child, a group in its head.
    const icons = nodesOf(scene).filter(({ node }) => node.icon && (node.type === 'item' || node.type === 'group')).map(({ node }) => [node.id, node.type])
    const found = await page.evaluate(([limits, icons, focus, frame]) => {
      const out = []
      const c = document.querySelector('.gf-content'), box = c.getBoundingClientRect(), s = box.width / c.offsetWidth
      const R = (el) => { const r = el.getBoundingClientRect(); return { x: (r.left - box.left) / s, y: (r.top - box.top) / s, w: r.width / s, h: r.height / s } }
      const node = (id) => document.querySelector(`[data-id="${CSS.escape(id)}"]`)
      const all = [...document.querySelectorAll('.gf-scene [data-id]')]
      const LEAVES = '.gf-item, .gf-table, .gf-code, .gf-note, .gf-tree, .gf-plot'

      // --- text and overflow ------------------------------------------------------------------------
      for (const leaf of document.querySelectorAll(LEAVES)) {
        const lb = leaf.getBoundingClientRect()
        const walk = document.createTreeWalker(leaf, NodeFilter.SHOW_TEXT)
        while (walk.nextNode()) {
          const t = walk.currentNode
          if (!t.textContent.trim() || t.parentElement.closest('svg')) continue
          const range = document.createRange()
          range.selectNodeContents(t)
          for (const r of range.getClientRects())
            if (r.right > lb.right + 2 || r.bottom > lb.bottom + 2 || r.left < lb.left - 2 || r.top < lb.top - 2)
              out.push(`'${leaf.dataset.id}': text leaves its box — "${t.textContent.trim().slice(0, 50)}"`)
        }
      }
      for (const e of document.querySelectorAll('.gf-scene *')) {
        if (e instanceof SVGElement || getComputedStyle(e).display === 'inline') continue
        const id = e.closest('[data-id]')?.dataset.id ?? 'scene'
        if (e.scrollWidth > e.clientWidth + 1) out.push(`'${id}': content overflows sideways`)
        if (e.scrollHeight > e.clientHeight + 1 && getComputedStyle(e).overflowY !== 'visible') out.push(`'${id}': content overflows downwards`)
      }
      for (const svg of document.querySelectorAll('.gf-plot svg')) {
        const r = svg.getBoundingClientRect()
        for (const t of svg.querySelectorAll('text')) {
          const b = t.getBoundingClientRect()
          if (b.left < r.left - 0.5 || b.right > r.right + 0.5 || b.top < r.top - 0.5 || b.bottom > r.bottom + 0.5)
            out.push(`plot '${svg.closest('[data-id]').dataset.id}' clips text "${t.textContent}"`)
        }
      }
      // Plot text must not collide (data-science-house-prices' rule; graphl-flow 0.12's check has it too).
      for (const svg of document.querySelectorAll('.gf-plot svg')) {
        const boxes = [...svg.querySelectorAll('text')].filter((t) => t.textContent.trim()).map((t) => [t.textContent, t.getBoundingClientRect()])
        const gap = 4 * s
        const crash = boxes.find(([, a], i) => boxes.some(([, b], j) => j > i && (
          (a.left < b.right - 1 && b.left < a.right - 1 && a.top < b.bottom - 1 && b.top < a.bottom - 1) ||
          (Math.abs(a.top - b.top) < 2 && a.left < b.right + gap && b.left < a.right + gap))))
        if (crash) out.push(`plot '${svg.closest('[data-id]').dataset.id}': text "${crash[0]}" overlaps other text`)
      }
      // A plot label must not sit ON a stroke: a line through a label strikes it out, and the old
      // engine's labelAt positions, carried over, land on lines once \`equal\` widens an axis. Sampled:
      // a grid of points inside each label's box, tested against every series path's stroke.
      for (const svg of document.querySelectorAll('.gf-plot svg')) {
        const strokes = [...svg.querySelectorAll('g[clip-path] path, g[clip-path] line, g[clip-path] polygon')].filter((e) => e.getAttribute('stroke') && e.getAttribute('stroke') !== 'none')
        for (const t of svg.querySelectorAll('.gf-plot-labels text')) {
          const b = t.getBBox()
          // Every 2px of the glyph band (the box's middle 60%, where the ink is), against a 2.5px stroke.
          let hits = 0
          for (let x = b.x + 1; x < b.x + b.width - 1; x += 2) for (let y = b.y + b.height * 0.2; y < b.y + b.height * 0.8; y += 2)
            if (strokes.some((e) => e.isPointInStroke(new DOMPoint(x, y)))) hits++
          if (hits >= 3) out.push(`plot '${svg.closest('[data-id]').dataset.id}': label "${t.textContent}" sits on a line`)
        }
      }
      // A board bullet is ONE line: graphl-flow holds an item to a 15em measure (its legibility rule),
      // so a long bullet wraps, and a wrapped bullet reads as two. Measured, not counted: Plex Sans is
      // proportional, so a character limit would pass "mmm" and fail "iii".
      for (const li of document.querySelectorAll('[data-id="board"] .gf-bullets li')) {
        const lh = parseFloat(getComputedStyle(li).lineHeight)
        if (li.getBoundingClientRect().height / s > lh * 1.5) out.push(`'${li.closest('[data-id]').dataset.id}': bullet wraps — "${li.textContent.trim()}"`)
      }
      const BODY = '.gf-item-title, .gf-item-sub, .gf-bullets li, .gf-table td, .gf-line, .gf-tree-name, .gf-note, .gf-edge-label'
      const sizes = [...document.querySelectorAll(BODY)].filter((e) => e.textContent.trim()).map((e) => parseFloat(getComputedStyle(e).fontSize) * s)
      if (sizes.length && Math.min(...sizes) < limits.body) out.push(`body text ${Math.min(...sizes).toFixed(1)}px < ${limits.body}px at 4K`)
      const iconSizes = [...document.querySelectorAll('.gf-item > .gf-icon')].map((e) => e.getBoundingClientRect().height)
      if (iconSizes.length && Math.min(...iconSizes) < limits.icon) out.push(`item icon ${Math.min(...iconSizes).toFixed(1)}px < ${limits.icon}px at 4K`)
      const cr = c.getBoundingClientRect(), pr = document.querySelector('.gf-scene').getBoundingClientRect()
      if (cr.left < pr.left - 0.5 || cr.right > pr.right + 0.5 || cr.top < pr.top - 0.5 || cr.bottom > pr.bottom + 0.5) out.push('content outside the frame')

      // --- edges ----------------------------------------------------------------------------------------
      const onFace = (pt, r) => {
        const near = (a, b) => Math.abs(a - b) < 0.01, inY = pt.y >= r.y && pt.y <= r.y + r.h, inX = pt.x >= r.x && pt.x <= r.x + r.w
        return (near(pt.x, r.x - 4) && inY) || (near(pt.x, r.x + r.w + 4) && inY) || (near(pt.y, r.y - 4) && inX) || (near(pt.y, r.y + r.h + 4) && inX)
      }
      const paths = [...document.querySelectorAll('.gf-edge')]
      const pts = (e) => e.dataset.route.slice(2).split(' L ').map((q) => q.split(',').map(Number)).map(([x, y]) => ({ x, y }))
      const len = (ps) => ps.reduce((sum, q, i) => (i ? sum + Math.abs(q.x - ps[i - 1].x) + Math.abs(q.y - ps[i - 1].y) : 0), 0)
      for (const e of paths) {
        const ps = pts(e), a = node(e.dataset.from), z = node(e.dataset.to), tag = `edge ${e.dataset.from} → ${e.dataset.to}`
        if (!a || !z) continue // graphl-flow has already logged a console error for it
        if (!ps.every((q, i) => i === 0 || q.x === ps[i - 1].x || q.y === ps[i - 1].y)) out.push(`${tag} is not orthogonal`)
        if (!onFace(ps[0], R(a)) || !onFace(ps.at(-1), R(z))) out.push(`${tag} ends off its node's face`)
        if (len(ps) < 24 - 0.01) out.push(`${tag} is shorter than 24px`)
        // The DRAWN shaft (`d`, trimmed short of each head by graphl-flow's HEAD_TRIM) must run the same
        // way as the route at both ends. A final run shorter than the trim reverses it and the arrowhead
        // flips: three edges converging through one 32px gap left a 4px last run, and one arrow pointed
        // back up into the gap while every face assertion passed (graphl-flow 0.2, raised with the owner).
        const drawn = e.getAttribute('d').slice(2).split(' L ').map((q) => q.split(',').map(Number)).map(([x, y]) => ({ x, y }))
        const dir = (p0, p1) => [Math.sign(Math.round((p1.x - p0.x) * 100)), Math.sign(Math.round((p1.y - p0.y) * 100))].join()
        if (dir(ps.at(-2), ps.at(-1)) !== dir(drawn.at(-2), drawn.at(-1)) || dir(ps[0], ps[1]) !== dir(drawn[0], drawn[1]))
          out.push(`${tag} has a flipped arrowhead — its end run is shorter than the head`)
        for (const [el, pt] of [[a, ps[0]], [z, ps.at(-1)]]) {
          const t = el.tagName === 'TR' && el.closest('.gf-table')
          if (t) { const r = R(t); if (pt.x > r.x && pt.x < r.x + r.w) out.push(`${tag} ends inside table '${t.dataset.id}'`) }
        }
        for (const n of all) {
          if (n.contains(a) || n.contains(z) || a.contains(n) || z.contains(n)) continue
          const r = R(n)
          const cuts = ps.some((q, i) => i > 0 && (() => {
            const p0 = ps[i - 1], x0 = Math.min(p0.x, q.x), x1 = Math.max(p0.x, q.x), y0 = Math.min(p0.y, q.y), y1 = Math.max(p0.y, q.y)
            return x0 < r.x + r.w - 1 && x1 > r.x + 1 && y0 < r.y + r.h - 1 && y1 > r.y + 1
          })())
          if (cuts) out.push(`${tag} crosses '${n.dataset.id}'`)
        }
        // Nor through a group's HEADING — even an ancestor's. The node check above skips ancestors (an
        // edge must enter the group holding its end), and the pipeline map's first build ran its
        // sources arrow straight through "The pipeline" and its subtitle with every check green.
        for (const head of document.querySelectorAll('.gf-group-head, .gf-scene-title, .gf-scene-sub')) {
          const owner = head.closest('[data-id]')
          if (owner && (owner === a || owner === z)) continue
          const r = R(head)
          if (ps.some((q, i) => i > 0 && Math.min(ps[i - 1].x, q.x) < r.x + r.w - 1 && Math.max(ps[i - 1].x, q.x) > r.x + 1 && Math.min(ps[i - 1].y, q.y) < r.y + r.h - 1 && Math.max(ps[i - 1].y, q.y) > r.y + 1))
            out.push(`${tag} runs through the heading of '${owner?.dataset.id ?? 'the scene'}'`)
        }
      }
      // Arrowheads on ONE face sit >= 10px apart (graphl-flow 0.3's HEAD_LEN): ports spread within a
      // face, and several arrows into a one-line card land in one blob (graphl-flow's `check`).
      const heads = new Map()
      for (const e of paths) {
        const z = node(e.dataset.to), end = pts(e).at(-1)
        if (!z) continue
        const r = R(z), face = Math.abs(end.x - (r.x - 4)) < 0.01 ? 'l' : Math.abs(end.x - (r.x + r.w + 4)) < 0.01 ? 'r' : Math.abs(end.y - (r.y - 4)) < 0.01 ? 't' : 'b'
        const key = `${e.dataset.to}:${face}`
        heads.set(key, [...(heads.get(key) ?? []), face === 'l' || face === 'r' ? end.y : end.x])
      }
      for (const [key, at] of heads) {
        const sorted = [...at].sort((a, b) => a - b)
        if (sorted.some((v, i) => i && v - sorted[i - 1] < 10)) out.push(`arrowheads crowd on ${key.replace(':', "'s face ")} — aim the fan-in at a taller node`)
      }
      const ls = [...document.querySelectorAll('.gf-edge-label')]
      const hit = (a, b) => a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
      const lr = ls.map((l) => l.getBoundingClientRect())
      if (lr.some((a, i) => lr.some((b, j) => j > i && hit(a, b)))) out.push('edge labels overlap')
      if (lr.some((l) => [...document.querySelectorAll('.gf-item')].some((n) => hit(l, n.getBoundingClientRect())))) out.push('an edge label sits on a node')
      for (const l of ls) {
        const r = l.getBoundingClientRect()
        for (const e of paths.filter((e) => e.dataset.edge !== l.dataset.edge)) {
          const ps = pts(e).map((q) => ({ x: box.left + q.x * s, y: box.top + q.y * s }))
          if (ps.some((q, i) => i > 0 && Math.min(ps[i - 1].x, q.x) < r.right && Math.max(ps[i - 1].x, q.x) > r.left && Math.min(ps[i - 1].y, q.y) < r.bottom && Math.max(ps[i - 1].y, q.y) > r.top))
            out.push(`edge ${e.dataset.from} → ${e.dataset.to} runs under label "${l.textContent}"`)
        }
      }

      // --- icons and focus ------------------------------------------------------------------------------
      for (const [id, type] of icons) {
        const el = node(id)
        const drawn = el && (type === 'item' ? el.querySelector(':scope > .gf-icon') : el.querySelector(':scope > .gf-group-head .gf-icon'))
        if (!drawn) out.push(`'${id}': icon drew nothing — not a graphl-flow icon key`)
      }
      if (focus && document.querySelectorAll('[data-focus]').length !== 1) out.push(`focus '${focus}' marked ${document.querySelectorAll('[data-focus]').length} elements, not 1`)

      // --- the board frame -------------------------------------------------------------------------------
      let panes = null
      if (frame) {
        panes = Object.fromEntries(['figure', 'board'].map((p) => [p, node(p) && Object.values(R(node(p))).map((v) => Math.round(v))]))
        const pane = R(node('board'))
        const leaves = [...node('board').querySelectorAll(LEAVES)].map(R)
        const top = Math.min(...leaves.map((r) => r.y)), bottom = Math.max(...leaves.map((r) => r.y + r.h))
        const fill = leaves.length ? (bottom - top) / pane.h : 0
        if (fill < limits.fill) out.push(`the board's blocks span ${Math.round(fill * 100)}% of its height (< ${Math.round(limits.fill * 100)}%) — say more of what the slide said`)
      }
      return { problems: [...new Set(out)], panes }
    }, [{ body: BODY_MIN_PX, icon: ICON_MIN_PX, fill: BOARD_FILL }, icons, section.focus, scene.nodes.map((n) => n.id).join() === 'figure,board'])
    for (const f of found.problems) problems.push(`${slug}  ${f}`)
    const after = await page.$eval('.gf-content', (c) => c.style.transform)
    if (before !== after) problems.push(`${slug}  the fit moved after data-fit="ready"`)
    if (found.panes) frames.push({ slug, panes: found.panes, fit: before })
  }
} finally {
  await browser.close()
  await server.close()
}

// Every board frame on the first one's fit, both panes at its pixels.
const [ref] = frames
for (const { slug, panes, fit } of frames.slice(1)) {
  if (fit !== ref.fit) problems.push(`${slug}  fit ${fit} differs from ${ref.slug}'s ${ref.fit} — a pane outgrew the frame`)
  for (const pane of ['figure', 'board']) {
    const a = ref.panes[pane], b = panes[pane]
    if (!a || !b || a.some((v, i) => v !== b[i])) problems.push(`${slug}  the ${pane} pane is at [${b}], not [${a}] as in ${ref.slug}`)
  }
}

if (problems.length) {
  console.error(`\n✗ ${problems.length} render problem(s) at 3840×2160:`)
  for (const p of problems) console.error('  ' + p)
  process.exit(1)
}
console.log(`✓ ${sections.length} section(s) render cleanly at 3840×2160; ${frames.length} board frame(s) share one fit and one layout`)
