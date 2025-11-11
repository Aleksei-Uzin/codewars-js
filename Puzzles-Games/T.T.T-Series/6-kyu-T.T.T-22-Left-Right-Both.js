/**
 * T.T.T.22: Left? Right? Both?
 * https://www.codewars.com/kata/57a8afa072292dccfe000270/train/javascript
 *
 */

const leftRightOrBoth = text => {
  const hasLeft = /[1-5qwertasdfgzxcvb!@#$%]/i.test(text)
  const hasRight = /[06-9yuiophjklnm,./;':"<>?^&*()]/i.test(text)

  if (hasLeft && hasRight) return 'Both'
  if (hasLeft) return 'Left'
  if (hasRight) return 'Right'

  return ''
}
