import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion d-bb d-bbw1 d-p">
      <div className="accordion-header d-py16 d-c-pointer" onClick={toggleAccordion}>
        <h3 className='d-fs-400'>{title}</h3>
        <span className={isOpen ?  'active' : ""}></span>
      </div>
      {isOpen && <div className="accordion-content d-mb16 d-px16">{content}</div>}
    </div>
  );
};

export default Accordion;
