/**
 * Basics 06: Reversing and Combining Text
 * https://www.codewars.com/kata/56b861671d36bb0aa8000819/train/javascript
 *
 */

const reverse_and_combine_text = str => {
  const reverse = s => [...s].reverse().join('')
  const words = str.split(' ')
  const res = []

  if (words.length === 1) return str

  for (let i = 0; i < words.length; i += 2) {
    const word1 = words[i]
    const word2 = words[i + 1]

    res.push(`${reverse(word1)}${word2 ? reverse(word2) : ''}`)
  }

  return reverse_and_combine_text(res.join(' '))
}
