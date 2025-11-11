/**
 * T.T.T. #7: Profit or loss
 * https://www.codewars.com/kata/5768b775b8ed4a360f000b20/train/javascript
 *
 */

const profitLoss = records => {
  const profitOrLoss = records.reduce(
    (acc, [price, p]) => acc + (price * p) / (100 + p),
    0
  )

  return Math.round(profitOrLoss * 100) / 100
}
