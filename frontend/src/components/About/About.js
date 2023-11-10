import React from "react";

function AboutUs(){
    return(
      <div className='d-wmx1268 d-m-auto'>
        <div className="aboutus-page d-ta-center">
          <h1>We are Dialpad</h1>
        </div>
        <div className="aboutus-wrap d-d-flex d-jc-space-between d-py32">
          <div className="aboutus-img d-w50p">
            <img alt="Office interior" src="https://storage.googleapis.com/dialpad-cms.appspot.com/cms/transformed-images/storage_googleapis_com/dialpad-cms.appspot.com/cms/Education-industry-Dialpad-video-conferencing-UI.webp" />
          </div>
          <div class="team d-w40p">
            <h2 className="d-mb16 d-fs-300">Meet the Team</h2>
              <h3 className="d-mb8">Welcome to QA-Dialpad-Portal</h3>
              <p className="d-mb48">At QA Dialpad Portal, we are dedicated to delivering excellence in software quality assurance. Our platform is designed to streamline and enhance the testing process, ensuring that software meets the highest standards of performance, reliability, and user satisfaction.</p>
            <h2 className="d-mb16 d-fs-300">Our Mission</h2>
              <h3 className="d-mb8">Empowering Teams, Ensuring Quality</h3>
              <p className="d-mb8">Our mission is to create single stop solution for development and QA teams to execute components / workflow, view QA Team Achievements or execution results . We believe in ensuring the highest quality for every application, contributing to the success of our clients and partners.</p>
          </div>
        </div>
      </div>        
    )
}

export default AboutUs
