import React from 'react';

function execute() {
  
  return (
    <div className='d-wmx1268 d-m-auto'>
      <div className="dropdown_month d-mt12">
    <div className="d-ta-center">
      <div className="dropdown_platform d-mt12">
      <h4 className='platform'>
        <label> Select Platform: </label>
        <select>
          <option value="Android">Android</option>
          <option value="iOS">iOS</option>
          <option value="Web">Web</option>
        </select>
        </h4>
      </div>
      <div className="dropdown_platform d-mt12">
      <h4 className='platform'>
        <label> Select Project: </label>
        <select>
          <option value="dp">Dialpad</option>
          <option value="dpm">Dialpad Meetings</option>
          <option value="DX">Digital Experience</option>
          <option value="integrations">Integrations</option>
        </select>
        </h4>
      </div>
      <div className="dropdown_platform d-mt12">
      <h4 className='type'>
        <label> Select Type of Testing: </label>
        <select>
          <option value="regression">Regression</option>
          <option value="smoke">Smoke</option>
        </select>
        </h4>
      </div>
      <div className="button_getdetails d-mt12">
        <button className="d-btn d-btn--primary d-btn--sm">Execute</button>
      </div>
    </div>
    </div>
    </div>
   
  );
}

export default execute;
