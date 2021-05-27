/**
 * Calculates the success probability of a trial.
 *
 * Original code of this function from Hanno Müller-Kalthoff licensed under
 * CC-BY 3.0, see <http://dsa5.mueller-kalthoff.com/>.
 * Modified to use some more modern JavaScript features, converted to TypeScript
 * and other minor changes.
 *
 * @param property1 - First character property value of the trial.
 * @param property2 - Second character property value of the trial.
 * @param property3 - Third character property value of the trial.
 * @param skillValue - Value of the skill/spell the trial is for.
 * @param mod - Property modification value (positive or negative).
 * @param qualityLevel - Quality level that should be obtained.
 * @returns Probability of success.
 */
export function probability(
  property1: number,
  property2: number,
  property3: number,
  skillValue: number,
  mod: number,
  qualityLevel: number
): number {
  let successes = 0
  property1 += mod
  property2 += mod
  property3 += mod
  for (let x = 1; x < 21; ++x) {
    for (let y = 1; y < 21; ++y) {
      for (let z = 1; z < 21; ++z) {
        let success = false
        let p = 0
        if (qualityLevel < 2) {
          p = skillValue
        } else {
          p = skillValue - (qualityLevel * 3 - 2)
        }

        // Check whether the trial is even possible (property values > 0).
        if (p >= 0 && property1 > 0 && property2 > 0 && property3 > 0) {
          // Masterly.
          if ((x === 1 && (y === 1 || z === 1)) || (y === 1 && z === 1)) {
            success = true
          }
          // Slip.
          else if (
            (x === 20 && (y === 20 || z === 20)) ||
            (y === 20 && z === 20)
          ) {
            success = false
          }
          // Normal throw.
          else if (p === 0) {
            success = x <= property1 && y <= property2 && z <= property3
          } else {
            if (x > property1) {
              p = p - (x - property1)
            }

            if (y > property2) {
              p = p - (y - property2)
            }

            if (z > property3) {
              p = p - (z - property3)
            }

            success = p > -1
          }
        }
        // Trial is impossible.
        else {
          success = false
        }
        // Add to the number of successful scenarios.
        if (success) {
          ++successes
        }
      }
    }
  }
  return successes / 8000
}
