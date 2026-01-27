/**
 * T.T.T.52: The Race Between Hare and Tortoise
 * https://www.codewars.com/kata/57c398c0210f3e6f150001fc/train/javascript
 *
 */

const race = (speed1, speed2, distance, sleep, getup) => {
  const sleepTime = Math.round((distance - getup) / speed2 - sleep / speed1)
  const hareFinishTime = (distance - sleep) / speed1
  const tortoiseFinishTime = getup / speed2

  if (hareFinishTime < tortoiseFinishTime) {
    return `The hare won the race. He is sleeping for ${sleepTime} minutes.`
  } else if (hareFinishTime > tortoiseFinishTime) {
    return `The tortoise won the race. The hare is sleeping for ${sleepTime} minutes.`
  } else {
    return `The hare and the tortoise tied. The hare is sleeping for ${sleepTime} minutes.`
  }
}
