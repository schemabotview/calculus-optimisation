import type { Section } from '../types'

export const traceSection: Section = {
  id: 'trace',
  title: 'Integrated objective, gradient and feasibility diagnostic trace',
  scene: 'trace',
  focus: 'code',
  slide: `## A diagnostic trace

A credible answer reports **objective, gradient and feasibility** at each iteration, and then asks how the answer depends on the model.

### Damped Newton on the cost per chair
- c(q) = F/q + 0.5q + 2, F = £40, from q = 3
- Full steps throughout; capacity 12 respected
- |c′| falls 3 × 10⁻², 1.4 × 10⁻³, 2.8 × 10⁻⁶, 10⁻¹¹: quadratic
- Result: q* = 8.9443, £10.944 per chair

### Modelling evidence
- Overhead ±10% moves q* to 8.49 or 9.38
- At q = 8.94 with F = £44: £11.39 vs best £11.38
- Flat optimum: robust decision, fragile digits

### Chapter outcome
You can explain update rules and their safeguards, read convergence claims under their hypotheses, and support a computed answer with mathematical, numerical and modelling evidence.`,
  narration:
    "What does a trustworthy answer look like? It comes with a trace, and with a check on the model itself. Here is damped Newton on the workshop's cost per chair, with forty pounds of overhead, starting at three chairs an hour, and a new machine's capacity of twelve. The code prints, for each iteration, the rate, the cost, the size of the derivative, the step length used, and whether the point is feasible. Every step is a full step, every point is within capacity, and the derivative falls from three hundredths to one thousandth to three millionths to ten to the minus eleven: the doubling of digits that marks Newton's quadratic convergence. That is mathematical and numerical evidence. Now the modelling evidence. The overhead is an estimate. Move it ten percent either way, the grey curves, and the best rate shifts to eight point five or nine point four. But the cost curve is flat near its minimum: running at eight point nine four when the overhead is really forty four pounds costs about one penny more per chair. The decision is robust; the third digit of q is not. That completes the chapter. Next, constraints change both valid directions and what counts as a certificate.",
}
