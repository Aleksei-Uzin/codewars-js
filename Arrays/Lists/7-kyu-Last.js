/**
 * Last
 * https://www.codewars.com/kata/541629460b198da04e000bb9/train/javascript
 *
 */

const last = (...list) => {
  if (list.length > 1) return list[list.length - 1]

  const [arg] = list

  return arg.length ? arg[arg.length - 1] : arg
}
