/**
 * Swedish Personal Number
 * https://www.codewars.com/kata/5813257b0d8f13b683000171/train/javascript
 *
 */

const validatePersonalNumber = personalNumber => {
  const reY = /(19[0-9]{2}|200[0-9]|201[0-6])/
  const reM = /(0[1-9]|1[0-2])/
  const reD = /(0[1-9]|[12][0-9]|3[01])/
  const reDigits = /[-+]?[0-9]{4}/

  return new RegExp(
    `^${reY.source}${reM.source}${reD.source}${reDigits.source}$`,
  ).test(personalNumber)
}
