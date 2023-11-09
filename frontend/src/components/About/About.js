import React from "react";

function AboutUs(){
    return(
      <div className='d-wmx1268 d-m-auto'>
        <div className="aboutus-page d-ta-center">
          <h1>We are Dialpad</h1>
        </div>
        <div className="aboutus-wrap d-d-flex d-ai-center d-jc-space-between d-py32">
          <div className="aboutus-img d-w50p">
            <img alt="Office interior" src="https://storage.googleapis.com/dialpad-cms.appspot.com/cms/transformed-images/storage_googleapis_com/dialpad-cms.appspot.com/cms/Education-industry-Dialpad-video-conferencing-UI.webp" />
          </div>
          <div class="team d-ta-center d-w50p">
            <h1>Meet the Team</h1>
            <div class="team-cards">
              <div class="card">
                {/* <div class="card-img">
                  <img alt="User 1" height="100px" width="200px" style-className="lozad pure-img zcs-image has-fallback-img"></img>
                </div> */}
                <div class="card-info">
                  <h2 class="card-name">Kamlesh Shankar</h2>
                  <p class="card-role">Director of QA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>        
    )
}

export default AboutUs
