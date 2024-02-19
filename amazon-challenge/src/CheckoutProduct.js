import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, img, price, rating, title, hidebutton}) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
  return (
      <div className='checkoutproduct'>
          <img className='checkoutProduct_image' src={img} />
          <div className='checkoutProduct_info'>
              <p className='checkoutProduct_title'>{title}</p>
              <p className='checkoutProduct_price'><small>$<strong>{price}</strong></small></p>

              <div className='checkoutProduct_rating'>{Array(rating).fill().map(() => <p>⭐️</p>)}</div>
              {!hidebutton && (
                <button onClick={removeFromBasket}>Remove frrom Basket</button>

              )}
          </div>
    </div>
  )
}

export default CheckoutProduct