// The recurring workshop model, shared by every chapter so the example reads the same each time it
// returns. All quantities are continuous idealisations of a real shift; chapter 1 says so explicitly
// (integer chair counts against a continuous production curve).

/** Length of a shift, in hours. */
export const SHIFT_HOURS = 8

/** Production rate, chairs per hour. */
export const RATE = 3

/** Chairs finished by time t (hours): the integer count. */
export const chairsCount = (t: number) => Math.floor(RATE * t + 1e-9)

/** The continuous approximation to the count: q(t) = 3t chairs. */
export const chairsModel = (t: number) => RATE * t

/** Machine temperature during warm-up, °C: T(t) = 20 + 60 (1 − e^(−t/2)). */
export const warmUp = (t: number) => 20 + 60 * (1 - Math.exp(-t / 2))

/** Its rate of change, °C per hour: T′(t) = 30 e^(−t/2) (chain rule, chapter 2). */
export const warmUpRate = (t: number) => 30 * Math.exp(-t / 2)

/**
 * Cost per chair, £, at production rate q chairs/hour: overhead 40/q spread over the chairs, machine
 * wear 0.5q that rises with speed, and £2 of material. Unconstrained minimum at q = √80 ≈ 8.94.
 */
export const costPerChair = (q: number) => 40 / q + 0.5 * q + 2
export const costSlope = (q: number) => -40 / (q * q) + 0.5
export const CAPACITY = 8

/** Machine power draw over the shift, kW: P(t) = 3 + 2 sin(πt/8), peaking mid-shift at 5 kW. */
export const power = (t: number) => 3 + 2 * Math.sin((Math.PI * t) / 8)

/** Energy used by time t, kWh: E(t) = ∫₀ᵗ P = 3t + (16/π)(1 − cos(πt/8)). E(8) = 24 + 32/π ≈ 34.19. */
export const energy = (t: number) => 3 * t + (16 / Math.PI) * (1 - Math.cos((Math.PI * t) / 8))

/**
 * Chairs per shift from L labour hours and M machine hours: Q(L, M) = 2√(LM). The standard shift is
 * (16, 9), giving 24 chairs: the 3 per hour of chapter 1. ∇Q = (√(M/L), √(L/M)) = (0.75, 4/3) there.
 */
export const output = (L: number, M: number) => 2 * Math.sqrt(L * M)
export const SHIFT_L = 16
export const SHIFT_M = 9
/** The level set Q = c, as M against L: M = c²/(4L). */
export const outputLevel = (c: number, L0: number, L1: number, n = 80): [number, number][] =>
  Array.from({ length: n + 1 }, (_, i) => {
    const L = L0 + ((L1 - L0) * i) / n
    return [L, (c * c) / (4 * L)]
  })
