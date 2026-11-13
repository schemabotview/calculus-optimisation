import type { Section } from '../types'

export const powerSeriesSection: Section = {
  id: 'power-series',
  title: 'Power series, convergence domains and endpoints',
  scene: 'power-series',
  focus: 'endpoints',
  narration:
    "If a Taylor polynomial is good, is the infinite series even better? Only where it converges. A power series converges on an interval centred at its base point, with a radius set by the coefficients. Inside the radius it converges absolutely; outside it diverges; and the two endpoints must be checked separately. Take the series for the natural log of one plus x: x minus x squared over two plus x cubed over three, and so on. The ratio test gives the size of x, so the radius is one. On the left, the partial sums follow the log curve closely inside that radius, and swing wildly apart just past x equals one. The table makes it concrete. At a half, ten terms already give four correct digits. At one and a half, forty terms give minus a hundred and sixty thousand. At the endpoints, x equal to one gives the alternating harmonic series, which converges to log two, and x equal to minus one gives the negative harmonic series, which diverges. The function exists for all x above minus one; its series does not. Next, a deeper gap.",
}
