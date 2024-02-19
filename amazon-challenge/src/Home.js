import React from 'react'
import "./Home.css";
import Product from './Product';
import { useEffect } from 'react';
import $ from 'jquery';


function Home() {
    useEffect(() => {
        $(document).ready(function() {
            let slideIndex = 0;
            showSlides();
        
            function showSlides() {
                let i;
                const slides = $(".mySlides");
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                slideIndex++;
                if (slideIndex > slides.length) {
                    slideIndex = 1;
                }
                slides[slideIndex - 1].style.display = "block";
                setTimeout(showSlides, 2000);
            }
        });
        
    }, []);

  return (
      <div className='home'>
          <div className="home_container">
          <div class="slideshow-container">
                <div class="mySlides fade">
                    <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
                </div>
                <div class="mySlides fade">
                    <img className='home_image' src="https://m.media-amazon.com/images/I/71gsYi+DAzL._SX3000_.jpg" />
                </div >
                <div class="mySlides fade">
                    <img className='home_image' src="https://m.media-amazon.com/images/I/91YqCNUXMuL._SX3000_.jpg" />
                </div >
                <div class="mySlides fade">
                    <img className='home_image' src="https://m.media-amazon.com/images/I/61-JTIXk00L._SX3000_.jpg" />
                </div >
            </div>

              <div className='home_row'>
                  <Product
                      id = '1234567'
                      title='Rich Dad, Poor Dad What The Rich Teach Their Kids About Money--That The Poor & The Middle Class Do Not! (Paperback, 2000)'
                      price={29.99}
                      img='https://m.media-amazon.com/images/I/81x0fNqLc-L._SY522_.jpg'
                      rating={5} />
                  <Product
                      id = '123456'
                      title='Echo Dot (5th Gen, 2022 release) | With bigger vibrant sound, helpful routines and Alexa | Charcoal'
                      price={49.99}
                      img='https://m.media-amazon.com/images/I/518cRYanpbL._AC_SX679_.jpg'
                      rating={4} />
              </div>
              <div className='home_row'>
              <Product
                      id = '123456'
                      title='Aulofe Strong Magnetic for iPhone 15 ProMax Case, [Compatible with MagSafe] [Military-Grade Drop Tested] Shockproof Protective Slim Translucent Matte Cover for iPhone 15 Pro Max Case Phone Case, Blue'
                      price={21.99}
                      img='https://m.media-amazon.com/images/I/719wrrb8iqL._AC_SX679_.jpg'
                      rating={4} />
                <Product
                      id = '123456'
                      title='CovertSafe& Dog Boots for Dogs Non-Slip, Waterproof Dog Booties for Outdoor, Dog Shoes for Medium to Large Dogs 4Pcs with Rugged Sole Black-Brown, Size 1: （2.3 inchx1.6 inch)(LxW) for 10-23 lbs'
                      price={29.99}
                      img='https://m.media-amazon.com/images/I/6185vt35nJL._AC_SX679_.jpg'
                      rating={5} />
                 <Product
                      id = '123456'
                      title='Utopia Bedding Duvet Cover Queen Size Set - 1 Duvet Cover with 2 Pillow Shams - 3 Pieces Comforter Cover with Zipper Closure - Ultra Soft Brushed Microfiber, 90 X 90 Inches (Queen, White)'
                      price={29.99}
                      img='https://m.media-amazon.com/images/I/81Nnn3Rn7FL._AC_SX679_.jpg'
                      rating={5} />
                 
              </div>
              <div className='home_row'>
              <Product
                      id = '123456'
                      title='Remote Control Car, 1/24 Scale Light Up Racing Car Toys, RC Car for Kids with Cool Led Lights, Hobby RC Cars Toys Birthday Gifts for 3 4 5 6 7 8 Year Old Boys Girls'
                      price={15.99}
                      img='https://m.media-amazon.com/images/I/71dRY-XSkKL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
                      rating={5} />
                 
              </div>
              <div className='home_row'>
              <Product
                      id = '123456'
                      title='BRONZEDOG Soft Padded Dog Muzzle Adjustable Neoprene Comfort Bitting Chewing Pet Muzzles for Small Medium Large Dogs Puppy (Mint Green, Medium)'
                      price={27.99}
                      img='https://m.media-amazon.com/images/I/71fzn1dCN1L._AC_SX679_.jpg'
                      rating={3} />
                <Product
                      id = '123456'
                      title='Xiaomi Mi Band 7 Activity Tracker High-Res 1.62" AMOLED Screen, Bluetooth 5.2, 120 Sports Modes, Optical Heart Rate & Blood Oxygen Sensor, 24HR Heart Rate & Sleep Monitor Smart Watch'
                      price={40.77}
                      img='https://m.media-amazon.com/images/I/51uwuS4CukL._AC_SX679_.jpg'
                      rating={5} />
                 <Product
                      id = '123456'
                      title='Revlon Lipstick Set, Super Lustrous 5 Piece Gift Set, Multi-Finish, Cream Pearl & Matte, Pack of 5'
                      price={29.24}
                      img='https://m.media-amazon.com/images/I/81l--fbgybL._SX679_.jpg'
                      rating={5} />
                 
              </div>
              <div className='home_row'>
              <Product
                      id = '123456'
                      title='Apple AirPods Max Wireless Over-Ear Headphones, Active Noise Cancelling, Transparency Mode, Personalized Spatial Audio, Dolby Atmos, Bluetooth Headphones for iPhone – Space Gray'
                      price={499}
                      img='https://m.media-amazon.com/images/I/813LwotY94L._AC_SX679_.jpg'
                      rating={5} />
                <Product
                      id = '123456'
                      title='Quest Nutrition Chocolate Brownie Protein Bars, High Protein, Low Carb, Gluten Free, Keto Friendly, 12 Count'
                      price={29.99}
                      img='https://m.media-amazon.com/images/I/913o+tStsEL._SX679_.jpg'
                      rating={5} />
                 <Product
                      id = '123456'
                      title='adidas Official India Cricket ODI Fan Jersey'
                      price={39.99}
                      img='https://m.media-amazon.com/images/I/310L2iVYXGL._AC_.jpg'
                      rating={4} />
                 
              </div>
              <div className='home_row'>
                  <Product
                      id = '1234567'
                      title='SAMSUNG Galaxy A14 4G LTE (128GB + 4GB) Unlocked Worldwide (Only T-Mobile/Mint/Metro USA Market) 6.6" 50MP Triple Camera + (15W Wall Charger) (Silver (SM-A145M/DS))'
                      price={132.45}
                      img='https://m.media-amazon.com/images/I/61KL9IywnnL._AC_SX679_.jpg'
                      rating={5} />
                  <Product
                      id = '123456'
                      title='Linkind Smart Light Bulbs,Smart Bulb That Work with Alexa & Google Home,LED Light Bulbs Color Changing,A19 E26 2.4Ghz RGB WiFi Light Bulbs Dimmable 60W,800 Lumen,4 Pack'
                      price={29.99}
                      img='https://m.media-amazon.com/images/I/61BI5sNYHeL._AC_SX679_.jpg'
                      rating={5} />
              </div>
          </div>
    </div>
  )
}

export default Home