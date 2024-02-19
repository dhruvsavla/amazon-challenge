import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal.js"
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';


function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
  return (
      <div className='checkout'>
          <div className='checkout_left'>
              <img className = 'checkout_ad' src = "https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />
              <div>
                <h3>Hello, {user ? user.email : 'Guest'}</h3>
                  <h2 className='checkout_title'> your shoping basket: </h2>
              
                        {basket.map(item => (
                            <CheckoutProduct
                                key={item.id} // Ensure you provide a unique key for each item
                                id={item.id}
                                title={item.title}
                                rating={item.rating}
                                price={item.price}
                                img={item.img} 
                            />
                        ))}
                 
              </div> 
          </div>
          <div className='checkout_right'>
              <Subtotal />
          </div>
      </div>
  )
}

export default Checkout