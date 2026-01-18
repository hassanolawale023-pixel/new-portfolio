import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import logo from '../../assets/coloered.png'
import menu from '../../assets/menu_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'

const Navbar = () => {
    const  [mobileMenu, setMobileMenu] = useState (false)
    const toggleMenu = () => {
      mobileMenu ? setMobileMenu (false) : setMobileMenu (true)
    }
  return (
    
  

    <nav>
        <div className='logo'>
            <img src={logo} alt="" /> Hassan Oseni
        </div>

        <ul className={`mobile-menu ${mobileMenu ? 'open' : ''}`}>
            <li> <Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>

            <li><Link to='about' smooth={true} offset={-250} duration={500}>About Me</Link></li>

            <li> <Link to='project' smooth={true} offset={-150} duration={500}>Projects</Link></li>

            <li><Link to='contact' smooth={true} offset={-200} duration={500}>Contact</Link></li>
        </ul>
        <img src={menu} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
