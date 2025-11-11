/**
 * T.T.T.#3: Three lifts
 * https://www.codewars.com/kata/575135cabdd337cff50009cc/train/javascript
 *
 */

const switchLift = (status, n) => {
  const excludedLift = n % 2 ? 'B' : 'A'
  let [res, min] = ['', Infinity]

  for (let [lift, floor] of Object.entries(status)) {
    const dist = Math.abs(n - floor)

    if (dist === 0) return ''
    if (n > 1 && lift === excludedLift) continue
    if (dist < min) [min, res] = [dist, lift]
    else if (dist === min) res += lift
  }

  return res
}
