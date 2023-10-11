import React from 'react';
import './Header.css';
import { useTypewriter } from 'react-simple-typewriter';
import Welcome from './Welcome';
import { images } from '../constants';
import SubHeading  from './SubHeading.jsx';
import { Link } from 'react-router-dom';

const Header = () => {
  const [text] = useTypewriter({
    words: ['INSPIRING THE NEW ERA OF WORK', 'WE STAND OUT FROM THE CROWD'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 1,
  });

  return (
    <>
    <div className="image-div">
      <img src={images.kuwait1} className='responsive-image' alt="header img" />
    </div>
  <div className='app_header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="
We are an Authorized Agency by THE CONSULATE GENERAL FOR THE STATE OF KUWAIT. MUMBAI for Visa stamping"/>
      <h1 className='app_header-h1'><span>{text}</span></h1>
      <p className='p__opensans' style={{margin: '1rem 0', textTransform: 'none'}}>
      As your lifelong career partner, we remain committed to working together with you as the world of work evolves. Our recruiting experts will continue to support you through your current challenges, while also helping with your longer-term planning. As we all adapt in this new era of work, our advice and unique insights will help you to plan your next steps.
      </p>
      <Link to="/about"><button type='button' className='custom__button'>READ MORE</button></Link>
    </div>

  </div>
    <Welcome/>
    </>
  );
};

export default Header;