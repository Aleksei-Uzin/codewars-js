/**
 * Alphabet wars - nuclear strike
 * https://www.codewars.com/kata/59437bd7d8c9438fb5000004/train/javascript
 *
 * https://stackoverflow.com/questions/9219072/how-to-let-regex-ignore-everything-between-brackets
 *
 */

const alphabetWar = battlefield => {
  if (!battlefield.includes('#')) return battlefield.replace(/\[|\]/g, '')

  const regex = /(?<before>[^\[\]]*)\[(?<inside>[^\]]+)\](?<after>[^\[\]]*)/
  let res = ''
  let match = []

  while ((match = battlefield.match(regex)) !== null) {
    const { before, inside, after } = match.groups
    const strikes = (before.concat(after).match(/#/g) || []).length
    battlefield = battlefield.slice(before.length + inside.length + 2)

    if (strikes < 2) res += inside
  }

  return res
}
