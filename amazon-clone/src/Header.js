import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
// import { Link } from 'react-router-dom';

function Header() {
  return (
      <div className='header'>
          {/* <Link to = "/"> */}
            <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
          {/* </Link> */}
          
          <div className='header_search'>
              <input className='header_searchInput' type="text" />
                  <SearchIcon className='header_searchIcon' />
             
          </div>
          <div className='header_nav'>
              <div className='header_option'>
                  <span className='header_optionOne'>
                      Hello Guest
                  </span>
                  <span className='headerOptionTwo'>
                      Sign In
                  </span>
              </div>
              <div className='header_option'>
                    <span className='header_optionOne'>
                      Returns
                  </span>
                  <span className='headerOptionTwo'>
                      & Orders
                  </span>
              </div>
                <div className='header_option'>
                <span className='header_optionOne'>
                      Your
                  </span>
                  <span className='headerOptionTwo'>
                      Prime
                  </span>
                 
              </div>

              <div className='header_optionBasket'>
                  <ShoppingBasketIcon />
                  <span className='header_optionOne header_basketCount'>0</span>
              </div>
              
          </div>
    </div>
  )
}

export default Header