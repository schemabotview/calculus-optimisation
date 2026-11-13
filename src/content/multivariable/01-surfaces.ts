import type { Section } from '../types'

export const surfacesSection: Section = {
  id: 'surfaces',
  title: 'Vector inputs, surfaces, level sets and continuity',
  scene: 'surfaces',
  focus: 'levels',
  narration:
    "This chapter asks what a derivative means when a quantity depends on several inputs at once, and why checking one coordinate at a time is not enough. Start with the workshop. Chairs per shift depend on two inputs: labour hours and machine hours. A simple model is Q equals two times the square root of L times M. The standard shift, sixteen labour hours and nine machine hours, makes twenty four chairs, the same three an hour as in chapter one. The graph of Q is a surface over the input plane, but a flat picture is often clearer: the level sets. Each curve on the left is every mix of inputs that makes the same number of chairs. Along the orange curve, output is twenty four: sixteen and nine, or thirty six labour hours with only four machine hours. Crossing from curve to curve changes the output. The table samples the surface on a grid. Continuity carries over with one important change. In two dimensions a point can be approached from infinitely many directions, and the limit must agree along all of them. Next, what happens when it does not.",
}
