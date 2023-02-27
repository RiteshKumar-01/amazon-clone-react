import React from 'react'
import checkout_ad from './images/checkout_ad.jpg'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img
          src={ checkout_ad }
          alt='Checkout ad'
          />

        <div>
          <h2 className='checkout_title'>
            Your Shopping Basket
          </h2>
        </div>
      </div>

      <div className='checkout_right'>
        <Subtotal />
      </div>

    </div>
  )
}

export default Checkout