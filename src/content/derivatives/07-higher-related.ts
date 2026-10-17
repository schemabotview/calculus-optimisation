import type { Section } from '../types'

export const higherRelatedSection: Section = {
  id: 'higher-related',
  title: 'Higher derivatives and related rates',
  scene: 'higher-related',
  focus: 'table',
  slide: `## Higher derivatives and related rates

A derivative is itself a function, so it can be differentiated again.

### Position, velocity, acceleration
- s(t) = t³ − 6t² + 9t, so s′(t) = 3t² − 12t + 9 and s″(t) = 6t − 12
- s′ = 0 at t = 1 and t = 3: the object stops and turns around
- s″ changes sign at t = 2, where the velocity is lowest

### Related rates
- When linked quantities change in time, differentiate their relation with respect to t
- A spill's area A = πr² gives **dA/dt = 2πr dr/dt**
- At r = 4 cm with dr/dt = 0.5 cm/s: dA/dt = 4π ≈ 12.57 cm²/s

### Watch out
Substitute the current values only **after** differentiating. Fixing r = 4 first would make dA/dt look like 0.`,
  narration:
    "What does the derivative of a derivative mean? Take position along a line, s of t equals t cubed minus six t squared plus nine t. Its derivative is velocity, three t squared minus twelve t plus nine, and the derivative of that is acceleration, six t minus twelve. The plot and the table read together. Velocity is zero at t equals one and t equals three, so the object stops and reverses at those moments. Acceleration changes sign at t equals two, which is where the velocity is lowest. Related rates use the same idea when several quantities change together. A spill spreads as a circle, so its area is pi r squared. Differentiate that relation with respect to time, and the chain rule gives the rate of change of area as two pi r times the rate of change of the radius. With a radius of four centimetres growing at half a centimetre per second, the area grows at four pi, about twelve and a half square centimetres per second. Always differentiate first, then substitute. Next, using a derivative to approximate.",
}
