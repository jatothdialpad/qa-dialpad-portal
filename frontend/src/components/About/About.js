import React from "react";

function AboutUs(){
    return(
        <body>
        <div className="aboutus-page d-ta-center">
            <h2>We are Dialpad</h2> 
        </div>
        <div className="aboutus-img">
            <img alt="Office interior" height="980px" width="1000px" style-className="lozad pure-img zcs-image has-fallback-img" src="https://storage.googleapis.com/dialpad-cms.appspot.com/cms/Office-interior-about-us.jpg"></img>
        </div>
        <div>
            
        </div>
        <section class="team d-ta-center">
        <h1>Meet the Team</h1>
        <div class="team-cards">
            <div class="card">
                <div class="card-img">
                    <img alt="User 1" height="100px" width="200px" style-className="lozad pure-img zcs-image has-fallback-img"></img>
                </div>
                <div class="card-info">
                    <h2 class="card-name">Kamlesh Shankar</h2>
                    <p class="card-role">Director of QA</p>
                </div>
        </div>
        </div>
            </section>
        </body>

        
    )
}

export default AboutUs