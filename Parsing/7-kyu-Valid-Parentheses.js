/**
 * Valid Parentheses
 * https://www.codewars.com/kata/6411b91a5e71b915d237332d/train/javascript
 *
 */

const validParentheses = str => {
  if (!str.length) return true
  if (str.length && !/\(\)/.test(str)) return false

  return validParentheses(str.replace(/\(\)/g, ''))
}
