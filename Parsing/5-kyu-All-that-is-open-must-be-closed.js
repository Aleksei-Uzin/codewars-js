/**
 * All that is open must be closed...
 * https://www.codewars.com/kata/55679d644c58e2df2a00009c/train/javascript
 *
 */

function isBalanced(s, caps) {
  const hasCaps = new RegExp([...caps].map(v => `\\${v}`).join('|'))
  let copy = s.slice()

  if (!caps || !hasCaps.test(s)) return true

  const arr = caps.match(/.{2}/g) || []
  const pairs = arr.map(v => v.split(''))
  let snippet = ''

  for (let [a, b] of pairs) {
    const re = new RegExp(`\\${a}([^\\${a}\\${b}]*)\\${b}`)
    copy = copy.replace(re, (_, m) => ((snippet = m), m))

    if (snippet.length && !isBalanced(snippet, caps)) return false
  }

  return s !== copy ? isBalanced(copy, caps) : false
}
