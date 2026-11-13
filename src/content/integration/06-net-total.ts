import type { Section } from '../types'

export const netTotalSection: Section = {
  id: 'net-versus-total',
  title: 'Net change versus total accumulated magnitude',
  scene: 'net-total',
  focus: 'compare',
  narration:
    "Does an integral tell you how far something went, or where it ended up? Those are different questions. Take an object moving along a line with velocity t squared minus four t plus three. It moves forward for the first second, backward for the next two, then forward again. Integrating the velocity adds the forward pieces and subtracts the backward one. The result, four thirds of a metre, is the displacement: where the object finishes, relative to where it started. Integrating the absolute value of the velocity counts every piece as positive. The three pieces are each four thirds, so the distance travelled is four metres. To compute a total, find where the rate changes sign, integrate each piece separately, and add the sizes. In the workshop the same distinction appears with energy. If power can flow back into the supply, net energy and total energy drawn are different numbers, and a bill depends on which one is meant. Averages split the same way: an average velocity of one third, against an average speed of one. Next, averages in general.",
}
