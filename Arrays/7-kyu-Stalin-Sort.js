/**
 * Stalin Sort
 * https://www.codewars.com/kata/699af631058f5c12b04f4efe/train/javascript
 *
 */

const stalinSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      arr.splice(i--, 1)
    }
  }
}
