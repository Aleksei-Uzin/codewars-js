/**
 * Party People
 * https://www.codewars.com/kata/65013fc50038a68939098dcf/train/javascript
 *
 */

const partyPeople = party => {
  const sorted = party.sort((a, b) => b - a)
  let amount = sorted.length

  for (let n of sorted) {
    if (amount < n) amount -= 1
  }

  return amount
}
