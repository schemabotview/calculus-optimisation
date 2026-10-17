import type { Section } from '../types'

export const selectionSection: Section = {
  id: 'selection',
  title: 'Integrated selection of smooth, constrained or nonsmooth reasoning',
  scene: 'selection',
  focus: 'workshop',
  slide: `## Choosing the reasoning

Before choosing an algorithm, read the problem's **structure**: smoothness, constraints, convexity, and whether f is a sum over data.

### Questions to ask first
- Is f differentiable, or does it have kinks?
- Are there constraints, and which will be active?
- Is the problem convex, so local means global?
- Is f an average over many terms?

### What the structure decides
- Smooth, small: Newton or BFGS, gradient checked
- Constrained: KKT conditions, multipliers as prices
- Kinks: subgradients, prox, or an epigraph
- Large sums: sampled gradients with a decaying step

### Chapter outcome
You can explain why nonsmooth and sampled objectives need different update reasoning, carry out an elementary proximal step, and name the assumptions behind a stochastic claim.`,
  narration:
    "Faced with a new optimisation problem, where do you start? Not with an algorithm, but with its structure. Is the objective differentiable, or does it have kinks? Are there constraints, and which are likely to be active? Is the problem convex, so that a local answer is global? Is the objective an average over many data points? The answers choose the reasoning. Smooth, small problems suit Newton or quasi Newton methods, with a gradient check first. Constraints call for the KKT conditions, with multipliers read as prices. Kinks call for subgradients, proximal steps, or an epigraph reformulation that removes them. Large sums call for sampled gradients with a decaying step. The table collects the workshop problems from this course, and the structure decided the method every time: Newton for the best rate, a KKT certificate for the machine limit, the normal equations and a linear program for the two fits, and stochastic steps for the hourly rate. That completes the chapter and the course. Continue with unfamiliar examples and reasoned implementation practice, and use the companion courses for specialist and operational depth.",
}
