import React from 'react'
import {FaCalendarCheck, FaHeartbeat, FaCreditCard} from 'react-icons/fa'




const How = () => {
  return (
    <section className='health'>

            <h2>How It Works</h2>

            <div className='benefits'>
                <div>
                    <FaCalendarCheck className='p-icon'/>
                    <h3>Pick your preferred plan</h3>
                    <p>Choose between the monthly, quarterly or yearly payment periods and select any of our health insurance plans that fit your needs</p>
                </div>

                <div>
                    <FaCreditCard className='p-icon'/>
                    <h3>Pay online</h3>
                    <p>Enter your details and pay online with your card. It’s very simple</p>
                </div>

                <div>
                    <FaHeartbeat className='p-icon'/>
                    <h3>Start accessing care!</h3>
                    <p>After paying, watch out for the series of emails you’ll get from your no. 1 HMO in Nigeria, explaining how to use your health plans to stay healthy.</p>
                </div>

            </div>

        </section>
  )
}

export default How