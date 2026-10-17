import type { Section } from '../types'

export const surfacesSection: Section = {
  id: 'surfaces',
  title: 'Vector inputs, surfaces, level sets and continuity',
  scene: 'surfaces',
  focus: 'levels',
  slide: `## Functions of several inputs

A function f: ℝ² → ℝ takes a **vector input** (x, y). Its graph is a surface; its **level sets** f = c are curves in the input plane.

### The workshop's output
- L labour hours and M machine hours make Q chairs
- Model: Q(L, M) = 2√(LM) chairs per shift
- The standard shift (16, 9) makes 24 chairs
- Level set Q = 24: every (L, M) with LM = 144

### Reading level sets
- Moving along a level set leaves the output unchanged
- Crossing curves changes it; close curves mean a steep surface
- Here, 36 labour hours with 4 machine hours also make 24

### Continuity
f is continuous at a point if f(x, y) → f(a, b) **however** (x, y) approaches (a, b). In two dimensions there are infinitely many directions of approach, not just two.`,
  narration:
    "This chapter asks what a derivative means when a quantity depends on several inputs at once, and why checking one coordinate at a time is not enough. Start with the workshop. Chairs per shift depend on two inputs: labour hours and machine hours. A simple model is Q equals two times the square root of L times M. The standard shift, sixteen labour hours and nine machine hours, makes twenty four chairs, the same three an hour as in chapter one. The graph of Q is a surface over the input plane, but a flat picture is often clearer: the level sets. Each curve on the left is every mix of inputs that makes the same number of chairs. Along the orange curve, output is twenty four: sixteen and nine, or thirty six labour hours with only four machine hours. Crossing from curve to curve changes the output. The table samples the surface on a grid. Continuity carries over with one important change. In two dimensions a point can be approached from infinitely many directions, and the limit must agree along all of them. Next, what happens when it does not.",
}
