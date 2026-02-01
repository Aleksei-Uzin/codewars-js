/**
 * Player Contact Manager
 * https://www.codewars.com/kata/5b203de891c7469b520000b4/train/javascript
 *
 */

const playerManager = players => {
  const arr = (players || '').match(/\b[a-z\s]+, \d+/gi) || []
  const res = arr.map(p => {
    const [player, contact] = p.split(/, /)
    return { player, contact: +contact }
  })

  return res
}
