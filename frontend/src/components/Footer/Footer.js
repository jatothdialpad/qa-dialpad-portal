import React from 'react'
import { Link } from 'react-router-dom'
import dialpadfooter from '../../svg/dialpad-flogo.svg'

function Footer() {
  return (
    <div className='d-p16 d-bgc-black-900 d-fc-white-400 footer'>
        <div className='d-wmx1268 d-m-auto d-d-flex d-jc-space-between d-w100p d-ai-center'>
            <div>
            <a href='./'><img src={dialpadfooter} alt='dialpad-logo' /></a>
            </div>
            <div>
                © 2023 DIALPAD, INC.
            </div>
            <div className='FooterNav d-d-flex d-ai-center d-jc-flex-end d-divide-x2 d-divide-white-400'>
                <div>
                    <Link to="/about" className="about d-px16">About</Link>
                </div>
                <div>
                    <Link to="/achievements" className="d-pl16">Achievements</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer