/**
 * Promises Made and Broken: The Misadventures of Bob the Highly Paid Consultant
 * https://www.codewars.com/kata/587593285448632b8d000143/train/javascript
 *
 */

async function submitOrder(user) {
  const [shoppingCart, profile] = await Promise.all([
    OrderAPI.getShoppingCartAsync(user),
    CustomerAPI.getProfileAsync(user),
  ])
  const shippingRate = calculateShipping(shoppingCart, profile.zipCode)
  const orderSuccessful = await OrderAPI.placeOrderAsync(
    shoppingCart,
    shippingRate,
  )

  console.log(
    `Your order ${orderSuccessful ? 'was' : 'was NOT'} placed successfully`,
  )
}

function submitOrder(user) {
  Promise.all([
    OrderAPI.getShoppingCartAsync(user),
    CustomerAPI.getProfileAsync(user),
  ])
    .then(([shoppingCart, profile]) => {
      const shippingRate = calculateShipping(shoppingCart, profile.zipCode)
      return [shippingRate, shoppingCart]
    })
    .then(([shippingRate, shoppingCart]) =>
      OrderAPI.placeOrderAsync(shoppingCart, shippingRate),
    )
    .then(orderSuccessful => {
      console.log(
        `Your order ${orderSuccessful ? 'was' : 'was NOT'} placed successfully`,
      )
    })
}
