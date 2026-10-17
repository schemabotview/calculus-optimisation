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
