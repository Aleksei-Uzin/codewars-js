/**
 * Alphabet war - airstrike - letters massacre
 * https://www.codewars.com/kata/5938f5b606c3033f4700015a/train/javascript
 *
 */

const alphabetWar = fight => {
  fight = fight.replace(/[a-z]?\*[a-z]?/g, '')
  const left = { w: 4, p: 3, b: 2, s: 1 }
  const right = { m: 4, q: 3, d: 2, z: 1 }
  let [leftSum, rightSum] = [0, 0]

  for (let f of fight) {
    if (left[f]) leftSum += left[f]
    if (right[f]) rightSum += right[f]
  }

  return leftSum === rightSum
    ? "Let's fight again!"
    : `${leftSum > rightSum ? 'Left' : 'Right'} side wins!`
}
