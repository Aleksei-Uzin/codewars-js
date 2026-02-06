/**
 * Arrh, grabscrab!
 * https://www.codewars.com/kata/52b305bec65ea40fe90007a7/train/javascript
 *
 */

const grabscrab = (anagram, dictionary) => {
  anagram = sort(anagram)

  return dictionary.filter(d => anagram === sort(d))
}

const sort = str => [...str].sort().join('')
