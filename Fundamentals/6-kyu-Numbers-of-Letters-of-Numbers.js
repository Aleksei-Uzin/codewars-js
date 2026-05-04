/**
 * Numbers of Letters of Numbers
 * https://www.codewars.com/kata/599febdc3f64cd21d8000117/train/javascript
 *
 */

const numbersOfLetters = int => {
  const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  const toWord = n => n.toString().replace(/./g, m => words[m])
  const res = []
  let curr = toWord(int)

  while (true) {
    const next = toWord(curr.length)
    res.push(curr)

    if (next === curr) break
    curr = next
  }

  return res
}
