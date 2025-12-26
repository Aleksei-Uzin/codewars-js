/**
 * Loose Change
 * https://www.codewars.com/kata/5571f712ddf00b54420000ee/train/javascript
 *
 */

const looseChange = cents => {
  cents = ~~Math.max(0, cents)

  const Quarters = ~~(cents / 25)
  cents %= 25
  const Dimes = ~~(cents / 10)
  cents %= 10
  const Nickels = ~~(cents / 5)
  cents %= 5
  const Pennies = cents

  return { Nickels, Pennies, Dimes, Quarters }
}
