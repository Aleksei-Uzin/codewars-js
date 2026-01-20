/**
 * Decimals or groups of thousands??
 * https://www.codewars.com/kata/58379c3b51e3b680aa000164/train/javascript
 *
 */

const sumUpNumbers = arr => {
  const sum = arr.reduce((acc, n) => acc + parseNum(n), 0)

  return sum.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$&,')
}

const parseNum = str => {
  const [num, dec = 0] =
    str.match(/^\d{1,3}([,.])?(\d{3}\1?)*|(?<=[,.])(\d{1,2}$)/g) || []
  const preparedNum = num.replace(/[,.]/g, '')

  return parseFloat(`${preparedNum}.${dec}`)
}
