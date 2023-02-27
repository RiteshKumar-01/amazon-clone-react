import React from 'react'
import './Product.css'
import { useStatevalue } from './StateProvider'

function Product({ id, title, image, price, rating, discount }) {

    const [state, dispatch] = useStatevalue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };


  return (
    <div className='product'>
        <div className='product_info'>
            <p>{ title }</p>
            <p className='product_price'>
                <span className='product_discount'>-{ discount }% </span>
                <small>₹</small>
                <strong>{ price }</strong>
            </p>

            <div className='product_rating'>
                {
                    Array(rating).fill().map((_, i) => {
                        return <p key={i}>⭐</p>;
                    })
                } 
            </div>
        </div>

        <img
            src={image}
            alt='prouct images'
        />

        <button onClick={ addToBasket }>Add to Basket</button>

    </div>
  )
}

export default Product