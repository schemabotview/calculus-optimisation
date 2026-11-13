import type { Section } from '../types'

export const higherRelatedSection: Section = {
  id: 'higher-related',
  title: 'Higher derivatives and related rates',
  scene: 'higher-related',
  focus: 'table',
  narration:
    "What does the derivative of a derivative mean? Take position along a line, s of t equals t cubed minus six t squared plus nine t. Its derivative is velocity, three t squared minus twelve t plus nine, and the derivative of that is acceleration, six t minus twelve. The plot and the table read together. Velocity is zero at t equals one and t equals three, so the object stops and reverses at those moments. Acceleration changes sign at t equals two, which is where the velocity is lowest. Related rates use the same idea when several quantities change together. A spill spreads as a circle, so its area is pi r squared. Differentiate that relation with respect to time, and the chain rule gives the rate of change of area as two pi r times the rate of change of the radius. With a radius of four centimetres growing at half a centimetre per second, the area grows at four pi, about twelve and a half square centimetres per second. Always differentiate first, then substitute. Next, using a derivative to approximate.",
}
