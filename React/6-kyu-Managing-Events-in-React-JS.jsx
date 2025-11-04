/**
 * Managing Events in React JS
 * https://www.codewars.com/kata/5a8319f257c562ede8000037/train/javascript
 *
 */

import React from 'react'

export class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
  }

  handleIncrement() {
    this.setState(prevState => ({ counter: prevState.counter + 1 }))
  }

  handleDecrement() {
    this.setState(prevState => ({ counter: prevState.counter - 1 }))
  }

  render() {
    return (
      <div>
        <h1 id="counter">{this.state.counter}</h1>
        <button id="decrement" type="button" onClick={this.handleDecrement}>
          Decrement
        </button>
        <button id="increment" type="button" onClick={this.handleIncrement}>
          Increment
        </button>
      </div>
    )
  }
}
