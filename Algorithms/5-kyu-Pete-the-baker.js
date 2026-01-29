/**
 * Pete, the baker
 * https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript
 *
 */

const cakes = (recipe, available) => {
  let res = Infinity

  for (let ingredient of Object.keys(recipe)) {
    if (!available[ingredient]) return 0

    const n = ~~(available[ingredient] / recipe[ingredient])

    if (n < res) res = n
  }

  return res
}
