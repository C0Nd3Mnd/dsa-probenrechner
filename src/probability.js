// Original code of this file from Hanno Müller-Kalthoff licensed under CC-BY
// 3.0, see <http://dsa5.mueller-kalthoff.com/>.
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
  for (x = 1; x < 21; ++x) {
    for (y = 1; y < 21; ++y) {
      for (z = 1; z < 21; ++z) {
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
