import React from 'react'
import { images } from '../constants';

const AboutUs = () => {
  return (
    <>
    <section class="w3l-content-about py-5" id='ab'>
        <div class="container py-md-5 py-4">
            <img src={images.ab} alt="" class="img-fluid radius-image-full"/>
            <div class="row mt-sm-5 mt-4">
                <div class="col-lg-6 about-left-inner pr-lg-5">
                    <h3 class="title-main-2 font-weight-bold">INSPIRING THE NEW ERA OF WORK</h3>
                </div>
                <div class="col-lg-6 about-right-inner mt-lg-0 mt-4">
                    <p>As your lifelong career partner, we remain committed to working together with you as the world of work evolves. Our recruiting experts will continue to support you through your current challenges, while also helping with your longer-term planning. </p>
                    <p class="mt-3">As we all adapt in this new era of work, our advice and unique insights will help you to plan your next steps.</p>
                </div>
            </div>
        </div>
    </section>

<section class="w3l-about2 py-5 grey_bg">
<div class="container py-md-5 py-4">
    <div class="row align-items-center">
        <div class="col-lg-6 about-2-secs-right">
            <img src={images.ab2} alt="" class="img-fluid img-responsive mb-4"/>
  <h3 class="title-big">Our Mission</h3>
  <p class="my-3">To connect great organizations with even greater people. We strive to deliver what we promise, first time every time!</p>
            <ul>
                <li><span class="fas fa-check-circle icon-color" aria-hidden="true"></span><strong> Fun:</strong> We are passionate, we laugh lots and love what we do!</li>
                <li><span class="fas fa-check-circle icon-color" aria-hidden="true"></span><strong> Integrity:</strong> We adopt the highest ethical standards of our industry, and operate with transparency and trust.</li>
                <li><span class="fas fa-check-circle  icon-color" aria-hidden="true"></span><strong> Respect:</strong> We treat each other, our clients and candidates with mutual respect and sensitivity.</li>
            </ul>
  <img src={images.ab4} alt="" class="img-fluid img-responsive my-4"/>
            <p>Let our expertise guide you in the ever-changing world of work. Whether you're taking that next step in your career, building a high-performing team or retaining top talent, stay up-to-date on the latest hiring trends.
            </p>
        </div>
        <div class="col-lg-6 about-2-secs pl-lg-5 mb-lg-0 mb-4">
            
  <img src={images.ab3} alt="" class="img-fluid img-responsive mb-4"/>
  <h3 class="title-big">Our Vision</h3>
            <p>To be the leading partner that clients and candidates always choose to connect with.
            </p>
  
        </div>
    </div>
</div>
</section>
</>
  )
}

export default AboutUs