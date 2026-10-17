import type { Section } from '../types'

export const functionsUnitsSection: Section = {
  id: 'functions-and-units',
  title: 'Functions, domains, units and continuous models',
  scene: 'functions-units',
  focus: 'model',
  slide: `## Functions as models

A **function** assigns exactly one output to each allowed input. A model needs three parts: a **rule**, a **domain**, and **units**.

### The workshop's production
- The real count of finished chairs is a staircase of whole numbers
- The model q(t) = 3t chairs is a straight line through that staircase
- Domain 0 ≤ t ≤ 8 hours: one shift, nothing outside it

### Why use the continuous model
- Calculus needs smooth inputs: rates and accumulations are defined on lines, not stairs
- Units carry through: q is in chairs, so its rate will be chairs per hour

### Watch out
The model says q(2.5) = 7.5 chairs. Half a chair is a fiction of the model, so state the idealisation before you use it.`,
  narration:
    "Calculus studies change and accumulation, and every calculation starts from a model. This chapter turns a changing system into functions with stated domains, units and assumptions, and sets up the limits that calculus is built on. A function assigns exactly one output to each allowed input. Take the workshop. During an eight-hour shift, finished chairs arrive one at a time, so the true count is a staircase of whole numbers. The model q of t equals three t replaces it with a straight line. That is an idealisation, and a useful one: rates and totals are easy to define on a line, and awkward on a staircase. Every model needs a domain, here from zero to eight hours, and units: hours in, chairs out. Then the rate will be chairs per hour. But the model also says that two and a half hours in, seven and a half chairs are finished. Half a chair is not real, so we state the idealisation up front. Next, the functions we will use most.",
}
