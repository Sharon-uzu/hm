import React from 'react'
import map from '../Assets/Colorful-GPS-Markers-On-Navigation-Map.H03-1.png'

const Provider = () => {
  return (
    <div className='provider'>

        <h2>Find a provider near you</h2>
        <img src={map} alt="" />
        <p>Choosing the best and closest provider for you, your family, and your staff doesn’t have to be complicated. With the widest coverage of providers in Nigeria, Hygeia will help you find the perfect provider for you.</p>
        <button>Find Provider</button>
        
    </div>
  )
}

export default Provider