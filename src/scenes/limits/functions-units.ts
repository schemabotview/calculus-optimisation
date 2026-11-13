import { board, caution, fact, facts } from '../frame'
import { chairsCount, chairsModel, SHIFT_HOURS } from '../workshop'

// §1.1 — chairs finished during a shift. The count is a staircase of whole chairs; the model q(t) = 3t
// is a continuous line through it. Calculus works on the line, so its assumptions must be stated.
const steps: [
  number,
  number
][] = []
for (let k = 0; k < 3 * SHIFT_HOURS; k++) {
  const t0 = k / 3
  const t1 = (k + 1) / 3
  steps.push([t0, chairsCount(t0)], [t1, chairsCount(t0)], [t1, chairsCount(t1)])
}
export const functionsUnits = board({
  id: 'functions-units',
  figure: 'A function with a domain and units',
  diagram: [
    {
      type: 'plot',
      compact: true,
      id: 'shift',
      title: 'Chairs finished during an 8-hour shift',
      x: { min: 0, max: 8.5, step: 1, label: 't (hours)' },
      y: { min: 0, max: 26, step: 4, label: 'chairs' },
      series: [
        {
          kind: 'line',
          points: steps,
          label: 'count: whole chairs',
          labelAt: [4.6, 9.2],
          tone: 'infra'
        },
        {
          kind: 'line',
          points: [[0, chairsModel(0)], [8, chairsModel(8)]],
          label: 'model q(t) = 3t',
          labelAt: [1.2, 9.5],
          tone: 'ingest'
        },
      ]
    },
    {
      type: 'table',
      id: 'model',
      title: 'What the model says, and what it assumes: a function = a rule + a domain + units',
      columns: ['part', 'here', 'assumption'],
      rows: [
        ['rule', 'q(t) = 3t', 'steady rate of 3 chairs per hour'],
        ['domain', '0 ≤ t ≤ 8 hours', 'one shift; q(9) means nothing here'],
        ['units', 'input hours, output chairs', 'q′(t) will be chairs per hour'],
        ['idealisation', 'q(2.5) = 7.5 chairs', 'half a chair is a modelling fiction'],
      ]
    },
  ],
  idea: 'Functions, domains, units and continuous models',
  board: [
    fact('b-rule', 'A function: one output for each allowed input', 'a model needs a rule, a domain and units'),
    facts('b-1', 'The workshop’s production', ['real count: a staircase', 'model q(t) = 3t chairs', 'domain 0 ≤ t ≤ 8 hours']),
    facts('b-2', 'Why a continuous model', ['rates need lines, not stairs', 'q in chairs: rate in chairs/h']),
    caution('b-watch', 'The model says q(2.5) = 7.5 chairs. Half a chair is a fiction of the model, so state the idealisation before you use it.'),
  ]
})
