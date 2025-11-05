/**
 * Easter egg list in ReactJS
 * https://www.codewars.com/kata/5a95947f4a6b342636000173/train/javascript
 *
 */

import React from 'react'

export const EggList = ({ eggs }) => {
  const listItems = eggs.map((egg, key) => <EasterEgg key={key} name={egg} />)
  return <ul>{listItems}</ul>
}

export const EasterEgg = ({ name }) => <li>{name}</li>
