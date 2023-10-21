import React from 'react';
import './Welcome.css';
import { images } from '../constants';
import SubHeading  from './SubHeading.jsx';
import { Link } from 'react-router-dom';

const Welcome = () => (
  <>
  <div className='app_header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Welcome"/>
      {/* <h1 className='app_header-h1'>INSPIRING THE NEW ERA OF WORK</h1> */}
      <p className='p__opensans' style={{margin: '1rem 0', textTransform: 'none'}}>
      The distance between you and your perfect employee just got smaller. Thank you for visiting us. With a wide range of services such as Manpower Sourcing, Management & Document services, WAFI HR Solutions is here to partner with you for your HR needs.<br/><br/>

Details like employee attitude, work environment, management style are all taken in thorough consideration to get a winning combination, both for the employer & the employee.
      </p>
      <Link to='/services'><button type='button' className='button-style'>LEARN MORE</button></Link>
    </div>

  </div>

    <div className="container">
      <div className='mx-auto text-center mb-sm-5 mb-4 approved'>
      <div className="content">
      <h3 className="title-main-2 text-center mx-auto mb-sm-4 mb-2">Approved by Government of India</h3>
      <h4 className='title-main-3'>Ministry of External Affairs, Overseas Employment Division.</h4>
      <h4 className='title-main-3'>B-1878/MUM/PER/100/5/10345/2023</h4>
      <p className="sub-para-style mt-4">"We believe hiring to be the most important first step towards the organization's success."</p>
      <p className="sub-para-style">Let our expertise guide you in the ever-changing world of work. Whether you're taking that next step in your career, building a high-performing team or retaining top talent, stay up-to-date on the latest hiring trends.</p>
      </div>
      {/* <div className="content">
        <h2>Header 2</h2>
        <p>This is a paragraph below Header 2.</p>
      </div> */}
    </div>
      <div className="row justify-content-center ">
        <img src={images.flag} alt="Your Image" />
      </div>
    </div>

    {/* Features section */}
    <section className="features-section pt-5" id="work">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-4 left-wthree-img order-lg-first order-last">
                    <img src={images.home1} alt="" className="img-fluid img-responsive"/>
                </div>
                <div className="col-lg-8 right-wthree-img align-self order-lg-last order-first">
					<h3 className="title-main-2 text-center mx-auto mb-sm-4 mb-2">We <span className="green">Stand Out</span> From The Crowd!</h3>
                    <div className="row text-center">
                        <div className="col-sm-4 col-6 icon-text-style">
                            <i className="fas fa-check icon-color"></i>
                            <p>No Extra Charge</p>
                        </div>
                        <div className="col-sm-4 col-6 icon-text-style">
                            <i className="fas fa-check icon-color"></i>
                            <p>Personalised Services</p>
                        </div>
                        <div className="col-sm-4 col-6 icon-text-style  border-right-0">
                            <i className="fas fa-check icon-color"></i>
                            <p>Guaranteed Departure</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Services section */}
    <section className="w3l-features-4 grey_bg">
        <div className="features4-block text-center py-5">
            <div className="container py-md-5 py-3">
				<h3 className="title-main-2 text-center mx-auto mb-sm-4 mb-2">Our <span className="green">Services</span> at a Glimpse</h3>
                <div className="row features4-grids justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="features4-grid">
                            <div className="feature-images">
                                <span className="fas fa-business-time icon-color" aria-hidden="true"></span>
                            </div>
                            <h5><a href="contact.html">1. Manpower Sourcing</a></h5>
                            <ul className="list_styled mt-2">
								<li>HR Operations Outsourcing</li>
								<li>Sourcing and Placement of Skilled Professionals</li>
								<li>Customized Recruitment &amp; Selection</li>
								<li>Guiding and Mentoring Candidates</li>
							</ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-md-0 mt-2">
                        <div className="features4-grid">
                            <div className="feature-images">
                                <span className="fas fa-laptop-code icon-color" aria-hidden="true"></span>
                            </div>
                            <h5><a href="contact.html">2. Document Services</a></h5>
                            <ul className="list_styled mt-2">
								<li>Passport Related Proceedures</li>
								<li>Document Attestations</li>
								<li>Complete Embassy Formalities</li>
								<li>Visa Formalities</li>
								<li>Medical Certificate Process</li>
							</ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-lg-0 mt-2">
                        <div className="features4-grid">
                            <div className="feature-images">
                                <span className="fas fa-clipboard-check icon-color" aria-hidden="true"></span>
                            </div>
                            <h5><a href="contact.html">3. Management Services</a></h5>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Next Section */}

    <div className='app_header app__wrapper section__padding reverse' id='home'>
    <div className="app__wrapper_img">
      <img src={images.power} alt="header img" />
    </div>

    <div className='app__wrapper_info'>
    <p className='p__opensans' style={{margin: '1rem 0', textTransform: 'none'}}>A SUITE OF INNOVATIVE WORKFORCE MANAGEMENT SOLUTIONS</p>
      <SubHeading title="POWERING YOUR SUCCESS IN HUMAN RESOURCE MANAGEMENT"/>
      {/* <h1 className='app_header-h1'>INSPIRING THE NEW ERA OF WORK</h1> */}
      <p className='p__opensans' style={{margin: '1rem 0', textTransform: 'none'}}>
      The distance between you and your perfect employee just got smaller. Thank you for visiting us. With a wide range of services such as Manpower Sourcing, Management & Document services, WAFI HR Solutions is here to partner with you for your HR needs.<br/><br/>

Details like employee attitude, work environment, management style are all taken in thorough consideration to get a winning combination, both for the employer & the employee.
      </p>
    </div>

  </div>

  </>
  
);

export default Welcome;