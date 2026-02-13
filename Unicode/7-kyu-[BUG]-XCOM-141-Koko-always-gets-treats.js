/**
 * [BUG] XCOM-141: Koko always gets treats
 * https://www.codewars.com/kata/67a079ae1eef9a4dc67be7ca/train/javascript
 *
 */

const applyFeedback = (battlescape, enemy, position) => {
  if ([...battlescape][position] === enemy) return DISPENSE_TREAT
  else return RELEASE_NITROGEN_SHOWER
}
