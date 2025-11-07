/**
 * Alphabet war - Wo lo loooooo priests join the war
 * https://www.codewars.com/kata/59473c0a952ac9b463000064/train/javascript
 *
 */

const alphabetWar = fight => {
  const left = { w: 4, p: 3, b: 2, s: 1 }
  const right = { m: 4, q: 3, d: 2, z: 1 }
  let [leftSum, rightSum] = [0, 0]

  for (let i = 0; i < fight.length; i++) {
    const [before, side, after] = [fight[i - 1], fight[i], fight[i + 1]]

    if (left[side]) {
      if (
        (before === 'j' && after !== 't') ||
        (before !== 't' && after === 'j')
      ) {
        rightSum += left[side]
      } else {
        leftSum += left[side]
      }
    }

    if (right[side]) {
      if (
        (before === 't' && after !== 'j') ||
        (before !== 'j' && after === 't')
      ) {
        leftSum += right[side]
      } else {
        rightSum += right[side]
      }
    }
  }

  return leftSum === rightSum
    ? "Let's fight again!"
    : `${leftSum > rightSum ? 'Left' : 'Right'} side wins!`
}
