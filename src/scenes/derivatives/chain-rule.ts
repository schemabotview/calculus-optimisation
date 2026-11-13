import { board, caution, fact, facts } from '../frame'

// §2.4 — the warm-up T(t) = 20 + 60(1 − e^u) with u = −t/2, traced as a dependency chain. At t = 2 the
// local derivatives multiply to 30 e^(−1) ≈ 11.04 °C/h; a finite difference (h = 0.001) gives 11.03.
export const chainRule = board({
  id: 'chain-rule',
  figure: 'The chain rule follows the dependencies',
  diagram: [
    {
      type: 'group',
      id: 'chain',
      title: 'T depends on t through u',
      children: [
        { type: 'item', id: 'time', title: 'time t', sub: 'hours; here t = 2', icon: 'clock', tone: 'source' },
        { type: 'item', id: 'inner', title: 'u = −t/2', sub: 'du/dt = −1/2; u = −1', tone: 'ingest' },
        { type: 'item', id: 'outer', title: 'w = e^u', sub: 'dw/du = e^u ≈ 0.368', icon: 'zap', tone: 'ingest' },
        { type: 'item', id: 'temp', title: 'T = 20 + 60(1 − w)', sub: 'dT/dw = −60; T ≈ 57.9 °C', icon: 'gauge', tone: 'store' },
      ]
    },
    {
      type: 'table',
      id: 'trace',
      title: 'dT/dt = (dT/dw)(dw/du)(du/dt): at t = 2; units multiply through',
      columns: ['factor', 'value', 'units'],
      rows: [
        ['du/dt', '−1/2', '1/h'],
        ['dw/du', 'e^(−1) ≈ 0.368', '—'],
        ['dT/dw', '−60', '°C'],
        ['product', '30 e^(−1) ≈ 11.04', '°C per hour'],
        ['check: (T(2.001) − T(2))/0.001', '≈ 11.03', 'finite difference'],
      ]
    },
  ],
  edges: [
    { from: 'time', to: 'inner', label: '× (−1/2)' },
    { from: 'inner', to: 'outer', label: '× 0.368' },
    { from: 'outer', to: 'temp', label: '× (−60)' }
  ],
  idea: 'The chain rule and nested dependencies',
  board: [
    fact('b-rule', 'dy/dx = (dy/du)(du/dx)', 'rates multiply along the chain of dependencies'),
    facts('b-1', 'The warm-up curve', ['T = 20 + 60(1 − w), w = e^u', 'at t = 2: −1/2, 0.368, −60', 'dT/dt ≈ 11.04 °C per hour']),
    facts('b-2', 'Why it is trustworthy', ['units multiply to °C/h', 'finite difference: 11.03']),
    caution('b-watch', 'Evaluate each local derivative at the current inner value: here dw/du is e^u at u = −1, not at u = 0.'),
  ]
})
