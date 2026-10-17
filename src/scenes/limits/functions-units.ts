import type { Scene } from '@graphlearning/flow'
import { chairsCount, chairsModel, SHIFT_HOURS } from '../workshop'

// §1.1 — chairs finished during a shift. The count is a staircase of whole chairs; the model q(t) = 3t
// is a continuous line through it. Calculus works on the line, so its assumptions must be stated.
const steps: [number, number][] = []
for (let k = 0; k < 3 * SHIFT_HOURS; k++) {
  const t0 = k / 3
  const t1 = (k + 1) / 3
  steps.push([t0, chairsCount(t0)], [t1, chairsCount(t0)], [t1, chairsCount(t1)])
}

export const functionsUnits: Scene = {
  id: 'functions-units',
  title: 'A function with a domain and units',
  flow: 'TB',
  nodes: [
    {
      id: 'shift',
      kind: 'plot',
      label: 'Chairs finished during an 8-hour shift',
      sub: 'staircase: the integer count. Line: the continuous model q(t) = 3t',
      plot: {
        x: { min: 0, max: 8.5, step: 1, label: 't (hours)' },
        y: { min: 0, max: 26, step: 4, label: 'chairs' },
        series: [
          { kind: 'line', points: steps, label: 'count: whole chairs', labelAt: [4.6, 9.2], color: '#f59e0b' },
          { kind: 'line', points: [[0, chairsModel(0)], [8, chairsModel(8)]], label: 'model q(t) = 3t', labelAt: [1.2, 9.5], color: '#60a5fa' },
        ],
      },
    },
    {
      id: 'model',
      kind: 'table',
      label: 'What the model says, and what it assumes',
      sub: 'a function = a rule + a domain + units',
      headers: ['part', 'here', 'assumption'],
      values: [
        ['rule', 'q(t) = 3t', 'steady rate of 3 chairs per hour'],
        ['domain', '0 ≤ t ≤ 8 hours', 'one shift; q(9) means nothing here'],
        ['units', 'input hours, output chairs', 'q′(t) will be chairs per hour'],
        ['idealisation', 'q(2.5) = 7.5 chairs', 'half a chair is a modelling fiction'],
      ],
    },
  ],
  edges: [],
}
