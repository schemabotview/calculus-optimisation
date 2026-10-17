import type { Section } from '../types'

export const tripleSection: Section = {
  id: 'triple',
  title: 'Triple integrals, mass and density',
  scene: 'triple',
  focus: 'mass',
  slide: `## Triple integrals

For a solid with density ρ(x, y, z) in kg/m³, the **mass** is ∫∫∫ ρ dV. The limits describe the solid, one variable inside another.

### A tetrahedral offcut
- The solid x, y, z ≥ 0 with x + y + z ≤ 1 (metres)
- Limits: x from 0 to 1, y from 0 to 1 − x, z from 0 to 1 − x − y
- Volume ∫∫∫ 1 dV = 1/6 m³

### Mass, sliced by height
- Density 500(1 + z) kg/m³: heavier near the top
- The slice at height z is a triangle of area (1 − z)²/2
- Mass = ∫₀¹ 500(1 + z)(1 − z)²/2 dz = **104.17 kg**
- Uniform density 500 would give 83.3 kg

### Centre of mass
z̄ = ∫∫∫ z ρ dV / mass = 0.280 m, above the uniform solid's 0.250 m: the extra density near the top pulls it up.`,
  narration:
    "How do you find the mass of a solid whose density varies? Add density times volume over tiny boxes, and take the limit: a triple integral. The limits describe the solid as nested inequalities, as in the plane. Take a tetrahedral offcut: the corner of a cube cut off by the plane x plus y plus z equals one, in metres. x runs from zero to one; for each x, y runs up to one minus x; and for each of those, z runs up to one minus x minus y. Its volume is one sixth of a cubic metre. Suppose the density is five hundred times one plus z, so the material is denser higher up. A good way to see the integral is by slices. At height z the solid's cross section is a triangle of area one minus z squared over two. Multiply by the density at that height, and the curve on the left is mass per metre of height. Its area is the mass, one hundred and four kilograms, against eighty three for uniform density. The centre of mass sits at zero point two eight metres, higher than for the uniform solid. Next, changing coordinates.",
}
