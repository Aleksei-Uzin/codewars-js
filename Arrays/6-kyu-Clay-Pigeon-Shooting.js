/**
 * Clay Pigeon Shooting
 * https://www.codewars.com/kata/57fa9bc99610ce206f000330/train/javascript
 *
 */

const shoot = x => {
  let [res1, res2] = [0, 0]

  for (let [{ P1, P2 }, isDouble] of x) {
    const score1 = (P1.match(/x/gi) || []).length
    const score2 = (P2.match(/x/gi) || []).length

    res1 += isDouble ? score1 * 2 : score1
    res2 += isDouble ? score2 * 2 : score2
  }

  if (res1 === res2) return 'Draw!'

  return `${res1 > res2 ? 'Pete' : 'Phil'} Wins!`
}
