import React, {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import { Link } from 'react-router-dom';

import images from '../constants/images';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
  <nav className='app_navbar'>
    <div className='app_navbar-logo'>
    <Link to="/"><img src={images.gericht} alt="logo" /></Link><p className='p__cormorant' style={{marginBottom: '0'}}>IR TOURS & TRAVELS</p>
    </div>
    <ul className='app_navbar-links'>
      <li className='p__opensans'><Link to="/">Home</Link></li>
      <li className='p__opensans'><Link to="/about">About Us</Link></li>
      <li className='p__opensans'><Link to="/services">Services</Link></li>
      <li className='p__opensans'><Link to="/contact">Contact Us</Link></li>
    </ul>
    {/* <div className="app_navbar-login">
      <a href="#login" className='p__opensans'>Login</a>
      <div/>
      <a href="/" className='p__opensans'>Book Table</a>
    </div> */}

    <div className="app_navbar-smallscreen">

      <GiHamburgerMenu color='black' fontSize={27} className='burger' onClick={() => setToggleMenu(true)} />

      {toggleMenu && (
      <div className='app_navbar-smallscreen_overlay flex__center slide-bottom'>
        <MdOutlineRestaurantMenu fontSize={27} className='overlay_close' onClick={() => setToggleMenu(false)} />

        <ul className='app_navbar-smallscreen-links'>
          <li className='p__opensans'><Link to="/" onClick={() => setToggleMenu(false)}>Home</Link></li>
          <li className='p__opensans'><Link to="/about" onClick={() => setToggleMenu(false)}>About</Link></li>
          <li className='p__opensans'><Link to="/services" onClick={() => setToggleMenu(false)}>Services</Link></li>
          <li className='p__opensans'><Link to="/contact" onClick={() => setToggleMenu(false)}>Contact Us</Link></li>
        </ul>

      </div>
      )}
    </div>

  </nav>
  )
  }

export default Navbar;
