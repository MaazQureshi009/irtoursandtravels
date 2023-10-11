import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiPhoneCall } from 'react-icons/fi';
import { AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { images } from '../constants';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+919702484180';
  
    window.location.href = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
  };
  const handleWhatsAppClick2 = () => {
    const phoneNumber = '+917208151338';
  
    window.location.href = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
  };
  return (
  <div className='app__footer section__padding'>
    {/* <FooterOverlay/> */}
    {/* <Newsletter/> */}

    <div className="app__footer-links">
      <div className="app__footer-links_contact line">
        <h1 className="app__footer-headtext">Contact</h1>
        <ul className='foot-ul'>
          <li><Link to='tel:917208151338'><FiPhoneCall/> +917208151338</Link></li>
          <li><Link to='tel:919702484180'><FiPhoneCall/> +919702484180</Link></li>
          <li><Link onClick={handleWhatsAppClick2}><AiOutlineWhatsApp/> +917208151338</Link></li>
          <li><Link onClick={handleWhatsAppClick}><AiOutlineWhatsApp/> +919702484180</Link></li>
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
        <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others."</p>
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
