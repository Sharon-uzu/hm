import React from 'react'
import p1 from '../Assets/hero-sldArtboard-2.jpeg'
import p2 from '../Assets/hero-sldArtboard-1.jpeg'
import p3 from '../Assets/closeup-portrait-stunning-pregnant-black-mother-cradling-her-belly-home.jpeg'
import p4 from '../Assets/older-mother-adult-son-relationship-hands-together-walking-street.jpeg'
import p5 from '../Assets/hero-sldArtboard-4.jpeg'
import p6 from '../Assets/hero-sldArtboard-3.jpeg'

const Plans = () => {
  return (
    <div className='plans'>
        <div className="plan1 plan-m">
            <h2>Choose from a wide variety of plans for you, your family & your Staff</h2>
            {/* <h3>We offer health plans suitable for individuals and families. We also provide access to healthcare for employees at small and medium-sized businesses or SMEs.</h3> */}
        </div>

        <div className="plan2">
            <div className='plan-c'>
                
                <img src={p1} alt="" />
                <div>
                    <h6>Individual</h6>
                </div>
            </div>

            <div className='plan-c'>
                
                <img src={p2} alt="" />
                <div>
                    <h6>Family</h6>
                </div>
            </div>

            <div className='plan-c'>
                
                <img src={p3} alt="" />
                <div>
                    <h6>Maternity</h6>
                </div>
            </div>

            <div className='plan-c'>
                
                <img src={p4} alt="" />
                <div>
                    <h6>Senior Citizens</h6>
                </div>
            </div>

            <div className='plan-c'>
                
                <img src={p5} alt="" />
                <div>
                    <h6>SMEs</h6>
                </div>
            </div>


            <div className='plan-c'>
                
                <img src={p6} alt="" />
                <div>
                    <h6>Corporate</h6>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Plans