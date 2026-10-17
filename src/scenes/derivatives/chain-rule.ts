import type { Scene } from '@graphlearning/flow'

// §2.4 — the warm-up T(t) = 20 + 60(1 − e^u) with u = −t/2, traced as a dependency chain. At t = 2 the
// local derivatives multiply to 30 e^(−1) ≈ 11.04 °C/h; a finite difference (h = 0.001) gives 11.03.
export const chainRule: Scene = {
  id: 'chain-rule',
  title: 'The chain rule follows the dependencies',
  flow: 'LR',
  nodes: [
    {
      id: 'chain',
      label: 'T depends on t through u',
      pattern: 'group',
      flow: 'TB',
      children: [
        { id: 'time', label: 'time t', sub: 'hours; here t = 2', pattern: 'user', icon: 'clock' },
        { id: 'inner', label: 'u = −t/2', sub: 'du/dt = −1/2; u = −1', pattern: 'service', icon: 'sigma' },
        { id: 'outer', label: 'w = e^u', sub: 'dw/du = e^u ≈ 0.368', pattern: 'service', icon: 'zap' },
        { id: 'temp', label: 'T = 20 + 60(1 − w)', sub: 'dT/dw = −60; T ≈ 57.9 °C', pattern: 'storage', icon: 'gauge' },
      ],
      edges: [
        { source: 'time', target: 'inner', label: '× (−1/2)' },
        { source: 'inner', target: 'outer', label: '× 0.368' },
        { source: 'outer', target: 'temp', label: '× (−60)' },
      ],
    },
    {
      id: 'trace',
      kind: 'table',
      label: 'dT/dt = (dT/dw)(dw/du)(du/dt)',
      sub: 'at t = 2; units multiply through',
      headers: ['factor', 'value', 'units'],
      values: [
        ['du/dt', '−1/2', '1/h'],
        ['dw/du', 'e^(−1) ≈ 0.368', '—'],
        ['dT/dw', '−60', '°C'],
        ['product', '30 e^(−1) ≈ 11.04', '°C per hour'],
        ['check: (T(2.001) − T(2))/0.001', '≈ 11.03', 'finite difference'],
      ],
    },
  ],
  edges: [],
}
