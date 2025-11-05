/**
 * Truncate paragraph using higher-order component in React JS
 * https://www.codewars.com/kata/5a667bf8e6be382ecd000102/train/javascript
 *
 */

import React from 'react'

export const withTruncateParagraph = Component => {
  function WrapperComponent({ children, textLength = 10, ...rest }) {
    if (textLength >= 0) children = `${children.slice(0, textLength)}...`

    return <Component {...rest}>{children}</Component>
  }

  WrapperComponent.displayName = getDisplayName(Component)

  return WrapperComponent
}

function getDisplayName(Component) {
  const displayName = Component.displayName || Component.name || 'Component'
  return `WithTruncateParagraph(${displayName})`
}
