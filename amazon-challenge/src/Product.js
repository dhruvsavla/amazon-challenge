import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'

function Product({ id, title, img, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    // console.log("this is the basket >>>", basket)
    const addToBasket = () => {
        //dispatch the item to the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                img, img,
                price: price,
                rating: rating,
            },
        });
    };
  return (
      <div className='product'>
          <div className='product_info'>
              <p>{title}</p>
              <p className='product_price'>
                  <small>$</small>
                  <strong>{price}</strong>
              </p>
              <div className='product_rating'>
                  {Array(rating).fill().map((_, i) => <p>⭐️</p>)}
              </div>
          </div>
          <img src= {img} />
          
          <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product