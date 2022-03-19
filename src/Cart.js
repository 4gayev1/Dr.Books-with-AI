import React from 'react'

const Cart = (cart) => {
    console.log(cart);
  return (
    <div>
        Cart
        {cart.map((cartItem) => (
        <div key={cartItem.name}>
          <div className="f"><img src={cartItem.src} className="pic"/></div>
          {cartItem.name} - ${cartItem.price} - {cartItem.category}
        </div>
      ))}
      </div>
  )
}

export default Cart