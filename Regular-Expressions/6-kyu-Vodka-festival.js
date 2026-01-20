/**
 * Vodka festival.
 * https://www.codewars.com/kata/5876031f889768640900004c/train/javascript
 *
 */

const vodkaConsumption = shots => {
  let sumMl = shots.reduce(
    (acc, s) => acc + (/ml$/.test(s) ? parseFloat(s) : parseFloat(s) * 1000),
    0,
  )
  return sumMl < 1000 ? `${sumMl}ml` : `${Math.round(sumMl / 1000)}l`
}
