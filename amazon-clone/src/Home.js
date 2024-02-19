import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
  return (
      <div className='home'>
          <div className="home_container">
              
              <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
              <div className='home_row'>
                  <Product
                      id = '1234567'
                      title='The Lean Startup'
                      price={29.99}
                      img='https://target.scene7.com/is/image/Target/GUEST_17861f9b-9517-4db1-8915-533b1f530fd5?wid=488&hei=488&fmt=pjpeg'
                      rating={5} />
                  <Product
                      id = '123456'
                      title='The Lean Startup'
                      price={29.99}
                      img='https://target.scene7.com/is/image/Target/GUEST_17861f9b-9517-4db1-8915-533b1f530fd5?wid=488&hei=488&fmt=pjpeg'
                      rating={5} />
              </div>
              <div className='home_row'>
              <Product
                      id = '123456'
                      title='The Lean Startup'
                      price={29.99}
                      img='https://target.scene7.com/is/image/Target/GUEST_17861f9b-9517-4db1-8915-533b1f530fd5?wid=488&hei=488&fmt=pjpeg'
                      rating={5} />
                <Product
                      id = '123456'
                      title='The Lean Startup'
                      price={29.99}
                      img='https://target.scene7.com/is/image/Target/GUEST_17861f9b-9517-4db1-8915-533b1f530fd5?wid=488&hei=488&fmt=pjpeg'
                      rating={5} />
                 <Product
                      id = '123456'
                      title='The Lean Startup'
                      price={29.99}
                      img='https://target.scene7.com/is/image/Target/GUEST_17861f9b-9517-4db1-8915-533b1f530fd5?wid=488&hei=488&fmt=pjpeg'
                      rating={5} />
                 
              </div>
              <div className='home_row'>
              <Product
                      id = '123456'
                      title='The Lean Startup'
                      price={29.99}
                      img='https://target.scene7.com/is/image/Target/GUEST_17861f9b-9517-4db1-8915-533b1f530fd5?wid=488&hei=488&fmt=pjpeg'
                      rating={5} />
                 
              </div>
          </div>
    </div>
  )
}

export default Home