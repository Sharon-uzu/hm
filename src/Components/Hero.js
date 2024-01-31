import React from 'react'
import Header from './Header'
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css";
import "swiper/css/scrollbar";


import Slider from './Slider';
import f1 from '../Assets/image-1.png'
import f2 from '../Assets/image-2.png'
import f3 from '../Assets/image-3.png'



const Hero = () => {
  return (
    <div className='hero'> 
        <Header/>

        <Slider/>

        <div className="more">


        <div className="more-info">

        <div className="info bd">

          <img src={f1} alt="" />

          <div>

            <div>
              <h4>Choose a Plan that suits you</h4>
              <p>We offer health plans suitable for individuals and families. We also provide access to healthcare for employees at small and medium-sized businesses or SMEs.</p>
            </div>
            <a href="">CHOOSE</a>
          </div>

        </div>

        <div className="info bd">

          <img src={f2} alt="" />

          <div>

            <div>
              <h4>Find a Provider Near you</h4>
              <p>With the widest coverage of providers in Nigeria, Hygeia will help you find the perfect provider for you.</p>
            </div>
            <a href="">FIND</a>
          </div>

        </div>


        <div className="info">

          <img src={f3} alt="" />

          <div>

            <div>
              <h4>Join our community</h4>
              <p>We are here to assist you, in choosing the best services for you.</p>
            </div>
            <a href="">GET HELP</a>
          </div>

        </div>

        </div>

        </div>

        
        

    </div>

    
  
  )
}

export default Hero