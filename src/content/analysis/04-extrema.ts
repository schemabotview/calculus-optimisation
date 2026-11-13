import type { Section } from '../types'

export const extremaSection: Section = {
  id: 'local-global-extrema',
  title: 'Local and global extrema, endpoints and nonsmooth candidates',
  scene: 'extrema',
  focus: 'compare',
  narration:
    "Is a local minimum the best answer? Not necessarily. A local extremum only beats its immediate neighbours. A global one beats every point in the domain. On a closed interval, a continuous function is guaranteed to have both a global maximum and a global minimum, and they can only occur in three kinds of place: where the derivative is zero, where it fails to exist, and at the endpoints. So the method is to list every candidate, evaluate the function at each, and compare. For x cubed minus three x on the interval from minus two to two and a half, the candidates are the two stationary points and the two endpoints. Their values are minus two, two, minus two, and about eight point one. The global maximum is at the right endpoint, where the derivative is not zero at all. The local maximum at minus one is beaten. And the global minimum of minus two is reached twice. Setting the derivative to zero alone would miss the endpoint answer completely. Next, a workshop problem with a real limit.",
}
