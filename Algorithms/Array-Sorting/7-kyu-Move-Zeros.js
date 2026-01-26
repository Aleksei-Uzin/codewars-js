/**
 * Move Zeros
 * https://www.codewars.com/kata/55c098aa8468f3b9030000f1/train/javascript
 *
 */

const move_zeros = (arrNum, isRight = true) =>
  arrNum.sort((a, b) => {
    if (isRight) return b === 0 ? -1 : 0
    else return a === 0 ? -1 : 0
  })

/**
 * Past Solutions
 */

const move_zeros_1 = (arrNum, isRight = true) => {
  const nums = arrNum.filter(n => n !== 0)
  const zeros = arrNum.filter(n => n === 0)

  return isRight ? nums.concat(zeros) : zeros.concat(nums)
}

const move_zeros_2 = (arrNum, isRight = true) => {
  const nums = arrNum.filter(n => n !== 0)
  const res = []

  arrNum.forEach(n => {
    if (n === 0) res.push(n)
  })

  return isRight ? nums.concat(res) : res.concat(nums)
}
