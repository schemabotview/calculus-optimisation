import type { Section } from '../types'

export const varianceSection: Section = {
  id: 'variance',
  title: 'Sampling assumptions, unbiasedness and variance',
  scene: 'variance',
  focus: 'samplers',
  slide: `## Unbiased, but noisy

A sampled gradient g is **unbiased** if its average over the sampling equals the full gradient: **E[g] = ∇f(w)**. That depends on how you sample.

### At w = 5
- Hourly gradients 2(5 − yᵢ): 6, 6, 4, 4, 4, 4, 2, 2
- Uniform sampling: mean 4 = f′(5), unbiased
- Variance 2, so one sample is typically off by 1.41
- Check: f′(5) = 2(5 − 3) = 4

### Batches
- A batch of b uniform draws has variance 2/b
- RMS error √(2/b): 0.71 at b = 4, 0.25 at b = 32
- 10 000 simulated draws per b match the formula
- Doubling b halves the variance, not the error

### Watch out
Sampling only the morning hours gives mean gradient 5, not 4: a **bias** that no batch size removes. Unbiasedness is an assumption about the sampler, and it must be checked against how the data are actually drawn.`,
  narration:
    "When is a noisy gradient good enough? The key property is unbiasedness: averaged over the random choice of sample, the sampled gradient equals the true one. At w equal to five, the eight hourly gradients are six, six, four, four, four, four, two, two. Pick an hour uniformly at random and the average is four, exactly the full gradient. But any single draw can be off: the variance is two, so a typical draw misses by about one point four. Averaging a batch of b hours divides the variance by b, so the typical error falls like one over root b. On the left, the curve is that formula, and the orange points come from ten thousand simulated batches at each size: four hours gives an error of about zero point seven, thirty two hours about zero point two five. Now the caution in the last row of the table. Suppose you sample only morning hours, when the machine is still warming up and output is lower. The average gradient becomes five, not four. That is bias, and unlike variance, no batch size removes it. Unbiasedness is a property of the sampler, not of the formula. Next, step sizes when gradients are noisy.",
}
