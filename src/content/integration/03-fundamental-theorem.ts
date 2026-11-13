import type { Section } from '../types'

export const fundamentalTheoremSection: Section = {
  id: 'fundamental-theorem',
  title: 'Accumulation functions and the fundamental theorem',
  scene: 'ftc',
  focus: 'theorem',
  narration:
    "Riemann sums are slow. The fundamental theorem of calculus turns integration into the reverse of differentiation. Let the upper limit move, and define the accumulation function: the amount accumulated from the start up to x. For the workshop, that is the energy used so far, E of t. The first part of the theorem says that the rate at which the accumulation grows is the current value of the integrand. Energy so far grows at exactly the current power. On the left, the green energy curve is steepest in the middle of the shift, exactly where the blue power curve peaks. The second part turns that into a method. If we know any function whose derivative is f, the integral is just that function's change from a to b. Here the energy has a formula, and evaluating it at eight gives thirty four point one nine kilowatt hours, the same as the Riemann sums approached. The intermediate values match numerical integration too. One condition: where the integrand jumps, the accumulation has a corner. Next, finding antiderivatives.",
}
