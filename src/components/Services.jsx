import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';

import { images } from '../constants';


const Services = () => {
  return (
    <>
    <div className='app_header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <h1 className=''>MANPOWER SOURCING</h1>
      <p className='p__opensans' style={{margin: '1rem 0', textTransform: 'none'}}>
      As your lifelong career partner, we remain committed to working together with you as the world of work evolves. Our recruiting experts will continue to support you through your current challenges, while also helping with your longer-term planning. As we all adapt in this new era of work, our advice and unique insights will help you to plan your next steps.
      </p>
    </div>

    <div className="app__wrapper_img">
      <img src={images.recruit} alt="header img" />
    </div>
  </div>


<div className='app_header app__wrapper section__padding reverse' id='home'>
<div className="app__wrapper_img">
  <img src={images.documents} alt="header img" />
</div>

<div className='app__wrapper_info'>
  <h1 className=''>DOCUMENT SERVICES</h1>
  <p className='p__opensans' style={{margin: '1rem 0', textTransform: 'none'}}>
  The distance between you and your perfect employee just got smaller. Thank you for visiting us. With a wide range of services such as Manpower Sourcing, Management & Document services, WAFI HR Solutions is here to partner with you for your HR needs.<br/><br/>

Details like employee attitude, work environment, management style are all taken in thorough consideration to get a winning combination, both for the employer & the employee.
  </p>
</div>

</div>

<section class="w3l-features-4 grey_bg">
        <div class="features4-block text-center py-5">
            <div class="container py-md-5 py-3">
				
                <div class="row features4-grids justify-content-center">
                    <div class="col-lg-4 col-md-6">
                        <div class="features4-grid">
                            <div class="feature-images">
                                <span class="fas fa-clipboard-check icon-color" aria-hidden="true"></span>
                            </div>
                            <h5><Link to="/contact">Visa Stamping</Link></h5>
                            
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mt-md-0 mt-2">
                        <div class="features4-grid">
                            <div class="feature-images">
                                <span class="fas fa-clipboard-check icon-color" aria-hidden="true"></span>
                            </div>
                            <h5><Link to="/contact">Education and Non-education Document Attestation.</Link></h5>
                            
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mt-lg-0 mt-2">
                        <div class="features4-grid">
                            <div class="feature-images">
                                <span class="fas fa-clipboard-check icon-color" aria-hidden="true"></span>
                            </div>
                            <h5><Link to="/contact">Arranging medical facilities.</Link></h5>
                            <p></p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mt-2">
                        <div class="features4-grid">
                            <div class="feature-images">
                                <span class="fas fa-clipboard-check icon-color" aria-hidden="true"></span>
                            </div>
                            <h5><Link to="/contact">Application for Kuwait PCC</Link></h5>
                            
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mt-2">
                        <div class="features4-grid">
                            <div class="feature-images">
                                <span class="fas fa-clipboard-check icon-color" aria-hidden="true"></span>
                            </div>
                            <h5><Link to="/contact">F.I.R. ATTESTATION</Link></h5>
                            
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mt-2">
                        <div class="features4-grid">
                            <div class="feature-images">
                                <span class="fas fa-clipboard-check icon-color" aria-hidden="true"></span>
                            </div>
                            <h5><Link to="/contact">Marriage / Birth Certificates</Link></h5>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
  )
}

export default Services