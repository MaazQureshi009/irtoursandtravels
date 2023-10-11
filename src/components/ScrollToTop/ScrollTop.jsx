import React from 'react';
import './ScrollTop.css';
// import { FiArrowUp } from 'react-icons/fi'

const ScrollTop = () => {
    
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
  return (
    <div className='app__scroll'>
        <button onClick={scrollTop} className='app__scroll-arrow'>
            &#8679;
        </button>
    </div>
  )
}

export default ScrollTop