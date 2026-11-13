import type { Section } from '../types'

export const schedulesSection: Section = {
  id: 'schedules',
  title: 'Stochastic schedules and noisy stopping evidence',
  scene: 'schedules',
  focus: 'evidence',
  narration:
    "If every gradient is noisy, can the iterates ever settle? Only if the step size shrinks. On the left, two runs from five, each using one randomly chosen hour per step. With a constant step of a tenth, the pink path reaches the neighbourhood of three quickly, and then keeps wandering, between about two point six and three point seven, because each step still jumps towards whichever hour was drawn. With a step of one over two times k plus one, each update makes w the running average of all the hours sampled so far, and the blue path settles. After two hundred steps it is at three point one, about two standard errors from the minimiser, which is what averaging two hundred noisy samples can deliver. Noise also changes what stopping evidence means. Near the end of the constant step run, the loss on a single sampled hour ranged from zero to two point eight. Even exactly at the minimiser, a sampled gradient is minus two, zero or two. So stop using a full or large batch check, or a fixed budget, and report which. Momentum and adaptive methods change the details; deep learning courses cover them. Next, choosing among all these tools.",
}
