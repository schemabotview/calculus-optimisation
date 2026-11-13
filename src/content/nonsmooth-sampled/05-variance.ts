import type { Section } from '../types'

export const varianceSection: Section = {
  id: 'variance',
  title: 'Sampling assumptions, unbiasedness and variance',
  scene: 'variance',
  focus: 'samplers',
  narration:
    "When is a noisy gradient good enough? The key property is unbiasedness: averaged over the random choice of sample, the sampled gradient equals the true one. At w equal to five, the eight hourly gradients are six, six, four, four, four, four, two, two. Pick an hour uniformly at random and the average is four, exactly the full gradient. But any single draw can be off: the variance is two, so a typical draw misses by about one point four. Averaging a batch of b hours divides the variance by b, so the typical error falls like one over root b. On the left, the curve is that formula, and the orange points come from ten thousand simulated batches at each size: four hours gives an error of about zero point seven, thirty two hours about zero point two five. Now the caution in the last row of the table. Suppose you sample only morning hours, when the machine is still warming up and output is lower. The average gradient becomes five, not four. That is bias, and unlike variance, no batch size removes it. Unbiasedness is a property of the sampler, not of the formula. Next, step sizes when gradients are noisy.",
}
