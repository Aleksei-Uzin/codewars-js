/**
 * happy_birthday.3pm.cmd
 * https://www.codewars.com/kata/6632593a3c54be1ed7852b15/train/javascript
 *
 */

const getVisibleName = maliciousName => {
  const [before, after] = maliciousName.replace(/\.\w+$/, '').split('\u202e')
  return before + after.split('').reverse().join('')
}
