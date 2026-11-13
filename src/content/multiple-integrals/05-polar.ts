import type { Section } from '../types'

export const polarSection: Section = {
  id: 'polar',
  title: 'Coordinate changes, polar coordinates and Jacobian factors',
  scene: 'polar',
  focus: 'grid',
  narration:
    "Why do polar coordinates come with an extra r? Because equal steps in r and theta do not make equal areas. On the left, two cells have the same radial width and the same angle, but the one further out is three times as large: its arc is longer. In general, when you change variables, the area of a small cell is multiplied by the absolute value of the Jacobian determinant of the map. For the polar map, x equals r cos theta, y equals r sin theta, that determinant is exactly r. So the area element is r d r d theta. This is the Jacobian from chapter seven, now measuring how a map stretches area. It pays off on discs. Integrating e to the minus x squared plus y squared over the unit disc is awkward in x and y. In polar coordinates it becomes e to the minus r squared, times r, and the r makes it an easy substitution: pi times one minus e to the minus one, about one point nine eight six. A Cartesian numerical integration agrees. Leave out the r and you get four point six nine, more than double. Next, integrals over the whole plane.",
}
