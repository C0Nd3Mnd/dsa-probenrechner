function isThrowSuccessful(
  throw1,
  throw2,
  throw3,
  property1,
  property2,
  property3,
  skillValue
) {
  const trials = [
    {
      property: property1,
      throw: throw1
    },
    {
      property: property2,
      throw: throw2
    },
    {
      property: property3,
      throw: throw3
    }
  ]

  // Bloopers fail instantly.
  if (
    (trials[0].throw === 20 && trials[1].throw === 20) ||
    (trials[0].throw === 20 && trials[2].throw === 20) ||
    (trials[1].throw === 20 && trials[2].throw === 20)
  ) {
    return false
  }

  let remainingSkillValue = skillValue

  // Calculate required compensation.
  for (const trial of trials) {
    // Throw is within range, no compensation required for this trial.
    if (trial.throw <= trial.property) {
      continue
    }

    // Compensation is required.
    remainingSkillValue -= trial.throw - trial.property
  }

  // Too much compensation required.
  if (remainingSkillValue < 0) {
    return false
  }

  // Success. Calculate and return quality level.
  const qualityLevel = Math.ceil(remainingSkillValue / 3)

  if (qualityLevel > 6) {
    return 6
  }

  if (qualityLevel < 1) {
    return 1
  }

  return qualityLevel
}

export function probabilityaaa (
  property1,
  property2,
  property3,
  skillValue,
  mod,
  qualityLevel
) {
  property1 += mod
  property2 += mod
  property3 += mod

  let successes = 0

  for (let throw1 = 1; throw1 <= 20; ++throw1) {
    for (let throw2 = 1; throw2 <= 20; ++throw2) {
      for (let throw3 = 1; throw3 <= 20; ++throw3) {
        const achievedQL = isThrowSuccessful(
          throw1, throw2, throw3, property1, property2, property3, skillValue
        )

        if (achievedQL >= qualityLevel) {
          ++successes
        }
      }
    }
  }

  return successes / 8000
}

// Original code of this function from Hanno Müller-Kalthoff licensed under
// CC-BY 3.0, see <http://dsa5.mueller-kalthoff.com/>.
// Modified to use some more modern JavaScript features and other minor changes.
export function probability(
  property1,
  property2,
  property3,
  skillValue,
  mod,
  qs
) {
  let successes = 0
  property1 += mod
  property2 += mod
  property3 += mod
  for (let x = 1; x < 21; ++x) {
    for (let y = 1; y < 21; ++y) {
      for (let z = 1; z < 21; ++z) {
        let success = false
        let p = 0
        if (qs < 2) {
          p = skillValue
        } else {
          p = skillValue - ((qs * 3) - 2)
        }
        // Probe grundsätzlich möglich
        if (p >= 0 && property1 > 0 && property2 > 0 && property3 > 0) {
          // Meisterlich
          if ((x === 1 && (y === 1 || z === 1)) || (y === 1 && z === 1)) {
            success = true
          }
          // Patzer
          else if ((x === 20 && (y === 20 || z === 20)) || (y === 20 && z === 20)) {
            success = false
          }
          // normaler Wurf
          else {
            if (p === 0) {
              success = (x <= property1 && y <= property2 && z <= property3)
            } else {
              if (x > property1) p = p - (x - property1)
              if (y > property2) p = p - (y - property2)
              if (z > property3) p = p - (z - property3)
              success = (p >- 1);
            }
          }
        }
        // Probe grundsätzlich unmöglich
        else {
          success = false
        }
        // Ergebnis kumulieren
        if (success) {
          ++successes
        }
      }
    }
  }
  return successes / 8000
}
