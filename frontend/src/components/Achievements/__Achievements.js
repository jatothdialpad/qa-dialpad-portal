import React from 'react';

function Achievements() {

  return (
    <div class="customer-stories-cards d-wmx1268 d-m-auto">
      <div class="customer-stories-cards--inner d-d-flex">
        <div class="customer-stories-cards__intro d-w25p">
            <h2 class="customer-stories-cards__title d-headline54">Achievements</h2>
        </div>
        <div class="customer-stories-cards__cards d-w75p d-d-grid d-gg16 d-g-cols3 d-ac-center">
          <div class="card-details d-ta-center">
            <div className='statName'>Total tests</div>
            <div className='stat d-headline48'>90%</div>
          </div>
          <div class="card-details d-ta-center">
            <div className='stat d-headline48'>50%</div>
            <div className='statName'>Web Automated</div>
          </div>
          <div class="card-details d-ta-center">
          <div className='stat d-headline48'>50%</div>
            <div className='statName'>Andriod Automated</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
