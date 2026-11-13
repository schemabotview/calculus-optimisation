import type { Section } from '../types'

export const improperSection: Section = {
  id: 'improper',
  title: 'Improper integrals and convergence',
  scene: 'improper',
  focus: 'truncated',
  narration:
    "Can an infinitely long region have finite area? Sometimes, and the definition decides when. An integral to infinity is not computed directly; it is the limit of ordinary integrals out to R, as R grows. If that limit is a finite number, the integral converges. Compare one over x squared and one over x on the left. They look similar: both start at one and sink toward zero. But the integral of one over x squared out to R is one minus one over R, which settles at one. The integral of one over x is the log of R, which keeps growing: two point three at ten, four point six at a hundred, six point nine at a thousand, and on without bound. One over x simply does not fall fast enough. The general rule is the p test: one over x to the p converges at infinity exactly when p is bigger than one, and near zero exactly when p is smaller than one. So one over root x has finite area two on zero to one. Next, how to decide convergence when there is no formula.",
}
