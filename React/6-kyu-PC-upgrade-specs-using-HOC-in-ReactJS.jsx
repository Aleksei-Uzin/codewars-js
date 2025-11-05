/**
 * PC upgrade specs using HOC in ReactJS
 * https://www.codewars.com/kata/5a9c0fa45084d79b1f000138/train/javascript
 *
 */

const React = require('react')

const PcDisplay = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p id="price">£{props.price}</p>
      <ul>
        <li>
          <label>CPU</label> <span>{props.cpu}</span>
        </li>
        <li>
          <label>RAM</label> <span>{props.ram}</span>
        </li>
        <li>
          <label>SSD</label> <span>{props.ssd}</span>
        </li>
      </ul>
    </div>
  )
}

const withPriceModel = (WrappedComponent, basePrice = 0) => {
  return props => {
    const price = 50 + basePrice
    return <WrappedComponent {...props} price={price} />
  }
}

const BasicModel = withPriceModel(PcDisplay)
const ProModel = withPriceModel(PcDisplay, 60)
