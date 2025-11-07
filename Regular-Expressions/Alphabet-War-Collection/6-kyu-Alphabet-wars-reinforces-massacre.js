/**
 * Alphabet wars - reinforces massacre
 * https://www.codewars.com/kata/593e2077edf0d3e2d500002d/train/javascript
 *
 */

const alphabetWar = (reinforces, airstrikes) => {
  const len = reinforces[0].length
  const calcStrikes = Array(len).fill(0)

  airstrikes.forEach(strikes => {
    strikes = strikes
      .padEnd(len, ' ')
      .replace(/\s?\*\s?/g, m => '_'.repeat(m.length))

    calcStrikes.forEach((_, i, arr) => {
      if (strikes[i] === '_') arr[i] += 1
    })
  })

  return calcStrikes.reduce(
    (acc, c, i) => (acc += reinforces[c] ? reinforces[c][i] : '_'),
    ''
  )
}
