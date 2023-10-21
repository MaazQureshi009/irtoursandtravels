import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiPhoneCall } from 'react-icons/fi';
import { AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { images } from '../constants';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.location.href = 'https://wa.me/919702484180';
  };
  const handleWhatsAppClick2 = () => {
    window.location.href = 'https://wa.me/917208151338';
  };
  return (
  <div className='app__footer section__padding'>
    {/* <FooterOverlay/> */}
    {/* <Newsletter/> */}

    <div className="app__footer-links">
      <div className="app__footer-links_contact line">
        <h1 className="app__footer-headtext">Contact</h1>
        <ul className='foot-ul'>
          <li><Link to='tel:917208151338'><Link onClick={handleWhatsAppClick2}><AiOutlineWhatsApp/></Link><FiPhoneCall/> +917208151338</Link></li>
          <li><Link to='tel:919702484180'><Link onClick={handleWhatsAppClick}><AiOutlineWhatsApp/></Link><FiPhoneCall/> +919702484180</Link></li>
          <li><Link to ='tel:02240155928'><span className='telephone'>&#9743;</span> 022-4015 5928</Link></li>
        </ul>
      </div>
      <div className="app__footer-links_work line">
      <h1 className="app__footer-headtext">Email</h1>
      <ul className='foot-ul'>
        <li><Link to='mailto:irtourstravels@gmail.com'><AiOutlineMail/> irtourstravels@gmail.com</Link></li>
        </ul>
      </div>
      <div className="app__footer-links_logo line">
        {/* <img src={images.gericht} alt="footer_logo" /> */}
        <h1 className="app__footer-headtext">Address</h1>
        <p className="p__opensans">32/42, 2nd Floor, Akhalwaya Building, Agiary Lane, Off Perin Nariman Street, Fort, Mumbai, Maharashtra, India-400 001</p>
        {/* <img src={images.spoon} alt="spoon" className='spoon__img' style={{marginTop: 15}} /> */}
        <div className="app__footer-links_icons">
          <FiFacebook/>
          <FiTwitter/>
          <FiInstagram/>
          <FaLinkedinIn/>
        </div>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">@ 2023 IR TOURS & TRAVELS. All Rights Reserved.</p>
    </div>
  </div>
  )
  };

export default Footer;
