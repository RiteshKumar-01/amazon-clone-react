import React from 'react'
import './CheckoutProduct.css'
import { useStatevalue } from './StateProvider'

function CheckoutProduct({id, image, title, price, rating}) {

    const [{basket}, dispatch] = useStatevalue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

  return (
    <div className='checkoutProduct'>
        <img 
            className='checkoutProduct_image'
            src={ image }
            alt='checkoutProduct Images'
        />

        <div className='checkoutProduct_info'>
            <p className='checkoutProduct'>
                {title}
            </p>
            <p className='checkoutProduct_price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct_rating'>
                {
                    Array(rating).fill().map((_, i) => {
                        return <p key={i}>⭐</p>;
                    })
                }
            </div>
            <button onClick={ removeFromBasket }>Remove from Basket</button>
        </div>

    </div>
  )
}

export default CheckoutProduct