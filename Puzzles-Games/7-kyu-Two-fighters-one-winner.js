/**
 * Two fighters, one winner.
 * https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/train/javascript
 *
 */

// Recursive solution
function declareWinner(fighter1, fighter2, firstAttacker) {
  if (fighter1.health > 0 && fighter2.health <= 0) return fighter1.name
  if (fighter2.health > 0 && fighter1.health <= 0) return fighter2.name

  let nextAttacker = null

  if (fighter1.name === firstAttacker) {
    fighter2.health -= fighter1.damagePerAttack
    nextAttacker = fighter2.name
  } else {
    fighter1.health -= fighter2.damagePerAttack
    nextAttacker = fighter1.name
  }

  return declareWinner(fighter1, fighter2, nextAttacker)
}

// Loop solution
function declareWinner(fighter1, fighter2, firstAttacker) {
  let attacker = firstAttacker === fighter1.name ? fighter1 : fighter2
  let defender = firstAttacker === fighter1.name ? fighter2 : fighter1

  while (fighter1.health > 0 && fighter2.health > 0) {
    defender.health -= attacker.damagePerAttack

    if (defender.health <= 0) return attacker.name
    else [attacker, defender] = [defender, attacker]
  }
}
