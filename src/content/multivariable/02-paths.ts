import type { Section } from '../types'

export const pathsSection: Section = {
  id: 'paths',
  title: 'Path-dependent limits and partial derivatives',
  scene: 'paths',
  focus: 'limits',
  narration:
    "How fast does output change if you add one input and hold the other fixed? That is a partial derivative: freeze every input but one, and differentiate in the one that moves. For the workshop at the standard shift, one more labour hour adds about three quarters of a chair, and one more machine hour adds about one and a third. Each is a slope along a single grid line of the input plane. Now the warning. Take x y over x squared plus y squared, defined as zero at the origin. Along any straight line y equals m x, the function is constant: zero along the axes, a half along the diagonal, minus a half along the other diagonal. So approaching the origin along different lines gives different values, and the function has no limit there. It is not even continuous. Yet along both axes it is identically zero, so both partial derivatives at the origin exist and equal zero. Partial derivatives look in exactly two directions, and they can be perfectly well behaved while the function misbehaves in every other direction. Next, partial derivatives of partial derivatives.",
}
