import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/icon2.png'

const Header = () => {
  return (
    <header>
        <nav>
            <div className="logo">
                <Link to='/'>
                    <img src={logo} alt="" />
                </Link>
            </div>

            <ul>
                <li><Link to='/plans'>Our Health Plans</Link></li>
                <li><Link>Our Providers</Link></li>
                <li><Link>Blog</Link></li>
                <li><Link>About Us</Link></li>
                
                <li><Link>Contact Us</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header