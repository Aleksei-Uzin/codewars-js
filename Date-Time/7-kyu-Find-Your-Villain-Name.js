/**
 * Find Your Villain Name
 * https://www.codewars.com/kata/536c00e21da4dc0a0700128b/train/javascript
 *
 */

const getVillainName = birthday => {
  const m = [
    'Evil',
    'Vile',
    'Cruel',
    'Trashy',
    'Despicable',
    'Embarrassing',
    'Disreputable',
    'Atrocious',
    'Twirling',
    'Orange',
    'Terrifying',
    'Awkward',
  ]
  const d = [
    'Mustache',
    'Pickle',
    'Hood Ornament',
    'Raisin',
    'Recycling Bin',
    'Potato',
    'Tomato',
    'House Cat',
    'Teaspoon',
    'Laundry Basket',
  ]

  const month = birthday.getMonth()
  const day = birthday.getDate()

  return `The ${m[month]} ${d[day % d.length]}`
}
