/**
 * HTML dynamic color string generation
 * https://www.codewars.com/kata/56f1c6034d0c330e4a001059/train/javascript
 *
 */

const generateColor = function () {
  const randomNum = Math.floor(Math.random() * 0xffffff)
  const hexValue = randomNum.toString(16).padStart(6, '0')

  return `#${hexValue}`
}
