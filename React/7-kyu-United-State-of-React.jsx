/**
 * United State of React
 * https://www.codewars.com/kata/5a830fa2373c2ec8eb00019d/train/javascript
 *
 */

import React from 'react'

export class States extends React.Component {
  constructor() {
    super()
    this.state = {
      united: false,
    }
  }

  unite() {
    this.setState({ united: true })
  }

  render() {
    return (
      <div className="status">
        {this.state.united ? 'Code for everyone' : 'Make America code again'}
      </div>
    )
  }
}
