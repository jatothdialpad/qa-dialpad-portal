import React from "react";

function AboutUs() {
  return (
    <div className="aboutus-container d-wmx1268 d-m-auto">
      <div className="aboutus-team d-d-flex d-ai-center d-jc-space-between d-py32">
        <div className="team d-w50p">
          <h2>Meet the Team</h2>
          <div className="team-cards">
            <div className="card">
              <div className="card-img">
                <img
                  alt="Office interior"
                  src="https://storage.googleapis.com/dialpad-cms.appspot.com/cms/transformed-images/storage_googleapis_com/dialpad-cms.appspot.com/cms/Education-industry-Dialpad-video-conferencing-UI.webp"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="aboutus-content">
          <h1>What We Do</h1>
          <p>
            At Dialpad, we focus on delivering high-quality software through
            automated testing, ensuring comprehensive test coverage for our
            applications. Our team is committed to achieving excellence in quality
            assurance and automation.
          </p>
        </div>

        <div className="aboutus-content d-bc-magneta-200">
  <h1 className="aboutus-heading">Our USP</h1>
  <ul className="aboutus-list">
    <li className="aboutus-list-item">
      <strong>Test Coverage:</strong> We specialize in providing comprehensive test coverage. This includes tracking team-wise total test cases, automated test cases, and calculating the automated percentage. Our goal is to ensure that every aspect of your software is thoroughly tested and optimized for quality.
    </li>
    <li className="aboutus-list-item">
      <strong>Reports:</strong> Our focus on excellence extends to the generation of graphical automation reports. These reports offer you a visual representation of your software's performance. You can quickly assess the quality and efficiency of your software through these detailed reports.
    </li>
    <li className="aboutus-list-item">
      <strong>Achievements:</strong> Our team consistently delivers outstanding results and achievements. We celebrate our monthly and team-wise accomplishments. With our dedication to quality assurance and automation, we set high standards and consistently meet them.
    </li>
    <li className="aboutus-list-item">
      <strong>Execution:</strong> We offer an execution platform that allows you to seamlessly run your automation regression suites. Whether you need to execute tests in different CI/CD pipelines, such as LambdaTest or GitHub, our platform ensures a smooth and efficient process.
    </li>
  </ul>
</div>

      </div>
    </div>
  );
}

export default AboutUs;
