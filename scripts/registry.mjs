// The course and scene registries as real objects, for the checks. Both are bundled with esbuild —
// the same modules the app imports — so a check reads exactly what a frame renders, never a regex
// over source text (the template's check-content parsed ids out of files and could not see a scene
// built by a function, which every scene here now is: src/scenes/frame.ts `board`).
import { mkdir, rm } from 'node:fs/promises'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { build } from 'esbuild'

export async function loadRegistry() {
  const temp = join('node_modules', '.cache', 'calculus-optimisation-registry')
  await mkdir(temp, { recursive: true })
  const outfile = join(temp, 'registry.mjs')
  await build({
    stdin: { contents: `export { COURSES } from './src/content'\nexport { SCENES } from './src/scenes'`, resolveDir: process.cwd(), loader: 'ts' },
    outfile, bundle: true, platform: 'node', format: 'esm', logLevel: 'silent',
    external: ['react', 'react-dom', 'react/jsx-runtime', 'lucide-react', '@graphlearning/graphl-flow'],
  })
  try {
    return await import(pathToFileURL(join(process.cwd(), outfile)).href + `?t=${Date.now()}`)
  } finally {
    await rm(temp, { recursive: true, force: true })
  }
}

/** Every node of a scene, depth first, with the id of the top-level pane it sits in. */
export function nodesOf(scene) {
  const out = []
  const walk = (nodes, top) => nodes.forEach((n) => {
    out.push({ node: n, top: top ?? n.id })
    walk(n.children ?? [], top ?? n.id)
  })
  walk(scene.nodes)
  return out
}
