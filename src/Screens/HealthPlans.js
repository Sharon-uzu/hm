import React from 'react'
import Header from '../Components/Header'
import health from '../Assets/happy-cute-big-family-cartoon-vector.jpeg'
import {FaCashRegister} from 'react-icons/fa'
import {FaHeadphones} from 'react-icons/fa'
import {FaHospital} from 'react-icons/fa'
import Pricing from '../Components/Pricing'


const HealthPlans = () => {
  return (
    <div>
        <Header/>

        <section className='health'>

            <h2>Made especially for you and your family</h2>

            <div className='benefits'>
                <div>
                    <FaCashRegister className='p-icon'/>
                    <h3>Flexible payments</h3>
                    <p>Pay monthly, quarterly or annually</p>
                </div>

                <div>
                    <FaHeadphones className='p-icon'/>
                    <h3>24/7 customer care</h3>
                    <p>Zero wait times. You can always rely on us to be reachable at anytime of the day, every day of the week.</p>
                </div>

                <div>
                    <FaHospital className='p-icon'/>
                    <h3>Best hospitals near you</h3>
                    <p>We're partners with over 1,500 hospitals across Nigeria which means no matter where you are, you can get access to good quality healthcare.</p>
                </div>

            </div>


            <form className='sel'>

                <select name="" id="">
                    <option value="">Category</option>
                    <option value="Individual">Individual</option>
                    <option value="Family">Family</option>
                    <option value="SME">SMEs</option>
                    <option value="corporate">Corporates</option>
                </select>

            </form>




        </section>


        <Pricing/>
    </div>
  )
}

export default HealthPlans