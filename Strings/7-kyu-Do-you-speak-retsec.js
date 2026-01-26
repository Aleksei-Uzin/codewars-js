/**
 * Do you speak retsec?
 * https://www.codewars.com/kata/5516ab668915478845000780/train/javascript
 *
 */

const reverseByCenter = s => {
  const len = s.length
  const mid = Math.floor(len / 2)
  const isEven = !(len % 2)

  if (isEven) {
    return s.slice(mid) + s.slice(0, mid)
  } else {
    return s.slice(mid + 1) + s[mid] + s.slice(0, mid)
  }
}
